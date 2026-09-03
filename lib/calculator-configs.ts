import {
  calculateMonthlyPI,
  calculateMonthlyPMI,
  calculateTotalInterest,
  calculateClosingCash,
  calculatePayoffDate,
  generateAmortizationSchedule,
  calculateRealAPR,
  calculateFHA,
  calculateVA,
  calculateJumbo,
  getConformingLimit,
  calculateFixedVsARM,
  calculateInterestOnly,
  calculateInterestOnlyExtra,
  calculateBalloonMortgage,
  calculateRentVsBuy,
  calculateIncomeRequirement,
  calculateMortgageQualification,
  calculateExtraPayment,
  calculateBiweeklyPaymentEnhanced,
  calculatePayingPoints,
  calculateTaxBenefits,
} from "./mortgage";

// Import and re-export types from unified type file
import type {
  InputConfig,
  ResultConfig,
  SubCalculatorConfig,
  CategoryConfig,
  CalculatorConfigs,
  FieldConfig,
  OutputConfig,
  FieldOption,
  CalculatorInput,
} from "./calculator-config.types";

export type {
  InputConfig,
  ResultConfig,
  SubCalculatorConfig,
  CategoryConfig,
  CalculatorConfigs,
  FieldConfig,
  OutputConfig,
  FieldOption,
  CalculatorInput,
};

// ============================================================================
// SHARED FIELD FACTORIES
// Eliminates 90% of field duplication across all calculators
// ============================================================================

const createHomeValueField = (defaultValue = 400000, section = "Loan Details"): InputConfig => ({
  id: "homeValue",
  label: "Home Value",
  type: "currency",
  defaultValue,
  min: 0,
  section,
});

const createDownPaymentField = (defaultValue = 80000, section = "Loan Details"): InputConfig => ({
  id: "downPayment",
  label: "Down Payment",
  type: "currency",
  defaultValue,
  min: 0,
  section,
});

const createInterestRateField = (defaultValue = 6.5, section = "Loan Details"): InputConfig => ({
  id: "interestRate",
  label: "Interest Rate",
  type: "percent",
  defaultValue,
  min: 0,
  max: 20,
  step: 0.01,
  section,
});

const createLoanTermField = (defaultValue = 30, section = "Loan Details"): InputConfig => ({
  id: "loanTermYears",
  label: "Loan Term",
  type: "years",
  defaultValue,
  min: 1,
  max: 50,
  section,
});

const createPMIRateField = (defaultValue = 0.7, section = "Loan Details"): InputConfig => ({
  id: "pmiRate",
  label: "PMI Rate",
  type: "percent",
  defaultValue,
  min: 0,
  max: 5,
  step: 0.01,
  section,
  tooltip: "Required when down payment < 20%",
});

const createPropertyTaxField = (defaultValue = 4800, section = "Expenses"): InputConfig => ({
  id: "annualPropertyTax",
  label: "Annual Property Tax",
  type: "currency",
  defaultValue,
  min: 0,
  section,
});

const createInsuranceField = (defaultValue = 1200, section = "Expenses"): InputConfig => ({
  id: "annualInsurance",
  label: "Annual Insurance",
  type: "currency",
  defaultValue,
  min: 0,
  section,
});

const createHOAField = (defaultValue = 150, section = "Expenses"): InputConfig => ({
  id: "monthlyHOA",
  label: "Monthly HOA",
  type: "currency",
  defaultValue,
  min: 0,
  section,
});

// ============================================================================
// CALCULATOR CONFIGURATIONS
// ============================================================================

