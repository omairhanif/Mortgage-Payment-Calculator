"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, CreditCard, Calculator, Plus, Trash2 } from "lucide-react";
import { calculateHeloc, type HelocInput } from "@/lib/mortgage";
import { formatCurrency } from "@/lib/utils";
import { NumberInput, Card } from "@/components/calculator/CalculatorFields";
import { getStructuredData } from "./server";

export default function HelocCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Content for HELOC Calculator
  const content = {
    icon: CreditCard,
    title: "HELOC Calculator",
    description: [
      "Calculate payments and costs for a Home Equity Line of Credit (HELOC), which works like a credit card secured by your home equity. HELOCs have two phases: a draw period where you can borrow money and typically make interest-only payments, and a repayment period where you pay back principal and interest.",
      "Enter your desired credit line amount, draw period length (usually 5-10 years), repayment period length (usually 10-20 years), and interest rate. The calculator determines payments during both periods based on standard HELOC terms."
    ],
    howItWorks: [
      "This calculator helps you understand the costs and payment structure of a Home Equity Line of Credit (HELOC), which works like a credit card secured by your home equity. HELOCs have two phases: a draw period where you can borrow money and typically make interest-only payments, and a repayment period where you pay back principal and interest.",
      "Enter your desired credit line amount, draw period length (usually 5-10 years), repayment period length (usually 10-20 years), and interest rate. The calculator determines payments during both periods based on standard HELOC terms.",
      "Results display your monthly payment during the draw period (interest-only), your higher monthly payment during the repayment period (principal + interest), and total interest costs over the life of the HELOC."
    ],
    faqs: [
      {
        q: "What is the monthly payment on a $50,000 HELOC?",
        a: "The monthly payment on a $50,000 HELOC depends on whether you're in the draw period or repayment period. During the typical 10-year draw period with interest-only payments at 7.5% APR, you'd pay approximately $312.50/month ($50,000 × 0.075 ÷ 12). Once the repayment period begins (typically 15-20 years), payments include principal and interest. For a 15-year repayment at 7.5%, the payment jumps to about $463/month. Many HELOC calculators show both phases. Actual payments vary based on your interest rate (which is usually variable), how much of your credit line you've used, and your specific HELOC terms with lenders like CIBC, RBC, TD, or BMO."
      },
      {
        q: "What would payments be on a $100,000 HELOC?",
        a: "For a $100,000 HELOC balance, expect interest-only payments of approximately $625/month during the draw period at 7.5% APR ($100,000 × 0.075 ÷ 12). When the repayment period starts, principal and interest payments increase dramatically—to about $927/month over 15 years at 7.5%. Over the full HELOC term (10-year draw + 15-year repayment), you'll pay roughly $241,000 total ($100,000 principal + $141,000 interest). Using a HELOC payment calculator helps you model different scenarios. Remember that HELOC rates are typically variable and tied to prime rate, so your actual payments will fluctuate as rates change."
      },
      {
        q: "How much is a HELOC payment on $150,000?",
        a: "A $150,000 HELOC generates interest-only payments of approximately $937.50/month during the draw period at 7.5% APR. When you enter the repayment period, payments surge to around $1,390/month over 15 years (principal + interest at 7.5%). Total cost over a typical HELOC structure (10-year draw, 15-year repayment) would be about $362,000—that's $150,000 in principal and $212,000 in interest. HELOC payment calculators from major banks like TD HELOC calculator, CIBC HELOC calculator, or RBC HELOC calculator can show your specific scenario. Many Canadians use HELOC calculators Canada-specific to account for regional lending practices."
      },
      {
        q: "Can I get a HELOC from TD, CIBC, RBC, or BMO?",
        a: "Yes, all major Canadian banks offer HELOCs: TD offers the TD Home Equity FlexLine, CIBC has the CIBC Home Power Plan, RBC provides the RBC Homeline Plan, and BMO offers the BMO Homeowner ReadiLine. Each bank's HELOC product allows you to borrow up to 65% of your home's value (or 80% when combined with your first mortgage). Rates are typically prime + 0.5-1% and vary by lender and your credit profile. Using a HELOC calculator TD or HELOC calculator RBC on their websites helps estimate payments, but comparing multiple lenders is wise. Credit unions and alternative lenders also offer HELOCs, sometimes with more flexible terms or slightly different rate structures."
      },
      {
        q: "What are HELOC rates in Canada?",
        a: "HELOC rates in Canada typically range from prime rate + 0.5% to prime + 1% for qualified borrowers at major banks (TD, RBC, CIBC, BMO, Scotiabank). With the current prime rate around 6.95%, most HELOC rates fall between 7.45-7.95% for well-qualified borrowers. Your actual HELOC interest rate depends on your credit score, loan-to-value ratio, existing relationship with the lender, and overall financial profile. Some lenders offer promotional rates temporarily. Unlike fixed-rate mortgages, HELOC rates are variable and adjust when the Bank of Canada changes its policy rate, directly affecting your monthly interest charges. Always compare HELOC rates across multiple lenders—even a 0.25% difference saves hundreds annually on a large balance."
      },
      {
        q: "How to pay off a HELOC fast?",
        a: "To pay off a HELOC faster: (1) Make principal payments during the draw period instead of just interest-only payments—this prevents balance growth and reduces total interest; (2) Set up automatic biweekly or weekly payments totaling more than the minimum monthly amount; (3) Apply windfalls (bonuses, tax refunds, inheritances) directly to principal; (4) Stop drawing from the line—treat it like a closed loan rather than revolving credit; (5) Consider refinancing to a fixed-rate term loan if rates drop, locking in lower rates and forced amortization. Using a HELOC payoff calculator or HELOC calculator with extra payments shows your savings—for example, adding $200/month extra to a $75,000 balance could save $15,000+ in interest and pay it off years earlier."
      },
      {
        q: "Is a HELOC or home equity loan better?",
        a: "A HELOC is better for ongoing, flexible access to funds—you draw what you need when you need it, pay interest only on what you've borrowed, and can pay down and reborrow during the draw period. It's ideal for ongoing renovations, emergency reserves, or variable expenses. A home equity loan is better when you need a fixed lump sum with predictable payments—you receive all funds upfront, make fixed principal and interest payments immediately, and often get a lower, fixed interest rate. Use a HELOC for flexibility; use a home equity loan for discipline, lower rates, and predictable budgeting. HELOC rates are typically variable (currently 7-8% in Canada), while home equity loans may offer fixed rates around 6-9%."
      }
    ]
  };

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
  const [helocDebts, setHelocDebts] = useState<Array<{name: string, balance: number, monthlyPayment: number, rate: number}>>(
    [
      { name: "Credit Card 1", balance: 5000, monthlyPayment: 150, rate: 18.5 },
      { name: "Credit Card 2", balance: 8000, monthlyPayment: 200, rate: 21.0 },
    ]
  );
  
  const [helocResults, setHelocResults] = useState<any>(null);

  // Ref for scrolling to results
  const helocResultsRef = useRef<HTMLDivElement>(null);

  // Helper function to scroll to results
  const scrollToResults = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -100;
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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

  // Helper function to calculate metrics for existing debts
  const calculateDebtMetrics = (debts: Array<{name: string, balance: number, monthlyPayment: number, rate: number}>) => {
    if (debts.length === 0) {
      return {
        totalInterest: 0,
        totalCost: 0,
        payoffYears: 0,
        weightedAvgRate: 0
      };
    }

    let totalInterest = 0;
    let totalBalance = 0;
    let weightedMonths = 0;
    let weightedRate = 0;

    debts.forEach(debt => {
      const balance = debt.balance || 0;
      const monthlyPayment = debt.monthlyPayment || 0;
      const rate = debt.rate || 0;
      
      if (balance > 0 && monthlyPayment > 0) {
        totalBalance += balance;
        
        // Calculate monthly interest rate
        const monthlyRate = (rate / 100) / 12;
        
        // Estimate payoff months using amortization formula
        let months = 0;
        if (monthlyRate > 0 && monthlyPayment > balance * monthlyRate) {
          months = Math.log(monthlyPayment / (monthlyPayment - balance * monthlyRate)) / Math.log(1 + monthlyRate);
        } else if (monthlyRate === 0 && monthlyPayment > 0) {
          months = balance / monthlyPayment;
        } else {
          // If payment barely covers interest, estimate 360 months (30 years)
          months = 360;
        }
        
        // Calculate total interest for this debt
        const totalPaid = monthlyPayment * months;
        const interest = totalPaid - balance;
        totalInterest += Math.max(0, interest);
        
        // Weighted average calculations
        weightedMonths += months * balance;
        weightedRate += rate * balance;
      }
    });

    const avgMonths = totalBalance > 0 ? weightedMonths / totalBalance : 0;
    const avgRate = totalBalance > 0 ? weightedRate / totalBalance : 0;

    return {
      totalInterest: totalInterest,
      totalCost: totalBalance + totalInterest,
      payoffYears: avgMonths / 12,
      weightedAvgRate: avgRate
    };
  };

  // Helper function to calculate HELOC metrics
  const calculateHelocMetrics = (
    amountUsed: number,
    helocRate: number,
    drawPeriodYears: number,
    repaymentPeriodYears: number,
    drawPayment: number,
    repaymentPayment: number
  ) => {
    // Draw period interest (interest-only)
    const drawPeriodInterest = drawPayment * drawPeriodYears * 12;
    
    // Repayment period interest
    const repaymentPeriodTotalPaid = repaymentPayment * repaymentPeriodYears * 12;
    const repaymentPeriodInterest = repaymentPeriodTotalPaid - amountUsed;
    
    const totalInterest = drawPeriodInterest + repaymentPeriodInterest;
    const totalCost = amountUsed + totalInterest;
    const totalYears = drawPeriodYears + repaymentPeriodYears;
    
    return {
      totalInterest,
      totalCost,
      payoffYears: totalYears,
      rate: helocRate
    };
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
    
    if (shouldScroll) {
      setTimeout(() => {
        scrollToResults(helocResultsRef);
      }, 100);
    }
  };

  // Calculate results on initial page load
  useEffect(() => {
    handleHelocCalculate(false);
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
            {/* HELOC Details Card */}
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

                {/* Debt Management UI */}
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
            {helocResults && (
              <div className="space-y-4">
                {/* Consolidated Results Card */}
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center gap-1.5">
                    <Calculator className="h-4 w-4 text-indigo-600" />
                    <h3 className="font-serif text-base font-bold text-slate-900">Results</h3>
                  </div>

                  {/* Calculate comparison metrics */}
                  {(() => {
                    const debtMetrics = calculateDebtMetrics(helocDebts);
                    const helocMetrics = calculateHelocMetrics(
                      helocResults.amountUsedForDebtConsolidation,
                      helocInterestRate,
                      helocDrawPeriod,
                      helocRepaymentPeriod,
                      helocResults.helocMonthlyPaymentDrawPeriod,
                      helocResults.helocMonthlyPaymentRepaymentPeriod
                    );

                    return (
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b-2 border-slate-200">
                              <th className="py-3 px-2 text-left font-semibold text-slate-700">Metric</th>
                              <th className="py-3 px-2 text-right font-semibold text-slate-700">Debt + Personal Loan</th>
                              <th className="py-3 px-2 text-right font-semibold text-indigo-700">HELOC</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50">
                              <td className="py-3 px-2 text-slate-600">Monthly Payment</td>
                              <td className="py-3 px-2 text-right font-medium text-slate-900">
                                {formatCurrency(helocResults.totalMonthlyDebtPayments)}
                              </td>
                              <td className="py-3 px-2 text-right font-medium text-indigo-900">
                                {formatCurrency(helocResults.helocMonthlyPaymentRepaymentPeriod)}
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-3 px-2 text-slate-600">Total Interest</td>
                              <td className="py-3 px-2 text-right font-medium text-slate-900">
                                {formatCurrency(debtMetrics.totalInterest)}
                              </td>
                              <td className="py-3 px-2 text-right font-medium text-indigo-900">
                                {formatCurrency(helocMetrics.totalInterest)}
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-3 px-2 text-slate-600">Total Cost</td>
                              <td className="py-3 px-2 text-right font-medium text-slate-900">
                                {formatCurrency(debtMetrics.totalCost)}
                              </td>
                              <td className="py-3 px-2 text-right font-medium text-indigo-900">
                                {formatCurrency(helocMetrics.totalCost)}
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-3 px-2 text-slate-600">Payoff Timeline</td>
                              <td className="py-3 px-2 text-right font-medium text-slate-900">
                                {debtMetrics.payoffYears.toFixed(1)} years
                              </td>
                              <td className="py-3 px-2 text-right font-medium text-indigo-900">
                                {helocMetrics.payoffYears.toFixed(1)} years
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-3 px-2 text-slate-600">Interest Rate</td>
                              <td className="py-3 px-2 text-right font-medium text-slate-900">
                                {debtMetrics.weightedAvgRate.toFixed(2)}%
                              </td>
                              <td className="py-3 px-2 text-right font-medium text-indigo-900">
                                {helocMetrics.rate.toFixed(2)}%
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  })()}
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

      {/* Article will be added next */}
      
      {/* Comprehensive HELOC Article */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <article className="prose prose-slate prose-lg max-w-none">
              
              {/* Article Header */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  Understanding HELOC Calculators: How Much Can You Borrow, Interest-Only Payments, and Monthly Payment Estimates
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Home Equity Lines of Credit (HELOCs) provide homeowners with flexible access to their home equity, but understanding how much you can borrow and what your monthly payments might be requires careful calculation. Whether you're searching for a HELOC calculator in Canada, Ontario, Alberta, or comparing options from TD, Scotiabank, BMO, CIBC, or RBC, this comprehensive guide explains how HELOC calculators work, how payments are calculated during interest-only and repayment periods, and what to expect when borrowing $50,000, $100,000, or $150,000 through a home equity line of credit.
                </p>
              </div>

              {/* Section 1: What Is a HELOC */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  What Is a HELOC and How Does It Differ From Other Home Equity Products?
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A Home Equity Line of Credit (HELOC) is a revolving credit line secured by your home equity—the difference between your home's current market value and what you owe on your existing mortgage. Unlike a traditional mortgage where you receive a lump sum and make fixed monthly payments over a predetermined term, a HELOC works more like a credit card. You're approved for a maximum credit limit, and you can borrow money as needed up to that limit, pay it back, and borrow again during what's called the "draw period."
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  What makes a HELOC distinct from a home equity loan or second mortgage is this revolving credit structure. With a home equity loan or second mortgage, you receive a lump sum upfront and immediately begin making fixed monthly payments that include both principal and interest. Once you've paid back the loan, you can't borrow from it again unless you apply for a new loan. A HELOC, by contrast, gives you ongoing access to funds throughout the draw period, and you only pay interest on the amount you've actually borrowed, not on your entire credit limit.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  HELOCs typically operate in two distinct phases. During the draw period—usually lasting 5 to 10 years—you can borrow from your credit line and generally make interest-only payments, though many lenders allow you to pay down principal if you choose. When the draw period ends, the HELOC enters the repayment period, which typically lasts 10 to 20 years. During repayment, you can no longer draw additional funds, and your monthly payment increases to include both principal and interest as the outstanding balance is amortized over the remaining term.
                </p>
              </div>

              {/* Section 2: How a HELOC Calculator Works */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  How a HELOC Calculator Works and What Variables Affect Your Estimate
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A HELOC calculator estimates your potential credit limit, monthly payments during the draw period, and monthly payments during the repayment period based on several key variables you provide. The primary inputs typically include your home's current market value, your existing mortgage balance (if any), the interest rate you expect to receive, the length of the draw period, and the length of the repayment period.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The calculator first determines your available equity—your home's value minus your existing mortgage balance. Then it applies the lender's maximum combined loan-to-value (CLTV) ratio to calculate your potential borrowing capacity. Most lenders cap total debt against your home at 80% to 85% of the property value, though this varies by lender and your creditworthiness. For example, if your home is worth $400,000 and you owe $200,000 on your first mortgage, with an 85% CLTV limit, your maximum combined debt would be $340,000, leaving up to $140,000 potentially available as a HELOC—though your actual approved limit depends on additional underwriting factors.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Once you input an anticipated borrowed amount and interest rate, the calculator shows your estimated monthly payment during the draw period, which is usually interest-only. This payment is calculated by multiplying your balance by the annual interest rate and dividing by 12. During the repayment period, the calculator shows the higher payment that includes both principal and interest using standard amortization calculations based on your remaining balance and the repayment term length.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  It's essential to understand that HELOC calculators provide estimates based on the information you input. These estimates help you model different scenarios and compare options, but they don't represent guaranteed loan terms. The actual interest rate, credit limit, fees, and payment structure you qualify for depend on your credit score, income, debt-to-income ratio, loan-to-value ratio, and the specific lender's underwriting criteria.
                </p>
              </div>

              {/* Section 3: How Much Can I Borrow */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  How Much Can I Borrow With a HELOC? Understanding Equity and Lender Limits
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The amount you can borrow through a HELOC depends primarily on two factors: the equity you've built in your home and your lender's maximum combined loan-to-value (CLTV) ratio requirements. Home equity is calculated by subtracting your existing mortgage balance from your home's current market value. This equity represents the portion of your home that you own outright, and it serves as the collateral securing your HELOC.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Most lenders allow you to borrow up to a certain percentage of your home's value across all mortgages and home equity products combined. This combined loan-to-value ratio typically ranges from 80% to 85% of your home's appraised value, though some lenders may have more conservative limits or, in certain cases, allow higher ratios for well-qualified borrowers.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Consider this hypothetical example to illustrate how HELOC borrowing capacity is calculated: Suppose your home is currently worth $400,000, and you have an existing mortgage balance of $200,000. Your home equity is $200,000 ($400,000 minus $200,000). However, your maximum HELOC availability isn't simply your $200,000 in equity—it's constrained by your lender's combined loan-to-value requirements.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  If your lender uses an 85% CLTV limit, they would calculate your maximum borrowing as follows: $400,000 (home value) × 85% = $340,000 total allowable debt against the property. Subtracting your existing $200,000 mortgage leaves $140,000 as your maximum HELOC availability in this hypothetical scenario. However, your actual approved credit limit could be lower based on the lender's internal policies, your creditworthiness, income verification, and debt-to-income ratio.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Additionally, even if you're approved for a $140,000 credit limit in this example, many lenders cap HELOC amounts at specific dollar thresholds regardless of available equity. Some institutions might have internal maximums of $100,000, $250,000, or $500,000, depending on their risk management policies and the market they serve. This means your actual HELOC calculator results should be viewed as estimates that need validation through the lender's application and underwriting process.
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
