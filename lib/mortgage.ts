// Import reusable mortgage calculation primitives
import {
  toMonthlyRate as _toMonthlyRate,
  calculateLoanAmount as _calculateLoanAmount,
  resolveDownPayment as _resolveDownPayment,
  _calculateLTV,
  _calculateDownPaymentPercent,
  binarySearchAffordablePrice as _binarySearchAffordablePrice,
  resolveLoanDetails as _resolveLoanDetails,
  runAmortizationLoop as _runAmortizationLoop,
  calculateMonthlyPI,
  calculateMonthlyPMI,
  calculateTotalInterest,
  calculateClosingCash,
  calculatePayoffDate,
  calculatePropertyTax,
  calculateLTV,
  isPMIRequired,
  downPaymentFromPercent,
  downPaymentPercent,
  syncLoanValues,
  loanAmountFromDownPercent,
  getConformingLimit,
} from './mortgage-calculations';

// Public Interfaces
export interface MortgageInput {
  homeValue: number;
  downPayment: number;
  interestRate: number;
  loanTermYears: number;
  propertyTaxRate: number;
  insuranceAnnual: number;
  hoaMonthly: number;
  pmiRate: number;
}
export interface AmortizationEntry {
  paymentNumber: number;
  paymentAmount: number;
  principalPaid: number;
  interestPaid: number;
  extraPaid: number;
  pmiPaid: number;
  remainingBalance: number;
  totalInterestPaid: number;
  totalPrincipalPaid: number;
  isPmiActive: boolean;
}
export interface AmortizationSchedule {
  entries: AmortizationEntry[];
  totalInterest: number;
  totalPayments: number;
  yearsToPayOff: number;
  monthsToPayOff: number;
  savingsVsRegular: number;
}
export interface AffordabilityInput {
  annualIncome: number;
  monthlyDebts: number;
  downPayment: number;
  interestRate: number;
  loanTermYears: number;
  propertyTaxRate: number;
  insuranceAnnual: number;
  hoaMonthly: number;
}
export interface AffordabilityResult {
  affordableHomePrice: number;
  loanAmount: number;
  monthlyPAndI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyHOA: number;
  monthlyPMI: number;
  totalMonthlyPayment: number;
  frontEndRatio: number;
  backEndRatio: number;
  riskLevel: 'Low' | 'Moderate' | 'High';
  maxBudgetRecommended: number;
}
export interface RefinanceInput {
  originalLoanAmount: number;
  originalTermYears: number;
  currentRate: number;
  monthsPaid: number;
  newRate: number;
  newTermYears: number;
  refinanceCosts: number;
}
export interface RefinanceResult {
  currentMonthlyPI: number;
  newMonthlyPI: number;
  monthlySavings: number;
  remainingBalance: number;
  newLoanAmount: number;
  lifetimeCurrentInterest: number;
  lifetimeNewInterest: number;
  lifetimeSavings: number;
  breakEvenMonths: number;
}

