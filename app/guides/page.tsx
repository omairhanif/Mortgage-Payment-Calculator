"use client";

import Image from "next/image";
import Link from "next/link";
import { getStructuredData } from "./server";

const guideArticles = [
  {
    title: "How to Calculate Your Monthly Mortgage Payment",
    slug: "/how-to-calculate-your-monthly-mortgage-payment",
    image: "/images/articles/how-to-calculate-your-monthly-mortgage-payment.jpg",
    date: "January 20, 2026",
    excerpt: "Learn the step-by-step formula for calculating monthly mortgage payments. Understand principal, interest, and how different factors affect your payment amount."
  },
  {
    title: "How Second Mortgages Work: Rates, Costs & Payments",
    slug: "/how-second-mortgages-work-rates-costs-payments",
    image: "/images/articles/how-second-mortgages-work-rates-costs-payments.jpg",
    date: "February 5, 2026",
    excerpt: "Everything you need to know about second mortgages. Learn about rates, closing costs, monthly payments, and when a second mortgage makes sense."
  },
  {
    title: "How a Home Equity Line of Credit (HELOC) Works",
    slug: "/how-a-home-equity-line-of-credit-heloc-works",
    image: "/images/articles/how-a-home-equity-line-of-credit-heloc-works.jpg",
    date: "February 15, 2026",
    excerpt: "Understand how HELOCs work, including draw periods, repayment terms, interest rates, and the benefits and risks of using your home equity."
  },
  {
    title: "APR vs Interest Rate: What's the Real Difference?",
    slug: "/apr-vs-interest-rate-whats-the-real-difference",
    image: "/images/articles/apr-vs-interest-rate-whats-the-real-difference.jpg",
    date: "February 25, 2026",
    excerpt: "Learn the key differences between APR and interest rate. Understand which number matters most when comparing mortgage and loan offers."
  },
  {
    title: "Fixed-Rate vs. ARM: Which Mortgage Fits You?",
    slug: "/fixed-rate-vs-arm-which-mortgage-fits-you",
    image: "/images/articles/fixed-rate-vs-arm-which-mortgage-fits-you.jpg",
    date: "March 25, 2026",
    excerpt: "Understand the key differences between fixed-rate and adjustable-rate mortgages. Discover which loan type best fits your financial situation and goals."
  },
  {
    title: "How Interest-Only Mortgages Work & Their Risks",
    slug: "/how-interest-only-mortgages-work-their-risks",
    image: "/images/articles/how-interest-only-mortgages-work-their-risks.jpg",
    date: "April 5, 2026",
    excerpt: "Learn how interest-only mortgages work, their advantages and disadvantages, and whether this loan type is right for your financial situation."
  },
  {
    title: "How Extra Mortgage Payments Save You Money",
    slug: "/how-extra-mortgage-payments-save-you-money",
    image: "/images/articles/construction-loans-how-they-work-financing-options.jpg",
    date: "May 12, 2026",
    excerpt: "Discover 7 proven strategies for making extra mortgage payments. Learn how $100-$500 monthly can save $37K-$91K in interest and shorten your mortgage by years."
  },
  {
    title: "Renting vs. Buying a Home: A Full Cost Comparison",
    slug: "/renting-vs-buying-a-home-full-cost-comparison",
    image: "/images/articles/renting-vs-buying-a-home-full-cost-comparison.jpg",
    date: "May 1, 2026",
    excerpt: "Compare the true costs of renting vs buying a home. Real examples, regional breakdowns, break-even timelines, and when each option makes financial sense."
  }
];

export default function GuidesPage() {
  const structuredData = getStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webPage) }}
      />
      <div className="min-h-screen bg-white">
        <section className="py-12 bg-gradient-to-br from-indigo-50 to-white border-b border-slate-200">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mortgage Guides
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {guideArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.slug}
                    className="flex flex-col h-full group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
                  >
                    <div className="relative w-full h-60 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-6">
                      <time className="text-sm text-slate-500 mb-3">{article.date}</time>
                      <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
                        Read Guide →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
