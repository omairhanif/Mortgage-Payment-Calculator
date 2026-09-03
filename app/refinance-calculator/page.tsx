"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, RefreshCw, Calculator } from "lucide-react";
import { calculateRefinance, type RefinanceInput } from "@/lib/mortgage";
import { formatCurrency } from "@/lib/utils";
import { NumberInput, Card } from "@/components/calculator/CalculatorFields";
import { getStructuredData } from "./server";

export default function RefinanceCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Content for Refinance Calculator
  const content = {
    icon: RefreshCw,
    title: "Refinance Calculator",
    description: [
      "Calculate potential savings from refinancing your mortgage by comparing your current loan with new loan terms, interest rates, and closing costs.",
      "Determine your break-even point and understand whether refinancing makes financial sense based on your specific situation and long-term goals."
    ],
    howItWorks: [
      "This calculator compares your current mortgage to potential refinance options to determine if refinancing makes financial sense. Refinancing replaces your existing mortgage with a new loan, potentially at a lower rate or different term.",
      "Enter your current loan balance, interest rate, and remaining term, along with the new loan's interest rate, term, and closing costs. The calculator compares your current monthly payment and total interest to what you'd pay with the new loan.",
      "Results show your monthly payment savings, break-even point (how long until closing cost savings exceed costs), total interest savings over the loan term, and whether refinancing is financially beneficial based on your situation."
    ],
    faqs: [
      {
        q: "Is it worth refinancing for 1% lower rate?",
        a: "Yes, refinancing for a 1% rate reduction is usually worth it if you plan to stay in your home for at least 2-3 years. On a $300,000 mortgage, dropping from 7% to 6% saves approximately $200/month ($2,400/year). With typical closing costs of $3,000-6,000, you'd break even in 15-30 months. Over a 30-year term, you'd save roughly $72,000 in interest. However, consider your specific situation: remaining loan term, how long you'll stay in the home, closing costs, and whether you're resetting to a new 30-year term (which increases total interest despite lower rates). Use a refinance calculator to model your exact scenario with current balance, rates, and costs."
      },
      {
        q: "How much should I save to refinance?",
        a: "Most financial experts recommend refinancing when you can save at least 0.5-1% on your interest rate, which typically translates to saving $150-300/month on a $300,000 mortgage. The key metric is your break-even point—when monthly savings equal closing costs. With $5,000 in closing costs and $200/month savings, you break even in 25 months. If you're planning to stay in your home longer than the break-even period, refinancing makes financial sense. Also consider: resetting your loan term (refinancing into a new 30-year adds years of payments), credit score requirements (usually 620+ minimum, 740+ for best rates), and current equity position (typically need 20% equity for best terms)."
      },
      {
        q: "What is a cash-out refinance and how does it work?",
        a: "A cash-out refinance replaces your current mortgage with a larger loan, letting you pocket the difference in cash while using your home equity. For example, if you owe $200,000 on a home worth $400,000, you could refinance for $280,000—paying off your $200,000 loan and receiving $80,000 cash (minus closing costs). Lenders typically allow you to borrow up to 80% of your home's value. Cash-out refinances are popular for home renovations, debt consolidation, or major expenses. They usually have slightly higher interest rates than rate-and-term refinances. A cash-out refinance calculator helps you determine available equity and new payment amounts."
      },
      {
        q: "How long does it take to refinance a mortgage?",
        a: "Refinancing typically takes 30-45 days from application to closing, though it can be as quick as 20 days with streamlined programs or extend to 60+ days if complications arise. The process includes: application and document submission (1-3 days), loan processing and underwriting review (2-3 weeks), home appraisal (1-2 weeks), final underwriting approval (3-5 days), and closing (scheduling within 1 week of approval). Factors affecting timeline: appraisal availability, documentation completeness, credit or title issues, and lender workload. Streamline refinances for FHA and VA loans can be faster since they require less documentation and may skip appraisals."
      },
      {
        q: "Can I refinance with bad credit?",
        a: "Yes, but refinancing with bad credit (below 620) is challenging and limits your options. Most conventional refinances require 620+ credit score, with best rates reserved for 740+. FHA streamline refinances accept scores as low as 580 with existing FHA loans. VA Interest Rate Reduction Refinance Loans (IRRRL) have no minimum credit requirement from VA, though lenders set their own minimums (usually 580-620). With bad credit, expect: higher interest rates (potentially 1-2% above prime rates), larger down payment or equity requirements (25-30% instead of 20%), limited lender options, and potentially needing to wait and improve credit first. Sometimes it's better to spend 6-12 months improving credit before refinancing to access better rates."
      },
      {
        q: "What are current refinance rates?",
        a: "Refinance rates fluctuate daily based on economic conditions, Federal Reserve policy, and bond market trends. As of 2024, typical refinance rates range from 6-8% for 30-year fixed mortgages, 5.5-7.5% for 15-year fixed, and 5.5-7% for 5/1 ARMs. Your actual rate depends on: credit score (740+ gets best rates), loan-to-value ratio (80% LTV or less is ideal), debt-to-income ratio (below 43% preferred), loan amount (jumbo loans carry higher rates), and property type (single-family homes get best rates). Refinance rates are typically 0.125-0.25% higher than purchase mortgage rates because refinances are considered slightly higher risk. Always shop multiple lenders—rates can vary by 0.25-0.5% between lenders for the same borrower."
      },
      {
        q: "Should I refinance from 30-year to 15-year mortgage?",
        a: "Refinancing from a 30-year to 15-year mortgage makes sense if you can afford higher monthly payments and want to save substantially on interest while building equity faster. For a $300,000 loan at 6.5% (30-year), payments are $1,896/month with $382,633 total interest. At 6% (15-year), payments jump to $2,532/month but total interest drops to only $155,743—saving $226,890. However, the $636/month payment increase requires sufficient income and cash flow flexibility. Consider refinancing to 15-year if: you're financially stable with good income, you've been paying extra principal already, you want to pay off your mortgage before retirement, and you can handle the higher payment without stress. Use a refinance calculator to compare scenarios and determine affordability."
      }
    ]
  };

  // Refinance Calculator State
  const [refOriginalLoanAmount, setRefOriginalLoanAmount] = useState<number>(320000);
  const [refOriginalTerm, setRefOriginalTerm] = useState<number>(30);
  const [refCurrentRate, setRefCurrentRate] = useState<number>(7.5);
  const [refMonthsPaid, setRefMonthsPaid] = useState<number>(60); // 5 years
  const [refNewTerm, setRefNewTerm] = useState<number>(30);
  const [refNewRate, setRefNewRate] = useState<number>(5.5);
  
  // New state variables
  const [refOriginalHomePrice, setRefOriginalHomePrice] = useState<number>(400000);
  const [refOriginalDownPayment, setRefOriginalDownPayment] = useState<number>(80000);
  const [refYearsBeforeSale, setRefYearsBeforeSale] = useState<number>(5);
  const [refDiscountPoints, setRefDiscountPoints] = useState<number>(0);
  const [refOriginationFees, setRefOriginationFees] = useState<number>(1);
  const [refOtherClosingCosts, setRefOtherClosingCosts] = useState<number>(3000);
  const [refFederalTaxRate, setRefFederalTaxRate] = useState<number>(24);
  const [refStateTaxRate, setRefStateTaxRate] = useState<number>(6);
  
  const [refResults, setRefResults] = useState<any>(null);

  // Ref for scrolling to results
  const refinanceResultsRef = useRef<HTMLDivElement>(null);

  // Helper function to scroll to results
  const scrollToResults = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -100;
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Handle Refinance Calculate
  const handleRefinanceCalculate = (shouldScroll = true) => {
    try {
      const input: RefinanceInput = {
        originalLoanAmount: refOriginalLoanAmount,
        originalTermYears: refOriginalTerm,
        currentRate: refCurrentRate,
        monthsPaid: refMonthsPaid,
        newRate: refNewRate,
        newTermYears: refNewTerm,
        discountPoints: refDiscountPoints,
        originationFees: refOriginationFees,
        otherClosingCosts: refOtherClosingCosts,
        originalHomePrice: refOriginalHomePrice,
        originalDownPayment: refOriginalDownPayment,
        yearsBeforeSale: refYearsBeforeSale,
        federalTaxRate: refFederalTaxRate,
        stateTaxRate: refStateTaxRate,
      };

      const results = calculateRefinance(input);
      setRefResults(results);
      
      if (shouldScroll) {
        setTimeout(() => {
          scrollToResults(refinanceResultsRef);
        }, 100);
      }
    } catch (error) {
      alert(`Calculation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  // Calculate results on initial page load
  useEffect(() => {
    handleRefinanceCalculate(false);
  }, []);

  const Icon = content.icon;
  const currentContent = content;

  return (
    <section className="py-8">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.softwareApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }}
      />
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">

        {/* Introduction Section */}
        <div className="mb-8 mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="h-8 w-8 text-indigo-600 flex-shrink-0" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
              {content.title}
            </h1>
          </div>
          <div className="h-px bg-indigo-600 mb-6"></div>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed">
            <p>{content.description[0]}</p>
            <p>{content.description[1]}</p>
          </div>
        </div>

        {/* Calculator Component */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* LEFT COLUMN - INPUTS */}
            <div className="lg:col-span-7 space-y-4">
            {/* Refinance Details Card */}
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
                      label="Original Home Price"
                      value={refOriginalHomePrice}
                      onChange={(value) => setRefOriginalHomePrice(Math.max(0, value))}
                    />
                    <NumberInput
                      label="Original Down Payment"
                      value={refOriginalDownPayment}
                      onChange={(value) => setRefOriginalDownPayment(Math.max(0, value))}
                    />
                    <NumberInput
                      label="Original Loan Amount"
                      value={refOriginalLoanAmount}
                      onChange={(value) => setRefOriginalLoanAmount(Math.max(0, value))}
                    />
                    <NumberInput
                      label="Current Rate (%)"
                      value={refCurrentRate}
                      onChange={(value) => setRefCurrentRate(Math.max(0, value))}
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
                  </div>
                </div>
                
                {/* Closing Costs Section */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Closing Costs</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <NumberInput
                      label="Discount Points (%)"
                      value={refDiscountPoints}
                      onChange={(value) => setRefDiscountPoints(Math.max(0, value))}
                      step={0.1}
                    />
                    <NumberInput
                      label="Origination Fees (%)"
                      value={refOriginationFees}
                      onChange={(value) => setRefOriginationFees(Math.max(0, value))}
                      step={0.1}
                    />
                    <NumberInput
                      label="Other Closing Costs ($)"
                      value={refOtherClosingCosts}
                      onChange={(value) => setRefOtherClosingCosts(Math.max(0, value))}
                    />
                  </div>
                </div>
                
                {/* Additional Details Section */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Additional Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <NumberInput
                      label="Years Before Sale"
                      value={refYearsBeforeSale}
                      onChange={(value) => setRefYearsBeforeSale(Math.max(0, value))}
                    />
                    <NumberInput
                      label="Federal Tax Rate (%)"
                      value={refFederalTaxRate}
                      onChange={(value) => setRefFederalTaxRate(Math.max(0, value))}
                      step={1}
                    />
                    <NumberInput
                      label="State Tax Rate (%)"
                      value={refStateTaxRate}
                      onChange={(value) => setRefStateTaxRate(Math.max(0, value))}
                      step={1}
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

                  {/* Key Metrics */}
                  <div className="space-y-2.5 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">Break Even Point</span>
                      <span className="text-sm font-semibold text-slate-900">
                        {refResults.breakEvenMonths > 0 
                          ? `${refResults.breakEvenMonths.toFixed(0)} months` 
                          : 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">Total Interest Savings</span>
                      <span className="text-sm font-semibold text-blue-600">{formatCurrency(refResults.lifetimeSavings)}</span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="mb-3 border-t border-slate-200"></div>
                  
                  {/* Comparison Table */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">
                      {refYearsBeforeSale}-Year Comparison
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b-2 border-slate-200">
                            <th className="py-2 px-1 text-left font-semibold text-slate-700">Metric</th>
                            <th className="py-2 px-1 text-right font-semibold text-slate-700">Before</th>
                            <th className="py-2 px-1 text-right font-semibold text-indigo-700">After</th>
                            <th className="py-2 px-1 text-right font-semibold text-green-700">Savings</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-slate-50">
                            <td className="py-2 px-1 text-slate-600">Monthly Payment</td>
                            <td className="py-2 px-1 text-right font-medium text-slate-900">
                              {formatCurrency(refResults.currentMonthlyPI)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-indigo-900">
                              {formatCurrency(refResults.newMonthlyPI)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-green-900">
                              {formatCurrency(refResults.monthlySavings)}
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-2 px-1 text-slate-600">Total Payments</td>
                            <td className="py-2 px-1 text-right font-medium text-slate-900">
                              {formatCurrency(refResults.beforeRefi.totalPayments)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-indigo-900">
                              {formatCurrency(refResults.afterRefi.totalPayments)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-green-900">
                              {formatCurrency(refResults.differences.totalPayments)}
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-2 px-1 text-slate-600">Total Interest</td>
                            <td className="py-2 px-1 text-right font-medium text-slate-900">
                              {formatCurrency(refResults.beforeRefi.totalInterest)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-indigo-900">
                              {formatCurrency(refResults.afterRefi.totalInterest)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-green-900">
                              {formatCurrency(refResults.differences.totalInterest)}
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-2 px-1 text-slate-600">Tax Savings</td>
                            <td className="py-2 px-1 text-right font-medium text-slate-900">
                              {formatCurrency(refResults.beforeRefi.taxSavings)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-indigo-900">
                              {formatCurrency(refResults.afterRefi.taxSavings)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-slate-900">
                              {formatCurrency(refResults.differences.taxSavings)}
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-2 px-1 text-slate-600">Loan Balance at Sale</td>
                            <td className="py-2 px-1 text-right font-medium text-slate-900">
                              {formatCurrency(refResults.beforeRefi.loanBalanceAtSale)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-indigo-900">
                              {formatCurrency(refResults.afterRefi.loanBalanceAtSale)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-green-900">
                              {formatCurrency(refResults.differences.loanBalanceAtSale)}
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-2 px-1 text-slate-600">Closing Costs</td>
                            <td className="py-2 px-1 text-right font-medium text-slate-900">
                              —
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-indigo-900">
                              {formatCurrency(refResults.totalClosingCosts)}
                            </td>
                            <td className="py-2 px-1 text-right font-medium text-slate-900">
                              {formatCurrency(refResults.totalClosingCosts)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

        {/* How It Works */}
      <div className="mb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-slate-900 mb-4 text-center">
            How This Calculator Works
          </h2>
          <div className="space-y-3">
            {content.howItWorks.map((text, i) => (
              <p key={i} className="text-sm text-slate-600 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* Article will be added */}
      
      {/* Comprehensive Refinance Article */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <article className="prose prose-slate prose-lg max-w-none">
              
              {/* Article Header */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  Understanding Refinance Calculators: Making Informed Decisions About Mortgage and Auto Loan Refinancing
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Refinance calculators help borrowers evaluate whether replacing an existing loan with a new one makes financial sense. Whether considering mortgage refinancing or exploring auto loan options, understanding how these calculators work and what their results mean can help you make more informed borrowing decisions.
                </p>
              </div>

              {/* Section 1: What Refinance Calculators Do */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  What Refinance Calculators Show You
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A refinance calculator compares your existing loan to a potential new loan, helping you see how changing your interest rate, loan term, or borrowing amount might affect your finances. These tools typically show you several key metrics: your current monthly payment versus what your new payment would be, how long it would take to recover the costs of refinancing (the break-even point), and how much interest you might pay over the life of each loan.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The calculator needs specific information about your current loan—including your remaining balance, current interest rate, and how much time remains on your loan term. You'll also enter details about the potential new loan, such as the interest rate you expect to qualify for, the term length you're considering, and the closing costs you'll need to pay. With these inputs, the calculator can provide estimates that help you evaluate whether refinancing aligns with your financial goals.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  It's important to understand that calculator results are estimates based on the information you provide. Actual loan terms, rates, fees, and costs can vary depending on your credit profile, the lender you work with, property details, and current market conditions. These tools help you model different scenarios and understand general trends, but they shouldn't replace detailed quotes from actual lenders when you're ready to move forward.
                </p>
              </div>

              {/* Section 2: Mortgage Refinancing */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  How Mortgage Refinancing Works
                </h3>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Rate-and-Term Refinancing
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Rate-and-term refinancing means replacing your current mortgage with a new one that has different interest rate or loan term, without significantly changing the loan amount. Borrowers often pursue this type of refinancing when interest rates have dropped since they originally borrowed, or when they want to shorten or lengthen their loan term.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  If market rates have fallen significantly since you took out your original mortgage, refinancing to a lower rate can reduce your monthly payment, decrease the total interest you pay over the life of the loan, or both. For example, if you originally borrowed $300,000 at 6.5% for 30 years, your monthly principal and interest payment would be approximately $1,896. If rates drop to 5.0% and you refinance the remaining balance to a new 30-year loan, your payment might decrease to around $1,610—a monthly savings of roughly $286.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Some borrowers refinance to change their loan term without necessarily lowering their interest rate. Refinancing from a 30-year to a 15-year mortgage generally increases your monthly payment but dramatically reduces total interest paid and builds equity faster. Conversely, refinancing from a 15-year to a 30-year mortgage reduces your monthly payment but extends the time you'll be paying interest and increases total interest costs.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Cash-Out Refinancing
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Cash-out refinancing means borrowing more than you currently owe and receiving the difference in cash. This allows you to tap into your home equity for purposes like home improvements, debt consolidation, or other major expenses. The new loan replaces your old mortgage and provides additional funds, but increases your loan balance and potentially your monthly payment.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Suppose you owe $200,000 on your current mortgage and your home is worth $350,000. You might refinance for $250,000, paying off the $200,000 you owe and receiving $50,000 in cash (minus closing costs). Your new loan will have a higher balance, which affects your monthly payment and total interest costs. A cash-out refinance calculator helps you model how different cash amounts and interest rates affect your payments and long-term costs.
                </p>
              </div>

              {/* Section 3: Break-Even Analysis */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Understanding the Break-Even Point in Refinancing
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The break-even point is one of the most important concepts in refinancing analysis. It represents how long you need to keep the new loan before the monthly savings offset the upfront costs of refinancing. This calculation helps you determine whether refinancing makes sense given your plans and timeline.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  To calculate the break-even point, divide your total closing costs by your monthly payment savings. For example, if refinancing costs you $4,000 in closing costs and reduces your monthly payment by $200, your break-even point is 20 months ($4,000 ÷ $200). After 20 months, you begin realizing net savings from the refinance.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  If you plan to stay in your home or keep the loan longer than the break-even period, refinancing is more likely to make financial sense. However, if you expect to sell your home or pay off the loan before reaching the break-even point, you might not recoup your closing costs, making refinancing less attractive. A refinance break-even calculator quickly performs this analysis for different cost and savings scenarios.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Keep in mind that break-even analysis focuses on when you recover your upfront costs, but doesn't capture the full financial picture. Total interest savings over the life of the loan might be substantial even if the break-even point is several years out. The right decision depends on both the break-even timeline and your broader financial goals and circumstances.
                </p>
              </div>

              {/* Section 4: Auto Loan Refinancing */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Auto Loan Refinancing Considerations
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Auto loan refinancing works similarly to mortgage refinancing—you replace your existing car loan with a new loan, ideally at a better interest rate or more favorable terms. Borrowers typically consider auto refinancing when their credit has improved since the original purchase, when market rates have fallen, or when their original loan had unfavorable terms.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  An auto loan refinance calculator helps you compare your current loan payment and total interest cost against what you'd pay with a new loan. Unlike mortgages, auto loan closing costs are generally much lower—often just a modest application or origination fee—making the break-even calculation simpler and the break-even period shorter.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  However, auto refinancing has some unique considerations. Many lenders won't refinance very old vehicles or those with high mileage, as the car's value as collateral diminishes over time. Additionally, if you're currently underwater on your auto loan (owing more than the car is worth), refinancing might be difficult or impossible. Some lenders also have minimum loan amounts, so refinancing might not be available if your remaining balance is very low.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Before refinancing an auto loan, verify that your current loan doesn't have prepayment penalties, which would add to your refinancing costs. Also consider how much time remains on your current loan—if you're already near the end of your loan term, refinancing might not provide meaningful benefits and could even extend the time you're paying interest.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Making Informed Refinancing Decisions
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Refinance calculators serve as valuable starting points for evaluating whether replacing your current loan makes financial sense. By modeling different scenarios—varying interest rates, loan terms, and costs—you can better understand the potential benefits and trade-offs of refinancing before committing to the process.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Remember that calculator estimates are not guarantees. The rates you qualify for, the actual costs you'll pay, and the specific terms available depend on many factors that calculators can't fully account for. Use these tools to narrow your options and identify promising scenarios, then work with lenders to get detailed quotes and confirmed terms.
                </p>

                <p className="text-base text-slate-600 leading-relaxed">
                  Whether you're considering mortgage refinancing, exploring auto loan options, or researching how refinancing works in different regions, take time to understand both the immediate impact on your monthly budget and the long-term total cost. Refinancing can be a useful financial tool when it aligns with your goals and circumstances, but it's not automatically beneficial in every situation. By combining calculator insights with careful research and professional guidance, you can make refinancing decisions that support your financial well-being.
                </p>
              </div>

            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {currentContent && currentContent.faqs.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 text-base">
                  Common questions about this calculator
                </p>
              </div>

              <div className="space-y-4">
                {currentContent.faqs.map((faq, index) => (
                  <div key={index} className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                        {faq.q}
                      </h3>
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-4 pb-4 border-t border-slate-100">
                        <p className="text-sm text-slate-600 leading-relaxed mt-3">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
