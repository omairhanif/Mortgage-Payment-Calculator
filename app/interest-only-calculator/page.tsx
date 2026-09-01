"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Percent } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

export default function InterestOnlyCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = Percent;
  const title = "Interest-Only Mortgage Calculator";
  const description = [
    "Calculate monthly payments and total costs for an interest-only mortgage, where you pay only interest for a set period before transitioning to full principal and interest payments.",
    "Understand how interest-only periods affect your payment structure, equity building, and long-term loan costs compared to traditional amortizing mortgages."
  ];
  const howItWorks = [
    "This calculator shows the payment structure and long-term costs of an interest-only mortgage, where you pay only interest for an initial period (typically 5-10 years) before transitioning to fully amortizing payments that include both principal and interest.",
    "Enter your loan amount, interest rate, interest-only period length, and total loan term. The calculator shows your lower interest-only payment during the initial period, then the significantly higher payment when principal repayment begins.",
    "Results display the total interest paid, payment increase after the interest-only period ends, and comparison to a traditional mortgage. Interest-only loans can provide short-term cash flow flexibility but result in higher total interest costs and payment shock when amortization begins."
  ];
  const faqs = [
    {
      q: "What is an interest-only mortgage?",
      a: "An interest-only mortgage allows you to pay only the interest portion for a set period (usually 5-10 years), with no principal reduction. After this period, payments increase significantly as you begin paying both principal and interest to fully repay the loan over the remaining term."
    },
    {
      q: "Who should consider an interest-only mortgage?",
      a: "These loans suit buyers expecting significant income increases, investors with rental properties seeking cash flow, or those planning to sell before the interest-only period ends. They're risky for buyers counting on home appreciation or uncertain future income."
    },
    {
      q: "How much will my payment increase?",
      a: "Payment increases can be substantial - often 30-50% or more. For example, a $400,000 loan at 7% might have interest-only payments of $2,333, jumping to $3,200+ when full amortization begins. The shorter the remaining term, the higher the increase."
    },
    {
      q: "Do I build any equity with interest-only payments?",
      a: "No equity builds through loan paydown during the interest-only period - your loan balance stays the same. Equity only increases through home appreciation. This makes you vulnerable to market downturns and limits refinancing options if home value decreases."
    },
    {
      q: "Can I make principal payments during the interest-only period?",
      a: "Yes, most loans allow voluntary principal payments during the interest-only period. This reduces your balance, lowers future payments, and builds equity. However, if you can afford extra payments, consider whether an interest-only loan is the right choice."
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
        <MortgageCalculator category="arm" forcedSubcalculator="interest-only" />
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

      {/* Educational Article - Complete content from ARM page */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <article className="mx-auto max-w-3xl prose prose-slate prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:text-slate-900 prose-h2:mb-6 prose-h2:mt-10 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-slate-900 prose-strong:font-semibold prose-ul:text-slate-600 prose-li:mb-2">
            <div className="mb-8">
              <h2 className="!mt-0">Interest-Only Loans: How They Work and What They Cost</h2>
            </div>

            <p>
              When evaluating an interest-only loan, you're choosing a payment structure that prioritizes immediate cash flow over long-term debt reduction. For an initial period—typically 5 to 10 years—you pay only the interest that accrues each month, with no reduction in your principal balance. Your loan balance stays exactly the same until the interest-only period ends, at which point your payment recalculates to include both principal and interest over the remaining loan term.
            </p>

            <p>
              Interest-only loans serve specific financial situations: real estate investors seeking to maximize cash flow, high-income borrowers expecting substantial future earnings growth, or buyers planning to sell before the interest-only period expires. They're not designed for typical homeowners seeking stable, predictable payments. The structure trades lower initial costs for higher total interest expense and eventual payment shock when full amortization begins.
            </p>

            <p>
              This calculator helps you model the payment structure, understand the financial implications of deferred principal repayment, and compare interest-only scenarios to traditional mortgages. Whether you're considering an interest-only mortgage, evaluating voluntary principal payments during the interest-only period, or comparing to a HELOC or line of credit, understanding the mathematics and long-term costs is essential before committing to this loan structure.
            </p>

            <h2>Understanding Interest-Only Loans</h2>

            <p>
              An interest-only loan allows you to pay only the interest that accumulates on your loan balance each month, with no mandatory principal reduction during the interest-only period. If you borrow $400,000 at 7% annual interest, you pay $2,333 monthly (the interest) but your loan balance remains $400,000 throughout the interest-only period. Unlike traditional mortgages where each payment gradually reduces your debt, interest-only payments don't build equity through loan paydown—equity only increases if your property appreciates.
            </p>

            <p>
              Interest-only periods typically last 5 to 10 years, though some loans offer shorter or longer terms depending on the lender and loan type. During this period, your required payment covers only interest, though most loans permit voluntary principal payments if you choose. When the interest-only period ends, the loan recalculates payments to fully amortize the remaining balance over the remaining term. This transition creates significant payment increases—often 30% to 50% or more—as you begin paying both principal and interest.
            </p>


            <p>
              Real estate investors commonly use interest-only mortgages on rental properties to maximize cash flow. Lower monthly payments improve rental income margins, and investors often plan to sell or refinance before amortization begins. High-income professionals expecting substantial income growth—such as doctors completing residency or executives with deferred compensation—may use interest-only periods to manage cash flow during lower-earning years, then handle higher payments when income increases. Buyers planning short-term ownership (3-7 years) sometimes choose interest-only loans to minimize near-term housing costs, intending to sell before payment increases occur. However, these strategies assume favorable market conditions, income growth, and exit options that may not materialize.
            </p>

            <h2>How Interest-Only Payments Are Calculated</h2>

            <p>
              The interest-only payment formula for mortgages is straightforward: divide your annual interest cost by 12 months. The formula is:
            </p>

            <p className="text-center">
              <strong>Monthly Interest-Only Payment = (Loan Amount × Annual Interest Rate) ÷ 12</strong>
            </p>

            <p>
              For a $400,000 loan at 7% annual interest:
            </p>

            <ul>
              <li>Annual interest = $400,000 × 0.07 = $28,000</li>
              <li>Monthly payment = $28,000 ÷ 12 = $2,333.33</li>
            </ul>

            <p>
              This $2,333 payment remains constant during the interest-only period because your loan balance doesn't change. You're paying the same interest on the same principal amount each month. Unlike amortizing loans where your payment is constant but the interest vs. principal split changes over time, interest-only payments are purely interest with no principal component.
            </p>

            <p>
              This formula applies to fixed-rate interest-only mortgages. If you have a $500,000 loan at 6.5% interest, your monthly interest-only payment is ($500,000 × 0.065) ÷ 12 = $2,708.33. If your rate is 8%, the payment is ($500,000 × 0.08) ÷ 12 = $3,333.33. The calculation is linear—your payment scales directly with loan amount and rate.
            </p>

            <p>
              HELOCs and lines of credit use similar calculations but with important differences. Most HELOCs have variable interest rates tied to prime rate or another index, so your payment fluctuates as rates change. You only pay interest on your outstanding balance, which can vary if you draw additional funds or make principal payments. If you have a $100,000 HELOC at 8.5% with a $75,000 balance, your monthly interest is ($75,000 × 0.085) ÷ 12 = $531.25. If you draw another $10,000, your new balance of $85,000 generates monthly interest of ($85,000 × 0.085) ÷ 12 = $602.08. The flexibility and variability distinguish HELOC calculations from fixed-balance interest-only mortgages.
            </p>

            <p>
              Interest-only mortgages use simple interest, not compound interest. Simple interest calculates each month's charge based solely on your principal balance—there's no &quot;interest on interest.&quot; Compound interest, where unpaid interest is added to your balance and itself accrues interest, is uncommon in U.S. residential mortgages but appears in some consumer loans and investment products. When searching for &quot;compound interest-only calculator&quot; versus &quot;simple interest-only calculator,&quot; ensure you're using the appropriate tool for your loan type. Residential mortgages almost always use simple interest calculations.
            </p>


            <h2>What Happens When the Interest-Only Period Ends</h2>

            <p>
              When your interest-only period expires, the loan recalculates your payment to fully amortize the remaining balance over the remaining term. This is where payment shock occurs—your payment can increase dramatically because you're now paying both principal and interest, and you have fewer years to pay off the debt.
            </p>

            <p>
              Consider a $400,000 loan at 7% with a 10-year interest-only period on a 30-year total term. During the first 10 years, you pay $2,333 monthly (interest only). After year 10, the full $400,000 balance must be repaid over the remaining 20 years at 7%. Using standard amortization formulas, your new payment is approximately $3,101 per month—a $768 increase (33% higher). You're not just adding principal repayment; you're compressing 30 years of principal paydown into 20 years, which drives the higher payment.
            </p>


            <p>
              When the interest-only period ends, you typically have three options: continue with the higher payment if your income supports it, refinance into a new loan (requiring qualification and possibly higher rates), or sell the property. Refinancing isn't guaranteed—you need sufficient equity, qualifying income, and acceptable credit, and market rates may be higher than your original rate. Selling depends on market conditions and may result in losses if property values have declined. Many borrowers underestimate how constrained their options may be when the interest-only period expires.
            </p>

            <h2>Total Cost Comparison and Equity Considerations</h2>

            <p>
              Interest-only loans cost significantly more in total interest than traditional amortizing mortgages. With a traditional 30-year loan at 7% on $400,000, you'd pay approximately $558,900 in total interest over the full term. With a 10-year interest-only period followed by 20-year amortization at the same 7% rate, you pay $280,000 in interest during the interest-only period (10 years × $2,333 × 12 months) plus approximately $343,200 during the amortization phase, totaling roughly $623,200—about $64,300 more. The longer your loan balance remains unpaid, the more interest accumulates.
            </p>

            <p>
              During the interest-only period, you build zero equity through loan paydown. Your equity increases only if your property appreciates. If you buy a $500,000 home with $100,000 down (borrowing $400,000 interest-only) and the home value stays flat, you still have exactly $100,000 equity after 10 years—the same as day one. A traditional mortgage would have paid down roughly $52,000 in principal over the same period, giving you $152,000 equity. If property values decline, interest-only borrowers face greater underwater risk because they have no equity cushion from loan paydown.
            </p>

            <p>
              Lenders often qualify interest-only borrowers at the fully amortizing payment, not the interest-only payment. For a $500,000 loan at 7% with a 10-year interest-only period, your interest-only payment is $2,917, but the lender may qualify you at the $3,876 fully amortizing payment. This means you need income to support roughly $50,000 annually in housing costs, not the $35,000 you'll actually pay during the interest-only period. How much income do you need to qualify for a $500,000 mortgage? Lenders typically require a debt-to-income ratio of 43% or less, meaning monthly debts (including the fully amortizing mortgage payment) shouldn't exceed 43% of your gross monthly income. For a $3,876 payment plus other debts, you might need $10,000-12,000 monthly income ($120,000-144,000 annually) depending on other obligations. Qualification standards vary by lender and loan program.
            </p>


            <h2>Hypothetical Calculation Examples</h2>

            <p>
              These examples illustrate interest-only payment calculations and long-term cost comparisons. All figures are hypothetical and for educational purposes.
            </p>

            <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 my-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Example 1: Standard Interest-Only Loan</h3>
              
              <p className="text-slate-700 mb-2">Loan Details (Hypothetical):</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Loan amount: $400,000</li>
                <li>Interest rate: 7.00%</li>
                <li>Interest-only period: 10 years</li>
                <li>Total loan term: 30 years</li>
                <li>Amortization period after IO: 20 years</li>
              </ul>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Interest-Only Period (Years 1-10):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Monthly payment = ($400,000 × 0.07) ÷ 12 = <strong>$2,333</strong></li>
                  <li>Annual payments = $2,333 × 12 = $28,000</li>
                  <li>Total paid over 10 years = $280,000</li>
                  <li>Principal balance after 10 years = $400,000 (unchanged)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Amortization Period (Years 11-30):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Remaining balance = $400,000</li>
                  <li>Remaining term = 20 years</li>
                  <li>Monthly payment (principal + interest) = <strong>$3,101</strong></li>
                  <li>Payment increase = $768/month (33% higher)</li>
                  <li>Total paid over 20 years = $744,240</li>
                </ul>
              </div>

              <p className="font-semibold text-slate-900 mb-2">Total Cost Summary:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Total paid over 30 years = $1,024,240</li>
                <li>Total interest paid = $624,240</li>
                <li>Compared to traditional 30-year loan = ~$65,000 more interest</li>
              </ul>

              <p className="text-slate-700 mt-4 text-sm">
                This example demonstrates the payment shock that occurs when the interest-only period ends. Your payment jumps from $2,333 to $3,101—an increase of nearly one-third.
              </p>
            </div>

            <h2>Making Your Decision and Planning Your Exit Strategy</h2>

            <p>
              Interest-only loans serve specific circumstances and require careful planning. The decision to use an interest-only structure depends on your income trajectory, investment strategy, homeownership timeline, and risk tolerance—not just the lower initial payment.
            </p>

            <p>
              <strong>How do I calculate an interest-only payment?</strong> Take your loan amount, multiply by your annual interest rate, then divide by 12. For a $400,000 loan at 7%, the calculation is ($400,000 × 0.07) ÷ 12 = $2,333 monthly. This formula applies during the interest-only period when no principal is required. When the interest-only period ends, you'll need a full amortization formula to calculate the new payment that includes principal repayment over the remaining term.
            </p>

            <p>
              <strong>What is the monthly payment on a $400,000 loan at 7%?</strong> During the interest-only period, the payment is $2,333 (interest only). After the interest-only period ends, the payment depends on the remaining term. If you have 20 years remaining, the fully amortizing payment is approximately $3,101—33% higher. If you have 25 years remaining, it's about $2,828—still 21% higher. The payment increase is substantial regardless of remaining term length.
            </p>

            <p>
              Exit strategy planning is essential for interest-only loans. If you plan to sell before the interest-only period ends, you need realistic expectations about property appreciation, selling costs, and market conditions. If you plan to refinance when the interest-only period ends, you need qualifying income, credit, and sufficient equity—none of which are guaranteed. If you plan to continue with higher payments, ensure your income can support the 30-50% payment increase.
            </p>

            <p>
              Making extra principal payments during the interest-only period mitigates some risks. Even modest additional payments—$300-500 monthly—reduce your balance, lower your future required payment, build equity that improves refinancing options, and decrease total interest costs. An interest-only loan calculator with extra payments shows how voluntary principal reduction affects long-term costs and payment shock.
            </p>

            <p>
              Qualification requirements for interest-only loans are typically stricter than traditional mortgages. Lenders often require higher credit scores (typically 700+), larger down payments (20-30%), and qualification at the fully amortizing payment. Interest-only loans make sense in specific scenarios: real estate investors with strong rental income, high-income borrowers experiencing temporarily reduced income with clear path to higher earnings, or buyers planning definite short-term ownership (3-7 years) with strong exit strategy. They're risky for buyers counting on appreciation to build equity or borrowers with uncertain income trajectories.
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
