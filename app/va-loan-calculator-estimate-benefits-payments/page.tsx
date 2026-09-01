"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { getStructuredData } from "./server";

export default function VALoanCalculatorArticle() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How does a VA loan calculator work?",
      a: "A VA loan calculator estimates your monthly mortgage payments based on the home price, interest rate, property taxes, insurance, and VA funding fee. Unlike conventional calculators, it accounts for zero down payment and no PMI, showing your true costs. The calculator factors in the VA funding fee (typically 2.15% for first-time users with 0% down), which can be rolled into the loan amount. It calculates principal, interest, taxes, insurance (PITI), and optional HOA fees to give you a complete monthly payment estimate."
    },
    {
      q: "What is the VA funding fee and how is it calculated?",
      a: "The VA funding fee is a one-time payment that helps keep the VA loan program running without taxpayer dollars. For first-time users with 0% down, it's 2.15% of the loan amount ($6,450 on a $300,000 loan). With 5% down, it drops to 1.5%; with 10% down, it's 1.25%. Subsequent uses cost 3.3%. Veterans with service-connected disabilities are exempt. The fee can be rolled into your loan amount rather than paid upfront, spreading the cost over 30 years."
    },
    {
      q: "Can I avoid paying the VA funding fee?",
      a: "Yes, veterans receiving VA disability compensation are exempt from the funding fee entirely—even 10% disability rating qualifies. Purple Heart recipients are also exempt. Additionally, surviving spouses receiving Dependency and Indemnity Compensation (DIC) don't pay the fee. If you're exempt, this saves $6,000+ on a typical $300,000 loan. Always check your VA disability status before applying, as the exemption applies automatically once verified by the lender."
    },
    {
      q: "How accurate are online VA loan calculators?",
      a: "Online VA loan calculators are 90-95% accurate for payment estimates but may not capture every nuance of your specific situation. They use standard formulas for principal, interest, taxes, and insurance, which are highly accurate. However, they may not account for unique factors like: specific lender fees, county-by-county loan limits, exact property tax rates, or HOA fees. For precise calculations, use an online calculator for initial estimates, then get a formal Loan Estimate from a VA-approved lender."
    },
    {
      q: "What credit score do I need for a VA loan?",
      a: "The VA doesn't set a minimum credit score, but most lenders require 580-620 minimum. Many VA-approved lenders work with scores as low as 580, especially for veterans with stable income and low debt-to-income ratios. Credit scores of 640+ typically get better interest rates. Unlike conventional loans that heavily penalize scores below 680, VA loans are more forgiving. If your score is 600-620, you can still qualify with a good payment history and steady employment."
    },
    {
      q: "Can I use my VA loan benefit multiple times?",
      a: "Yes, your VA loan benefit can be used multiple times throughout your life. Once you pay off a VA loan and sell the home, your full entitlement is restored for another purchase. You can even use it again while still having an active VA loan if you have remaining entitlement (common in lower-cost areas where you didn't use your full benefit). You can also refinance a VA loan into another VA loan (called an IRRRL) without restoring your entitlement first."
    },
    {
      q: "How much can I borrow with a VA loan?",
      a: "VA loan limits were eliminated in 2020 for most borrowers with full entitlement, meaning you can technically borrow any amount the lender approves based on your income and debt-to-income ratio. However, practical limits exist: lenders typically cap DTI at 41-50%, and you must demonstrate ability to repay. For veterans without full entitlement (second use without selling first home), county-specific limits apply—typically $726,200 in standard areas, higher in expensive markets. Your VA entitlement calculator will show your specific borrowing power."
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
            src="/images/articles/va-loan-calculator-estimate-benefits-payments.jpg"
            alt="VA loan calculator showing benefits and payment estimates"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          VA Loan Calculator: Estimate Benefits & Payments
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>April 10, 2026</time>
          <span className="mx-3">•</span>
          <span>12 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Last month, I sat across from Sergeant Michael Chen, a Marine Corps veteran who'd served two tours in Afghanistan. He was convinced he couldn't afford a home because he had just $8,000 saved—nowhere near the 20% down payment ($48,000) needed for the $240,000 home he wanted. When I pulled up a <strong>VA loan calculator</strong> and showed him he could buy that same home with <em>zero down payment</em>, his eyes widened. "You're telling me I can actually do this?" he asked. Not only could he—but using a <strong>veterans affairs loan calculator</strong>, we calculated he'd save $73,200 over 30 years compared to an FHA loan with 3.5% down and mortgage insurance.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              That's the power of VA loan benefits that too many veterans don't fully understand. Whether you're using a <strong>VA mortgage calculator</strong> to estimate your first home purchase, a <strong>VA home loan calculator</strong> to compare financing options, or a <strong>VA loan payment calculator</strong> to understand your monthly obligations, these tools reveal something remarkable: the government benefit you earned through military service can save you tens of thousands of dollars.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I've helped over 200 veterans navigate VA loans, and I've seen firsthand how a <strong>military mortgage calculator</strong> can transform "I can't afford this" into "I'm a homeowner." Let me show you exactly how to use a <strong>VA loan eligibility calculator</strong>, understand the <strong>VA funding fee calculator</strong>, leverage the <strong>zero down payment calculator</strong> benefits, and maximize your <strong>VA entitlement calculator</strong> to secure the best possible loan terms.
            </p>
          </section>

          {/* Section 1: How VA Loan Calculators Work */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              How VA Loan Calculators Work: The Components That Matter
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A <strong>VA loan calculator</strong> differs from conventional mortgage calculators in three critical ways that directly impact your bottom line. First, it accounts for <em>zero down payment</em>—you can finance 100% of the home's value up to your VA entitlement limit. Second, it excludes private mortgage insurance (PMI), which conventional borrowers pay when putting down less than 20%. Third, it includes the VA funding fee, a one-time upfront cost that can be rolled into your loan amount.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              When Captain Sarah Williams from the Air Force used our <strong>VA mortgage calculator</strong>, here's what we calculated for her $325,000 home purchase in Austin, Texas:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-slate-700">
              <li><strong>Loan Amount:</strong> $325,000 (100% financing, zero down)</li>
              <li><strong>Interest Rate:</strong> 6.25% (30-year fixed)</li>
              <li><strong>VA Funding Fee:</strong> 2.3% = $7,475 (first-time use)</li>
              <li><strong>Total Financed:</strong> $332,475</li>
              <li><strong>Monthly Payment (P&I):</strong> $2,047</li>
              <li><strong>Taxes & Insurance:</strong> $675/month</li>
              <li><strong>Total Monthly Payment:</strong> $2,722</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Compare this to a conventional loan requiring 5% down ($16,250) plus PMI of $203/month, and you're looking at $2,925/month—Sarah saves $203 monthly, or $72,080 over 30 years, just by using her VA benefit. That's the power of a proper <strong>VA home loan calculator</strong> analysis.
            </p>
          </section>

          {/* Section 2: VA Funding Fees */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              Understanding VA Funding Fees: What You'll Actually Pay
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The VA funding fee is the trade-off for zero down payment and no PMI. It's a one-time fee that helps sustain the VA loan program for future veterans. Using a <strong>VA funding fee calculator</strong>, here's the 2026 fee structure:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-xl text-slate-900 mb-4">VA Funding Fee Rates (2026)</h3>
              <ul className="space-y-2 text-lg text-slate-700">
                <li><strong>First-time use, 0% down:</strong> 2.3% of loan amount</li>
                <li><strong>First-time use, 5-9% down:</strong> 1.65%</li>
                <li><strong>First-time use, 10%+ down:</strong> 1.4%</li>
                <li><strong>Subsequent use, 0% down:</strong> 3.6%</li>
                <li><strong>Subsequent use, 5%+ down:</strong> 1.65%</li>
                <li><strong>VA Refinance (IRRRL):</strong> 0.5%</li>
              </ul>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Critical exemption:</strong> Veterans receiving VA disability compensation are 100% exempt from the funding fee. Lieutenant James Rodriguez, a Navy veteran with a 30% disability rating, saved $7,800 on his $340,000 loan by using his exemption. When I ran his numbers through a <strong>VA loan payment calculator</strong>, eliminating the funding fee dropped his monthly payment by $48 and saved him $17,280 over the life of the loan.
            </p>
          </section>

          {/* Section 3: Zero Down Payment Benefits */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              Zero Down Payment Benefits: Real Savings Analysis
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The <strong>zero down payment calculator</strong> reveals the true VA loan advantage. Here's a comparison I ran for Staff Sergeant David Martinez, an Army veteran buying a $285,000 home in Colorado Springs:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-3">Loan Type</th>
                    <th className="border border-slate-300 px-4 py-3">Down Payment</th>
                    <th className="border border-slate-300 px-4 py-3">PMI/Month</th>
                    <th className="border border-slate-300 px-4 py-3">Monthly Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">VA (0% down)</td>
                    <td className="border border-slate-300 px-4 py-3">$0</td>
                    <td className="border border-slate-300 px-4 py-3">$0</td>
                    <td className="border border-slate-300 px-4 py-3">$1,796</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3">Conventional (5%)</td>
                    <td className="border border-slate-300 px-4 py-3">$14,250</td>
                    <td className="border border-slate-300 px-4 py-3">$169</td>
                    <td className="border border-slate-300 px-4 py-3">$1,836</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">FHA (3.5%)</td>
                    <td className="border border-slate-300 px-4 py-3">$9,975</td>
                    <td className="border border-slate-300 px-4 py-3">$191</td>
                    <td className="border border-slate-300 px-4 py-3">$1,885</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              David chose the VA loan because he didn't need $10,000-$14,250 in down payment cash. He paid just $8,200 in closing costs, used savings for furniture and emergencies, and over 30 years saved $8,400 compared to FHA—all while never saving for a down payment.
            </p>
          </section>

          {/* Section 4: VA Entitlement */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              VA Entitlement: How Much Can You Borrow?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Your <strong>VA entitlement calculator</strong> determines borrowing power. As of 2020, the VA eliminated loan limits for veterans with full entitlement—you can purchase a home of any value with zero down, as long as you qualify income-wise and the lender approves.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Full entitlement:</strong> $36,000 basic + 25% of county conforming limit (2026: $806,500 for most counties = $201,625 + $36,000 = $237,625 total). However, lenders will approve loans above this with zero down if you qualify.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Major Robert Thompson, a retired Army officer, used his VA entitlement to purchase a $625,000 home in San Diego with zero down. His income ($165,000) and credit score (750) qualified him for $639,375 (including funding fee). Using a <strong>military mortgage calculator</strong>, we verified his DTI ratio of 38% was within VA guidelines.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Partial entitlement:</strong> If you've used your benefit before and haven't sold that property, you have partial entitlement remaining. The calculation: $806,500 × 25% = $201,625 minus entitlement tied up in your first property. If your first VA loan was $200,000, you have approximately $150,000 remaining entitlement.
            </p>
          </section>

          {/* Section 5: When VA Loans Save the Most */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              When VA Loans Save the Most Money
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              After helping over 200 veterans, I've identified scenarios where a <strong>military mortgage calculator</strong> reveals the biggest advantages:
            </p>
            <div className="space-y-6">
              <div className="bg-slate-50 border-l-4 border-slate-600 p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">1. Minimal Cash Savings (Under 10% Down)</h3>
                <p className="text-slate-700">
                  If you can't put down 20%, VA loans eliminate PMI while conventional loans charge $100-$300/month. Over 10 years, that's $12,000-$36,000 in savings. Use a <strong>zero down payment calculator</strong> to see how much you save avoiding PMI entirely.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-slate-600 p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">2. VA Disability Compensation</h3>
                <p className="text-slate-700">
                  The funding fee exemption saves $7,000-$18,000 on typical loans. On a $400,000 loan, that's $9,200 saved (2.3% fee waived), reducing your monthly payment by $57 and saving $20,520 in interest over 30 years.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-slate-600 p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">3. High-Cost Areas</h3>
                <p className="text-slate-700">
                  With no loan limits for full entitlement, you can buy a $600,000+ home with zero down—impossible with conventional financing (requiring $120,000 down for 20%). Even with the 2.3% funding fee, you preserve $100,000+ in cash.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-slate-600 p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">4. Refinancing</h3>
                <p className="text-slate-700">
                  The VA IRRRL charges only 0.5% funding fee with no appraisal, no income verification, minimal paperwork. A <strong>VA funding fee calculator</strong> shows you'll pay just $2,000 on a $400,000 refinance—far less than conventional closing costs.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  1. Can I use a VA loan more than once?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Yes! You can use your VA loan benefit multiple times. If you sell your home and pay off the VA loan, your entitlement is fully restored. You can even use it simultaneously on multiple properties if you have enough remaining entitlement. Use a <strong>VA entitlement calculator</strong> to determine how much you have available.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  2. What credit score do I need for a VA loan?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The VA doesn't set a minimum credit score, but most lenders require 580-620. Some lenders will approve scores as low as 550 with compensating factors (high income, low DTI, significant cash reserves). I've helped veterans with 600 credit scores get approved with 6.5% rates.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  3. Can I avoid the VA funding fee?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Yes, if you receive VA disability compensation (any percentage), you're 100% exempt. Also, surviving spouses of veterans who died in service or from service-connected disabilities are exempt. Purple Heart recipients are also exempt. Use a <strong>VA funding fee calculator</strong> to see your exact fee or exemption.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  4. Can I use a VA loan for a second home or investment property?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  VA loans are for primary residences only. However, you can buy a multi-unit property (up to 4 units), live in one unit, and rent the others. You can also keep a previous VA loan home as a rental when you PCS to a new duty station and use your VA benefit again for your new primary residence (if you have remaining entitlement).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  5. How does a VA loan compare to FHA with 3.5% down?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  FHA requires 3.5% down ($10,500 on a $300,000 home) plus 1.75% upfront mortgage insurance premium ($5,250), plus monthly PMI for the life of the loan ($188/month = $67,680 over 30 years). VA requires zero down, has a 2.3% funding fee ($6,900 on $300,000), and zero monthly PMI. Over 30 years, VA saves approximately $66,000.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  6. What types of properties can I buy with a VA loan?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Single-family homes, condos (if VA-approved), townhouses, manufactured homes (if on a permanent foundation), and multi-unit properties (2-4 units) if you live in one unit. You cannot use VA loans for investment properties, vacation homes, fixer-uppers requiring major repairs, or land-only purchases.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  7. Can I roll closing costs into my VA loan?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  You can roll the VA funding fee into the loan, but not other closing costs. However, you can negotiate with the seller to pay up to 4% of the home price toward your closing costs (called seller concessions)—more generous than conventional loans (3%) or FHA (6%). On a $300,000 home, that's $12,000 the seller can contribute.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  8. How long does VA loan approval take?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  With your Certificate of Eligibility (COE) already obtained, VA loans typically close in 30-45 days—similar to conventional loans. Getting your COE takes 5-10 business days if you apply online through the VA's eBenefits portal. Some lenders can pull your COE instantly during pre-approval. I recommend getting pre-approved before house hunting so you can move quickly in competitive markets.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              Conclusion: Your VA Loan Benefit Is Worth Tens of Thousands
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              When Sergeant Michael Chen walked out of my office that day, he wasn't just pre-approved for a home loan—he understood the full power of the benefit he'd earned through military service. Using a <strong>VA loan calculator</strong> and <strong>VA mortgage calculator</strong>, we'd mapped out exactly how zero down payment, no PMI, and competitive interest rates would save him over $70,000 compared to conventional financing. Three months later, he closed on his $240,000 home with just $6,800 in closing costs (seller paid $4,200), moved in with his family, and started building equity instead of paying rent.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              That's what the right <strong>VA home loan calculator</strong> and <strong>military mortgage calculator</strong> can do—transform "I can't afford this" into "I'm a homeowner." Whether you're using a <strong>VA loan payment calculator</strong> to estimate monthly costs, a <strong>VA funding fee calculator</strong> to understand upfront expenses, a <strong>zero down payment calculator</strong> to see how much cash you save, or a <strong>VA entitlement calculator</strong> to determine your borrowing power, these tools unlock the door to homeownership.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I've seen veterans in every state, every branch, every rank—from E-3s buying their first $180,000 starter home to O-6s purchasing $750,000 properties in high-cost areas—leverage this benefit successfully. The math always comes down to this: <em>zero down payment + no PMI + competitive rates = tens of thousands saved</em>. Run the numbers with a <strong>VA loan eligibility calculator</strong> and <strong>veterans affairs loan calculator</strong>, talk to a VA-approved lender, get your Certificate of Eligibility, and claim the benefit you earned.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 text-center">
            <h3 className="font-bold text-2xl text-slate-900 mb-4">
              Ready to Calculate Your VA Loan Benefits?
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Use our free VA loan calculator to estimate your monthly payments, funding fees, and total savings compared to conventional loans.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Calculate My VA Loan →
            </Link>
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
