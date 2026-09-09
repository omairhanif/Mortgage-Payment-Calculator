"use client";

import Image from "next/image";
import Link from "next/link";
import { getStructuredData } from "./server";

const blogArticles = [
  {
    title: "Mortgage Tax Benefits Calculator: Save on Taxes",
    slug: "/blog/mortgage-tax-benefits-calculator-save-on-taxes",
    image: "/images/articles/reverse-mortgage-calculator-estimate-available-funds.jpg",
    date: "August 05, 2026",
    excerpt: "Calculate your mortgage tax benefits in Canada. Learn about First-Time Home Buyer incentives, HBP withdrawals, GST rebates, and provincial tax credits in Ontario, BC, and Alberta with real 2026 examples.",
    category: "Mortgage Basics"
  },
  {
    title: "Mortgage Interest Tax Deduction: What You Can Save",
    slug: "/blog/mortgage-interest-tax-deduction-what-you-can-save",
    image: "/images/articles/no-closing-cost-mortgages-are-they-worth-it.jpg",
    date: "August 09, 2026",
    excerpt: "Learn about mortgage interest tax deductions in Canada. Understand why primary residences don't qualify, how rental properties DO, the Smith Manoeuvre strategy, and real tax savings in Ontario, BC, and Alberta.",
    category: "Mortgage Basics"
  },
  {
    title: "Mortgage Qualification Calculator: Do You Qualify?",
    slug: "/blog/mortgage-qualification-calculator-do-you-qualify",
    image: "/images/articles/no-closing-cost-mortgage-calculator-true-savings-analysis.jpg",
    date: "August 19, 2026",
    excerpt: "Use our free mortgage qualification calculator to see if you qualify. Calculate your maximum mortgage amount with real examples from Ontario, BC, and Alberta using TD, BMO, and other Canadian banks.",
    category: "Mortgage Basics"
  },
  {
    title: "How to Qualify for a Mortgage: Key Requirements",
    slug: "/blog/how-to-qualify-for-a-mortgage-key-requirements",
    image: "/images/articles/bridge-loans-explained-costs-terms-when-to-use-them.jpg",
    date: "August 21, 2026",
    excerpt: "Learn the key requirements to qualify for a mortgage in Canada. Understand income needs, credit scores, debt ratios (GDS/TDS), and down payment requirements with real Canadian examples.",
    category: "Mortgage Basics"
  },
  {
    title: "Mortgage Payment Calculator: Estimate Monthly Costs",
    slug: "/blog/mortgage-payment-calculator-estimate-monthly-costs",
    image: "/images/articles/mortgage-payment-calculator-estimate-monthly-costs.jpg",
    date: "January 15, 2026",
    excerpt: "Calculate your estimated monthly mortgage payment including principal, interest, taxes, and insurance. Get accurate estimates in seconds with our free calculator.",
    category: "Mortgage Basics"
  },
  {
    title: "Mortgage Points Calculator - Are Points Worth It?",
    slug: "/blog/mortgage-points-calculator-are-points-worth-it",
    image: "/images/articles/mortgage-points-calculator-break-even-analysis-tool.jpg",
    date: "August 11, 2026",
    excerpt: "Calculate if buying mortgage points is worth it. Learn how points lower interest rates with real examples, break-even analysis, and when paying points makes sense for Canadian homeowners.",
    category: "Loan Types & Options"
  },
  {
    title: "How Mortgage Points Lower Your Interest Rate",
    slug: "/blog/how-mortgage-points-lower-your-interest-rate",
    image: "/images/articles/should-you-buy-mortgage-points-cost-vs-benefit-guide.jpg",
    date: "August 15, 2026",
    excerpt: "Understand the mechanics of how mortgage points reduce your interest rate. Learn lender pricing strategies, rate reduction calculations, and the step-by-step process with real Canadian examples.",
    category: "Loan Types & Options"
  },
  {
    title: "Second Mortgage Calculator: Estimate Your Payments",
    slug: "/blog/second-mortgage-calculator-estimate-your-payments",
    image: "/images/articles/second-mortgage-calculator-estimate-your-payments.jpg",
    date: "February 1, 2026",
    excerpt: "Estimate your second mortgage payments quickly. Compare home equity loans and lines of credit to find the best financing option for your needs.",
    category: "Loan Types & Options"
  },
  {
    title: "FHA Loan Calculator: Estimate Payments & Costs",
    slug: "/blog/fha-loan-calculator-estimate-payments-costs",
    image: "/images/articles/fha-loan-calculator-estimate-payments-costs.jpg",
    date: "March 1, 2026",
    excerpt: "Calculate FHA loan payments including mortgage insurance premiums. Estimate your total monthly costs for an FHA-insured mortgage loan.",
    category: "Loan Types & Options"
  },
  {
    title: "FHA Loan Requirements: Down Payment & Credit Score",
    slug: "/blog/fha-loan-requirements-down-payment-credit-score",
    image: "/images/articles/fha-loan-requirements-down-payment-credit-score.jpg",
    date: "March 5, 2026",
    excerpt: "Discover FHA loan requirements for down payments, credit scores, debt-to-income ratios, and property standards. See if you qualify for FHA financing.",
    category: "Loan Types & Options"
  },
  {
    title: "Jumbo Loan Calculator: Estimate High-Value Payments",
    slug: "/blog/jumbo-loan-calculator-estimate-high-value-payments",
    image: "/images/articles/jumbo-loan-calculator-estimate-high-value-payments.jpg",
    date: "March 10, 2026",
    excerpt: "Calculate monthly payments for jumbo loans exceeding conforming loan limits. Estimate costs for high-value property financing with competitive rates.",
    category: "Loan Types & Options"
  },
  {
    title: "Jumbo Loan Limits & Rates: What Buyers Should Know",
    slug: "/blog/jumbo-loan-limits-rates-what-buyers-should-know",
    image: "/images/articles/jumbo-loan-limits-rates-what-buyers-should-know.jpg",
    date: "March 15, 2026",
    excerpt: "Learn about jumbo loan limits, current interest rates, and qualification requirements. Essential information for luxury home buyers and investors.",
    category: "Loan Types & Options"
  },
  {
    title: "Fixed vs. ARM Calculator: Compare Loan Payments",
    slug: "/blog/fixed-vs-arm-calculator-compare-loan-payments",
    image: "/images/articles/fixed-vs-arm-calculator-compare-loan-payments.jpg",
    date: "March 20, 2026",
    excerpt: "Compare fixed-rate and adjustable-rate mortgage payments side-by-side. Analyze potential savings and risks to choose the right loan type for you.",
    category: "Loan Types & Options"
  },
  {
    title: "Interest-Only Calculator: Estimate Loan Payments",
    slug: "/blog/interest-only-calculator-estimate-loan-payments",
    image: "/images/articles/interest-only-calculator-estimate-loan-payments.jpg",
    date: "April 1, 2026",
    excerpt: "Calculate interest-only mortgage payments and compare them to traditional loans. See how much you'll save initially and pay over the full loan term.",
    category: "Loan Types & Options"
  },
  {
    title: "VA Loan Calculator: Estimate Benefits & Payments",
    slug: "/blog/va-loan-calculator-estimate-benefits-payments",
    image: "/images/articles/va-loan-calculator-estimate-benefits-payments.jpg",
    date: "April 10, 2026",
    excerpt: "Calculate VA loan payments with zero down payment. Estimate funding fees, monthly costs, and total savings compared to conventional mortgages for veterans.",
    category: "Loan Types & Options"
  },
  {
    title: "VA Loan Requirements: Eligibility & Approval Process",
    slug: "/blog/va-loan-requirements-eligibility-approval-process",
    image: "/images/articles/va-loan-requirements-eligibility-approval-process.jpg",
    date: "April 15, 2026",
    excerpt: "Learn VA loan eligibility requirements for active duty, veterans, reserves, and surviving spouses. Understand credit scores, COE process, and approval steps.",
    category: "Loan Types & Options"
  },
  {
    title: "Balloon Payment Calculator: Estimate Final Loan Amount",
    slug: "/blog/balloon-payment-calculator-estimate-final-loan-amount",
    image: "/images/articles/balloon-payment-calculator-estimate-final-loan-amount.jpg",
    date: "April 20, 2026",
    excerpt: "Calculate balloon mortgage payments and final balloon amount. Understand amortization schedules, extra payments, and plan your exit strategy with accurate estimates.",
    category: "Loan Types & Options"
  },
  {
    title: "Balloon Mortgages Explained: Risks & When They Make Sense",
    slug: "/blog/balloon-mortgages-explained-risks-when-they-make-sense",
    image: "/images/articles/balloon-mortgages-explained-risks-when-they-make-sense.jpg",
    date: "April 21, 2026",
    excerpt: "Complete guide to balloon mortgages: understand risks, benefits, and when to use them. Learn exit strategies, refinancing options, and avoid common pitfalls.",
    category: "Loan Types & Options"
  },
  {
    title: "Refinance Calculator: See If Refinancing Pays Off",
    slug: "/blog/refinance-calculator-see-if-refinancing-pays-off",
    image: "/images/articles/bridge-loan-calculator-estimate-short-term-financing.jpg",
    date: "August 23, 2026",
    excerpt: "Use our free refinance calculator to determine if refinancing your mortgage or car loan pays off. Calculate break-even points, monthly savings, and total costs with real Canadian examples from TD, RBC, Scotiabank, and CIBC.",
    category: "Refinancing & Saving"
  },
  {
    title: "When Should You Refinance Your Mortgage?",
    slug: "/blog/when-should-you-refinance-your-mortgage",
    image: "/images/articles/when-should-you-refinance.jpg",
    date: "August 02, 2026",
    excerpt: "Discover the best times to refinance your mortgage. Learn when rate drops, home equity gains, and life changes make refinancing worth it with real-world scenarios and break-even analysis.",
    category: "Refinancing & Saving"
  },
  {
    title: "Extra Payment Calculator: Pay Off Your Mortgage Faster",
    slug: "/blog/extra-payment-calculator-pay-off-mortgage-faster",
    image: "/images/articles/construction-loan-calculator-estimate-build-costs.jpg",
    date: "May 10, 2026",
    excerpt: "Calculate how extra mortgage payments reduce your loan term and save interest. Real examples show $100-$500 monthly extra payments on mortgages, car loans, and student loans.",
    category: "Refinancing & Saving"
  },
  {
    title: "Interest-Only Loan Calculator With Extra Payments",
    slug: "/blog/interest-only-loan-calculator-with-extra-payments",
    image: "/images/articles/home-equity-loan-calculator-estimate-borrowing-power.jpg",
    date: "April 25, 2026",
    excerpt: "Calculate interest-only mortgage payments with optional extra principal. Compare simple vs compound interest, view amortization schedules, and plan your payoff strategy.",
    category: "Refinancing & Saving"
  },
  {
    title: "Cut Interest-Only Loan Costs With Extra Payments",
    slug: "/blog/cut-interest-only-loan-costs-with-extra-payments",
    image: "/images/articles/home-equity-loan-vs-heloc-which-is-right-for-you.jpg",
    date: "April 25, 2026",
    excerpt: "Learn proven strategies to reduce interest-only loan costs through systematic extra payments. Real examples show how to save $10,000+ and avoid payment shock.",
    category: "Refinancing & Saving"
  },
  {
    title: "Biweekly Payment Calculator: Pay Off Loans Faster",
    slug: "/blog/biweekly-payment-calculator-pay-off-loans-faster",
    image: "/images/articles/biweekly-payment-calculator-accelerate-loan-payoff.jpg",
    date: "May 20, 2026",
    excerpt: "Calculate biweekly payments for mortgages, car loans, and salary. Learn how 26 payments save $40K-$80K in interest with real Ontario, BC, and Alberta examples.",
    category: "Refinancing & Saving"
  },
  {
    title: "Biweekly vs. Monthly Mortgage Payments Compared",
    slug: "/blog/biweekly-vs-monthly-mortgage-payments-compared",
    image: "/images/articles/biweekly-mortgage-payments-how-much-can-you-save.jpg",
    date: "May 21, 2026",
    excerpt: "Compare biweekly vs monthly mortgage payments with real borrower outcomes. See exact interest savings, pros/cons, and decision framework for Canadian homeowners.",
    category: "Refinancing & Saving"
  },
  {
    title: "Rent vs. Buy Calculator: Which Costs Less?",
    slug: "/blog/rent-vs-buy-calculator-which-costs-less",
    image: "/images/articles/rent-vs-buy-calculator-which-costs-less.jpg",
    date: "May 1, 2026",
    excerpt: "Use rent vs buy calculators to compare true costs. Learn the 5% rule, 20/30/3 rule, and how to calculate if buying or renting is better for your situation.",
    category: "Home Buying & Financial Planning"
  },
  {
    title: "Renting vs. Buying a Home: A Full Cost Comparison",
    slug: "/blog/renting-vs-buying-a-home-full-cost-comparison",
    image: "/images/articles/renting-vs-buying-a-home-full-cost-comparison.jpg",
    date: "May 1, 2026",
    excerpt: "Compare the true costs of renting vs buying a home. Real examples, regional breakdowns, break-even timelines, and when each option makes financial sense.",
    category: "Home Buying & Financial Planning"
  },
  {
    title: "Income Requirement Calculator: How Much You Need",
    slug: "/blog/income-requirement-calculator-how-much-you-need",
    image: "/images/articles/usda-loan-eligibility-income-property-requirements.jpg",
    date: "May 5, 2026",
    excerpt: "Calculate income needed for mortgages from $200K to $1M+ in Canada. Understand GDS/TDS ratios, stress test impacts, and qualifying income by salary level.",
    category: "Home Buying & Financial Planning"
  },
  {
    title: "How Much Income Do You Need to Buy a Home?",
    slug: "/blog/how-much-income-do-you-need-to-buy-a-home",
    image: "/images/articles/usda-loan-calculator-rural-home-payment-estimator.jpg",
    date: "May 5, 2026",
    excerpt: "Complete guide to mortgage income requirements in Canada. Learn how lenders calculate qualifying income, regional variations, and income needed by mortgage amount.",
    category: "Home Buying & Financial Planning"
  }
];

export default function BlogsPage() {
  const structuredData = getStructuredData();

  const categoryOrder = [
    "Mortgage Basics",
    "Loan Types & Options",
    "Refinancing & Saving",
    "Home Buying & Financial Planning"
  ];

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
                Mortgage Blogs
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
    Stay informed with helpful mortgage articles covering home financing,
    interest rates, and practical tips to help
    you make confident mortgage decisions.
  </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
            {categoryOrder.map((category) => (
              <div className="mb-16" key={category}>
                <div className="mb-6">
                  <h2 className="font-serif text-2xl font-bold text-slate-900">{category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {blogArticles
                    .filter((article) => article.category === category)
                    .map((article, index) => (
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
                            Read Article →
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
