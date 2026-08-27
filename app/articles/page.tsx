"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticlesPage() {
  // 38 Active Articles (clickable with links)
  const activeArticles = [
    {
      title: "Mortgage Tax Benefits Calculator: Save on Taxes",
      slug: "/mortgage-tax-benefits-calculator-save-on-taxes",
      image: "/images/articles/reverse-mortgage-calculator-estimate-available-funds.jpg",
      date: "August 05, 2026",
      excerpt: "Calculate your mortgage tax benefits in Canada. Learn about First-Time Home Buyer incentives, HBP withdrawals, GST rebates, and provincial tax credits in Ontario, BC, and Alberta with real 2026 examples."
    },
    {
      title: "Mortgage Interest Tax Deduction: What You Can Save",
      slug: "/mortgage-interest-tax-deduction-what-you-can-save",
      image: "/images/articles/no-closing-cost-mortgages-are-they-worth-it.jpg",
      date: "August 09, 2026",
      excerpt: "Learn about mortgage interest tax deductions in Canada. Understand why primary residences don't qualify, how rental properties DO, the Smith Manoeuvre strategy, and real tax savings in Ontario, BC, and Alberta."
    },
    {
      title: "Mortgage Points Calculator - Are Points Worth It?",
      slug: "/mortgage-points-calculator-are-points-worth-it",
      image: "/images/articles/mortgage-points-calculator-break-even-analysis-tool.jpg",
      date: "August 11, 2026",
      excerpt: "Calculate if buying mortgage points is worth it. Learn how points lower interest rates with real examples, break-even analysis, and when paying points makes sense for Canadian homeowners."
    },
    {
      title: "How Mortgage Points Lower Your Interest Rate",
      slug: "/how-mortgage-points-lower-your-interest-rate",
      image: "/images/articles/should-you-buy-mortgage-points-cost-vs-benefit-guide.jpg",
      date: "August 15, 2026",
      excerpt: "Understand the mechanics of how mortgage points reduce your interest rate. Learn lender pricing strategies, rate reduction calculations, and the step-by-step process with real Canadian examples."
    },
    {
      title: "Mortgage Qualification Calculator: Do You Qualify?",
      slug: "/mortgage-qualification-calculator-do-you-qualify",
      image: "/images/articles/no-closing-cost-mortgage-calculator-true-savings-analysis.jpg",
      date: "August 19, 2026",
      excerpt: "Use our free mortgage qualification calculator to see if you qualify. Calculate your maximum mortgage amount with real examples from Ontario, BC, and Alberta using TD, BMO, and other Canadian banks."
    },
    {
      title: "How to Qualify for a Mortgage: Key Requirements",
      slug: "/how-to-qualify-for-a-mortgage-key-requirements",
      image: "/images/articles/bridge-loans-explained-costs-terms-when-to-use-them.jpg",
      date: "August 21, 2026",
      excerpt: "Learn the key requirements to qualify for a mortgage in Canada. Understand income needs, credit scores, debt ratios (GDS/TDS), and down payment requirements with real Canadian examples."
    },
    {
      title: "Refinance Calculator: See If Refinancing Pays Off",
      slug: "/refinance-calculator-see-if-refinancing-pays-off",
      image: "/images/articles/bridge-loan-calculator-estimate-short-term-financing.jpg",
      date: "August 23, 2026",
      excerpt: "Use our free refinance calculator to determine if refinancing your mortgage or car loan pays off. Calculate break-even points, monthly savings, and total costs with real Canadian examples from TD, RBC, Scotiabank, and CIBC."
    },
    {
      title: "When Should You Refinance Your Mortgage?",
      slug: "/when-should-you-refinance-your-mortgage",
      image: "/images/articles/when-should-you-refinance.jpg",
      date: "August 02, 2026",
      excerpt: "Discover the best times to refinance your mortgage. Learn when rate drops, home equity gains, and life changes make refinancing worth it with real-world scenarios and break-even analysis."
    },
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
      image: "/images/articles/heloc-calculator-estimate-credit-line-costs.jpg",
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
      title: "Extra Payment Calculator: Pay Off Your Mortgage Faster",
      slug: "/extra-payment-calculator-pay-off-mortgage-faster",
      image: "/images/articles/construction-loan-calculator-estimate-build-costs.jpg",
      date: "May 10, 2026",
      excerpt: "Calculate how extra mortgage payments reduce your loan term and save interest. Real examples show $100-$500 monthly extra payments on mortgages, car loans, and student loans."
    },
    {
      title: "How Extra Mortgage Payments Save You Money",
      slug: "/how-extra-mortgage-payments-save-you-money",
      image: "/images/articles/construction-loans-how-they-work-financing-options.jpg",
      date: "May 12, 2026",
      excerpt: "Discover 7 proven strategies for making extra mortgage payments. Learn how $100-$500 monthly can save $37K-$91K in interest and shorten your mortgage by years."
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
    },
    {
      title: "Balloon Payment Calculator: Estimate Final Loan Amount",
      slug: "/balloon-payment-calculator-estimate-final-loan-amount",
      image: "/images/articles/balloon-payment-calculator-estimate-final-loan-amount.jpg",
      date: "April 20, 2026",
      excerpt: "Calculate balloon mortgage payments and final balloon amount. Understand amortization schedules, extra payments, and plan your exit strategy with accurate estimates."
    },
    {
      title: "Balloon Mortgages Explained: Risks & When They Make Sense",
      slug: "/balloon-mortgages-explained-risks-when-they-make-sense",
      image: "/images/articles/balloon-mortgages-explained-risks-when-they-make-sense.jpg",
      date: "April 21, 2026",
      excerpt: "Complete guide to balloon mortgages: understand risks, benefits, and when to use them. Learn exit strategies, refinancing options, and avoid common pitfalls."
    },
    {
      title: "Interest-Only Loan Calculator With Extra Payments",
      slug: "/interest-only-loan-calculator-with-extra-payments",
      image: "/images/articles/home-equity-loan-calculator-estimate-borrowing-power.jpg",
      date: "April 25, 2026",
      excerpt: "Calculate interest-only mortgage payments with optional extra principal. Compare simple vs compound interest, view amortization schedules, and plan your payoff strategy."
    },
    {
      title: "Cut Interest-Only Loan Costs With Extra Payments",
      slug: "/cut-interest-only-loan-costs-with-extra-payments",
      image: "/images/articles/home-equity-loan-vs-heloc-which-is-right-for-you.jpg",
      date: "April 25, 2026",
      excerpt: "Learn proven strategies to reduce interest-only loan costs through systematic extra payments. Real examples show how to save $10,000+ and avoid payment shock."
    },
    {
      title: "Rent vs. Buy Calculator: Which Costs Less?",
      slug: "/rent-vs-buy-calculator-which-costs-less",
      image: "/images/articles/rent-vs-buy-calculator-which-costs-less.jpg",
      date: "May 1, 2026",
      excerpt: "Use rent vs buy calculators to compare true costs. Learn the 5% rule, 20/30/3 rule, and how to calculate if buying or renting is better for your situation."
    },
    {
      title: "Renting vs. Buying a Home: A Full Cost Comparison",
      slug: "/renting-vs-buying-a-home-full-cost-comparison",
      image: "/images/articles/renting-vs-buying-a-home-full-cost-comparison.jpg",
      date: "May 1, 2026",
      excerpt: "Compare the true costs of renting vs buying a home. Real examples, regional breakdowns, break-even timelines, and when each option makes financial sense."
    },
    {
      title: "Income Requirement Calculator: How Much You Need",
      slug: "/income-requirement-calculator-how-much-you-need",
      image: "/images/articles/usda-loan-eligibility-income-property-requirements.jpg",
      date: "May 5, 2026",
      excerpt: "Calculate income needed for mortgages from $200K to $1M+ in Canada. Understand GDS/TDS ratios, stress test impacts, and qualifying income by salary level."
    },
    {
      title: "How Much Income Do You Need to Buy a Home?",
      slug: "/how-much-income-do-you-need-to-buy-a-home",
      image: "/images/articles/usda-loan-calculator-rural-home-payment-estimator.jpg",
      date: "May 5, 2026",
      excerpt: "Complete guide to mortgage income requirements in Canada. Learn how lenders calculate qualifying income, regional variations, and income needed by mortgage amount."
    },
    {
      title: "Biweekly Payment Calculator: Pay Off Loans Faster",
      slug: "/biweekly-payment-calculator-pay-off-loans-faster",
      image: "/images/articles/biweekly-payment-calculator-accelerate-loan-payoff.jpg",
      date: "May 20, 2026",
      excerpt: "Calculate biweekly payments for mortgages, car loans, and salary. Learn how 26 payments save $40K-$80K in interest with real Ontario, BC, and Alberta examples."
    },
    {
      title: "Biweekly vs. Monthly Mortgage Payments Compared",
      slug: "/biweekly-vs-monthly-mortgage-payments-compared",
      image: "/images/articles/biweekly-mortgage-payments-how-much-can-you-save.jpg",
      date: "May 21, 2026",
      excerpt: "Compare biweekly vs monthly mortgage payments with real borrower outcomes. See exact interest savings, pros/cons, and decision framework for Canadian homeowners."
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

