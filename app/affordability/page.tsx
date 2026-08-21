"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp, Scale, Wallet, CheckCircle, type LucideIcon } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

function AffordabilityPageContent() {
  const searchParams = useSearchParams();
  const subcalculator = searchParams.get("subcalculator") || "rent-vs-buy";
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Content for each calculator
  const content: Record<string, { icon: LucideIcon; title: string; description: [string, string]; howItWorks: string[]; faqs: Array<{ q: string; a: string }> }> = {
    "rent-vs-buy": {
      icon: Scale,
      title: "Rent vs Buy Calculator",
      description: [
        "Compare the financial implications of renting versus buying a home by analyzing monthly costs, tax benefits, home appreciation, and opportunity costs over time.",
        "Make an informed housing decision by understanding the true cost of homeownership versus renting based on your location, financial situation, and long-term plans."
      ],
      howItWorks: [
        "This calculator helps you decide whether renting or buying makes more financial sense for your situation. The decision involves comparing monthly costs, tax benefits, equity building, and opportunity costs of each option.",
        "Enter your potential home price, down payment, mortgage details, property taxes, insurance, and maintenance costs for buying. For renting, enter monthly rent and anticipated annual rent increases. The calculator also factors in your tax bracket and expected home appreciation.",
        "Results show a side-by-side comparison of total costs, including the break-even point where buying becomes more cost-effective than renting. Consider both financial factors and lifestyle preferences when making your decision."
      ],
      faqs: [
        { q: "Is it better to rent or buy?", a: "It depends on your situation. Buying typically makes sense if you plan to stay 5+ years, have stable income, can afford a down payment, and want to build equity. Renting is better for flexibility, uncertain job situations, or when home prices are very high relative to rents." },
        { q: "What is the break-even point?", a: "The break-even point is when the total cost of buying equals the total cost of renting. This typically occurs after 3-7 years, depending on local market conditions, home appreciation, and your specific costs. Stay past this point to benefit financially from buying." },
        { q: "What costs should I compare?", a: "For buying: mortgage payment, property taxes, insurance, maintenance, HOA fees, closing costs, minus tax benefits and equity gains. For renting: monthly rent, renter's insurance, potential rent increases. Don't forget opportunity cost of your down payment." },
        { q: "How does home appreciation affect the decision?", a: "Higher home appreciation makes buying more attractive, as your home value increases over time. However, don't rely on past appreciation rates continuing indefinitely. Use conservative estimates (2-4% annually) when projecting future appreciation." },
        { q: "Should I factor in lifestyle considerations?", a: "Yes! Financial calculations are just one part. Consider job stability, desired flexibility, interest in home maintenance, school districts, and community ties. Sometimes non-financial factors rightfully outweigh pure cost analysis." }
      ]
    },
    income: {
      icon: Wallet,
      title: "Mortgage Income Requirement Calculator",
      description: [
        "Calculate the minimum annual income you need to qualify for a specific home price, considering your debts, down payment, interest rate, and lenders' debt-to-income ratio requirements.",
        "Understand exactly how much you need to earn to afford your target home by factoring in monthly debt obligations. Lenders use the debt-to-income (DTI) ratio to assess your ability to manage monthly mortgage payments alongside existing debts."
      ],
      howItWorks: [
        "This calculator determines the income required to qualify for your target home price based on standard lending criteria and your current monthly debt obligations.",
        "Enter your annual household income, monthly debt payments (car loans, student loans, credit cards, etc.), and desired loan details. The calculator applies standard lending guidelines: housing costs shouldn't exceed 28% of gross income (front-end ratio), and total debts shouldn't exceed 36-43% (back-end ratio).",
        "Results display the maximum home price you can afford, monthly payment breakdown, required down payment, and your DTI ratios. These are guidelines - you may choose to spend less for financial flexibility."
      ],
      faqs: [
        { q: "What is the 28/36 rule?", a: "The 28/36 rule is a lending guideline stating that housing costs shouldn't exceed 28% of gross monthly income, and total debt payments shouldn't exceed 36%. Many lenders now allow up to 43% for total DTI, especially for strong credit profiles." },
        { q: "What counts as monthly debt?", a: "Include minimum payments on credit cards, car loans, student loans, personal loans, and other installment debts. Don't include utilities, groceries, insurance (except included in mortgage payment), or debts with less than 10-12 months remaining." },
        { q: "Can I afford more than the calculator suggests?", a: "Yes, but proceed cautiously. The calculator uses lending maximums, not necessarily what's comfortable for your budget. Consider saving goals, emergency funds, lifestyle expenses, and future financial changes before maxing out what lenders will approve." },
        { q: "How does my credit score affect affordability?", a: "Credit scores primarily affect your interest rate, not the amount you're approved for. However, lower rates mean lower monthly payments, allowing you to afford more house. A difference of 1% in rate can affect affordability by $30,000-50,000." }
      ]
    },
    qualification: {
      icon: CheckCircle,
      title: "Mortgage Affordability Calculator",
      description: [
        "Calculate your maximum affordable mortgage amount based on your gross income, monthly debt payments, down payment, and lender's debt-to-income ratio requirements.",
        "Discover your borrowing capacity and understand how improving your income, reducing debts, or increasing your down payment can enhance your mortgage affordability."
      ],
      howItWorks: [
        "This calculator evaluates whether you meet typical mortgage qualification requirements based on income, debts, credit score, down payment, and employment history. It provides a comprehensive view of your readiness for homeownership.",
        "Enter your financial details including gross income, monthly debts, available down payment, credit score, and employment length. The calculator checks these against standard qualification criteria used by most lenders, including DTI ratios, LTV limits, and minimum credit requirements.",
        "Results indicate whether you likely qualify for a mortgage, highlight any potential issues, and provide recommendations for improving qualification if needed. Remember, each lender has unique requirements, so prequalification with specific lenders is essential."
      ],
      faqs: [
        { q: "What do lenders look for in qualification?", a: "Lenders evaluate the '4 Cs': Capacity (income and DTI), Credit (score and history), Collateral (home value and down payment), and Capital (assets and reserves). They also verify employment history (typically 2+ years in same field) and assess overall financial stability." },
        { q: "What credit score do I need?", a: "Minimum scores vary by loan type: Conventional loans typically require 620+, FHA loans 580+ (or 500+ with 10% down), VA loans 580-620+, and Jumbo loans 700+. Higher scores get better rates. Below 620, consider FHA or work on improving credit first." },
        { q: "Can I qualify with high student loan debt?", a: "Yes, but it affects your DTI ratio and reduces how much you can borrow. Lenders use 0.5-1% of your student loan balance as the monthly payment if you're on income-driven repayment. Higher income or lower other debts help offset student loans." },
        { q: "Do I need perfect credit to qualify?", a: "No! While higher scores help, you can qualify with imperfect credit. Focus on: paying all bills on time for 12+ months, keeping credit utilization below 30%, not opening new credit before applying, and resolving any collections or disputes." },
        { q: "How much should I save before applying?", a: "Save for: down payment (3-20% of home price), closing costs (2-5% of home price), and 3-6 months of mortgage payments as reserves. Some loan programs require reserves, and having more strengthens your application." }
      ]
    }
  };

  const currentContent = content[subcalculator];
  const Icon = currentContent?.icon;

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
        {currentContent && Icon && (
          <div className="mb-8 mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
                {currentContent.title}
              </h1>
            </div>
            <div className="h-px bg-indigo-600 mb-6"></div>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>{currentContent.description[0]}</p>
              <p>{currentContent.description[1]}</p>
            </div>
          </div>
        )}

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <MortgageCalculator category="affordability" />
        </Suspense>
      </div>

      {/* How It Works Section */}
      {currentContent && currentContent.howItWorks.length > 0 && (
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
                How It Works
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {currentContent.howItWorks.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Educational Article - Rent vs Buy */}
      {subcalculator === "rent-vs-buy" && (
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <article className="mx-auto max-w-4xl">
              <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
                {/* Part 1 Content */}
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Understanding the True Cost of Renting vs. Buying: Beyond the Monthly Payment
                </h2>

                <p className="text-lg text-slate-700 leading-relaxed">
                  Making the decision between renting and buying a home ranks among the most significant financial choices you'll face. While monthly mortgage payments and rent checks offer an easy comparison point, the real financial picture involves dozens of additional factors that can tip the scales dramatically in either direction.
                </p>

                <p className="text-slate-600">
                  The question "Is it better for me to rent or buy?" doesn't have a universal answer. Your finances, timeline, local market conditions, and personal circumstances all play crucial roles.
                </p>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                  The Complete Cost Picture
                </h3>

                <p className="text-slate-600">
                  When calculating if buying or renting is better, the monthly payment represents only the starting point. Homeownership carries substantial ongoing costs beyond principal and interest.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <h4 className="font-serif font-bold text-slate-900 mb-3">Homeowner Costs:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Principal and interest payments</li>
                      <li>• Property taxes (typically increase annually)</li>
                      <li>• Homeowners insurance</li>
                      <li>• PMI if down payment {"<"} 20%</li>
                      <li>• Maintenance (1-2% of home value/year)</li>
                      <li>• HOA fees if applicable</li>
                      <li>• Closing costs (2-5% of purchase)</li>
                      <li>• Selling costs (6-10% of sale price)</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-6">
                    <h4 className="font-serif font-bold text-slate-900 mb-3">Renter Costs:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Monthly rent payments</li>
                      <li>• Renters insurance</li>
                      <li>• Utilities</li>
                      <li>• Opportunity cost of not building equity</li>
                      <li>• Potential annual rent increases</li>
                    </ul>
                  </div>
                </div>

                <p className="text-slate-600">
                  The opportunity cost element deserves special attention. When you buy a home, you lock significant capital into your down payment. That money could alternatively be invested, potentially generating higher returns than home appreciation.
                </p>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Decision-Making Frameworks
                </h3>

                <h4 className="font-serif text-lg font-semibold text-slate-900 mt-6 mb-3">
                  What is the 5% Rule for Renting vs. Buying a Home?
                </h4>

                <p className="text-slate-600">
                  The 5% rule provides a simplified framework: multiply a home's purchase price by 5% annually to estimate unrecoverable costs. If you can rent an equivalent property for less, renting may be better financially.
                </p>

                <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 my-6">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">Hypothetical Example</p>
                  <p className="text-slate-700 text-sm">
                    Consider a $400,000 home. The 5% rule suggests comparing against $20,000 annual rent ($1,667/month). If comparable rentals cost $1,400/month, renting might make more sense short-term. If they cost $2,000/month, buying could be advantageous sooner.
                  </p>
                </div>

                <p className="text-slate-600 text-sm italic mb-6">
                  <strong>Important:</strong> The 5% rule is a framework, not a guarantee. Markets with unusual property tax rates or rapid appreciation may require adjusted percentages.
                </p>

                <h4 className="font-serif text-lg font-semibold text-slate-900 mt-6 mb-3">
                  What is the 20/30/3 Rule?
                </h4>

                <p className="text-slate-600">
                  The 20/30/3 rule guides affordability: 20% down payment minimum, housing costs ≤ 30% of gross monthly income, and home price ≤ 3x annual income.
                </p>

                {/* Part 2 Content */}
                <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                  How Time Horizon Shapes Your Decision
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <p className="font-semibold text-slate-900 mb-1">Short-term (1-3 years):</p>
                    <p className="text-slate-600 text-sm">Renting typically makes more sense. Transaction costs can exceed equity gains.</p>
                  </div>

                  <div className="border-l-4 border-amber-400 pl-4 py-2">
                    <p className="font-semibold text-slate-900 mb-1">Medium-term (3-7 years):</p>
                    <p className="text-slate-600 text-sm">Analysis becomes nuanced. Home appreciation and equity may offset costs if markets are favorable.</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="font-semibold text-slate-900 mb-1">Long-term (7+ years):</p>
                    <p className="text-slate-600 text-sm">Buying often becomes advantageous. You lock in housing costs while rents typically increase.</p>
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Location-Specific Considerations
                </h3>

                <p className="text-slate-600">
                  Housing markets vary dramatically. High-cost urban markets (like major metros in NYC, Canada, UK, or India) often feature rent-to-price ratios favoring renting short to medium term. Lower-cost markets frequently favor buying even short-term.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
                  <p className="text-slate-700 text-sm">
                    <strong>Note:</strong> Questions like "How much income do you need to buy a $300,000 house in Canada?" have no universal answers. The decision depends on your specific location, down payment, rates, and lending standards.
                  </p>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Investment Returns and Home Appreciation
                </h3>

                <ul className="space-y-2 text-slate-600 mb-6">
                  <li><strong>Leverage:</strong> With 20% down, you control 100% of appreciation</li>
                  <li><strong>Forced savings:</strong> Mortgage payments build equity automatically</li>
                  <li><strong>Tax treatment:</strong> Interest and taxes may be deductible</li>
                  <li><strong>Transaction costs:</strong> Real estate has high costs (8-12%)</li>
                  <li><strong>Volatility:</strong> Homes have less volatility but lower liquidity</li>
                </ul>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Beyond the Numbers
                </h3>

                <ul className="space-y-2 text-slate-600 mb-6">
                  <li><strong>Job stability:</strong> Uncertain careers favor renting</li>
                  <li><strong>Life stage:</strong> Family planning affects the equation</li>
                  <li><strong>Maintenance:</strong> Consider who handles repairs</li>
                  <li><strong>Emotional factors:</strong> Homeownership has value beyond spreadsheets</li>
                </ul>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Using Calculators Effectively
                </h3>

                <p className="text-slate-600">
                  Whether you use a rent vs buy calculator Excel spreadsheet, online tool, or reference calculators from publications like Zillow or the New York Times, ensure it accounts for: appreciation rates, rent increases, investment returns, taxes, transaction costs, PMI timing, and your timeline.
                </p>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Common Questions
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-base font-bold text-slate-900 mb-2">Is it cheaper to rent or buy monthly?</h4>
                    <p className="text-slate-600 text-sm">Renting typically requires lower monthly payments. However, monthly cost alone doesn't determine wealth-building. Consider equity, appreciation, opportunity cost, and time horizon.</p>
                  </div>

                  <div>
                    <h4 className="font-serif text-base font-bold text-slate-900 mb-2">How do I know if I should rent or buy?</h4>
                    <p className="text-slate-600 text-sm">Calculate total costs including all factors. Consider your timeline (5-7+ years often favors buying), job stability, savings, and whether you can afford ownership costs comfortably.</p>
                  </div>

                  <div>
                    <h4 className="font-serif text-base font-bold text-slate-900 mb-2">Should I buy if I'm unsure how long I'll stay?</h4>
                    <p className="text-slate-600 text-sm">If uncertain about staying 5+ years, renting typically makes more sense. Transaction costs can exceed equity gains over shorter periods.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Educational Article - Income Requirement */}
      {subcalculator === "income" && (
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

          <p className="text-slate-600 text-sm italic">
            Understanding income requirements helps you set realistic expectations, but choosing a mortgage amount that supports your long-term financial health matters more than maximizing what lenders will approve.
          </p>
        </article>
      )}

      {/* Educational Article - Mortgage Affordability */}
      {subcalculator === "qualification" && (
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

          <p className="text-slate-600 text-sm italic">
            Mortgage qualification is just the starting point. Your goal should be finding a home payment that allows you to save, invest, and enjoy life—not just one that a lender approves.
          </p>
        </article>
      )}

      {/* FAQ Section */}
      {currentContent && currentContent.faqs.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-600">
                  Quick answers to common questions about {currentContent.title.toLowerCase()}
                </p>
              </div>

              <div className="space-y-3">
                {currentContent.faqs.map((faq, index) => (
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
      )}
    </section>
  );
}

export default function AffordabilityPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <AffordabilityPageContent />
    </Suspense>
  );
}
