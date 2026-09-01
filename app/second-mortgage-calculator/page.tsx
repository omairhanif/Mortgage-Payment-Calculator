"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Home, Calculator } from "lucide-react";
import { calculateSecondMortgage, type SecondMortgageInput } from "@/lib/mortgage";
import { formatCurrency } from "@/lib/utils";
import { NumberInput, Card } from "@/components/calculator/CalculatorFields";
import { getStructuredData } from "./server";

export default function SecondMortgageCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Content for Second Mortgage Calculator
  const content = {
    icon: Home,
    title: "Second Mortgage Calculator",
    description: [
      "Calculate monthly payments and total costs for a second mortgage or home equity loan based on your home's equity, desired loan amount, interest rate, and repayment term.",
      "Compare second mortgage options and understand how additional debt affects your overall monthly housing costs and long-term financial obligations."
    ],
    howItWorks: [
      "This calculator helps you understand the costs of taking out a second mortgage or home equity loan on your property. A second mortgage allows you to borrow against your home equity while keeping your existing first mortgage in place.",
      "Enter your home value, existing mortgage balance, the amount you wish to borrow, interest rate, and loan term. The calculator uses your home equity (home value minus existing mortgage) to determine if you have sufficient equity for the loan.",
      "Results show your monthly payment for the second mortgage, total interest paid over the loan term, and how the additional debt affects your overall housing costs and equity position."
    ],
    faqs: [
      {
        q: "How much can I borrow on a 2nd mortgage?",
        a: "Most lenders allow you to borrow up to 80-85% of your home's current value minus your existing first mortgage balance, though this varies by lender and your credit profile. In Canada, the maximum combined loan-to-value (CLTV) ratio is typically 80%. For example, if your home is worth $400,000 and you owe $250,000, you could borrow up to $70,000 ($400,000 × 0.80 = $320,000 max total debt, minus $250,000 first mortgage). In the UK, second mortgage lenders may allow 75-90% CLTV. Your actual borrowing capacity depends on your income, credit score, debt-to-income ratio, and the lender's specific requirements."
      },
      {
        q: "How do I qualify for a 2nd mortgage?",
        a: "To qualify for a second mortgage, you need sufficient home equity (typically at least 15-20% after the new loan), a credit score of 620+ (640-680+ for better rates), verifiable income to support debt-to-income ratios below 43%, and documented ability to repay both mortgages. Lenders assess your first mortgage payment history, current employment stability, and may require a home appraisal. In Canada, second mortgage lenders including CIBC and RBC have specific qualification criteria. Some private second mortgage lenders in Ontario and other provinces offer more flexible terms but at higher interest rates, typically 2-5 percentage points above first mortgage rates."
      },
      {
        q: "Is it hard to get a 2nd mortgage?",
        a: "Getting a second mortgage is generally harder than getting a first mortgage because you're asking lenders to take a subordinate position—they only get paid after the first mortgage holder in a foreclosure. This increased risk means stricter requirements: higher credit scores (typically 620-680+ minimum), lower loan-to-value ratios (usually 80% CLTV maximum), more thorough income verification, and higher interest rates (often 1-3% above first mortgage rates). However, if you have substantial equity, strong credit, and stable income, approval is quite achievable. Private second mortgage lenders and some credit unions may be more flexible than major banks but charge higher rates."
      },
      {
        q: "What is the 2 2 2 rule for mortgages?",
        a: "The 2-2-2 rule for mortgages is a lending guideline suggesting that borrowers should have: 2 months of mortgage payments in savings as a reserve, a 2-year history of stable employment in the same field, and 2 years of good credit history with no major derogatory marks. While not a universal standard, many lenders use variations of this rule when evaluating mortgage applications, particularly for second mortgages where the added risk makes lenders more conservative. Some lenders may require even larger reserves (3-6 months of payments) for second mortgages, especially for jumbo loans or borrowers with higher debt-to-income ratios."
      },
      {
        q: "How to get a second mortgage to buy another house?",
        a: "To use a second mortgage to buy another property, you'll borrow against the equity in your current home and use those funds as a down payment on the new property. This works if you have at least 20-25% equity in your existing home and qualify for two mortgages simultaneously. Lenders will evaluate your income against both mortgage payments plus any other debts—your total debt-to-income ratio typically can't exceed 43%. You'll need: strong credit (700+ recommended), stable income sufficient to cover both properties, and usually 10-20% additional cash for closing costs. In Canada, major lenders like CIBC, RBC, and TD offer second mortgages for this purpose, though rental income from the new property may help with qualification."
      },
      {
        q: "What are second mortgage rates in Canada?",
        a: "Second mortgage rates in Canada typically range from 6-12%, or 2-5 percentage points above prime first mortgage rates, depending on your lender type and credit profile. Major banks like CIBC, RBC, TD, BMO, and Scotiabank offer second mortgages (often called home equity loans) at their lowest rates (currently around 6-8%) for well-qualified borrowers. Private second mortgage lenders in Ontario, BC, and Alberta charge higher rates (8-12% or more) but offer more flexible approval criteria. Second mortgage rates depend on: your credit score, loan-to-value ratio, income verification, and whether you're working with a bank, credit union, or private lender. Always compare multiple second mortgage lenders before committing."
      },
      {
        q: "Can I make extra payments on a second mortgage?",
        a: "Yes, most second mortgages allow extra payments, though terms vary by lender. Many lenders permit annual prepayment privileges of 10-20% of the original principal without penalty, helping you pay off your second mortgage faster and save on interest. Using a second mortgage calculator with extra payments helps you see the savings impact. For example, adding $200/month extra to a $50,000 second mortgage at 8% over 10 years could save you $7,000+ in interest and pay off the loan 3-4 years early. Check your mortgage documents for prepayment terms—some lenders allow unlimited extra payments, while others charge penalties for exceeding annual limits."
      }
    ]
  };

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

  // Ref for scrolling to results
  const secondMortgageResultsRef = useRef<HTMLDivElement>(null);

  // Helper function to scroll to results with proper offset
  const scrollToResults = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -100;
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Handle Second Mortgage Calculate
  const handleSecondMortgageCalculate = (shouldScroll = true) => {
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
        rate: sm3FirstRate,
        termYears: sm3Term,
        points: sm3Points,
        closingCosts: sm3Closing,
      },
    };

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

    const firstLoanPayment = calculateLoanPayment(firstLoan3, sm3FirstRate, sm3Term);
    const secondLoanPayment = calculateLoanPayment(secondLoan3, sm3SecondRate, sm3Term);
    const totalMonthlyPayment3 = firstLoanPayment + secondLoanPayment;
    
    const totalPayments3 = totalMonthlyPayment3 * sm3Term * 12;
    const totalInterest3 = totalPayments3 - (firstLoan3 + secondLoan3);
    const upfrontCosts3 = sm3Closing + ((firstLoan3 + secondLoan3) * (sm3Points / 100));
    const totalCost3 = totalInterest3 + upfrontCosts3;

    results.scenario3Result = {
      monthlyPayment: totalMonthlyPayment3,
      totalInterest: totalInterest3,
      totalPMICost: 0,
      hasPMI: false,
      totalCost: totalCost3,
      ltvPercent: ((firstLoan3 + secondLoan3) / smHomeValue) * 100,
    };

    const costs = [
      { scenario: 1, cost: results.scenario1Result.totalCost },
      { scenario: 2, cost: results.scenario2Result.totalCost },
      { scenario: 3, cost: results.scenario3Result.totalCost },
    ];
    costs.sort((a, b) => a.cost - b.cost);
    results.recommendedScenario = costs[0].scenario;

    setSmResults(results);
    
    if (shouldScroll) {
      setTimeout(() => {
        scrollToResults(secondMortgageResultsRef);
      }, 100);
    }
  };

  // Calculate results on initial page load
  useEffect(() => {
    handleSecondMortgageCalculate(false);
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
              {/* Property Details Card */}
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

                {/* Scenario Comparison */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Scenario Comparison</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Scenario 1: Single Loan with PMI */}
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

                    {/* Scenario 2: 80% LTV, No PMI */}
                    <div className="border rounded-lg p-3 bg-slate-50">
                      <h5 className="font-semibold text-xs mb-2">Scenario 2: 80% LTV, No PMI</h5>
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

                    {/* Scenario 3: Piggyback */}
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

      {/* Article content will be added next */}
      
      {/* Comprehensive Second Mortgage Article */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <article className="prose prose-slate prose-lg max-w-none">
              
              {/* Article Header */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  Understanding Second Mortgages: Borrowing Capacity, Costs, and Qualification
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  If you're considering borrowing against your home equity, understanding how second mortgages work can help you make informed financial decisions. This comprehensive guide explains how much you might be able to borrow, what lenders look for when evaluating applications, how rates compare to first mortgages, and how to use second mortgage calculators effectively to plan your borrowing strategy.
                </p>
              </div>

              {/* Section 1: Available Equity and Borrowing Capacity */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Calculating Available Equity and Maximum Borrowing Amount
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Before you can determine monthly payments, you need to understand how much you can actually borrow. This depends on your available home equity and the combined loan-to-value (CLTV) ratio that lenders use to limit total borrowing against your property.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Your available equity is simply your home's current market value minus what you still owe on your first mortgage. For instance, if your home is worth $500,000 and you owe $300,000 on your first mortgage, you have $200,000 in equity. However, lenders won't let you borrow the full equity amount—they require you to maintain some equity cushion as protection.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Most conventional lenders cap total borrowing at 80-85% of your home's value through the CLTV ratio. Using the example above with a home worth $500,000: at 80% CLTV, total debt can't exceed $400,000. Since you already owe $300,000 on your first mortgage, you could potentially borrow up to $100,000 as a second mortgage ($400,000 maximum total debt minus $300,000 existing debt equals $100,000 available).
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Some lenders may allow up to 85% or even 90% CLTV, especially for borrowers with excellent credit scores and strong income. However, higher CLTV ratios typically come with higher interest rates and stricter qualification requirements. A second mortgage calculator typically asks for your home value and existing mortgage balance, then applies an 80% or 85% CLTV limit to show your estimated maximum borrowing capacity.
                </p>
              </div>

              {/* Section 2: Monthly Payment Calculations */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  How Second Mortgage Monthly Payments Are Calculated
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Once you know how much you want to borrow, calculating your monthly payment follows the same mathematical approach as first mortgage calculations. The payment depends on three factors: the loan amount (principal), the annual interest rate, and the loan term (how many months you'll take to repay).
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Second mortgages typically come with terms ranging from 5 to 20 years, though 10 and 15 years are most common. Shorter terms mean higher monthly payments but less total interest paid. Longer terms reduce your monthly payment but increase the total interest you'll pay over the life of the loan.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The standard amortization formula calculates a fixed monthly payment that pays off both principal and interest by the end of the term. Each month, part of your payment goes toward interest (based on your remaining balance) and part goes toward reducing the principal. Early in the loan, most of your payment covers interest; as you pay down the balance, more of each payment goes toward principal.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For example, a $75,000 second mortgage at 7.5% interest over 15 years (180 months) would result in a monthly payment of approximately $696. Over the full 15 years, you'd pay roughly $125,280 total—$75,000 in principal and $50,280 in interest. A calculator performs these computations instantly, allowing you to experiment with different loan amounts, rates, and terms to find a scenario that fits your budget.
                </p>
              </div>

              {/* Section 3: Interest Rate Factors */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Understanding Second Mortgage Interest Rates
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Second mortgage interest rates are typically higher than first mortgage rates because second mortgages carry more risk for lenders. In a foreclosure situation, the first mortgage lender is paid first from the proceeds of the home sale. Only after the first mortgage is fully satisfied does the second mortgage lender receive payment. This subordinate position means greater risk of loss, which lenders compensate for by charging higher rates.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The exact rate you'll qualify for depends on several factors: your credit score (higher scores receive better rates), your CLTV ratio (lower ratios are less risky and may get better rates), your income and employment stability, and current market interest rate conditions. Borrowers with excellent credit (720+) might receive rates only 1-2 percentage points above first mortgage rates, while those with lower credit scores might pay 3-4 percentage points more or higher.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When using a second mortgage calculator, you'll need to estimate the interest rate you expect to qualify for. Checking current market rates for second mortgages and home equity loans from several lenders gives you a realistic range to input. Remember that the rate you enter directly affects your monthly payment and total interest costs, so using an accurate estimate is important for meaningful results.
                </p>
              </div>

              {/* Section 4: Regional Second Mortgage Information */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Second Mortgages in Different Regions: Canada, Ontario, and Beyond
                </h3>
                
                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Second Mortgages in Canada
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  In Canada, second mortgages are a commonly used financial tool for accessing home equity. Canadian homeowners looking for a second mortgage calculator Canada-specific should understand that the lending landscape includes traditional banks, credit unions, alternative lenders, and private mortgage lenders, each with different qualification criteria and rate structures.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Major Canadian banks like TD, Scotiabank, RBC, BMO, and CIBC offer home equity loans and lines of credit that function as second mortgages. These institutions typically require good-to-excellent credit (typically 650+), verifiable income, and CLTV ratios generally not exceeding 80%. Their rates are typically the most competitive, but their qualification standards are also the strictest.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Alternative lenders and private mortgage lenders in Canada play a significant role in the second mortgage market, particularly for borrowers who don't meet traditional bank criteria. Private lenders may accept lower credit scores, higher debt ratios, or alternative income documentation, but charge significantly higher interest rates—sometimes 8-15% or more—to compensate for the additional risk. When using a second mortgage calculator for a Canadian private mortgage, it's important to input realistic higher interest rates to understand the true cost.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Second Mortgages in Ontario
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Ontario's strong real estate market, particularly in Toronto and surrounding areas, has created robust demand for second mortgages. Homeowners searching for a second mortgage calculator Ontario-focused or second mortgage calculator Toronto-specific want to understand how local property values and lending conditions affect their borrowing capacity.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The high property values in Toronto and the Greater Toronto Area mean substantial equity accumulation for many homeowners, potentially making larger second mortgage amounts available. However, higher property values also mean larger first mortgages, which can limit available borrowing room under CLTV constraints. Ontario's regulatory environment and the prevalence of both traditional and private lenders create a competitive market with various options for qualified borrowers.
                </p>
              </div>

              {/* Section 5: Qualification Requirements */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Second Mortgage Qualification: What Lenders Look For
                </h3>
                
                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Credit Score Requirements
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Your credit score is one of the most important factors in second mortgage qualification. Traditional lenders typically require credit scores of at least 620-650, with better rates available to those with scores above 700. Excellent credit (740+) may qualify you for the best available rates and terms.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Borrowers with lower credit scores aren't necessarily excluded from second mortgage options, but will likely need to work with alternative or private lenders who accept higher risk in exchange for higher interest rates. If you have credit challenges, improving your score before applying—by paying down revolving debts, correcting errors on your credit report, and making all payments on time—can significantly improve your rate and terms.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Income Verification and Debt-to-Income Ratio
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Lenders need to verify that you have sufficient income to handle your existing obligations plus the new second mortgage payment. They calculate your debt-to-income (DTI) ratio by dividing your total monthly debt payments (first mortgage, second mortgage, car loans, credit cards, etc.) by your gross monthly income.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Most traditional lenders prefer to see DTI ratios below 43%, though some may accept higher ratios for well-qualified borrowers. If adding a second mortgage pushes your DTI too high, you may need to pay down other debts first or consider a smaller loan amount. A second mortgage calculator that factors in your existing debts can help you model whether your DTI will remain within acceptable limits.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Property Appraisal and Loan-to-Value Limits
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Lenders will require a current appraisal of your property to determine its market value accurately. The appraised value, combined with your existing mortgage balance, determines your available equity and maximum borrowing capacity under CLTV limits.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  If your home's value has increased since you purchased it or took out your first mortgage, you may have more equity available than you realize. Conversely, if property values in your area have declined, your available equity might be less than expected. The appraisal ensures that both you and the lender have an accurate, current assessment of the collateral securing the loan.
                </p>
              </div>

              {/* Section 6: Using Calculators and Making Decisions */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Using Second Mortgage Calculators to Plan Your Borrowing
                </h3>
                
                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Gathering Accurate Information
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  To get meaningful results from a second mortgage calculator, you need accurate inputs. Start by determining your home's current market value—you can use recent comparable sales in your neighborhood, online valuation tools, or a professional appraisal. Know your existing first mortgage balance, which you can find on your most recent mortgage statement.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Research current second mortgage interest rates by checking rates from multiple lenders—traditional banks, credit unions, and alternative lenders. Rates vary significantly, and the rate you'll actually qualify for depends on your credit profile, CLTV ratio, and lender policies. Using a realistic rate estimate helps you model actual costs rather than overly optimistic scenarios.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Understanding Calculator Limitations
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  While second mortgage calculators are useful planning tools, they have limitations. Most calculators show only principal and interest payments and don't include additional costs like origination fees, appraisal fees, title insurance, legal fees, or other closing costs that can add thousands of dollars to your actual borrowing cost.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Calculators also can't account for your specific financial situation, credit profile, and current market conditions. The estimates they provide are based on the inputs you enter and standard amortization formulas. Your actual loan terms, rates, and qualification will depend on lender underwriting and your complete financial picture.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Moving from Estimates to Real Offers
                </h4>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Once you've used a calculator to understand approximate costs and borrowing capacity, the next step is getting pre-qualified or pre-approved by actual lenders. This process involves providing documentation, authorizing credit checks, and potentially having your property appraised. Only through this process will you know what loan amounts, rates, and terms you truly qualify for.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Contact multiple lenders—including traditional banks, credit unions, and potentially private lenders if needed—to compare actual offers. Ask each lender for a complete breakdown of rates, fees, terms, and closing costs. Use the information you gathered from calculator estimates to ask informed questions and evaluate whether each offer aligns with your expectations and financial goals.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Making Informed Second Mortgage Decisions
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A second mortgage can be a useful financial tool when you need to access your home equity for renovations, debt consolidation, education expenses, or even purchasing another property. However, taking on additional debt secured by your home is a significant financial decision that requires careful consideration of your ability to handle the increased payment obligations and your overall financial goals.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Using a second mortgage calculator helps you model different scenarios, understand potential costs, and compare how various loan structures affect your monthly payment and total borrowing cost. These tools provide valuable insights during the planning stage, but remember that calculator estimates should be validated with actual lender quotes before making any commitments.
                </p>

                <p className="text-base text-slate-600 leading-relaxed">
                  Whether you're exploring options in Canada, Ontario specifically, the UK, Ireland, New Zealand, or elsewhere, understanding regional lending practices, comparing multiple lenders, and thoroughly evaluating both traditional and private lending options will help you make the most informed decision for your financial situation. Take the time to research, calculate, compare, and consult with financial professionals to ensure that a second mortgage truly aligns with your long-term financial wellbeing.
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
