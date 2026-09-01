"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  calculateMonthlyPI,
  calculateMonthlyPMI,
  calculateTotalInterest,
  calculateClosingCash,
  calculatePayoffDate,
  generateAmortizationSchedule,
  calculateSecondMortgage,
  calculateHeloc,
  calculateRefinance,
  calculateRealAPR,
  type SecondMortgageInput,
  type HelocInput,
  type RefinanceInput,
  type RealAPRInput,
} from "@/lib/mortgage";
import { formatCurrency } from "@/lib/utils";
import { getCalculatorConfig, type SubCalculatorConfig, type CalculatorInput as ConfigCalculatorInput, type InputConfig, type ResultConfig } from "@/lib/calculator-configs";
import {
  Home,
  DollarSign,
  Percent,
  Calendar,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Calculator,
  Plus,
  Trash2,
  TrendingUp,
} from "lucide-react";
import CalculatorResult, { type ResultMetric, ConfigConsolidatedResult, ConfigAmortizationSchedule } from "./CalculatorResult";
import {
  NumberInput,
  NumberInputWithBadge,
  ToggleMultiple,
  DualInputField,
  ConditionalField,
  ConfigInputField,
  Card,
} from "./CalculatorFields";


interface MortgageCalculatorProps {
  category?: string;
  isHomepage?: boolean;
  forcedSubcalculator?: string; // Force a specific subcalculator (for standalone pages)
}

interface ConfigCalculatorRendererProps {
  config: SubCalculatorConfig;
  onBack: () => void;
  isHomepage?: boolean;
}

