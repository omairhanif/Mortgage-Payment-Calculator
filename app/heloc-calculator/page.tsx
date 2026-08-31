"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, CreditCard, Calculator, Plus, Trash2 } from "lucide-react";
import { calculateHeloc, type HelocInput } from "@/lib/mortgage";
import { formatCurrency } from "@/lib/utils";
import { NumberInput, Card } from "@/components/calculator/CalculatorFields";

export default function HelocCalculatorPage() {
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
        q: "How does a HELOC work?",
        a: "A HELOC is a revolving credit line secured by your home equity. During the draw period (typically 5-10 years), you can borrow up to your credit limit and usually make interest-only payments. After the draw period ends, you enter the repayment period where you pay back principal and interest."
      },
      {
        q: "What is the draw period vs repayment period?",
        a: "The draw period is when you can borrow money from your HELOC and typically make interest-only payments. The repayment period begins after the draw period ends, when you can no longer borrow and must repay both principal and interest, resulting in higher monthly payments."
      },
      {
        q: "How is my HELOC interest rate determined?",
        a: "HELOC rates are typically variable and based on the prime rate plus a margin set by your lender. Your rate depends on factors like your credit score, loan-to-value ratio, and lender policies. Some lenders offer fixed-rate options for all or part of your balance."
      },
      {
        q: "Can I make principal payments during the draw period?",
        a: "Yes, most HELOCs allow you to make principal payments during the draw period even though only interest is required. Paying down principal reduces your balance, lowers your interest charges, and may allow you to borrow again up to your credit limit."
      },
      {
        q: "What happens when the draw period ends?",
        a: "When the draw period ends, you can no longer borrow from your HELOC and must begin repaying principal and interest. Your monthly payment will increase significantly. Some HELOCs require a balloon payment, while others convert to a standard amortizing loan."
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
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Banner Ad Placeholder */}
        <div className="mb-6 flex justify-center">
          <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
            <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
          </div>
        </div>

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
