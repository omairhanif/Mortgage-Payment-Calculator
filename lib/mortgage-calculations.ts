/**
 * Reusable Mortgage Calculation Primitives
 * 
 * This file contains core mortgage calculation functions that are used across
 * multiple calculators. These are pure mathematical primitives without
 * calculator-specific business logic.
 * 
 * Exported functions:
 * - Rate conversions
 * - Loan amount calculations
 * - Down payment calculations
 * - LTV calculations
 * - PMI calculations
 * - Property tax calculations
 * - Monthly payment calculations
 * - Closing cost calculations
 * - Amortization loop helpers
 */

// ============================================================================
// Core Conversion & Rate Functions
// ============================================================================

/**
 * Converts annual interest rate percentage to monthly rate
 * @param annualPercent - Annual interest rate as percentage (e.g., 6.5)
 * @returns Monthly rate as decimal (e.g., 0.00541667)
 */
export function toMonthlyRate(annualPercent: number): number {
  return annualPercent / 12 / 100;
}

// ============================================================================
// Loan Amount & Down Payment Functions
// ============================================================================

/**
 * Calculates loan amount from home value and down payment
 * @param homeValue - Total home/property value
 * @param downPayment - Down payment amount in dollars
 * @returns Loan amount (homeValue - downPayment, minimum 0)
 */
export function calculateLoanAmount(homeValue: number, downPayment: number): number {
  return Math.max(0, homeValue - downPayment);
}

/**
 * Resolves down payment amount based on dollar or percent mode
 * @param mode - "dollar" or "percent" mode
 * @param homeValue - Total home/property value
 * @param dollarAmount - Down payment in dollars (used if mode is "dollar")
 * @param percentAmount - Down payment as percentage (used if mode is "percent")
 * @returns Down payment amount in dollars
 */
export function resolveDownPayment(
  mode: "dollar" | "percent",
  homeValue: number,
  dollarAmount?: number,
  percentAmount?: number
): number {
  return mode === "percent"
    ? (homeValue * (percentAmount || 0) / 100)
    : (dollarAmount || 0);
}

/**
 * Calculates down payment amount from percentage
 * @param homeValue - Total home/property value
 * @param percent - Down payment as percentage (e.g., 20 for 20%)
 * @returns Down payment amount in dollars
 */
export function downPaymentFromPercent(homeValue: number, percent: number): number {
  return (homeValue * percent) / 100;
}

/**
 * Calculates down payment percentage from dollar amount
 * @param downPayment - Down payment amount in dollars
 * @param homeValue - Total home/property value
 * @returns Down payment as percentage (e.g., 20 for 20%)
 */
export function downPaymentPercent(downPayment: number, homeValue: number): number {
  if (homeValue === 0) return 0;
  return (downPayment / homeValue) * 100;
}

/**
 * Calculates loan amount from home value and down payment percentage
 * @param homeValue - Total home/property value
 * @param downPercent - Down payment as percentage (e.g., 20 for 20%)
 * @returns Loan amount in dollars
 */
export function loanAmountFromDownPercent(homeValue: number, downPercent: number): number {
  const downPayment = downPaymentFromPercent(homeValue, downPercent);
  return Math.max(0, homeValue - downPayment);
}

/**
 * Synchronizes and calculates loan values
 * @param homeValue - Total home/property value
 * @param downPayment - Down payment amount in dollars
 * @returns Object with loanAmount and downPaymentPercent
 */
export function syncLoanValues(
  homeValue: number,
  downPayment: number
): { loanAmount: number; downPaymentPercent: number } {
  const loanAmount = calculateLoanAmount(homeValue, downPayment);
  const percent = downPaymentPercent(downPayment, homeValue);
  return { loanAmount, downPaymentPercent: percent };
}

/**
 * Resolves loan details from input parameters
 * @param homeValue - Total home/property value
 * @param downPaymentMode - "dollar" or "percent" mode
 * @param downPaymentDollars - Down payment in dollars
 * @param downPaymentPercent - Down payment as percentage
 * @param providedLoanAmount - Optional pre-calculated loan amount
 * @returns Object with downPayment and loanAmount
 */
export function resolveLoanDetails(
  homeValue: number,
  downPaymentMode: "dollar" | "percent",
  downPaymentDollars?: number,
  downPaymentPercent?: number,
  providedLoanAmount?: number
): { downPayment: number; loanAmount: number } {
  const downPayment = resolveDownPayment(downPaymentMode, homeValue, downPaymentDollars, downPaymentPercent);
  const loanAmount = providedLoanAmount || calculateLoanAmount(homeValue, downPayment);
  return { downPayment, loanAmount };
}

