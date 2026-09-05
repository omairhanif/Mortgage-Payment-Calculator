'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getStructuredData } from './server';

// Selected Guide Articles (3 essential guides)
const guideArticles = [
  {
    title: "How to Qualify for a Mortgage: Key Requirements",
    slug: "/how-to-qualify-for-a-mortgage-key-requirements",
    image: "/images/articles/bridge-loans-explained-costs-terms-when-to-use-them.jpg",
    date: "August 21, 2026",
    excerpt: "Learn the key requirements to qualify for a mortgage in Canada. Understand income needs, credit scores, debt ratios (GDS/TDS), and down payment requirements with real Canadian examples."
  },
  {
    title: "Fixed Rate vs ARM: Which Mortgage Fits You?",
    slug: "/fixed-rate-vs-arm-which-mortgage-fits-you",
    image: "/images/articles/fixed-rate-vs-arm-which-mortgage-fits-you.jpg",
    date: "April 15, 2026",
    excerpt: "Compare fixed-rate and adjustable-rate mortgages to determine which loan type best fits your financial situation and homeownership timeline."
  },
  {
    title: "When Should You Refinance Your Mortgage?",
    slug: "/when-should-you-refinance-your-mortgage",
    image: "/images/articles/when-should-you-refinance.jpg",
    date: "August 02, 2026",
    excerpt: "Discover the best times to refinance your mortgage. Learn when rate drops, home equity gains, and life changes make refinancing worth it with real-world scenarios and break-even analysis."
  }
];

// Topic Categories (7 pills)
const topicCategories = [
  { label: "Refinancing", path: "/refinance-calculator" },
  { label: "PMI & Insurance", path: "/mortgage-affordability-calculator" },
  { label: "Home Affordability", path: "/income-requirement-calculator" },
  { label: "Payment Strategies", path: "/extra-payment-calculator" },
  { label: "Loan Types", path: "/fha-loan-calculator" },
  { label: "First-Time Buyers", path: "/articles" },
  { label: "Tax Benefits", path: "/tax-benefits-calculator" }
];

// FAQ Data
const faqs = [
  {
    question: "When should I refinance my mortgage?",
    answer: "Refinancing makes sense when interest rates drop by at least 0.5-1%, you've built substantial equity, or your financial situation has improved. Consider your break-even period—the time it takes for monthly savings to offset closing costs. If you plan to stay in your home beyond the break-even point, refinancing could save you thousands."
  },
  {
    question: "How can I reduce or eliminate PMI?",
    answer: "PMI can be removed once you reach 20% equity in your home through payments or appreciation. You can accelerate this by making extra principal payments, requesting a reappraisal if your home value has increased, or refinancing with a larger down payment. Some lenders automatically cancel PMI at 22% equity."
  },
  {
    question: "What's the difference between fixed-rate and ARM mortgages?",
    answer: "Fixed-rate mortgages maintain the same interest rate and payment throughout the loan term, providing stability and predictability. ARMs (Adjustable-Rate Mortgages) start with a lower rate that adjusts periodically based on market conditions. ARMs work best if you plan to move or refinance before the rate adjusts."
  },
  {
    question: "How much should I put down on a home?",
    answer: "The ideal down payment depends on your financial situation. 20% down avoids PMI and reduces monthly payments, but many buyers successfully purchase with 3-10% down using FHA or conventional loans. Consider your cash reserves, emergency fund, and other financial goals when deciding."
  },
  {
    question: "Should I pay discount points to lower my rate?",
    answer: "Paying points makes sense if you plan to keep the loan long enough to recoup the upfront cost through monthly payment savings. Calculate your break-even period—typically 3-5 years. If you'll stay in the home or keep the mortgage longer than that, points can save significant interest over time."
  },
  {
    question: "How do extra payments affect my loan?",
    answer: "Extra principal payments directly reduce your loan balance, decreasing total interest paid and shortening the loan term. Even small additional payments can save thousands in interest and shave years off your mortgage. Use our extra payment calculator to see your specific savings potential."
  }
];


