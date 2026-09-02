"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calculator, ChevronDown, ChevronUp } from "lucide-react";
import { getStructuredData } from "./server";

export default function HowExtraMortgagePaymentsSaveYouMoneyArticle() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How much can I realistically save with extra mortgage payments?",
      a: "On a $400,000 mortgage at 6% for 25 years, making an extra $250 monthly payment saves approximately $91,000 in interest and pays off your mortgage 6.5 years early. Even smaller amounts add up: $100 extra monthly saves around $37,000 and reduces the term by 3 years. The earlier you start, the greater your savings due to compound interest working in your favor."
    },
    {
      q: "What's better: monthly extra payments or annual lump sums?",
      a: "Monthly extra payments typically save slightly more because they reduce principal faster, but the difference is marginal. Choose based on your cash flow: monthly payments work well with steady income, while annual lump sums suit those with bonuses or variable income. Many homeowners combine both strategiesâ€”regular monthly extras plus annual windfallsâ€”to maximize savings within Canadian prepayment limits."
    },
    {
      q: "Do extra payments go directly to principal?",
      a: "Not always automatically. Some lenders apply extra payments as 'advance payments' toward future months rather than immediate principal reduction. When making extra payments, explicitly specify 'apply to principal' and confirm with your lender. Canadian mortgages often require a separate principal prepayment process distinct from regular monthly payments."
    },
    {
      q: "What are typical Canadian mortgage prepayment privileges?",
      a: "Most Canadian mortgages offer 15/15, 20/20, or 25/25 prepayment privilegesâ€”meaning you can increase monthly payments by that percentage and/or make annual lump sum payments up to that percentage of the original principal. For example, with 20/20 privileges on a $400,000 mortgage, you can increase payments by up to $515/month (20% of base payment) and make lump sum payments up to $80,000 annually (20% of original principal)."
    },
    {
      q: "When does it NOT make sense to make extra mortgage payments?",
      a: "Skip extra payments if you have credit card debt, personal loans, or other higher-interest debtâ€”pay those first. Also avoid extra payments if you lack an emergency fund (need 3-6 months expenses), are missing employer retirement matching, or have investment opportunities that exceed your mortgage rate. If your rate is under 3-4%, investing the money often yields better returns long-term."
    }
  ];

  const faqs2 = [
    {
      q: "Can I use an extra payment calculator for car loans and student loans too?",
      a: "Yes! The same principles apply to all amortizing loans. Car loan extra payment calculators show how paying $50-100 extra monthly can save thousands in interest and pay off your car 1-2 years early. Student loan calculators reveal similar savings. The math works identicallyâ€”extra principal payments reduce the balance faster, cutting total interest regardless of loan type."
    },
    {
      q: "What's the 13th payment method and how does it work?",
      a: "The 13th payment method involves making one extra full mortgage payment per year, typically by dividing your monthly payment by 12 and adding that amount to each monthly payment. For a $2,000 monthly payment, you'd pay an extra $167 monthly ($2,000Ã·12), resulting in $2,167 per month. Over the year, you've made 13 full payments instead of 12, dramatically accelerating your payoff without feeling a huge impact on monthly cash flow."
    },
    {
      q: "How do I automate extra mortgage payments with my lender?",
      a: "Contact your lender's customer service to set up automatic extra principal payments. Request that additional amounts be applied directly to principal (not as advance payments). Most Canadian lenders allow you to increase your payment amount within prepayment privilege limits. Set it up once and it continues automatically each month, removing the temptation to skip payments and ensuring consistency."
    }
  ];

  const allFaqs = [...faqs, ...faqs2];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }}
      />
      
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 py-6">
          <Link 
            href="/articles" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8 py-8">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/articles/construction-loans-how-they-work-financing-options.jpg"
            alt="Seven strategies for extra mortgage payments showing savings outcomes and payoff acceleration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          How Extra Mortgage Payments Save You Money: 7 Proven Strategies
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>May 12, 2026</time>
          <span className="mx-3">â€¢</span>
          <span>11 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-2">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                In February 2020, Patricia Williams refinanced her Vancouver condo with a $425,000 mortgage at 3.89% over 25 years. Her required payment was $2,231 monthly. That same month, she made a decision that would ultimately save her $94,300 and seven years of payments: she increased her monthly payment to $2,500â€”just $269 extraâ€”and committed to $8,000 annual lump sum payments each March using her tax refund and annual bonus.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Five years later, in early 2025, Patricia checked her mortgage statement and discovered something remarkable. While friends who bought homes the same year still owed $380,000-$390,000, her balance had dropped to $289,000. She'd paid off $136,000 in principalâ€”$40,000 more than her peers making minimum payments. "People ask how I paid off so much," Patricia said. "The answer isn't dramatic. I just made extra payments every single month and every spring without fail. The compound effect did the rest."
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This comprehensive guide explains exactly <strong>how extra mortgage payments save you money</strong> through seven proven strategies Canadian homeowners use to eliminate debt years early. You'll learn <strong>how to calculate extra principal payments</strong>, discover whether it's good to pay extra principal for your specific situation, understand <strong>what happens if you pay an extra $100 a month on your mortgage principal</strong> (and $200, $300, $500), and determine <strong>how much extra you should pay towards your principal</strong> based on your financial goals and circumstances.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                How Extra Principal Payments Actually Save Money: The Compound Effect
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Every mortgage payment splits between principal (reducing your loan balance) and interest (the lender's cost). Early payments are mostly interest because you owe the full amount. When you make an <strong>extra principal payment</strong>, that entire amount reduces your balance immediatelyâ€”zero goes to interest.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This creates a compound snowball effect: Lower balance means next month's interest charge is smaller, so more of your regular payment goes to principal, further reducing the balance. Each extra dollar eliminates future interest charges that would have accumulated for years or decades.
              </p>

              <div className="bg-slate-50 border-l-4 border-slate-300 p-6 mb-8 rounded-r-lg">
                <h3 className="font-bold text-slate-900 mb-4">Real Example: What Happens If You Pay an Extra $100 a Month on Your Mortgage Principal</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Baseline:</strong> Carlos Martinez in Brampton has a $365,000 mortgage at 5.99% over 25 years. Monthly payment: $2,387. Without extra payments, he'll pay $351,100 in total interest over 25 years.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>With $100 extra monthly ($2,487 total payment):</strong>
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>âœ“ Payoff time: 21.5 years instead of 25 years</li>
                  <li>âœ“ Total interest paid: $299,850 instead of $351,100</li>
                  <li>âœ“ <strong>Interest savings: $51,250</strong></li>
                  <li>âœ“ <strong>Time saved: 3.5 years</strong></li>
                  <li>âœ“ Total extra payments made: $25,800 (216 months Ã— $100)</li>
                  <li>âœ“ <strong>Return on investment: 198%</strong> ($51,250 saved Ã· $25,800 invested)</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Is it good to pay extra principal?</strong> For Carlos, absolutely. His $100 monthly extra investment yields a 198% return through interest savingsâ€”far exceeding typical investment returns. However, the answer depends on your interest rate, other debt, emergency savings, and investment opportunities, which we'll explore below.
              </p>
            </section>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Principal and Interest Calculation Example
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Hypothetical Scenario:</strong> Consider a home purchase with these assumptions: $350,000 home price, 10% down payment ($35,000), loan amount of $315,000, interest rate of 6.5%, and a 30-year term.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Using the formula: The monthly interest rate is 6.5% Ã· 12 = 0.00542. The number of payments is 30 years Ã— 12 = 360 months. Plugging these into the formula yields a principal and interest payment of approximately $1,991 per month. Over 30 years, you'll pay roughly $716,760 totalâ€”the original $315,000 principal plus $401,760 in interest.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              This demonstrates how interest significantly impacts your total cost. Even a simple mortgage payment calculator showing only principal and interest reveals this relationship, helping you compare different loan amounts and interest rates quickly.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              How Down Payment Affects Your Loan Amount
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Your down payment directly reduces the loan amount you need to borrow. A down payment mortgage calculator helps you see this impact clearly. Using our previous example: with 5% down ($17,500), you'd borrow $332,500 with a monthly P&I payment of about $2,102. With 20% down ($70,000), you'd borrow $280,000 with a monthly P&I payment of roughly $1,770.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              The 20% down payment saves you $332 monthly in principal and interest aloneâ€”nearly $4,000 annually and almost $120,000 over the loan's life. Beyond lower payments, larger down payments often secure better interest rates and eliminate private mortgage insurance requirements, compounding your savings.
            </p>

            {/* Complete Payment Components */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Beyond Principal and Interest: Complete Payment Components
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              While principal and interest form the base payment, your actual monthly housing cost includes additional components. A comprehensive mortgage payment calculator with taxes and insurance provides a complete picture of what you'll actually pay each month. Understanding these components helps you budget accurately and avoid surprises after closing.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Property Taxes
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Property taxes fund local services like schools, roads, and emergency services. Rates vary dramatically by locationâ€”from under 0.5% annually in some areas to over 2.5% in others. Most lenders require you to pay property taxes through an escrow account, dividing the annual amount into monthly payments included in your mortgage bill.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> On a $350,000 home in an area with 1.5% property tax, annual taxes are $5,250, or roughly $438 monthly. In areas like Ontario or BC in Canada, effective rates might be 0.7-1.0%, resulting in $204-292 monthly. In California or Alberta, rates could be 1.0-1.2%, yielding $292-350 monthly. Always research local tax ratesâ€”many municipalities publish assessment data online.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Homeowners Insurance
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Lenders require homeowners insurance to protect their investment in your property. Insurance costs depend on home value, location, coverage level, deductible amount, and local risks like floods or earthquakes. Most policies cost $800-2,000 annually ($67-167 monthly) for typical homes, though premiums can be substantially higher in high-risk areas.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> A $350,000 home might require $1,400 annual insurance ($117 monthly) in a low-risk area, or $2,400 annually ($200 monthly) in a coastal region with hurricane exposure. In the UK, building insurance costs vary by region and property age but typically run Â£200-500 annually, while in Canada, premiums generally fall between $900-1,800 annually depending on province and coverage.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Private Mortgage Insurance (PMI)
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              When you put down less than 20%, lenders typically require PMI to protect against default risk. PMI costs 0.3% to 1.5% of the loan amount annually, depending on your down payment size and credit score. Unlike other components, PMI eventually cancels once you reach 20% equity through payments and home appreciation.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> With 10% down on a $350,000 home, you borrow $315,000. At 0.7% PMI, you'd pay $2,205 annually, or about $184 monthly. This PMI would drop off after approximately 7-8 years as you build equity through payments and modest appreciation. With just 5% down, PMI might be 1.0%, costing $264 monthlyâ€”another reason to save for a larger down payment when possible.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              HOA Fees and Other Costs
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Condominiums and planned communities often charge homeowners association (HOA) fees for maintenance, amenities, and shared services. These vary from $100-600+ monthly depending on what's included. Some cover exterior maintenance, landscaping, and basic utilities, while others fund extensive amenities like pools, fitness centers, and security. Since HOA fees aren't part of the mortgage, not all calculators include them, but they're essential for total housing cost calculations.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Complete Monthly Payment Breakdown
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Hypothetical Complete Scenario:</strong> $350,000 home, 10% down payment ($35,000), $315,000 loan at 6.5% for 30 years, property in an area with 1.5% annual property tax:
            </p>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-6 ml-4">
              <li><strong>Principal & Interest:</strong> $1,991</li>
              <li><strong>Property Taxes:</strong> $438 (1.5% of $350,000 Ã· 12)</li>
              <li><strong>Homeowners Insurance:</strong> $142 ($1,700 annual Ã· 12)</li>
              <li><strong>PMI:</strong> $184 (0.7% of $315,000 Ã· 12)</li>
              <li><strong>HOA Fees:</strong> $225</li>
              <li><strong>Total Monthly Payment:</strong> $2,980</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              This complete view shows why a mortgage payment calculator with taxes and insurance is crucial. The principal and interest alone ($1,991) represents only 67% of your actual monthly cost. Budgeting for just P&I would leave you short by nearly $1,000 monthlyâ€”a potentially devastating oversight.
            </p>

            {/* Extra Payments Section */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Impact of Extra Payments
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              A mortgage payment calculator with extra payments reveals one of the most powerful wealth-building strategies: making additional principal payments. Every extra dollar you pay toward principal reduces your loan balance immediately, which decreases interest charges on all future payments and accelerates your payoff date.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Hypothetical Extra Payment Example:</strong> Using our $315,000 loan at 6.5% for 30 years with a $1,991 monthly P&I payment: Adding just $200 extra monthly reduces your loan term from 360 months to 289 monthsâ€”shortening it by 71 months (nearly 6 years). Total interest paid drops from $401,760 to $317,445â€”saving $84,315 over the life of the loan.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Even small extra payments make a difference. An additional $100 monthly on this same loan saves $46,000 in interest and cuts 40 months from the term. The earlier in your loan you make extra payments, the more powerful their effect, since you're reducing the principal that future interest calculations are based upon.
            </p>

            {/* Calculator Comparison */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Comparing and Using Mortgage Payment Calculators
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              When conducting a mortgage payment calculator comparison, you'll notice different tools serve different purposes. A simple mortgage payment calculator shows only principal and interestâ€”ideal for quick loan amount comparisons. Comprehensive calculators include taxes, insurance, PMI, and HOA feesâ€”better for accurate budgeting. Specialized calculators explore scenarios like extra payments, different payment frequencies, or adjustable-rate mortgages.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Many homebuyers search for specific institutional calculators, looking for "mortgage payment calculator TD" or "mortgage payment calculator CIBC" when they're current customers of those banks. While many Canadian financial institutions offer mortgage calculators on their websites, third-party tools often provide more flexibility and aren't tied to a specific lender's products. The underlying mathematics remain identical regardless of which calculator you useâ€”what matters is ensuring you input accurate information and understand what the calculator includes in its estimates.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Interpreting Calculator Results
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Understanding what calculators showâ€”and don't showâ€”is critical. Most display your monthly payment, total interest over the loan life, and total amount paid. Some provide amortization schedules showing how each payment divides between principal and interest. Advanced calculators might show your loan-to-value ratio, equity build-up over time, or payoff progress.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Remember that calculator results are estimates. Your property taxes depend on your specific home's assessed value and can change annually. Insurance premiums vary by provider and coverage choices. Interest rates fluctuate daily, and the rate you actually qualify for depends on your credit score, down payment, and lender policies. Use calculators for planning and comparison, but obtain detailed quotes from actual lenders before making final decisions.
            </p>

            {/* Geographic and Lender Variations */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Geographic and Lender Variations in Payment Calculations
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Where you buy significantly impacts your mortgage payment beyond just home prices. Searching for "mortgage payment calculator Ontario," "mortgage payment calculator BC," "mortgage payment calculator Alberta," or "mortgage payment calculator California" reflects the reality that location-specific costs vary tremendously. Property tax rates differ by state, province, and even municipality. Insurance costs reflect local risks like earthquakes, hurricanes, or wildfires.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              In Canada, mortgage calculations have unique features. Canadian mortgages typically use semi-annual compounding rather than monthly, which slightly affects the effective interest rate. A mortgage payment calculator Canada should account for this difference. Additionally, Canadian mortgage terms often differ from amortization periodsâ€”you might have a 25-year amortization with a 5-year term, after which you renegotiate rates. Down payment requirements and mortgage insurance rules (CMHC insurance for down payments under 20%) also differ from U.S. standards.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              In the UK, mortgage payment calculator results reflect different conventions as well. UK lenders often quote annual percentage rates (APR) that include fees, making comparison easier but requiring different calculation methods. Stamp duty (transfer tax) adds significant upfront costs, and mortgage terms commonly run 20-25 years rather than 30.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Lender-specific factors also affect actual payments. Some lenders have higher or lower PMI rates based on their risk models. Escrow account requirements varyâ€”some lenders require tax and insurance escrow, others make it optional above certain down payment thresholds. Servicing fees, though typically small, can differ between lenders. This is why your actual payment might vary slightly from calculator estimates, even with identical loan terms.
            </p>

            {/* Affordability Considerations */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              From Payment Calculation to Affordability
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              While payment calculators show what a specific loan costs monthly, a mortgage affordability calculator works backward from your income and debts to determine what you can borrow. Lenders typically use debt-to-income (DTI) ratios: your housing payment shouldn't exceed 28% of gross monthly income (front-end ratio), and total debts shouldn't exceed 36-43% (back-end ratio).
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Affordability Example:</strong> With $100,000 annual income ($8,333 monthly), the 28% front-end ratio allows $2,333 monthly for housing costs. Subtracting estimated taxes ($350), insurance ($125), and PMI ($150) leaves $1,708 for principal and interest. At 6.5% for 30 years, you can afford a loan of roughly $270,000. Add your down payment to find your maximum home priceâ€”with 10% down, you'd qualify for approximately a $300,000 home. Use payment calculators to fine-tune your target once you know your affordability range.
            </p>

            {/* Conclusion */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Making Informed Decisions with Payment Calculators
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Mortgage payment calculators are essential tools for home financing decisions, whether you're evaluating affordability, comparing loan options, or planning your payoff strategy. Understanding how these calculators workâ€”from the mathematical formulas they use to the components they includeâ€”helps you interpret results accurately and avoid costly surprises.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Start with comprehensive calculators that include taxes, insurance, and PMI for realistic payment estimates. Compare different scenarios: larger versus smaller down payments, 15-year versus 30-year terms, or the impact of extra payments. Research location-specific costs like property tax rates and insurance premiums in your target area. Finally, remember that calculator estimates are starting pointsâ€”obtain detailed quotes from multiple lenders to understand your actual costs and available options before committing to a mortgage.
            </p>

            </div>
          </div>
        </article>

      {/* Related Articles */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="p-6 bg-slate-50 rounded-lg">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
              Related Articles
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/extra-payment-calculator-pay-off-mortgage-faster"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Extra Payment Calculator: Pay Off Mortgage Faster
                </Link>
              </li>
              <li>
                <Link
                  href="/biweekly-payment-calculator-pay-off-loans-faster"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Biweekly Payment Calculator: Pay Off Loans Faster
                </Link>
              </li>
              <li>
                <Link
                  href="/refinance-calculator-see-if-refinancing-pays-off"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Refinance Calculator: See If Refinancing Pays Off
                </Link>
              </li>
              <li>
                <Link
                  href="/cut-interest-only-loan-costs-with-extra-payments"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Cut Interest-Only Loan Costs With Extra Payments
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {allFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-200 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-8">
                      {faq.q}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}