// Calculates monthly P&I, taxes, insurance, HOA, and PMI
export function calculateMortgageDetails(input: MortgageInput) {
  const { homeValue, downPayment, interestRate, loanTermYears, propertyTaxRate, insuranceAnnual, hoaMonthly, pmiRate } = input;
  const loanAmount = _calculateLoanAmount(homeValue, downPayment);
  const monthlyPAndI = calculateMonthlyPI(loanAmount, interestRate, loanTermYears);
  const monthlyPropertyTax = (homeValue * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = insuranceAnnual / 12;
  const downPaymentPercent = _calculateDownPaymentPercent(downPayment, homeValue);
  const isPmiRequired = downPaymentPercent < 20 && loanAmount > 0;
  const monthlyPMI = isPmiRequired ? calculateMonthlyPMI(loanAmount, pmiRate) : 0;
  const totalMonthlyPayment = monthlyPAndI + monthlyPropertyTax + monthlyInsurance + hoaMonthly + monthlyPMI;
  return {
    loanAmount,
    monthlyPAndI,
    monthlyPropertyTax,
    monthlyInsurance,
    hoaMonthly,
    monthlyPMI,
    totalMonthlyPayment,
    isPmiRequired,
    downPaymentPercent,
  };
}

// Generates an amortization schedule with optional extra payments
export function calculateAmortizationSchedule(
  input: MortgageInput,
  extraMonthly: number = 0,
  extraAnnual: number = 0,
  extraOneTime: { amount: number; month: number }[] = []
): AmortizationSchedule {
  const { homeValue, downPayment, interestRate, loanTermYears, pmiRate } = input;
  const loanAmount = _calculateLoanAmount(homeValue, downPayment);
  const monthlyRate = _toMonthlyRate(interestRate);
  const totalMonthsScheduled = loanTermYears * 12;
  const regularMonthlyPI = calculateMonthlyPI(loanAmount, interestRate, loanTermYears);
  const entries: AmortizationEntry[] = [];
  let currentBalance = loanAmount;
  let totalInterestPaid = 0;
  let totalPrincipalPaid = 0;
  let totalPaymentsPaid = 0;

  for (let month = 1; month <= totalMonthsScheduled; month++) {
    if (currentBalance <= 0) break;

    // Calculate Interest
    const interestForMonth = currentBalance * monthlyRate;

    // Base payment is regularMonthlyPI or remaining balance + interest
    let basePI = Math.min(regularMonthlyPI, currentBalance + interestForMonth);
    let principalForMonth = Math.max(0, basePI - interestForMonth);

    // Extra payments logic
    let extraPayment = extraMonthly;

    // Add annual extra payment in month 12, 24, 36, etc.
    if (month % 12 === 0) {
      extraPayment += extraAnnual;
    }

    // Add one-time payments
    const matchedOneTime = extraOneTime.find((p) => p.month === month);
    if (matchedOneTime) {
      extraPayment += matchedOneTime.amount;
    }

    // Cap extra payment to remaining balance
    extraPayment = Math.min(extraPayment, currentBalance - principalForMonth);
    if (extraPayment < 0) extraPayment = 0;

    // PMI calculation (active until balance drops below 80% of original home value)
    const isPmiActive = currentBalance > homeValue * 0.8 && (downPayment / homeValue) < 0.2;
    const pmiForMonth = isPmiActive ? (loanAmount * (pmiRate / 100)) / 12 : 0;

    const actualPrincipalPaid = principalForMonth + extraPayment;
    currentBalance = Math.max(0, currentBalance - actualPrincipalPaid);

    totalInterestPaid += interestForMonth;
    totalPrincipalPaid += actualPrincipalPaid;

    const totalPaidThisMonth = basePI + extraPayment + pmiForMonth;
    totalPaymentsPaid += totalPaidThisMonth;

    entries.push({
      paymentNumber: month,
      paymentAmount: totalPaidThisMonth,
      principalPaid: actualPrincipalPaid,
      interestPaid: interestForMonth,
      extraPaid: extraPayment,
      pmiPaid: pmiForMonth,
      remainingBalance: currentBalance,
      totalInterestPaid,
      totalPrincipalPaid,
      isPmiActive,
    });
  }

  // Calculate schedule without any extra payments for comparison
  let regularTotalInterest = 0;
  let regBalance = loanAmount;
  for (let month = 1; month <= totalMonthsScheduled; month++) {
    if (regBalance <= 0) break;
    const interest = regBalance * monthlyRate;
    let basePI = Math.min(regularMonthlyPI, regBalance + interest);
    const principal = basePI - interest;
    regBalance = Math.max(0, regBalance - principal);
    regularTotalInterest += interest;
  }

  const monthsToPayOff = entries.length;
  const yearsToPayOff = parseFloat((monthsToPayOff / 12).toFixed(1));
  const savingsVsRegular = Math.max(0, regularTotalInterest - totalInterestPaid);

  return {
    entries,
    totalInterest: totalInterestPaid,
    totalPayments: totalPaymentsPaid,
    monthsToPayOff,
    yearsToPayOff,
    savingsVsRegular,
  };
}

/**
 * Calculates affordability based on front-end and back-end debt-to-income (DTI) ratios.
 * Front-end limit (usually 28% of monthly gross income)
 * Back-end limit (usually 36% of monthly gross income, including debt)
 */
export function calculateHomeAffordability(input: AffordabilityInput): AffordabilityResult {
  const {
    annualIncome,
    monthlyDebts,
    downPayment,
    interestRate,
    loanTermYears,
    propertyTaxRate,
    insuranceAnnual,
    hoaMonthly,
  } = input;

  const monthlyGrossIncome = annualIncome / 12;

  // Standard limit guidelines:
  // Conservative (Front: 28%, Back: 36%)
  // Moderate (Front: 32%, Back: 43%)
  // Aggressive (Front: 38%, Back: 50%)

  // Let's design the target maximum monthly housing budget using conservative 28% of gross, or 36% minus monthly debts.
  const frontEndLimit = monthlyGrossIncome * 0.28;
  const backEndLimit = Math.max(0, monthlyGrossIncome * 0.36 - monthlyDebts);

  // The conservative maximum monthly payment is the lesser of front-end or back-end limits
  const targetMonthlyPayment = Math.min(frontEndLimit, backEndLimit);

  // We need to work backwards from targetMonthlyPayment to find the maximum home purchase price.
  // P = L + D (Home Price = Loan + Downpayment)
  // Monthly Payment = PAndI + Tax + Insurance + HOA + PMI
  // PAndI = L * [r(1+r)^n] / [(1+r)^n - 1] = L * k (where k is the loan factor)
  // Tax = P * taxRate/12/100
  // Insurance = insuranceAnnual/12
  // HOA = hoaMonthly
  // PMI = L * pmiRate/12/100 (if L/(L+D) > 0.8)

  const r = interestRate / 12 / 100;
  const n = loanTermYears * 12;
  const k = r > 0 ? (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 1 / n;

  const taxFactor = propertyTaxRate / 12 / 100; // Monthly property tax rate on Home Price
  const monthlyIns = insuranceAnnual / 12;

  // Let's run an optimization or search-based approach to find the exact affordable price
  // because PMI is conditional and down payment can be fixed, which shifts the ratios.
  let lowHomePrice = downPayment;
  let highHomePrice = annualIncome * 10; // reasonable upper limit for search
  let affordableHomePrice = downPayment;

  for (let iter = 0; iter < 40; iter++) {
    const midPrice = (lowHomePrice + highHomePrice) / 2;
    const loan = Math.max(0, midPrice - downPayment);

    // Monthly P&I
    const pAndI = loan * k;
    const tax = midPrice * taxFactor;

    // PMI estimation (assuming 0.7% if down payment < 20%)
    const dpPercent = midPrice > 0 ? (downPayment / midPrice) * 100 : 100;
    const pmi = dpPercent < 20 && loan > 0 ? (loan * 0.007) / 12 : 0;

    const totalHousingCost = pAndI + tax + monthlyIns + hoaMonthly + pmi;

    if (totalHousingCost < targetMonthlyPayment) {
      affordableHomePrice = midPrice;
      lowHomePrice = midPrice; // try to find a higher affordable price
    } else {
      highHomePrice = midPrice; // lower the price to fit budget
    }
  }

  // Calculate stats for the selected home price
  const finalPrice = Math.round(affordableHomePrice);
  const loanAmount = Math.max(0, finalPrice - downPayment);
  const monthlyPAndI = Math.round(loanAmount * k);
  const monthlyTax = Math.round(finalPrice * taxFactor);
  const monthlyInsurance = Math.round(monthlyIns);
  const finalDpPercent = finalPrice > 0 ? (downPayment / finalPrice) * 100 : 100;
  const monthlyPMI = finalDpPercent < 20 && loanAmount > 0 ? Math.round((loanAmount * 0.007) / 12) : 0;
  const totalMonthlyPayment = monthlyPAndI + monthlyTax + monthlyInsurance + hoaMonthly + monthlyPMI;

  const frontEndRatio = parseFloat(((totalMonthlyPayment / monthlyGrossIncome) * 100).toFixed(1));
  const backEndRatio = parseFloat((((totalMonthlyPayment + monthlyDebts) / monthlyGrossIncome) * 100).toFixed(1));

  let riskLevel: 'Low' | 'Moderate' | 'High' = 'Low';
  if (backEndRatio > 43 || frontEndRatio > 33) {
    riskLevel = 'High';
  } else if (backEndRatio > 36 || frontEndRatio > 28) {
    riskLevel = 'Moderate';
  }

  // Let's also suggest an aggressive (maximum) budget
  const maxBudgetMonthly = Math.min(monthlyGrossIncome * 0.38, Math.max(0, monthlyGrossIncome * 0.45 - monthlyDebts));
  let maxHomePrice = downPayment;
  let lowMax = downPayment;
  let highMax = annualIncome * 15;

  for (let iter = 0; iter < 40; iter++) {
    const midPrice = (lowMax + highMax) / 2;
    const loan = Math.max(0, midPrice - downPayment);
    const pAndI = loan * k;
    const tax = midPrice * taxFactor;
    const dpPercent = midPrice > 0 ? (downPayment / midPrice) * 100 : 100;
    const pmi = dpPercent < 20 && loan > 0 ? (loan * 0.007) / 12 : 0;
    const totalCost = pAndI + tax + monthlyIns + hoaMonthly + pmi;

    if (totalCost < maxBudgetMonthly) {
      maxHomePrice = midPrice;
      lowMax = midPrice;
    } else {
      highMax = midPrice;
    }
  }

  return {
    affordableHomePrice: finalPrice,
    loanAmount,
    monthlyPAndI,
    monthlyTax,
    monthlyInsurance,
    monthlyHOA: hoaMonthly,
    monthlyPMI,
    totalMonthlyPayment,
    frontEndRatio,
    backEndRatio,
    riskLevel,
    maxBudgetRecommended: Math.round(maxHomePrice),
  };
}

// Calculates refinancing break-even point and savings
export function calculateRefinance(input: RefinanceInput): RefinanceResult {
  const { originalLoanAmount, originalTermYears, currentRate, monthsPaid, newRate, newTermYears, refinanceCosts } = input;
  
  // Input validation
  if (originalLoanAmount <= 0 || !isFinite(originalLoanAmount)) {
    throw new Error('Original loan amount must be greater than 0');
  }
  if (originalTermYears <= 0 || !isFinite(originalTermYears)) {
    throw new Error('Original term must be greater than 0');
  }
  if (currentRate < 0 || !isFinite(currentRate)) {
    throw new Error('Current rate must be >= 0');
  }
  if (monthsPaid < 0 || !isFinite(monthsPaid)) {
    throw new Error('Months paid cannot be negative');
  }
  if (monthsPaid > originalTermYears * 12) {
    throw new Error('Months paid cannot exceed original loan term');
  }
  if (newRate < 0 || !isFinite(newRate)) {
    throw new Error('New rate must be >= 0');
  }
  if (newTermYears <= 0 || !isFinite(newTermYears)) {
    throw new Error('New term must be greater than 0');
  }
  if (refinanceCosts < 0 || !isFinite(refinanceCosts)) {
    throw new Error('Closing costs must be >= 0');
  }

  // 1. Calculate the ORIGINAL current monthly payment (P&I only)
  const currentMonthlyPI = calculateMonthlyPI(originalLoanAmount, currentRate, originalTermYears);
  
  // 2. Calculate the remaining balance after monthsPaid payments
  let remainingBalance: number;
  const monthlyRate = _toMonthlyRate(currentRate);
  const totalPayments = originalTermYears * 12;
  
  if (currentRate === 0) {
    // Zero interest edge case
    remainingBalance = originalLoanAmount - (currentMonthlyPI * monthsPaid);
  } else {
    // Standard remaining balance formula: B = P(1+r)^k - M[((1+r)^k - 1) / r]
    const powerTerm = Math.pow(1 + monthlyRate, monthsPaid);
    remainingBalance = originalLoanAmount * powerTerm - currentMonthlyPI * ((powerTerm - 1) / monthlyRate);
  }
  
  // Ensure remaining balance is not negative
  remainingBalance = Math.max(0, remainingBalance);
  
  // If all payments made, remaining balance should be 0
  if (monthsPaid >= totalPayments) {
    remainingBalance = 0;
  }
  
  // 3. Calculate new loan amount (remaining balance + closing costs)
  const newLoanAmount = remainingBalance + refinanceCosts;
  
  // 4. Calculate new monthly payment
  const newMonthlyPI = calculateMonthlyPI(newLoanAmount, newRate, newTermYears);
  
  // 5. Calculate monthly savings
  const monthlySavings = currentMonthlyPI - newMonthlyPI;
  
  // 6. Calculate break-even point
  let breakEvenMonths: number;
  if (monthlySavings > 0) {
    breakEvenMonths = refinanceCosts / monthlySavings;
  } else {
    breakEvenMonths = -1; // No break-even if no savings
  }
  
  // 7. Calculate remaining current interest (interest left to pay on current mortgage)
  const remainingPayments = totalPayments - monthsPaid;
  const remainingCurrentPayments = currentMonthlyPI * remainingPayments;
  const lifetimeCurrentInterest = remainingCurrentPayments - remainingBalance;
  
  // 8. Calculate new loan total interest
  const newTotalPayments = newMonthlyPI * newTermYears * 12;
  const lifetimeNewInterest = newTotalPayments - newLoanAmount;
  
  // 9. Calculate net interest savings
  const lifetimeSavings = lifetimeCurrentInterest - lifetimeNewInterest;
  
  return {
    currentMonthlyPI,
    newMonthlyPI,
    monthlySavings,
    remainingBalance,
    newLoanAmount,
    lifetimeCurrentInterest,
    lifetimeNewInterest,
    lifetimeSavings,
    breakEvenMonths,
  };
}

// Interface for yearly grouped amortization data
export interface YearlyAmortizationEntry {
  year: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

// Re-export primitive functions for backward compatibility
export { calculateMonthlyPI, calculateMonthlyPMI, calculateTotalInterest, calculateClosingCash, calculatePayoffDate, calculatePropertyTax, calculateLTV, isPMIRequired, downPaymentFromPercent, downPaymentPercent, syncLoanValues, loanAmountFromDownPercent, getConformingLimit };

// Generates amortization schedule grouped by year
export function generateAmortizationSchedule(
  loanAmount: number,
  annualRatePercent: number,
  termYears: number
): YearlyAmortizationEntry[] {
  if (loanAmount <= 0 || termYears <= 0) return [];
  const monthlyRate = _toMonthlyRate(annualRatePercent);
  const monthlyPI = calculateMonthlyPI(loanAmount, annualRatePercent, termYears);

  let currentBalance = loanAmount;
  const yearlyData: YearlyAmortizationEntry[] = [];

  for (let year = 1; year <= termYears; year++) {
    let yearPrincipal = 0;
    let yearInterest = 0;

    for (let month = 1; month <= 12; month++) {
      if (currentBalance <= 0) break;

      const interestPayment = currentBalance * monthlyRate;
      const principalPayment = Math.min(monthlyPI - interestPayment, currentBalance);

      yearPrincipal += principalPayment;
      yearInterest += interestPayment;
      currentBalance = Math.max(0, currentBalance - principalPayment);
    }

    yearlyData.push({
      year,
      principalPaid: Math.round(yearPrincipal),
      interestPaid: Math.round(yearInterest),
      endingBalance: Math.round(currentBalance),
    });

    if (currentBalance <= 0) break;
  }

  return yearlyData;
}

// Calculates biweekly payment amount and savings
export function calculateBiweeklyPayment(
  loanAmount: number,
  annualRate: number,
  termYears: number
): {
  biweeklyPayment: number;
  totalPayments: number;
  totalInterest: number;
  monthsToPayoff: number;
  savingsVsMonthly: number;
} {
  const monthlyPayment = calculateMonthlyPI(loanAmount, annualRate, termYears);
  const biweeklyPayment = monthlyPayment / 2;

  const biweeklyRate = annualRate / 26 / 100;
  let balance = loanAmount;
  let totalInterest = 0;
  let paymentCount = 0;

  while (balance > 0 && paymentCount < termYears * 26 * 2) {
    const interest = balance * biweeklyRate;
    const principal = Math.min(biweeklyPayment - interest, balance);

    totalInterest += interest;
    balance -= principal;
    paymentCount++;

    if (balance < 0.01) break;
  }

  const monthsToPayoff = paymentCount / 2.1667;
  const monthlyTotalInterest = calculateTotalInterest(monthlyPayment, termYears, loanAmount);

  return {
    biweeklyPayment,
    totalPayments: paymentCount,
    totalInterest,
    monthsToPayoff,
    savingsVsMonthly: monthlyTotalInterest - totalInterest
  };
}

// Generates detailed monthly amortization schedule with extra payments
export function generateDetailedAmortizationSchedule(
  loanAmount: number,
  annualRate: number,
  termYears: number,
  extraMonthly: number = 0,
  extraAnnual: number = 0,
  oneTimePayments: { month: number; amount: number }[] = []
): AmortizationSchedule {
  if (loanAmount <= 0 || termYears <= 0) {
    return {
      entries: [],
      totalInterest: 0,
      totalPayments: 0,
      yearsToPayOff: 0,
      monthsToPayOff: 0,
      savingsVsRegular: 0
    };
  }

  const monthlyRate = _toMonthlyRate(annualRate);
  const monthlyPayment = calculateMonthlyPI(loanAmount, annualRate, termYears);
  const homeValue = loanAmount / 0.8;

  let balance = loanAmount;
  let totalInterest = 0;
  let totalPrincipal = 0;
  const entries: AmortizationEntry[] = [];
  let paymentNumber = 0;
  const maxPayments = termYears * 12 * 2;

  while (balance > 0 && paymentNumber < maxPayments) {
    paymentNumber++;

    const interestPayment = balance * monthlyRate;
    const principalPayment = Math.min(monthlyPayment - interestPayment, balance);

    let extraPaid = extraMonthly;
    if (paymentNumber % 12 === 0 && extraAnnual > 0) {
      extraPaid += extraAnnual;
    }

    const oneTime = oneTimePayments.find(p => p.month === paymentNumber);
    if (oneTime) extraPaid += oneTime.amount;

    const totalPrincipalThisMonth = Math.min(principalPayment + extraPaid, balance);
    balance = Math.max(0, balance - totalPrincipalThisMonth);

    const loanToValue = (balance / homeValue) * 100;
    const isPmiActive = loanToValue > 80;
    const pmiPayment = isPmiActive ? (balance * 0.007) / 12 : 0;

    totalInterest += interestPayment;
    totalPrincipal += principalPayment;

    entries.push({
      paymentNumber,
      paymentAmount: monthlyPayment,
      principalPaid: principalPayment,
      interestPaid: interestPayment,
      extraPaid,
      pmiPaid: pmiPayment,
      remainingBalance: balance,
      totalInterestPaid: totalInterest,
      totalPrincipalPaid: totalPrincipal,
      isPmiActive
    });

    if (balance < 0.01) break;
  }

  const regularInterest = calculateTotalInterest(monthlyPayment, termYears, loanAmount);

  return {
    entries,
    totalInterest,
    totalPayments: entries.length,
    yearsToPayOff: entries.length / 12,
    monthsToPayOff: entries.length,
    savingsVsRegular: regularInterest - totalInterest
  };
}

// Groups monthly amortization entries by year
export function groupAmortizationByYear(schedule: AmortizationSchedule): YearlyAmortizationEntry[] {
  const yearlyData: YearlyAmortizationEntry[] = [];

  for (let year = 1; year <= Math.ceil(schedule.entries.length / 12); year++) {
    const startIdx = (year - 1) * 12;
    const endIdx = Math.min(year * 12, schedule.entries.length);
    const yearEntries = schedule.entries.slice(startIdx, endIdx);

    if (yearEntries.length === 0) break;

    const principalPaid = yearEntries.reduce((sum, e) => sum + e.principalPaid + e.extraPaid, 0);
    const interestPaid = yearEntries.reduce((sum, e) => sum + e.interestPaid, 0);
    const endingBalance = yearEntries[yearEntries.length - 1].remainingBalance;

    yearlyData.push({
      year,
      principalPaid: Math.round(principalPaid),
      interestPaid: Math.round(interestPaid),
      endingBalance: Math.round(endingBalance)
    });
  }

  return yearlyData;
}

export interface SecondMortgageScenario {
  name: string;
  loanAmount: number;
  rate: number;
  termYears: number;
  points: number;
  closingCosts: number;
}
export interface SecondMortgageInput {
  homeValue: number;
  existingMortgageBalance: number;
  scenario1: SecondMortgageScenario;
  scenario2: SecondMortgageScenario;
  scenario3: SecondMortgageScenario;
}
export interface SecondMortgageScenarioResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPMICost: number;
  totalCost: number;
  ltvPercent: number;
  hasPMI: boolean;
}
export interface SecondMortgageResult {
  scenario1Result: SecondMortgageScenarioResult;
  scenario2Result: SecondMortgageScenarioResult;
  scenario3Result: SecondMortgageScenarioResult;
  recommendedScenario: number;
}
export function calculateSecondMortgage(input: SecondMortgageInput): SecondMortgageResult {
  const calculateScenario = (scenario: SecondMortgageScenario, homeValue: number): SecondMortgageScenarioResult => {
    const { loanAmount, rate, termYears, points, closingCosts } = scenario;
    const monthlyPayment = calculateMonthlyPI(loanAmount, rate, termYears);
    const numPayments = termYears * 12;
    const totalPayments = monthlyPayment * numPayments;
    const totalInterest = totalPayments - loanAmount;
    const ltvPercent = _calculateLTV(loanAmount, homeValue);
    const hasPMI = ltvPercent > 80;
    const monthlyPMI = hasPMI ? calculateMonthlyPMI(loanAmount, 0.7) : 0;

    // Assume PMI drops off at 78% LTV (simplified)
    const monthsWithPMI = hasPMI ? Math.min(numPayments, Math.floor(numPayments * 0.3)) : 0;
    const totalPMICost = monthlyPMI * monthsWithPMI;

    const upfrontCosts = closingCosts + (loanAmount * (points / 100));
    const totalCost = totalInterest + totalPMICost + upfrontCosts;

    return {
      monthlyPayment: monthlyPayment + monthlyPMI,
      totalInterest,
      totalPMICost,
      totalCost,
      ltvPercent,
      hasPMI,
    };
  };

  const scenario1Result = calculateScenario(input.scenario1, input.homeValue);
  const scenario2Result = calculateScenario(input.scenario2, input.homeValue);
  const scenario3Result = calculateScenario(input.scenario3, input.homeValue);

  // Recommend scenario with lowest total cost
  let recommendedScenario = 1;
  let lowestCost = scenario1Result.totalCost;
  if (scenario2Result.totalCost < lowestCost) {
    recommendedScenario = 2;
    lowestCost = scenario2Result.totalCost;
  }
  if (scenario3Result.totalCost < lowestCost) {
    recommendedScenario = 3;
  }

  return {
    scenario1Result,
    scenario2Result,
    scenario3Result,
    recommendedScenario,
  };
}

export interface HelocDebt {
  name: string;
  balance: number;
  monthlyPayment: number;
  rate: number;
}
export interface HelocInput {
  homeValue: number;
  existingMortgageBalance: number;
  helocCreditLimit: number;
  interestRate: number;
  drawPeriodYears: number;
  repaymentPeriodYears: number;
  closingCosts: number;
  federalTaxRate: number;
  existingDebts: HelocDebt[];
  monthlyIncome: number;
}
export interface HelocResult {
  homeEquity: number;                      // Home Value - Existing Mortgage
  maxHelocAvailability: number;            // (Home Value × 85%) - Existing Mortgage
  actualAvailableHeloc: number;            // MIN(maxHelocAvailability, HELOC Limit)
  availableEquity: number;                 // Backward compatibility (= actualAvailableHeloc)
  amountUsedForDebtConsolidation: number;  // Sum of debts being paid off
  totalExistingDebt: number;
  totalMonthlyDebtPayments: number;
  helocMonthlyPaymentDrawPeriod: number;
  helocMonthlyPaymentRepaymentPeriod: number;
  dtiBeforeHeloc: number | null;           // null if no income provided
  dtiAfterHeloc: number | null;            // null if no income provided
  consolidatedPayment: number;
  monthlySavings: number;
  interestDeductionBenefit: number;
}
export function calculateHeloc(input: HelocInput): HelocResult {
  const {
    homeValue, existingMortgageBalance, helocCreditLimit, interestRate,
    drawPeriodYears, repaymentPeriodYears, closingCosts, federalTaxRate,
    existingDebts, monthlyIncome,
  } = input;

  // Validate inputs to prevent NaN/Infinity
  const validHomeValue = Math.max(0, homeValue || 0);
  const validExistingMortgage = Math.max(0, existingMortgageBalance || 0);
  const validHelocLimit = Math.max(0, helocCreditLimit || 0);
  const validInterestRate = Math.max(0, interestRate || 0);
  const validMonthlyIncome = Math.max(0, monthlyIncome || 0);

  // 1. Calculate Home Equity (distinct from HELOC availability)
  const homeEquity = Math.max(0, validHomeValue - validExistingMortgage);

  // 2. Calculate Maximum HELOC Availability (85% CLTV)
  const maxHelocAvailability = Math.max(0, (validHomeValue * 0.85) - validExistingMortgage);

  // 3. Calculate Actual Available HELOC (capped by credit limit)
  const actualAvailableHeloc = Math.min(maxHelocAvailability, validHelocLimit);

  // For backward compatibility, keep availableEquity
  const availableEquity = actualAvailableHeloc;

  // Calculate existing debt totals
  const totalExistingDebt = existingDebts.reduce((sum, debt) => sum + Math.max(0, debt.balance || 0), 0);
  const totalMonthlyDebtPayments = existingDebts.reduce((sum, debt) => sum + Math.max(0, debt.monthlyPayment || 0), 0);

  // 4. Calculate amount used for debt consolidation
  const amountUsedForDebtConsolidation = totalExistingDebt;
  const amountDrawn = Math.min(amountUsedForDebtConsolidation, actualAvailableHeloc);

  // 5. Draw Period Payment (interest-only on amount drawn)
  const monthlyRate = _toMonthlyRate(validInterestRate);
  const helocMonthlyPaymentDrawPeriod = amountDrawn * monthlyRate;

  // 6. Repayment Period Payment (amortized on amount drawn)
  const helocMonthlyPaymentRepaymentPeriod = amountDrawn > 0 && validInterestRate > 0
    ? calculateMonthlyPI(amountDrawn, validInterestRate, repaymentPeriodYears)
    : amountDrawn > 0 
      ? amountDrawn / (repaymentPeriodYears * 12)  // No interest case
      : 0;

  // 7. Monthly Savings (compare existing debt payments vs HELOC repayment payment)
  const consolidatedPayment = helocMonthlyPaymentRepaymentPeriod;
  const monthlySavings = Math.max(0, totalMonthlyDebtPayments - consolidatedPayment);

  // 8. DTI calculations (null if no income)
  const dtiBeforeHeloc = validMonthlyIncome > 0 
    ? (totalMonthlyDebtPayments / validMonthlyIncome) * 100 
    : null;
  
  const dtiAfterHeloc = validMonthlyIncome > 0 
    ? (consolidatedPayment / validMonthlyIncome) * 100 
    : null;

  // Tax benefit calculation
  const annualInterest = helocMonthlyPaymentDrawPeriod * 12;
  const interestDeductionBenefit = (annualInterest * (federalTaxRate / 100)) / 12;

  return {
    homeEquity,
    maxHelocAvailability,
    actualAvailableHeloc,
    availableEquity,
    amountUsedForDebtConsolidation,
    totalExistingDebt,
    totalMonthlyDebtPayments,
    helocMonthlyPaymentDrawPeriod,
    helocMonthlyPaymentRepaymentPeriod,
    dtiBeforeHeloc,
    dtiAfterHeloc,
    consolidatedPayment,
    monthlySavings,
    interestDeductionBenefit,
  };
}



// Real APR Calculator
export interface RealAPRInput {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTermYears: number;
  discountPoints: number;      // % of loan amount
  originationFees: number;      // % of loan amount
  otherClosingCosts: number;    // $ amount
}
export interface RealAPRResult {
  loanAmount: number;
  nominalRate: number;
  realAPR: number;
  aprDifference: number;
  totalFinanceCharges: number;
  monthlyPayment: number;
  totalPaidOverLife: number;
  totalCostBreakdown: {
    discountPointsCost: number;
    originationFeesCost: number;
    otherClosingCosts: number;
    totalUpfrontCosts: number;
  };
}
export function calculateRealAPR(input: RealAPRInput): RealAPRResult {
  const { homePrice, downPayment, interestRate, loanTermYears, discountPoints, originationFees, otherClosingCosts } = input;
  const loanAmount = _calculateLoanAmount(homePrice, downPayment);
  const numPayments = loanTermYears * 12;

  // Calculate monthly payment at nominal rate
  const monthlyPayment = calculateMonthlyPI(loanAmount, interestRate, loanTermYears);

  // Calculate total upfront costs
  const discountPointsCost = (loanAmount * discountPoints) / 100;
  const originationFeesCost = (loanAmount * originationFees) / 100;
  const totalUpfrontCosts = discountPointsCost + originationFeesCost + otherClosingCosts;

  // Effective loan amount (what borrower actually receives)
  const effectiveLoanAmount = loanAmount - totalUpfrontCosts;

  // Calculate APR using Newton's method
  let apr = interestRate / 100;
  const tolerance = 0.0000001;
  const maxIterations = 100;

  for (let i = 0; i < maxIterations; i++) {
    const monthlyAPR = apr / 12;
    const presentValue = monthlyPayment * ((1 - Math.pow(1 + monthlyAPR, -numPayments)) / monthlyAPR);
    const error = presentValue - effectiveLoanAmount;

    if (Math.abs(error) < tolerance) break;

    const delta = 0.0001;
    const monthlyAPRDelta = (apr + delta) / 12;
    const presentValueDelta = monthlyPayment * ((1 - Math.pow(1 + monthlyAPRDelta, -numPayments)) / monthlyAPRDelta);
    const derivative = (presentValueDelta - presentValue) / delta;

    apr = apr - error / derivative;
  }

  const realAPR = apr * 100;
  const aprDifference = realAPR - interestRate;
  const totalPaidOverLife = monthlyPayment * numPayments;
  const totalFinanceCharges = totalPaidOverLife - loanAmount + totalUpfrontCosts;

  return {
    loanAmount,
    nominalRate: interestRate,
    realAPR: Math.max(0, realAPR),
    aprDifference,
    totalFinanceCharges,
    monthlyPayment,
    totalPaidOverLife,
    totalCostBreakdown: {
      discountPointsCost,
      originationFeesCost,
      otherClosingCosts,
      totalUpfrontCosts,
    },
  };
}

// FHA Loan Calculator
export interface FHALoanInput {
  contractSalesPrice: number;
  appraisedValue: number;
  fhaDownPaymentPercent: number;
  upfrontMIPRate: number;
  annualMIPRate: number;
  interestRate: number;
  loanTermYears: number;
  borrowerPaidClosingCosts: number;
  prepaidExpenses: number;
}
export interface FHALoanResult {
  maxFHALoanAmount: number;
  baseLoanAmount: number;
  upfrontMIP: number;
  totalLoanAmount: number;
  minRequiredDownPayment: number;
  actualDownPayment: number;
  downPaymentPercent: number;
  monthlyPI: number;
  monthlyMIP: number;
  totalMonthlyPayment: number;
  estimatedCashToClose: number;
  isFHAEligible: boolean;
  warnings: string[];
}
export function calculateFHA(input: FHALoanInput): FHALoanResult {
  const {
    contractSalesPrice, appraisedValue, fhaDownPaymentPercent, upfrontMIPRate,
    annualMIPRate, interestRate, loanTermYears, borrowerPaidClosingCosts, prepaidExpenses,
  } = input;

  const warnings: string[] = [];
  const isFHAEligible = fhaDownPaymentPercent >= 3.5;
  if (!isFHAEligible) warnings.push('FHA requires minimum 3.5% down payment');

  const maxFHALoanAmount = Math.min(contractSalesPrice, appraisedValue);
  const actualDownPayment = (maxFHALoanAmount * fhaDownPaymentPercent) / 100;
  const baseLoanAmount = maxFHALoanAmount - actualDownPayment;
  const upfrontMIP = (baseLoanAmount * upfrontMIPRate) / 100;
  const totalLoanAmount = baseLoanAmount + upfrontMIP;
  const monthlyPI = calculateMonthlyPI(totalLoanAmount, interestRate, loanTermYears);
  const monthlyMIP = (baseLoanAmount * annualMIPRate / 100) / 12;
  const totalMonthlyPayment = monthlyPI + monthlyMIP;
  const minRequiredDownPayment = (maxFHALoanAmount * 3.5) / 100;
  const estimatedCashToClose = actualDownPayment + borrowerPaidClosingCosts + prepaidExpenses;

  return {
    maxFHALoanAmount, baseLoanAmount, upfrontMIP, totalLoanAmount, minRequiredDownPayment,
    actualDownPayment, downPaymentPercent: fhaDownPaymentPercent, monthlyPI, monthlyMIP,
    totalMonthlyPayment, estimatedCashToClose, isFHAEligible, warnings,
  };
}


// VA Loan Calculator
export interface VALoanInput {
  salePrice: number;
  downPayment: number;
  loanTermYears: number;
  interestRate: number;
  vaStatus: 'active' | 'veteran' | 'reserves' | 'surviving-spouse';
  vaLoanUse: 'first' | 'subsequent';
  financeVAFundingFee: boolean;
  annualPropertyTax: number;
  annualInsurance: number;
  monthlyHOA: number;
  isDisabled: boolean;
}
export interface VALoanResult {
  baseLoanAmount: number;
  fundingFeeRate: number;
  fundingFeeAmount: number;
  totalLoanAmount: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyHOA: number;
  totalMonthlyPayment: number;
  estimatedCashToClose: number;
  downPaymentPercent: number;
  isFundingFeeExempt: boolean;
}
export function calculateVA(input: VALoanInput): VALoanResult {
  const {
    salePrice, downPayment, loanTermYears, interestRate, vaStatus, vaLoanUse,
    financeVAFundingFee, annualPropertyTax, annualInsurance, monthlyHOA, isDisabled,
  } = input;

  const baseLoanAmount = _calculateLoanAmount(salePrice, downPayment);
  const downPaymentPercent = _calculateDownPaymentPercent(downPayment, salePrice);

  const getFundingFeeRate = (): number => {
    if (isDisabled) return 0;
    if (downPaymentPercent >= 10) return vaStatus === 'reserves' ? 1.5 : 1.25;
    if (downPaymentPercent >= 5) return vaStatus === 'reserves' ? 1.75 : 1.5;
    return vaLoanUse === 'first' ? (vaStatus === 'reserves' ? 2.4 : 2.15) : 3.3;
  };

  const fundingFeeRate = getFundingFeeRate();
  const fundingFeeAmount = (baseLoanAmount * fundingFeeRate) / 100;
  const totalLoanAmount = financeVAFundingFee ? baseLoanAmount + fundingFeeAmount : baseLoanAmount;
  const monthlyPI = calculateMonthlyPI(totalLoanAmount, interestRate, loanTermYears);
  const monthlyTax = annualPropertyTax / 12;
  const monthlyInsurance = annualInsurance / 12;
  const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyHOA;
  const estimatedClosingCosts = 3000;
  const estimatedCashToClose = downPayment + estimatedClosingCosts + (financeVAFundingFee ? 0 : fundingFeeAmount);

  return {
    baseLoanAmount, fundingFeeRate, fundingFeeAmount, totalLoanAmount, monthlyPI, monthlyTax,
    monthlyInsurance, monthlyHOA, totalMonthlyPayment, estimatedCashToClose,
    downPaymentPercent, isFundingFeeExempt: isDisabled,
  };
}

// Jumbo Loan Calculator
export interface JumboLoanInput {
  homeValue: number;
  downPayment: number;
  loanAmount: number;
  state: string;
  county: string;
  conformingLimit: number;
  interestRate: number;
  loanTermYears: number;
  annualPropertyTax: number;
  annualInsurance: number;
  monthlyHOA: number;
}
export interface JumboLoanResult {
  loanAmount: number;
  conformingLimit: number;
  isJumbo: boolean;
  exceedsLimitBy: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyHOA: number;
  totalMonthlyPayment: number;
  totalInterest: number;
  ltvRatio: number;
  downPaymentPercent: number;
  warnings: string[];
  qualificationStatus: string;
}
export function calculateJumbo(input: JumboLoanInput): JumboLoanResult {
  const {
    homeValue, downPayment, loanAmount, conformingLimit, interestRate,
    loanTermYears, annualPropertyTax, annualInsurance, monthlyHOA,
  } = input;

  const warnings: string[] = [];
  const isJumbo = loanAmount > conformingLimit;
  const exceedsLimitBy = Math.max(0, loanAmount - conformingLimit);

  if (isJumbo) {
    warnings.push('This is a jumbo loan - higher requirements apply');
    warnings.push('Typically requires 700+ credit score');
    warnings.push('May require larger down payment (10-20%)');
  }

  const ltvRatio = calculateLTV(loanAmount, homeValue);
  const dpPercent = downPaymentPercent(downPayment, homeValue);

  if (isJumbo && dpPercent < 10) {
    warnings.push('Jumbo loans typically require at least 10% down payment');
  }

  const monthlyPI = calculateMonthlyPI(loanAmount, interestRate, loanTermYears);
  const monthlyTax = annualPropertyTax / 12;
  const monthlyInsurance = annualInsurance / 12;
  const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyHOA;
  const totalInterest = calculateTotalInterest(monthlyPI, loanTermYears, loanAmount);

  return {
    loanAmount, conformingLimit, isJumbo, exceedsLimitBy, monthlyPI, monthlyTax,
    monthlyInsurance, monthlyHOA, totalMonthlyPayment, totalInterest, ltvRatio,
    downPaymentPercent: dpPercent, warnings,
    qualificationStatus: isJumbo
      ? "Jumbo Loan (exceeds conforming limit)"
      : "Conventional Loan (within conforming limit)",
  };
}

// Fixed vs ARM Comparison Calculator
export interface FixedVsARMInput {
  housePrice: number;
  downPayment: number;
  loanTermYears: number;
  pmiRate: number;
  discountPoints: number;
  otherClosingCosts: number;
  fixedRate: number;
  armInitialRate: number;
  armYearsBeforeAdjustment: number;
  armFirstAdjustmentCap: number;
  armSubsequentAdjustmentCap: number;
  armMonthsBetweenAdjustments: number;
  armLifetimeAdjustmentCap: number;
  annualPropertyTax: number;
  annualInsurance: number;
  monthlyHOA: number;
}
export interface FixedVsARMResult {
  fixedLoanAmount: number;
  fixedMonthlyPI: number;
  fixedInitialMonthlyPayment: number;
  fixedTotalInterest: number;
  fixedLTV: number;
  fixedPMIRequired: boolean;
  armLoanAmount: number;
  armInitialMonthlyPI: number;
  armInitialMonthlyPayment: number;
  armMaximumMonthlyPI: number;
  armMaximumMonthlyPayment: number;
  armTotalInterestAtMax: number;
  armLTV: number;
  armPMIRequired: boolean;
  initialSavingsARM: number;
  potentialMaxDifference: number;
}
export function calculateFixedVsARM(input: FixedVsARMInput): FixedVsARMResult {
  const {
    housePrice, downPayment, loanTermYears, pmiRate, fixedRate, armInitialRate,
    armLifetimeAdjustmentCap, annualPropertyTax, annualInsurance, monthlyHOA
  } = input;

  const loanAmount = housePrice - downPayment;
  const ltv = calculateLTV(loanAmount, housePrice);
  const pmiRequired = ltv > 80;

  const monthlyTax = annualPropertyTax / 12;
  const monthlyInsurance = annualInsurance / 12;
  const monthlyPMI = pmiRequired ? calculateMonthlyPMI(loanAmount, pmiRate) : 0;

  const fixedMonthlyPI = calculateMonthlyPI(loanAmount, fixedRate, loanTermYears);
  const fixedTotalInterest = calculateTotalInterest(fixedMonthlyPI, loanTermYears, loanAmount);
  const fixedInitialMonthlyPayment = fixedMonthlyPI + monthlyPMI + monthlyTax + monthlyInsurance + monthlyHOA;

  const armInitialMonthlyPI = calculateMonthlyPI(loanAmount, armInitialRate, loanTermYears);
  const armInitialMonthlyPayment = armInitialMonthlyPI + monthlyPMI + monthlyTax + monthlyInsurance + monthlyHOA;

  const armMaxRate = armInitialRate + armLifetimeAdjustmentCap;
  const armMaximumMonthlyPI = calculateMonthlyPI(loanAmount, armMaxRate, loanTermYears);
  const armMaximumMonthlyPayment = armMaximumMonthlyPI + monthlyPMI + monthlyTax + monthlyInsurance + monthlyHOA;
  const armTotalInterestAtMax = calculateTotalInterest(armMaximumMonthlyPI, loanTermYears, loanAmount);

  const initialSavingsARM = fixedInitialMonthlyPayment - armInitialMonthlyPayment;
  const potentialMaxDifference = armMaximumMonthlyPayment - fixedInitialMonthlyPayment;

  return {
    fixedLoanAmount: loanAmount,
    fixedMonthlyPI,
    fixedInitialMonthlyPayment,
    fixedTotalInterest,
    fixedLTV: ltv,
    fixedPMIRequired: pmiRequired,
    armLoanAmount: loanAmount,
    armInitialMonthlyPI,
    armInitialMonthlyPayment,
    armMaximumMonthlyPI,
    armMaximumMonthlyPayment,
    armTotalInterestAtMax,
    armLTV: ltv,
    armPMIRequired: pmiRequired,
    initialSavingsARM,
    potentialMaxDifference,
  };
}

// Interest-Only Calculator
export interface InterestOnlyInput {
  homeValue: number;
  downPayment: number;
  loanTermYears: number;
  interestOnlyPeriodYears: number;
  interestRate: number;
  showAmortization: boolean;
}
export interface InterestOnlyResult {
  loanAmount: number;
  interestOnlyMonthlyPayment: number;
  postIOAmortizingPayment: number;
  totalInterest: number;
  totalPaid: number;
}
export function calculateInterestOnly(input: InterestOnlyInput): InterestOnlyResult {
  const {
    homeValue, downPayment, loanTermYears, interestOnlyPeriodYears,
    interestRate
  } = input;
  const loanAmount = _calculateLoanAmount(homeValue, downPayment);
  const monthlyRate = _toMonthlyRate(interestRate);
  const interestOnlyMonthlyPayment = loanAmount * monthlyRate;
  const ioMonths = interestOnlyPeriodYears * 12;
  const ioTotalInterest = interestOnlyMonthlyPayment * ioMonths;

  const remainingTermYears = loanTermYears - interestOnlyPeriodYears;
  const postIOAmortizingPayment = remainingTermYears > 0
    ? calculateMonthlyPI(loanAmount, interestRate, remainingTermYears)
    : 0;

  const amortizingMonths = remainingTermYears * 12;
  const amortizingTotalPaid = postIOAmortizingPayment * amortizingMonths;
  const amortizingTotalInterest = amortizingTotalPaid - loanAmount;

  const totalInterest = ioTotalInterest + amortizingTotalInterest;
  const totalPaid = (interestOnlyMonthlyPayment * ioMonths) + amortizingTotalPaid;

  return {
    loanAmount,
    interestOnlyMonthlyPayment,
    postIOAmortizingPayment,
    totalInterest,
    totalPaid,
  };
}
export interface RentVsBuyInput {
  monthlyRent: number;
  annualRentIncrease: number; // percentage
  homePurchasePrice: number;
  annualPropertyAppreciation: number; // percentage
  yearsBeforeSelling: number;
  sellingCosts: number; // percentage
  downPaymentMode: "dollar" | "percent";
  downPaymentDollars?: number;
  downPaymentPercent?: number;
  interestRate: number;
  loanTermYears: number;
  discountPoints: number; // percentage
  annualPMI: number; // percentage
  propertyTaxAnnual: number;
  insuranceAnnual: number;
  maintenanceAnnual: number;
  federalTaxRate: number; // percentage
  showAmortization: boolean;
}
export interface RentVsBuyResult {
  totalRentCost: number;
  totalBuyCostBeforeEquity: number;
  netBuyCostAfterEquity: number;
  netCostDifference: number; // positive = buying cheaper, negative = renting cheaper
  breakevenYear: number | null;
  equityBuilt: number;
  totalRentPaid: number;
  homeValueAtSale: number;
  remainingLoanBalance: number;
  grossHomeEquity: number; // Home Value at Sale - Remaining Mortgage Balance
  netEquityAfterSale: number;
  sellingCosts: number; // Dollar amount of selling costs
  amortizationSchedule?: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}
export interface IncomeRequirementInput {
  homeValue: number;
  downPaymentMode: "dollar" | "percent";
  downPaymentDollars?: number;
  downPaymentPercent?: number;
  loanTermYears: number;
  interestRate: number;
  propertyTaxAnnual: number;
  insuranceAnnual: number;
  annualPMI: number;
  monthlyDebtPayments: number;
  frontEndDTI: number;
  backEndDTI: number;
}
export interface IncomeRequirementResult {
  minimumAnnualIncome: number;
  minimumMonthlyIncome: number;
  maxAffordableHomePrice: number;
  monthlyPITI: number;
  loanAmount: number;
  downPayment: number;
  frontEndRequiredIncome: number;
  backEndRequiredIncome: number;
}
export interface QualificationInput {
  annualIncome: number;
  monthlyDebtPayments: number;
  downPayment: number;
  interestRate: number;
  loanTermYears: number;
  propertyTaxMode: "percent" | "dollar";
  propertyTaxPercent?: number;
  propertyTaxDollars?: number;
  insuranceAnnual: number;
  frontEndDTI: number;
  backEndDTI: number;
}
export interface QualificationResult {
  maxAffordableHomePrice: number;
  maxLoanAmount: number;
  estimatedMonthlyPayment: number;
  monthlyPITI: number;
  calculatedFrontEndRatio: number;
  calculatedBackEndRatio: number;
  downPayment: number;
}
/**
 * Compares the long-term cost of renting vs buying a home
 * Accounts for: mortgage payments, appreciation, tax benefits, maintenance, equity building
 */
export function calculateRentVsBuy(input: RentVsBuyInput): RentVsBuyResult {
  const { downPayment, loanAmount } = _resolveLoanDetails(input.homePurchasePrice, input.downPaymentMode, input.downPaymentDollars, input.downPaymentPercent);
  const discountPointsCost = loanAmount * (input.discountPoints / 100);
  const monthlyRate = _toMonthlyRate(input.interestRate);
  const numPayments = input.loanTermYears * 12;
  const monthlyPI = calculateMonthlyPI(loanAmount, input.interestRate, input.loanTermYears);
  const downPaymentPercent = _calculateDownPaymentPercent(downPayment, input.homePurchasePrice);
  const pmiApplies = downPaymentPercent < 20;
  const monthlyTax = input.propertyTaxAnnual / 12;
  const monthlyInsurance = input.insuranceAnnual / 12;
  const monthlyMaintenance = input.maintenanceAnnual / 12;

  // Year-by-year simulation
  let totalRentPaid = 0;
  let totalBuyCost = downPayment + discountPointsCost; // Initial costs
  let loanBalance = loanAmount;
  let breakevenYear: number | null = null;
  let totalInterestPaid = 0;
  let totalPrincipalPaid = 0;
  let pmiStillApplies = pmiApplies;

  const schedule: Array<{month: number; payment: number; principal: number; interest: number; balance: number}> = [];

  for (let year = 1; year <= input.yearsBeforeSelling; year++) {
    // RENT SCENARIO
    const yearlyRent = input.monthlyRent * 12 * Math.pow(1 + input.annualRentIncrease / 100, year - 1);
    totalRentPaid += yearlyRent;

    // BUY SCENARIO - Process 12 months
    for (let month = 1; month <= 12; month++) {
      const interestPayment = loanBalance * monthlyRate;
      const principalPayment = Math.min(monthlyPI - interestPayment, loanBalance);

      loanBalance = Math.max(0, loanBalance - principalPayment);
      totalInterestPaid += interestPayment;
      totalPrincipalPaid += principalPayment;

      // Check if PMI should be removed (when LTV reaches 78% or below)
      if (pmiStillApplies) {
        const currentLTV = (loanBalance / input.homePurchasePrice) * 100;
        if (currentLTV <= 78) {
          pmiStillApplies = false;
        }
      }

      // Calculate monthly PMI only if still applicable
      const monthlyPMI = pmiStillApplies ? calculateMonthlyPMI(loanAmount, input.annualPMI) : 0;
      const totalMonthlyOwnershipCost = monthlyPI + monthlyTax + monthlyInsurance + monthlyMaintenance + monthlyPMI;


      // Add all ownership costs
      totalBuyCost += totalMonthlyOwnershipCost;

      // Tax deduction benefit (mortgage interest + property tax are deductible)
      const monthlyTaxDeduction = (interestPayment + monthlyTax) * (input.federalTaxRate / 100);
      totalBuyCost -= monthlyTaxDeduction;

      if (input.showAmortization) {
        schedule.push({
          month: (year - 1) * 12 + month,
          payment: monthlyPI,
          principal: principalPayment,
          interest: interestPayment,
          balance: loanBalance
        });
      }
    }

    // Calculate home appreciation at end of this year
    const homeValueThisYear = input.homePurchasePrice * Math.pow(1 + input.annualPropertyAppreciation / 100, year);
    const sellingCostsThisYear = homeValueThisYear * (input.sellingCosts / 100);
    const netEquityThisYear = homeValueThisYear - loanBalance - sellingCostsThisYear;
    
    // Net buy cost if selling at end of this year
    const netBuyCostThisYear = totalBuyCost - netEquityThisYear;

    // Check breakeven point: first year where cumulative buy cost <= cumulative rent cost
    if (breakevenYear === null && netBuyCostThisYear <= totalRentPaid) {
      breakevenYear = year;
    }
  }

  // Calculate home value at sale with appreciation
  const homeValueAtSale = input.homePurchasePrice * Math.pow(1 + input.annualPropertyAppreciation / 100, input.yearsBeforeSelling);
  const sellingCostDollars = homeValueAtSale * (input.sellingCosts / 100);
  const grossHomeEquity = homeValueAtSale - loanBalance;
  const netEquityAfterSale = homeValueAtSale - loanBalance - sellingCostDollars;

  // Final comparison: net cost of buying after recovering equity
  const netBuyCostAfterEquity = totalBuyCost - netEquityAfterSale;
  const netCostDifference = totalRentPaid - netBuyCostAfterEquity;

  return {
    totalRentCost: Math.round(totalRentPaid),
    totalBuyCostBeforeEquity: Math.round(totalBuyCost),
    netBuyCostAfterEquity: Math.round(netBuyCostAfterEquity),
    netCostDifference: Math.round(netCostDifference),
    breakevenYear,
    equityBuilt: Math.round(totalPrincipalPaid),
    totalRentPaid: Math.round(totalRentPaid),
    homeValueAtSale: Math.round(homeValueAtSale),
    remainingLoanBalance: Math.round(loanBalance),
    grossHomeEquity: Math.round(grossHomeEquity),
    netEquityAfterSale: Math.round(netEquityAfterSale),
    sellingCosts: Math.round(sellingCostDollars),
    amortizationSchedule: input.showAmortization ? schedule : undefined
  };
}
/**
 * Calculates the minimum income required to afford a specific home
 * Based on debt-to-income (DTI) ratios
 */
export function calculateIncomeRequirement(input: IncomeRequirementInput): IncomeRequirementResult {
  const { downPayment, loanAmount } = _resolveLoanDetails(input.homeValue, input.downPaymentMode, input.downPaymentDollars, input.downPaymentPercent);
  const monthlyPI = calculateMonthlyPI(loanAmount, input.interestRate, input.loanTermYears);
  const monthlyTax = input.propertyTaxAnnual / 12;
  const monthlyInsurance = input.insuranceAnnual / 12;
  const downPaymentPercent = _calculateDownPaymentPercent(downPayment, input.homeValue);
  
  // Calculate PMI based on down payment < 20% 
  // Note: If user explicitly provides annualPMI > 0, it will be applied regardless
  const shouldApplyPMI = downPaymentPercent < 20 || input.annualPMI > 0;
  const monthlyPMI = shouldApplyPMI ? calculateMonthlyPMI(loanAmount, input.annualPMI) : 0;
  const monthlyPITI = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI;

  // Calculate required income based on DTI ratios
  const frontEndRequiredIncome = monthlyPITI / (input.frontEndDTI / 100);
  const backEndRequiredIncome = (monthlyPITI + input.monthlyDebtPayments) / (input.backEndDTI / 100);

  // Minimum income is the higher of the two
  const minimumMonthlyIncome = Math.max(frontEndRequiredIncome, backEndRequiredIncome);
  const minimumAnnualIncome = minimumMonthlyIncome * 12;
  
  // Note: maxAffordableHomePrice is not applicable for Income Requirement Calculator
  // since we don't have annual income as an input. Set to 0 to indicate N/A.
  const maxAffordableHomePrice = 0;

  return {
    minimumAnnualIncome: Math.round(minimumAnnualIncome),
    minimumMonthlyIncome: Math.round(minimumMonthlyIncome),
    maxAffordableHomePrice: maxAffordableHomePrice,
    monthlyPITI: Math.round(monthlyPITI),
    loanAmount: Math.round(loanAmount),
    downPayment: Math.round(downPayment),
    frontEndRequiredIncome: Math.round(frontEndRequiredIncome),
    backEndRequiredIncome: Math.round(backEndRequiredIncome),
  };
}
// Calculates maximum affordable home price based on income
export function calculateMortgageQualification(input: QualificationInput): QualificationResult {
  // Validate and sanitize inputs
  const annualIncome = Number(input.annualIncome) || 0;
  const monthlyDebtPayments = Math.max(0, Number(input.monthlyDebtPayments) || 0);
  const downPayment = Math.max(0, Number(input.downPayment) || 0);
  const interestRate = Math.max(0, Number(input.interestRate) || 0);
  const loanTermYears = Math.max(1, Number(input.loanTermYears) || 30);
  const frontEndDTI = Math.max(0, Number(input.frontEndDTI) || 0);
  const backEndDTI = Math.max(0, Number(input.backEndDTI) || 0);
  const insuranceAnnual = Math.max(0, Number(input.insuranceAnnual) || 0);

  // Early return for invalid income
  if (annualIncome <= 0 || !Number.isFinite(annualIncome)) {
    return {
      maxAffordableHomePrice: 0,
      maxLoanAmount: 0,
      estimatedMonthlyPayment: 0,
      monthlyPITI: 0,
      calculatedFrontEndRatio: 0,
      calculatedBackEndRatio: 0,
      downPayment: downPayment,
    };
  }

  const monthlyIncome = annualIncome / 12;

  // Calculate DTI limits
  // Front-end limit: housing costs only
  const frontEndLimit = monthlyIncome * (frontEndDTI / 100);
  
  // Back-end limit: total debt including housing
  const backEndLimit = Math.max(0, monthlyIncome * (backEndDTI / 100) - monthlyDebtPayments);

  // Use the more restrictive limit (minimum of the two)
  const maxHousingExpense = Math.min(frontEndLimit, backEndLimit);

  // If no room for housing payment, return zeros
  if (maxHousingExpense <= 0 || !Number.isFinite(maxHousingExpense)) {
    return {
      maxAffordableHomePrice: 0,
      maxLoanAmount: 0,
      estimatedMonthlyPayment: 0,
      monthlyPITI: 0,
      calculatedFrontEndRatio: 0,
      calculatedBackEndRatio: 0,
      downPayment: downPayment,
    };
  }

  // Binary search callback: calculate total housing cost for a given home price
  const calculateTotalHousingCost = (price: number, loan: number): number => {
    // Monthly P&I payment
    const pi = calculateMonthlyPI(loan, interestRate, loanTermYears);
    
    // Monthly property tax (either percent of home value or fixed dollar amount)
    const monthlyTax = input.propertyTaxMode === "percent"
      ? (price * (input.propertyTaxPercent || 0) / 100) / 12
      : (input.propertyTaxDollars || 0) / 12;
    
    // Monthly insurance
    const monthlyIns = insuranceAnnual / 12;
    
    // Monthly PMI (only if down payment < 20% of home price)
    const downPaymentPercent = price > 0 ? (downPayment / price) * 100 : 100;
    const monthlyPMI = downPaymentPercent < 20 
      ? calculateMonthlyPMI(loan, 0.7) // 0.7% annual PMI rate
      : 0;
    
    return pi + monthlyTax + monthlyIns + monthlyPMI;
  };

  // Binary search to find maximum affordable home price
  const affordableHomePrice = _binarySearchAffordablePrice(
    downPayment,
    maxHousingExpense,
    downPayment, // Minimum price = down payment (100% down scenario)
    annualIncome * 15, // Maximum price = 15x income (reasonable upper bound)
    calculateTotalHousingCost
  );

  // Calculate final loan amount
  const finalLoan = Math.max(0, affordableHomePrice - downPayment);
  
  // Calculate final monthly P&I payment
  const finalPI = calculateMonthlyPI(finalLoan, interestRate, loanTermYears);

  // Calculate final monthly property tax
  const finalMonthlyTax = input.propertyTaxMode === "percent"
    ? (affordableHomePrice * (input.propertyTaxPercent || 0) / 100) / 12
    : (input.propertyTaxDollars || 0) / 12;

  // Calculate final monthly insurance
  const finalMonthlyIns = insuranceAnnual / 12;

  // Calculate final monthly PMI
  const finalDownPaymentPercent = affordableHomePrice > 0 
    ? (downPayment / affordableHomePrice) * 100 
    : 100;
  const finalMonthlyPMI = finalDownPaymentPercent < 20 
    ? calculateMonthlyPMI(finalLoan, 0.7)
    : 0;

  // Total housing cost (PITI + PMI)
  const totalHousingCost = finalPI + finalMonthlyTax + finalMonthlyIns + finalMonthlyPMI;

  // Calculate actual DTI ratios
  const actualFrontEndRatio = monthlyIncome > 0 
    ? (totalHousingCost / monthlyIncome) * 100 
    : 0;
  const actualBackEndRatio = monthlyIncome > 0 
    ? ((totalHousingCost + monthlyDebtPayments) / monthlyIncome) * 100 
    : 0;

  // Return results with proper validation
  return {
    maxAffordableHomePrice: Math.round(affordableHomePrice),
    maxLoanAmount: Math.round(finalLoan),
    estimatedMonthlyPayment: Math.round(finalPI), // P&I only
    monthlyPITI: Math.round(totalHousingCost), // Full housing cost (PITI + PMI)
    calculatedFrontEndRatio: Number.isFinite(actualFrontEndRatio) 
      ? parseFloat(actualFrontEndRatio.toFixed(1)) 
      : 0,
    calculatedBackEndRatio: Number.isFinite(actualBackEndRatio) 
      ? parseFloat(actualBackEndRatio.toFixed(1)) 
      : 0,
    downPayment: downPayment,
  };
}

// Interest-Only + Extra Payments Calculator
export interface InterestOnlyExtraInput extends InterestOnlyInput {
  additionalMonthlyPayment: number;
}
export interface InterestOnlyExtraResult extends InterestOnlyResult {
  actualPayoffMonths: number;
  interestSaved: number;
  monthsSaved: number;
}
export function calculateInterestOnlyExtra(input: InterestOnlyExtraInput): InterestOnlyExtraResult {
  const {
    homeValue, downPayment, loanTermYears, interestOnlyPeriodYears,
    interestRate, additionalMonthlyPayment
  } = input;

  const standardResult = calculateInterestOnly({
    homeValue, downPayment, loanTermYears, interestOnlyPeriodYears,
    interestRate, showAmortization: false
  });
  const loanAmount = _calculateLoanAmount(homeValue, downPayment);
  const monthlyRate = _toMonthlyRate(interestRate);
  const ioMonths = interestOnlyPeriodYears * 12;

  let balance = loanAmount;
  let totalInterestPaid = 0;
  let monthCount = 0;
  const maxMonths = loanTermYears * 12;

  for (let month = 1; month <= ioMonths && balance > 0; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = additionalMonthlyPayment;

    totalInterestPaid += interestPayment;
    balance -= principalPayment;
    monthCount++;

    if (balance <= 0) break;
  }

  if (balance > 0) {
    const remainingTermYears = loanTermYears - interestOnlyPeriodYears;
    const basePayment = calculateMonthlyPI(balance, interestRate, remainingTermYears);
    const totalPayment = basePayment + additionalMonthlyPayment;

    while (balance > 0 && monthCount < maxMonths) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = Math.min(totalPayment - interestPayment, balance);

      totalInterestPaid += interestPayment;
      balance -= principalPayment;
      monthCount++;

      if (balance < 1) break;
    }
  }

  const actualPayoffMonths = monthCount;
  const standardMonths = loanTermYears * 12;
  const monthsSaved = standardMonths - actualPayoffMonths;
  const interestSaved = standardResult.totalInterest - totalInterestPaid;

  return {
    ...standardResult,
    totalInterest: totalInterestPaid,
    totalPaid: loanAmount + totalInterestPaid,
    actualPayoffMonths,
    interestSaved,
    monthsSaved,
  };
}

// Balloon Mortgage Calculator
export interface BalloonMortgageInput {
  purchasePrice: number;
  downPayment: number;
  interestRate: number;
  initialLoanTermYears: number;
  amortizationScheduleLengthYears: number;
  upfrontPayment: number;
  loanOriginationFeePercent: number;
  financeIntoLoan: boolean;
}
export interface BalloonMortgageResult {
  loanAmount: number;
  monthlyPayment: number;
  balloonPayment: number;
  totalInterestBeforeBalloon: number;
  totalPaidBeforeBalloon: number;
}
export function calculateBalloonMortgage(input: BalloonMortgageInput): BalloonMortgageResult {
  const {
    purchasePrice, downPayment, interestRate, initialLoanTermYears,
    amortizationScheduleLengthYears, upfrontPayment, loanOriginationFeePercent,
    financeIntoLoan
  } = input;
  const baseLoanAmount = _calculateLoanAmount(purchasePrice, downPayment);
  const originationFee = baseLoanAmount * (loanOriginationFeePercent / 100);

  const loanAmount = financeIntoLoan
    ? baseLoanAmount + originationFee
    : baseLoanAmount;

  const monthlyPayment = calculateMonthlyPI(
    loanAmount,
    interestRate,
    amortizationScheduleLengthYears
  );

  const balloonMonths = initialLoanTermYears * 12;
  const monthlyRate = interestRate / 100 / 12;

  let balance = loanAmount;
  let totalInterestBeforeBalloon = 0;

  for (let month = 1; month <= balloonMonths; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;

    totalInterestBeforeBalloon += interestPayment;
    balance -= principalPayment;
  }

  const balloonPayment = Math.max(0, balance);
  const totalPaidBeforeBalloon = (monthlyPayment * balloonMonths) + upfrontPayment;

  return {
    loanAmount,
    monthlyPayment,
    balloonPayment,
    totalInterestBeforeBalloon,
    totalPaidBeforeBalloon,
  };
}
export interface ExtraPaymentInput {
  homePrice: number;
  downPaymentMode: "dollar" | "percent";
  downPaymentDollars: number;
  downPaymentPercent: number;
  loanAmount?: number;
  interestRate: number;
  loanTerm: number;
  initialExtraPayment: number;
  additionalMonthlyPayment: number;
}
export interface ExtraPaymentResult {
  newPayoffDate: string;
  interestSaved: number;
  monthsShavedOff: number;
  originalPayoffDate: string;
  originalTotalInterest: number;
  newTotalInterest: number;
  originalMonths: number;
  newMonths: number;
}
export function calculateExtraPayment(input: ExtraPaymentInput): ExtraPaymentResult {
  const { loanAmount } = _resolveLoanDetails(input.homePrice, input.downPaymentMode, input.downPaymentDollars, input.downPaymentPercent, input.loanAmount);
  const monthlyRate = _toMonthlyRate(input.interestRate);
  const originalMonths = input.loanTerm * 12;
  const monthlyPayment = calculateMonthlyPI(loanAmount, input.interestRate, input.loanTerm);
  const originalTotalInterest = calculateTotalInterest(monthlyPayment, input.loanTerm, loanAmount);

  const adjustedLoanAmount = Math.max(0, loanAmount - input.initialExtraPayment);
  const { totalInterest, monthCount } = _runAmortizationLoop(
    adjustedLoanAmount,
    monthlyRate,
    monthlyPayment,
    input.loanTerm * 12 * 2,
    () => input.additionalMonthlyPayment
  );

  const monthsShavedOff = originalMonths - monthCount;
  const interestSaved = originalTotalInterest - totalInterest;
  const today = new Date();
  const originalPayoffDate = new Date(today);
  originalPayoffDate.setMonth(originalPayoffDate.getMonth() + originalMonths);
  const newPayoffDate = new Date(today);
  newPayoffDate.setMonth(newPayoffDate.getMonth() + monthCount);

  return {
    newPayoffDate: newPayoffDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    interestSaved: Math.round(interestSaved),
    monthsShavedOff: Math.round(monthsShavedOff),
    originalPayoffDate: originalPayoffDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    originalTotalInterest: Math.round(originalTotalInterest),
    newTotalInterest: Math.round(totalInterest),
    originalMonths,
    newMonths: monthCount,
  };
}
export interface BiweeklyPaymentInput {
  homePrice: number;
  downPaymentMode: "dollar" | "percent";
  downPaymentDollars: number;
  downPaymentPercent: number;
  loanAmount?: number;
  loanTerm: number;
  interestRate: number;
  interestCompounded: "monthly" | "biweekly";
  taxRate: number;
}
export interface BiweeklyPaymentResult {
  payoffTimeMonthly: number;
  payoffTimeBiweekly: number;
  interestSaved: number;
  monthlyPayment: number;
  biweeklyPayment: number;
  totalInterestMonthly: number;
  totalInterestBiweekly: number;
  monthsSaved: number;
}
export function calculateBiweeklyPaymentEnhanced(input: BiweeklyPaymentInput): BiweeklyPaymentResult {
  const { loanAmount } = _resolveLoanDetails(input.homePrice, input.downPaymentMode, input.downPaymentDollars, input.downPaymentPercent, input.loanAmount);

  const monthlyPayment = calculateMonthlyPI(loanAmount, input.interestRate, input.loanTerm);
  const monthlyRate = _toMonthlyRate(input.interestRate);
  const originalMonths = input.loanTerm * 12;

  const totalInterestMonthly = calculateTotalInterest(monthlyPayment, input.loanTerm, loanAmount);

  const biweeklyPayment = monthlyPayment / 2;

  let balance = loanAmount;
  let totalInterestBiweekly = 0;
  let biweeklyPaymentCount = 0;
  const maxPayments = input.loanTerm * 26 * 2;

  const biweeklyRate = input.interestCompounded === "biweekly"
    ? input.interestRate / 26 / 100
    : input.interestRate / 12 / 100 / (26/12);

  while (balance > 0 && biweeklyPaymentCount < maxPayments) {
    biweeklyPaymentCount++;
    const interestPayment = balance * biweeklyRate;
    const principalPayment = Math.min(biweeklyPayment - interestPayment, balance);

    totalInterestBiweekly += interestPayment;
    balance = Math.max(0, balance - principalPayment);
    if (balance < 0.01) break;
  }

  const biweeklyMonths = biweeklyPaymentCount / (26/12);
  const monthsSaved = originalMonths - biweeklyMonths;
  const interestSaved = totalInterestMonthly - totalInterestBiweekly;

  return {
    payoffTimeMonthly: originalMonths,
    payoffTimeBiweekly: Math.round(biweeklyMonths * 10) / 10,
    interestSaved: Math.round(interestSaved),
    monthlyPayment: Math.round(monthlyPayment),
    biweeklyPayment: Math.round(biweeklyPayment),
    totalInterestMonthly: Math.round(totalInterestMonthly),
    totalInterestBiweekly: Math.round(totalInterestBiweekly),
    monthsSaved: Math.round(monthsSaved * 10) / 10,
  };
}
export interface PayingPointsInput {
  homeValue: number;
  downPaymentMode: "dollar" | "percent";
  downPaymentDollars: number;
  downPaymentPercent: number;
  loanAmount?: number;
  loanTerm: number;
  interestRateWithoutPoints: number;
  discountPoints: number;
  interestRateWithPoints: number;
  interestRateOnSavings: number;
}
export interface PayingPointsResult {
  breakEvenPeriod: number;
  totalInterestWithPoints: number;
  totalInterestWithoutPoints: number;
  recommendation: string;
  pointsCost: number;
  monthlySavings: number;
  interestSavings: number;
}
export function calculatePayingPoints(input: PayingPointsInput): PayingPointsResult {
  const { loanAmount } = _resolveLoanDetails(input.homeValue, input.downPaymentMode, input.downPaymentDollars, input.downPaymentPercent, input.loanAmount);

  const pointsCost = loanAmount * (input.discountPoints / 100);

  const paymentWithoutPoints = calculateMonthlyPI(loanAmount, input.interestRateWithoutPoints, input.loanTerm);
  const paymentWithPoints = calculateMonthlyPI(loanAmount, input.interestRateWithPoints, input.loanTerm);
  const monthlySavings = paymentWithoutPoints - paymentWithPoints;

  const breakEvenMonths = monthlySavings > 0 ? pointsCost / monthlySavings : 999;

  const totalInterestWithoutPoints = calculateTotalInterest(paymentWithoutPoints, input.loanTerm, loanAmount);
  const totalInterestWithPoints = calculateTotalInterest(paymentWithPoints, input.loanTerm, loanAmount);
  const interestSavings = totalInterestWithoutPoints - totalInterestWithPoints;

  const netBenefit = interestSavings - pointsCost;

  let recommendation = "";
  if (breakEvenMonths <= 24) {
    recommendation = "Excellent: Pay points if staying 2+ years";
  } else if (breakEvenMonths <= 60) {
    recommendation = "Good: Pay points if staying 5+ years";
  } else if (breakEvenMonths <= 96) {
    recommendation = "Fair: Pay points if staying 8+ years";
  } else {
    recommendation = "Not Recommended: Break-even period too long";
  }

  if (netBenefit < 0 && breakEvenMonths < 999) {
    recommendation += " (Points cost exceeds interest savings)";
  }

  return {
    breakEvenPeriod: Math.round(breakEvenMonths * 10) / 10,
    totalInterestWithPoints: Math.round(totalInterestWithPoints),
    totalInterestWithoutPoints: Math.round(totalInterestWithoutPoints),
    recommendation,
    pointsCost: Math.round(pointsCost),
    monthlySavings: Math.round(monthlySavings),
    interestSavings: Math.round(interestSavings),
  };
}
export interface TaxBenefitsInput {
  homeValue: number;
  downPaymentMode: "dollar" | "percent";
  downPaymentDollars: number;
  downPaymentPercent: number;
  loanAmount?: number;
  loanTerm: number;
  annualPMI: number;
  interestRate: number;
  discountPoints: number;
  otherClosingCosts: number;
  annualPropertyTaxes: number;
  annualInsurance: number;
  federalTaxRate: number;
  stateTaxRate: number;
  otherItemizedDeductions: number;
  yearsUntilSale: number;
  filingStatus: "single" | "marriedFilingJointly" | "marriedFilingSeparately" | "headOfHousehold";
  grossAnnualIncome?: number;
}
export interface TaxBenefitsResult {
  // Tax Savings (Separated)
  federalTaxSavings: number;
  stateTaxSavings: number;
  estimatedAnnualTaxSavings: number;
  
  // Deduction Analysis
  standardDeduction: number;
  totalItemizedDeductions: number;
  standardDeductionComparison: string;
  
  // Itemized Breakdown
  mortgageInterestDeduction: number;
  propertyTaxDeduction: number;
  pmiDeduction: number;
  pointsDeduction: number;
  
  // Cost Analysis
  afterTaxCostOfOwnership: number;
  totalOwnershipCostBreakdown: {
    totalInterest: number;
    totalPropertyTaxes: number;
    totalInsurance: number;
    totalPMI: number;
    closingCosts: number;
    subtotal: number;
    lessTaxSavings: number;
    netCost: number;
  };
  
  // Multi-Year Analysis
  totalTaxSavingsOverYears: number;
  
  // Comparative Metrics
  effectiveInterestRate: number;
  
  // Validation/Warnings
  warnings?: string[];
}
/**
 * Validates tax benefits input parameters
 */
function validateTaxBenefitsInput(input: TaxBenefitsInput): string[] {
  const errors: string[] = [];
  
  if (!input.homeValue || input.homeValue <= 0) {
    errors.push("Home value is required");
  }
  
  if (!input.interestRate || input.interestRate <= 0) {
    errors.push("Interest rate is required");
  }
  
  if (!input.loanTerm || input.loanTerm <= 0) {
    errors.push("Loan term is required");
  }
  
  if (!input.filingStatus) {
    errors.push("Filing status is required");
  }
  
  if (!input.yearsUntilSale || input.yearsUntilSale <= 0) {
    errors.push("Years until sale is required");
  }
  
  return errors;
}

export function calculateTaxBenefits(input: TaxBenefitsInput): TaxBenefitsResult {
  // Validate inputs first
  const validationErrors = validateTaxBenefitsInput(input);
  if (validationErrors.length > 0) {
    return {
      federalTaxSavings: 0,
      stateTaxSavings: 0,
      estimatedAnnualTaxSavings: 0,
      standardDeduction: 0,
      totalItemizedDeductions: 0,
      standardDeductionComparison: "Please provide all required inputs",
      mortgageInterestDeduction: 0,
      propertyTaxDeduction: 0,
      pmiDeduction: 0,
      pointsDeduction: 0,
      afterTaxCostOfOwnership: 0,
      totalOwnershipCostBreakdown: {
        totalInterest: 0,
        totalPropertyTaxes: 0,
        totalInsurance: 0,
        totalPMI: 0,
        closingCosts: 0,
        subtotal: 0,
        lessTaxSavings: 0,
        netCost: 0,
      },
      totalTaxSavingsOverYears: 0,
      effectiveInterestRate: 0,
      warnings: validationErrors,
    };
  }

  const { loanAmount } = _resolveLoanDetails(input.homeValue, input.downPaymentMode, input.downPaymentDollars, input.downPaymentPercent, input.loanAmount);
  
  // 2026 Standard Deductions by filing status
  const STANDARD_DEDUCTIONS_2026: Record<string, number> = {
    single: 15000,
    marriedFilingJointly: 30000,
    marriedFilingSeparately: 15000,
    headOfHousehold: 22500,
  };
  
  const standardDeduction = STANDARD_DEDUCTIONS_2026[input.filingStatus] || 30000;
  const SALT_CAP = 10000;
  
  const monthlyPayment = calculateMonthlyPI(loanAmount, input.interestRate, input.loanTerm);
  const monthlyRate = _toMonthlyRate(input.interestRate);

  let firstYearInterest = 0;
  let balance = loanAmount;
  for (let i = 0; i < 12; i++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    firstYearInterest += interest;
    balance -= principal;
  }

  // Calculate itemized deductions with proper limits
  
  // 1. Mortgage Interest (qualified residence interest)
  const mortgageInterestDeduction = firstYearInterest;
  
  // 2. Discount Points (deductible in year paid for purchase)
  const pointsDeduction = loanAmount * (input.discountPoints / 100);
  
  // 3. Property Tax (SALT cap applies)
  const propertyTaxDeduction = Math.min(input.annualPropertyTaxes, SALT_CAP);
  
  // 4. PMI Deduction (with income phase-out)
  let pmiDeduction = 0;
  const pmiBaseline = loanAmount * (input.annualPMI / 100);
  
  // Check down payment to determine if PMI should even be charged
  const downPaymentPercent = input.downPaymentMode === "percent" 
    ? input.downPaymentPercent 
    : (input.downPaymentDollars / input.homeValue) * 100;
  
  // Only calculate PMI deduction if PMI is actually being charged
  if (input.annualPMI > 0) {
    if (input.grossAnnualIncome) {
      const phaseOutStart = input.filingStatus === 'marriedFilingSeparately' ? 50000 : 100000;
      const phaseOutEnd = input.filingStatus === 'marriedFilingSeparately' ? 54500 : 109000;
      
      if (input.grossAnnualIncome <= phaseOutStart) {
        pmiDeduction = pmiBaseline;
      } else if (input.grossAnnualIncome < phaseOutEnd) {
        const phaseOutPercentage = (phaseOutEnd - input.grossAnnualIncome) / (phaseOutEnd - phaseOutStart);
        pmiDeduction = pmiBaseline * phaseOutPercentage;
      }
    } else {
      pmiDeduction = pmiBaseline;
    }
  }

  const totalItemizedDeductions =
    mortgageInterestDeduction +
    pointsDeduction +
    pmiDeduction +
    propertyTaxDeduction +
    input.otherItemizedDeductions;

  // Calculate tax savings (separated by federal and state)
  const federalTaxRate = input.federalTaxRate / 100;
  const stateTaxRate = input.stateTaxRate / 100;

  let federalTaxSavings = 0;
  let stateTaxSavings = 0;
  let annualTaxSavings = 0;
  let comparison = "";

  if (totalItemizedDeductions > standardDeduction) {
    const additionalDeduction = totalItemizedDeductions - standardDeduction;
    
    federalTaxSavings = additionalDeduction * federalTaxRate;
    stateTaxSavings = additionalDeduction * stateTaxRate;
    annualTaxSavings = federalTaxSavings + stateTaxSavings;
    
    comparison = `Itemizing ($${Math.round(totalItemizedDeductions).toLocaleString()}) beats Standard ($${standardDeduction.toLocaleString()}) by $${Math.round(additionalDeduction).toLocaleString()}. Federal saves $${Math.round(federalTaxSavings).toLocaleString()}/year, State saves $${Math.round(stateTaxSavings).toLocaleString()}/year.`;
  } else {
    comparison = `Standard Deduction ($${standardDeduction.toLocaleString()}) is better. No additional tax benefit from itemizing.`;
  }

  const totalTaxSavingsOverYears = annualTaxSavings * input.yearsUntilSale;

  // Calculate actual ownership costs over the period (EXCLUDING principal repayment)
  
  // 1. Calculate total interest paid over ownership period
  let totalInterestPaid = 0;
  let interestBalance = loanAmount;
  const monthlyPI = calculateMonthlyPI(loanAmount, input.interestRate, input.loanTerm);

  for (let month = 1; month <= input.yearsUntilSale * 12; month++) {
    const monthlyInterest = interestBalance * monthlyRate;
    const monthlyPrincipal = monthlyPI - monthlyInterest;
    totalInterestPaid += monthlyInterest;
    interestBalance -= monthlyPrincipal;
    
    if (interestBalance <= 0) break;
  }

  // 2. Total property taxes over ownership period
  const totalPropertyTaxes = input.annualPropertyTaxes * input.yearsUntilSale;
  
  // 3. Total insurance over ownership period
  const totalInsurance = input.annualInsurance * input.yearsUntilSale;
  
  // 4. Total PMI (stops when LTV reaches 78%)
  let totalPMI = 0;
  if (input.annualPMI > 0) {
    let pmiBalance = loanAmount;
    const monthlyPMIAmount = (loanAmount * (input.annualPMI / 100)) / 12;
    
    for (let month = 1; month <= input.yearsUntilSale * 12; month++) {
      const currentLTV = (pmiBalance / input.homeValue) * 100;
      
      // PMI stops at 78% LTV
      if (currentLTV > 78) {
        totalPMI += monthlyPMIAmount;
      } else {
        break;
      }
      
      const monthlyInterest = pmiBalance * monthlyRate;
      const monthlyPrincipal = monthlyPI - monthlyInterest;
      pmiBalance -= monthlyPrincipal;
      
      if (pmiBalance <= 0) break;
    }
  }
  
  // 5. Closing costs (one-time)
  const closingCosts = input.otherClosingCosts + (loanAmount * (input.discountPoints / 100));

  // Calculate after-tax cost of ownership
  const subtotalCosts = totalInterestPaid + totalPropertyTaxes + totalInsurance + totalPMI + closingCosts;
  const afterTaxCostOfOwnership = subtotalCosts - totalTaxSavingsOverYears;

  const totalOwnershipCostBreakdown = {
    totalInterest: Math.round(totalInterestPaid),
    totalPropertyTaxes: Math.round(totalPropertyTaxes),
    totalInsurance: Math.round(totalInsurance),
    totalPMI: Math.round(totalPMI),
    closingCosts: Math.round(closingCosts),
    subtotal: Math.round(subtotalCosts),
    lessTaxSavings: Math.round(totalTaxSavingsOverYears),
    netCost: Math.round(afterTaxCostOfOwnership),
  };

  // Calculate effective interest rate with proper null/undefined handling
  let effectiveInterestRate: number;
  if (annualTaxSavings > 0 && input.interestRate != null && !isNaN(input.interestRate)) {
    const combinedTaxRate = federalTaxRate + stateTaxRate;
    effectiveInterestRate = input.interestRate * (1 - combinedTaxRate);
  } else if (input.interestRate != null && !isNaN(input.interestRate)) {
    effectiveInterestRate = input.interestRate;
  } else {
    effectiveInterestRate = 0;
  }

  // Build warnings array
  const warnings: string[] = [];

  if (input.annualPMI > 0 && downPaymentPercent >= 20) {
    warnings.push(`PMI is being charged despite ${downPaymentPercent.toFixed(1)}% down payment. PMI typically not required at 20%+ down payment.`);
  }

  if (input.annualPMI > 0 && !input.grossAnnualIncome) {
    warnings.push("PMI deduction calculated at full amount. Provide gross annual income for accurate phase-out calculation.");
  }

  if (input.annualPMI > 0 && input.grossAnnualIncome) {
    const phaseOutStart = input.filingStatus === 'marriedFilingSeparately' ? 50000 : 100000;
    const phaseOutEnd = input.filingStatus === 'marriedFilingSeparately' ? 54500 : 109000;
    
    if (input.grossAnnualIncome >= phaseOutEnd) {
      warnings.push(`PMI is not deductible due to income over $${phaseOutEnd.toLocaleString()} AGI limit.`);
    } else if (input.grossAnnualIncome > phaseOutStart) {
      warnings.push(`PMI deduction is reduced due to income phase-out ($${phaseOutStart.toLocaleString()}-$${phaseOutEnd.toLocaleString()} AGI).`);
    }
  }

  if (input.annualPropertyTaxes > SALT_CAP) {
    warnings.push(`Property tax deduction capped at $${SALT_CAP.toLocaleString()} due to SALT limit. Only $${propertyTaxDeduction.toLocaleString()} of $${input.annualPropertyTaxes.toLocaleString()} is deductible.`);
  }

  if (stateTaxSavings > 0) {
    warnings.push("State tax savings is a simplified estimate assuming same deductions apply. Actual benefit may vary based on state-specific rules.");
  }

  return {
    // Tax Savings (Separated)
    federalTaxSavings: Math.round(federalTaxSavings),
    stateTaxSavings: Math.round(stateTaxSavings),
    estimatedAnnualTaxSavings: Math.round(annualTaxSavings),
    
    // Deduction Analysis
    standardDeduction,
    totalItemizedDeductions: Math.round(totalItemizedDeductions),
    standardDeductionComparison: comparison,
    
    // Itemized Breakdown
    mortgageInterestDeduction: Math.round(mortgageInterestDeduction),
    propertyTaxDeduction: Math.round(propertyTaxDeduction),
    pmiDeduction: Math.round(pmiDeduction),
    pointsDeduction: Math.round(pointsDeduction),
    
    // Cost Analysis
    afterTaxCostOfOwnership: Math.round(afterTaxCostOfOwnership),
    totalOwnershipCostBreakdown,
    
    // Multi-Year Analysis
    totalTaxSavingsOverYears: Math.round(totalTaxSavingsOverYears),
    
    // Comparative Metrics
    effectiveInterestRate: parseFloat(effectiveInterestRate.toFixed(2)),
    
    // Validation/Warnings
    warnings: warnings.length > 0 ? warnings : undefined,
  };
}
