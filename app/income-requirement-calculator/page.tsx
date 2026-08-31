"use client";

import { Suspense, useState } from "react";
import { ChevronDown, ChevronUp, Wallet } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

function IncomeRequirementCalculatorContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { q: "What is the 28/36 rule?", a: "The 28/36 rule is a lending guideline stating that housing costs shouldn't exceed 28% of gross monthly income, and total debt payments shouldn't exceed 36%. Many lenders now allow up to 43% for total DTI, especially for strong credit profiles." },
    { q: "What counts as monthly debt?", a: "Include minimum payments on credit cards, car loans, student loans, personal loans, and other installment debts. Don't include utilities, groceries, insurance (except included in mortgage payment), or debts with less than 10-12 months remaining." },
    { q: "Can I afford more than the calculator suggests?", a: "Yes, but proceed cautiously. The calculator uses lending maximums, not necessarily what's comfortable for your budget. Consider saving goals, emergency funds, lifestyle expenses, and future financial changes before maxing out what lenders will approve." },
    { q: "How does my credit score affect affordability?", a: "Credit scores primarily affect your interest rate, not the amount you're approved for. However, lower rates mean lower monthly payments, allowing you to afford more house. A difference of 1% in rate can affect affordability by $30,000-50,000." }
  ];

  return (
    <section className="py-8">
      {/* Banner Ad */}
      <div className="mb-8">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-6 border border-slate-200">
            <p className="text-xs text-slate-500 text-center">Advertisement Space</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-8 mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-4">
          <Wallet className="h-8 w-8 text-indigo-600 flex-shrink-0" />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
            Mortgage Income Requirement Calculator
          </h1>
        </div>
        <div className="h-px bg-indigo-600 mb-6"></div>
        <div className="space-y-4 text-base text-slate-600 leading-relaxed">
          <p>
            Calculate the minimum annual income you need to qualify for a specific home price, considering your debts, down payment, interest rate, and lenders' debt-to-income ratio requirements.
          </p>
          <p>
            Understand exactly how much you need to earn to afford your target home by factoring in monthly debt obligations. Lenders use the debt-to-income (DTI) ratio to assess your ability to manage monthly mortgage payments alongside existing debts.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <MortgageCalculator category="affordability" forcedSubcalculator="income" />
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
                This calculator determines the income required to qualify for your target home price based on standard lending criteria and your current monthly debt obligations.
              </p>
              <p>
                Enter your annual household income, monthly debt payments (car loans, student loans, credit cards, etc.), and desired loan details. The calculator applies standard lending guidelines: housing costs shouldn't exceed 28% of gross income (front-end ratio), and total debts shouldn't exceed 36-43% (back-end ratio).
              </p>
              <p>
                Results display the maximum home price you can afford, monthly payment breakdown, required down payment, and your DTI ratios. These are guidelines - you may choose to spend less for financial flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Article */}
      <article className="max-w-4xl mx-auto px-4 py-12 prose prose-slate lg:prose-lg">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          How Much Income Do You Need? Understanding Mortgage Qualification Requirements
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed">
          Before you start house hunting, understanding how much mortgage you can qualify for based on your income is crucial. Lenders consider your income alongside debt obligations, credit profile, down payment, interest rates, and property costs to determine your borrowing capacity.
        </p>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Qualification vs. Comfortable Affordability
        </h3>

        <p className="text-slate-600">
          A mortgage affordability calculator will tell you the maximum you might qualify for based on lender guidelines. However, qualifying for a mortgage doesn't mean you should borrow that full amount.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
          <p className="text-slate-700 text-sm">
            <strong>Critical Distinction:</strong> Lenders calculate qualification based on ratios designed to minimize their risk. Your comfortable affordability should account for your lifestyle, savings goals, emergency funds, job security, and future plans.
          </p>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          How Lenders Calculate Income Requirements
        </h3>

        <p className="text-slate-600">
          Lenders use debt-to-income (DTI) ratios as the primary tool for assessing income requirements. These ratios compare your monthly debt obligations to your gross monthly income.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-indigo-50 rounded-lg p-6">
            <h4 className="font-serif font-bold text-slate-900 mb-3">Front-End DTI Ratio</h4>
            <p className="text-sm text-slate-600 mb-3">
              Housing costs divided by gross monthly income. Traditional guideline is 28%, though some lenders allow up to 31-33%.
            </p>
            <p className="text-xs text-slate-500">
              <strong>Includes:</strong> Principal, interest, property taxes, insurance, HOA fees, PMI
            </p>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6">
            <h4 className="font-serif font-bold text-slate-900 mb-3">Back-End DTI Ratio</h4>
            <p className="text-sm text-slate-600 mb-3">
              Total debt payments divided by gross monthly income. Traditional guideline is 36%, though many lenders now allow 43-50%.
            </p>
            <p className="text-xs text-slate-500">
              <strong>Includes:</strong> Housing + car loans, student loans, credit cards, personal loans
            </p>
          </div>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          What Income Counts?
        </h3>

        <p className="text-slate-600 mb-3">
          Lenders evaluate various income sources differently:
        </p>

        <ul className="space-y-2 text-slate-600 mb-6">
          <li><strong>W-2 wages:</strong> Most reliable, counts at 100%</li>
          <li><strong>Self-employment:</strong> Requires 2 years tax returns, uses net income after expenses</li>
          <li><strong>Bonuses/Commission:</strong> Requires 2-year history, often averaged or discounted</li>
          <li><strong>Rental income:</strong> Typically 75% counts (25% deducted for vacancy/maintenance)</li>
          <li><strong>Investment income:</strong> Must be documented and likely to continue</li>
          <li><strong>Alimony/Child support:</strong> Must have 3+ years remaining to count</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Beyond the Numbers: Smart Borrowing Strategy
        </h3>

        <ul className="space-y-2 text-slate-600 mb-6">
          <li><strong>Emergency Funds:</strong> Maintain 6-12 months expenses even after down payment</li>
          <li><strong>Job Stability:</strong> Stretch less if income is variable or employment is uncertain</li>
          <li><strong>Future Goals:</strong> Leave room for retirement savings, education, career changes</li>
          <li><strong>Hidden Costs:</strong> Maintenance, repairs, HOA increases add 1-2% annually</li>
          <li><strong>Interest Rate Environment:</strong> Consider whether you can refinance later</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Real-World Income Calculation Examples
        </h3>

        <p className="text-slate-600 mb-4">
          Understanding how lenders calculate your qualifying income becomes clearer with concrete examples. Let's walk through three common scenarios to illustrate how different income situations translate to mortgage qualification.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <h4 className="font-serif font-bold text-slate-900 mb-3">Scenario 1: W-2 Employee with $100,000 Salary</h4>
          <p className="text-slate-700 text-sm mb-2">
            <strong>Annual Income:</strong> $100,000 | <strong>Monthly Gross:</strong> $8,333
          </p>
          <p className="text-slate-700 text-sm mb-2">
            <strong>Existing Debts:</strong> $400 car payment, $200 student loan = $600/month total
          </p>
          <p className="text-slate-700 text-sm mb-3">
            <strong>Calculation:</strong>
          </p>
          <ul className="space-y-1 text-sm text-slate-600 mb-3">
            <li>• Front-End Ratio (28%): $8,333 × 0.28 = $2,333 max housing payment</li>
            <li>• Back-End Ratio (36%): $8,333 × 0.36 = $3,000 max total debt</li>
            <li>• Available for housing: $3,000 - $600 = $2,400</li>
          </ul>
          <p className="text-slate-700 text-sm font-semibold">
            Maximum qualifying home price: ~$375,000 (with 20% down, 7% rate)
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <h4 className="font-serif font-bold text-slate-900 mb-3">Scenario 2: Dual Income Household ($80k + $60k)</h4>
          <p className="text-slate-700 text-sm mb-2">
            <strong>Combined Annual:</strong> $140,000 | <strong>Monthly Gross:</strong> $11,667
          </p>
          <p className="text-slate-700 text-sm mb-2">
            <strong>Existing Debts:</strong> $650 car payment, $300 student loans, $150 credit cards = $1,100/month
          </p>
          <p className="text-slate-700 text-sm mb-3">
            <strong>Calculation:</strong>
          </p>
          <ul className="space-y-1 text-sm text-slate-600 mb-3">
            <li>• Front-End Ratio (28%): $11,667 × 0.28 = $3,267 max housing</li>
            <li>• Back-End Ratio (36%): $11,667 × 0.36 = $4,200 max total</li>
            <li>• Available for housing: $4,200 - $1,100 = $3,100</li>
          </ul>
          <p className="text-slate-700 text-sm font-semibold">
            Maximum qualifying home price: ~$485,000 (with 20% down, 7% rate)
          </p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-6">
          <h4 className="font-serif font-bold text-slate-900 mb-3">Scenario 3: Self-Employed with $120,000 Net Income</h4>
          <p className="text-slate-700 text-sm mb-2">
            <strong>Tax Return Average:</strong> $120,000 (2-year average after expenses)
          </p>
          <p className="text-slate-700 text-sm mb-2">
            <strong>Monthly Qualifying Income:</strong> $10,000 | <strong>Existing Debts:</strong> $800/month
          </p>
          <p className="text-slate-700 text-sm mb-3">
            <strong>Calculation:</strong>
          </p>
          <ul className="space-y-1 text-sm text-slate-600 mb-3">
            <li>• Front-End Ratio (28%): $10,000 × 0.28 = $2,800 max housing</li>
            <li>• Back-End Ratio (43% for self-employed): $10,000 × 0.43 = $4,300</li>
            <li>• Available for housing: $4,300 - $800 = $3,500</li>
          </ul>
          <p className="text-slate-700 text-sm font-semibold">
            Maximum qualifying home price: ~$545,000 (with 20% down, 7% rate)
          </p>
          <p className="text-slate-600 text-xs mt-2">
            <em>Note: Self-employed borrowers often face higher DTI limits but stricter documentation requirements.</em>
          </p>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Income Documentation Requirements
        </h3>

        <p className="text-slate-600 mb-4">
          Lenders require extensive documentation to verify your income and employment. The specific documents needed depend on your employment type and income sources. Being prepared with proper documentation accelerates the approval process.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-serif font-bold text-slate-900 mb-3">W-2 Employees Need:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Recent pay stubs (last 30 days)</li>
              <li>• W-2 forms (past 2 years)</li>
              <li>• Federal tax returns (past 2 years)</li>
              <li>• Employment verification letter</li>
              <li>• YTD earnings statement</li>
              <li>• Offer letter if recently changed jobs</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-serif font-bold text-slate-900 mb-3">Self-Employed Need:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Personal tax returns (2 years with all schedules)</li>
              <li>• Business tax returns (2 years)</li>
              <li>• Year-to-date profit & loss statement</li>
              <li>• Current balance sheet</li>
              <li>• CPA letter verifying income</li>
              <li>• Business license or incorporation documents</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
          <p className="text-slate-700 text-sm mb-2">
            <strong>Pro Tip:</strong> Organize documents before applying to avoid delays. Lenders typically take 2-4 weeks to verify complex income situations like self-employment, rental income, or commission-based earnings.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Missing or incomplete documentation is the #1 cause of mortgage application delays. Create a digital folder with all required documents before starting your application.
          </p>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Special Income Situations
        </h3>

        <p className="text-slate-600 mb-4">
          Not all income situations fit the standard W-2 employee model. Here's how lenders evaluate less common but increasingly prevalent income scenarios.
        </p>

        <h4 className="font-serif text-lg font-semibold text-slate-900 mt-6 mb-3">
          Recent Graduates with High-Paying Jobs
        </h4>

        <p className="text-slate-600 text-sm mb-3">
          New graduates in specialized fields (medicine, law, engineering) often earn substantial salaries immediately but lack the typical 2-year employment history. Many lenders offer exceptions for doctors, lawyers, and other professionals with signed employment contracts. Your offer letter and degree may substitute for work history if you can demonstrate career continuity in your field of study.
        </p>

        <h4 className="font-serif text-lg font-semibold text-slate-900 mt-6 mb-3">
          Commission-Based Income Strategies
        </h4>

        <p className="text-slate-600 text-sm mb-3">
          Sales professionals, real estate agents, and others earning commissions face additional scrutiny. Lenders typically average your commission income over 2 years and may discount irregular earnings. To maximize qualifying income: maintain detailed records, minimize tax write-offs in the years before applying, and consider timing your application after strong earning years. A 2-year average of $80,000 and $120,000 yields $100,000 qualifying income, even if your current year projects higher.
        </p>

        <h4 className="font-serif text-lg font-semibold text-slate-900 mt-6 mb-3">
          Rental Income from Investment Properties
        </h4>

        <p className="text-slate-600 text-sm mb-4">
          If you own rental properties, lenders typically count 75% of the gross rent as income (25% deducted for vacancy and maintenance). This applies even if your actual expenses are lower. For example, $2,000 monthly rent becomes $1,500 qualifying income. You'll need lease agreements, Schedule E from tax returns, and proof of consistent rent collection. If the rental property has a mortgage, the full mortgage payment counts against your DTI even though you're receiving rental income.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6">
          <h4 className="font-serif font-bold text-slate-900 mb-2">Gig Economy and Contract Work</h4>
          <p className="text-slate-700 text-sm mb-2">
            Freelancers, contractors, and gig workers can qualify but face similar requirements to self-employed borrowers. Lenders want to see:
          </p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>• Consistent income over 2+ years</li>
            <li>• 1099 forms from all clients</li>
            <li>• Tax returns showing net income after business expenses</li>
            <li>• Evidence that gig work will continue (contracts, client relationships)</li>
          </ul>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Common Income Qualification Mistakes
        </h3>

        <p className="text-slate-600 mb-4">
          Even financially qualified buyers make errors that reduce their qualifying income or delay approval. Avoid these common pitfalls:
        </p>

        <ul className="space-y-3 text-slate-600 mb-6">
          <li><strong>Counting irregular bonuses at full value:</strong> That $15,000 year-end bonus won't fully count unless you've received similar amounts consistently for 2+ years. Lenders average and sometimes discount variable income.</li>
          <li><strong>Writing off too much as business expenses:</strong> Self-employed borrowers often maximize deductions to reduce taxes, inadvertently reducing qualifying income. The $120,000 you grossed becomes $60,000 after aggressive deductions on your tax return.</li>
          <li><strong>Switching jobs during the application process:</strong> Even lateral moves to higher-paying positions can delay closing. Lenders must re-verify employment. If you're changing industries or going from W-2 to self-employed, expect to wait 2 years.</li>
          <li><strong>Not documenting co-borrower income properly:</strong> If your spouse or partner co-applies, their income must be fully documented just like yours. Many couples overlook that both incomes face the same verification requirements.</li>
          <li><strong>Forgetting to account for income taxes:</strong> Your $100,000 gross salary isn't $8,333 take-home monthly. While lenders use gross income for DTI calculations, ensure you can actually afford the payment after taxes, retirement contributions, and health insurance.</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
          <p className="text-slate-700 text-sm">
            <strong>Critical Warning:</strong> Never inflate income or provide false documentation. Mortgage fraud carries severe penalties including loan denial, criminal charges, and permanent damage to your credit. Lenders verify everything through third parties, employers, and the IRS. If your income legitimately doesn't qualify, work on increasing earnings or paying down debt rather than misrepresenting your situation.
          </p>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          How Different Loan Types Affect Income Requirements
        </h3>

        <p className="text-slate-600 mb-4">
          Income requirements vary significantly by loan program. Understanding these differences helps you choose the right mortgage type for your situation.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 rounded-lg p-5">
            <h4 className="font-serif font-bold text-slate-900 mb-2">Conventional Loans (Fannie Mae/Freddie Mac)</h4>
            <p className="text-slate-600 text-sm mb-2">
              Standard DTI limits: 28% front-end, 36% back-end (can flex to 45% with strong credit and reserves)
            </p>
            <p className="text-slate-600 text-sm">
              <strong>Best for:</strong> W-2 employees with stable income, good credit (680+), and 10-20% down payment
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-5">
            <h4 className="font-serif font-bold text-slate-900 mb-2">FHA Loans</h4>
            <p className="text-slate-600 text-sm mb-2">
              More flexible DTI: up to 43% back-end standard, sometimes 50% with compensating factors
            </p>
            <p className="text-slate-600 text-sm">
              <strong>Best for:</strong> First-time buyers, those with lower credit scores (580+), or limited down payment funds (3.5% minimum)
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-5">
            <h4 className="font-serif font-bold text-slate-900 mb-2">VA Loans (Veterans)</h4>
            <p className="text-slate-600 text-sm mb-2">
              No set DTI limit but typically 41% back-end; focuses on residual income (money left after all debts and housing costs)
            </p>
            <p className="text-slate-600 text-sm">
              <strong>Best for:</strong> Military members and veterans; offers no down payment and no PMI
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-5">
            <h4 className="font-serif font-bold text-slate-900 mb-2">Jumbo Loans (Over $766,550)</h4>
            <p className="text-slate-600 text-sm mb-2">
              Stricter standards: typically 38-43% maximum DTI, requires excellent credit (720+), larger down payment (20%+)
            </p>
            <p className="text-slate-600 text-sm">
              <strong>Best for:</strong> High-income earners buying expensive properties with substantial assets and reserves
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm italic">
          Understanding income requirements helps you set realistic expectations, but choosing a mortgage amount that supports your long-term financial health matters more than maximizing what lenders will approve. Consider not just whether you qualify, but whether the payment allows you to maintain your lifestyle, save for emergencies, invest for retirement, and handle unexpected expenses without financial stress.
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
                Quick answers to common questions about mortgage income requirement calculator
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

export default function IncomeRequirementCalculatorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <IncomeRequirementCalculatorContent />
    </Suspense>
  );
}
