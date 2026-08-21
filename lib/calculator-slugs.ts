/**
 * Centralized Calculator URL Slugs
 * Single source of truth for all calculator URL paths
 * Total: 19 calculators
 */

export const calculatorSlugs = {
  // Mortgage (4)
  mortgage: "mortgage-payment",
  secondMortgage: "second-mortgage",
  heloc: "heloc",
  refinance: "refinance",
  
  // ARM (4)
  fixedVsArm: "fixed-vs-arm",
  interestOnly: "interest-only",
  interestOnlyExtra: "interest-only-extra",
  balloonMortgage: "balloon",
  
  // Rates (4)
  realApr: "real-apr",
  fhaLoan: "fha",
  vaLoan: "va",
  jumboLoan: "jumbo",
  
  // Affordability (2)
  incomeRequirement: "income",
  mortgageQualification: "qualification",
  
  // Savings (4)
  extraPayment: "extra-payment",
  biweeklyPayment: "biweekly",
  payingPoints: "points",
  taxBenefits: "tax-benefits",
  
  // Comparison (1)
  rentVsBuy: "rent-vs-buy",
} as const;

// TypeScript types
export type CalculatorSlugKey = keyof typeof calculatorSlugs;
export type CalculatorSlugValue = typeof calculatorSlugs[CalculatorSlugKey];
