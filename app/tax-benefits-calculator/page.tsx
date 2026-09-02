"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Receipt } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

export default function TaxBenefitsCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = Receipt;
  const title = "Tax Benefits Calculator";
  const description = [
    "Understand how mortgage interest deductions and other tax benefits impact your effective borrowing cost.",
    "A tax benefits calculator helps you determine how tax deductions reduce your effective mortgage interest rate."
  ];
  const howItWorks = [
    "This calculator helps you understand how mortgage-related tax deductions reduce your effective borrowing cost. Mortgage interest, property taxes (within limits), and sometimes mortgage insurance premiums can be tax-deductible, significantly reducing your after-tax housing cost.",
    "Enter your loan details, tax bracket, and deduction information. The calculator shows your annual deductions, tax savings, and effective after-tax interest rate—revealing your true cost of borrowing after accounting for federal tax benefits.",
    "Results display your monthly payment, annual tax deductions, estimated tax savings, and effective interest rate. Understanding these tax benefits is crucial for comparing mortgage costs to other financial decisions and accurately budgeting your housing expenses."
  ];
  const faqs = [
    {
      q: "What mortgage expenses are tax deductible?",
      a: "Mortgage interest on loans up to $750,000 ($375,000 if married filing separately) is deductible on your primary residence and one second home. Property taxes are deductible up to $10,000 combined state and local taxes (SALT cap). Mortgage insurance premiums may be deductible depending on income and current tax law—this deduction has expired and been extended multiple times."
    },
    {
      q: "How much will I save on taxes with a mortgage?",
      a: "Your savings depend on your marginal tax bracket and whether you itemize. If you're in the 24% bracket and pay $15,000 in mortgage interest, you save approximately $3,600 annually ($15,000 × 0.24). However, you only benefit if your total itemized deductions exceed the standard deduction ($13,850 single, $27,700 married filing jointly in 2023)."
    },
    {
      q: "Should I itemize deductions or take the standard deduction?",
      a: "Itemize only if your total deductions (mortgage interest + property taxes + other deductions) exceed the standard deduction. With the increased standard deduction from recent tax law changes, many homeowners no longer benefit from itemizing. Use a mortgage tax benefits calculator to determine which approach saves more."
    },
    {
      q: "What is effective interest rate after tax deduction?",
      a: "Your effective interest rate is your actual interest rate minus the tax benefit. If you're in the 22% bracket with a 6% mortgage rate, your effective rate is approximately 4.68% (6% × (1 - 0.22)). This calculation assumes you itemize and fully benefit from the mortgage interest deduction."
    },
    {
      q: "Do I get a tax break for buying a house?",
      a: "There's no direct tax break for purchasing a home, but homeownership provides ongoing deductions. Mortgage interest and property taxes are deductible if you itemize. Additionally, when you sell, you can exclude up to $250,000 ($500,000 married) of capital gains if you lived in the home 2 of the last 5 years."
    },
    {
      q: "What is the $10,000 property tax deduction limit?",
      a: "The Tax Cuts and Jobs Act instituted a $10,000 cap ($5,000 married filing separately) on combined state and local tax (SALT) deductions, including property taxes and state income/sales taxes. This particularly affects homeowners in high-tax states like California, New York, and New Jersey, where property taxes alone may exceed this limit."
    },
    {
      q: "Can I deduct mortgage interest on a rental property?",
      a: "Yes, but differently than personal residences. Rental property mortgage interest is deducted as a business expense on Schedule E without the $750,000 loan limit. However, rental properties don't qualify for the $250,000/$500,000 capital gains exclusion and have different depreciation and passive loss rules."
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
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-8 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
            <Icon className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-indigo-600 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
        <div className="mb-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
        <div className="space-y-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Calculator */}
      <div className="mx-auto max-w-[1400px] px-6 pb-12 sm:px-8 lg:px-12">
        <MortgageCalculator category="savings" forcedSubcalculator="tax-benefits" />
      </div>

      {/* How It Works */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">How It Works</h2>
          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            {howItWorks.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Article */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <article className="prose prose-slate mx-auto max-w-3xl prose-headings:font-serif prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
            <h1 className="text-center">Understanding Mortgage Tax Benefits: How Deductions Reduce Your Effective Interest Rate</h1>

            <p>
              Mortgage tax benefits represent one of homeownership's most significant financial advantages, yet many borrowers misunderstand how these deductions work and whether they actually benefit from them. When you use a mortgage tax benefits calculator and see terms like "effective interest rate" or "after-tax cost," you're exploring the difference between your stated mortgage rate and your true borrowing cost after accounting for federal tax deductions. Understanding these benefits—and their limitations under current tax law—is essential for accurately comparing homeownership costs to renting and making informed decisions about mortgage size and structure.
            </p>

            <p>
              The primary mortgage-related tax benefits include mortgage interest deductions, property tax deductions (subject to caps), and sometimes mortgage insurance premium deductions. However, the Tax Cuts and Jobs Act of 2017 fundamentally changed how these benefits work for most Americans. The increased standard deduction ($13,850 for single filers, $27,700 for married filing jointly in 2023) means millions of homeowners no longer benefit from itemizing deductions, effectively eliminating their mortgage tax advantages. A mortgage interest tax deduction calculator helps you determine whether you're among those who still benefit from these provisions.
            </p>

            <p>
              For homeowners who do itemize and benefit from these deductions, the savings can be substantial. A borrower in the 24% tax bracket paying $20,000 annually in mortgage interest saves approximately $4,800 in federal taxes—equivalent to reducing a 6% mortgage rate to an effective rate of 4.56%. Over 30 years, this compounds to significant savings. However, these benefits diminish as your mortgage balance decreases and interest payments decline, eventually falling below the standard deduction threshold for most homeowners. Understanding this lifecycle helps you make strategic decisions about mortgage payoff, refinancing, and tax planning.
            </p>

            <h2>Mortgage Interest Deduction: The Primary Tax Benefit</h2>

            <p>
              The mortgage interest deduction allows homeowners who itemize to deduct interest paid on mortgage debt from their taxable income. Under current law, you can deduct interest on up to $750,000 of mortgage debt ($375,000 if married filing separately) for loans originated after December 15, 2017. For loans originated before that date, the limit remains $1 million ($500,000 married filing separately). This applies to your primary residence and one second home—investment properties follow different rules.
            </p>

            <p>
              To claim this deduction, you must itemize on Schedule A rather than taking the standard deduction. Your lender sends Form 1098 annually showing how much mortgage interest you paid. You report this amount on Schedule A, where it combines with other itemized deductions (property taxes, charitable contributions, medical expenses, etc.) to potentially exceed the standard deduction threshold.
            </p>

            <p>
              The value of this deduction depends entirely on your marginal tax bracket. If you're in the 12% bracket, every $1,000 of mortgage interest deducted saves $120 in federal taxes. In the 32% bracket, that same $1,000 deduction saves $320. A mortgage tax benefits calculator accounts for your specific bracket to show your actual savings. Higher-income borrowers benefit more from these deductions in absolute dollars, though recent tax law changes capped many high-income deductions.
            </p>

            <h2>Property Tax Deduction and the SALT Cap</h2>

            <p>
              Property taxes paid on your primary residence and second homes are deductible, but with a significant limitation: the $10,000 state and local tax (SALT) cap. This $10,000 limit applies to the combined total of property taxes plus either state income taxes or sales taxes (you choose which to deduct). For married couples filing separately, the cap is $5,000 each.
            </p>

            <p>
              This cap particularly affects homeowners in high-tax states. If you pay $12,000 in property taxes and $8,000 in state income taxes ($20,000 total SALT), you can only deduct $10,000, losing $10,000 of potential deductions. In states like California, New York, New Jersey, and Connecticut, many homeowners hit the SALT cap on property taxes alone, making state income taxes completely non-deductible for federal purposes.
            </p>

            <p>
              Using a mortgage interest and property tax deduction calculator helps you understand how the SALT cap affects your total tax picture. For homeowners already capped out on SALT deductions, additional mortgage interest becomes even more valuable as it's not subject to the cap (up to the $750,000 loan limit).
            </p>

            <div className="my-8 rounded-lg border-l-4 border-slate-300 bg-slate-50 p-6">
              <h3 className="mb-4 mt-0 text-lg font-semibold text-slate-900">Tax Savings Example: 24% Bracket</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span className="font-medium">Annual Mortgage Details:</span>
                  <span></span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex justify-between">
                    <span>Mortgage Interest Paid:</span>
                    <span className="font-mono">$18,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property Taxes Paid:</span>
                    <span className="font-mono">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Itemized Deductions:</span>
                    <span className="font-mono">$30,000</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between border-t border-indigo-200 pt-2">
                  <span className="font-medium">Tax Comparison:</span>
                  <span></span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex justify-between">
                    <span>Standard Deduction (MFJ):</span>
                    <span className="font-mono">$27,700</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional Benefit from Itemizing:</span>
                    <span className="font-mono">$2,300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax Bracket:</span>
                    <span className="font-mono">24%</span>
                  </div>
                  <div className="flex justify-between border-t border-indigo-200 pt-2 mt-2">
                    <span className="font-semibold">Annual Tax Savings:</span>
                    <span className="font-mono font-semibold text-green-600">$552</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Effective Mortgage Rate (6.0%):</span>
                    <span className="font-mono font-semibold text-indigo-600">5.89%</span>
                  </div>
                </div>
              </div>
            </div>

            <p>
              This example demonstrates why many homeowners don't significantly benefit from mortgage tax deductions under current law. The couple saves only $552 annually despite paying $18,000 in mortgage interest, because their itemized deductions barely exceed the standard deduction. Early in a mortgage when interest payments are highest, benefits are greater; later in the mortgage, many homeowners fall back to the standard deduction.
            </p>

            <h2>Calculating Your Effective Interest Rate After Tax Benefits</h2>

            <p>
              Your effective interest rate represents your true borrowing cost after tax savings. The formula is: Effective Rate = Nominal Rate × (1 - Marginal Tax Rate). However, this simple formula only works if you itemize and fully benefit from the deduction.
            </p>

            <p>
              <strong>Example for 24% Tax Bracket:</strong> A 6.00% mortgage becomes 4.56% effective if you fully benefit from the deduction (6.00% × (1 - 0.24) = 4.56%). This 1.44 percentage point reduction is substantial over 30 years. On a $400,000 mortgage, the effective rate reduction saves approximately $78,000 over the loan term compared to paying 6% with no tax benefit.
            </p>

            <p>
              However, most homeowners don't realize the full benefit because their itemized deductions don't sufficiently exceed the standard deduction. A mortgage tax calculator that accounts for the standard deduction provides a more accurate picture. If your itemized deductions are only $2,000 above the standard deduction, you're only benefiting from $2,000 of tax deductions, not your full mortgage interest payment.
            </p>

            <h2>The Tax Benefits Lifecycle: How Benefits Change Over Time</h2>

            <p>
              Mortgage tax benefits follow a predictable lifecycle that affects long-term financial planning. Early in your mortgage, interest payments are highest, providing maximum tax benefits. As your loan ages and principal payments increase while interest decreases, tax benefits diminish.
            </p>

            <p>
              <strong>Years 1-10:</strong> Maximum tax benefits. On a 30-year loan, these early years feature the highest interest payments. If you itemize, you're likely well above the standard deduction threshold and realizing significant tax savings. This is when the effective interest rate reduction is greatest.
            </p>

            <p>
              <strong>Years 11-20:</strong> Declining benefits. As your balance decreases, annual interest payments drop. You may still exceed the standard deduction, but the margin narrows. Your effective tax savings decrease even if your tax bracket remains constant. Some homeowners fall back to the standard deduction during this period.
            </p>

            <p>
              <strong>Years 21-30:</strong> Minimal or no benefits. By the final decade, interest payments are low enough that most homeowners benefit more from the standard deduction than itemizing. At this point, mortgage tax benefits effectively disappear, and your true cost equals your nominal rate. This lifecycle is why accelerated payoff strategies or refinancing to shorter terms may make more sense than commonly assumed.
            </p>

            <h2>Standard Deduction vs. Itemizing: Who Benefits?</h2>

            <p>
              The Tax Cuts and Jobs Act nearly doubled the standard deduction, fundamentally changing who benefits from mortgage tax deductions. For 2023, the standard deduction is $13,850 for single filers and $27,700 for married filing jointly. You should itemize only if your total deductions exceed these thresholds.
            </p>

            <p>
              <strong>Homeowners Who Still Itemize:</strong> High-value homes with large mortgages, homeowners in high-property-tax states (even with the SALT cap), those with significant charitable contributions or medical expenses, and taxpayers with large state income tax bills combined with mortgage interest.
            </p>

            <p>
              <strong>Homeowners Who No Longer Benefit:</strong> Smaller mortgages (under $300,000 in most markets), homes in low-property-tax states, homeowners who've paid down significant principal, and those without other substantial itemizable deductions. For these homeowners, mortgage tax benefits are essentially zero—they take the standard deduction regardless of homeownership.
            </p>

            <h2>Key Takeaways for Tax Planning</h2>

            <p>
              Use a mortgage tax benefits calculator annually to determine whether you should itemize or take the standard deduction. The answer can change as your mortgage ages, your income changes, or tax law evolves.
            </p>

            <p>
              Don't overvalue mortgage tax benefits when making homebuying decisions. Many homebuyers assume significant tax savings that don't materialize because they end up taking the standard deduction. Make purchase decisions based on actual housing needs and affordability, not inflated assumptions about tax benefits.
            </p>

            <p>
              Consider the tax benefits lifecycle when deciding between 15-year and 30-year mortgages. The tax benefits are front-loaded, so paying off your mortgage early doesn't sacrifice as much tax benefit as commonly believed—by year 15-20, benefits are already diminished.
            </p>

            <p>
              Remember that tax laws change. The current $750,000 loan limit, $10,000 SALT cap, and standard deduction amounts could change with future legislation. Build flexibility into your financial planning.
            </p>

            <p>
              Finally, consult a tax professional about your specific situation. A mortgage interest tax deduction calculator provides estimates, but individual circumstances require professional analysis. Tax planning should be part of your overall financial strategy, not an afterthought at tax time.
            </p>

          </article>
        </div>
      </section>

      
      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
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