// ============================================================================
// LTV (Loan-to-Value) Functions
// ============================================================================

/**
 * Calculates Loan-to-Value (LTV) ratio
 * @param loanAmount - Loan amount in dollars
 * @param homeValue - Total home/property value
 * @returns LTV ratio as percentage (e.g., 80 for 80%)
 */
export function calculateLTV(loanAmount: number, homeValue: number): number {
  return homeValue > 0 ? (loanAmount / homeValue) * 100 : 0;
}

/**
 * Internal helper for calculating LTV (kept for backward compatibility)
 */
export function _calculateLTV(loanAmount: number, homeValue: number): number {
  return homeValue > 0 ? (loanAmount / homeValue) * 100 : 0;
}

/**
 * Internal helper for calculating down payment percentage (kept for backward compatibility)
 */
export function _calculateDownPaymentPercent(downPayment: number, homeValue: number): number {
  return homeValue > 0 ? (downPayment / homeValue) * 100 : 100;
}

// ============================================================================
// PMI (Private Mortgage Insurance) Functions
// ============================================================================

/**
 * Checks if PMI is required based on LTV ratio
 * @param loanAmount - Loan amount in dollars
 * @param homeValue - Total home/property value
 * @returns True if LTV > 80% (PMI required)
 */
export function isPMIRequired(loanAmount: number, homeValue: number): boolean {
  return calculateLTV(loanAmount, homeValue) > 80;
}

/**
 * Calculates monthly PMI payment
 * @param loanAmount - Loan amount in dollars
 * @param annualPMIPercent - Annual PMI rate as percentage (e.g., 0.5 for 0.5%)
 * @returns Monthly PMI payment amount
 */
export function calculateMonthlyPMI(
  loanAmount: number,
  annualPMIPercent: number
): number {
  if (loanAmount <= 0 || annualPMIPercent <= 0) return 0;
  return (loanAmount * (annualPMIPercent / 100)) / 12;
}

// ============================================================================
// Monthly Payment Calculations
// ============================================================================

/**
 * Calculates monthly Principal & Interest (P&I) payment
 * Standard mortgage payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
 * 
 * @param loanAmount - Principal loan amount
 * @param annualRatePercent - Annual interest rate as percentage (e.g., 6.5)
 * @param termYears - Loan term in years
 * @returns Monthly principal and interest payment
 */
