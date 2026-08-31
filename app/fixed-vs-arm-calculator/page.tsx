"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, GitCompare } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

export default function FixedVsARMCalculatorPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = GitCompare;
  const title = "Fixed vs ARM Calculator";
  const description = [
    "Compare fixed-rate and adjustable-rate mortgages side-by-side to determine which loan type better aligns with your financial goals, risk tolerance, and homeownership timeline.",
    "Understand the trade-offs between ARM's lower initial rates and fixed-rate stability, helping you make an informed decision based on your specific circumstances."
  ];
  const howItWorks = [
    "This calculator compares fixed-rate and adjustable-rate mortgages (ARMs) to help you decide which loan type better suits your financial situation and timeline. ARMs typically offer lower initial rates that adjust periodically, while fixed-rate mortgages maintain the same rate throughout the loan term.",
    "Enter your loan amount, initial ARM rate, fixed rate, ARM adjustment period, rate caps, and how long you plan to stay in the home. The calculator projects payments under both scenarios, accounting for potential rate adjustments and market conditions.",
    "Results show side-by-side comparison of payments, total interest costs, and potential savings. ARMs can save money if you sell or refinance before rates adjust significantly, while fixed rates provide payment stability and protection against rising rates."
  ];
  const faqs = [
    {
      q: "What is an ARM and how does it work?",
      a: "An ARM (Adjustable-Rate Mortgage) has an interest rate that changes periodically based on market conditions. It typically starts with a lower fixed rate for an initial period (e.g., 5, 7, or 10 years), then adjusts annually. The rate has caps limiting how much it can increase per adjustment and over the loan's life."
    },
    {
      q: "When does an ARM make sense?",
      a: "ARMs work best when: you plan to sell or refinance within the fixed-rate period, expect income to increase, believe rates will stay stable or decrease, or the initial rate savings significantly outweigh the risk of future increases. They're popular with buyers planning 5-7 year stays."
    },
    {
      q: "What are rate caps on an ARM?",
      a: "Rate caps protect you from dramatic payment increases. There are three types: initial adjustment cap (first rate change limit), subsequent adjustment cap (later changes), and lifetime cap (maximum rate over loan life). A common structure is 2/2/5, meaning 2% max initial change, 2% subsequent, 5% lifetime."
    },
    {
      q: "How much can I save with an ARM?",
      a: "Initial savings depend on the rate difference. If a fixed rate is 7% and an ARM starts at 5.5%, you could save $200-400/month on a $300,000 loan during the fixed period. However, if rates rise significantly after adjustment, you could pay more long-term."
    },
    {
      q: "What happens if I sell before the ARM adjusts?",
      a: "If you sell or refinance before the initial fixed period ends, you capture all the ARM's savings without facing rate increases. This is the ideal scenario for ARM borrowers. Many people use ARMs strategically when they're confident about their timeline."
    }
  ];

  return (
    <>
      {/* Banner Ad */}
      <div className="mb-6 flex justify-center">
        <div className="rounded bg-slate-100 px-4 py-6 text-center text-sm text-slate-500">
          Advertisement (728×90)
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-8">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold text-indigo-600 sm:text-4xl">{title}</h1>
          </div>
          <div className="mb-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
          <div className="space-y-3 text-slate-600">
            <p className="text-base leading-relaxed sm:text-lg">{description[0]}</p>
            <p className="text-base leading-relaxed sm:text-lg">{description[1]}</p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-12">
        <MortgageCalculator category="arm" forcedSubcalculator="fixed-vs-arm" />
      </div>

      {/* How It Works Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">How It Works</h2>
          <div className="space-y-6">
            {howItWorks.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed vs ARM Educational Article */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <article className="mx-auto max-w-3xl prose prose-slate prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:text-slate-900 prose-h2:mb-6 prose-h2:mt-10 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-slate-900 prose-strong:font-semibold prose-ul:text-slate-600 prose-li:mb-2">
            
            <div className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
                Fixed vs ARM Mortgage: A Complete Comparison Guide
              </h2>
            </div>

            <p>
              When choosing between a fixed-rate mortgage and an adjustable-rate mortgage (ARM), you&apos;re making one of the most consequential financial decisions in home buying. This isn&apos;t merely a question of picking the loan with the lower rate today—it&apos;s about aligning your mortgage structure with your financial timeline, risk tolerance, and expectations about both your future and the interest rate environment.
            </p>

            <p>
              A fixed-rate mortgage locks your interest rate for the entire loan term, typically 15 or 30 years. Your principal and interest payment never changes, regardless of what happens in financial markets. An ARM starts with a fixed rate for an initial period—commonly 5, 7, or 10 years—then adjusts periodically based on market conditions. The initial ARM rate is typically lower than comparable fixed rates, sometimes by half a percentage point or more, translating to meaningful monthly savings during that fixed period.
            </p>

            <p>
              The calculator comparison helps you model both scenarios with your specific numbers, but understanding the mechanics, trade-offs, and decision framework matters more than any single calculation. Your choice depends on how long you plan to stay in the home, your ability to handle payment uncertainty, and whether you&apos;re willing to accept future rate risk in exchange for immediate savings.
            </p>

            <h2>Understanding Fixed-Rate Mortgages</h2>

            <p>
              Fixed-rate mortgages offer complete payment predictability. Your interest rate is set at closing and never changes. If you lock a 6.5% rate on a $400,000 loan, your principal and interest payment stays constant for 30 years, whether market rates rise to 9% or fall to 4%. Property taxes and insurance may fluctuate, but your mortgage payment remains stable.
            </p>

            <p>
              This stability provides powerful financial planning advantages. You know exactly what your housing cost will be in year five, year fifteen, and year thirty. You&apos;re protected if rates spike—a borrower who locked 3% in 2021 avoided the rate increases that followed. You never face payment shock or need to refinance because your rate became unaffordable. For many borrowers, this certainty justifies paying a premium over initial ARM rates.
            </p>

            <p>
              Fixed rates particularly benefit those planning long-term homeownership (10+ years), borrowers with limited income growth expectations, households operating near their maximum comfortable payment, and anyone prioritizing budget certainty over initial savings. If you&apos;re buying your &quot;forever home&quot; or lack confidence in your ability to refinance or sell within 7-10 years, fixed rates reduce risk substantially.
            </p>

            <p>
              The trade-off is higher initial cost. Fixed rates reflect lenders pricing in decades of interest rate risk. When you choose fixed, you pay for that certainty through a rate premium. If you sell or refinance within a few years, you&apos;ve paid extra for protection you didn&apos;t ultimately need.
            </p>

            <h2>Understanding Adjustable-Rate Mortgages</h2>

            <p>
              An ARM features an interest rate that changes over time, but not randomly—it follows a specific structure with consumer protections built in. The most common ARM structures are 5/1, 7/1, and 10/1, where the first number indicates how many years the initial rate stays fixed, and the second number indicates how frequently the rate adjusts after that initial period.
            </p>

            <p>
              A 5/1 ARM, for example, maintains your initial rate for five years, then adjusts annually thereafter. During those first five years, your ARM payment behaves identically to a fixed-rate mortgage—you pay the same principal and interest amount monthly, just at a lower rate than fixed-rate equivalents. After year five, your rate recalculates based on a predetermined index plus a margin specified in your loan agreement.
            </p>

            <p>
              The adjustment mechanism typically ties to the Secured Overnight Financing Rate (SOFR) or another market index, plus a lender margin (commonly 2-3%). If SOFR is 4.5% and your margin is 2.5%, your adjusted rate becomes 7%. This adjustment happens at specified intervals—annually for most ARMs—with your payment changing accordingly. Importantly, your rate can decrease if the index falls, though most borrowers focus on worst-case increases when evaluating ARM risk.
            </p>

            <p>
              Rate caps protect you from unlimited payment shock. ARM caps typically follow a 2/2/5 structure (though variations exist). The first number caps your initial adjustment—if you have a 5% starting rate, it can&apos;t exceed 7% at the first adjustment two years later. The second number limits subsequent annual adjustments—your rate can&apos;t jump more than 2% in any single year. The third number represents the lifetime cap—your rate can never exceed 5% above your initial rate, capping you at 10% in this example.
            </p>

            <p>
              Understanding these caps is critical for risk assessment. If you start with a 6% ARM with 2/2/5 caps, your maximum possible rate is 11%, and you can calculate exactly what that payment would be. This represents your worst-case scenario—rates could rise less or even fall, but you know your maximum exposure. Before choosing an ARM, calculate this maximum payment and confirm it fits your budget with comfortable margin.
            </p>

            <h2>Comparing Initial Rates and Payments</h2>

            <p>
              The immediate financial difference between fixed and ARM loans appears in your monthly payment during the ARM&apos;s initial fixed period. Rate differences vary based on market conditions, but ARM initial rates commonly run 0.5% to 1% below comparable fixed rates. On a $400,000 loan, a 1% rate difference translates to roughly $240 per month in savings during the initial period.
            </p>

            <p>
              These monthly savings compound over the initial period. Saving $240 monthly for five years on a 5/1 ARM versus a 30-year fixed means $14,400 in reduced housing costs during that time. If you sell or refinance before adjustments begin, you&apos;ve captured these savings with no downside. This creates the fundamental ARM value proposition: meaningful cost reduction during the period that matters most if your timeline is short.
            </p>

            <p>
              Break-even analysis helps quantify this trade-off. If the ARM saves you $14,400 over five years but potentially costs you $8,000 more in years six and seven before you sell, you&apos;re still ahead by $6,400. However, if you stay beyond seven years and rates remain elevated, cumulative excess payments could exceed initial savings. The longer you stay past the initial period, the more likely fixed-rate protection proves valuable.
            </p>

            <p>
              APR (Annual Percentage Rate) provides limited value in fixed versus ARM comparisons because ARM APRs must make assumptions about future rate adjustments. Lenders typically calculate ARM APR assuming the rate stays at the initial level, which understates potential future cost. Focus on payment comparisons in multiple rate scenarios rather than relying on stated APR.
            </p>

            <h2>Lifetime Payment Risk and Scenarios</h2>

            <p>
              Evaluating an ARM requires modeling multiple scenarios rather than assuming one outcome. Consider three cases: best case (rates fall or stay low), likely case (moderate rate increases), and worst case (maximum rate cap reached).
            </p>

            <p>
              In the best-case scenario, market rates decline or stay flat after your initial period. Your ARM adjusts to a rate equal to or below what you started with. You continue paying less than a fixed-rate borrower would have paid, capturing savings throughout the loan term. This scenario occurred for borrowers who took ARMs in the 1990s and early 2000s, benefiting from declining rate environments.
            </p>

            <p>
              The likely case involves moderate rate increases. If you start with a 5.5% ARM and rates rise modestly, your rate might adjust to 6.5% or 7% after the initial period. Your payment increases, but remains manageable and potentially still competitive with what fixed rates were when you originated the loan. You&apos;ve captured years of savings and accept moderate payment increases as the trade-off.
            </p>

            <p>
              The worst-case scenario involves rates rising to your lifetime cap, creating maximum payments. If your 5% initial rate ARM has a 5% lifetime cap, your rate could reach 10% when adjustments begin. On a $400,000 loan, the difference between 5% and 10% represents roughly $1,900 in additional monthly payment—a dramatic increase that could strain your budget severely or force refinancing or sale under unfavorable conditions.
            </p>

            <p>
              Lenders typically qualify you for an ARM based on the initial rate, not the maximum potential rate. This means you might face payment shock if rates reach maximum caps and your income hasn&apos;t grown proportionally. Before choosing an ARM, calculate what your maximum payment would be at the lifetime cap and honestly assess whether you could afford it. If the maximum payment would exceed 35-40% of your gross income or severely restrict other financial goals, the ARM carries too much risk for your situation.
            </p>

            <p>
              Rate environment considerations matter, though predicting rates is notoriously difficult. If rates are historically high, ARM risk is lower because rates have more room to fall than rise. If rates are historically low, ARMs carry more risk because rates have more room to rise. However, attempting to time rate movements is speculative—base your decision primarily on your timeline and risk tolerance rather than rate predictions.
            </p>

            <h2>Hypothetical Calculation Examples</h2>

            <p>
              To illustrate the fixed versus ARM comparison, let&apos;s examine two hypothetical scenarios. These examples use realistic assumptions but represent illustrative calculations rather than actual rates or guaranteed outcomes.
            </p>

            <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 my-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Hypothetical Example 1: 5/1 ARM vs 30-Year Fixed ($400,000 loan)</h3>
              
              <p className="text-slate-700 mb-4">
                Consider a borrower purchasing a $500,000 home with 20% down, financing $400,000. They&apos;re comparing:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>30-year fixed rate: 7.00% (hypothetical)</li>
                <li>5/1 ARM initial rate: 6.00% (hypothetical)</li>
                <li>ARM caps: 2/2/5 (first adjustment +2% max, subsequent +2% max, lifetime +5% max)</li>
                <li>Property taxes: $500/month</li>
                <li>Insurance: $150/month</li>
              </ul>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">30-Year Fixed Scenario:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Monthly P&I: $2,661</li>
                  <li>Total monthly payment (PITI): $3,311</li>
                  <li>Payment remains constant for entire 30 years</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">5/1 ARM Scenario - Initial Period (Years 1-5):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Monthly P&I: $2,398</li>
                  <li>Total monthly payment (PITI): $3,048</li>
                  <li>Monthly savings vs fixed: $263</li>
                  <li>Five-year cumulative savings: $15,780</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">5/1 ARM Scenario - After First Adjustment (Year 6):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Best case (rates fall): Rate adjusts to 5.5%, payment decreases</li>
                  <li>Likely case: Rate adjusts to 8.0% (initial + 2% cap), P&I becomes $2,935, total payment $3,585</li>
                  <li>Worst case (year 7+): Rate reaches 11% (lifetime cap), P&I becomes $3,762, total payment $4,412</li>
                </ul>
              </div>

              <p className="text-slate-700 mb-3">
                <strong>Analysis:</strong> If this borrower sells or refinances within five years, they save $15,780 with no downside. If they stay through year six with rates rising 2%, they begin paying $274 more monthly than the fixed option, eroding previous savings over roughly 58 months. If rates hit the maximum cap, monthly costs exceed fixed by $1,101, making the ARM significantly more expensive within two years of adjustment.
              </p>

              <p className="text-slate-700">
                This borrower should choose the ARM if: they&apos;re confident they&apos;ll sell or refinance within 5-7 years, their income will grow substantially, or they can comfortably afford the maximum payment of $4,412. They should choose fixed if: they plan to stay longer than 7 years, budget stability is paramount, or the maximum payment would create financial stress.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 my-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Hypothetical Example 2: 7/1 ARM vs 30-Year Fixed ($600,000 loan)</h3>
              
              <p className="text-slate-700 mb-4">
                Consider a borrower financing $600,000 on a $750,000 home with 20% down:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>30-year fixed rate: 6.75% (hypothetical)</li>
                <li>7/1 ARM initial rate: 5.75% (hypothetical)</li>
                <li>ARM caps: 2/2/5</li>
                <li>Property taxes: $900/month</li>
                <li>Insurance: $250/month</li>
              </ul>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">30-Year Fixed Scenario:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Monthly P&I: $3,892</li>
                  <li>Total monthly payment (PITI): $5,042</li>
                  <li>Constant payment for 30 years</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">7/1 ARM Scenario - Initial Period (Years 1-7):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Monthly P&I: $3,501</li>
                  <li>Total monthly payment (PITI): $4,651</li>
                  <li>Monthly savings vs fixed: $391</li>
                  <li>Seven-year cumulative savings: $32,844</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">7/1 ARM Scenario - After Adjustment (Year 8+):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Best case: Rate drops to 5.25%, payment decreases further</li>
                  <li>Likely case: Rate adjusts to 7.75% (initial + 2%), P&I becomes $4,304, total payment $5,454</li>
                  <li>Worst case (year 9+): Rate reaches 10.75% (lifetime cap), P&I becomes $5,605, total payment $6,755</li>
                </ul>
              </div>

              <p className="text-slate-700 mb-3">
                <strong>Analysis:</strong> This borrower saves $32,844 over seven years with the ARM. If they exit before year seven, they capture these savings entirely. If they stay and rates rise to the first adjustment cap (7.75%), they begin paying $412 more monthly than fixed, requiring 80 months of higher payments to erase previous savings. If rates hit the lifetime cap, monthly costs exceed fixed by $1,713, eliminating previous savings in under 20 months.
              </p>

              <p className="text-slate-700">
                This borrower should choose the ARM if: they&apos;re nearly certain they&apos;ll sell or refinance within 7-10 years (career relocation, planned upgrade, high-appreciation market), their income trajectory is strongly positive, or maximum payments fit comfortably within their budget. They should choose fixed if: they&apos;re unsure about their timeline, the maximum payment of $6,755 would strain their finances, or they prioritize payment certainty over savings.
              </p>
            </div>

            <h2>Decision Framework: Which Makes Sense for You?</h2>

            <p>
              Your personal timeline represents the single most important factor in this decision. ARMs reward short-term owners; fixed rates reward long-term owners. The crossover point typically falls around years 7-10, varying with the specific rate differential and caps.
            </p>

            <p>
              <strong>If your timeline is under 5 years,</strong> ARMs generally make financial sense unless you have extreme risk aversion. You&apos;ll capture meaningful savings during a period where adjustment risk doesn&apos;t apply. You&apos;re essentially getting a fixed-rate mortgage at a discount for the timeframe you actually need it.
            </p>

            <p>
              <strong>If your timeline is 5-10 years,</strong> the decision becomes more nuanced. You&apos;ll capture initial savings but may face some adjustment period. Model scenarios carefully. Calculate break-even points—how long would higher adjusted payments take to erase your initial savings? If break-even extends beyond your likely exit, the ARM wins. If adjustment risks creating financial stress, fixed rates provide better insurance.
            </p>

            <p>
              <strong>If your timeline exceeds 10 years,</strong> fixed rates generally provide better value and risk management. The cumulative impact of potential rate adjustments over 20+ years can dwarf initial savings, and you&apos;re exposed to rate environments you can&apos;t predict. The payment certainty and refinancing optionality of fixed rates outweigh ARM savings for long-term owners.
            </p>

            <p>
              Addressing common questions that borrowers face:
            </p>

            <p>
              <strong>Is a 7-year ARM a good idea right now?</strong> The answer depends entirely on your specific timeline and risk tolerance rather than current market conditions. If you&apos;re confident you&apos;ll exit within 7-10 years and can afford maximum payments at the lifetime cap, a 7/1 ARM can save substantial money during the initial period. However, no one can predict where rates will be in seven years. If you need long-term payment certainty, current market conditions don&apos;t make an ARM &quot;good&quot; or &quot;bad&quot;—they make it inappropriate for your situation regardless of rates.
            </p>

            <p>
              <strong>Is an ARM better than a fixed mortgage?</strong> Neither is universally &quot;better&quot;—each serves different borrower situations. ARMs excel for short-term owners and those accepting rate risk for immediate savings. Fixed mortgages excel for long-term owners and those prioritizing payment stability. &quot;Better&quot; depends on whether your priorities align with the loan&apos;s structure.
            </p>

            <p>
              <strong>What is the 2-2-2 rule for mortgages?</strong> This refers to a common ARM rate cap structure (more precisely written as 2/2/5 or similar). The first &quot;2&quot; limits how much your rate can increase at the first adjustment—typically 2 percentage points. The second &quot;2&quot; caps subsequent annual adjustments—also usually 2 points per year. The final number (often 5) represents the lifetime maximum increase above your initial rate. If you have a 5% initial rate with 2/2/5 caps, your rate can&apos;t exceed 10% even if market rates soar higher.
            </p>

            <p>
              <strong>What are 10-year ARM rates right now?</strong> Current rates vary daily based on market conditions, credit profiles, lenders, and loan characteristics. Rather than seeking a specific number that will be outdated quickly, check with multiple lenders for current rate sheets and compare their 10/1 ARM offerings to 30-year fixed rates. The rate differential and your specific timeline should drive your decision, not whether a rate hits a particular number.
            </p>

            <p>
              Before finalizing your choice, model both scenarios with your actual loan amount and rate quotes. Calculate the maximum ARM payment at lifetime caps and confirm you could afford it without severe financial strain. Consider your income stability and growth expectations. If you&apos;re risk-averse or the maximum payment would challenge your budget, the fixed rate&apos;s certainty justifies its cost. If you&apos;re confident about a short timeline or comfortable with payment variability, the ARM&apos;s initial savings can be substantial.
            </p>

            <p>
              Consult with your lender about specific ARM terms, adjustment mechanisms, and cap structures—these vary by loan program and lender. Some ARMs feature more favorable caps or longer initial periods that might shift your analysis. Understanding the specific terms of your ARM offer is as important as understanding ARM structures generally.
            </p>

            <p>
              Consult with your lender about specific ARM terms, adjustment mechanisms, and cap structures—these vary by loan program and lender. Some ARMs feature more favorable caps or longer initial periods that might shift your analysis. Understanding the specific terms of your ARM offer is as important as understanding ARM structures generally.
            </p>

          </article>
        </div>
      </section>

      
      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="border-t border-slate-100 px-6 py-4">
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
