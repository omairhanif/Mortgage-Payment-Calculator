import type { InputConfig } from "./calculator-config.types";

type Values = Record<string, any>;
type Errors = Record<string, string>;

const positiveFields = new Set([
  "homePrice", "homeValue", "housePrice", "purchasePrice", "homePurchasePrice",
  "contractSalesPrice", "appraisedValue", "salePrice", "loanAmount", "annualIncome",
  "monthlyRent", "interestRate", "loanTermYears", "loanTerm", "refOriginalTerm",
  "refNewTerm", "refOriginalLoanAmount", "refOriginalHomePrice", "refOriginalDownPayment",
  "helocDrawPeriod", "helocRepaymentPeriod",
]);

const optionalZeroFields = new Set([
  "downPayment", "downPaymentDollars", "downPaymentPercent", "upfrontPayment",
  "additionalMonthlyPayment", "initialExtraPayment", "discountPoints", "originationPoints",
  "originationFees", "otherClosingCosts", "borrowerPaidClosingCosts", "prepaidExpenses",
  "annualPropertyTax", "annualInsurance", "monthlyHOA", "annualPMI", "pmiRate",
]);

const propertyFields = new Set([
  "homePrice", "homeValue", "housePrice", "purchasePrice", "homePurchasePrice",
  "contractSalesPrice", "appraisedValue", "salePrice",
]);

const moneyLimits: Record<string, { min: number; max: number }> = {
  annualPropertyTax: { min: 0, max: 1_000_000 },
  annualInsurance: { min: 0, max: 100_000 },
  monthlyHOA: { min: 0, max: 10_000 },
  otherClosingCosts: { min: 0, max: 1_000_000 },
  borrowerPaidClosingCosts: { min: 0, max: 1_000_000 },
  prepaidExpenses: { min: 0, max: 1_000_000 },
  closingCosts: { min: 0, max: 1_000_000 },
  additionalMonthlyPayment: { min: 0, max: 100_000 },
  initialExtraPayment: { min: 0, max: 100_000_000 },
  monthlyIncome: { min: 0, max: 1_000_000 },
  monthlyRent: { min: 0, max: 1_000_000 },
  annualIncome: { min: 0, max: 12_000_000 },
  helocCreditLimit: { min: 0, max: 100_000_000 },
};

function finiteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function propertyValue(values: Values): number | undefined {
  const keys = ["homePrice", "homeValue", "housePrice", "purchasePrice", "homePurchasePrice", "contractSalesPrice", "salePrice"];
  const key = keys.find((candidate) => finiteNumber(values[candidate]));
  return key ? values[key] : undefined;
}

function downPaymentValue(values: Values): number | undefined {
  if (finiteNumber(values.downPayment)) return values.downPayment;
  if (values.downPaymentMode === "percent" && finiteNumber(values.downPaymentPercent) && propertyValue(values) !== undefined) {
    return propertyValue(values)! * values.downPaymentPercent / 100;
  }
  return finiteNumber(values.downPaymentDollars) ? values.downPaymentDollars : undefined;
}