export default function AdvicePage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webPage) }}
      />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 border-b border-slate-100">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Mortgage Advice
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Practical guidance for smarter mortgage decisions.
            </p>
          </div>

          {/* Three Instruction Cards */}
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Card 1: Learn First */}
            <div className="group relative bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-indigo-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm">
                  01
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Learn First
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Understand your mortgage options.
              </p>
            </div>

            {/* Card 2: Compare */}
            <div className="group relative bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-indigo-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm">
                  02
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Compare
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Explore your mortgage choices.
              </p>
            </div>

            {/* Card 3: Calculate */}
            <div className="group relative bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-indigo-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm">
                  03
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Calculate
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Use our tools to estimate your costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 py-12">

        {/* Written Content Section 1: Understanding Mortgage Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Understanding Mortgage Types</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Choosing the right mortgage type is one of the most important decisions you'll make when buying a home. Each mortgage type has unique features, benefits, and considerations that can significantly impact your monthly payments and long-term financial health.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Fixed-Rate Mortgages</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Fixed-rate mortgages offer stability and predictability. Your interest rate remains constant throughout the entire loan term, whether it's 15, 20, or 30 years. This means your monthly principal and interest payment never changes, making budgeting easier. Fixed-rate mortgages are ideal if you plan to stay in your home long-term or prefer the security of knowing exactly what you'll pay each month. They're particularly attractive when interest rates are low, as you can lock in that favorable rate for decades.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Adjustable-Rate Mortgages (ARMs)</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              ARMs typically start with a lower interest rate than fixed-rate mortgages, but that rate can change periodically based on market conditions. A common ARM structure is the 5/1 ARM, where your rate stays fixed for the first 5 years, then adjusts annually. ARMs work best if you plan to sell or refinance before the rate adjusts, if you expect your income to increase, or if you're comfortable with some payment uncertainty in exchange for initial savings. Most ARMs have rate caps that limit how much your rate can increase.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Government-Backed Loans (FHA, VA, USDA)</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Government-backed loans make homeownership accessible to more buyers through lower down payment requirements and more flexible qualification standards. FHA loans require as little as 3.5% down and accept lower credit scores, though they require mortgage insurance. VA loans, available to eligible veterans and service members, offer 0% down with no PMI requirement. USDA loans provide 0% down financing for homes in eligible rural areas. These programs serve specific purposes and populations, offering pathways to homeownership that might otherwise be unavailable.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Jumbo Loans</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Jumbo loans exceed the conforming loan limits set by Fannie Mae and Freddie Mac (typically $766,550 in most areas for 2024). These loans finance high-value properties but come with stricter requirements: higher credit scores (usually 700+), larger down payments (often 10-20%), lower debt-to-income ratios, and more substantial cash reserves. Interest rates on jumbo loans can be slightly higher or competitive with conforming loans, depending on market conditions and your financial profile.
            </p>
          </div>
        </section>



        {/* Written Content Section 2: How Interest Rates Work */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How Interest Rates Work</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Understanding interest rates is crucial because even a small difference in your rate can mean tens of thousands of dollars over the life of your loan. Your interest rate determines how much you'll pay to borrow money, directly affecting your monthly payment and total cost.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">What Determines Your Interest Rate</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Multiple factors influence the interest rate you'll receive. Your credit score is paramount—higher scores (740+) typically qualify for the best rates, while lower scores result in higher rates to compensate for increased risk. Your down payment size matters too; putting down 20% or more usually secures better rates and eliminates PMI. The loan term affects your rate, with shorter terms (15 years) generally offering lower rates than longer terms (30 years). Your debt-to-income ratio, employment history, and the type of property you're buying all play roles. Market conditions, Federal Reserve policies, and the overall economy also influence the rates lenders offer.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Fixed vs Variable Rates</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Fixed rates provide certainty—your rate never changes regardless of market fluctuations. You're protected if rates rise but can't benefit if rates fall without refinancing. Variable rates (in ARMs) start lower but can adjust up or down based on index rates plus a margin. The initial lower rate can save money if you don't keep the loan long-term, but you risk higher payments if rates increase. Consider your risk tolerance, how long you'll keep the loan, and rate forecasts when choosing between fixed and variable.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">APR vs Interest Rate</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              The interest rate is what you pay to borrow the principal, while the APR (Annual Percentage Rate) includes the interest rate plus other costs like origination fees, discount points, and mortgage insurance, expressed as a yearly rate. APR gives you a more complete picture of the loan's true cost. A loan with a lower interest rate might have a higher APR if it includes significant fees. Always compare APRs when shopping for mortgages—a difference of even 0.25% in APR can cost thousands over the loan term.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">How Rates Affect Your Payment</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Interest rate changes dramatically impact your monthly payment and total interest paid. On a $300,000 30-year loan, the difference between 6% and 7% is about $180 per month and over $64,000 in total interest. This is why rate shopping is essential—getting quotes from multiple lenders and negotiating can save substantial money. Even if you can't control market rates, improving your credit score, increasing your down payment, or choosing a shorter loan term can help you secure a better rate.
            </p>
          </div>
        </section>

        {/* Written Content Section 3: Down Payment Strategies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Down Payment Strategies</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Your down payment is one of the most significant financial decisions in the home-buying process. The amount you put down affects your loan amount, monthly payment, interest rate, and whether you'll pay mortgage insurance. Understanding your options helps you make the best choice for your situation.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Standard 20% Down Payment</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              The traditional 20% down payment has long been considered the gold standard. Putting down 20% eliminates private mortgage insurance (PMI), which can cost 0.5% to 1% of the loan amount annually. You'll also typically get better interest rates, lower monthly payments, and build immediate equity in your home. A 20% down payment shows lenders you're financially stable and committed, making you a lower-risk borrower. However, saving 20% can take years—on a $400,000 home, that's $80,000—which might not align with your timeline or financial goals.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Low Down Payment Options (3-5%)</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Many buyers successfully purchase homes with much smaller down payments. Conventional loans allow as little as 3% down for first-time buyers, while FHA loans require just 3.5%. These low down payment options let you buy sooner and preserve cash for emergencies, home improvements, or investments. The trade-offs include PMI requirements, slightly higher interest rates, larger loan amounts, and higher monthly payments. However, buying sooner means building equity through appreciation and principal paydown rather than waiting years to save. Many buyers find that the benefits of homeownership outweigh the costs of PMI, which can be removed once you reach 20% equity.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">PMI Considerations</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Private Mortgage Insurance protects the lender if you default, required when you put down less than 20%. PMI typically costs $30-$70 per month for every $100,000 borrowed, adding $150-$350 monthly on a $500,000 loan. While PMI increases your payment, it's not permanent. For conventional loans, lenders must automatically cancel PMI when you reach 22% equity through payments, and you can request cancellation at 20% equity. You can also eliminate PMI by refinancing once you have 20% equity. FHA loans have mortgage insurance for the loan's life unless you refinance to a conventional loan. When evaluating options, calculate whether the time saved by buying sooner offsets the PMI cost.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Saving Strategies</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Building your down payment requires discipline and strategy. Start by setting a specific goal and timeline—if you need $40,000 in 4 years, that's roughly $833 per month. Automate transfers to a dedicated high-yield savings account to separate these funds from daily expenses. Cut discretionary spending by reducing dining out, subscriptions, or entertainment. Look for ways to increase income through side hustles, freelancing, or asking for a raise. Consider gift funds from family members—most lenders allow gift money for part or all of your down payment with proper documentation. First-time buyer programs, down payment assistance programs, and employer benefits might offer additional resources. Track your progress regularly and adjust your strategy as needed to stay on target.
            </p>
          </div>
        </section>


        {/* Browse by Topic Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Browse by Topic</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {topicCategories.map((category, index) => (
              <Link
                key={index}
                href={category.path}
                className="rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 transition-all shadow-sm hover:shadow"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Essential Mortgage Guides Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Essential Mortgage Guides</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {guideArticles.map((article, index) => (
              <Link
                key={index}
                href={article.slug}
                className="flex flex-col h-full group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md hover:border-indigo-300 transition-all"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col flex-grow p-5">
                  <time className="text-xs text-slate-500 mb-2">{article.date}</time>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
                    Read Guide →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-semibold text-base text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-5 pb-5 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

