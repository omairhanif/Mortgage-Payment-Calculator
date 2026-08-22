"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticlesPage() {
  // 16 Active Articles (clickable with links)
  const activeArticles = [
    {
      title: "Mortgage Payment Calculator: Estimate Monthly Costs",
      slug: "/mortgage-payment-calculator-estimate-monthly-costs",
      image: "/images/articles/Mortgage Payment Calculator Estimate Monthly Costs.jpg"
    },
    {
      title: "How to Calculate Your Monthly Mortgage Payment",
      slug: "/how-to-calculate-your-monthly-mortgage-payment",
      image: "/images/articles/How to Calculate Your Monthly Mortgage Payment.jpg"
    },
    {
      title: "Second Mortgage Calculator: Estimate Your Payments",
      slug: "/second-mortgage-calculator-estimate-your-payments",
      image: "/images/articles/Second Mortgage Calculator Estimate Your Payments.jpg"
    },
    {
      title: "How Second Mortgages Work: Rates, Costs & Payments",
      slug: "/how-second-mortgages-work-rates-costs-payments",
      image: "/images/articles/How Second Mortgages Work Rates, Costs & Payments.jpg"
    },
    {
      title: "HELOC Calculator: Estimate Your Credit Line Costs",
      slug: "/heloc-calculator-estimate-credit-line-costs",
      image: "/images/articles/HELOC Calculator Estimate Your Credit Line Costs.jpg"
    },
    {
      title: "How a Home Equity Line of Credit (HELOC) Works",
      slug: "/how-a-home-equity-line-of-credit-heloc-works",
      image: "/images/articles/How a Home Equity Line of Credit (HELOC) Works.jpg"
    },
    {
      title: "Real APR Calculator: True Cost of Your Loan",
      slug: "/real-apr-calculator-true-cost-of-your-loan",
      image: "/images/articles/Real APR Calculator True Cost of Your Loan.jpg"
    },
    {
      title: "APR vs Interest Rate: What's the Real Difference?",
      slug: "/apr-vs-interest-rate-whats-the-real-difference",
      image: "/images/articles/APR vs Interest Rate What's the Real Difference.jpg"
    },
    {
      title: "FHA Loan Calculator: Estimate Payments & Costs",
      slug: "/fha-loan-calculator-estimate-payments-costs",
      image: "/images/articles/FHA Loan Calculator Estimate Payments & Costs.jpg"
    },
    {
      title: "FHA Loan Requirements: Down Payment & Credit Score",
      slug: "/fha-loan-requirements-down-payment-credit-score",
      image: "/images/articles/FHA Loan Requirements Down Payment & Credit Score.jpg"
    },
    {
      title: "Jumbo Loan Calculator: Estimate High-Value Payments",
      slug: "/jumbo-loan-calculator-estimate-high-value-payments",
      image: "/images/articles/Jumbo Loan Calculator Estimate High-Value Payments.jpg"
    },
    {
      title: "Jumbo Loan Limits & Rates: What Buyers Should Know",
      slug: "/jumbo-loan-limits-rates-what-buyers-should-know",
      image: "/images/articles/Jumbo Loan Limits & Rates What Buyers Should Know.jpg"
    },
    {
      title: "Fixed vs. ARM Calculator: Compare Loan Payments",
      slug: "/fixed-vs-arm-calculator-compare-loan-payments",
      image: "/images/articles/Fixed vs. ARM Calculator Compare Loan Payments.jpg"
    },
    {
      title: "Fixed-Rate vs. ARM: Which Mortgage Fits You?",
      slug: "/fixed-rate-vs-arm-which-mortgage-fits-you",
      image: "/images/articles/Fixed-Rate vs. ARM Which Mortgage Fits You.jpg"
    },
    {
      title: "Interest-Only Calculator: Estimate Loan Payments",
      slug: "/interest-only-calculator-estimate-loan-payments",
      image: "/images/articles/Interest-Only Calculator Estimate Loan Payments.jpg"
    },
    {
      title: "How Interest-Only Mortgages Work & Their Risks",
      slug: "/how-interest-only-mortgages-work-their-risks",
      image: "/images/articles/How Interest-Only Mortgages Work & Their Risks.jpg"
    }
  ];

  // 22 Coming Soon Articles (non-clickable with badge)
  const comingSoonArticles = [
    {
      title: "VA Loan Calculator: Estimate Benefits & Payments",
      image: "/images/articles/VA Loan Calculator Estimate Benefits & Payments.jpg"
    },
    {
      title: "VA Loan Requirements: Eligibility & Approval Process",
      image: "/images/articles/VA Loan Requirements Eligibility & Approval Process.jpg"
    },
    {
      title: "USDA Loan Calculator: Rural Home Payment Estimator",
      image: "/images/articles/USDA Loan Calculator Rural Home Payment Estimator.jpg"
    },
    {
      title: "USDA Loan Eligibility: Income & Property Requirements",
      image: "/images/articles/USDA Loan Eligibility Income & Property Requirements.jpg"
    },
    {
      title: "Reverse Mortgage Calculator: Estimate Available Funds",
      image: "/images/articles/Reverse Mortgage Calculator Estimate Available Funds.jpg"
    },
    {
      title: "How Reverse Mortgages Work: Pros, Cons & Requirements",
      image: "/images/articles/How Reverse Mortgages Work Pros, Cons & Requirements.jpg"
    },
    {
      title: "Balloon Payment Calculator: Estimate Final Loan Amount",
      image: "/images/articles/Balloon Payment Calculator Estimate Final Loan Amount.jpg"
    },
    {
      title: "Balloon Mortgages Explained: Risks & When They Make Sense",
      image: "/images/articles/Balloon Mortgages Explained Risks & When They Make Sense.jpg"
    },
    {
      title: "Construction Loan Calculator: Estimate Build Costs",
      image: "/images/articles/Construction Loan Calculator Estimate Build Costs.jpg"
    },
    {
      title: "Construction Loans: How They Work & Financing Options",
      image: "/images/articles/Construction Loans How They Work & Financing Options.jpg"
    },
    {
      title: "Bridge Loan Calculator: Estimate Short-Term Financing",
      image: "/images/articles/Bridge Loan Calculator Estimate Short-Term Financing.jpg"
    },
    {
      title: "Bridge Loans Explained: Costs, Terms & When to Use Them",
      image: "/images/articles/Bridge Loans Explained Costs, Terms & When to Use Them.jpg"
    },
    {
      title: "Home Equity Loan Calculator: Estimate Borrowing Power",
      image: "/images/articles/Home Equity Loan Calculator Estimate Borrowing Power.jpg"
    },
    {
      title: "Home Equity Loan vs HELOC: Which Is Right for You?",
      image: "/images/articles/Home Equity Loan vs HELOC Which Is Right for You.jpg"
    },
    {
      title: "No-Closing-Cost Mortgage Calculator: True Savings Analysis",
      image: "/images/articles/No-Closing-Cost Mortgage Calculator True Savings Analysis.jpg"
    },
    {
      title: "No-Closing-Cost Mortgages: Are They Worth It?",
      image: "/images/articles/No-Closing-Cost Mortgages Are They Worth It.jpg"
    },
    {
      title: "Buy vs Rent Calculator: Which Option Saves You More?",
      image: "/images/articles/Buy vs Rent Calculator Which Option Saves You More.jpg"
    },
    {
      title: "Buying vs Renting: Financial Analysis for Homebuyers",
      image: "/images/articles/Buying vs Renting Financial Analysis for Homebuyers.jpg"
    },
    {
      title: "Mortgage Points Calculator: Break-Even Analysis Tool",
      image: "/images/articles/Mortgage Points Calculator Break-Even Analysis Tool.jpg"
    },
    {
      title: "Should You Buy Mortgage Points? Cost vs Benefit Guide",
      image: "/images/articles/Should You Buy Mortgage Points Cost vs Benefit Guide.jpg"
    },
    {
      title: "Biweekly Payment Calculator: Accelerate Loan Payoff",
      image: "/images/articles/Biweekly Payment Calculator Accelerate Loan Payoff.jpg"
    },
    {
      title: "Biweekly Mortgage Payments: How Much Can You Save?",
      image: "/images/articles/Biweekly Mortgage Payments How Much Can You Save.jpg"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.slug}
                  className="group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Coming Soon Articles */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonArticles.map((article, index) => (
                <div
                  key={index}
                  className="relative rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden opacity-75"
                >
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Coming Soon
                  </div>
                  
                  <div className="relative w-full aspect-[4/3] grayscale">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-base font-bold text-slate-600 line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