export const CALCULATOR_CONFIGS: CalculatorConfigs = {
  // ========== MORTGAGE CATEGORY ==========
  mortgage: {
    id: "mortgage",
    title: "Mortgage Calculators",
    description: "Calculate monthly payments, compare loans, and plan your home purchase",
    defaultSubCalculator: "basic",
    subCalculators: {
      // NOTE: "basic" uses inline implementation in MortgageCalculator.tsx
      // It is not in this config so it falls through to the detailed inline JSX
    },
  },


  // ========== RATES CATEGORY ==========
  rates: {
    id: "rates",
    title: "Rates & Loan Programs",
    description: "Calculate true costs with fees, and explore government-backed loan programs",
    defaultSubCalculator: "real-apr",
    subCalculators: {
      "real-apr": {
        id: "real-apr",
        label: "Real APR Calculator",
        description: "Calculate the true cost of financing including all fees and points",
        inputs: [
          { id: "homePrice", label: "Home Price", type: "currency", defaultValue: 400000, min: 0, section: "Loan Details" },
          createDownPaymentField(),
          createInterestRateField(),
          createLoanTermField(),
          { id: "discountPoints", label: "Discount Points", type: "percent", defaultValue: 0, min: 0, max: 5, step: 0.125, section: "Fees", tooltip: "% of loan amount" },
          { id: "originationFees", label: "Origination Fees", type: "percent", defaultValue: 1, min: 0, max: 5, step: 0.25, section: "Fees", tooltip: "% of loan amount" },
          { id: "otherClosingCosts", label: "Other Closing Costs", type: "currency", defaultValue: 5000, min: 0, section: "Fees" },
        ],
        calculate: (inputs) => calculateRealAPR(inputs),
        results: [
          { id: "realAPR", label: "Real APR", format: "percent", isPrimary: true, highlight: true },
          { id: "nominalRate", label: "Nominal Rate", format: "percent" },
          { id: "aprDifference", label: "APR Difference", format: "percent", highlight: true },
          { id: "loanAmount", label: "Loan Amount", format: "currency" },
          { id: "monthlyPayment", label: "Monthly Payment", format: "currency" },
          { id: "totalFinanceCharges", label: "Total Finance Charges", format: "currency" },
          { id: "totalPaidOverLife", label: "Total Paid Over Life", format: "currency" },
        ],
        showAmortization: false,
        showChart: false,
      },
      
      // FHA Loan Calculator
      fha: {
        id: "fha",
        label: "FHA Loan Calculator",
        description: "Calculate FHA loan payments including mortgage insurance premiums",
        inputs: [
          { id: "contractSalesPrice", label: "Contract Sales Price ($)", type: "currency", defaultValue: 350000, min: 0, section: "Property & Loan Details" },
          { id: "appraisedValue", label: "Appraised Value ($)", type: "currency", defaultValue: 350000, min: 0, section: "Property & Loan Details" },
          { id: "fhaDownPaymentPercent", label: "FHA Down Payment (%) — min 3.5%", type: "percent", defaultValue: 3.5, min: 3.5, max: 100, step: 0.1, section: "Property & Loan Details" },
          createInterestRateField(6.0, "Property & Loan Details"),
          createLoanTermField(30, "Property & Loan Details"),
          { id: "upfrontMIPRate", label: "Upfront MIP (%)", type: "percent", defaultValue: 1.75, min: 0, max: 5, step: 0.01, section: "FHA Fees" },
          { id: "annualMIPRate", label: "Annual MIP (%)", type: "percent", defaultValue: 0.55, min: 0, max: 2, step: 0.01, section: "FHA Fees" },
          { id: "borrowerPaidClosingCosts", label: "Borrower-Paid Closing Costs ($)", type: "currency", defaultValue: 7000, min: 0, section: "Closing Costs" },
          { id: "prepaidExpenses", label: "Prepaid Expenses ($)", type: "currency", defaultValue: 3000, min: 0, section: "Closing Costs" },
        ],
        calculate: (inputs) => calculateFHA({
          contractSalesPrice: inputs.contractSalesPrice,
          appraisedValue: inputs.appraisedValue,
          fhaDownPaymentPercent: inputs.fhaDownPaymentPercent,
          interestRate: inputs.interestRate,
          loanTermYears: inputs.loanTermYears,
          upfrontMIPRate: inputs.upfrontMIPRate,
          annualMIPRate: inputs.annualMIPRate,
          borrowerPaidClosingCosts: inputs.borrowerPaidClosingCosts,
          prepaidExpenses: inputs.prepaidExpenses,
        }),
        results: [
          { id: "totalMonthlyPayment", label: "Monthly Payment (incl. MIP)", format: "currency", isPrimary: true, highlight: true },
          { id: "monthlyPI", label: "Principal & Interest", format: "currency" },
          { id: "monthlyMIP", label: "Monthly MIP", format: "currency" },
          { id: "maxFHALoanAmount", label: "Maximum FHA Loan Amount", format: "currency" },
          { id: "minRequiredDownPayment", label: "Minimum Required Down Payment", format: "currency" },
          { id: "estimatedCashToClose", label: "Estimated Cash to Close", format: "currency", highlight: true },
          { id: "baseLoanAmount", label: "Base Loan Amount", format: "currency" },
          { id: "upfrontMIP", label: "Upfront MIP", format: "currency" },
          { id: "totalLoanAmount", label: "Total Loan Amount", format: "currency" },
        ],
        showAmortization: false,
        showChart: false,
      },
      
      // VA Loan Calculator
      va: {
        id: "va",
        label: "VA Loan Calculator",
        description: "Calculate VA loan payments including funding fees",
        inputs: [
          { id: "salePrice", label: "Sale Price ($)", type: "currency", defaultValue: 400000, min: 0, section: "Property Details" },
          { id: "downPayment", label: "Down Payment ($)", type: "currency", defaultValue: 0, min: 0, section: "Property Details" },
          createInterestRateField(6.0, "Property Details"),
          createLoanTermField(30, "Property Details"),
          { id: "vaStatus", label: "VA Status", type: "select", defaultValue: "veteran", options: [
            { value: "active", label: "Active Duty" },
            { value: "veteran", label: "Veteran" },
            { value: "reserves", label: "Reserves" },
            { value: "surviving-spouse", label: "Surviving Spouse" },
          ], section: "VA Status & Funding Fee" },
          { id: "vaLoanUse", label: "VA Loan Use", type: "select", defaultValue: "first", options: [
            { value: "first", label: "First Use" },
            { value: "subsequent", label: "Subsequent Use" },
          ], section: "VA Status & Funding Fee" },
          { id: "financeVAFundingFee", label: "Finance VA Funding Fee", type: "checkbox", defaultValue: true, section: "VA Status & Funding Fee" },
          { id: "isDisabled", label: "Service-Connected Disability", type: "checkbox", defaultValue: false, section: "VA Status & Funding Fee", tooltip: "Exempt from funding fee" },
          createPropertyTaxField(4800, "Property Expenses"),
          createInsuranceField(1200, "Property Expenses"),
          createHOAField(150, "Property Expenses"),
        ],
        calculate: (inputs) => calculateVA({
          salePrice: inputs.salePrice,
          downPayment: inputs.downPayment,
          loanTermYears: inputs.loanTermYears,
          interestRate: inputs.interestRate,
          vaStatus: inputs.vaStatus,
          vaLoanUse: inputs.vaLoanUse,
          financeVAFundingFee: inputs.financeVAFundingFee,
          annualPropertyTax: inputs.annualPropertyTax,
          annualInsurance: inputs.annualInsurance,
          monthlyHOA: inputs.monthlyHOA,
          isDisabled: inputs.isDisabled,
        }),
        results: [
          { id: "totalMonthlyPayment", label: "Monthly Payment (P&I + T&I)", format: "currency", isPrimary: true, highlight: true },
          { id: "monthlyPI", label: "Principal & Interest", format: "currency" },
          { id: "monthlyTax", label: "Property Tax", format: "currency" },
          { id: "monthlyInsurance", label: "Homeowners Insurance", format: "currency" },
          { id: "monthlyHOA", label: "HOA Dues", format: "currency" },
          { id: "baseLoanAmount", label: "Loan Amount", format: "currency" },
          { id: "fundingFeeRate", label: "VA Funding Fee Rate", format: "percent" },
          { id: "fundingFeeAmount", label: "VA Funding Fee", format: "currency" },
          { id: "estimatedCashToClose", label: "Estimated Total Cash to Close", format: "currency", highlight: true },
        ],
        showAmortization: false,
        showChart: false,
      },
      
      // Jumbo Loan Calculator
      jumbo: {
        id: "jumbo",
        label: "Jumbo Loan Calculator",
        description: "Determine if your loan exceeds conforming limits",
        inputs: [
          createHomeValueField(1000000, "Property & Loan Details"),
          createDownPaymentField(200000, "Property & Loan Details"),
          { id: "loanAmount", label: "Loan Amount ($)", type: "currency", defaultValue: 800000, min: 0, section: "Property & Loan Details" },
          createInterestRateField(7.0, "Property & Loan Details"),
          createLoanTermField(30, "Property & Loan Details"),
          { id: "state", label: "State", type: "select", defaultValue: "CA", options: [
            { value: "CA", label: "California" },
            { value: "NY", label: "New York" },
            { value: "TX", label: "Texas" },
            { value: "FL", label: "Florida" },
            { value: "WA", label: "Washington" },
            { value: "Other", label: "Other" },
          ], section: "Location" },
          { id: "county", label: "County", type: "select", defaultValue: "Los Angeles", options: [
            { value: "Los Angeles", label: "Los Angeles" },
            { value: "Orange", label: "Orange" },
            { value: "San Diego", label: "San Diego" },
            { value: "Other", label: "Other" },
          ], section: "Location" },
          { id: "conformingLimit", label: "Conforming Loan Limit ($)", type: "currency", defaultValue: 766550, min: 0, section: "Location" },
          createPropertyTaxField(12000, "Property Expenses"),
          createInsuranceField(2400, "Property Expenses"),
          createHOAField(300, "Property Expenses"),
        ],
        calculate: (inputs) => calculateJumbo({
          homeValue: inputs.homeValue,
          downPayment: inputs.downPayment,
          loanAmount: inputs.loanAmount,
          state: inputs.state,
          county: inputs.county,
          conformingLimit: inputs.conformingLimit,
          interestRate: inputs.interestRate,
          loanTermYears: inputs.loanTermYears,
          annualPropertyTax: inputs.annualPropertyTax,
          annualInsurance: inputs.annualInsurance,
          monthlyHOA: inputs.monthlyHOA,
        }),
        results: [
          { id: "totalMonthlyPayment", label: "Monthly Payment", format: "currency", isPrimary: true, highlight: true },
          { id: "qualificationStatus", label: "Jumbo Qualification Status", format: "text" },
          { id: "totalInterest", label: "Total Interest", format: "currency", highlight: true },
        ],
        showAmortization: false,
        showChart: false,
      },
    },
  },

  // ========== ARM & ALTERNATIVES CATEGORY ==========
  arm: {
    id: "arm",
    title: "ARM & Alternatives",
    description: "Compare adjustable-rate, interest-only, and balloon mortgages",
    defaultSubCalculator: "fixed-vs-arm",
    subCalculators: {
      "fixed-vs-arm": {
        id: "fixed-vs-arm",
        label: "Fixed vs ARM",
        description: "Compare fixed-rate and adjustable-rate mortgage options",
        inputs: [
          { id: "housePrice", label: "House Price", type: "currency", defaultValue: 400000, min: 0, section: "Loan Information" },
          createDownPaymentField(80000, "Loan Information"),
          { id: "loanAmount", label: "Loan Amount", type: "currency", defaultValue: 320000, min: 0, section: "Loan Information", tooltip: "Auto-calculated from House Price - Down Payment + Financed Costs" },
          createLoanTermField(30, "Loan Information"),
          createPMIRateField(0.7, "Costs"),
          { id: "discountPoints", label: "Discount Points", type: "percent", defaultValue: 0, min: 0, max: 5, step: 0.125, section: "Costs", tooltip: "% of loan amount" },
          { id: "originationPoints", label: "Origination Points", type: "percent", defaultValue: 0, min: 0, max: 5, step: 0.125, section: "Costs", tooltip: "% of loan amount" },
          { id: "financePoints", label: "Finance Points?", type: "toggle", defaultValue: false, section: "Costs", tooltip: "Add points cost to loan amount" },
          { id: "otherClosingCosts", label: "Other Closing Costs", type: "currency", defaultValue: 5000, min: 0, section: "Costs" },
          { id: "financeOtherClosingCosts", label: "Finance Other Closing Costs?", type: "toggle", defaultValue: false, section: "Costs", tooltip: "Add closing costs to loan amount" },
          createPropertyTaxField(4800, "Costs"),
          createInsuranceField(1200, "Costs"),
          createHOAField(150, "Costs"),
          { id: "interestRate", label: "Fixed Interest Rate", type: "percent", defaultValue: 6.5, min: 0, max: 20, step: 0.01, section: "Rate Information" },
          { id: "armInitialRate", label: "ARM Initial Rate", type: "percent", defaultValue: 5.5, min: 0, max: 20, step: 0.01, section: "Rate Information" },
          { id: "armYearsBeforeAdjustment", label: "ARM Years Before First Adjustment", type: "number", defaultValue: 5, min: 1, max: 10, section: "ARM Settings" },
          { id: "armFirstAdjustmentCap", label: "ARM First Adjustment", type: "percent", defaultValue: 2, min: 0, max: 10, step: 0.25, section: "ARM Settings" },
          { id: "armMonthsBetweenAdjustments", label: "ARM Months Between Adjustments", type: "number", defaultValue: 12, min: 1, max: 60, section: "ARM Settings" },
          { id: "armSubsequentAdjustmentCap", label: "ARM Subsequent Adjustment", type: "percent", defaultValue: 2, min: 0, max: 10, step: 0.25, section: "ARM Settings" },
          { id: "armLifetimeAdjustmentCap", label: "ARM Lifetime Adjustment Cap", type: "percent", defaultValue: 5, min: 0, max: 15, step: 0.25, section: "ARM Settings" },
        ],
        calculate: (inputs) => calculateFixedVsARM({
          housePrice: inputs.housePrice,
          downPayment: inputs.downPayment,
          loanTermYears: inputs.loanTermYears,
          pmiRate: inputs.pmiRate,
          discountPoints: inputs.discountPoints,
          originationPoints: inputs.originationPoints,
          financePoints: inputs.financePoints,
          otherClosingCosts: inputs.otherClosingCosts,
          financeOtherClosingCosts: inputs.financeOtherClosingCosts,
          fixedRate: inputs.interestRate,
          armInitialRate: inputs.armInitialRate,
          armYearsBeforeAdjustment: inputs.armYearsBeforeAdjustment,
          armFirstAdjustmentCap: inputs.armFirstAdjustmentCap,
          armSubsequentAdjustmentCap: inputs.armSubsequentAdjustmentCap,
          armMonthsBetweenAdjustments: inputs.armMonthsBetweenAdjustments,
          armLifetimeAdjustmentCap: inputs.armLifetimeAdjustmentCap,
          annualPropertyTax: inputs.annualPropertyTax,
          annualInsurance: inputs.annualInsurance,
          monthlyHOA: inputs.monthlyHOA,
        }),
        results: [
          { id: "fixedMonthlyPI", label: "Fixed: Initial P&I", format: "currency" },
          { id: "fixedInitialMonthlyPayment", label: "Fixed: Initial Monthly Payment", format: "currency" },
          { id: "fixedTotalInterest", label: "Fixed: Total Interest", format: "currency" },
          { id: "fixedLTV", label: "Fixed: LTV Ratio", format: "percent" },
          { id: "armInitialMonthlyPI", label: "ARM: Initial P&I", format: "currency" },
          { id: "armInitialMonthlyPayment", label: "ARM: Initial Monthly Payment", format: "currency" },
          { id: "armMaximumMonthlyPI", label: "ARM: Maximum P&I", format: "currency" },
          { id: "armMaximumMonthlyPayment", label: "ARM: Maximum Monthly Payment", format: "currency" },
          { id: "armTotalInterestAtMax", label: "ARM: Total Interest (at max)", format: "currency" },
          { id: "armLTV", label: "ARM: LTV Ratio", format: "percent" },
          { id: "initialSavingsARM", label: "Initial Savings with ARM", format: "currency", highlight: true },
          { id: "potentialMaxDifference", label: "Potential Max Difference", format: "currency", highlight: true },
        ],
        showAmortization: false,
        showChart: false,
        customResultComponent: "FixedVsARMComparison",
      },
      
      "interest-only": {
        id: "interest-only",
        label: "Interest-Only",
        description: "Calculate interest-only vs. amortizing payments",
        inputs: [
          { id: "homeValue", label: "Home Value", type: "currency", defaultValue: 350000, min: 0, section: "Loan Information" },
          createDownPaymentField(70000, "Loan Information"),
          { id: "loanAmount", label: "Loan Amount", type: "currency", defaultValue: 280000, min: 0, section: "Loan Information", tooltip: "Auto-calculated from Home Value - Down Payment" },
          createLoanTermField(30, "Loan Information"),
          { id: "interestOnlyPeriodYears", label: "Interest-Only Period (years)", type: "number", defaultValue: 10, min: 1, max: 30, section: "Loan Information" },
          { id: "interestRate", label: "Interest Rate", type: "percent", defaultValue: 6.0, min: 0, max: 20, step: 0.01, section: "Rate Information" },
          { id: "interestOnlyRate", label: "Interest-Only Rate", type: "percent", defaultValue: 5.5, min: 0, max: 20, step: 0.01, section: "Rate Information" },
          { id: "showAmortization", label: "Show Amortization Schedule", type: "checkbox", defaultValue: false, section: "Options" },
        ],
        calculate: (inputs) => calculateInterestOnly({
          homeValue: inputs.homeValue,
          downPayment: inputs.downPayment,
          loanTermYears: inputs.loanTermYears,
          interestOnlyPeriodYears: inputs.interestOnlyPeriodYears,
          interestRate: inputs.interestRate,
          interestOnlyRate: inputs.interestOnlyRate,
          showAmortization: inputs.showAmortization,
        }),
        results: [
          { id: "loanAmount", label: "Loan Amount", format: "currency" },
          { id: "interestOnlyMonthlyPayment", label: "Interest-Only Monthly Payment", format: "currency", isPrimary: true },
          { id: "totalInterestOnlyInterest", label: "Total Interest-Only", format: "currency" },
          { id: "postIOAmortizingPayment", label: "Post-IO Monthly Payment", format: "currency", highlight: true },
          { id: "totalInterest", label: "Total Interest", format: "currency" },
          { id: "totalPaid", label: "Total Amount Paid", format: "currency" },
        ],
        showAmortization: true,
        showChart: false,
      },
      
      "interest-only-extra": {
        id: "interest-only-extra",
        label: "Interest-Only + Extra",
        description: "Calculate interest-only with additional principal payments",
        inputs: [
          { id: "homeValue", label: "Home Value", type: "currency", defaultValue: 350000, min: 0, section: "Loan Information" },
          createDownPaymentField(70000, "Loan Information"),
          { id: "loanAmount", label: "Loan Amount", type: "currency", defaultValue: 280000, min: 0, section: "Loan Information", tooltip: "Auto-calculated from Home Value - Down Payment" },
          createLoanTermField(30, "Loan Information"),
          { id: "interestOnlyPeriodYears", label: "Interest-Only Period (years)", type: "number", defaultValue: 10, min: 1, max: 30, section: "Loan Information" },
          { id: "interestRate", label: "Interest Rate", type: "percent", defaultValue: 6.0, min: 0, max: 20, step: 0.01, section: "Rate Information" },
          { id: "interestOnlyRate", label: "Interest-Only Rate", type: "percent", defaultValue: 5.5, min: 0, max: 20, step: 0.01, section: "Rate Information" },
          { id: "additionalMonthlyPayment", label: "Additional Monthly Payment", type: "currency", defaultValue: 200, min: 0, section: "Extra Payments" },
          { id: "showAmortization", label: "Show Amortization Schedule", type: "checkbox", defaultValue: false, section: "Options" },
        ],
        calculate: (inputs) => calculateInterestOnlyExtra({
          homeValue: inputs.homeValue,
          downPayment: inputs.downPayment,
          loanTermYears: inputs.loanTermYears,
          interestOnlyPeriodYears: inputs.interestOnlyPeriodYears,
          interestRate: inputs.interestRate,
          interestOnlyRate: inputs.interestOnlyRate,
          additionalMonthlyPayment: inputs.additionalMonthlyPayment,
          showAmortization: inputs.showAmortization,
        }),
        results: [
          { id: "interestOnlyMonthlyPayment", label: "Interest-Only Monthly Payment", format: "currency", isPrimary: true },
          { id: "postIOAmortizingPayment", label: "Post-IO Amortizing Payment", format: "currency" },
          { id: "actualPayoffMonths", label: "Actual Payoff (months)", format: "number" },
          { id: "monthsSaved", label: "Months Saved", format: "number", highlight: true },
          { id: "interestSaved", label: "Interest Saved", format: "currency", highlight: true },
          { id: "totalInterest", label: "Total Interest", format: "currency" },
          { id: "totalPaid", label: "Total Amount Paid", format: "currency" },
        ],
        showAmortization: true,
        showChart: false,
      },
      
      "balloon": {
        id: "balloon",
        label: "Balloon Mortgage",
        description: "Calculate balloon payment and monthly payments",
        inputs: [
          { id: "purchasePrice", label: "Purchase Price", type: "currency", defaultValue: 300000, min: 0, section: "Loan Information" },
          createDownPaymentField(60000, "Loan Information"),
          { id: "loanAmount", label: "Loan Amount", type: "currency", defaultValue: 240000, min: 0, section: "Loan Information", tooltip: "Auto-calculated from Purchase Price - Down Payment + Financed Fees" },
          { id: "interestRate", label: "Interest Rate", type: "percent", defaultValue: 5.5, min: 0, max: 20, step: 0.01, section: "Rate Information" },
          { id: "initialLoanTermYears", label: "Balloon Due Date (Years)", type: "number", defaultValue: 7, min: 1, max: 30, section: "Loan Terms", tooltip: "When balloon payment is due" },
          { id: "amortizationScheduleLengthYears", label: "Amortization Schedule Length (Years)", type: "number", defaultValue: 30, min: 1, max: 40, section: "Loan Terms", tooltip: "Payment calculated as if loan amortizes over this period" },
          { id: "upfrontPayment", label: "Upfront Payment", type: "currency", defaultValue: 0, min: 0, section: "Fees" },
          { id: "loanOriginationFeeMode", label: "Loan Origination Fee", type: "select", options: [
            { value: "percent", label: "% (Percentage)" },
            { value: "dollar", label: "$ (Dollar Amount)" }
          ], defaultValue: "percent", section: "Fees" },
          { id: "loanOriginationFeePercent", label: "Loan Origination Fee (%)", type: "percent", defaultValue: 1, min: 0, max: 10, step: 0.25, section: "Fees", condition: { dependsOn: "loanOriginationFeeMode", equals: "percent" } },
          { id: "loanOriginationFeeDollars", label: "Loan Origination Fee ($)", type: "currency", defaultValue: 2400, min: 0, section: "Fees", condition: { dependsOn: "loanOriginationFeeMode", equals: "dollar" } },
          { id: "financeIntoLoan", label: "Finance Origination Fee into Loan", type: "toggle", defaultValue: false, section: "Fees", tooltip: "Add origination fee to loan amount" },
        ],
        calculate: (inputs) => calculateBalloonMortgage({
          purchasePrice: inputs.purchasePrice,
          downPayment: inputs.downPayment,
          interestRate: inputs.interestRate,
          initialLoanTermYears: inputs.initialLoanTermYears,
          amortizationScheduleLengthYears: inputs.amortizationScheduleLengthYears,
          upfrontPayment: inputs.upfrontPayment,
          loanOriginationFeeMode: inputs.loanOriginationFeeMode,
          loanOriginationFeePercent: inputs.loanOriginationFeePercent,
          loanOriginationFeeDollars: inputs.loanOriginationFeeDollars,
          financeIntoLoan: inputs.financeIntoLoan,
        }),
        results: [
          { id: "monthlyPayment", label: "Monthly Payment", format: "currency", isPrimary: true },
          { id: "loanOriginationFee", label: "Loan Origination Fee", format: "currency" },
          { id: "paidUpfront", label: "Paid Upfront", format: "currency" },
          { id: "loanAmount", label: "Loan Amount", format: "currency" },
          { id: "ltv", label: "Loan-to-Value (LTV)", format: "percent" },
          { id: "totalInterestCost", label: "Total Interest Cost", format: "currency" },
          { id: "totalMonthlyPayments", label: "Total Monthly Payments", format: "currency" },
          { id: "endingBalloonPayment", label: "Ending Balloon Payment", format: "currency", highlight: true },
          { id: "totalOfAllPayments", label: "Total of All Payments", format: "currency" },
          { id: "effectiveAnnualRate", label: "Effective Annual Rate", format: "percent" },
        ],
        showAmortization: false,
        showChart: false,
      },
    },
  },

  // ========== AFFORDABILITY CATEGORY ==========
  affordability: {
    id: "affordability",
    title: "Home Affordability Calculators",
    description: "Determine what you can afford and compare rent vs. buy",
    defaultSubCalculator: "rent-vs-buy",
    subCalculators: {
      "rent-vs-buy": {
        id: "rent-vs-buy",
        label: "Rent vs Buy",
        description: "Compare long-term costs of renting vs buying",
        inputs: [
          // Rent Information
          { id: "monthlyRent", label: "Monthly Rent", type: "currency", defaultValue: 2500, min: 0, section: "Rent Information" },
          { id: "annualRentIncrease", label: "Annual Rent Increase", type: "percent", defaultValue: 3, min: 0, max: 20, step: 0.5, section: "Rent Information" },
          
          // Home Purchase
          { id: "homePurchasePrice", label: "Home Purchase Price", type: "currency", defaultValue: 400000, min: 0, section: "Home Purchase" },
          { id: "annualPropertyAppreciation", label: "Annual Property Appreciation", type: "percent", defaultValue: 3, min: -10, max: 20, step: 0.5, section: "Home Purchase" },
          
          // Down Payment with toggle
          { id: "downPaymentMode", label: "Down Payment Entry", type: "select", options: [
            { value: "dollar", label: "$ (Dollar Amount)" },
            { value: "percent", label: "% (Percentage)" }
          ], defaultValue: "dollar", section: "Home Purchase" },
          { id: "downPaymentDollars", label: "Down Payment ($)", type: "currency", defaultValue: 80000, min: 0, section: "Home Purchase", condition: { dependsOn: "downPaymentMode", equals: "dollar" } },
          { id: "downPaymentPercent", label: "Down Payment (%)", type: "percent", defaultValue: 20, min: 0, max: 100, section: "Home Purchase", condition: { dependsOn: "downPaymentMode", equals: "percent" } },
          
          // Loan Terms
          createInterestRateField(6.5, "Loan Terms"),
          createLoanTermField(30, "Loan Terms"),
          { id: "discountPoints", label: "Discount Points", type: "percent", defaultValue: 0, min: 0, max: 5, step: 0.25, section: "Loan Terms" },
          
          // Ownership Costs
          createPropertyTaxField(6000, "Ownership Costs"),
          createInsuranceField(1500, "Ownership Costs"),
          { id: "annualPMI", label: "Annual PMI", type: "percent", defaultValue: 0.5, min: 0, max: 2, step: 0.1, section: "Ownership Costs" },
          { id: "maintenanceAnnual", label: "Annual Maintenance Cost", type: "currency", defaultValue: 2000, min: 0, section: "Ownership Costs" },
          
          // Analysis
          { id: "yearsBeforeSelling", label: "Years Before Selling", type: "number", defaultValue: 10, min: 1, max: 50, section: "Analysis" },
          { id: "sellingCosts", label: "Selling Costs", type: "percent", defaultValue: 6, min: 0, max: 15, step: 0.5, section: "Analysis" },
          { id: "federalTaxRate", label: "Federal Income Tax Rate", type: "percent", defaultValue: 24, min: 0, max: 50, section: "Analysis" },
          { id: "showAmortization", label: "Show Amortization Schedule", type: "checkbox", defaultValue: false, section: "Analysis" },
        ],
        calculate: (inputs) => calculateRentVsBuy({
          monthlyRent: inputs.monthlyRent,
          annualRentIncrease: inputs.annualRentIncrease,
          homePurchasePrice: inputs.homePurchasePrice,
          annualPropertyAppreciation: inputs.annualPropertyAppreciation,
          yearsBeforeSelling: inputs.yearsBeforeSelling,
          sellingCosts: inputs.sellingCosts,
          downPaymentMode: inputs.downPaymentMode,
          downPaymentDollars: inputs.downPaymentDollars,
          downPaymentPercent: inputs.downPaymentPercent,
          interestRate: inputs.interestRate,
          loanTermYears: inputs.loanTermYears,
          discountPoints: inputs.discountPoints,
          annualPMI: inputs.annualPMI,
          propertyTaxAnnual: inputs.annualPropertyTax,
          insuranceAnnual: inputs.annualInsurance,
          maintenanceAnnual: inputs.maintenanceAnnual,
          federalTaxRate: inputs.federalTaxRate,
          showAmortization: inputs.showAmortization,
        }),
        results: [
          { id: "netCostDifference", label: "Net Cost Difference (Positive = Buying Saves)", format: "currency", isPrimary: true },
          { id: "breakevenYear", label: "Breakeven Year", format: "number" },
          { id: "totalRentCost", label: "Total Rent Paid", format: "currency" },
          { id: "netBuyCostAfterEquity", label: "Net Buy Cost (After Equity)", format: "currency" },
          { id: "homeValueAtSale", label: "Home Value at Sale", format: "currency" },
          { id: "remainingLoanBalance", label: "Remaining Mortgage Balance", format: "currency" },
          { id: "grossHomeEquity", label: "Gross Home Equity", format: "currency", highlight: true },
          { id: "sellingCosts", label: "Selling Costs (6%)", format: "currency" },
          { id: "netEquityAfterSale", label: "Net Equity After Sale", format: "currency", highlight: true },
        ],
        showAmortization: true,
        showChart: false,
        customResultComponent: "RentVsBuyComparison",
      },
      
      "income": {
        id: "income",
        label: "Income Requirement",
        description: "Calculate income needed to afford a home",
        inputs: [
          // Home Details
          createHomeValueField(400000, "Home Details"),
          
          // Down Payment with toggle
          { id: "downPaymentMode", label: "Down Payment Entry", type: "select", options: [
            { value: "dollar", label: "$ (Dollar Amount)" },
            { value: "percent", label: "% (Percentage)" }
          ], defaultValue: "dollar", section: "Home Details" },
          { id: "downPaymentDollars", label: "Down Payment ($)", type: "currency", defaultValue: 80000, min: 0, section: "Home Details", condition: { dependsOn: "downPaymentMode", equals: "dollar" } },
          { id: "downPaymentPercent", label: "Down Payment (%)", type: "percent", defaultValue: 20, min: 0, max: 100, section: "Home Details", condition: { dependsOn: "downPaymentMode", equals: "percent" } },
          
          // Loan Terms
          createLoanTermField(30, "Loan Terms"),
          createInterestRateField(6.5, "Loan Terms"),
          
          // Monthly Costs
          createPropertyTaxField(6000, "Monthly Costs"),
          createInsuranceField(1500, "Monthly Costs"),
          { id: "annualPMI", label: "Annual PMI", type: "percent", defaultValue: 0.5, min: 0, max: 2, step: 0.1, section: "Monthly Costs" },
          { id: "monthlyDebtPayments", label: "Monthly Other Debt Payments", type: "currency", defaultValue: 500, min: 0, section: "Monthly Costs" },
          
          // DTI Limits
          { id: "frontEndDTI", label: "Maximum Front-End DTI Ratio", type: "percent", defaultValue: 28, min: 10, max: 50, section: "DTI Limits" },
          { id: "backEndDTI", label: "Maximum Back-End DTI Ratio", type: "percent", defaultValue: 36, min: 10, max: 60, section: "DTI Limits" },
        ],
        calculate: (inputs) => calculateIncomeRequirement({
          homeValue: inputs.homeValue,
          downPaymentMode: inputs.downPaymentMode,
          downPaymentDollars: inputs.downPaymentDollars,
          downPaymentPercent: inputs.downPaymentPercent,
          loanTermYears: inputs.loanTermYears,
          interestRate: inputs.interestRate,
          propertyTaxAnnual: inputs.annualPropertyTax,
          insuranceAnnual: inputs.annualInsurance,
          annualPMI: inputs.annualPMI,
          monthlyDebtPayments: inputs.monthlyDebtPayments,
          frontEndDTI: inputs.frontEndDTI,
          backEndDTI: inputs.backEndDTI,
        }),
        results: [
          { id: "minimumAnnualIncome", label: "Minimum Required Annual Income", format: "currency", isPrimary: true },
          { id: "minimumMonthlyIncome", label: "Minimum Required Monthly Income", format: "currency" },
          { id: "monthlyPITI", label: "Monthly PITI Payment", format: "currency" },
          { id: "frontEndRequiredIncome", label: "Front-End Required Income", format: "currency" },
          { id: "backEndRequiredIncome", label: "Back-End Required Income", format: "currency" },
        ],
        showAmortization: false,
        showChart: false,
        customResultComponent: "IncomeRequirementComparison",
      },
      
      "qualification": {
        id: "qualification",
        label: "Mortgage Affordability",
        description: "Find your maximum affordable home price",
        inputs: [
          // Income & Debt
          { id: "annualIncome", label: "Annual Gross Income", type: "currency", defaultValue: 100000, min: 0, section: "Income & Debt" },
          { id: "monthlyDebtPayments", label: "Monthly Debt Payments", type: "currency", defaultValue: 500, min: 0, section: "Income & Debt" },
          { id: "downPayment", label: "Down Payment Available", type: "currency", defaultValue: 80000, min: 0, section: "Income & Debt" },
          
          // Loan Terms
          createInterestRateField(6.5, "Loan Terms"),
          createLoanTermField(30, "Loan Terms"),
          
          // Estimated Costs - Property Tax with toggle
          { id: "propertyTaxMode", label: "Property Tax Entry", type: "select", options: [
            { value: "percent", label: "% of Home Value" },
            { value: "dollar", label: "$ Per Year" }
          ], defaultValue: "percent", section: "Estimated Costs" },
          { id: "propertyTaxPercent", label: "Annual Property Tax (% of value)", type: "percent", defaultValue: 1.5, min: 0, max: 5, step: 0.1, section: "Estimated Costs", condition: { dependsOn: "propertyTaxMode", equals: "percent" } },
          { id: "propertyTaxDollars", label: "Annual Property Tax ($)", type: "currency", defaultValue: 6000, min: 0, section: "Estimated Costs", condition: { dependsOn: "propertyTaxMode", equals: "dollar" } },
          createInsuranceField(1500, "Estimated Costs"),
          
          // DTI Targets
          { id: "frontEndDTI", label: "Target Front-End Ratio", type: "percent", defaultValue: 28, min: 10, max: 50, section: "DTI Targets" },
          { id: "backEndDTI", label: "Target Back-End Ratio", type: "percent", defaultValue: 36, min: 10, max: 60, section: "DTI Targets" },
        ],
        calculate: (inputs) => calculateMortgageQualification({
          annualIncome: inputs.annualIncome,
          monthlyDebtPayments: inputs.monthlyDebtPayments,
          downPayment: inputs.downPayment,
          interestRate: inputs.interestRate,
          loanTermYears: inputs.loanTermYears,
          propertyTaxMode: inputs.propertyTaxMode,
          propertyTaxPercent: inputs.propertyTaxPercent,
          propertyTaxDollars: inputs.propertyTaxDollars,
          insuranceAnnual: inputs.annualInsurance,
          frontEndDTI: inputs.frontEndDTI,
          backEndDTI: inputs.backEndDTI,
        }),
        results: [
          { id: "maxAffordableHomePrice", label: "Maximum Affordable Home Price", format: "currency", isPrimary: true },
          { id: "maxLoanAmount", label: "Maximum Loan Amount", format: "currency" },
          { id: "estimatedMonthlyPayment", label: "Estimated Monthly P&I Payment", format: "currency" },
          { id: "calculatedFrontEndRatio", label: "Calculated Front-End Ratio", format: "percent" },
          { id: "calculatedBackEndRatio", label: "Calculated Back-End Ratio", format: "percent" },
        ],
        showAmortization: false,
        showChart: false,
      },
    },
  },

  // ========== SAVINGS & PAYOFF STRATEGIES CATEGORY ==========
  savings: {
    id: "savings",
    title: "Savings & Payoff Strategies",
    description: "Calculate savings from extra payments, biweekly payments, points, and tax benefits",
    defaultSubCalculator: "extra-payment",
    subCalculators: {
      "extra-payment": {
        id: "extra-payment",
        label: "Extra Payment",
        description: "Calculate savings from making extra payments",
        inputs: [
          // Home & Loan Details
          { id: "homePrice", label: "Home Price", type: "currency", defaultValue: 400000, min: 0, section: "Home & Loan Details" },
          
          // Down Payment with toggle
          { id: "downPaymentMode", label: "Down Payment Entry", type: "select", options: [
            { value: "dollar", label: "$ (Dollar Amount)" },
            { value: "percent", label: "% (Percentage)" }
          ], defaultValue: "dollar", section: "Home & Loan Details" },
          { id: "downPaymentDollars", label: "Down Payment ($)", type: "currency", defaultValue: 80000, min: 0, section: "Home & Loan Details", condition: { dependsOn: "downPaymentMode", equals: "dollar" } },
          { id: "downPaymentPercent", label: "Down Payment (%)", type: "percent", defaultValue: 20, min: 0, max: 100, section: "Home & Loan Details", condition: { dependsOn: "downPaymentMode", equals: "percent" } },
          
          { id: "loanAmount", label: "Loan Amount (auto-calculated, editable)", type: "currency", defaultValue: 320000, min: 0, section: "Home & Loan Details" },
          createInterestRateField(6.5, "Home & Loan Details"),
          { id: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: 30, min: 1, max: 50, section: "Home & Loan Details" },
          
          // Extra Payments
          { id: "initialExtraPayment", label: "Initial One-Time Extra Payment", type: "currency", defaultValue: 0, min: 0, section: "Extra Payments" },
          { id: "additionalMonthlyPayment", label: "Additional Monthly Payment", type: "currency", defaultValue: 100, min: 0, section: "Extra Payments" },
          
          // Display Options
          { id: "showAmortization", label: "Show Amortization Schedule", type: "checkbox", defaultValue: false, section: "Display Options" },
        ],
        calculate: (inputs) => calculateExtraPayment({
          homePrice: inputs.homePrice,
          downPaymentMode: inputs.downPaymentMode,
          downPaymentDollars: inputs.downPaymentDollars,
          downPaymentPercent: inputs.downPaymentPercent,
          loanAmount: inputs.loanAmount,
          interestRate: inputs.interestRate,
          loanTerm: inputs.loanTerm,
          initialExtraPayment: inputs.initialExtraPayment,
          additionalMonthlyPayment: inputs.additionalMonthlyPayment,
          showAmortization: inputs.showAmortization,
        }),
        results: [
          { id: "newPayoffDate", label: "New Payoff Date", format: "text", isPrimary: true },
          { id: "interestSaved", label: "Interest Saved", format: "currency", highlight: true },
          { id: "monthsShavedOff", label: "Months Shaved Off Loan", format: "number" },
        ],
        showAmortization: true,
        showChart: false,
      },
      "biweekly": {
        id: "biweekly",
        label: "Biweekly Payment",
        description: "Calculate savings from biweekly payments",
        inputs: [
          // Home & Loan Details
          { id: "homePrice", label: "Home Price", type: "currency", defaultValue: 400000, min: 0, section: "Home & Loan Details" },
          
          // Down Payment with toggle
          { id: "downPaymentMode", label: "Down Payment Entry", type: "select", options: [
            { value: "dollar", label: "$ (Dollar Amount)" },
            { value: "percent", label: "% (Percentage)" }
          ], defaultValue: "dollar", section: "Home & Loan Details" },
          { id: "downPaymentDollars", label: "Down Payment ($)", type: "currency", defaultValue: 80000, min: 0, section: "Home & Loan Details", condition: { dependsOn: "downPaymentMode", equals: "dollar" } },
          { id: "downPaymentPercent", label: "Down Payment (%)", type: "percent", defaultValue: 20, min: 0, max: 100, section: "Home & Loan Details", condition: { dependsOn: "downPaymentMode", equals: "percent" } },
          
          { id: "loanAmount", label: "Loan Amount (auto-calculated, editable)", type: "currency", defaultValue: 320000, min: 0, section: "Home & Loan Details" },
          { id: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: 30, min: 1, max: 50, section: "Home & Loan Details" },
          createInterestRateField(6.5, "Home & Loan Details"),
          
          // Payment Options
          { id: "interestCompounded", label: "Interest Compounded", type: "select", options: [
            { value: "monthly", label: "Monthly" },
            { value: "biweekly", label: "Biweekly" }
          ], defaultValue: "monthly", section: "Payment Options" },
          { id: "taxRate", label: "State & Federal Marginal Tax Rate", type: "percent", defaultValue: 25, min: 0, max: 50, section: "Payment Options" },
          
          // Display Options
          { id: "showAmortization", label: "Show Amortization Schedule", type: "checkbox", defaultValue: false, section: "Display Options" },
        ],
        calculate: (inputs) => calculateBiweeklyPaymentEnhanced({
          homePrice: inputs.homePrice,
          downPaymentMode: inputs.downPaymentMode,
          downPaymentDollars: inputs.downPaymentDollars,
          downPaymentPercent: inputs.downPaymentPercent,
          loanAmount: inputs.loanAmount,
          loanTerm: inputs.loanTerm,
          interestRate: inputs.interestRate,
          interestCompounded: inputs.interestCompounded,
          taxRate: inputs.taxRate,
          showAmortization: inputs.showAmortization,
        }),
        results: [
          { id: "payoffTimeMonthly", label: "Payoff Time: Monthly (months)", format: "number" },
          { id: "payoffTimeBiweekly", label: "Payoff Time: Biweekly (months)", format: "number", isPrimary: true },
          { id: "interestSaved", label: "Interest Saved", format: "currency", highlight: true },
        ],
        showAmortization: true,
        showChart: false,
      },



      "points": {
        id: "points",
        label: "Paying Points",
        description: "Calculate break-even period for paying discount points",
        inputs: [
          // Home & Loan Details
          { id: "homeValue", label: "Home Value", type: "currency", defaultValue: 400000, min: 0, section: "Home & Loan Details" },
          
          // Down Payment with toggle
          { id: "downPaymentMode", label: "Down Payment Entry", type: "select", options: [
            { value: "dollar", label: "$ (Dollar Amount)" },
            { value: "percent", label: "% (Percentage)" }
          ], defaultValue: "dollar", section: "Home & Loan Details" },
          { id: "downPaymentDollars", label: "Down Payment ($)", type: "currency", defaultValue: 80000, min: 0, section: "Home & Loan Details", condition: { dependsOn: "downPaymentMode", equals: "dollar" } },
          { id: "downPaymentPercent", label: "Down Payment (%)", type: "percent", defaultValue: 20, min: 0, max: 100, section: "Home & Loan Details", condition: { dependsOn: "downPaymentMode", equals: "percent" } },
          
          { id: "loanAmount", label: "Loan Amount (auto-calculated, editable)", type: "currency", defaultValue: 320000, min: 0, section: "Home & Loan Details" },
          { id: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: 30, min: 1, max: 50, section: "Home & Loan Details" },
          
          // Interest Rates
          { id: "interestRateWithoutPoints", label: "Interest Rate Without Points", type: "percent", defaultValue: 6.5, min: 0, max: 20, step: 0.01, section: "Interest Rates" },
          { id: "discountPoints", label: "Discount Points", type: "percent", defaultValue: 1, min: 0, max: 5, step: 0.125, section: "Interest Rates" },
          { id: "interestRateWithPoints", label: "Interest Rate With Points", type: "percent", defaultValue: 6.25, min: 0, max: 20, step: 0.01, section: "Interest Rates" },
          
          // Opportunity Cost
          { id: "interestRateOnSavings", label: "Interest Rate Earned on Savings", type: "percent", defaultValue: 3, min: 0, max: 20, step: 0.1, section: "Opportunity Cost" },
          
          // Display Options
          { id: "showAmortization", label: "Show Amortization Schedule", type: "checkbox", defaultValue: false, section: "Display Options" },
        ],
        calculate: (inputs) => calculatePayingPoints({
          homeValue: inputs.homeValue,
          downPaymentMode: inputs.downPaymentMode,
          downPaymentDollars: inputs.downPaymentDollars,
          downPaymentPercent: inputs.downPaymentPercent,
          loanAmount: inputs.loanAmount,
          loanTerm: inputs.loanTerm,
          interestRateWithoutPoints: inputs.interestRateWithoutPoints,
          discountPoints: inputs.discountPoints,
          interestRateWithPoints: inputs.interestRateWithPoints,
          interestRateOnSavings: inputs.interestRateOnSavings,
          showAmortization: inputs.showAmortization,
        }),
        results: [
          { id: "breakEvenPeriod", label: "Break-Even Period (months)", format: "number", isPrimary: true },
          { id: "totalInterestWithoutPoints", label: "Total Interest Without Points", format: "currency" },
          { id: "totalInterestWithPoints", label: "Total Interest With Points", format: "currency" },
          { id: "recommendation", label: "Recommendation Based on Years in Home", format: "text", highlight: true },
        ],
        showAmortization: true,
        showChart: false,
      },

      "tax-benefits": {
        id: "tax-benefits",
        label: "Tax Benefits",
        description: "Calculate tax benefits of homeownership",
        inputs: [
          // Home & Loan Details
          { id: "homeValue", label: "Home Value", type: "currency", defaultValue: 400000, min: 0, section: "Home & Loan Details" },
          
          // Down Payment with toggle
          { id: "downPaymentMode", label: "Down Payment Entry", type: "select", options: [
            { value: "dollar", label: "$ (Dollar Amount)" },
            { value: "percent", label: "% (Percentage)" }
          ], defaultValue: "dollar", section: "Home & Loan Details" },
          { id: "downPaymentDollars", label: "Down Payment ($)", type: "currency", defaultValue: 80000, min: 0, section: "Home & Loan Details", condition: { dependsOn: "downPaymentMode", equals: "dollar" } },
          { id: "downPaymentPercent", label: "Down Payment (%)", type: "percent", defaultValue: 20, min: 0, max: 100, section: "Home & Loan Details", condition: { dependsOn: "downPaymentMode", equals: "percent" } },
          
          { id: "loanAmount", label: "Loan Amount (auto-calculated, editable)", type: "currency", defaultValue: 320000, min: 0, section: "Home & Loan Details" },
          { id: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: 30, min: 1, max: 50, section: "Home & Loan Details" },
          createInterestRateField(6.5, "Home & Loan Details"),
          
          // Costs & Fees
          { id: "annualPMI", label: "Annual PMI", type: "percent", defaultValue: 0, min: 0, max: 2, step: 0.1, section: "Costs & Fees", tooltip: "Private Mortgage Insurance (typically required when down payment < 20%). Enter 0 if not applicable." },
          { id: "discountPoints", label: "Discount Points", type: "percent", defaultValue: 0, min: 0, max: 5, step: 0.125, section: "Costs & Fees" },
          { id: "otherClosingCosts", label: "Other Closing Costs", type: "currency", defaultValue: 5000, min: 0, section: "Costs & Fees" },
          { id: "annualPropertyTaxes", label: "Annual Property Taxes ($/year)", type: "currency", defaultValue: 6000, min: 0, section: "Costs & Fees" },
          { id: "annualInsurance", label: "Annual Homeowners Insurance ($/year)", type: "currency", defaultValue: 1500, min: 0, section: "Costs & Fees" },
          
          // Tax Information
          { id: "filingStatus", label: "Tax Filing Status", type: "select", options: [
            { value: "single", label: "Single" },
            { value: "marriedFilingJointly", label: "Married Filing Jointly" },
            { value: "marriedFilingSeparately", label: "Married Filing Separately" },
            { value: "headOfHousehold", label: "Head of Household" }
          ], defaultValue: "marriedFilingJointly", section: "Tax Information", tooltip: "Your filing status determines standard deduction amount" },
          { id: "grossAnnualIncome", label: "Gross Annual Income (for PMI deduction)", type: "currency", defaultValue: 0, min: 0, section: "Tax Information", tooltip: "Optional: PMI deduction phases out between $100k-$109k AGI ($50k-$54.5k if married filing separately)" },
          { id: "federalTaxRate", label: "Federal Income Tax Rate", type: "percent", defaultValue: 24, min: 0, max: 50, section: "Tax Information" },
          { id: "stateTaxRate", label: "State Income Tax Rate", type: "percent", defaultValue: 5, min: 0, max: 20, section: "Tax Information" },
          { id: "otherItemizedDeductions", label: "Other Itemized Deductions", type: "currency", defaultValue: 0, min: 0, section: "Tax Information", tooltip: "Additional itemized deductions (charity, state income taxes already paid, etc.)" },
          { id: "yearsUntilSale", label: "Years Until Likely Sale", type: "number", defaultValue: 7, min: 1, max: 30, section: "Tax Information" },
          
          // Display Options
          { id: "showAmortization", label: "Show Amortization Schedule", type: "checkbox", defaultValue: false, section: "Display Options" },
        ],
        calculate: (inputs) => calculateTaxBenefits({
          homeValue: inputs.homeValue,
          downPaymentMode: inputs.downPaymentMode,
          downPaymentDollars: inputs.downPaymentDollars,
          downPaymentPercent: inputs.downPaymentPercent,
          loanAmount: inputs.loanAmount,
          loanTerm: inputs.loanTerm,
          annualPMI: inputs.annualPMI,
          interestRate: inputs.interestRate,
          discountPoints: inputs.discountPoints,
          otherClosingCosts: inputs.otherClosingCosts,
          annualPropertyTaxes: inputs.annualPropertyTaxes,
          annualInsurance: inputs.annualInsurance,
          filingStatus: inputs.filingStatus,
          grossAnnualIncome: inputs.grossAnnualIncome,
          federalTaxRate: inputs.federalTaxRate,
          stateTaxRate: inputs.stateTaxRate,
          otherItemizedDeductions: inputs.otherItemizedDeductions,
          yearsUntilSale: inputs.yearsUntilSale,
          showAmortization: inputs.showAmortization,
        }),
        results: [
          { id: "estimatedAnnualTaxSavings", label: "Total Estimated Annual Tax Savings", format: "currency", isPrimary: true },
          { id: "federalTaxSavings", label: "→ Federal Tax Savings", format: "currency" },
          { id: "stateTaxSavings", label: "→ State Tax Savings", format: "currency" },
          { id: "standardDeductionComparison", label: "Standard vs. Itemized Deduction", format: "text", highlight: true },
          { id: "afterTaxCostOfOwnership", label: "After-Tax Cost of Ownership (over ownership period)", format: "currency" },
          { id: "totalTaxSavingsOverYears", label: "Total Tax Savings Over Ownership Period", format: "currency" },
          { id: "mortgageInterestDeduction", label: "First Year: Mortgage Interest Deduction", format: "currency" },
          { id: "propertyTaxDeduction", label: "First Year: Property Tax Deduction (SALT-capped)", format: "currency" },
          { id: "pmiDeduction", label: "First Year: PMI Deduction", format: "currency" },
          { id: "pointsDeduction", label: "First Year: Discount Points Deduction", format: "currency" },
          { id: "effectiveInterestRate", label: "Effective Interest Rate (after tax benefit)", format: "percent" },
        ],
        showAmortization: true,
        showChart: false,
      },
    },
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get calculator config by category and sub-calculator ID
 * Returns undefined if no config exists (e.g., for inline implementations like Second Mortgage, HELOC, Refinance)
 */
export function getCalculatorConfig(
  category: string, 
  subCalculatorId: string
): SubCalculatorConfig | undefined {
  const categoryConfig = CALCULATOR_CONFIGS[category as keyof typeof CALCULATOR_CONFIGS];
  if (!categoryConfig) return undefined;
  
  return categoryConfig.subCalculators[subCalculatorId];
}
