"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticlesPage() {
  // 18 Active Articles (clickable with links)
  const activeArticles = [
    {
      title: "Mortgage Payment Calculator: Estimate Monthly Costs",
      slug: "/mortgage-payment-calculator-estimate-monthly-costs",
      image: "/images/articles/mortgage-payment-calculator-estimate-monthly-costs.jpg",
      date: "January 15, 2026",
      excerpt: "Calculate your estimated monthly mortgage payment including principal, interest, taxes, and insurance. Get accurate estimates in seconds with our free calculator."
    },
    {
      title: "How to Calculate Your Monthly Mortgage Payment",
      slug: "/how-to-calculate-your-monthly-mortgage-payment",
      image: "/images/articles/how-to-calculate-your-monthly-mortgage-payment.jpg",
      date: "January 20, 2026",
      excerpt: "Learn the step-by-step formula for calculating monthly mortgage payments. Understand principal, interest, and how different factors affect your payment amount."
    },
    {
      title: "Second Mortgage Calculator: Estimate Your Payments",
      slug: "/second-mortgage-calculator-estimate-your-payments",
      image: "/images/articles/second-mortgage-calculator-estimate-your-payments.jpg",
      date: "February 1, 2026",
      excerpt: "Estimate your second mortgage payments quickly. Compare home equity loans and lines of credit to find the best financing option for your needs."
    },
    {
      title: "How Second Mortgages Work: Rates, Costs & Payments",
      slug: "/how-second-mortgages-work-rates-costs-payments",
      image: "/images/articles/how-second-mortgages-work-rates-costs-payments.jpg",
      date: "February 5, 2026",
      excerpt: "Everything you need to know about second mortgages. Learn about rates, closing costs, monthly payments, and when a second mortgage makes sense."
    },
    {
      title: "HELOC Calculator: Estimate Your Credit Line Costs",
      slug: "/heloc-calculator-estimate-credit-line-costs",
      image: "/images/articles/heloc-calculator-estimate-your-credit-line-costs.jpg",
      date: "February 10, 2026",
      excerpt: "Estimate your home equity line of credit costs and monthly payments. Compare rates and terms to find the best HELOC option for your situation."
    },
    {
      title: "How a Home Equity Line of Credit (HELOC) Works",
      slug: "/how-a-home-equity-line-of-credit-heloc-works",
      image: "/images/articles/how-a-home-equity-line-of-credit-heloc-works.jpg",
      date: "February 15, 2026",
      excerpt: "Understand how HELOCs work, including draw periods, repayment terms, interest rates, and the benefits and risks of using your home equity."
    },
    {
      title: "Real APR Calculator: True Cost of Your Loan",
      slug: "/real-apr-calculator-true-cost-of-your-loan",
      image: "/images/articles/real-apr-calculator-true-cost-of-your-loan.jpg",
      date: "February 20, 2026",
      excerpt: "Calculate the true annual percentage rate of your loan including all fees and costs. Get a complete picture of your borrowing expenses."
    },
    {
      title: "APR vs Interest Rate: What's the Real Difference?",
      slug: "/apr-vs-interest-rate-whats-the-real-difference",
      image: "/images/articles/apr-vs-interest-rate-whats-the-real-difference.jpg",
      date: "February 25, 2026",
      excerpt: "Learn the key differences between APR and interest rate. Understand which number matters most when comparing mortgage and loan offers."
    },
    {
      title: "FHA Loan Calculator: Estimate Payments & Costs",
      slug: "/fha-loan-calculator-estimate-payments-costs",
      image: "/images/articles/fha-loan-calculator-estimate-payments-costs.jpg",
      date: "March 1, 2026",
      excerpt: "Calculate FHA loan payments including mortgage insurance premiums. Estimate your total monthly costs for an FHA-insured mortgage loan."
    },
    {
      title: "FHA Loan Requirements: Down Payment & Credit Score",
      slug: "/fha-loan-requirements-down-payment-credit-score",
      image: "/images/articles/fha-loan-requirements-down-payment-credit-score.jpg",
      date: "March 5, 2026",
      excerpt: "Discover FHA loan requirements for down payments, credit scores, debt-to-income ratios, and property standards. See if you qualify for FHA financing."
    },
    {
      title: "Jumbo Loan Calculator: Estimate High-Value Payments",
      slug: "/jumbo-loan-calculator-estimate-high-value-payments",
      image: "/images/articles/jumbo-loan-calculator-estimate-high-value-payments.jpg",
      date: "March 10, 2026",
      excerpt: "Calculate monthly payments for jumbo loans exceeding conforming loan limits. Estimate costs for high-value property financing with competitive rates."
    },
    {
      title: "Jumbo Loan Limits & Rates: What Buyers Should Know",
      slug: "/jumbo-loan-limits-rates-what-buyers-should-know",
      image: "/images/articles/jumbo-loan-limits-rates-what-buyers-should-know.jpg",
      date: "March 15, 2026",
      excerpt: "Learn about jumbo loan limits, current interest rates, and qualification requirements. Essential information for luxury home buyers and investors."
    },
    {
      title: "Fixed vs. ARM Calculator: Compare Loan Payments",
      slug: "/fixed-vs-arm-calculator-compare-loan-payments",
      image: "/images/articles/fixed-vs-arm-calculator-compare-loan-payments.jpg",
      date: "March 20, 2026",
      excerpt: "Compare fixed-rate and adjustable-rate mortgage payments side-by-side. Analyze potential savings and risks to choose the right loan type for you."
    },
    {
      title: "Fixed-Rate vs. ARM: Which Mortgage Fits You?",
      slug: "/fixed-rate-vs-arm-which-mortgage-fits-you",
      image: "/images/articles/fixed-rate-vs-arm-which-mortgage-fits-you.jpg",
      date: "March 25, 2026",
      excerpt: "Understand the key differences between fixed-rate and adjustable-rate mortgages. Discover which loan type best fits your financial situation and goals."
    },
    {
      title: "Interest-Only Calculator: Estimate Loan Payments",
      slug: "/interest-only-calculator-estimate-loan-payments",
      image: "/images/articles/interest-only-calculator-estimate-loan-payments.jpg",
      date: "April 1, 2026",
      excerpt: "Calculate interest-only mortgage payments and compare them to traditional loans. See how much you'll save initially and pay over the full loan term."
    },
    {
      title: "How Interest-Only Mortgages Work & Their Risks",
      slug: "/how-interest-only-mortgages-work-their-risks",
      image: "/images/articles/how-interest-only-mortgages-work-their-risks.jpg",
      date: "April 5, 2026",
      excerpt: "Learn how interest-only mortgages work, their advantages and disadvantages, and whether this loan type is right for your financial situation."
    },
    {
      title: "VA Loan Calculator: Estimate Benefits & Payments",
      slug: "/va-loan-calculator-estimate-benefits-payments",
      image: "/images/articles/va-loan-calculator-estimate-benefits-payments.jpg",
      date: "April 10, 2026",
      excerpt: "Calculate VA loan payments with zero down payment. Estimate funding fees, monthly costs, and total savings compared to conventional mortgages for veterans."
    },
    {
      title: "VA Loan Requirements: Eligibility & Approval Process",
      slug: "/va-loan-requirements-eligibility-approval-process",
      image: "/images/articles/va-loan-requirements-eligibility-approval-process.jpg",
      date: "April 15, 2026",
      excerpt: "Learn VA loan eligibility requirements for active duty, veterans, reserves, and surviving spouses. Understand credit scores, COE process, and approval steps."
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-br from-indigo-50 to-white border-b border-slate-200">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mortgage Articles & Guides
            </h1>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          {/* Active Articles */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.slug}
                  className="flex flex-col h-full group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
                >
                  {/* Image with fixed height */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content area with flex-grow */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Date */}
                    <time className="text-sm text-slate-500 mb-3">
                      {article.date}
                    </time>
                    
                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    {/* CTA - pushed to bottom with mt-auto */}
                    <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
                      Read Article →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

