"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { getStructuredData } from "./server";

export default function WhenShouldYouRefinanceArticle() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "When is the best time to refinance my mortgage?",
      a: "The best time to refinance is when interest rates drop 1-2% below your current rate, you've built 20%+ equity in your home, or you're experiencing major life changes like increased income. For Canadian homeowners, refinancing becomes financially worthwhile when your break-even point (total refinancing costs divided by monthly savings) is reached within 2-3 years of staying in the home. For example, if refinancing costs $6,800 but saves you $437/month, your break-even is 15.6 months—making it an excellent decision if you plan to stay longer than 2 years."
    },
    {
      q: "How much can I save by refinancing my mortgage?",
      a: "Savings vary significantly based on your loan amount, rate drop, and remaining term. A typical scenario: refinancing a $485,000 mortgage from 5.89% to 3.49% saves approximately $437/month or $26,220 over 5 years. Larger mortgages see bigger savings—a $750,000 mortgage refinanced from 6.2% to 4.5% could save $800+/month. Use a mortgage calculator to model your specific situation, factoring in closing costs ($2,500-$6,800 in Canada) and prepayment penalties if you're breaking a fixed-term mortgage early."
    },
    {
      q: "What is a break-even point for refinancing?",
      a: "Your break-even point is when your accumulated monthly savings equal your total refinancing costs. Calculate it by dividing total costs by monthly savings. Example: $6,800 in costs ÷ $437 monthly savings = 15.6 months. After this point, every payment saves you money. If you plan to stay in your home significantly longer than your break-even period (ideally 2-3x longer), refinancing makes financial sense. Breaking even in under 24 months is generally considered excellent for Canadian mortgages."
    },
    {
      q: "Should I refinance if interest rates drop only 1%?",
      a: "Yes, a 1% rate drop can absolutely justify refinancing, especially with larger mortgages or longer remaining terms. The old '2% rule' is outdated. For a $400,000 mortgage with 20 years remaining, dropping from 5.5% to 4.5% saves approximately $230/month ($55,200 over 20 years). If closing costs are $4,500, you break even in just 19.6 months. The key is calculating your specific break-even point—if it's under 2 years and you'll stay in the home longer, a 1% drop is worth it."
    },
    {
      q: "What fees are involved in refinancing?",
      a: "Canadian mortgage refinancing typically costs $2,500-$6,800 total, including: prepayment penalties ($0-$4,000+ depending on your mortgage terms and remaining time), legal fees ($800-$1,500), appraisal fees ($300-$500), title insurance ($200-$400), and lender administration fees ($200-$400). Breaking a fixed-rate mortgage early triggers Interest Rate Differential (IRD) penalties or 3 months' interest (whichever is higher). Variable-rate mortgages typically have lower penalties—often just 3 months of interest."
    },
    {
      q: "Can I refinance if I just bought my home recently?",
      a: "Yes, but timing matters strategically. Most Canadian lenders don't have strict waiting periods, but refinancing immediately after purchase rarely makes sense financially. You need significant rate drops or changed circumstances to justify the costs. However, if rates dropped dramatically since your purchase (like 2%+), you've experienced major income changes, or you want to eliminate CMHC insurance after reaching 20% equity, refinancing within 6-12 months can be worthwhile. Calculate your break-even point to determine if immediate refinancing makes sense."
    }
  ];

  return (
    <>
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
            src="/images/articles/when-should-you-refinance.jpg"
            alt="When should you refinance your mortgage - optimal timing"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          When Should You Refinance Your Mortgage?
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>August 27, 2026</time>
          <span className="mx-3">•</span>
          <span>14 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-12">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Sarah locked in a 5-year fixed mortgage at 5.89% with TD Bank in March 2022 for her Toronto condo. Fast forward to August 2026, and rates have dropped to 3.49% at most major Canadian banks. By refinancing, she could save $437 per month—$26,220 over five years. But with $6,800 in prepayment penalties and $2,500 in refinancing costs, is it worth it? Her break-even point is 21 months. If she plans to stay in her condo for at least two more years, refinancing makes financial sense.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Sarah's situation illustrates the critical question thousands of Canadian homeowners face: <strong>When should you refinance your mortgage?</strong> The answer isn't always straightforward. Refinancing at the right time can save tens of thousands of dollars over your mortgage life, while refinancing at the wrong time can cost you significantly in fees and lost opportunities.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              This comprehensive guide examines the key indicators that signal it's time to refinance—from interest rate drops and equity gains to life changes and loan type switches. We'll analyze real Canadian scenarios, calculate break-even points, and help you determine whether refinancing makes sense for your specific situation.
            </p>
          </section>


          {/* Section 1: When Interest Rates Drop */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              1. When Interest Rates Drop Significantly
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The most common reason to refinance is when interest rates drop substantially below your current rate. The traditional rule of thumb suggests refinancing when rates drop by at least 1-2%, but the real answer depends on your specific costs and timeline.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Example:</strong> Consider a homeowner with a $392,000 mortgage balance at RBC at 5.89% with 22 years remaining. If they refinance to Scotiabank at 3.49%, their monthly payment drops from $2,748 to $2,011—saving $737/month. With $10,640 in total refinancing costs (prepayment penalties + fees), they break even in just 14.4 months and save $183,132 over the remaining term.
            </p>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
              Break-Even Calculation
            </h3>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The key question is: how long will it take to recoup your refinancing costs? Formula: <strong>Total Costs ÷ Monthly Savings = Break-Even Months</strong>. If you plan to stay in your home longer than the break-even period, refinancing makes financial sense.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-slate-900 mb-3">Break-Even Example:</p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Prepayment Penalty:</strong> $7,840</li>
                <li><strong>Appraisal + Legal Fees:</strong> $2,800</li>
                <li><strong>Total Refinancing Costs:</strong> $10,640</li>
                <li><strong>Monthly Savings:</strong> $737</li>
                <li className="text-green-700 font-bold"><strong>Break-Even:</strong> 14.4 months</li>
                <li className="text-green-700 font-bold"><strong>Lifetime Savings:</strong> $183,132</li>
              </ul>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Always factor in prepayment penalties (typically 3 months' interest or Interest Rate Differential in Canada), appraisal fees ($300-$500), legal fees ($500-$1,500), and other closing costs when calculating your break-even point.
            </p>
          </section>

          {/* Section 2: Home Equity */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              2. When You've Built Significant Home Equity
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              As your home value increases and your mortgage balance decreases, you build equity—the portion of your home you actually own. When you reach 20% or more equity, refinancing can eliminate costly mortgage insurance or allow you to access cash for renovations, investments, or debt consolidation.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Example:</strong> James bought his Vancouver home in 2020 for $875,000 with a 5% down payment. His BMO mortgage required mortgage insurance premiums. By 2026, his home is worth $1.05 million and he's paid his balance down to $720,000. His equity is now 31.4% ($330,000).
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              By refinancing, James can eliminate his mortgage insurance costs (saving ~$290/month). Additionally, he could access up to 80% of his home's value ($840,000) minus his current mortgage, giving him $120,000 in available equity for renovations or investments.
            </p>

            <div className="bg-amber-50 rounded-lg p-6 my-8 border border-amber-200">
              <p className="text-lg font-semibold text-slate-900 mb-2">⚠️ Canadian Refinancing Limits</p>
              <p className="text-slate-700">
                In Canada, you can typically refinance up to 80% of your home's appraised value. If your home is worth $500,000, the maximum mortgage after refinancing is $400,000. If you owe $300,000, you could access up to $100,000 in equity (minus fees).
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              3. When Your Life Circumstances Change
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Life changes often trigger the need to refinance. Career advancements, retirement planning, and debt consolidation are common scenarios where refinancing makes strategic sense.
            </p>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
              Career Growth & Income Increase
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              If your income has increased significantly since you first secured your mortgage, refinancing to a shorter term (e.g., from 25 years to 15 years) can save you tens of thousands in interest while building equity faster. Higher payments become more manageable with increased income.
            </p>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
              Retirement Planning
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Approaching retirement? Refinancing to a longer term can lower your monthly payments, freeing up cash flow for retirement savings. Alternatively, if you're 10-15 years from retirement, switching to a shorter term ensures you enter retirement mortgage-free.
            </p>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
              Debt Consolidation
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              High-interest credit card debt, car loans, or lines of credit costing 12-20% interest can be consolidated into your mortgage at 3-5% interest. Example: $40,000 in credit card debt at 18% costs $600/month in interest alone. Refinanced into your mortgage at 3.5%, it costs only $117/month.
            </p>
          </section>



          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              4. Switching Between Variable and Fixed Rates
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Market conditions change, and your mortgage should adapt. If you have a variable-rate mortgage and rates are rising, locking in a fixed rate can provide payment stability. Conversely, if you're in a fixed-rate mortgage and rates have dropped significantly, switching to a variable rate might save money.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Example:</strong> In 2021, many Canadians chose variable rates at prime minus 1% (around 1.45%). By 2023, the Bank of Canada raised rates aggressively, pushing variable rates to 5.95% or higher. Homeowners who refinanced to lock in fixed rates at 3.5-4.5% in early 2022 saved significantly.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Always compare the total cost over your expected homeownership timeline, not just the current rate. Factor in potential rate changes and prepayment penalties before switching.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              5. Eliminating Private Mortgage Insurance (PMI)
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              In Canada, if you purchase a home with less than 20% down payment, you're required to pay mortgage default insurance (often called CMHC insurance). This insurance typically costs 2.8-4% of the mortgage amount, added to your loan balance or paid monthly.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Once you've built 20% equity through payments and home appreciation, you can refinance to eliminate this insurance cost, potentially saving $150-$400/month depending on your mortgage size.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Example:</strong> Emma bought a Calgary home for $450,000 with 10% down. Her $405,000 mortgage included $11,340 in insurance premiums (~$55/month over 25 years). Four years later, her home is worth $490,000 and her balance is $375,000—she now has 23.5% equity. By refinancing, she eliminates the ongoing insurance cost.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  How much does it cost to refinance a mortgage in Canada?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Typical refinancing costs include: prepayment penalties ($3,000-$10,000), appraisal fees ($300-$500), legal fees ($500-$1,500), title insurance ($150-$400), and potentially discharge fees ($250-$350). Total costs typically range from $4,000-$12,000 depending on your mortgage size and lender.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  What is the prepayment penalty for breaking my mortgage?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  In Canada, prepayment penalties are typically the greater of: (1) Three months' interest, or (2) Interest Rate Differential (IRD). IRD calculations compare your current rate to today's rate for the remaining term. Fixed-rate mortgages often have higher penalties than variable-rate mortgages. Always check with your lender for exact calculations.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  How do I know if refinancing is worth it?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Calculate your break-even point: Total Costs ÷ Monthly Savings = Months to Break Even. If you plan to stay in your home longer than the break-even period, refinancing typically makes sense. Also consider non-financial benefits like payment stability, debt consolidation, or accessing equity for investments.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  Can I refinance if I have bad credit?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Yes, but with limitations. Credit scores below 680 may face higher interest rates or require alternative lenders. Scores below 600 might need private lenders (B-lenders) with rates 2-4% higher. Improving your credit for 6-12 months before refinancing can save thousands in interest.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  Should I refinance before or after selling my home?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  If you're selling within 12-18 months, refinancing typically isn't worth it due to break-even timelines and prepayment penalties. However, if rate drops are substantial (2%+) and you need 2-3 years to sell, refinancing might still save money. Run the specific numbers for your situation.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  What documents do I need to refinance?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Typical documents include: proof of income (pay stubs, T4s, NOAs), employment verification, current mortgage statement, property tax bill, home insurance, credit report authorization, and recent bank statements. Self-employed borrowers need 2 years of financial statements and tax returns.
                </p>
              </div>
            </div>
          </section>



          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              Making the Right Refinancing Decision
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Refinancing your mortgage is one of the most impactful financial decisions you'll make. Done at the right time with the right strategy, it can save you tens of thousands of dollars, provide financial flexibility, or help you achieve major life goals.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The key indicators that it's time to refinance include: <strong>(1) Interest rates dropping 1-2% below your current rate</strong>, (2) Building 20%+ equity in your home, (3) Major life changes like career growth or retirement planning, (4) Switching between fixed and variable rates based on market conditions, or (5) Eliminating mortgage insurance.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Before refinancing, always calculate your specific break-even point, compare multiple lender offers, understand all fees and penalties, and ensure your timeline justifies the costs. Use our mortgage calculator to model different scenarios and see exactly how refinancing impacts your finances.
            </p>

            <div className="bg-indigo-50 rounded-lg p-6 my-8 border border-indigo-200">
              <p className="text-lg font-semibold text-slate-900 mb-2">💡 Pro Tip</p>
              <p className="text-slate-700">
                The best time to explore refinancing is 3-6 months before your mortgage term renewal. This gives you time to shop rates, negotiate with lenders, and avoid being locked into automatic renewal rates that are often 0.5-1% higher than advertised rates.
              </p>
            </div>
          </section>



          {/* CTA */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 my-12 border border-indigo-100">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
              Calculate Your Refinancing Savings
            </h3>
            <p className="text-slate-700 mb-6">
              Use our comprehensive mortgage calculator to compare your current mortgage with refinancing options. See exact break-even timelines, total interest savings, and payment differences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Calculate Refinancing Options
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Read More Articles →
              </Link>
            </div>
          </div>

          </div>
        </div>
      </article>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
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
                  <div className="px-6 pb-4 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

