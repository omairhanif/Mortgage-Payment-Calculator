import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "How Mortgage Points Lower Your Interest Rate | Mortgage Lab",
  description: "Understand the mechanics of how mortgage points reduce your interest rate. Learn lender pricing strategies, rate reduction calculations, and the step-by-step process with real Canadian examples."
};

export default function HowMortgagePointsLowerRateArticle() {
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
            src="/images/articles/should-you-buy-mortgage-points-cost-vs-benefit-guide.jpg"
            alt="How mortgage points lower your interest rate"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          How Mortgage Points Lower Your Interest Rate
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>August 27, 2026</time>
          <span className="mx-3">•</span>
          <span>11 min read</span>
        </div>
      </div>

      {/* Banner Ad */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8 mb-8">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
            <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-12">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Sarah walked into BMO's Vancouver branch to finalize her $375,000 mortgage. The loan officer presented two options: "You can take 5.49% with no upfront costs, or pay $3,750 now—that's 1 point—and we'll lower your rate to 5.19%." Sarah asked the question that puzzles thousands of Canadian homebuyers: <strong>"How does paying money upfront actually change my interest rate?"</strong>
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The answer lies in understanding <strong>how mortgage points lower your interest rate</strong> through a mechanism called prepaid interest. When you pay points, you're essentially compensating the lender upfront for the interest revenue they'll lose by giving you a lower rate. It's not magic—it's math. Lenders calculate the present value of future interest payments and offer you a trade: cash now in exchange for less interest monthly.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This guide reveals the complete mechanics behind mortgage point pricing. You'll learn exactly how lenders determine that 1 point equals a specific rate reduction, why the ratio varies between TD Bank and Scotiabank, and the step-by-step process that happens when you buy down your rate. We'll explore real 2026 pricing from Canadian lenders, show you the present value calculations behind the scenes, and explain why some borrowers get better rate-to-point ratios than others.
              </p>
            </section>


            {/* Section 1: The Fundamental Mechanics */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                The Fundamental Mechanics of Mortgage Points
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                At its core, <strong>how mortgage points lower your interest rate</strong> comes down to a simple principle: you're prepaying interest. Lenders make money from the interest you pay over time. When you buy points, you give them some of that money upfront, so they can afford to charge you less interest monthly.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Understanding Prepaid Interest
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Think of your mortgage from the lender's perspective. On a $300,000 mortgage at 5.29% over a 5-year term, RBC expects to collect approximately $76,200 in interest payments. That's their revenue. Now, if you pay $3,000 upfront (1 point) and they drop your rate to 5.04%, they'll only collect about $73,800 in interest over those 5 years—about $2,400 less.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">The Lender's Math:</p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Scenario A (No Points):</strong> $0 upfront + $76,200 interest = $76,200 total</li>
                  <li><strong>Scenario B (1 Point):</strong> $3,000 upfront + $73,800 interest = $76,800 total</li>
                  <li><strong>Result:</strong> Lender gets roughly the same total revenue, just structured differently</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The lender actually makes slightly more with points because they receive cash immediately (which has more value than future payments). This time-value-of-money principle is why lenders offer points at all—it benefits both parties when structured correctly.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Why 1 Point Typically Equals 0.25% Rate Reduction
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The industry standard of 1 point = 0.25% rate reduction isn't arbitrary—it comes from present value calculations. Lenders use complex formulas that consider:
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li>The loan amount and term length</li>
                <li>Expected prepayment rates (how many borrowers refinance early)</li>
                <li>Their cost of funds (what the bank pays to borrow money)</li>
                <li>Default risk and administrative costs</li>
                <li>Current market conditions and competition</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When all these factors align in typical 2026 market conditions with 5-year Canadian mortgage terms, the math works out to roughly 0.25% per point. But this ratio isn't fixed—it fluctuates based on market conditions and your specific situation.
              </p>
            </section>



            {/* Section 2: How Lenders Price Mortgage Points - Part 1 */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                How Lenders Price Mortgage Points
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Understanding <strong>mortgage point pricing</strong> reveals why you might get different rate-to-point ratios from TD Bank versus a credit union. Lenders don't use a universal formula—they adjust pricing based on dozens of variables.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Market Conditions Affect Pricing
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When the Bank of Canada sets higher policy rates, the value of buying down your rate increases. In a 6% rate environment, getting a 0.25% reduction saves you significantly more per month than in a 3% environment. Lenders adjust their point pricing accordingly.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 my-8 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">2026 Market Example:</h4>
                <div className="space-y-3 text-slate-700">
                  <p><strong>Current Scenario (Rates ~5.5%):</strong> 1 point typically buys 0.25% reduction</p>
                  <p><strong>If rates rise to 7%:</strong> Same 1 point might only buy 0.20% reduction (points less valuable)</p>
                  <p><strong>If rates drop to 3%:</strong> 1 point might buy 0.30% reduction (points more valuable)</p>
                  <p className="text-sm italic mt-4">Why? Higher rates mean more interest revenue at stake. Lenders charge more for rate buydowns when the base rate is high.</p>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Factors Affecting Your Personal Point Pricing
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Not everyone gets the same deal. Your <strong>rate reduction per point</strong> depends on five key factors:
              </p>

              <div className="space-y-4 my-8">
                <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-r-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">1. Credit Score</h4>
                  <p className="text-slate-700">
                    <strong>750+:</strong> Get best ratios (often 0.26%-0.28% per point)<br/>
                    <strong>680-749:</strong> Standard ratios (0.23%-0.25% per point)<br/>
                    <strong>Below 680:</strong> Reduced ratios or points not offered
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-r-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">2. Loan-to-Value Ratio (LTV)</h4>
                  <p className="text-slate-700">
                    <strong>Under 65% LTV:</strong> Premium pricing on points<br/>
                    <strong>65-80% LTV:</strong> Standard pricing<br/>
                    <strong>80-95% LTV:</strong> Limited point options, less favorable ratios
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-r-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">3. Loan Amount</h4>
                  <p className="text-slate-700">
                    Larger mortgages ($500,000+) often get better rate-to-point ratios. A $750,000 mortgage might get 0.27% per point while a $200,000 mortgage gets 0.23%.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-r-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">4. Property Type</h4>
                  <p className="text-slate-700">
                    <strong>Primary residence:</strong> Best rates<br/>
                    <strong>Second home:</strong> 0.05% less reduction per point<br/>
                    <strong>Investment property:</strong> 0.10% less reduction per point
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-r-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">5. Lender Type & Competition</h4>
                  <p className="text-slate-700">
                    Big banks (TD, RBC, Scotiabank) have standardized pricing. Credit unions and brokers often negotiate better ratios to win business.
                  </p>
                </div>
              </div>



              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Real 2026 Pricing from Canadian Lenders
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Here's what actual mortgage point pricing looks like at major Canadian lenders in mid-2026:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-slate-300">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-300 p-3 text-left">Lender</th>
                      <th className="border border-slate-300 p-3 text-left">Standard Ratio</th>
                      <th className="border border-slate-300 p-3 text-left">Premium Clients</th>
                      <th className="border border-slate-300 p-3 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">TD Bank</td>
                      <td className="border border-slate-300 p-3">0.25% per point</td>
                      <td className="border border-slate-300 p-3">0.26% (800+ credit)</td>
                      <td className="border border-slate-300 p-3">Requires $400k+ loan</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">RBC</td>
                      <td className="border border-slate-300 p-3">0.24% per point</td>
                      <td className="border border-slate-300 p-3">0.27% (existing clients)</td>
                      <td className="border border-slate-300 p-3">Relationship discounts</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Scotiabank</td>
                      <td className="border border-slate-300 p-3">0.22% per point</td>
                      <td className="border border-slate-300 p-3">0.28% (negotiable)</td>
                      <td className="border border-slate-300 p-3">Wide range, shop hard</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">BMO</td>
                      <td className="border border-slate-300 p-3">0.25% per point</td>
                      <td className="border border-slate-300 p-3">0.26% (low LTV)</td>
                      <td className="border border-slate-300 p-3">Consistent pricing</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Credit Unions</td>
                      <td className="border border-slate-300 p-3">0.23-0.27%</td>
                      <td className="border border-slate-300 p-3">0.28-0.30%</td>
                      <td className="border border-slate-300 p-3">Most flexible</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Notice the significant variance: a borrower with excellent credit getting 0.30% per point from a credit union saves 20% more than someone getting the standard 0.25% from a major bank. This difference compounds over years—making lender shopping crucial.
              </p>
            </section>



            {/* Section 3: The Step-by-Step Process */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                The Step-by-Step Process of Lowering Your Rate
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Understanding the mechanics is one thing—knowing exactly what happens when you <strong>buy down your interest rate</strong> is another. Here's the complete process from quote to closing.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-600">
                  <h3 className="font-bold text-indigo-900 text-xl mb-3">Step 1: Rate Sheet Analysis</h3>
                  <p className="text-slate-700 mb-3">
                    Every morning, lenders publish rate sheets showing their available rates and point pricing. Your mortgage broker or loan officer accesses these to determine your options.
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200 text-sm font-mono">
                    <p className="text-slate-800"><strong>Example Rate Sheet (TD Bank, 5-year fixed):</strong></p>
                    <p className="text-slate-600 mt-2">Base Rate: 5.39%</p>
                    <p className="text-slate-600">+0.5 points: 5.27% (-0.12%)</p>
                    <p className="text-slate-600">+1.0 points: 5.14% (-0.25%)</p>
                    <p className="text-slate-600">+1.5 points: 4.99% (-0.40%)</p>
                    <p className="text-slate-600">+2.0 points: 4.89% (-0.50%)</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-600">
                  <h3 className="font-bold text-indigo-900 text-xl mb-3">Step 2: Rate Lock with Points</h3>
                  <p className="text-slate-700 mb-3">
                    Once you choose a rate and point combination, you lock it in—typically for 90-120 days. This protects you if rates rise while your purchase completes.
                  </p>
                  <p className="text-slate-700">
                    <strong>Important:</strong> If rates drop before closing, some lenders let you "relock" at the lower rate. Others hold you to the original lock. Ask about float-down options when locking.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-600">
                  <h3 className="font-bold text-indigo-900 text-xl mb-3">Step 3: Closing Disclosure</h3>
                  <p className="text-slate-700 mb-3">
                    Points appear as "Discount Points" in Section A of your closing disclosure. This is a cash payment—you cannot finance points into your mortgage amount.
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-800 font-semibold mb-2">Toronto Example ($520,000 home, $416,000 mortgage):</p>
                    <p className="text-slate-700">Down Payment: $104,000</p>
                    <p className="text-slate-700">Closing Costs: $8,200</p>
                    <p className="text-green-700 font-semibold">+ Discount Points (1.5): $6,240</p>
                    <p className="text-slate-800 font-bold mt-2 pt-2 border-t">Total Cash Needed: $118,440</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-600">
                  <h3 className="font-bold text-indigo-900 text-xl mb-3">Step 4: Permanent Rate Documentation</h3>
                  <p className="text-slate-700">
                    Your mortgage documents permanently reflect the reduced rate (e.g., 4.99% instead of 5.39%). There's no expiration—the rate stays lower for the entire mortgage term. At renewal after 5 years, you'll negotiate a new rate based on market conditions then, but the points you paid continue to save you money until that renewal.
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Common Mistakes to Avoid
              </h3>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 my-6 rounded-r-lg">
                <ul className="space-y-3 text-slate-700">
                  <li><strong>❌ Confusing "points" with "percentage points":</strong> 1 point = 1% of loan amount, NOT 1% interest rate drop</li>
                  <li><strong>❌ Not getting written confirmation:</strong> Always get point pricing in writing before locking</li>
                  <li><strong>❌ Assuming all lenders price equally:</strong> Shop 4-5 lenders—ratios vary significantly</li>
                  <li><strong>❌ Buying points on adjustable/variable rates:</strong> Points only work on fixed rates</li>
                  <li><strong>❌ Depleting emergency funds to buy points:</strong> Never compromise financial security for rate buydown</li>
                </ul>
              </div>
            </section>



            {/* Section 4: How Much Rates Drop Per Point */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                How Much Rates Drop Per Point
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The <strong>rate reduction per point</strong> follows a general pattern, though it's not perfectly linear. Here's what you can typically expect when buying points in Canada's 2026 mortgage market.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-slate-300">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="border border-slate-300 p-3 text-left">Points Paid</th>
                      <th className="border border-slate-300 p-3 text-left">Cost ($350k)</th>
                      <th className="border border-slate-300 p-3 text-left">Starting Rate</th>
                      <th className="border border-slate-300 p-3 text-left">New Rate</th>
                      <th className="border border-slate-300 p-3 text-left">Rate Drop</th>
                      <th className="border border-slate-300 p-3 text-left">Monthly Savings</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">0 points</td>
                      <td className="border border-slate-300 p-3">$0</td>
                      <td className="border border-slate-300 p-3">5.39%</td>
                      <td className="border border-slate-300 p-3">5.39%</td>
                      <td className="border border-slate-300 p-3">0%</td>
                      <td className="border border-slate-300 p-3">$0</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3 font-semibold">0.5 points</td>
                      <td className="border border-slate-300 p-3">$1,750</td>
                      <td className="border border-slate-300 p-3">5.39%</td>
                      <td className="border border-slate-300 p-3">5.27%</td>
                      <td className="border border-slate-300 p-3">0.12%</td>
                      <td className="border border-slate-300 p-3">$24</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">1 point</td>
                      <td className="border border-slate-300 p-3">$3,500</td>
                      <td className="border border-slate-300 p-3">5.39%</td>
                      <td className="border border-slate-300 p-3">5.14%</td>
                      <td className="border border-slate-300 p-3">0.25%</td>
                      <td className="border border-slate-300 p-3">$51</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3 font-semibold">1.5 points</td>
                      <td className="border border-slate-300 p-3">$5,250</td>
                      <td className="border border-slate-300 p-3">5.39%</td>
                      <td className="border border-slate-300 p-3">4.99%</td>
                      <td className="border border-slate-300 p-3">0.40%</td>
                      <td className="border border-slate-300 p-3">$82</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-slate-300 p-3 font-semibold">2 points</td>
                      <td className="border border-slate-300 p-3">$7,000</td>
                      <td className="border border-slate-300 p-3">5.39%</td>
                      <td className="border border-slate-300 p-3">4.89%</td>
                      <td className="border border-slate-300 p-3">0.50%</td>
                      <td className="border border-slate-300 p-3">$102</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Calgary mortgage example above:</strong> $350,000 loan at 25-year amortization. Notice that each additional 0.5 points doesn't provide exactly the same rate drop—there's slight diminishing returns after 1.5-2 points.
              </p>



              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Why It's Not Perfectly Linear
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                You might expect that if 1 point = 0.25% reduction, then 2 points would equal exactly 0.50%. Sometimes it does, but often you'll get 0.45%-0.48% instead. Three reasons why:
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li><strong>Lender risk floors:</strong> Banks won't go below certain rates regardless of points paid</li>
                <li><strong>Diminishing value:</strong> The lower the rate already is, the less additional reduction is worth to you</li>
                <li><strong>Market rate constraints:</strong> Lenders can't offer rates too far below their cost of funds</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-amber-900 mb-3">Ottawa Rental Property Example:</p>
                <p className="text-slate-700 mb-2">
                  Marcus owns a rental condo and wants to buy points on his $285,000 refinance. Because it's an investment property, Scotiabank offers reduced rate-to-point ratios:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>Primary residence pricing:</strong> 1 point = 0.25% reduction</li>
                  <li><strong>Investment property pricing:</strong> 1 point = 0.20% reduction</li>
                  <li><strong>Why the difference:</strong> Higher default risk on rental properties means lenders offer less favorable terms</li>
                </ul>
              </div>
            </section>



            {/* Section 5: Optimization Strategies */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Optimization Strategies for Maximum Value
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Now that you understand the mechanics, here's how to extract maximum value when buying down your interest rate.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Strategy 1: Compare Effective Cost Per Basis Point
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Don't just look at headline numbers. Calculate the cost per basis point (1/100th of 1%) to compare lenders apples-to-apples.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 my-6 border border-slate-200">
                <p className="font-semibold text-slate-900 mb-3">Vancouver Example ($450,000 mortgage):</p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Lender A:</strong> 1 point ($4,500) = 0.25% reduction → $180 per basis point</p>
                  <p><strong>Lender B:</strong> 1 point ($4,500) = 0.28% reduction → $161 per basis point</p>
                  <p className="text-green-700 font-semibold mt-3">Lender B is 11% more efficient—choose them!</p>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Strategy 2: Negotiate at Application, Not Pre-Approval
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Point pricing becomes much more negotiable once you have a firm offer on a home. Lenders want to close deals, not lose them to competitors. Get pre-approved first, then shop aggressively when you're ready to lock your rate.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Strategy 3: Buy Fractional Points
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                You don't have to buy full points. Half-points (0.5) or even quarter-points (0.25) give you finer control over your trade-off between upfront costs and monthly savings.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-green-900 mb-3">Montreal Break-Even Scenario:</p>
                <p className="text-slate-700 mb-2">
                  Elena wants to buy points but only plans to stay 4 years. Her analysis:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>1 full point:</strong> 6.8-year break-even (too long)</li>
                  <li><strong>0.5 points:</strong> 3.2-year break-even (perfect!)</li>
                </ul>
                <p className="text-slate-700 mt-3">
                  By buying fractional points, Elena saves $1,920 over 4 years instead of losing money by overbuying.
                </p>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                When NOT to Buy Points
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Sometimes buying points is the wrong move, even if the math works:
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li>Your emergency fund falls below 6 months of expenses</li>
                <li>You're considering a variable rate mortgage (points only work on fixed)</li>
                <li>You expect to refinance within 3 years</li>
                <li>Your break-even exceeds 60% of your planned ownership period</li>
                <li>You can get a better return investing the cash elsewhere (RRSP match, TFSA, etc.)</li>
              </ul>
            </section>



            {/* FAQs */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-indigo-600 bg-slate-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-slate-900 text-xl mb-3">Do mortgage points lower my interest rate permanently?</h3>
                  <p className="text-slate-700">
                    Yes, for the duration of that mortgage term. If you buy points on a 5-year fixed mortgage at 4.89%, that rate stays locked for all 5 years. When you renew at year 5, you'll negotiate a new rate based on current market conditions—the points you paid don't carry over to the renewal.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-600 bg-slate-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-slate-900 text-xl mb-3">Can I negotiate better rate-to-point ratios?</h3>
                  <p className="text-slate-700">
                    Absolutely. Lenders have flexibility, especially for strong borrowers or large mortgages. If you have 800+ credit, 40%+ down payment, or a $600,000+ mortgage, ask for enhanced pricing. Credit unions are particularly negotiable—some will offer 0.28%-0.30% per point to win premium clients.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-600 bg-slate-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-slate-900 text-xl mb-3">Are mortgage points tax deductible in Canada?</h3>
                  <p className="text-slate-700">
                    For primary residences, no. However, if you're buying an investment property, mortgage points may be deductible as a financing expense. Consult a tax professional for your specific situation—CRA rules on rental property deductions can be complex.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-600 bg-slate-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-slate-900 text-xl mb-3">What happens to my points if I refinance early?</h3>
                  <p className="text-slate-700">
                    You lose the remaining value. If you paid $4,000 for points expecting an 8-year break-even but refinance after 3 years, you've lost money. This is why break-even analysis is critical—always pad your timeline expectations by 25-30% to account for life's uncertainties.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-600 bg-slate-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-slate-900 text-xl mb-3">Do all Canadian lenders offer mortgage points?</h3>
                  <p className="text-slate-700">
                    Most major banks (TD, RBC, BMO, Scotiabank, CIBC) and credit unions offer points, but not all. Some online lenders and alternative lenders don't participate. Always ask specifically: "What rate-to-point ratios do you offer?" Don't assume it's available just because you're getting a mortgage quote.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-600 bg-slate-50 p-6 rounded-r-lg">
                  <h3 className="font-bold text-slate-900 text-xl mb-3">Is there a limit to how many points I can buy?</h3>
                  <p className="text-slate-700">
                    Most lenders cap points at 2-3 maximum. Beyond that, the rate reductions become minimal due to lender risk floors. Practically speaking, buying more than 2 points rarely makes financial sense—you're better off making a larger down payment or keeping the cash for investments if you have that much available.
                  </p>
                </div>
              </div>
            </section>



            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Conclusion: The Math Behind the Lower Rate
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>How mortgage points lower your interest rate</strong> isn't mysterious—it's a straightforward exchange of present value for future savings. When you understand that 1 point = 1% of your loan amount prepaying future interest, the mechanics become clear. Lenders calculate the present value of the interest revenue they'll lose by dropping your rate, and they charge you roughly that amount upfront.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The key insights for Canadian homebuyers:
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li>Standard pricing is 0.25% rate reduction per point, but ranges from 0.20%-0.30% depending on your profile</li>
                <li>Your credit score, LTV ratio, loan amount, and lender type all influence your rate-to-point ratio</li>
                <li>The process involves rate sheets, rate locks, closing disclosures, and permanent rate documentation</li>
                <li>Rate reductions aren't perfectly linear—expect diminishing returns after 1.5-2 points</li>
                <li>Optimization strategies like comparing cost-per-basis-point and buying fractional points maximize value</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Whether buying points makes sense for <em>you</em> depends on your break-even period, timeline certainty, and alternative uses for your cash. Understanding the mechanics empowers you to evaluate offers intelligently and negotiate confidently. When Sarah walked out of BMO with her mortgage documents showing 5.19% instead of 5.49%, she wasn't just saving $84 monthly—she understood exactly why that rate reduction cost $3,750 and how the lender's math worked.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                That's the power of understanding how mortgage points lower your interest rate.
              </p>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 my-12 text-white">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Calculate Your Mortgage Points Strategy
              </h3>
              <p className="text-indigo-100 mb-6 text-lg">
                Use our free mortgage points calculator to determine your optimal point purchase amount, calculate break-even periods, and compare scenarios with Canadian-specific calculations.
              </p>
              <Link 
                href="/"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Try the Calculator
              </Link>
            </div>

            {/* In-content Ad */}
            <div className="w-full flex justify-center my-12">
              <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
                <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
              </div>
            </div>

          </div>
        </div>
      </article>
    </main>
  );
}

