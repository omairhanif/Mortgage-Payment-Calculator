"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

export default function HowSecondMortgagesWork() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How much can I borrow on a 2nd mortgage?",
      a: "Your borrowing capacity depends on your available home equity and your lender's combined loan-to-value (CLTV) ratio limit. Most lenders allow you to borrow up to 80-90% of your home's current market value minus your existing first mortgage balance. For example, if your home is worth $500,000 and you owe $300,000, at 85% CLTV you could potentially borrow up to $125,000. Your actual limit also depends on your credit score, income, debt-to-income ratio, and ability to afford the additional monthly payment."
    },
    {
      q: "How do I qualify for a 2nd mortgage?",
      a: "Qualification typically requires: a credit score of at least 620 (though 680+ improves your chances and rates significantly), sufficient home equity (usually maintaining 15-20% after the loan), stable verifiable income to support both mortgage payments, a debt-to-income ratio below 43-50%, and a property appraisal confirming current value. You'll need to provide recent pay stubs, tax returns (typically two years), bank statements, and documentation of existing debts. Self-employed borrowers face additional documentation requirements including business tax returns and profit/loss statements."
    },
    {
      q: "Is it hard to get a 2nd mortgage?",
      a: "It's more challenging than getting a first mortgage because second mortgages carry higher risk for lenders due to their subordinate position. However, approval is realistic if you have strong equity (30%+ is ideal), good credit (680+), stable income, and manageable existing debt. Borrowers with marginal credit (620-680), high debt-to-income ratios, or limited equity face more difficulty and higher interest rates. Private lenders may approve applications that traditional banks decline, but at significantly higher rates—sometimes 10-15% or more. The key factors are demonstrating both sufficient collateral and ability to handle the additional payment comfortably."
    },
    {
      q: "What is the 2 2 2 rule for mortgages?",
      a: "The 2-2-2 rule is a guideline some lenders use for credit assessment: 2 years of employment history in the same field, 2 years of tax returns showing stable income, and 2 months of bank statements demonstrating reserves. This isn't a universal standard—different lenders have varying documentation requirements—but it reflects common verification practices. The rule helps lenders confirm employment stability, income consistency, and financial reserves to handle unexpected expenses. Some lenders may be more flexible, while others require additional documentation depending on your employment type, income sources, and overall financial profile."
    }
  ];

  const faqs2 = [
    {
      q: "Are second mortgage rates higher than first mortgage rates?",
      a: "Yes, second mortgage rates are typically 1-3 percentage points higher than first mortgage rates, sometimes more. This rate premium compensates lenders for the increased risk of the subordinate lien position—if you default and your home is foreclosed, the first mortgage lender is paid before the second mortgage lender, meaning the second lender faces greater potential loss. Your specific rate depends on your credit score, loan-to-value ratio, debt-to-income ratio, and property characteristics. Borrowers with excellent credit (740+) and lower CLTV ratios receive better rates. Private lenders typically charge even higher rates than traditional banks but may approve applications that banks decline."
    },
    {
      q: "Can I deduct second mortgage interest on taxes?",
      a: "Tax treatment varies by jurisdiction and loan purpose. In the United States, you may deduct second mortgage interest if you use the loan to buy, build, or substantially improve your home, and your total mortgage debt (first and second combined) doesn't exceed $750,000 ($375,000 if married filing separately). Interest on second mortgages used for other purposes—debt consolidation, education, business investments—is generally not deductible under current U.S. tax law. Canada, the UK, Ireland, and other countries have different rules. Always consult a qualified tax professional for your specific situation, as tax laws change frequently and individual circumstances vary significantly."
    },
    {
      q: "What happens if I can't make payments on my second mortgage?",
      a: "Missing second mortgage payments triggers serious consequences. The lender can initiate foreclosure proceedings, just like a first mortgage lender, though they're paid after the first mortgage if your home is sold. Missed payments severely damage your credit score (drops of 100+ points are common), and late fees accumulate quickly. If you're struggling, contact your lender immediately—many offer hardship programs including temporary payment reduction, forbearance periods, or loan modification. Other options include refinancing both mortgages into one loan, selling your home before foreclosure proceedings advance, or negotiating a short sale. Act quickly before falling too far behind, as options decrease as delinquency worsens."
    },
    {
      q: "Should I get a second mortgage or refinance my first mortgage?",
      a: "The better choice depends on your first mortgage rate, current market rates, and how much you need to borrow. If your first mortgage rate is significantly lower than current rates, a second mortgage preserves that low rate while accessing equity—you pay higher rates only on the additional borrowed amount. If current rates are similar to or lower than your first mortgage rate, cash-out refinancing might make more sense, consolidating everything into one payment at a competitive rate. Compare total costs: closing costs for each option (refinancing typically costs more), monthly payment differences, total interest over the life of both loans, and whether you'll face prepayment penalties on your existing mortgage. A break-even analysis shows how long until refinancing costs are recouped through payment savings."
    }
  ];

  const allFaqs = [...faqs, ...faqs2];

  return (
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
            src="/images/articles/how-second-mortgages-work-rates-costs-payments.jpg"
            alt="Second mortgage explained"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          How Second Mortgages Work: Rates, Costs & Payments
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>March 15, 2026</time>
          <span className="mx-3">•</span>
          <span>17 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            
            {/* Introduction */}
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Understanding your potential mortgage payment is the foundation of responsible homebuying. A mortgage payment calculator helps you estimate monthly costs before you commit to a home purchase, letting you evaluate different loan scenarios and determine what you can comfortably afford. Whether you're comparing properties, deciding on a down payment amount, or evaluating loan terms, accurate payment estimates guide smarter financial decisions.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              This comprehensive guide explains how mortgage payments are calculated, what factors influence your monthly costs, and how to use calculators effectively to plan your home purchase. You'll learn the mathematical formulas behind payment calculations, understand why different tools produce varying results, and discover how to account for taxes, insurance, and other essential costs that affect your total housing payment.
            </p>

            {/* How Mortgage Payments Are Calculated */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              How Mortgage Payments Are Calculated
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              At its core, a mortgage payment consists of principal and interest. The principal is the amount you borrowed, and interest is what the lender charges for lending you money. Most mortgage payment calculators use the standard amortization formula that determines your fixed monthly payment over the loan term.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              The monthly payment formula is: <strong>M = P[r(1+r)^n]/[(1+r)^n-1]</strong>, where M is your monthly payment, P is the principal loan amount, r is your monthly interest rate (annual rate divided by 12), and n is the number of payments (loan term in years multiplied by 12). This formula ensures that each payment includes enough principal to fully repay the loan by the end of the term while covering the interest charged.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Principal and Interest Calculation Example
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Hypothetical Scenario:</strong> Consider a home purchase with these assumptions: $350,000 home price, 10% down payment ($35,000), loan amount of $315,000, interest rate of 6.5%, and a 30-year term.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Using the formula: The monthly interest rate is 6.5% ÷ 12 = 0.00542. The number of payments is 30 years × 12 = 360 months. Plugging these into the formula yields a principal and interest payment of approximately $1,991 per month. Over 30 years, you'll pay roughly $716,760 total—the original $315,000 principal plus $401,760 in interest.
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
              The 20% down payment saves you $332 monthly in principal and interest alone—nearly $4,000 annually and almost $120,000 over the loan's life. Beyond lower payments, larger down payments often secure better interest rates and eliminate private mortgage insurance requirements, compounding your savings.
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
              Property taxes fund local services like schools, roads, and emergency services. Rates vary dramatically by location—from under 0.5% annually in some areas to over 2.5% in others. Most lenders require you to pay property taxes through an escrow account, dividing the annual amount into monthly payments included in your mortgage bill.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> On a $350,000 home in an area with 1.5% property tax, annual taxes are $5,250, or roughly $438 monthly. In areas like Ontario or BC in Canada, effective rates might be 0.7-1.0%, resulting in $204-292 monthly. In California or Alberta, rates could be 1.0-1.2%, yielding $292-350 monthly. Always research local tax rates—many municipalities publish assessment data online.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Homeowners Insurance
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Lenders require homeowners insurance to protect their investment in your property. Insurance costs depend on home value, location, coverage level, deductible amount, and local risks like floods or earthquakes. Most policies cost $800-2,000 annually ($67-167 monthly) for typical homes, though premiums can be substantially higher in high-risk areas.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> A $350,000 home might require $1,400 annual insurance ($117 monthly) in a low-risk area, or $2,400 annually ($200 monthly) in a coastal region with hurricane exposure. In the UK, building insurance costs vary by region and property age but typically run £200-500 annually, while in Canada, premiums generally fall between $900-1,800 annually depending on province and coverage.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Private Mortgage Insurance (PMI)
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              When you put down less than 20%, lenders typically require PMI to protect against default risk. PMI costs 0.3% to 1.5% of the loan amount annually, depending on your down payment size and credit score. Unlike other components, PMI eventually cancels once you reach 20% equity through payments and home appreciation.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> With 10% down on a $350,000 home, you borrow $315,000. At 0.7% PMI, you'd pay $2,205 annually, or about $184 monthly. This PMI would drop off after approximately 7-8 years as you build equity through payments and modest appreciation. With just 5% down, PMI might be 1.0%, costing $264 monthly—another reason to save for a larger down payment when possible.
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
              <li><strong>Property Taxes:</strong> $438 (1.5% of $350,000 ÷ 12)</li>
              <li><strong>Homeowners Insurance:</strong> $142 ($1,700 annual ÷ 12)</li>
              <li><strong>PMI:</strong> $184 (0.7% of $315,000 ÷ 12)</li>
              <li><strong>HOA Fees:</strong> $225</li>
              <li><strong>Total Monthly Payment:</strong> $2,980</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              This complete view shows why a mortgage payment calculator with taxes and insurance is crucial. The principal and interest alone ($1,991) represents only 67% of your actual monthly cost. Budgeting for just P&I would leave you short by nearly $1,000 monthly—a potentially devastating oversight.
            </p>

            {/* Extra Payments Section */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Impact of Extra Payments
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              A mortgage payment calculator with extra payments reveals one of the most powerful wealth-building strategies: making additional principal payments. Every extra dollar you pay toward principal reduces your loan balance immediately, which decreases interest charges on all future payments and accelerates your payoff date.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Hypothetical Extra Payment Example:</strong> Using our $315,000 loan at 6.5% for 30 years with a $1,991 monthly P&I payment: Adding just $200 extra monthly reduces your loan term from 360 months to 289 months—shortening it by 71 months (nearly 6 years). Total interest paid drops from $401,760 to $317,445—saving $84,315 over the life of the loan.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Even small extra payments make a difference. An additional $100 monthly on this same loan saves $46,000 in interest and cuts 40 months from the term. The earlier in your loan you make extra payments, the more powerful their effect, since you're reducing the principal that future interest calculations are based upon.
            </p>

            {/* Calculator Comparison */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Comparing and Using Mortgage Payment Calculators
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              When conducting a mortgage payment calculator comparison, you'll notice different tools serve different purposes. A simple mortgage payment calculator shows only principal and interest—ideal for quick loan amount comparisons. Comprehensive calculators include taxes, insurance, PMI, and HOA fees—better for accurate budgeting. Specialized calculators explore scenarios like extra payments, different payment frequencies, or adjustable-rate mortgages.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Many homebuyers search for specific institutional calculators, looking for "mortgage payment calculator TD" or "mortgage payment calculator CIBC" when they're current customers of those banks. While many Canadian financial institutions offer mortgage calculators on their websites, third-party tools often provide more flexibility and aren't tied to a specific lender's products. The underlying mathematics remain identical regardless of which calculator you use—what matters is ensuring you input accurate information and understand what the calculator includes in its estimates.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Interpreting Calculator Results
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Understanding what calculators show—and don't show—is critical. Most display your monthly payment, total interest over the loan life, and total amount paid. Some provide amortization schedules showing how each payment divides between principal and interest. Advanced calculators might show your loan-to-value ratio, equity build-up over time, or payoff progress.
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
              In Canada, mortgage calculations have unique features. Canadian mortgages typically use semi-annual compounding rather than monthly, which slightly affects the effective interest rate. A mortgage payment calculator Canada should account for this difference. Additionally, Canadian mortgage terms often differ from amortization periods—you might have a 25-year amortization with a 5-year term, after which you renegotiate rates. Down payment requirements and mortgage insurance rules (CMHC insurance for down payments under 20%) also differ from U.S. standards.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              In the UK, mortgage payment calculator results reflect different conventions as well. UK lenders often quote annual percentage rates (APR) that include fees, making comparison easier but requiring different calculation methods. Stamp duty (transfer tax) adds significant upfront costs, and mortgage terms commonly run 20-25 years rather than 30.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Lender-specific factors also affect actual payments. Some lenders have higher or lower PMI rates based on their risk models. Escrow account requirements vary—some lenders require tax and insurance escrow, others make it optional above certain down payment thresholds. Servicing fees, though typically small, can differ between lenders. This is why your actual payment might vary slightly from calculator estimates, even with identical loan terms.
            </p>

            {/* Affordability Considerations */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              From Payment Calculation to Affordability
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              While payment calculators show what a specific loan costs monthly, a mortgage affordability calculator works backward from your income and debts to determine what you can borrow. Lenders typically use debt-to-income (DTI) ratios: your housing payment shouldn't exceed 28% of gross monthly income (front-end ratio), and total debts shouldn't exceed 36-43% (back-end ratio).
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Affordability Example:</strong> With $100,000 annual income ($8,333 monthly), the 28% front-end ratio allows $2,333 monthly for housing costs. Subtracting estimated taxes ($350), insurance ($125), and PMI ($150) leaves $1,708 for principal and interest. At 6.5% for 30 years, you can afford a loan of roughly $270,000. Add your down payment to find your maximum home price—with 10% down, you'd qualify for approximately a $300,000 home. Use payment calculators to fine-tune your target once you know your affordability range.
            </p>

            {/* Conclusion */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Making Informed Decisions with Payment Calculators
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Mortgage payment calculators are essential tools for home financing decisions, whether you're evaluating affordability, comparing loan options, or planning your payoff strategy. Understanding how these calculators work—from the mathematical formulas they use to the components they include—helps you interpret results accurately and avoid costly surprises.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Start with comprehensive calculators that include taxes, insurance, and PMI for realistic payment estimates. Compare different scenarios: larger versus smaller down payments, 15-year versus 30-year terms, or the impact of extra payments. Research location-specific costs like property tax rates and insurance premiums in your target area. Finally, remember that calculator estimates are starting points—obtain detailed quotes from multiple lenders to understand your actual costs and available options before committing to a mortgage.
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4 mb-12">
              {allFaqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors flex justify-between items-center gap-4"
                  >
                    <span className="font-semibold text-slate-900 pr-8">{faq.q}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </article>
    </main>
  );
}