export default function MortgageCalculator({ category = "mortgage", isHomepage = false, forcedSubcalculator }: MortgageCalculatorProps) {
  const searchParams = forcedSubcalculator ? null : useSearchParams();
  const router = useRouter();
  
  // Get sub-calculators based on category
  const getTabs = () => {
    switch (category) {
      case "mortgage":
        return [
          { id: "second", label: "Second Mortgage" },
          { id: "heloc", label: "HELOC" },
          { id: "refinance", label: "Refinance" },
        ];
      case "affordability":
        return [
          { id: "rent-vs-buy", label: "Rent vs Buy" },
          { id: "income", label: "Income Requirement" },
          { id: "qualification", label: "Mortgage Affordability" },
        ];
      case "arm":
        return [
          { id: "fixed-vs-arm", label: "Fixed vs ARM" },
          { id: "interest-only", label: "Interest-Only" },
          { id: "interest-only-extra", label: "Interest-Only + Extra Payments" },
          { id: "balloon", label: "Balloon Mortgage" },
        ];
      case "savings":
        return [
          { id: "extra-payment", label: "Extra Payment" },
          { id: "biweekly", label: "Biweekly Payment" },
          { id: "points", label: "Paying Points" },
          { id: "tax-benefits", label: "Tax Benefits" },
        ];
      case "rates":
        return [
          { id: "real-apr", label: "Real APR Calculator" },
          { id: "fha", label: "FHA Loan Calculator" },
          { id: "va", label: "VA Loan Calculator" },
          { id: "jumbo", label: "Jumbo Loan Calculator" },
        ];
      default:
        return [{ id: "basic", label: "Calculator" }];
    }
  };

  const tabs = getTabs();
  
  // Get subcalculator from URL or use forced subcalculator or default to first calculator in list
  // forcedSubcalculator takes precedence (for standalone pages)
  // Homepage doesn't use tab system, category pages do
  const subcalculatorParam = forcedSubcalculator || (isHomepage ? null : (searchParams?.get("subcalculator") || tabs[0].id));
  const activeTab = subcalculatorParam || tabs[0].id;
  
  // Get the base path for the current category
  const getBasePath = () => {
    switch (category) {
      case "mortgage": return "/mortgage";
      case "affordability": return "/affordability";
      case "arm": return "/arm";
      case "savings": return "/savings";
      case "refinance": return "/mortgage";
      case "rates": return "/rates";
      default: return "/";
    }
  };
  
  // Input States
  const [homeValue, setHomeValue] = useState<number>(400000);
  const [downPayment, setDownPayment] = useState<number>(80000); // 20%
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanAmount, setLoanAmount] = useState<number>(320000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);
  const [pmiRate, setPmiRate] = useState<number>(0.7);
  
  // Closing Costs
  const [discountPoints, setDiscountPoints] = useState<number>(0);
  const [originationPoints, setOriginationPoints] = useState<number>(0);
  const [otherClosingCosts, setOtherClosingCosts] = useState<number>(5000);
  
  // Homeownership Expenses
  const [annualPropertyTax, setAnnualPropertyTax] = useState<number>(4800);
  const [annualInsurance, setAnnualInsurance] = useState<number>(1200);
  const [monthlyHOA, setMonthlyHOA] = useState<number>(150);
  
  // UI State
  const [showAmortization, setShowAmortization] = useState<boolean>(false);
  const [dpMode, setDpMode] = useState<"dollar" | "percent">("percent");

  // Calculation Inputs State (used for calculations - updated only on Calculate button click)
  const [calcInputs, setCalcInputs] = useState({
    homeValue: 400000,
    downPayment: 80000,
    downPaymentPercent: 20,
    loanAmount: 320000,
    interestRate: 6.5,
    loanTermYears: 30,
    pmiRate: 0.7,
    discountPoints: 0,
    originationPoints: 0,
    otherClosingCosts: 5000,
    annualPropertyTax: 4800,
    annualInsurance: 1200,
    monthlyHOA: 150,
  });

  // Second Mortgage Calculator State
  const [smHomeValue, setSmHomeValue] = useState<number>(400000);
  const [smExistingMortgage, setSmExistingMortgage] = useState<number>(0);
  const [smDownPayment, setSmDownPayment] = useState<number>(80000);
  
  // Loan amounts for each scenario (editable by user)
  const [sm1LoanAmount, setSm1LoanAmount] = useState<number>(320000);
  const [sm2LoanAmount, setSm2LoanAmount] = useState<number>(320000);
  const [sm3FirstLoanAmount, setSm3FirstLoanAmount] = useState<number>(320000);
  const [sm3SecondLoanAmount, setSm3SecondLoanAmount] = useState<number>(0);
  
  // Scenario 1: Single loan with PMI
  const [sm1Rate, setSm1Rate] = useState<number>(6.5);
  const [sm1Term, setSm1Term] = useState<number>(30);
  const [sm1Points, setSm1Points] = useState<number>(0);
  const [sm1Closing, setSm1Closing] = useState<number>(3000);
  
  // Scenario 2: 80% LTV, no PMI
  const [sm2Rate, setSm2Rate] = useState<number>(6.5);
  const [sm2Term, setSm2Term] = useState<number>(30);
  const [sm2Points, setSm2Points] = useState<number>(0);
  const [sm2Closing, setSm2Closing] = useState<number>(3000);
  
  // Scenario 3: Piggyback second mortgage
  const [sm3FirstRate, setSm3FirstRate] = useState<number>(6.5);
  const [sm3SecondRate, setSm3SecondRate] = useState<number>(7.5);
  const [sm3Term, setSm3Term] = useState<number>(30);
  const [sm3Points, setSm3Points] = useState<number>(0);
  const [sm3Closing, setSm3Closing] = useState<number>(3500);
  
  const [smResults, setSmResults] = useState<any>(null);

  // HELOC Calculator State
  const [helocHomeValue, setHelocHomeValue] = useState<number>(400000);
  const [helocExistingMortgage, setHelocExistingMortgage] = useState<number>(200000);
  const [helocCreditLimit, setHelocCreditLimit] = useState<number>(50000);
  const [helocInterestRate, setHelocInterestRate] = useState<number>(7.5);
  const [helocDrawPeriod, setHelocDrawPeriod] = useState<number>(10);
  const [helocRepaymentPeriod, setHelocRepaymentPeriod] = useState<number>(15);
  const [helocClosingCosts, setHelocClosingCosts] = useState<number>(2000);
  const [helocFederalTaxRate, setHelocFederalTaxRate] = useState<number>(22);
  const [helocMonthlyIncome, setHelocMonthlyIncome] = useState<number>(8000);
  
  // Dynamic debt list
  const [helocDebts, setHelocDebts] = useState<Array<{name: string, balance: number, monthlyPayment: number, rate: number}>>([
    { name: "Credit Card 1", balance: 5000, monthlyPayment: 150, rate: 18.5 },
    { name: "Credit Card 2", balance: 8000, monthlyPayment: 200, rate: 21.0 },
  ]);
  
  const [helocResults, setHelocResults] = useState<any>(null);

  // Refinance Calculator State
  const [refOriginalHomePrice, setRefOriginalHomePrice] = useState<number>(400000);
  const [refOriginalDownPayment, setRefOriginalDownPayment] = useState<number>(80000);
  const [refOriginalLoanAmount, setRefOriginalLoanAmount] = useState<number>(320000);
  const [refOriginalTerm, setRefOriginalTerm] = useState<number>(30);
  const [refOriginalRate, setRefOriginalRate] = useState<number>(7.5);
  const [refMonthsPaid, setRefMonthsPaid] = useState<number>(60); // 5 years
  const [refNewTerm, setRefNewTerm] = useState<number>(30);
  const [refNewRate, setRefNewRate] = useState<number>(5.5);
  const [refClosingCosts, setRefClosingCosts] = useState<number>(5000);
  
  const [refResults, setRefResults] = useState<any>(null);

  // Real APR Calculator State
  const [aprHomePrice, setAprHomePrice] = useState<number>(400000);
  const [aprDownPayment, setAprDownPayment] = useState<number>(80000);
  const [aprInterestRate, setAprInterestRate] = useState<number>(6.5);
  const [aprLoanTerm, setAprLoanTerm] = useState<number>(30);
  const [aprDiscountPoints, setAprDiscountPoints] = useState<number>(1);
  const [aprOriginationFees, setAprOriginationFees] = useState<number>(1);
  const [aprOtherClosingCosts, setAprOtherClosingCosts] = useState<number>(5000);
  const [aprResults, setAprResults] = useState<any>(null);

  // Refs for scrolling to results
  const mainResultsRef = useRef<HTMLDivElement>(null);
  const secondMortgageResultsRef = useRef<HTMLDivElement>(null);
  const helocResultsRef = useRef<HTMLDivElement>(null);
  const refinanceResultsRef = useRef<HTMLDivElement>(null);
  const realAprResultsRef = useRef<HTMLDivElement>(null);

  // Helper function to scroll to results with proper offset
  const scrollToResults = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -100; // Negative offset for padding from top (100px breathing room)
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Handlers for syncing home value, down payment, and loan amount
  const handleHomeValueChange = (newHomeValue: number) => {
    setHomeValue(newHomeValue);
    const newLoanAmount = Math.max(0, newHomeValue - downPayment);
    setLoanAmount(newLoanAmount);
    
    if (newHomeValue > 0) {
      const calculatedPercent = parseFloat(((downPayment / newHomeValue) * 100).toFixed(2));
      setDownPaymentPercent(calculatedPercent);
    } else {
      setDownPaymentPercent(0);
    }
  };

  const handleDpChange = (val: number) => {
    setDownPayment(val);
    const newLoanAmount = Math.max(0, homeValue - val);
    setLoanAmount(newLoanAmount);
    
    if (homeValue > 0) {
      setDownPaymentPercent(parseFloat(((val / homeValue) * 100).toFixed(2)));
    }
  };

  const handleDpPercentChange = (val: number) => {
    setDownPaymentPercent(val);
    const calculatedDp = Math.round((homeValue * val) / 100);
    setDownPayment(calculatedDp);
    const newLoanAmount = Math.max(0, homeValue - calculatedDp);
    setLoanAmount(newLoanAmount);
  };

  const handleLoanAmountChange = (newLoan: number) => {
    setLoanAmount(newLoan);
    const newDp = Math.max(0, homeValue - newLoan);
    setDownPayment(newDp);
    
    if (homeValue > 0) {
      const calculatedPercent = parseFloat(((newDp / homeValue) * 100).toFixed(2));
      setDownPaymentPercent(calculatedPercent);
    } else {
      setDownPaymentPercent(0);
    }
  };

  // Auto-sync second mortgage scenario loan amounts when home value or down payment changes
  useEffect(() => {
    const totalNeeded = smHomeValue - smDownPayment;
    const eightyPercentLTV = Math.round(smHomeValue * 0.8);
    
    setSm1LoanAmount(totalNeeded); // Scenario 1: borrow what's needed
    setSm2LoanAmount(eightyPercentLTV); // Scenario 2: 80% LTV only
    setSm3FirstLoanAmount(eightyPercentLTV); // Scenario 3 first: 80%
    setSm3SecondLoanAmount(Math.max(0, totalNeeded - eightyPercentLTV)); // Scenario 3 second: remainder
  }, [smHomeValue, smDownPayment]);

  // Handle Calculate button click - update calcInputs with current input values
  const handleCalculate = (shouldScroll = true) => {
    setCalcInputs({
      homeValue,
      downPayment,
      downPaymentPercent,
      loanAmount,
      interestRate,
      loanTermYears,
      pmiRate,
      discountPoints,
      originationPoints,
      otherClosingCosts,
      annualPropertyTax,
      annualInsurance,
      monthlyHOA,
    });
    
    // Scroll to results after a short delay to ensure results are rendered
    if (shouldScroll) {
      setTimeout(() => {
        scrollToResults(mainResultsRef);
      }, 100);
    }
  };

  // Handle Second Mortgage Calculate
  const handleSecondMortgageCalculate = (shouldScroll = true) => {
    // Use user-entered loan amounts from state (editable by user)
    const loanAmount1 = sm1LoanAmount;
    const loanAmount2 = sm2LoanAmount;
    const firstLoan3 = sm3FirstLoanAmount;
    const secondLoan3 = sm3SecondLoanAmount;

    const input: SecondMortgageInput = {
      homeValue: smHomeValue,
      existingMortgageBalance: smExistingMortgage,
      scenario1: {
        name: "Single Loan with PMI",
        loanAmount: loanAmount1,
        rate: sm1Rate,
        termYears: sm1Term,
        points: sm1Points,
        closingCosts: sm1Closing,
      },
      scenario2: {
        name: "80% LTV, No PMI",
        loanAmount: loanAmount2,
        rate: sm2Rate,
        termYears: sm2Term,
        points: sm2Points,
        closingCosts: sm2Closing,
      },
      scenario3: {
        name: "Piggyback Second Mortgage",
        loanAmount: firstLoan3 + secondLoan3,
        rate: sm3FirstRate, // We'll handle weighted calculation in results display
        termYears: sm3Term,
        points: sm3Points,
        closingCosts: sm3Closing,
      },
    };

    // Calculate standard scenarios
    const results = calculateSecondMortgage(input);
    
    // For Scenario 3, manually calculate piggyback with two separate loans
    const calculateLoanPayment = (principal: number, rate: number, years: number) => {
      const monthlyRate = rate / 12 / 100;
      const numPayments = years * 12;
      if (principal > 0 && monthlyRate > 0) {
        return (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
               (Math.pow(1 + monthlyRate, numPayments) - 1);
      }
      return principal > 0 ? principal / numPayments : 0;
    };

    // Calculate first and second loans separately for Scenario 3
    const firstLoanPayment = calculateLoanPayment(firstLoan3, sm3FirstRate, sm3Term);
    const secondLoanPayment = calculateLoanPayment(secondLoan3, sm3SecondRate, sm3Term);
    const totalMonthlyPayment3 = firstLoanPayment + secondLoanPayment;
    
    const totalPayments3 = totalMonthlyPayment3 * sm3Term * 12;
    const totalInterest3 = totalPayments3 - (firstLoan3 + secondLoan3);
    const upfrontCosts3 = sm3Closing + ((firstLoan3 + secondLoan3) * (sm3Points / 100));
    const totalCost3 = totalInterest3 + upfrontCosts3;

    // Override Scenario 3 results with accurate piggyback calculation
    results.scenario3Result = {
      monthlyPayment: totalMonthlyPayment3,
      totalInterest: totalInterest3,
      totalPMICost: 0, // Piggyback avoids PMI
      totalCost: totalCost3,
      ltvPercent: ((firstLoan3 + secondLoan3) / smHomeValue) * 100,
      hasPMI: false,
    };

    // Recalculate recommended scenario
    const costs = [
      { scenario: 1, cost: results.scenario1Result.totalCost },
      { scenario: 2, cost: results.scenario2Result.totalCost },
      { scenario: 3, cost: results.scenario3Result.totalCost },
    ];
    costs.sort((a, b) => a.cost - b.cost);
    results.recommendedScenario = costs[0].scenario;

    setSmResults(results);
    
    // Scroll to results after a short delay to ensure results are rendered
    if (shouldScroll) {
      setTimeout(() => {
        scrollToResults(secondMortgageResultsRef);
      }, 100);
    }
  };

  // HELOC Debt Management
  const addHelocDebt = () => {
    setHelocDebts([...helocDebts, { name: `Debt ${helocDebts.length + 1}`, balance: 0, monthlyPayment: 0, rate: 0 }]);
  };

  const removeHelocDebt = (index: number) => {
    setHelocDebts(helocDebts.filter((_, i) => i !== index));
  };

  const updateHelocDebt = (index: number, field: string, value: string | number) => {
    const updated = [...helocDebts];
    updated[index] = { ...updated[index], [field]: value };
    setHelocDebts(updated);
  };

  // Handle HELOC Calculate
  const handleHelocCalculate = (shouldScroll = true) => {
    const input: HelocInput = {
      homeValue: helocHomeValue,
      existingMortgageBalance: helocExistingMortgage,
      helocCreditLimit: helocCreditLimit,
      interestRate: helocInterestRate,
      drawPeriodYears: helocDrawPeriod,
      repaymentPeriodYears: helocRepaymentPeriod,
      closingCosts: helocClosingCosts,
      federalTaxRate: helocFederalTaxRate,
      existingDebts: helocDebts,
      monthlyIncome: helocMonthlyIncome,
    };

    const results = calculateHeloc(input);
    setHelocResults(results);
    
    // Scroll to results after a short delay to ensure results are rendered
    if (shouldScroll) {
      setTimeout(() => {
        scrollToResults(helocResultsRef);
      }, 100);
    }
  };

  // Handle Refinance Calculate
  const handleRefinanceCalculate = (shouldScroll = true) => {
    // Input validation
    const maxMonthsPaid = refOriginalTerm * 12;
    
    if (refOriginalLoanAmount <= 0) {
      alert('Original loan amount must be greater than 0');
      return;
    }
    if (refOriginalTerm <= 0) {
      alert('Original term must be greater than 0');
      return;
    }
    if (refOriginalRate < 0) {
      alert('Current rate cannot be negative');
      return;
    }
    if (refMonthsPaid < 0) {
      alert('Months paid cannot be negative');
      return;
    }
    if (refMonthsPaid > maxMonthsPaid) {
      alert(`Months paid cannot exceed ${maxMonthsPaid} months (${refOriginalTerm} years)`);
      return;
    }
    if (refNewRate < 0) {
      alert('New rate cannot be negative');
      return;
    }
    if (refNewTerm <= 0) {
      alert('New term must be greater than 0');
      return;
    }
    if (refClosingCosts < 0) {
      alert('Closing costs cannot be negative');
      return;
    }

    const input: RefinanceInput = {
      originalLoanAmount: refOriginalLoanAmount,
      originalTermYears: refOriginalTerm,
      currentRate: refOriginalRate,
      monthsPaid: refMonthsPaid,
      newRate: refNewRate,
      newTermYears: refNewTerm,
      refinanceCosts: refClosingCosts,
    };

    try {
      const results = calculateRefinance(input);
      setRefResults(results);
      
      // Scroll to results after a short delay to ensure results are rendered
      if (shouldScroll) {
        setTimeout(() => {
          scrollToResults(refinanceResultsRef);
        }, 100);
      }
    } catch (error) {
      alert(`Calculation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  // Handle Real APR Calculate
  const handleRealAPRCalculate = (shouldScroll = true) => {
    const input: RealAPRInput = {
      homePrice: aprHomePrice,
      downPayment: aprDownPayment,
      interestRate: aprInterestRate,
      loanTermYears: aprLoanTerm,
      discountPoints: aprDiscountPoints,
      originationFees: aprOriginationFees,
      otherClosingCosts: aprOtherClosingCosts,
    };

    const results = calculateRealAPR(input);
    setAprResults(results);
    
    // Scroll to results after a short delay to ensure results are rendered
    if (shouldScroll) {
      setTimeout(() => {
        scrollToResults(realAprResultsRef);
      }, 100);
    }
  };



  // Calculate default results on component mount or tab change
  // Note: We intentionally call setState handlers within useEffect to display
  // pre-calculated results immediately when component mounts or tab changes.
  useEffect(() => {
    if (isHomepage) {
      handleCalculate(false); // Don't scroll on auto-load
    } else if (activeTab === "second") {
      handleSecondMortgageCalculate(false);
    } else if (activeTab === "heloc") {
      handleHelocCalculate(false);
    } else if (activeTab === "refinance") {
      handleRefinanceCalculate(false);
    } else if (activeTab === "real-apr") {
      handleRealAPRCalculate(false);
    }
  }, [activeTab, isHomepage]);

  // Calculations using our helper functions (using calcInputs)
  const isPMIRequired = calcInputs.downPaymentPercent < 20 && calcInputs.loanAmount > 0;
  const monthlyPI = calculateMonthlyPI(calcInputs.loanAmount, calcInputs.interestRate, calcInputs.loanTermYears);
  const monthlyPMI = isPMIRequired ? calculateMonthlyPMI(calcInputs.loanAmount, calcInputs.pmiRate) : 0;
  const monthlyTax = calcInputs.annualPropertyTax / 12;
  const monthlyInsurance = calcInputs.annualInsurance / 12;
  const totalMonthlyPayment = monthlyPI + monthlyPMI + monthlyTax + monthlyInsurance + calcInputs.monthlyHOA;
  const totalInterest = calculateTotalInterest(monthlyPI, calcInputs.loanTermYears, calcInputs.loanAmount);
  const cashToClose = calculateClosingCash(calcInputs.downPayment, calcInputs.loanAmount, calcInputs.discountPoints, calcInputs.originationPoints, calcInputs.otherClosingCosts);
  const payoffDate = calculatePayoffDate(new Date(), calcInputs.loanTermYears);
  const amortizationSchedule = showAmortization ? generateAmortizationSchedule(calcInputs.loanAmount, calcInputs.interestRate, calcInputs.loanTermYears) : [];

  // Try to get calculator config
  const calculatorConfig = getCalculatorConfig(category, activeTab);

  // If there's a config, use the generic ConfigCalculatorRenderer
  if (calculatorConfig) {
    return (
      <div className="mx-auto max-w-5xl">
        <ConfigCalculatorRenderer 
          config={calculatorConfig}
          onBack={() => router.push(getBasePath())}
          isHomepage={isHomepage}
        />
      </div>
    );
  }

  // Otherwise, use inline implementations below (Second Mortgage, HELOC, Refinance)

  return (
    <div className="mx-auto max-w-5xl">
      {/* Main Calculator Grid */}
      {isHomepage ? (
          <>
        

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* LEFT COLUMN - INPUTS */}
            <div className="lg:col-span-7 space-y-4">
              {/* Standardized Input Card */}
              {/* Input Card */}
              <Card
                title="Calculator Inputs"
                icon={<Calculator className="h-4 w-4 text-indigo-600" />}
              >
                <div className="space-y-4">
                  {/* Property & Loan Details Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Property & Loan Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <NumberInput
                        label="Home Value"
                        value={homeValue}
                        onChange={handleHomeValueChange}
                        min={50000}
                        max={1500000}
                        step={10000}
                      />
                      <NumberInput
                        label="Loan Amount"
                        value={loanAmount}
                        onChange={handleLoanAmountChange}
                      />
                      <div className="md:col-span-2">
                        <DualInputField
                          label="Down Payment"
                          mode={dpMode}
                          onModeChange={setDpMode}
                          dollarValue={downPayment}
                          percentValue={downPaymentPercent}
                          onDollarChange={handleDpChange}
                          onPercentChange={handleDpPercentChange}
                          helpText={
                            dpMode === "dollar"
                              ? `${downPaymentPercent.toFixed(1)}% of home value`
                              : formatCurrency(downPayment)
                          }
                        />
                      </div>
                      <NumberInput
                        label="Interest Rate (%)"
                        value={interestRate}
                        onChange={setInterestRate}
                        min={2}
                        max={12}
                        step={0.01}
                      />
                      <div className="md:col-span-2">
                        <ToggleMultiple
                          label="Loan Term"
                          options={[
                            { value: 10, label: "10yr" },
                            { value: 15, label: "15yr" },
                            { value: 20, label: "20yr" },
                            { value: 30, label: "30yr" },
                          ]}
                          activeValue={loanTermYears}
                          onChange={setLoanTermYears}
                          columns={4}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <ConditionalField condition={isPMIRequired}>
                          <NumberInputWithBadge
                            label="PMI Rate (%)"
                            value={pmiRate}
                            onChange={(value) => setPmiRate(Math.max(0, value))}
                            displayValue={`${pmiRate.toFixed(2)}%`}
                            badgeColor="warning"
                            icon={<ShieldAlert className="h-3.5 w-3.5 text-amber-500" />}
                            step={0.1}
                            helpText="PMI required when down payment < 20%"
                          />
                        </ConditionalField>
                      </div>
                    </div>
                  </div>

                  {/* Closing Costs Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Closing Costs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <NumberInput
                        label="Origination (%)"
                        value={originationPoints}
                        onChange={setOriginationPoints}
                        min={0}
                        max={5}
                        step={0.01}
                      />
                      <NumberInput
                        label="Other Closing Costs ($)"
                        value={otherClosingCosts}
                        onChange={setOtherClosingCosts}
                        min={0}
                        step={100}
                      />
                    </div>
                  </div>

                  {/* Homeownership Expenses Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Homeownership Expenses</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <NumberInput
                        label="Annual Property Tax ($)"
                        value={annualPropertyTax}
                        onChange={(value) => setAnnualPropertyTax(Math.max(0, value))}
                      />
                      <NumberInput
                        label="Annual Insurance ($)"
                        value={annualInsurance}
                        onChange={(value) => setAnnualInsurance(Math.max(0, value))}
                      />
                      <NumberInput
                        label="Monthly HOA ($)"
                        value={monthlyHOA}
                        onChange={(value) => setMonthlyHOA(Math.max(0, value))}
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Calculate Button */}
              <button onClick={() => handleCalculate()} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>Calculate</span>
              </button>

            </div>

            {/* RIGHT COLUMN - RESULTS */}
            <div ref={mainResultsRef} className="lg:col-span-5 space-y-4">

              {/* Consolidated Results Card */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center gap-1.5">
                  <Calculator className="h-4 w-4 text-indigo-600" />
                  <h3 className="font-serif text-base font-bold text-slate-900">Results</h3>
                </div>

                {/* Primary Result - Monthly Payment */}
                <div className="mb-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                  <div className="mb-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Monthly Payment
                    </p>
                  </div>
                  <p className="font-serif text-3xl font-bold text-blue-600">
                    {formatCurrency(totalMonthlyPayment)}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Principal, interest, taxes, insurance & fees</p>
                </div>

                {/* Divider */}
                <div className="mb-3 border-t border-slate-200"></div>

                {/* Other Metrics - Two-column layout */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Principal & Interest</span>
                    <span className="text-sm font-semibold text-slate-900">{formatCurrency(monthlyPI)}</span>
                  </div>
                  {isPMIRequired && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700 flex items-center gap-1">
                        <ShieldAlert className="h-3 w-3 text-amber-500" />
                        PMI
                      </span>
                      <span className="text-sm font-semibold text-blue-600">{formatCurrency(monthlyPMI)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Property Tax</span>
                    <span className="text-sm font-semibold text-slate-900">{formatCurrency(monthlyTax)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Homeowners Insurance</span>
                    <span className="text-sm font-semibold text-slate-900">{formatCurrency(monthlyInsurance)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">HOA Fees</span>
                    <span className="text-sm font-semibold text-slate-900">{formatCurrency(monthlyHOA)}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <span className="text-sm text-slate-700">Total Interest</span>
                    <span className="text-sm font-semibold text-blue-600">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Cash to Close</span>
                    <span className="text-sm font-semibold text-slate-900">{formatCurrency(cashToClose)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Payoff Date</span>
                    <span className="text-sm font-semibold text-slate-900">
                      {payoffDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Amortization Toggle & Display */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <button
                  onClick={() => setShowAmortization(!showAmortization)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900">Amortization Schedule</h3>
                  {showAmortization ? (
                    <ChevronUp className="h-4 w-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  )}
                </button>

                {showAmortization && (
                  <div className="mt-3">
                    <table className="w-full text-xs">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-2 py-1.5 text-left font-semibold text-slate-700">Year</th>
                          <th className="px-2 py-1.5 text-right font-semibold text-slate-700">Principal</th>
                          <th className="px-2 py-1.5 text-right font-semibold text-slate-700">Interest</th>
                          <th className="px-2 py-1.5 text-right font-semibold text-slate-700">Balance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {amortizationSchedule.map((entry) => (
                          <tr key={entry.year} className="hover:bg-slate-50">
                            <td className="px-2 py-1.5 font-medium text-slate-900">{entry.year}</td>
                            <td className="px-2 py-1.5 text-right text-slate-700">{formatCurrency(entry.principalPaid)}</td>
                            <td className="px-2 py-1.5 text-right text-slate-700">{formatCurrency(entry.interestPaid)}</td>
                            <td className="px-2 py-1.5 text-right font-semibold text-slate-900">{formatCurrency(entry.endingBalance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
          </>
          ) : activeTab === "second" ? (
            <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* LEFT COLUMN - INPUTS */}
              <div className="lg:col-span-7 space-y-4">
                {/* Standardized Property Inputs */}
                <Card
                  title="Property Details"
                  icon={<Calculator className="h-4 w-4 text-indigo-600" />}
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <NumberInput
                        label="Home Value"
                        value={smHomeValue}
                        onChange={(value) => setSmHomeValue(Math.max(0, value))}
                      />
                      <NumberInput
                        label="Down Payment"
                        value={smDownPayment}
                        onChange={(value) => setSmDownPayment(Math.max(0, value))}
                      />
                      <div className="md:col-span-2">
                        <NumberInput
                          label="Existing Mortgage Balance"
                          value={smExistingMortgage}
                          onChange={(value) => setSmExistingMortgage(Math.max(0, value))}
                        />
                      </div>
                    </div>

                  {/* CUSTOM 3-SCENARIO COMPARISON UI (PRESERVED) */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Scenario Comparison</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {/* Scenario 1 */}
                        <div className="border rounded-lg p-3 bg-slate-50">
                          <h5 className="font-semibold text-xs mb-2">Scenario 1: Single Loan with PMI</h5>
                          <div className="space-y-2">
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Loan Amount</label>
                              <input type="number" value={sm1LoanAmount} onChange={(e) => setSm1LoanAmount(parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Rate (%)</label>
                              <input type="number" value={sm1Rate} onChange={(e) => setSm1Rate(parseFloat(e.target.value) || 0)} step="0.1" className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Term</label>
                              <select value={sm1Term} onChange={(e) => setSm1Term(parseInt(e.target.value))} className="w-full rounded border border-slate-200 px-2 py-1 text-xs">
                                <option value={10}>10 years</option>
                                <option value={15}>15 years</option>
                                <option value={20}>20 years</option>
                                <option value={30}>30 years</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Points</label>
                              <input type="number" value={sm1Points} onChange={(e) => setSm1Points(parseFloat(e.target.value) || 0)} step="0.1" className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Closing Costs</label>
                              <input type="number" value={sm1Closing} onChange={(e) => setSm1Closing(parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                          </div>
                        </div>

                        {/* Scenario 2 */}
                        <div className="border rounded-lg p-3 bg-slate-50">
                          <h5 className="font-semibold text-xs mb-2">Scenario 2: 80% LTV (No PMI)</h5>
                          <div className="space-y-2">
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Loan Amount</label>
                              <input type="number" value={sm2LoanAmount} onChange={(e) => setSm2LoanAmount(parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Rate (%)</label>
                              <input type="number" value={sm2Rate} onChange={(e) => setSm2Rate(parseFloat(e.target.value) || 0)} step="0.1" className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Term</label>
                              <select value={sm2Term} onChange={(e) => setSm2Term(parseInt(e.target.value))} className="w-full rounded border border-slate-200 px-2 py-1 text-xs">
                                <option value={10}>10 years</option>
                                <option value={15}>15 years</option>
                                <option value={20}>20 years</option>
                                <option value={30}>30 years</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Points</label>
                              <input type="number" value={sm2Points} onChange={(e) => setSm2Points(parseFloat(e.target.value) || 0)} step="0.1" className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Closing Costs</label>
                              <input type="number" value={sm2Closing} onChange={(e) => setSm2Closing(parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                          </div>
                        </div>

                        {/* Scenario 3 */}
                        <div className="border rounded-lg p-3 bg-slate-50">
                          <h5 className="font-semibold text-xs mb-2">Scenario 3: Piggyback</h5>
                          <div className="space-y-2">
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">First Loan (80%)</label>
                              <input type="number" value={sm3FirstLoanAmount} onChange={(e) => setSm3FirstLoanAmount(parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Second Loan</label>
                              <input type="number" value={sm3SecondLoanAmount} onChange={(e) => setSm3SecondLoanAmount(parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">First Rate (%)</label>
                              <input type="number" value={sm3FirstRate} onChange={(e) => setSm3FirstRate(parseFloat(e.target.value) || 0)} step="0.1" className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Second Rate (%)</label>
                              <input type="number" value={sm3SecondRate} onChange={(e) => setSm3SecondRate(parseFloat(e.target.value) || 0)} step="0.1" className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Term</label>
                              <select value={sm3Term} onChange={(e) => setSm3Term(parseInt(e.target.value))} className="w-full rounded border border-slate-200 px-2 py-1 text-xs">
                                <option value={10}>10 years</option>
                                <option value={15}>15 years</option>
                                <option value={20}>20 years</option>
                                <option value={30}>30 years</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Points</label>
                              <input type="number" value={sm3Points} onChange={(e) => setSm3Points(parseFloat(e.target.value) || 0)} step="0.1" className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-600 mb-1">Closing Costs</label>
                              <input type="number" value={sm3Closing} onChange={(e) => setSm3Closing(parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1 text-xs" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Calculate Button */}
                <button onClick={() => handleSecondMortgageCalculate()} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span>Calculate</span>
                </button>
              </div>

              {/* RIGHT COLUMN - RESULTS */}
              <div ref={secondMortgageResultsRef} className="lg:col-span-5 space-y-4">
                {/* Results Display */}
                {smResults && (
                  <div className="space-y-4">
                    {[1, 2, 3].map((scenarioNum) => {
                      const result = scenarioNum === 1 ? smResults.scenario1Result : 
                                     scenarioNum === 2 ? smResults.scenario2Result : 
                                     smResults.scenario3Result;
                      const isRecommended = smResults.recommendedScenario === scenarioNum;
                      const scenarioName = scenarioNum === 1 ? "Single Loan with PMI" :
                                          scenarioNum === 2 ? "80% LTV (No PMI)" :
                                          "Piggyback";
                      
                      return (
                        <div 
                          key={scenarioNum} 
                          className={`rounded-lg border p-4 shadow-sm ${isRecommended ? 'border-green-400 bg-green-50' : 'border-slate-200 bg-white'}`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-serif text-sm font-bold text-slate-900">{scenarioName}</h4>
                            {isRecommended && (
                              <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">
                                BEST
                              </span>
                            )}
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs text-slate-600 mb-1">Monthly Payment</p>
                              <p className="text-2xl font-bold text-indigo-600">
                                {formatCurrency(result.monthlyPayment)}/mo
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
                              <div>
                                <p className="text-xs text-slate-600 mb-1">Total Interest</p>
                                <p className="text-sm font-semibold text-slate-900">
                                  {formatCurrency(result.totalInterest)}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-slate-600 mb-1">PMI Cost</p>
                                <p className={`text-sm font-semibold ${result.hasPMI ? 'text-red-600' : 'text-green-600'}`}>
                                  {result.hasPMI ? formatCurrency(result.totalPMICost) : '$0'}
                                </p>
                              </div>
                            </div>
                            
                            <div className="pt-2 border-t border-slate-200">
                              <p className="text-xs text-slate-600 mb-1">Total Cost</p>
                              <p className="text-lg font-bold text-slate-900">
                                {formatCurrency(result.totalCost)}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                LTV: {result.ltvPercent.toFixed(1)}%
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            </>
          ) : activeTab === "heloc" ? (
            <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* LEFT COLUMN - INPUTS */}
              <div className="lg:col-span-7 space-y-4">
                {/* Standardized HELOC Inputs */}
                <Card
                  title="HELOC Details"
                  icon={<Calculator className="h-4 w-4 text-indigo-600" />}
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <NumberInput
                        label="Home Value"
                        value={helocHomeValue}
                        onChange={(value) => setHelocHomeValue(Math.max(0, value))}
                      />
                      <NumberInput
                        label="Existing Mortgage"
                        value={helocExistingMortgage}
                        onChange={(value) => setHelocExistingMortgage(Math.max(0, value))}
                      />
                      <NumberInput
                        label="HELOC Limit"
                        value={helocCreditLimit}
                        onChange={(value) => setHelocCreditLimit(Math.max(0, value))}
                      />
                      <NumberInput
                        label="Interest Rate (%)"
                        value={helocInterestRate}
                        onChange={(value) => setHelocInterestRate(Math.max(0, value))}
                        step={0.1}
                      />
                      <NumberInput
                        label="Draw Period (years)"
                        value={helocDrawPeriod}
                        onChange={(value) => setHelocDrawPeriod(Math.max(0, value))}
                      />
                      <NumberInput
                        label="Repayment Period (years)"
                        value={helocRepaymentPeriod}
                        onChange={(value) => setHelocRepaymentPeriod(Math.max(0, value))}
                      />
                      <NumberInput
                        label="Gross Monthly Income"
                        value={helocMonthlyIncome}
                        onChange={(value) => setHelocMonthlyIncome(Math.max(0, value))}
                      />
                    </div>

                  {/* CUSTOM DEBT MANAGEMENT UI (PRESERVED) */}
                  <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-slate-700">Existing Debts</h4>
                        <button onClick={addHelocDebt} className="flex items-center gap-1 rounded bg-green-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-green-700">
                          <Plus className="h-3 w-3" /> Add
                        </button>
                      </div>
                  
                      {/* Column Headings */}
                      <div className="grid grid-cols-5 gap-2 items-center mb-2 pb-2 border-b border-slate-200">
                        <div className="text-xs font-semibold text-slate-700">Debt Name</div>
                    <div className="text-xs font-semibold text-slate-700">Balance ($)</div>
                    <div className="text-xs font-semibold text-slate-700">Monthly Payment ($)</div>
                    <div className="text-xs font-semibold text-slate-700">Rate (%)</div>
                    <div className="text-xs font-semibold text-slate-700 text-center">Action</div>
                  </div>
                  
                  <div className="space-y-2">
                    {helocDebts.map((debt, idx) => (
                      <div key={idx} className="grid grid-cols-5 gap-2 items-center">
                        <input type="text" value={debt.name} onChange={(e) => updateHelocDebt(idx, 'name', e.target.value)} placeholder="Name" className="rounded border border-slate-200 px-2 py-1.5 text-xs" />
                        <input type="number" value={debt.balance} onChange={(e) => updateHelocDebt(idx, 'balance', parseInt(e.target.value) || 0)} placeholder="Balance" className="rounded border border-slate-200 px-2 py-1.5 text-xs" />
                        <input type="number" value={debt.monthlyPayment} onChange={(e) => updateHelocDebt(idx, 'monthlyPayment', parseInt(e.target.value) || 0)} placeholder="Monthly" className="rounded border border-slate-200 px-2 py-1.5 text-xs" />
                        <input type="number" value={debt.rate} onChange={(e) => updateHelocDebt(idx, 'rate', parseFloat(e.target.value) || 0)} placeholder="Rate" step="0.1" className="rounded border border-slate-200 px-2 py-1.5 text-xs" />
                        <button onClick={() => removeHelocDebt(idx)} className="rounded bg-red-500 px-2 py-1.5 text-white hover:bg-red-600">
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    </div>
                  </div>
                  </div>
                </Card>

                {/* Calculate Button */}
                <button onClick={() => handleHelocCalculate()} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span>Calculate</span>
                </button>
              </div>

              {/* RIGHT COLUMN - RESULTS */}
              <div ref={helocResultsRef} className="lg:col-span-5 space-y-4">
                {/* Results Display */}
                {helocResults && (
                  <div className="space-y-4">

                    {/* Consolidated Results Card */}
                    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="mb-4 flex items-center gap-1.5">
                        <Calculator className="h-4 w-4 text-indigo-600" />
                        <h3 className="font-serif text-base font-bold text-slate-900">Results</h3>
                      </div>

                      {/* Primary Result - Available Equity */}
                      <div className="mb-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                        <div className="mb-1">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                            Home Equity
                          </p>
                        </div>
                        <p className="font-serif text-3xl font-bold text-blue-600">
                          {formatCurrency(helocResults.homeEquity)}
                        </p>
                        <p className="text-xs text-slate-600 mt-2">
                          Available HELOC: {formatCurrency(helocResults.actualAvailableHeloc)}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="mb-3 border-t border-slate-200"></div>

                      {/* Other Metrics - Two-column layout */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-700">Draw Period Payment</span>
                          <span className="text-sm font-semibold text-slate-900">{formatCurrency(helocResults.helocMonthlyPaymentDrawPeriod)}/mo</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-700">Repayment Period Payment</span>
                          <span className="text-sm font-semibold text-slate-900">{formatCurrency(helocResults.helocMonthlyPaymentRepaymentPeriod)}/mo</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                          <span className="text-sm text-slate-700">Monthly Savings</span>
                          <span className="text-sm font-semibold text-blue-600">{formatCurrency(helocResults.monthlySavings)}/mo</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                          <span className="text-sm text-slate-700">Total Existing Debt</span>
                          <span className="text-sm font-semibold text-slate-900">{formatCurrency(helocResults.totalExistingDebt)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-700">DTI Before HELOC</span>
                          <span className="text-sm font-semibold text-slate-900">
                            {helocResults.dtiBeforeHeloc !== null 
                              ? `${helocResults.dtiBeforeHeloc.toFixed(1)}%` 
                              : 'N/A'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </>
          ) : activeTab === "refinance" ? (
            <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* LEFT COLUMN - INPUTS */}
              <div className="lg:col-span-7 space-y-4">
                {/* Standardized Refinance Inputs */}
                <Card
                  title="Refinance Details"
                  icon={<Calculator className="h-4 w-4 text-indigo-600" />}
                >
                  <div className="space-y-4">
                    {/* Current Loan Section */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Current Loan</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <NumberInput
                          label="Original Loan Amount"
                          value={refOriginalLoanAmount}
                          onChange={(value) => setRefOriginalLoanAmount(Math.max(0, value))}
                        />
                        <NumberInput
                          label="Current Rate (%)"
                          value={refOriginalRate}
                          onChange={(value) => setRefOriginalRate(Math.max(0, value))}
                          step={0.1}
                        />
                        <NumberInput
                          label="Term (years)"
                          value={refOriginalTerm}
                          onChange={(value) => setRefOriginalTerm(Math.max(0, value))}
                        />
                        <NumberInput
                          label="Months Paid"
                          value={refMonthsPaid}
                          onChange={(value) => setRefMonthsPaid(Math.max(0, value))}
                        />
                      </div>
                    </div>

                    {/* New Loan Section */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">New Loan</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <NumberInput
                          label="New Rate (%)"
                          value={refNewRate}
                          onChange={(value) => setRefNewRate(Math.max(0, value))}
                          step={0.1}
                        />
                        <NumberInput
                          label="New Term (years)"
                          value={refNewTerm}
                          onChange={(value) => setRefNewTerm(Math.max(0, value))}
                        />
                        <NumberInput
                          label="Closing Costs"
                          value={refClosingCosts}
                          onChange={(value) => setRefClosingCosts(Math.max(0, value))}
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Calculate Button */}
                <button onClick={() => handleRefinanceCalculate()} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span>Calculate</span>
                </button>
              </div>

              {/* RIGHT COLUMN - RESULTS */}
              <div ref={refinanceResultsRef} className="lg:col-span-5 space-y-4">
                {/* Results Display */}
                {refResults && (
                  <div className="space-y-4">

                    {/* Consolidated Results Card */}
                    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="mb-4 flex items-center gap-1.5">
                        <Calculator className="h-4 w-4 text-indigo-600" />
                        <h3 className="font-serif text-base font-bold text-slate-900">Results</h3>
                      </div>

                      {/* Primary Result - Monthly Savings */}
                      <div className="mb-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                        <div className="mb-1">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                            Monthly Savings
                          </p>
                        </div>
                        <p className="font-serif text-3xl font-bold text-blue-600">
                          {formatCurrency(refResults.monthlySavings)}/mo
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="mb-3 border-t border-slate-200"></div>

                      {/* Other Metrics - Two-column layout */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-700">Current Payment</span>
                          <span className="text-sm font-semibold text-slate-900">{formatCurrency(refResults.currentMonthlyPI)}/mo</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-700">New Payment</span>
                          <span className="text-sm font-semibold text-blue-600">{formatCurrency(refResults.newMonthlyPI)}/mo</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                          <span className="text-sm text-slate-700">Break Even Point</span>
                          <span className="text-sm font-semibold text-slate-900">{refResults.breakEvenMonths.toFixed(0)} months</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                          <span className="text-sm text-slate-700">Current Lifetime Interest</span>
                          <span className="text-sm font-semibold text-slate-900">{formatCurrency(refResults.lifetimeCurrentInterest)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-700">New Lifetime Interest</span>
                          <span className="text-sm font-semibold text-slate-900">{formatCurrency(refResults.lifetimeNewInterest)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-700">Total Interest Savings</span>
                          <span className="text-sm font-semibold text-blue-600">{formatCurrency(refResults.lifetimeSavings)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </>
          ) : activeTab === "real-apr" ? (
            <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* LEFT COLUMN - INPUTS */}
              <div className="lg:col-span-7 space-y-4">
                {/* Property Details Card */}
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 font-serif text-base font-bold text-slate-900">
                    <Home className="h-4 w-4 text-indigo-600" />
                    Property Details
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <NumberInput
                      label="Home Price ($)"
                      value={aprHomePrice}
                      onChange={(value) => setAprHomePrice(Math.max(0, value))}
                    />
                    <NumberInput
                      label="Down Payment ($)"
                      value={aprDownPayment}
                      onChange={(value) => setAprDownPayment(Math.max(0, value))}
                    />
                    <NumberInput
                      label="Interest Rate (%)"
                      value={aprInterestRate}
                      onChange={(value) => setAprInterestRate(Math.max(0, value))}
                      step={0.1}
                    />
                    <NumberInput
                      label="Loan Term (years)"
                      value={aprLoanTerm}
                      onChange={(value) => setAprLoanTerm(Math.max(0, value))}
                    />
                  </div>
                </div>

                {/* Fees & Closing Costs Card */}
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 font-serif text-base font-bold text-slate-900">
                    <DollarSign className="h-4 w-4 text-indigo-600" />
                    Fees & Closing Costs
                  </h3>
                  <div className="space-y-3">
                    <NumberInput
                      label="Discount Points (% of loan)"
                      value={aprDiscountPoints}
                      onChange={(value) => setAprDiscountPoints(Math.max(0, value))}
                      step={0.1}
                    />
                    <NumberInput
                      label="Loan Origination Fees (% of loan)"
                      value={aprOriginationFees}
                      onChange={(value) => setAprOriginationFees(Math.max(0, value))}
                      step={0.1}
                    />
                    <NumberInput
                      label="Other Closing Costs ($)"
                      value={aprOtherClosingCosts}
                      onChange={(value) => setAprOtherClosingCosts(Math.max(0, value))}
                    />
                  </div>
                </div>

                {/* Calculate Button */}
                <button onClick={() => handleRealAPRCalculate()} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span>Calculate</span>
                </button>
              </div>

              {/* RIGHT COLUMN - RESULTS */}
              <div ref={realAprResultsRef} className="lg:col-span-5 space-y-4">

                {aprResults && (
                  <>
                    {/* APR Comparison Card */}
                    <div className="rounded-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center gap-1.5">
                        <Percent className="h-4 w-4 text-indigo-600" />
                        <h3 className="font-serif text-base font-bold text-slate-900">APR Comparison</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-slate-600">Nominal Rate</p>
                          <p className="text-2xl font-bold text-slate-900">{aprResults.nominalRate.toFixed(3)}%</p>
                        </div>
                        <div className="border-t border-indigo-100 pt-3">
                          <p className="text-xs text-slate-600">Real APR</p>
                          <p className="text-2xl font-bold text-indigo-600">{aprResults.realAPR.toFixed(3)}%</p>
                        </div>
                        <div className="rounded bg-amber-50 border border-amber-200 p-2">
                          <p className="text-xs text-amber-800">APR Difference: <span className="font-bold">+{aprResults.aprDifference.toFixed(3)}%</span></p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cost Breakdown Card */}
                    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <h3 className="mb-3 font-serif text-base font-bold text-slate-900">Total Finance Charges</h3>
                      <div className="mb-3">
                        <p className="text-2xl font-bold text-slate-900">{formatCurrency(aprResults.totalFinanceCharges)}</p>
                        <p className="text-xs text-slate-600 mt-0.5">Over {aprLoanTerm} years</p>
                      </div>
                      <div className="space-y-2 border-t border-slate-200 pt-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Monthly Payment</span>
                          <span className="font-semibold text-slate-900">{formatCurrency(aprResults.monthlyPayment)}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Loan Amount</span>
                          <span className="font-semibold text-slate-900">{formatCurrency(aprResults.loanAmount)}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Discount Points</span>
                          <span className="font-semibold text-slate-900">{formatCurrency(aprResults.totalCostBreakdown.discountPointsCost)}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Origination Fees</span>
                          <span className="font-semibold text-slate-900">{formatCurrency(aprResults.totalCostBreakdown.originationFeesCost)}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Other Closing Costs</span>
                          <span className="font-semibold text-slate-900">{formatCurrency(aprResults.totalCostBreakdown.otherClosingCosts)}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                          <span className="text-slate-700 font-semibold">Total Upfront Costs</span>
                          <span className="font-bold text-slate-900">{formatCurrency(aprResults.totalCostBreakdown.totalUpfrontCosts)}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            </>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>
              <p className="text-slate-600 mb-6">
                This calculator is coming soon! We&apos;re working on bringing you more powerful financial tools.
              </p>
              <button
                onClick={() => router.push(getBasePath())}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700"
              >
                Return to {tabs[0].label}
              </button>
            </div>
          )}
    </div>
  );
}

// ============================================================================
// CONFIG CALCULATOR RENDERER
// ============================================================================

function ConfigCalculatorRenderer({ config, onBack, isHomepage = false }: ConfigCalculatorRendererProps) {
  const [inputs, setInputs] = useState<Record<string, any>>(() => {
    const defaults: Record<string, any> = {};
    config.inputs.forEach(input => {
      defaults[input.id] = input.defaultValue;
    });
    return defaults;
  });
  
  const [results, setResults] = useState<any>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  // Helper function to scroll to results with proper offset
  const scrollToResults = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -100; // Negative offset for padding from top (100px breathing room)
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  // Reinitialize inputs when calculator switches
  useEffect(() => {
    const defaults: Record<string, any> = {};
    config.inputs.forEach(input => {
      defaults[input.id] = input.defaultValue;
    });
    setInputs(defaults);
  }, [config.id, config.inputs]);
  
  const handleInputChange = (inputId: string, value: any) => {
    setInputs(prev => ({ ...prev, [inputId]: value }));
  };
  
  const handleCalculate = (shouldScroll = true) => {
    try {
      const calculationResults = config.calculate(inputs);
      setResults(calculationResults);
      
      // Scroll to results after a short delay to ensure results are rendered
      if (shouldScroll) {
        setTimeout(() => {
          scrollToResults(resultsRef);
        }, 100);
      }
    } catch (error) {
      console.error('Calculation error:', error);
      setResults(null);
    }
  };
  
  // Calculate results on mount with default values
  // For FHA calculator, ensure it runs with fully initialized config
  useEffect(() => {
    if (config.id === 'fha') {
      // Small delay to ensure all inputs are initialized
      const timer = setTimeout(() => {
        handleCalculate(false); // Don't scroll on auto-load
      }, 0);
      return () => clearTimeout(timer);
    } else {
      handleCalculate(false); // Don't scroll on auto-load
    }
  }, [config.id]); // eslint-disable-line react-hooks/exhaustive-deps
  
  // Group inputs by section
  const groupedInputs: Array<{id: string; title: string; inputs: InputConfig[]}> = [];
  const seenSections = new Set<string>();
  
  config.inputs.forEach(input => {
    const sectionId = input.section || 'default';
    if (!seenSections.has(sectionId)) {
      seenSections.add(sectionId);
      groupedInputs.push({
        id: sectionId,
        title: sectionId,
        inputs: config.inputs.filter(inp => (inp.section || 'default') === sectionId)
      });
    }
  });

  // Prepare results for CalculatorResult component
  const primaryResult = results && config.results.find(r => r.isPrimary);
  const otherResults = results && config.results.filter(r => !r.isPrimary);

  // Format primary result
  const formattedPrimaryResult = primaryResult && results ? {
    label: primaryResult.label,
    value: primaryResult.format === 'currency' 
      ? formatCurrency(results[primaryResult.id])
      : primaryResult.format === 'percent'
      ? `${results[primaryResult.id]}%`
      : String(results[primaryResult.id]),
  } : undefined;

  // Format other results as metrics
  const metrics: ResultMetric[] = otherResults && results ? otherResults.map((result: ResultConfig) => ({
    id: result.id,
    label: result.label,
    value: results[result.id],
    format: result.format as "currency" | "percent" | "date" | "text" | undefined,
    highlight: result.highlight,
  })) : [];
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-4">
          {/* Single Input Card containing ALL inputs */}
          <Card
            title="Calculator Inputs"
            icon={<Calculator className="h-4 w-4 text-indigo-600" />}
          >
            <div className="space-y-4">
              {groupedInputs.map(section => (
                <div key={section.id}>
                  {/* Section Subheader (only if multiple sections) */}
                  {groupedInputs.length > 1 && (
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">
                      {section.title}
                    </h4>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.inputs.map(input => (
                      <ConfigInputField 
                        key={input.id}
                        input={input}
                        value={inputs[input.id]}
                        inputs={inputs}
                        onChange={handleInputChange}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Calculate Button */}
          <button 
            onClick={() => handleCalculate()} 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Calculator className="h-4 w-4" />
            <span>Calculate</span>
          </button>
        </div>

        {/* RIGHT COLUMN - RESULTS */}
        <div ref={resultsRef} className="lg:col-span-5 space-y-4">
          {results && (
            <>
              <ConfigConsolidatedResult
                primaryResult={formattedPrimaryResult}
                metrics={metrics}
                showAd={isHomepage}
              />
              
              {/* Amortization Schedule - Within Results Column */}
              {(inputs.showAmortization !== undefined ? inputs.showAmortization : config.showAmortization) && results.amortizationSchedule && results.amortizationSchedule.length > 0 && (
                <ConfigAmortizationSchedule amortizationSchedule={results.amortizationSchedule} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

