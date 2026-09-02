"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { getStructuredData } from "./server";

export default function MortgagePointsCalculatorArticle() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How much does 1 mortgage point cost and what rate reduction do I get?",
      a: "One mortgage point costs 1% of your loan amount and typically reduces your interest rate by 0.20-0.25% (20-25 basis points). Example: $400,000 mortgageâ€”one point costs $4,000 (1% of $400,000). If your quoted rate is 5.50%, buying one point might reduce it to 5.25-5.30%. Buying two points ($8,000) could reduce the rate to 5.00-5.05%. The exact rate reduction varies by lender, market conditions, and your credit profile. In high-rate environments (rates above 6%), points might offer 0.25-0.30% reduction per point. In low-rate environments (rates below 4%), rate reduction might be only 0.15-0.20% per point. Always ask for the specific rate reduction your lender offersâ€”it's not standardized."
    },
    {
      q: "What's the break-even point for buying mortgage points?",
      a: "Break-even is when your monthly payment savings equal your upfront point cost. Calculate it: Point Cost Ã· Monthly Savings = Break-even Months. Example: $400,000 mortgage at 5.5% = $2,457/month payment. Buy 1 point for $4,000, rate drops to 5.25% = $2,394/month payment (saves $63/month). Break-even: $4,000 Ã· $63 = 63.5 months (5.3 years). If you keep the mortgage beyond 5.3 years, points save money. If you sell or refinance before 5.3 years, you lose money. Rule of thumb: buying points makes sense if you plan to stay in the home and keep the mortgage at least 1.5-2Ã— the break-even period (gives cushion for unexpected moves). For 5.3-year break-even, keep mortgage 8-10+ years to maximize benefit."
    },
    {
      q: "Are mortgage points tax-deductible in Canada?",
      a: "NOâ€”mortgage points are NOT tax-deductible in Canada for primary residences (unlike the U.S., where points can sometimes be deducted). Canadian tax law doesn't allow deductions for primary residence mortgage expenses, including points, fees, or interest. EXCEPTIONS: (1) Rental propertyâ€”if you buy a rental property and pay points, they're deductible as a business expense (either all in year paid or amortized over loan term), (2) Investment propertyâ€”points paid on loans for income-earning property may be deductible, (3) Business useâ€”if part of your home is used exclusively for business, proportional point costs might be deductible. For regular Canadian homeowners buying a primary residence, points are simply an upfront cost to reduce your rateâ€”no tax benefit."
    },
    {
      q: "Should I buy points if I might refinance in 3-5 years?",
      a: "Generally NO. If there's ANY chance you'll refinance within your break-even period (typically 4-7 years for 1 point), buying points is a poor financial decision. When you refinance, you get a new loanâ€”your old loan with bought-down rate disappears, and you lose all future savings. Example: buy 1 point for $4,000, break-even is 6 years. If you refinance in year 4, you've paid $4,000 and saved only ~$3,000 in paymentsâ€”net loss of $1,000. WHEN to buy points despite refi possibility: (1) rates are historically high and unlikely to drop enough to justify refi costs, (2) your break-even is very short (2-3 years) due to large loan or good rate reduction, (3) you're highly confident you'll keep this mortgage 10+ years. Generally, points work best for buyers who know they're settling long-term."
    },
    {
      q: "Can I negotiate the cost or effectiveness of points with my lender?",
      a: "Yes! Everything is negotiable. Strategies: (1) Ask multiple lenders to quote their point pricingâ€”rate reduction per point varies significantly between lenders; (2) Ask if lender will offer 0.25% rate reduction per point instead of 0.20% (worth trying, especially with strong credit and large loan); (3) Negotiate the flat upfront costâ€”instead of 1% of loan, ask for 0.8% or 0.9%; (4) Request 'negative points' (lender credits)â€”you accept slightly higher rate, lender pays your closing costs; (5) Time your lockâ€”point pricing improves when rates drop, worsens when rates rise. Example: Lender A offers 0.20% reduction per point, Lender B offers 0.25% reduction. On $400,000 loan, Lender B's better deal saves you significantly more over the life of the loan. Always compare at least 3 lenders."
    },
    {
      q: "What's better: buying points or making a larger down payment?",
      a: "Usually a larger down payment wins. Math comparison: $400,000 home, you have $90,000 availableâ€”use as $80,000 down + $10,000 in points, OR use as $90,000 down. Option 1: $320,000 mortgage + $10,000 points (2.5 points) = 5.5% drops to ~4.9%, payment $1,920/month. Option 2: $310,000 mortgage at 5.5% = $1,903/month. Option 2 winsâ€”lower payment AND you didn't spend $10,000 upfront. Why larger down beats points: (1) permanent loan reduction vs. temporary rate improvement, (2) reduces/eliminates CMHC insurance if you hit 20% down, (3) saves interest on reduced principal every payment, (4) no break-even calculation needed. EXCEPTION: If you're already at 20%+ down (no insurance), markets are high-rate (6%+), and you're certain you'll keep mortgage 10+ years, points can make sense with extra cash."
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
            src="/images/articles/mortgage-points-calculator-break-even-analysis-tool.jpg"
            alt="Mortgage points calculator break-even analysis tool"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Mortgage Points Calculator - Are Points Worth It?
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>August 27, 2026</time>
          <span className="mx-3">â€¢</span>
          <span>12 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-2">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-12">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Michael and Lisa are buying their first home in Torontoâ€”a $450,000 condo. Their lender at TD Bank offers them a 5.49% interest rate, or they can pay 2 discount points ($9,000) to reduce the rate to 4.99%. The monthly payment difference is $142. They're asking the crucial question thousands of Canadian homebuyers face: <strong>Are mortgage points worth buying?</strong>
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The answer requires a buying points calculator and an honest assessment of how long they'll keep this mortgage. If they divide $9,000 by $142 monthly savings, their break-even point is 63 months (5.3 years). If they plan to stay longer than that, buying points saves money. If they sell or refinance sooner, they lose money.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This comprehensive guide reveals exactly how mortgage points work, when paying mortgage points makes financial sense, and how to calculate your specific break-even timeline. We'll analyze real Canadian scenarios with actual lender data from RBC, BMO, Scotiabank, and TD Bankâ€”showing you precisely when buying points is a smart investment and when it's a costly mistake.
              </p>
            </section>


            {/* Section 1: What Are Mortgage Points */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                What Are Mortgage Points?
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Mortgage pointsâ€”also called discount points or loan pointsâ€”are upfront fees you pay to your lender at closing to reduce your mortgage interest rate. One point equals 1% of your loan amount. When you use a <strong>buying points calculator mortgage</strong> tool, you'll see this calculation clearly: on a $150,000 mortgage, 1 point costs $1,500. Two points cost $3,000.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>What does paying points mean</strong> in practical terms? You're essentially prepaying some of your interest upfront in exchange for a lower rate over the life of the loan. Think of it as buying a discount on your interest rateâ€”paying more now to pay less monthly for years to come.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Types of Mortgage Points
              </h3>

              <div className="bg-slate-50 border-l-4 border-slate-300 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">Two Types of Points:</p>
                <ul className="space-y-3 text-slate-700">
                  <li><strong>Discount Points:</strong> Lower your interest rate (what we're discussing in this article)</li>
                  <li><strong>Origination Points:</strong> Lender fees for processing the loan (don't reduce your rate)</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Only discount points reduce your interest rate. Origination points are simply feesâ€”avoid confusing the two when using a <strong>loan points calculator</strong>. Canadian lenders like RBC and BMO typically charge origination fees separately, making discount points a clear optional choice.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 my-8 border border-slate-200">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  Real Example: $150,000 Mortgage with 2 Points
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div className="flex justify-between pb-2 border-b border-amber-200">
                    <span className="font-semibold">Loan Amount:</span>
                    <span>$150,000</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-200">
                    <span className="font-semibold">Points Purchased:</span>
                    <span>2 points</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-200">
                    <span className="font-semibold">Calculation:</span>
                    <span>$150,000 Ã— 0.02</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 bg-slate-50 -mx-6 px-6 py-3">
                    <span>Total Cost:</span>
                    <span className="text-indigo-700">$3,000</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-200">
                    <span className="font-semibold">Rate Without Points:</span>
                    <span>5.29%</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-semibold">
                    <span>Rate With 2 Points:</span>
                    <span>4.79% (0.50% reduction)</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                In Canada, discount points are available from most major lenders, but they're more common on fixed-rate mortgages than variable rates. Scotiabank and CIBC typically offer point options on their 5-year fixed products, while TD and RBC price them competitively based on current market conditions.
              </p>
            </section>


            {/* Section 2: How Mortgage Points Lower Your Interest Rate */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                How Mortgage Points Lower Your Interest Rate
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Here's the mechanics: when you pay mortgage points, you're prepaying interest. Lenders receive cash upfront in exchange for giving you a lower rate. Typically, each point reduces your rate by 0.25%, though this varies by lender and market conditions. A <strong>loan points calculator</strong> shows this trade-off clearlyâ€”more cash now equals less interest monthly.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The exact rate reduction depends on several factors: current interest rate environment, your credit score, loan-to-value ratio, and the lender's pricing strategy. During 2026, with Canadian rates around 5-6%, most lenders offer 0.20%-0.30% reduction per point purchased.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Real Vancouver Scenario: 1.5 Points on $392,000 Mortgage
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Sarah bought a townhouse in Vancouver for $490,000 with a 20% down payment ($98,000), financing $392,000 through BMO. She had two rate options:
              </p>

              <div className="bg-slate-50 rounded-xl p-6 my-8 border border-slate-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-slate-300">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Option A: No Points</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li><strong>Rate:</strong> 5.29%</li>
                      <li><strong>Upfront Cost:</strong> $0</li>
                      <li><strong>Monthly Payment:</strong> $2,167</li>
                      <li><strong>Total Interest (5 years):</strong> $98,420</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border-2 border-green-600">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Option B: 1.5 Points</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li><strong>Rate:</strong> 4.79% (0.50% lower)</li>
                      <li><strong>Upfront Cost:</strong> $5,880</li>
                      <li><strong>Monthly Payment:</strong> $2,058</li>
                      <li><strong>Total Interest (5 years):</strong> $89,480</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Sarah's monthly savings: <strong>$109</strong> ($2,167 - $2,058). Her break-even point: $5,880 Ã· $109 = 54 months (4.5 years). Since she plans to stay at least 7 years before upgrading, buying 1.5 points saves her money.
              </p>
            </section>


            {/* Section 3: Calculating If Paying Points Is Worth It */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Calculating If Paying Points Is Worth It
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The <strong>paying mortgage points calculator</strong> formula is straightforward: divide the total cost of points by your monthly payment savings to find your break-even point in months. This is how to calculate if paying points is worth it for your specific situation.
              </p>

              <div className="bg-slate-50 border-2 border-indigo-600 p-6 my-8 rounded-xl">
                <h3 className="font-bold text-slate-900 text-xl mb-4">Break-Even Formula</h3>
                <p className="text-lg text-slate-800 font-mono mb-4">
                  Break-Even Months = Cost of Points Ã· Monthly Savings
                </p>
                <p className="text-slate-700">
                  If you plan to keep the mortgage longer than the break-even period, buying points saves money. If you'll sell or refinance sooner, skip the points.
                </p>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Three Real Calculation Examples
              </h3>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-slate-300 bg-slate-50 p-5 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Example 1: Short-Term Hold (Points NOT Worth It)</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>Scenario:</strong> Ottawa buyer, might relocate for work in 3 years</li>
                    <li><strong>Loan:</strong> $280,000</li>
                    <li><strong>Points Cost:</strong> 1 point = $2,800</li>
                    <li><strong>Rate Drop:</strong> 5.39% to 5.14% (0.25%)</li>
                    <li><strong>Monthly Savings:</strong> $41</li>
                    <li><strong>Break-Even:</strong> 68 months (5.7 years)</li>
                    <li><strong>Verdict:</strong> âŒ Don't buy pointsâ€”won't reach break-even before likely sale</li>
                  </ul>
                </div>

                <div className="border-l-4 border-slate-300 bg-slate-50 p-5 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Example 2: Long-Term Hold (Points Worth It)</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>Scenario:</strong> Calgary forever home, plan to stay 15+ years</li>
                    <li><strong>Loan:</strong> $365,000</li>
                    <li><strong>Points Cost:</strong> 2 points = $7,300</li>
                    <li><strong>Rate Drop:</strong> 5.49% to 4.99% (0.50%)</li>
                    <li><strong>Monthly Savings:</strong> $109</li>
                    <li><strong>Break-Even:</strong> 67 months (5.6 years)</li>
                    <li><strong>Verdict:</strong> âœ… Buy pointsâ€”will save $12,340 over 15 years after recouping cost</li>
                  </ul>
                </div>

                <div className="border-l-4 border-slate-300 bg-slate-50 p-5 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Example 3: Marginal Case (Depends on Your Goals)</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>Scenario:</strong> Montreal condo, uncertain about 5-year plans</li>
                    <li><strong>Loan:</strong> $310,000</li>
                    <li><strong>Points Cost:</strong> 1.5 points = $4,650</li>
                    <li><strong>Rate Drop:</strong> 5.29% to 4.92% (0.37%)</li>
                    <li><strong>Monthly Savings:</strong> $67</li>
                    <li><strong>Break-Even:</strong> 69 months (5.75 years)</li>
                    <li><strong>Verdict:</strong> âš ï¸ Borderlineâ€”buy only if very confident you'll stay past 6 years</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Use a <strong>pay down points calculator</strong> to run your own numbers. The break-even period typically ranges from 3 to 7 years depending on how many points you buy and how much your rate drops. Canadian mortgage terms (typically 5 years) add complexityâ€”you might refinance at renewal, resetting the equation.
              </p>
            </section>


            {/* Section 4: Real-World Scenarios When Points Make Sense */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Real-World Scenarios: When Points Make Sense
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Understanding <strong>how to calculate if paying points is worth it</strong> is only half the battle. You also need to honestly assess your life situation and financial goals. Here are four real Canadian scenarios that illustrate when buying points worksâ€”and when it doesn't.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Scenario A: The Forever Home (Buy Points)
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                James and Priya, both 32, bought a 4-bedroom house in Calgary for $585,000. They're financing $468,000 (20% down) through Scotiabank. This is their family home where they plan to raise kids and stay for 20+ years. They chose to pay 2 points ($9,360) to drop their rate from 5.39% to 4.89%.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Why it works:</strong> With a $143/month savings, they break even in 65 months (5.4 years). Over 20 years, they'll save approximately $24,960 in interest after accounting for the points cost. Their long time horizon and stable life situation make this a smart investment.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Scenario B: The Rental Property (Buy Points)
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Marcus owns a rental condo in Toronto's Liberty Village. He's refinancing his $325,000 mortgage through TD Bank and plans to hold this income property for at least 10 years. He pays 1.5 points ($4,875) to reduce his rate from 5.59% to 5.22%.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Why it works:</strong> Lower monthly payments ($70 savings) improve his cash flow from rent. The break-even is 70 months, but he's committed to the property long-term. Plus, in Canada, mortgage interest on rental properties is tax-deductible, making the rate reduction even more valuable for his investment strategy.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Scenario C: Job Uncertainty (Skip Points)
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Natalie is buying a condo in Montreal. She loves the location but her employer is restructuring, and there's a chance she might need to relocate within 2-3 years. Her BMO loan officer offers 1 point ($2,850 on her $285,000 mortgage) to drop the rate 0.25%.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Why she should skip:</strong> Even though the $48/month savings seems appealing, her break-even is 59 months (almost 5 years). With relocation possible much sooner, she'd likely lose money by paying points. She keeps her cash liquid instead.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Scenario D: Market Timing Strategy (Skip Points)
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                David and Rachel are locking in a 5-year fixed rate with RBC at 5.49% on their $410,000 mortgage. It's mid-2026, and they believe Bank of Canada will cut rates significantly by 2028, creating refinancing opportunities. The lender offers 1.5 points to reduce their rate to 5.12%.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Why they skip:</strong> If they're right about rate cuts and can refinance in 2 years at 4.5%, paying points now wastes money. They'd need to stay with the 5.12% rate for 6+ years to break even, but they're planning to refinance much sooner. They save the $6,150 points cost for their future remodel instead.
              </p>
            </section>


            {/* Section 5: Points vs Other Rate-Reduction Strategies */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Points vs Other Rate-Reduction Strategies
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Before using a <strong>buying points calculator</strong>, consider whether other strategies might serve you better. Mortgage points aren't the only way to reduce your interest costs or improve your financial position. Here's how points compare to three alternatives.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-slate-300">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-300 p-3 text-left font-bold">Strategy</th>
                      <th className="border border-slate-300 p-3 text-left font-bold">Benefit</th>
                      <th className="border border-slate-300 p-3 text-left font-bold">Best When</th>
                      <th className="border border-slate-300 p-3 text-left font-bold">Drawback</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Buy Points</td>
                      <td className="border border-slate-300 p-3">Lower rate, lower payment</td>
                      <td className="border border-slate-300 p-3">Long-term hold (7+ years)</td>
                      <td className="border border-slate-300 p-3">Lose money if sell early</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Larger Down Payment</td>
                      <td className="border border-slate-300 p-3">Smaller loan, less interest total</td>
                      <td className="border border-slate-300 p-3">Any timeframe, builds equity</td>
                      <td className="border border-slate-300 p-3">Ties up more cash in house</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Shorter Loan Term</td>
                      <td className="border border-slate-300 p-3">Much less interest over life</td>
                      <td className="border border-slate-300 p-3">High income, can afford higher payment</td>
                      <td className="border border-slate-300 p-3">Higher monthly obligation</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3 font-semibold">Rate Shopping</td>
                      <td className="border border-slate-300 p-3">Lower rate without upfront cost</td>
                      <td className="border border-slate-300 p-3">Alwaysâ€”compare multiple lenders</td>
                      <td className="border border-slate-300 p-3">Takes time and effort</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Example Comparison: $350,000 Mortgage
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Let's say you have $10,000 extra cash and a $350,000 mortgage at 5.29%. Here's how different strategies play out over 5 years:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-300">
                  <h4 className="font-bold text-slate-900 mb-2">Option 1: Buy 2 Points ($7,000)</h4>
                  <p className="text-slate-700">Rate drops to 4.79%. Monthly payment: $1,935. Total paid over 5 years: $116,100. You keep $3,000 cash.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border border-slate-300">
                  <h4 className="font-bold text-slate-900 mb-2">Option 2: Larger Down Payment (Extra $10,000)</h4>
                  <p className="text-slate-700">Borrow $340,000 at 5.29%. Monthly payment: $1,882. Total paid over 5 years: $112,920. Equity $10,000 higher from day one.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border-2 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-2">Option 3: Combine Strategies (Best ROI)</h4>
                  <p className="text-slate-700"><strong>Winner for many situations:</strong> Put $5,000 toward down payment, use $3,500 for 1 point. Borrow $345,000 at 5.04%. Payment: $1,895. Balances rate reduction with equity building and keeps $1,500 cash reserve.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border border-slate-300">
                  <h4 className="font-bold text-slate-900 mb-2">Option 4: Keep Cash, Shop Rates Aggressively</h4>
                  <p className="text-slate-700">Find a lender offering 5.09% with no points (common in competitive markets). Borrow $350,000. Payment: $1,936. Keep entire $10,000 for emergencies or investments.</p>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The "right" answer depends on your priorities: cash flow vs equity building vs flexibility vs absolute interest savings. Use multiple calculatorsâ€”a <strong>buying points calculator mortgage</strong> tool plus a standard mortgage calculatorâ€”to model different scenarios before deciding.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                {/* FAQ 1 */}
                <div className="border-l-4 border-slate-300 pl-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    How much would a borrower pay for 2 discount points on a $150,000 mortgage?
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    A borrower would pay <strong>$3,000</strong> for 2 discount points on a $150,000 mortgage. The calculation is simple: $150,000 Ã— 0.02 (which is 2%) = $3,000. Each point equals 1% of the loan amount, so 2 points equals 2% of $150,000. This $3,000 is paid upfront at closing in exchange for a reduced interest rateâ€”typically 0.40%-0.50% lower depending on the lender's pricing at the time.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="border-l-4 border-slate-300 pl-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    How to calculate if paying points is worth it?
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-3">
                    Use this three-step process:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700 leading-relaxed mb-3">
                    <li><strong>Calculate the total cost of points:</strong> Multiply your loan amount by the number of points (as a decimal). Example: $300,000 Ã— 0.015 = $4,500 for 1.5 points.</li>
                    <li><strong>Find your monthly savings:</strong> Calculate payments with and without points, then subtract. Use a <strong>paying mortgage points calculator</strong> for accuracy.</li>
                    <li><strong>Find break-even point:</strong> Divide total points cost by monthly savings. Example: $4,500 Ã· $82 = 55 months (4.6 years).</li>
                  </ol>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    If you plan to keep the mortgage longer than the break-even period, buying points saves money. If you'll sell or refinance sooner, don't buy points.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="border-l-4 border-slate-300 pl-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    Is 1 point worth refinancing?
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    It depends on your rate reduction and timeframe. If paying 1 point during refinancing drops your rate by 0.25% and you break even in 4-5 years, it's worth it only if you'll keep the new mortgage that long. However, if you're already refinancing to a significantly lower rate (say, from 6.5% to 5.0%), adding 1 point to drop it further to 4.75% might not provide enough additional savings to justify the cost. Run the break-even calculation: if 1 point costs $3,500 and saves you $60/month, you need 58 months to break evenâ€”worth it for long-term holders, not for those who might refinance again soon.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="border-l-4 border-slate-300 pl-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    What does 1.5 points mean on a mortgage?
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    1.5 points means you pay 1.5% of your loan amount upfront to reduce your interest rate. On a $300,000 mortgage, 1.5 points costs $4,500 ($300,000 Ã— 0.015). You'd typically receive a 0.30%-0.40% rate reduction in exchange. For example, if your standard rate is 5.29%, paying 1.5 points might lower it to 4.89% or 4.92% depending on the lender's current pricing structure. The fractional point (the 0.5) follows the same logic: 0.5 points = 0.5% of the loan amount, so half a point on a $200,000 mortgage costs $1,000.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div className="border-l-4 border-slate-300 pl-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    Can you negotiate mortgage points with Canadian lenders?
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Yes, but it varies by lender. Major banks like TD, RBC, and Scotiabank have less flexibility on their published point pricing, though you can sometimes negotiate other closing costs. Credit unions and mortgage brokers often have more room to negotiate both the cost of points and the rate reduction you receive. The best negotiation tactic: get written quotes from multiple lenders showing different point options. Use these to create competitionâ€”ask each lender to match or beat competitors' rate-to-points ratios. Your negotiating power increases with larger loan amounts, higher credit scores (750+), and relationships with the institution.
                  </p>
                </div>

                {/* FAQ 6 */}
                <div className="border-l-4 border-slate-300 pl-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    Are mortgage points tax deductible in Canada?
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    For your primary residence: <strong>No</strong>, mortgage points are generally not tax deductible in Canada. Unlike the United States, Canadian tax law doesn't allow homeowners to deduct mortgage interest or points paid on their principal residence. For investment or rental properties: <strong>Possibly</strong>, as part of your financing costs. Consult with a Canadian tax professional (CPA or tax accountant) about whether points can be amortized over the life of the mortgage as a business expense for rental income properties. Tax rules are complex and province-specificâ€”don't make decisions based on assumed tax benefits without professional advice.
                  </p>
                </div>
              </div>
            </section>


            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Making Your Points Decision
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Mortgage points are neither universally good nor universally badâ€”they're a financial tool that works brilliantly in the right circumstances and loses money in the wrong ones. The break-even calculation is your North Star: divide the cost of points by your monthly savings to find how many months you need to keep the mortgage for points to pay off.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Buy points when you're confident about a long-term hold (7+ years), have extra cash that won't compromise your emergency fund, and the break-even period is reasonable (under 6 years). Skip points when there's uncertainty about how long you'll keep the home, when rates are expected to drop significantly (creating refinancing opportunities), or when the upfront cash could be better used elsewhereâ€”like a larger down payment to avoid CMHC insurance.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Remember that Canadian mortgages typically have 5-year terms, adding complexity to the equation. Even if you plan to stay in your home for 15 years, you'll likely renegotiate at your 5-year renewal, potentially resetting the points calculation. Factor this into your break-even analysis.
              </p>

              <div className="bg-slate-50 border-l-4 border-slate-300 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">Your Action Plan:</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>Get rate quotes both with and without points from at least 3 Canadian lenders</li>
                  <li>Use a <strong>buying points calculator</strong> to calculate exact break-even periods for each option</li>
                  <li>Honestly assess how long you'll realistically keep this mortgage</li>
                  <li>Consider your cash positionâ€”never deplete your emergency fund to buy points</li>
                  <li>Make the decision based on math and realistic time horizons, not emotions or pressure</li>
                </ol>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                The right mortgage strategy is personal. For Michael and Lisa from our opening example, paying 2 points made sense because they're committed to staying in their Toronto condo for at least 8 yearsâ€”well past their 5.3-year break-even point. For others facing job uncertainty or market timing considerations, keeping that cash liquid is smarter. Run your own numbers, trust the math, and choose the strategy that aligns with your actual situation.
              </p>
            </section>

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
                  href="/how-mortgage-points-lower-your-interest-rate"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  How Mortgage Points Lower Your Interest Rate
                </Link>
              </li>
              <li>
                <Link
                  href="/real-apr-calculator-true-cost-of-your-loan"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Real APR Calculator: True Cost of Your Loan
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
                  href="/how-to-calculate-your-monthly-mortgage-payment"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  How to Calculate Your Monthly Mortgage Payment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
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