export function calculateMonthlyPI(
  loanAmount: number,
  annualRatePercent: number,
  termYears: number
): number {
  if (loanAmount <= 0 || termYears <= 0) return 0;
  const monthlyRate = toMonthlyRate(annualRatePercent);
  const numberOfPayments = termYears * 12;
  if (monthlyRate === 0) return loanAmount / numberOfPayments;
  return (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
}

/**
 * Calculates total interest paid over the life of the loan
 * @param monthlyPI - Monthly principal and interest payment
 * @param termYears - Loan term in years
 * @param loanAmount - Principal loan amount
 * @returns Total interest paid
 */
export function calculateTotalInterest(
  monthlyPI: number,
  termYears: number,
  loanAmount: number
): number {
  const totalPayments = monthlyPI * termYears * 12;
  return Math.max(0, totalPayments - loanAmount);
}

// ============================================================================
// Property Tax & Insurance Functions
// ============================================================================

/**
 * Calculates property tax payment
 * @param homeValue - Total home/property value
 * @param taxRatePercent - Annual property tax rate as percentage
 * @param frequency - Return monthly or annual amount
 * @returns Property tax amount (monthly or annual based on frequency)
 */
export function calculatePropertyTax(
  homeValue: number,
  taxRatePercent: number,
  frequency: 'monthly' | 'annual' = 'monthly'
): number {
  const annualTax = (homeValue * taxRatePercent) / 100;
  return frequency === 'monthly' ? annualTax / 12 : annualTax;
}

// ============================================================================
// Closing Costs & Fees
// ============================================================================

/**
 * Calculates total cash needed at closing
 * @param downPayment - Down payment amount
 * @param loanAmount - Loan amount
 * @param discountPtsPercent - Discount points as percentage of loan
 * @param originationPtsPercent - Origination points as percentage of loan
 * @param otherCosts - Other closing costs
 * @returns Total cash needed at closing
 */
export function calculateClosingCash(
  downPayment: number,
  loanAmount: number,
  discountPtsPercent: number,
  originationPtsPercent: number,
  otherCosts: number
): number {
  const discountPointsCost = (loanAmount * discountPtsPercent) / 100;
  const originationPointsCost = (loanAmount * originationPtsPercent) / 100;

  return downPayment + discountPointsCost + originationPointsCost + otherCosts;
}

// ============================================================================
// Date Calculations
// ============================================================================

/**
 * Calculates loan payoff date from start date and term
 * @param startDate - Loan start date
 * @param termYears - Loan term in years
 * @returns Payoff date
 */
export function calculatePayoffDate(startDate: Date, termYears: number): Date {
  const payoffDate = new Date(startDate);
  payoffDate.setFullYear(payoffDate.getFullYear() + termYears);
  return payoffDate;
}

// ============================================================================
// Advanced Helper Functions
// ============================================================================

/**
 * Binary search algorithm to find maximum affordable home price
 * @param downPayment - Available down payment
 * @param maxBudget - Maximum monthly payment budget
 * @param minPrice - Minimum search price
 * @param maxPrice - Maximum search price
 * @param calculatePayment - Function to calculate monthly payment for a given price and loan
 * @returns Maximum affordable home price
 */
export function binarySearchAffordablePrice(
  downPayment: number,
  maxBudget: number,
  minPrice: number,
  maxPrice: number,
  calculatePayment: (price: number, loanAmount: number) => number
): number {
  let low = minPrice;
  let high = maxPrice;
  let affordable = minPrice;
  for (let iter = 0; iter < 40; iter++) {
    const mid = (low + high) / 2;
    const loan = Math.max(0, mid - downPayment);
    const payment = calculatePayment(mid, loan);
    if (payment < maxBudget) {
      affordable = mid;
      low = mid;
    } else {
      high = mid;
    }
  }
  return affordable;
}

/**
 * Standard amortization loop for calculating payoff timeline
 * @param loanAmount - Principal loan amount
 * @param monthlyRate - Monthly interest rate (as decimal)
 * @param monthlyPayment - Regular monthly payment amount
 * @param maxPayments - Maximum number of payments to process
 * @param extraPaymentFn - Optional function to calculate extra payment for a given month
 * @returns Object with totalInterest and monthCount
 */
export function runAmortizationLoop(
  loanAmount: number,
  monthlyRate: number,
  monthlyPayment: number,
  maxPayments: number,
  extraPaymentFn?: (month: number) => number
): { totalInterest: number; monthCount: number } {
  let balance = loanAmount;
  let totalInterest = 0;
  let monthCount = 0;
  while (balance > 0 && monthCount < maxPayments) {
    monthCount++;
    const interestPayment = balance * monthlyRate;
    const principalPayment = Math.min(monthlyPayment - interestPayment, balance);
    const extraPayment = extraPaymentFn ? extraPaymentFn(monthCount) : 0;
    const totalPrincipal = Math.min(principalPayment + extraPayment, balance);
    totalInterest += interestPayment;
    balance = Math.max(0, balance - totalPrincipal);
    if (balance < 0.01) break;
  }
  return { totalInterest, monthCount };
}

// ============================================================================
// Conforming Loan Limits
// ============================================================================

/**
 * Get conforming loan limit by state and county
 * Used for determining jumbo loan thresholds
 * 
 * @param state - State abbreviation (e.g., "CA", "NY")
 * @param county - County name
 * @returns Conforming loan limit for the area
 */
export function getConformingLimit(state: string, county: string): number {
  const BASELINE_LIMIT = 766550;
  const HIGH_COST_LIMIT = 1149825;

  const highCostAreas: Record<string, string[]> = {
    'CA': ['San Francisco', 'Los Angeles', 'San Diego', 'Orange', 'Santa Clara', 'Marin', 'San Mateo'],
    'NY': ['New York', 'Kings', 'Queens', 'Bronx', 'Richmond', 'Nassau', 'Suffolk', 'Westchester'],
    'HI': ['Honolulu', 'Maui', 'Kauai'],
    'DC': ['District of Columbia'],
    'CO': ['Boulder', 'Denver'],
    'WA': ['King', 'Snohomish'],
    'MA': ['Suffolk', 'Middlesex', 'Norfolk'],
  };

  const stateHighCost = highCostAreas[state.toUpperCase()];
  if (stateHighCost && stateHighCost.some(c => county.toLowerCase().includes(c.toLowerCase()))) {
    return HIGH_COST_LIMIT;
  }

  return BASELINE_LIMIT;
}
