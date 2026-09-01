"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, DollarSign } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

export default function PayingPointsCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = DollarSign;
  const title = "Paying Points Calculator";
  const description = [
    "Calculate whether paying discount points at closing makes financial sense for your situation.",
    "A paying points calculator helps you determine the break-even period and long-term savings from buying down your interest rate."
  ];
  const howItWorks = [
    "This calculator helps you determine whether paying discount points at closing makes financial sense for your mortgage. Discount points are upfront fees paid to the lender to 'buy down' your interest rate—each point typically costs 1% of the loan amount and reduces your rate by approximately 0.25%.",
    "Enter your loan amount, interest rates with and without points, the cost of points, and how long you plan to keep the loan. The calculator determines your break-even point—the number of months until your monthly savings from the lower rate equal the upfront cost of the points.",
    "Results show your break-even timeline, total interest savings over the loan term, and whether paying points makes sense based on your ownership timeline. Points work best for borrowers planning long-term ownership, while those selling or refinancing within a few years typically shouldn't pay points."
  ];
  const faqs = [
    {
      q: "What are mortgage discount points?",
      a: "Discount points are upfront fees paid to lenders at closing to reduce your interest rate. One point costs 1% of your loan amount and typically lowers your rate by 0.25%. For example, on a $300,000 loan, one point costs $3,000 and might reduce your rate from 7% to 6.75%."
    },
    {
      q: "How do I calculate if paying points is worth it?",
      a: "Calculate your break-even point by dividing the cost of points by your monthly payment savings. If points cost $3,000 and save you $50/month, your break-even is 60 months (5 years). If you keep the loan longer than the break-even period, points save money; if you sell or refinance sooner, you lose money."
    },
    {
      q: "When should I pay discount points?",
      a: "Pay points when you plan to keep the loan long past the break-even point, typically 7+ years. Points work best for long-term owners in low-rate environments. Avoid points if you might sell, refinance, or pay off the loan within a few years—you won't recoup the upfront cost."
    },
    {
      q: "How much would a borrower pay for 2 discount points on a $150,000 mortgage?",
      a: "2 discount points on a $150,000 mortgage would cost $3,000 (2% of $150,000). Each point costs 1% of the loan amount. These points would typically reduce your interest rate by approximately 0.50%, though the exact rate reduction depends on current market conditions and lender pricing."
    },
    {
      q: "What does 1.5 points mean on a mortgage?",
      a: "1.5 points means you're paying 1.5% of your loan amount upfront to buy down your interest rate. On a $200,000 loan, 1.5 points costs $3,000. This typically reduces your rate by about 0.375% (1.5 × 0.25%), though exact reductions vary by lender and market conditions."
    },
    {
      q: "Are mortgage points tax deductible?",
      a: "Generally yes, if you paid points to obtain a mortgage on your primary residence and meet IRS requirements. Points are typically deductible in the year paid for purchase mortgages, but must be amortized over the loan term for refinances. Consult a tax professional for your specific situation."
    },
    {
      q: "Is 1 point worth refinancing?",
      a: "A 1-point rate reduction (1% lower rate, not 1 discount point) is almost always worth refinancing if you plan to keep the loan long enough to break even on closing costs. However, 1 discount point (0.25% rate reduction) may or may not justify refinancing—calculate your break-even timeline and compare to how long you'll keep the new loan."
    }
  ];

  return (
    <>
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
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-8 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
            <Icon className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-indigo-600 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
        <div className="mb-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
        <div className="space-y-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Calculator */}
      <div className="mx-auto max-w-[1400px] px-6 pb-12 sm:px-8 lg:px-12">
        <MortgageCalculator category="savings" forcedSubcalculator="points" />
      </div>

      {/* How It Works */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">How It Works</h2>
          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            {howItWorks.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Article */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <article className="prose prose-slate mx-auto max-w-3xl prose-headings:font-serif prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
            <h1 className="text-center">Understanding Mortgage Discount Points: How to Calculate If Paying Points Is Worth It</h1>

            <p>
              Mortgage discount points represent one of the most misunderstood aspects of home financing, yet they can significantly impact your borrowing costs over the loan term. When you're comparing loan offers and see references to a buying points calculator or loan points calculator, you're encountering a fundamental trade-off: pay more money upfront to reduce your interest rate and monthly payment, or keep your cash and accept a higher rate. Understanding when paying points makes sense—and when it doesn't—requires careful calculation and honest assessment of how long you'll keep the loan.
            </p>

            <p>
              A discount point is a fee paid to the lender at closing to "buy down" your interest rate. Each point typically costs 1% of your loan amount and reduces your interest rate by approximately 0.25%, though the exact rate reduction varies based on market conditions, loan type, and lender pricing models. On a $300,000 mortgage, one point costs $3,000 upfront. If that point reduces your rate from 7.00% to 6.75%, you save roughly $50 per month on your payment. Whether this trade-off makes financial sense depends entirely on how long you keep the loan and what else you could do with that $3,000.
            </p>

            <h2>What Are Discount Points and How Do They Work?</h2>

            <p>
              When lenders quote mortgage rates, they're typically offering a base rate with zero points and potentially offering lower rates if you pay points upfront. A paying points calculator helps you evaluate whether this trade-off makes sense. The fundamental concept is straightforward: you're prepaying some of your interest in exchange for a lower rate throughout the loan term.
            </p>

            <p>
              Each discount point costs exactly 1% of your loan amount. On a $200,000 mortgage, one point costs $2,000. On a $500,000 loan, one point costs $5,000. The rate reduction you receive per point depends on market conditions and lender pricing, but 0.25% per point is a common benchmark. Some lenders might offer 0.20% or 0.30% per point depending on the loan program, your credit profile, and current market dynamics.
            </p>

            <p>
              It's crucial to distinguish discount points from origination points or lender fees. Discount points specifically reduce your interest rate and are sometimes tax-deductible. Origination points are lender fees for processing your loan and don't reduce your rate—they're simply additional charges. When using a loan points calculator, make sure you're evaluating true discount points that lower your rate, not fees disguised as "points."
            </p>

            <h2>The Break-Even Point: How to Calculate If Paying Points Is Worth It</h2>

            <p>
              The most critical calculation when considering discount points is your break-even timeline—the point at which your cumulative monthly savings equal the upfront cost of the points. This calculation determines whether paying points makes financial sense for your situation.
            </p>

            <p>
              <strong>Break-Even Formula:</strong> Cost of Points ÷ Monthly Payment Savings = Break-Even Period (in months)
            </p>

            <p>
              <strong>Example Calculation:</strong> Consider a $300,000 mortgage with two scenarios:
            </p>

            <div className="my-8 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-6">
              <h3 className="mb-4 mt-0 text-lg font-semibold text-slate-900">Break-Even Example: $300,000 Mortgage</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span className="font-medium">Scenario A (No Points):</span>
                  <span></span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex justify-between">
                    <span>Interest Rate:</span>
                    <span className="font-mono">7.00%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Payment (P&I):</span>
                    <span className="font-mono">$1,996</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Upfront Cost:</span>
                    <span className="font-mono">$0</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <span className="font-medium">Scenario B (1 Point):</span>
                  <span></span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex justify-between">
                    <span>Interest Rate:</span>
                    <span className="font-mono">6.75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Payment (P&I):</span>
                    <span className="font-mono">$1,946</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Upfront Cost:</span>
                    <span className="font-mono">$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Savings:</span>
                    <span className="font-mono font-semibold text-green-600">$50</span>
                  </div>
                  <div className="flex justify-between border-t border-indigo-200 pt-2 mt-2">
                    <span className="font-semibold">Break-Even:</span>
                    <span className="font-mono font-semibold text-indigo-600">60 months (5 years)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Total 30-Year Savings:</span>
                    <span className="font-mono font-semibold text-green-600">~$18,000</span>
                  </div>
                </div>
              </div>
            </div>

            <p>
              In this example, if you keep the mortgage for more than 60 months, paying one point saves money. If you sell or refinance within 60 months, you lose money on the points. After 5 years, every dollar of monthly savings is pure profit on your initial $3,000 investment. Over a 30-year loan term, that one point saves approximately $18,000 in total interest ($50/month × 360 months).
            </p>

            <h2>When Paying Discount Points Makes Sense</h2>

            <p>
              Paying points works best in specific situations where the circumstances align to maximize the value of your upfront investment. A buying points calculator reveals whether your situation fits these criteria.
            </p>

            <p>
              <strong>Long-Term Homeownership Plans:</strong> If you're confident you'll keep the property and loan well past the break-even point—typically 7+ years—paying points generates substantial savings. Buyers purchasing their "forever home" or planning to stay in a location for career or family reasons are ideal candidates for paying points.
            </p>

            <p>
              <strong>Low-Rate Environment:</strong> When interest rates are historically low, buying them even lower through points can lock in incredible financing costs for decades. A small rate reduction from 3.75% to 3.50% might not seem dramatic, but over 30 years on a large loan, it creates massive savings.
            </p>

            <p>
              <strong>High Income and Tax Bracket:</strong> If you're in a high tax bracket and the points are tax-deductible, the after-tax cost of points is lower, improving your effective break-even timeline. However, tax law changes have limited mortgage interest and points deductions, so consult a tax professional about your specific situation.
            </p>

            <p>
              <strong>Cash-Rich, Payment-Sensitive Situation:</strong> If you have substantial cash reserves but need to minimize monthly housing costs (perhaps to qualify for the loan or maintain comfortable cash flow), paying points reduces your monthly obligation while you still have plenty of liquidity.
            </p>

            <h2>When to Avoid Paying Points</h2>

            <p>
              Conversely, paying points can be a poor financial decision in several common scenarios. Understanding when not to pay points is just as important as knowing when to pay them.
            </p>

            <p>
              <strong>Short-Term Ownership or Refinance Likelihood:</strong> If there's any chance you'll sell or refinance within a few years, paying points typically doesn't make sense. Life circumstances change—job relocations, family size changes, divorce, financial windfalls allowing payoff—and points only benefit those who keep the loan long-term.
            </p>

            <p>
              <strong>Limited Cash Reserves:</strong> If paying points depletes your emergency fund or forces you to make a smaller down payment (triggering PMI), the math doesn't work. Protecting your liquidity often matters more than a small rate reduction, especially for newer homeowners facing unexpected repair costs.
            </p>

            <p>
              <strong>Rising Rate Environment with Refinance Potential:</strong> If rates are high and expected to decline, paying points on an expensive loan you'll likely refinance within 2-3 years wastes money. Better to accept the higher rate temporarily and refinance when rates drop.
            </p>

            <p>
              <strong>Investment Opportunity Cost:</strong> If you can invest the money elsewhere at returns exceeding your mortgage rate, paying points may not be your best use of capital. For example, if your mortgage rate is 6.5% but you can reliably earn 8-10% in investments, keeping the higher rate and investing the cash might generate better returns.
            </p>

            <h2>Tax Deductibility and Other Considerations</h2>

            <p>
              One advantage of discount points is potential tax deductibility, which can improve the effective cost of buying down your rate. For purchase mortgages on your primary residence, discount points are generally fully deductible in the year paid if you meet IRS requirements. For refinances, points must be amortized over the loan term. However, you can only benefit from points deductibility if you itemize deductions rather than taking the standard deduction.
            </p>

            <h2>How Much Would a Borrower Pay for 2 Discount Points on a $150,000 Mortgage?</h2>

            <p>
              This common question illustrates the straightforward math of discount points. Two points equal 2% of the loan amount. On a $150,000 mortgage, 2 points cost exactly $3,000 (2% × $150,000).
            </p>

            <p>
              Those 2 points would typically reduce your interest rate by approximately 0.50% (2 points × 0.25% per point). If the base rate is 7.00%, paying 2 points might lower your rate to 6.50%. On a $150,000 loan over 30 years, this rate reduction saves roughly $47 per month, creating a break-even period of about 64 months (5.3 years). After that break-even point, you save approximately $16,920 over the remaining loan term.
            </p>

            <h2>Key Takeaways for Paying Points Decisions</h2>

            <p>
              Use a paying points calculator to determine your break-even timeline based on your specific loan amount, rate reduction, and point cost. If you're confident you'll keep the loan well beyond the break-even period, paying points generates real savings.
            </p>

            <p>
              Consider your complete financial picture. If paying points depletes your emergency fund, forces a smaller down payment, or prevents you from investing in higher-return opportunities, the decision may not make sense despite favorable break-even math.
            </p>

            <p>
              Be honest about your timeline. Life circumstances change, and flexibility has value. If there's meaningful uncertainty about how long you'll keep the loan, the guaranteed lower rate from paying points becomes less attractive compared to the flexibility of keeping your cash.
            </p>

            <p>
              Remember that points are negotiable. If a lender's point pricing seems unfavorable (like only 0.15% reduction per point), shop other lenders. Point pricing varies significantly between lenders based on their pricing models and current inventory of loans.
            </p>

            <p>
              Finally, ensure that paying points is a conscious strategic decision based on careful analysis, not something you accept passively because a lender suggests it. A loan points calculator provides the mathematical framework, but you must honestly assess your situation, timeline, and opportunity costs to make the right decision for your financial future.
            </p>

          </article>
        </div>
      </section>

      
      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
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
