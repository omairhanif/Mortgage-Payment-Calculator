 "use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { 
  Home,
  DollarSign,
  Zap,
  PieChart,
  Shield,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from "lucide-react";
import { getStructuredData } from "./server";

export default function Page() {
  const structuredData = getStructuredData();
  // FAQ accordion state - only one open at a time
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
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
    <div>
      {/* Calculator Section with Introduction */}
      <section className="pt-12 pb-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">

          {/* Introduction */}
          <div className="mb-8 mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <Home className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
                Mortgage Payment Calculator
              </h1>
            </div>
            <div className="h-px bg-indigo-600 mb-6"></div>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>Estimate your complete monthly housing cost based on your loan amount, interest rate, down payment, and loan term, while including property taxes, homeowners insurance, PMI, and HOA fees.</p>
              <p>Understand how your loan terms affect your monthly payment, total interest, and overall cost so you can make a more informed home financing decision.</p>
            </div>
          </div>
          
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <MortgageCalculator category="mortgage" isHomepage={true} />
          </Suspense>
        </div>
      </section>

      {/* Why Use Us Section */}
      <section className="py-12 bg-slate-50/60">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Why Use Our Calculator
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Get accurate mortgage estimates with our free, easy-to-use calculator
            </p>
          </div>

          {/* Benefits Grid - 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Free to Use */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-indigo-50 p-3">
                  <DollarSign className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-center font-serif text-lg font-bold text-slate-900 mb-2">
                Free to Use
              </h3>
              <p className="text-center text-sm text-slate-600 leading-relaxed">
                Use our comprehensive mortgage calculator completely free with no hidden fees or charges.
              </p>
            </div>

            {/* Card 2: Instant Calculations */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-indigo-50 p-3">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-center font-serif text-lg font-bold text-slate-900 mb-2">
                Instant Calculations
              </h3>
              <p className="text-center text-sm text-slate-600 leading-relaxed">
                Get accurate mortgage payment estimates in real-time as you adjust your loan parameters.
              </p>
            </div>

            {/* Card 3: Detailed Payment Breakdown */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-indigo-50 p-3">
                  <PieChart className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-center font-serif text-lg font-bold text-slate-900 mb-2">
                Detailed Payment Breakdown
              </h3>
              <p className="text-center text-sm text-slate-600 leading-relaxed">
                View complete breakdowns including principal, interest, taxes, insurance, PMI, and HOA fees.
              </p>
            </div>

            {/* Card 4: No Sign-Up Required */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-indigo-50 p-3">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-center font-serif text-lg font-bold text-slate-900 mb-2">
                No Sign-Up Required
              </h3>
              <p className="text-center text-sm text-slate-600 leading-relaxed">
                Calculate your mortgage payments instantly without creating an account or providing personal information.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            
            {/* Section Header */}
            <div className="mb-10 flex justify-between items-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">
                Latest Articles
              </h2>
              <Link
                href="/articles"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors group"
              >
                <span>See More</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Article Cards Grid - 4 article cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Article 1: Mortgage Payment Calculator */}
              <Link
                href="/mortgage-payment-calculator-estimate-monthly-costs"
                className="flex flex-col h-full group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/images/articles/mortgage-payment-calculator-estimate-monthly-costs.jpg"
                    alt="Mortgage Payment Calculator: Estimate Monthly Costs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <time className="text-sm text-slate-500 mb-3">January 15, 2026</time>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2">
                    Mortgage Payment Calculator: Estimate Monthly Costs
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                    Calculate your estimated monthly mortgage payment including principal, interest, taxes, and insurance. Get accurate estimates in seconds with our free calculator.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
                    Read Article â†’
                  </div>
                </div>
              </Link>

              {/* Article 2: HELOC Calculator */}
              <Link
                href="/heloc-calculator-estimate-credit-line-costs"
                className="flex flex-col h-full group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/images/articles/heloc-calculator-estimate-credit-line-costs.jpg"
                    alt="HELOC Calculator: Estimate Your Credit Line Costs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <time className="text-sm text-slate-500 mb-3">February 10, 2026</time>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2">
                    HELOC Calculator: Estimate Your Credit Line Costs
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                    Estimate your home equity line of credit costs and monthly payments. Compare rates and terms to find the best HELOC option for your situation.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
                    Read Article â†’
                  </div>
                </div>
              </Link>

              {/* Article 3: FHA Loan Calculator */}
              <Link
                href="/fha-loan-calculator-estimate-payments-costs"
                className="flex flex-col h-full group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/images/articles/fha-loan-calculator-estimate-payments-costs.jpg"
                    alt="FHA Loan Calculator: Estimate Payments & Costs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <time className="text-sm text-slate-500 mb-3">March 1, 2026</time>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2">
                    FHA Loan Calculator: Estimate Payments & Costs
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                    Calculate FHA loan payments including mortgage insurance premiums. Estimate your total monthly costs for an FHA-insured mortgage loan.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
                    Read Article â†’
                  </div>
                </div>
              </Link>

              {/* Article 4: Interest-Only Calculator */}
              <Link
                href="/interest-only-calculator-estimate-loan-payments"
                className="flex flex-col h-full group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/images/articles/interest-only-calculator-estimate-loan-payments.jpg"
                    alt="Interest-Only Calculator: Estimate Loan Payments"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <time className="text-sm text-slate-500 mb-3">April 1, 2026</time>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2">
                    Interest-Only Calculator: Estimate Loan Payments
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                    Calculate interest-only mortgage payments and compare them to traditional loans. See how much you'll save initially and pay over the full loan term.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
                    Read Article â†’
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            
            {/* Section Header */}
            <div className="mb-8 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base">
                Common questions about mortgage calculations
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              
              {/* FAQ 1 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    How is my monthly mortgage payment calculated?
                  </h3>
                  {openFAQ === 0 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 0 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      Your monthly payment includes principal and interest (P&I) calculated using your loan amount, interest rate, and loan term. Additional costs like property taxes, homeowners insurance, PMI (if applicable), and HOA fees are added to determine your total monthly housing payment.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(1)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    What does my monthly payment include?
                  </h3>
                  {openFAQ === 1 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 1 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      Your total monthly payment typically includes: Principal & Interest (P&I), Property Taxes, Homeowners Insurance, Private Mortgage Insurance (PMI) if your down payment is less than 20%, and HOA fees if applicable to your property.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(2)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    How does the interest rate affect my payment?
                  </h3>
                  {openFAQ === 2 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 2 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      The interest rate directly impacts both your monthly payment and total interest paid over the life of the loan. Even a small rate difference (e.g., 0.5%) can significantly affect your monthly payment and total cost. Use the calculator to compare different rates.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(3)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    What is PMI?
                  </h3>
                  {openFAQ === 3 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 3 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      Private Mortgage Insurance (PMI) is typically required when your down payment is less than 20% of the home's value. It protects the lender if you default on the loan. PMI is usually 0.5% to 1% of the loan amount annually and can be removed once you reach 20% equity.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(4)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    Can I calculate different loan terms?
                  </h3>
                  {openFAQ === 4 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 4 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      Yes! You can easily switch between 10, 15, 20, and 30-year loan terms using the calculator. Shorter terms typically have lower interest rates but higher monthly payments, while longer terms have lower monthly payments but cost more in total interest.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(5)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    What's the difference between a simple mortgage payment calculator and one with taxes and insurance?
                  </h3>
                  {openFAQ === 5 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 5 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      A simple mortgage payment calculator shows only principal and interest (P&I)â€”the amount needed to repay the loan itself. This might be $1,500/month on a $300,000 loan. A comprehensive mortgage payment calculator with taxes and insurance adds property taxes (often $200-500/month), homeowners insurance ($100-200/month), PMI if applicable ($100-300/month), and HOA fees, bringing your actual monthly housing cost to perhaps $2,100-2,500/month. Simple calculators are useful for comparing loan terms, but full calculators reveal your true monthly obligation.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(6)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    Can I use Excel as a mortgage payment calculator?
                  </h3>
                  {openFAQ === 6 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 6 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      Yes! Excel offers a mortgage payment calculator function called PMT that calculates principal and interest payments. The formula is =PMT(rate/12, months, -loan_amount). For example, =PMT(6.5%/12, 360, -300000) returns $1,896.20 for a $300,000 loan at 6.5% over 30 years. However, you'll need to manually add taxes, insurance, and PMI. Online mortgage calculators are typically easier and include these additional costs automatically, but an Excel mortgage payment calculator gives you full customization and the ability to build detailed amortization schedules.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 8 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(7)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    How do I calculate mortgage payment with principal and interest only?
                  </h3>
                  {openFAQ === 7 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 7 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      A mortgage payment calculator for principal and interest uses the amortization formula: M = P[r(1+r)^n]/[(1+r)^n-1], where M is monthly payment, P is principal, r is monthly interest rate (annual rate Ã· 12), and n is number of payments. For practical use, online calculators handle this automatically. For a $250,000 loan at 7% for 30 years: monthly rate is 0.07Ã·12 = 0.005833, and the calculation yields approximately $1,663/month in principal and interest. This doesn't include taxes, insurance, or other costsâ€”just the loan repayment itself.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 9 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(8)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    How does a down payment mortgage calculator work?
                  </h3>
                  {openFAQ === 8 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 8 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      A down payment mortgage calculator shows how your down payment percentage affects your loan amount, monthly payment, and whether you'll need PMI. For a $400,000 home: with 20% down ($80,000), you borrow $320,000 with no PMI; with 10% down ($40,000), you borrow $360,000 and pay PMI ($150-300/month); with 5% down ($20,000), you borrow $380,000 with higher PMI. The calculator reveals that while a larger down payment means a bigger upfront cost, it significantly reduces your monthly payment and eliminates PMI, often saving $200-400/month.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 10 */}
              <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(9)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                    Are mortgage payment calculators from TD, CIBC, or other banks different?
                  </h3>
                  {openFAQ === 9 ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === 9 && (
                  <div className="px-4 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      While the basic math is identical across all mortgage calculatorsâ€”whether from TD, CIBC, BMO, Scotiabank, or independent toolsâ€”bank-specific calculators like a mortgage payment calculator TD or mortgage payment calculator CIBC might pre-populate their current advertised rates and may include bank-specific mortgage insurance costs. Independent calculators like ours let you input any rate for comparison shopping. The underlying calculation formula is standardized, so a $300,000 loan at 6.5% for 30 years yields the same $1,896 P&I payment regardless of which calculator you use.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