export function getEffectiveRange(input: InputConfig) {
  if (propertyFields.has(input.id) || input.id === "loanAmount") {
    return {
      min: input.min ?? 1_000,
      max: input.max ?? 100_000_000,
      step: input.step ?? 0.01,
    };
  }
  if (moneyLimits[input.id]) {
    return {
      min: input.min ?? moneyLimits[input.id].min,
      max: input.max ?? moneyLimits[input.id].max,
      step: input.step ?? 0.01,
    };
  }
  if (input.id === "propertyTaxPercent") return { min: input.min ?? 0, max: input.max ?? 10, step: input.step ?? 0.001 };
  if (input.id === "helocDrawPeriod") return { min: input.min ?? 1, max: input.max ?? 20, step: input.step ?? 1 };
  if (input.id === "helocRepaymentPeriod") return { min: input.min ?? 1, max: input.max ?? 30, step: input.step ?? 1 };
  if (input.type === "percent") {
    const min = input.min ?? (input.id === "interestRate" || input.id.includes("Rate") || input.id.includes("rate") ? 0.01 : 0);
    let max = 100;
    if (input.id === "interestRate" || input.id.includes("Rate") || input.id.includes("rate")) max = 30;
    if (input.id === "pmiRate") max = 5;
    if (input.id.includes("MIP")) max = input.id === "upfrontMIPRate" ? 10 : 5;
    if (input.id.includes("Points") || input.id.includes("Fees") || input.id.includes("origination")) max = 10;
    if (input.id.includes("Adjustment") || input.id.includes("Cap")) max = 10;
    if (input.id === "annualPMI") max = 2;
    return { min, max: input.max ?? max, step: input.step ?? 0.001 };
  }
  if (input.type === "years") return { min: input.min ?? 1, max: input.max ?? 50, step: input.step ?? 1 };
  if (input.type === "number") {
    if (input.id.includes("Months") || input.id.includes("months")) return { min: input.min ?? 0, max: input.max ?? 600, step: input.step ?? 1 };
    return { min: input.min ?? 0, max: input.max ?? 1_000_000, step: input.step ?? 1 };
  }
  return { min: input.min ?? 0, max: input.max ?? 1_000_000, step: input.step };
}

