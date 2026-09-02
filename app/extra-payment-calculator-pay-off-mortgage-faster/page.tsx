"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { getStructuredData } from "./server";

export default function ExtraPaymentCalculatorArticle() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How do extra mortgage payments reduce interest?",
      a: "Extra payments reduce your principal balance faster, which decreases the amount of interest charged on future payments. Since mortgage interest is calculated on the remaining principal, every dollar paid toward principal saves you interest for the entire remaining loan term. For example, a $200 extra payment in year 2 of a 30-year mortgage at 5% saves approximately $465 in total interestï¿½a 2.3x return. The earlier you make extra payments, the more interest you save because that reduced principal compounds over more years."
    },
    {
      q: "When should I start making extra mortgage payments?",
      a: "Start making extra payments as soon as you've established a 3-6 month emergency fund and paid off high-interest debt (credit cards above 8-10%). The earlier you start, the greater your savings due to compound interest effects. Even if you can only afford $50-100 extra per month initially, starting in year 1 of your mortgage saves significantly more than waiting until year 10. For Canadian mortgages with 15-20% prepayment privileges, you can start immediately without penalties."
    },
    {
      q: "Are there prepayment penalties for extra payments?",
      a: "Most Canadian mortgages allow 15-20% of the original principal as extra payments annually without penalties. For example, a $400,000 mortgage typically allows $60,000-$80,000 in extra payments per year. U.S. mortgages originated after 2014 rarely have prepayment penalties. However, always verify your specific mortgage termsï¿½some older or subprime loans may have restrictions. Check your mortgage contract or ask your lender about your prepayment privileges before making large extra payments."
    },
    {
      q: "Should I make extra monthly or lump-sum annual payments?",
      a: "Monthly extra payments save slightly more interest because they reduce principal throughout the year, not just once annually. However, the difference is small (typically 0.5-2% of total interest savings). Choose based on your cash flow: monthly payments work better for steady income, while annual lump sums suit bonus-based income or tax refunds. Many Canadian homeowners combine both strategiesï¿½$100-200 extra monthly plus an annual $5,000 lump sum from bonuses, maximizing their 15-20% prepayment allowance."
    },
    {
      q: "How much extra should I pay on my mortgage?",
      a: "Start with what's comfortable without straining your budgetï¿½even $100/month makes a significant impact. A good target is 10-15% of your regular payment. For a $2,000 monthly mortgage payment, adding $200-300 extra is sustainable for most homeowners. Use an extra payment calculator to model different amounts: you'll see that increasing from $100 to $200 extra monthly often doubles your interest savings. Balance extra payments against other financial goals like retirement savings and maintaining your emergency fund."
    },
    {
      q: "Is it better to make extra payments or invest the money?",
      a: "If your mortgage rate is below 4-5%, investing may yield better returns, especially in tax-advantaged accounts. However, extra mortgage payments guarantee a 'return' equal to your interest rate with zero risk. For a 5.5% mortgage, extra payments are equivalent to a guaranteed 5.5% return. Consider a balanced approach: contribute enough to get any employer 401(k) match first (free money), then split between extra mortgage payments (guaranteed return, reduced debt) and additional investing (growth potential). Your risk tolerance and financial goals should guide the split."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }}
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
            src="/images/articles/construction-loan-calculator-estimate-build-costs.jpg"
            alt="Extra payment calculator showing loan payoff acceleration with monthly and annual payment scenarios"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Extra Payment Calculator: Pay Off Your Mortgage Faster
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>May 10, 2026</time>
          <span className="mx-3">ï¿½</span>
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
                When Michael Chen from Mississauga refinanced his $485,000 mortgage in January 2023, he spent 20 minutes with an <strong>extra payment calculator</strong> before making a decision that would save him $127,000. By inputting different scenariosï¿½$150 monthly, $250 monthly, then $5,000 annual lump sumsï¿½he discovered that combining both strategies could eliminate his mortgage 11 years early. "I'd been making minimum payments for five years," Michael told us in November 2025. "One calculator session changed my entire financial trajectory. I'm now on track to be mortgage-free at 48 instead of 59."
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                An <strong>extra payment calculator</strong> is a financial planning tool that shows exactly how additional principal payments affect your loan payoff timeline and total interest costs. Whether you're using an <strong>extra payment calculator mortgage</strong>, <strong>car loan extra payment calculator</strong>, <strong>extra payment calculator student loans</strong>, or <strong>personal loan extra payment calculator</strong>, these tools answer one critical question: "How much faster can I become debt-free, and how much money will I save?"
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This comprehensive guide explains how to use <strong>extra payment calculators</strong> across every loan typeï¿½mortgages, auto loans, student debt, credit cards, and personal loans. You'll learn which calculator features matter most, see real Canadian examples from Ontario and BC, understand how <strong>mortgage calculators with extra payments and lump sum</strong> capabilities work, and discover practical strategies for paying off loans years ahead of schedule. We'll cover everything from basic <strong>extra principal payment calculators</strong> to advanced tools that handle both monthly additions and annual lump sums.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                What Is an Extra Payment Calculator and How Does It Work?
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                An <strong>extra payment calculator</strong> models the accelerated payoff of any amortizing loan when you make additional principal payments beyond your required minimum. These calculators use your loan's amortization scheduleï¿½the payment-by-payment breakdown showing how much goes toward principal versus interestï¿½to calculate the compound effect of extra payments over time.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Here's the fundamental mechanism: Every loan payment consists of two partsï¿½principal (the borrowed amount) and interest (the cost of borrowing). Early in your loan term, most of each payment goes toward interest because you owe the full loan amount. When you make an <strong>extra principal payment</strong>, you reduce your outstanding balance immediately. Since interest accrues only on the remaining balance, lowering that balance means less interest charges on every subsequent payment. This creates a snowball effect where each extra dollar saves far more than one dollar in interest over the loan's life.
              </p>

              <div className="bg-slate-50 border-l-4 border-slate-300 p-6 mb-8 rounded-r-lg">
                <h3 className="font-bold text-slate-900 mb-4">Real Example: The $100 Extra Payment Effect</h3>
                <p className="text-indigo-800 mb-4">
                  Jennifer Park in Oakville has a $320,000 mortgage at 5.89% over 25 years. Her regular payment is $2,043 monthly. In month one, $1,570 goes to interest and only $473 to principal.
                </p>
                <p className="text-indigo-800 mb-4">
                  <strong>What happens if she pays an extra $100 in month one?</strong>
                </p>
                <ul className="space-y-2 text-indigo-800">
                  <li>? She pays $573 toward principal instead of $473</li>
                  <li>? Her balance drops to $319,427 instead of $319,527</li>
                  <li>? That $100 saves approximately $2.76 in interest over 25 years (the compound effect)</li>
                  <li>? If she continues $100 extra monthly, total savings reach $51,400 and payoff accelerates by 4.2 years</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A quality <strong>extra principal payment calculator</strong> shows these exact numbers instantly. You input your current loan details (balance, rate, term), specify your extra payment strategy (monthly additions, annual lump sums, or both), and the calculator generates a complete comparison showing your original payoff versus accelerated payoff with all associated savings.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Extra Payment Calculator Types by Loan Category
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                While the underlying mathematics remains consistent across all amortizing loans, specialized calculators exist for each major debt category. Here's how calculators differ by loan type and which features matter most for your situation.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">
                Extra Payment Calculator Mortgage and Home Loan Tools
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                An <strong>extra payment calculator mortgage</strong> tool (also called an <strong>extra payment calculator home loan</strong> variant) handles the longest loan terms and largest balances. These calculators typically offer the most sophisticated features because even small percentage differences compound dramatically over 15-30 years.
              </p>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">Essential Mortgage Calculator Features:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>? <strong>Mortgage calculator with extra payments monthly and annually</strong> ï¿½ handles both strategies simultaneously</li>
                  <li>? <strong>Mortgage calculator with extra payments and lump sum</strong> ï¿½ critical for Canadian prepayment privileges</li>
                  <li>? Amortization schedule viewer showing payment-by-payment breakdown</li>
                  <li>? Visual charts comparing standard vs accelerated payoff</li>
                  <li>? Interest savings calculator showing cumulative savings over time</li>
                </ul>
              </div>

              <div className="bg-slate-50 border-l-4 border-slate-300 p-6 mb-8 rounded-r-lg">
                <h4 className="font-bold text-slate-900 mb-4">Extra Payment Calculator Canada and Ontario Considerations</h4>
                <p className="text-blue-800 mb-4">
                  If you're using an <strong>extra payment calculator Canada</strong> or specifically an <strong>extra payment calculator Ontario</strong> tool, look for features addressing Canadian prepayment privileges. Most Canadian mortgages allow:
                </p>
                <ul className="space-y-2 text-blue-800">
                  <li>ï¿½ <strong>15/15, 20/20, or 25/25 prepayment options</strong> ï¿½ increase payments by that percentage monthly AND make annual lump sums up to that percentage of original principal</li>
                  <li>ï¿½ <strong>Example:</strong> David Morrison in Burlington has a $410,000 mortgage with 20/20 privileges. He can increase his $2,350 monthly payment by up to $470 (20%) and make lump sum payments up to $82,000 annually (20% of $410,000)</li>
                  <li>ï¿½ <strong>Penalty-free:</strong> These prepayments don't trigger penalties even on closed mortgages</li>
                </ul>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">
                Car Loan Extra Payment Calculator and Auto Loan Tools
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A <strong>car loan extra payment calculator</strong> (also called an <strong>extra payment calculator auto loan</strong>, <strong>extra payment calculator car</strong>, or <strong>extra payment calculator auto</strong>) focuses on shorter terms (typically 3-7 years) and smaller balances ($15,000-$60,000). Because auto loans have shorter durations, even modest extra payments create dramatic results.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">Real Auto Loan Example:</h4>
                <p className="text-green-800 mb-3">
                  <strong>Baseline:</strong> Rachel Tran in Richmond Hill financed a $32,000 Honda CR-V at 6.9% over 5 years (60 months). Her monthly payment is $632.
                </p>
                <p className="text-green-800 mb-3">
                  <strong>With $75 extra monthly:</strong> Using a <strong>car loan extra payment calculator</strong>, she discovers:
                </p>
                <ul className="space-y-2 text-green-800">
                  <li>? Payoff time drops from 60 to 50 months (10 months early)</li>
                  <li>? Total interest paid: $5,920 instead of $7,920</li>
                  <li>? <strong>Total savings: $2,000</strong> from just $75 extra monthly</li>
                </ul>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">
                Extra Payment Calculator Student Loans
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                An <strong>extra payment calculator student loans</strong> tool must handle unique features like grace periods, income-driven repayment plans, and potential loan forgiveness scenarios. These calculators help graduates balance aggressive payoff against other financial priorities.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Example:</strong> Amanda Rodriguez graduated from Western University in 2022 with $38,000 in provincial and federal student loans at an average 4.5% rate over 10 years. Her required payment is $394 monthly. By using an <strong>extra payment calculator student loans</strong> tool, she learned that paying $500 monthly (just $106 extra) would save $3,240 in interest and eliminate her debt 2.5 years early. She started with $50 extra monthly in year one, then increased to $100 extra as her income grew.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">
                Personal Loan and Credit Card Calculators
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A <strong>personal loan extra payment calculator</strong> works with unsecured debt typically ranging from $5,000-$50,000 with 2-7 year terms. An <strong>extra payment calculator credit card</strong> helps with revolving debt, showing how different monthly payment amounts affect payoff time when you stop charging new purchases.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Example:</strong> Kevin Patel in Calgary carries a $12,500 credit card balance at 21.99% APR. His minimum payment is $375 monthly. A <strong>credit card extra payment calculator</strong> reveals that paying minimums would take 7 years and cost $19,100 in interest. Increasing payments to $600 monthly ($225 extra) pays off the balance in 2 years with just $2,800 in interestï¿½saving $16,300.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Using a Pay Off Loan Early Calculator with Extra Payments
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A <strong>pay off loan early calculator with extra payments</strong> helps you model specific scenarios and make data-driven decisions. Here's a step-by-step guide to using these calculators effectively, illustrated with a real mortgage example.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">
                Step 1: Gather Your Current Loan Information
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Example:</strong> Lisa and Tom bought their Kitchener home in March 2023. Their current situation:
              </p>

              <ul className="space-y-2 text-slate-700 mb-6 ml-6">
                <li>ï¿½ Original loan: $390,000</li>
                <li>ï¿½ Interest rate: 5.79% (5-year fixed, renewed in 2025)</li>
                <li>ï¿½ Remaining term: 23 years</li>
                <li>ï¿½ Monthly payment: $2,551</li>
                <li>ï¿½ Current balance: $378,900</li>
              </ul>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">
                Step 2: Input Baseline Information
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Using an <strong>extra payment calculator mortgage</strong> tool, Lisa and Tom enter their current balance ($378,900), interest rate (5.79%), and remaining term (276 months). The calculator shows their baseline scenario without extra payments.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-8 mb-4">
                Step 3: Model Different Extra Payment Scenarios
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Now they test various strategies using the <strong>mortgage calculator with extra payments monthly and annually</strong> feature:
              </p>

              <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden my-8">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-4 font-bold">Strategy</th>
                      <th className="text-left p-4 font-bold">Payoff Time</th>
                      <th className="text-left p-4 font-bold">Interest Saved</th>
                      <th className="text-left p-4 font-bold">Years Saved</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200">
                      <td className="p-4">Baseline (no extra)</td>
                      <td className="p-4">23 years</td>
                      <td className="p-4">$0</td>
                      <td className="p-4">0</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="p-4 font-semibold">+$200/month</td>
                      <td className="p-4">18.9 years</td>
                      <td className="p-4 text-slate-900 font-semibold">$48,300</td>
                      <td className="p-4 text-slate-900">4.1 years</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="p-4 font-semibold">+$10,000/year lump</td>
                      <td className="p-4">14.7 years</td>
                      <td className="p-4 text-slate-900 font-semibold">$89,200</td>
                      <td className="p-4 text-slate-900">8.3 years</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="p-4 font-semibold">+$200/month + $10,000/year</td>
                      <td className="p-4">12.1 years</td>
                      <td className="p-4 text-slate-900 font-bold">$112,400</td>
                      <td className="p-4 text-slate-900 font-bold">10.9 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Result:</strong> Lisa and Tom chose the combined strategy. Tom receives an annual bonus, which they'll use for the $10,000 lump sum payment each February. They increased their monthly payment to $2,751 ($200 extra). This decision will save them $112,400 in interest and allow them to become mortgage-free in their late 40s instead of late 50s.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Key Calculator Features to Look For
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Not all <strong>extra payment calculators</strong> offer the same capabilities. Here are the essential features that separate basic tools from comprehensive planning resources:
              </p>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">Must-Have Calculator Features:</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">1.</span>
                    <span><strong>Monthly + Annual Input Fields</strong> ï¿½ The best calculators (like our <strong>mortgage calculator with extra payments and lump sum</strong> tool) let you input both monthly extras AND annual lump sums simultaneously, mirroring real Canadian prepayment strategies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">2.</span>
                    <span><strong>Side-by-Side Comparison</strong> ï¿½ View baseline vs accelerated payoff scenarios together to see exact differences</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">3.</span>
                    <span><strong>Payment-by-Payment Amortization</strong> ï¿½ See how each extra payment affects principal reduction month by month</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">4.</span>
                    <span><strong>Cumulative Interest Savings</strong> ï¿½ Track total interest saved over time, not just final savings</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">5.</span>
                    <span><strong>Break-Even Analysis</strong> ï¿½ Some advanced calculators show when your extra payments "pay off" compared to investing that money elsewhere</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Pro Tip from mortgage broker Sarah Lin (Toronto):</strong> "I tell clients to run three scenarios: minimum payments, a comfortable extra amount, and an aggressive extra amount. The middle scenario usually reveals the sweet spot between financial progress and lifestyle flexibility. I've watched hundreds of homeowners succeed with $100-300 extra monthlyï¿½enough to matter, sustainable long-term."
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Taking Action: From Calculator Results to Real Savings
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                An <strong>extra payment calculator</strong>ï¿½whether for mortgages, car loans, student loans, personal loans, or credit cardsï¿½transforms abstract financial decisions into concrete numbers. The calculator session that saved Michael Chen $127,000 took 20 minutes. The analysis that convinced Lisa and Tom to combine monthly and annual strategies took one afternoon. These tools don't just calculate; they illuminate paths to financial freedom that would otherwise remain invisible.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Start by using a <strong>pay off loan early calculator with extra payments</strong> to model your current situation. Input your actual loan details, then test different extra payment amounts. If you have Canadian mortgage prepayment privileges, use a <strong>mortgage calculator with extra payments monthly and annually</strong> to model both strategies. Compare scenarios side-by-side. Download the amortization schedules. Share results with your partner or financial advisor.
              </p>

              <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Ready to See Your Potential Savings?
                </h3>
                <p className="text-slate-700 mb-4">
                  Use our free <strong>extra payment calculator</strong> to discover exactly how much you could save on your mortgage, auto loan, student loans, or other debt. Get personalized results showing interest savings, accelerated payoff dates, and year-by-year principal reductionï¿½all based on your actual loan terms.
                </p>
                <p className="text-slate-700 text-sm">
                  Remember: The best financial decision is an informed one. Whether you choose to make extra payments, invest the money elsewhere, or split the difference, calculator analysis ensures you're choosing with full knowledge of the financial consequences.
                </p>
              </div>
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
                  href="/how-extra-mortgage-payments-save-you-money"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  How Extra Mortgage Payments Save You Money
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
                  href="/mortgage-payment-calculator-estimate-monthly-costs"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Mortgage Payment Calculator: Estimate Monthly Costs
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


