"use client";

import { Suspense, useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

function MortgageAffordabilityCalculatorContent() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { q: "What do lenders look for in qualification?", a: "Lenders evaluate the '4 Cs': Capacity (income and DTI), Credit (score and history), Collateral (home value and down payment), and Capital (assets and reserves). They also verify employment history (typically 2+ years in same field) and assess overall financial stability." },
    { q: "What credit score do I need?", a: "Minimum scores vary by loan type: Conventional loans typically require 620+, FHA loans 580+ (or 500+ with 10% down), VA loans 580-620+, and Jumbo loans 700+. Higher scores get better rates. Below 620, consider FHA or work on improving credit first." },
    { q: "Can I qualify with high student loan debt?", a: "Yes, but it affects your DTI ratio and reduces how much you can borrow. Lenders use 0.5-1% of your student loan balance as the monthly payment if you're on income-driven repayment. Higher income or lower other debts help offset student loans." },
    { q: "Do I need perfect credit to qualify?", a: "No! While higher scores help, you can qualify with imperfect credit. Focus on: paying all bills on time for 12+ months, keeping credit utilization below 30%, not opening new credit before applying, and resolving any collections or disputes." },
    { q: "How much should I save before applying?", a: "Save for: down payment (3-20% of home price), closing costs (2-5% of home price), and 3-6 months of mortgage payments as reserves. Some loan programs require reserves, and having more strengthens your application." }
  ];

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

      {/* Hero Section */}
      <div className="mb-8 mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-8 w-8 text-indigo-600 flex-shrink-0" />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
            Mortgage Affordability Calculator
          </h1>
        </div>
        <div className="h-px bg-indigo-600 mb-6"></div>
        <div className="space-y-4 text-base text-slate-600 leading-relaxed">
          <p>
            Calculate your maximum affordable mortgage amount based on your gross income, monthly debt payments, down payment, and lender's debt-to-income ratio requirements.
          </p>
          <p>
            Discover your borrowing capacity and understand how improving your income, reducing debts, or increasing your down payment can enhance your mortgage affordability.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <MortgageCalculator category="affordability" forcedSubcalculator="qualification" />
        </Suspense>
      </div>

      {/* How It Works */}
      <div className="mb-16 bg-slate-50 py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              How It Works
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                This calculator evaluates whether you meet typical mortgage qualification requirements based on income, debts, credit score, down payment, and employment history. It provides a comprehensive view of your readiness for homeownership.
              </p>
              <p>
                Enter your financial details including gross income, monthly debts, available down payment, credit score, and employment length. The calculator checks these against standard qualification criteria used by most lenders, including DTI ratios, LTV limits, and minimum credit requirements.
              </p>
              <p>
                Results indicate whether you likely qualify for a mortgage, highlight any potential issues, and provide recommendations for improving qualification if needed. Remember, each lender has unique requirements, so prequalification with specific lenders is essential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Article */}
      <article className="max-w-4xl mx-auto px-4 py-12 prose prose-slate lg:prose-lg">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Complete Guide to Mortgage Affordability and Qualification
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed">
          Understanding mortgage affordability goes beyond simple income multiples. Lenders evaluate your complete financial picture—income stability, debt obligations, credit history, down payment, and assets—to determine how much home you can afford.
        </p>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          The Four Pillars of Mortgage Qualification
        </h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-serif font-bold text-slate-900 mb-3">1. Capacity (Income & DTI)</h4>
            <p className="text-sm text-slate-600">
              Your ability to repay based on income and existing debt obligations. Lenders verify employment history and calculate debt-to-income ratios.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h4 className="font-serif font-bold text-slate-900 mb-3">2. Credit (Score & History)</h4>
            <p className="text-sm text-slate-600">
              Your track record of managing debt. Credit scores 740+ get best rates; 620+ qualifies for conventional loans; 580+ for FHA.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-serif font-bold text-slate-900 mb-3">3. Collateral (Home Value)</h4>
            <p className="text-sm text-slate-600">
              The property securing the loan. Lenders evaluate loan-to-value ratio (LTV) and require appraisals to confirm value.
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h4 className="font-serif font-bold text-slate-900 mb-3">4. Capital (Assets & Reserves)</h4>
            <p className="text-sm text-slate-600">
              Your savings beyond down payment. Many loan programs require 2-6 months of mortgage payments in reserve.
            </p>
          </div>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          How Much Can You Afford?
        </h3>

        <p className="text-slate-600">
          A common rule of thumb: your home price should not exceed 3-5x your annual household income. However, this varies significantly based on:
        </p>

        <ul className="space-y-2 text-slate-600 mb-6">
          <li><strong>Down payment size:</strong> 20%+ avoids PMI and improves affordability</li>
          <li><strong>Interest rates:</strong> Each 1% rate increase reduces affordability by ~10%</li>
          <li><strong>Property taxes:</strong> High-tax areas reduce affordable home price</li>
          <li><strong>HOA fees:</strong> Counted in housing costs, reducing qualification</li>
          <li><strong>Other debts:</strong> Student loans, car payments limit mortgage amount</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Improving Your Qualification
        </h3>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6">
          <p className="text-slate-700 text-sm mb-3">
            <strong>Short-term improvements (3-6 months):</strong>
          </p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>• Pay down credit card balances below 30% utilization</li>
            <li>• Pay off small debts to eliminate monthly payments</li>
            <li>• Dispute credit report errors</li>
            <li>• Avoid opening new credit accounts</li>
            <li>• Save for larger down payment</li>
          </ul>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-6">
          <p className="text-slate-700 text-sm mb-3">
            <strong>Long-term improvements (6-12+ months):</strong>
          </p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>• Build consistent payment history</li>
            <li>• Increase income through raises or side work</li>
            <li>• Eliminate high-interest debt</li>
            <li>• Build emergency fund separate from down payment</li>
            <li>• Establish 2-year work history in same field</li>
          </ul>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Common Qualification Mistakes
        </h3>

        <ul className="space-y-3 text-slate-600 mb-6">
          <li><strong>Maxing out approval amount:</strong> Lenders approve based on their risk, not your comfort. Leave buffer for unexpected expenses.</li>
          <li><strong>Ignoring closing costs:</strong> Budget 2-5% of home price beyond down payment.</li>
          <li><strong>Job changes during process:</strong> Stay in current job through closing when possible.</li>
          <li><strong>Making large purchases:</strong> Avoid buying cars, furniture before closing—it changes your DTI.</li>
          <li><strong>Assuming rates won't change:</strong> Get pre-approved, not just pre-qualified, and lock rates when favorable.</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Credit Score Impact on Affordability
        </h3>

        <p className="text-slate-600 mb-4">
          Your credit score directly impacts the interest rate lenders offer, which dramatically affects how much home you can afford. A higher credit score means a lower rate, which translates to lower monthly payments and greater purchasing power. Understanding this relationship helps you decide whether to improve your credit before applying.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 my-6">
          <h4 className="font-serif font-bold text-slate-900 mb-4">Rate Impact on $400,000 Mortgage (30-year fixed)</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white rounded p-3">
              <div>
                <span className="font-semibold text-slate-900">760+ (Excellent):</span>
                <span className="text-slate-600 text-sm ml-2">6.5% rate</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-emerald-700">$2,528/month</div>
                <div className="text-xs text-slate-500">Total interest: $510,000</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center bg-white rounded p-3">
              <div>
                <span className="font-semibold text-slate-900">700-759 (Good):</span>
                <span className="text-slate-600 text-sm ml-2">6.75% rate</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-blue-700">$2,594/month</div>
                <div className="text-xs text-slate-500">Total interest: $534,000</div>
              </div>
            </div>

            <div className="flex justify-between items-center bg-white rounded p-3">
              <div>
                <span className="font-semibold text-slate-900">640-699 (Fair):</span>
                <span className="text-slate-600 text-sm ml-2">7.25% rate</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-amber-700">$2,729/month</div>
                <div className="text-xs text-slate-500">Total interest: $582,000</div>
              </div>
            </div>

            <div className="flex justify-between items-center bg-white rounded p-3">
              <div>
                <span className="font-semibold text-slate-900">580-639 (Poor):</span>
                <span className="text-slate-600 text-sm ml-2">8.0% rate</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-red-700">$2,935/month</div>
                <div className="text-xs text-slate-500">Total interest: $657,000</div>
              </div>
            </div>
          </div>
          
          <p className="text-slate-700 text-sm mt-4 italic">
            Improving your credit score from 640 to 760 saves $407/month and $147,000 over the life of the loan. This difference can make the difference between qualifying and not qualifying, or between comfortable and stretched finances.
          </p>
        </div>

        <h4 className="font-serif text-lg font-semibold text-slate-900 mt-6 mb-3">
          Fast Credit Score Improvements (30-90 days)
        </h4>

        <ul className="space-y-2 text-slate-600 mb-6 text-sm">
          <li>• <strong>Pay down credit card balances below 30% utilization</strong> (or below 10% for maximum impact)</li>
          <li>• <strong>Dispute errors on credit reports</strong> through all three bureaus (Equifax, Experian, TransUnion)</li>
          <li>• <strong>Become an authorized user</strong> on a family member's card with perfect payment history</li>
          <li>• <strong>Request higher credit limits</strong> without opening new accounts (lowers utilization ratio)</li>
          <li>• <strong>Pay bills twice monthly</strong> to keep reported balances lower when bureaus update</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Down Payment Strategies and PMI Considerations
        </h3>

        <p className="text-slate-600 mb-4">
          Your down payment percentage dramatically impacts both your monthly payment and long-term costs. While 20% down eliminates private mortgage insurance (PMI), smaller down payments can still make financial sense depending on your situation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-emerald-50 rounded-lg p-5 border-2 border-emerald-200">
            <h4 className="font-serif font-bold text-slate-900 mb-2">20% Down</h4>
            <p className="text-2xl font-bold text-emerald-700 mb-2">$500,000 home</p>
            <ul className="space-y-1 text-sm text-slate-600 mb-3">
              <li>• Down payment: $100,000</li>
              <li>• Loan amount: $400,000</li>
              <li>• No PMI required</li>
              <li>• Monthly P&I: $2,661 @ 7%</li>
            </ul>
            <p className="text-xs text-slate-500 italic">Best for: Those with substantial savings who want the lowest monthly payment</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
            <h4 className="font-serif font-bold text-slate-900 mb-2">10% Down</h4>
            <p className="text-2xl font-bold text-blue-700 mb-2">$500,000 home</p>
            <ul className="space-y-1 text-sm text-slate-600 mb-3">
              <li>• Down payment: $50,000</li>
              <li>• Loan amount: $450,000</li>
              <li>• PMI: ~$250/month</li>
              <li>• Monthly P&I + PMI: $3,244</li>
            </ul>
            <p className="text-xs text-slate-500 italic">Best for: Strong income but building savings; can refinance when reaching 20% equity</p>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-200">
            <h4 className="font-serif font-bold text-slate-900 mb-2">3.5% Down (FHA)</h4>
            <p className="text-2xl font-bold text-amber-700 mb-2">$500,000 home</p>
            <ul className="space-y-1 text-sm text-slate-600 mb-3">
              <li>• Down payment: $17,500</li>
              <li>• Loan amount: $482,500</li>
              <li>• MIP: ~$350/month (life of loan)</li>
              <li>• Monthly P&I + MIP: $3,558</li>
            </ul>
            <p className="text-xs text-slate-500 italic">Best for: First-time buyers or those with limited savings but stable income</p>
          </div>
        </div>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6">
          <h4 className="font-serif font-bold text-slate-900 mb-2">Should You Put 20% Down?</h4>
          <p className="text-slate-700 text-sm mb-3">
            The traditional advice to save 20% down payment isn't always optimal. Consider these factors:
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Opportunity cost:</strong> If you can invest extra savings at returns exceeding your mortgage rate, a smaller down payment may be smarter financially</li>
            <li><strong>Emergency funds:</strong> Never drain savings to hit 20%. Keep 6-12 months expenses in reserve</li>
            <li><strong>Market timing:</strong> In competitive markets, buying with 10% down now may beat waiting years to save 20% while prices rise</li>
            <li><strong>PMI is temporary:</strong> Conventional loan PMI cancels automatically at 78% LTV, or you can request removal at 80% LTV</li>
          </ul>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Real-World Affordability Scenarios
        </h3>

        <p className="text-slate-600 mb-4">
          Let's examine how different income levels, debts, and financial profiles translate to real affordability with today's market conditions.
        </p>

        <div className="space-y-6 my-8">
          <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-slate-900">Young Professional Couple</h4>
                <p className="text-sm text-slate-600">Combined income: $150,000 | Age: 28-32 | First-time buyers</p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">Strong Position</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-700 mb-2"><strong>Financial Profile:</strong></p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Monthly gross: $12,500</li>
                  <li>• Student loans: $600/month</li>
                  <li>• Car payment: $450/month</li>
                  <li>• Credit score: 740</li>
                  <li>• Savings: $60,000</li>
                </ul>
              </div>
              <div>
                <p className="text-slate-700 mb-2"><strong>Affordability Analysis:</strong></p>
                <ul className="space-y-1 text-slate-600">
                  <li>• DTI capacity: $4,500 housing</li>
                  <li>• Less existing debt: -$1,050</li>
                  <li>• <strong>Available: $3,450/month</strong></li>
                  <li>• <strong>Max home price: ~$515,000</strong></li>
                  <li>• Down payment: 10% ($51,500)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 italic">
              <strong>Strategy:</strong> Can afford starter home with 10% down, keeping $8,500 emergency fund. Should pay off car loan before buying to increase capacity by $450/month.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-slate-900">Single Income Professional</h4>
                <p className="text-sm text-slate-600">Income: $95,000 | Age: 35 | Upgrading from condo</p>
              </div>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">Moderate Position</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-700 mb-2"><strong>Financial Profile:</strong></p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Monthly gross: $7,917</li>
                  <li>• No car payment</li>
                  <li>• Credit cards: $150/month</li>
                  <li>• Credit score: 780</li>
                  <li>• Savings: $120,000 (includes condo sale)</li>
                </ul>
              </div>
              <div>
                <p className="text-slate-700 mb-2"><strong>Affordability Analysis:</strong></p>
                <ul className="space-y-1 text-slate-600">
                  <li>• DTI capacity: $2,850 housing</li>
                  <li>• Less existing debt: -$150</li>
                  <li>• <strong>Available: $2,700/month</strong></li>
                  <li>• <strong>Max home price: ~$465,000</strong></li>
                  <li>• Down payment: 25% ($116,250)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 italic">
              <strong>Strategy:</strong> Large down payment from condo sale eliminates PMI and lowers payment. Excellent credit score secures best rates. Single income means conservative approach is wise.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-slate-900">Family with High Debt Load</h4>
                <p className="text-sm text-slate-600">Combined income: $180,000 | Age: 38-42 | Trading up with kids</p>
              </div>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">Stretched Position</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-700 mb-2"><strong>Financial Profile:</strong></p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Monthly gross: $15,000</li>
                  <li>• Two car payments: $1,200/month</li>
                  <li>• Student loans: $800/month</li>
                  <li>• Credit cards: $300/month</li>
                  <li>• Credit score: 680</li>
                  <li>• Savings: $75,000</li>
                </ul>
              </div>
              <div>
                <p className="text-slate-700 mb-2"><strong>Affordability Analysis:</strong></p>
                <ul className="space-y-1 text-slate-600">
                  <li>• DTI capacity: $5,400 housing</li>
                  <li>• Less existing debt: -$2,300</li>
                  <li>• <strong>Available: $3,100/month</strong></li>
                  <li>• <strong>Max home price: ~$445,000</strong></li>
                  <li>• Down payment: 15% ($66,750)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 italic">
              <strong>Strategy:</strong> High debt load severely limits affordability despite strong income. Should aggressively pay down debt for 6-12 months before buying. Paying off one car ($600/month) would increase home budget by ~$105,000.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm italic">
          Mortgage qualification is just the starting point. Your goal should be finding a home payment that allows you to save, invest, and enjoy life—not just one that a lender approves. These real-world examples show that affordability depends on your complete financial picture, not just your income. Build your emergency fund, minimize high-interest debt, and leave room in your budget for life's unexpected expenses and opportunities.
        </p>
      </article>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600">
                Quick answers to common questions about mortgage affordability calculator
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-indigo-300 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                    aria-expanded={openFAQ === index}
                  >
                    <span className="font-medium text-slate-900 text-sm pr-2">
                      {faq.q}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
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
    </section>
  );
}

export default function MortgageAffordabilityCalculatorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <MortgageAffordabilityCalculatorContent />
    </Suspense>
  );
}