export function validateCalculatorInputs(inputs: InputConfig[], values: Values, enforceLoanAmountMatch = true): Errors {
  const errors: Errors = {};

  for (const input of inputs) {
    if (input.type === "select" || input.type === "checkbox" || input.type === "toggle") continue;
    if (input.condition && values[input.condition.dependsOn] !== input.condition.equals) continue;

    const value = values[input.id];
    const { min, max, step } = getEffectiveRange(input);
    if (!finiteNumber(value)) {
      errors[input.id] = "Enter a valid number.";
      continue;
    }
    if (value < min || value > max) {
      errors[input.id] = `Enter a value from ${min} to ${max}.`;
      continue;
    }
    if ((input.type === "years" || input.type === "number") && !Number.isInteger(value)) {
      errors[input.id] = "Enter a whole number.";
      continue;
    }
    if (input.type === "currency" && Math.round(value * 100) / 100 !== value) {
      errors[input.id] = "Enter no more than 2 decimal places.";
      continue;
    }
    if (input.type === "percent" && Math.round(value * 1000) / 1000 !== value) {
      errors[input.id] = "Enter no more than 3 decimal places.";
      continue;
    }
    if (positiveFields.has(input.id) && value <= 0) {
      errors[input.id] = "Enter a value greater than 0.";
      continue;
    }
    // Inline calculators can explicitly mark a currency field as allowing zero
    // with `min: 0`, even when its id is not part of the shared config list.
    if (!optionalZeroFields.has(input.id) && input.min !== 0 && input.type === "currency" && value <= 0) {
      errors[input.id] = "Enter a value greater than 0.";
    }
  }

  const property = propertyValue(values);
  const downPayment = downPaymentValue(values);
  if (property !== undefined && downPayment !== undefined && downPayment > property) {
    const field = values.downPaymentMode === "percent" ? "downPaymentPercent" : (values.downPaymentDollars !== undefined ? "downPaymentDollars" : "downPayment");
    errors[field] = "Down payment cannot exceed the property value.";
  }

  if (property !== undefined && finiteNumber(values.loanAmount) && values.loanAmount > property) {
    errors.loanAmount = "Loan amount cannot exceed the property value.";
  }

  if (enforceLoanAmountMatch && property !== undefined && downPayment !== undefined && finiteNumber(values.loanAmount)) {
    const hasFinancedCosts = Boolean(values.financePoints || values.financeOtherClosingCosts || values.financeIntoLoan);
    if (!hasFinancedCosts && values.loanAmount !== property - downPayment) {
      errors.loanAmount = "Loan amount must equal property value minus down payment.";
    }
  }

  if (finiteNumber(values.existingMortgageBalance) && finiteNumber(values.helocCreditLimit) && property !== undefined) {
    if (values.existingMortgageBalance > property) errors.existingMortgageBalance = "Existing mortgage cannot exceed home value.";
    if (values.existingMortgageBalance + values.helocCreditLimit > property) {
      errors.helocCreditLimit = "HELOC amount cannot exceed available equity.";
    }
  }
  if (finiteNumber(values.initialExtraPayment) && finiteNumber(values.loanAmount) && values.initialExtraPayment > values.loanAmount) {
    errors.initialExtraPayment = "Extra payment cannot exceed the remaining loan balance.";
  }
  if (finiteNumber(values.additionalMonthlyPayment) && finiteNumber(values.loanAmount) && values.additionalMonthlyPayment > values.loanAmount) {
    errors.additionalMonthlyPayment = "Extra payment cannot exceed the remaining loan balance.";
  }
  if (finiteNumber(values.firstMortgage) && finiteNumber(values.secondMortgage) && property !== undefined && values.firstMortgage + values.secondMortgage > property) {
    errors.secondMortgage = "Combined mortgages cannot exceed home value.";
  }

  if (finiteNumber(values.initialLoanTermYears) && finiteNumber(values.amortizationScheduleLengthYears) && values.initialLoanTermYears > values.amortizationScheduleLengthYears) {
    errors.initialLoanTermYears = "Balloon due date cannot exceed the amortization period.";
  }
  if (finiteNumber(values.interestOnlyPeriodYears) && finiteNumber(values.loanTermYears) && values.interestOnlyPeriodYears > values.loanTermYears) {
    errors.interestOnlyPeriodYears = "Interest-only period cannot exceed the loan term.";
  }
  if (finiteNumber(values.frontEndDTI) && finiteNumber(values.backEndDTI) && values.frontEndDTI > values.backEndDTI) {
    errors.frontEndDTI = "Front-end ratio cannot exceed back-end ratio.";
  }
  if (finiteNumber(values.armFirstAdjustmentCap) && finiteNumber(values.armSubsequentAdjustmentCap) && values.armFirstAdjustmentCap <= 0 && values.armSubsequentAdjustmentCap <= 0) {
    errors.armFirstAdjustmentCap = "At least one adjustment cap must be greater than 0.";
  }
  if (finiteNumber(values.armLifetimeAdjustmentCap) && finiteNumber(values.armFirstAdjustmentCap) && values.armLifetimeAdjustmentCap < values.armFirstAdjustmentCap) {
    errors.armLifetimeAdjustmentCap = "Lifetime cap cannot be less than the first adjustment cap.";
  }
  if (finiteNumber(values.yearsBeforeSelling) && finiteNumber(values.loanTermYears) && values.yearsBeforeSelling > values.loanTermYears) {
    errors.yearsBeforeSelling = "Selling year cannot exceed the loan term.";
  }
  const monthField = ["monthsPaid", "refMonthsPaid", "monthsBeforeSelling"].find((field) => values[field] !== undefined);
  const termField = ["loanTermYears", "loanTerm", "refOriginalTerm"].find((field) => finiteNumber(values[field]));
  if (monthField && termField && finiteNumber(values[monthField]) && values[monthField] > values[termField] * 12) {
    errors[monthField] = `Months paid cannot exceed ${values[termField] * 12}.`;
  }
  if (values.downPaymentMode === "percent" && finiteNumber(values.downPaymentPercent) && values.downPaymentPercent > 100) {
    errors.downPaymentPercent = "Down payment cannot exceed 100%.";
  }
  if (finiteNumber(values.taxRate) && finiteNumber(values.frontEndDTI) && values.taxRate > 100) {
    errors.taxRate = "Enter a valid tax rate.";
  }

  return errors;
}

export function hasValidationErrors(errors: Errors) {
  return Object.keys(errors).length > 0;
}
