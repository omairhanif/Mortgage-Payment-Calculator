"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Building2 } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

export default function JumboLoanCalculatorPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "What''s the difference between interest rate and APR?",
      a: "The interest rate is the cost of borrowing the principal loan amount. APR includes the interest rate plus other costs like origination fees, discount points, and certain closing costs, expressed as a yearly rate. APR is always equal to or higher than the interest rate."
    },
    {
      q: "Why is APR important when comparing loans?",
      a: "APR lets you compare the true cost of loans with different fee structures. A loan with a 6.5% rate and high fees might have a 7% APR, while a 6.75% rate with low fees might have a 6.85% APR, making the latter actually cheaper overall."
    },
    {
      q: "What costs are included in APR?",
      a: "APR typically includes: loan origination fees, discount points, lender fees, mortgage insurance premiums (for FHA/USDA), and some closing costs. It doesn''t include: appraisal fees, title insurance, attorney fees, or costs you''d pay regardless of lender."
    },
    {
      q: "Is a lower APR always better?",
      a: "Usually, yes - but consider your time horizon. If selling or refinancing soon, a loan with higher APR but lower upfront costs might be better. APR assumes you hold the loan to term, so it''s less meaningful for short-term ownership plans."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-blue-100 p-3">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
              Jumbo Loan Calculator
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mb-4">
            Calculate monthly payments for jumbo loans that exceed conforming loan limits, typically requiring larger down payments, higher credit scores, and slightly elevated interest rates.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl">
            Understand jumbo loan requirements and costs for financing luxury properties or homes in high-cost areas where standard loan limits don't apply.
          </p>
        </div>
      </div>

      {/* Banner Ad Placeholder */}
      <section className="py-8">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mb-6 flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
              <span className="text-xs text-slate-400 font-medium">Banner Ad (728�90)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <MortgageCalculator category="rates" forcedSubcalculator="jumbo" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                How It Works
              </h2>
              <p className="text-slate-600 text-base">
                Understanding how this calculator helps you
              </p>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>
                This calculator reveals the true Annual Percentage Rate (APR) of your mortgage by factoring in all loan costs, not just the interest rate. The APR provides a more accurate picture of your total borrowing cost, including fees, points, and other charges.
              </p>
              <p>
                Enter your loan amount, interest rate, loan term, and all associated costs including origination fees, discount points, lender fees, and closing costs. The calculator determines the effective APR that reflects these expenses spread over the loan term.
              </p>
              <p>
                Results show your note rate versus true APR, total cost difference, and how fees impact your effective rate. A higher APR compared to your note rate indicates significant upfront costs. Use APR to compare loan offers from different lenders fairly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-12 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <article className="prose prose-slate max-w-none">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Understanding Jumbo Loans: A Complete Guide to Large Mortgage Calculations
                </h2>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When you're financing a home that exceeds standard conforming loan limits, you enter the territory of jumbo mortgages. A jumbo mortgage calculator helps you estimate payments and costs for these larger loans, which come with their own unique qualification requirements and considerations. Whether you're purchasing a luxury property, a home in an expensive coastal market, or simply need financing above conventional thresholds, understanding how jumbo loans work is essential for accurate financial planning.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The term "jumbo" might sound intimidating, but these loans have become increasingly accessible as lender competition has grown. Many borrowers are surprised to learn that jumbo loan interest rates can actually be competitive with—or even lower than—conforming loan rates for well-qualified applicants. However, the qualification process remains more stringent, and lenders look more carefully at your complete financial picture before approving large loan amounts.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A jumbo loan calculator serves as your starting point for exploring affordability and payment scenarios. Unlike formal pre-approval, which requires documentation and credit review, a calculator lets you experiment with different home prices, down payment amounts, interest rates, and loan terms to understand how these variables impact your monthly obligation and total borrowing cost. Think of calculator results as planning estimates rather than guaranteed terms—your actual qualification depends on lender review of your income, assets, credit, and the specific property you're purchasing.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Conforming vs. Jumbo Loans: Understanding the Difference
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The distinction between conforming and jumbo loans centers on loan amount thresholds set annually by the Federal Housing Finance Agency (FHFA). Conforming loans fall within these limits and can be purchased by Fannie Mae and Freddie Mac, the government-sponsored enterprises that provide liquidity to the mortgage market. When your loan amount exceeds these limits, it becomes a jumbo loan that lenders must hold in their own portfolio or sell to private investors, since Fannie Mae and Freddie Mac won't buy them.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For 2024, the baseline conforming loan limit in most U.S. counties is $766,550 for a single-family home. This represents the maximum loan amount that qualifies as conforming in standard-cost areas. However, the FHFA designates certain high-cost areas with elevated limits. In expensive markets—particularly parts of California, New York, Washington, Colorado, and Hawaii—conforming limits can reach $1,149,825 or even higher. These geographic variations recognize that median home prices vary dramatically across the country, and what constitutes a "normal" home price in rural Iowa differs significantly from coastal California.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A conforming loan calculator would work with amounts up to these thresholds, while a jumbo loan calculator handles amounts beyond them. The practical implications of crossing into jumbo territory include stricter qualification requirements, different underwriting standards, and potentially different interest rate structures. However, "stricter" doesn't mean "impossible"—it means lenders want stronger assurance of your ability to repay, given that they're assuming more risk without the backing of Fannie Mae and Freddie Mac.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When using a large loan calculator to explore financing options, pay attention to whether your loan amount exceeds the conforming limit in your specific county. Some borrowers in high-cost areas discover they can use conforming financing for homes they assumed would require jumbo loans, while others in standard-cost areas find that loans they thought were conforming actually fall into jumbo territory. Your lender can confirm the exact conforming limit for your target property's location.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The down payment mortgage calculator becomes particularly important when you're near the conforming limit threshold. In some cases, making a larger down payment to keep your loan amount just under the conforming limit might give you access to better terms or simpler qualification, even though you're putting more cash down. Conversely, in other situations, accepting a jumbo loan with a smaller down payment preserves your liquidity and doesn't significantly impact your rate. Running multiple scenarios helps you identify the sweet spot for your situation.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  What Determines Your Jumbo Loan Payment
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Your monthly jumbo mortgage payment consists of several components, and a comprehensive jumbo loan calculator with taxes and insurance provides the most accurate picture of your true housing cost. Understanding each piece helps you evaluate affordability realistically and avoid surprises after closing.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Principal and interest form the foundation of your payment, determined by your loan amount, interest rate, and loan term. On jumbo loans, the interest rate you receive depends heavily on your credit profile, down payment percentage, and overall financial strength. Borrowers with 740+ credit scores, 20% or more down, and substantial reserves often secure rates competitive with or better than conforming loan rates. Those with 700-720 credit, 10-15% down, or thinner reserves typically see slightly elevated rates.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Loan term affects your payment and total interest dramatically. A 30-year jumbo mortgage spreads payments over 360 months, creating lower monthly obligations but higher total interest. A 15-year term roughly doubles your monthly payment but can cut total interest by more than half, while building equity much faster. Many jumbo borrowers opt for 20-year or even 10-year terms as a middle ground, especially when the property represents a smaller percentage of their net worth.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Down payment requirements on jumbo loans typically range from 10% to 20%, though some lenders offer programs with as little as 10% down for exceptionally qualified borrowers. Putting down 20% or more eliminates private mortgage insurance (PMI), which can represent significant savings on large loan amounts. On a $1 million loan, even 0.5% annual PMI would cost over $400 monthly.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Property taxes vary dramatically by location and significantly impact affordability on high-value homes. A $1.2 million home in an area with 2% effective property tax rates would generate $24,000 in annual taxes, or $2,000 monthly. When using a jumbo mortgage calculator, accurate property tax estimates are essential—don't rely on national averages for luxury properties, as they rarely reflect reality in specific markets.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Homeowners insurance, HOA fees, closing costs, and total interest over the loan term all contribute to your complete cost picture. Insurance on high-value properties typically costs more, luxury HOA fees can exceed $500-1,000 monthly, and total interest on a $1 million loan at 7% for 30 years would be approximately $1,395,000—more than the original principal.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Qualification Requirements for Jumbo Loans
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Lenders impose stricter qualification requirements for jumbo loans because they can't sell these mortgages to Fannie Mae or Freddie Mac, meaning they assume full repayment risk. Credit score thresholds typically start at 700, with most lenders preferring 720 or higher for best rates. Your credit score impacts not just approval odds but also the interest rate—the difference between a 700 and 760 credit score might be 0.5% or more in rate, translating to hundreds of dollars monthly on a million-dollar loan.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Debt-to-income ratios on jumbo loans are typically capped lower than conventional loans. While conforming loans might allow DTI up to 45-50%, jumbo lenders usually prefer ratios under 43%, with many setting their ideal threshold at 38% or lower. This stricter standard ensures borrowers have substantial breathing room in their budget.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Reserve requirements represent one of the most distinctive features of jumbo loan qualification. Lenders want to see liquid assets equal to 6-12 months of mortgage payments in savings, investment, or retirement accounts after you close. On a $1 million loan with a $6,000 monthly payment, 12 months of reserves means $72,000 in liquid assets beyond your down payment and closing costs. Higher loan amounts often trigger higher reserve requirements—a $2 million loan might require 18-24 months of reserves.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Income documentation is comprehensive, requiring tax returns (typically 2 years), W-2s, pay stubs, bank statements, and employment verification. Self-employed borrowers face additional scrutiny with lenders examining profit and loss statements and business bank accounts. Loan-to-value ratios also matter—80% LTV (20% down) represents the standard for best terms.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Using a Jumbo Loan Calculator Effectively
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A jumbo mortgage calculator provides valuable planning information, but knowing how to use it effectively maximizes its usefulness. Start by gathering accurate inputs based on realistic market values and current rate conditions for your credit profile.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When estimating property taxes, research actual tax rates in the specific municipality where you're buying—rates can vary dramatically even within the same metro area. For homeowners insurance, get real quotes from carriers who insure high-value homes. A jumbo loan calculator with taxes and insurance included provides more accurate total housing cost estimates than simple calculators showing only principal and interest.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Compare multiple scenarios before settling on assumptions. Run calculations with 10%, 15%, and 20% down to see how down payment size affects monthly payment. Compare 30-year, 20-year, and 15-year terms to understand payment and total interest tradeoffs. Adjust interest rates by 0.5% to see payment sensitivity.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Understand calculator limitations—no online calculator can account for your specific credit profile, income documentation quality, or lender requirements. When you've narrowed your target range, contact multiple jumbo lenders for actual rate quotes. Lender pricing can vary by 0.25-0.5% or more, representing hundreds of dollars in monthly payment differences.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Hypothetical Calculation Examples
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  To illustrate how jumbo loan payments work in practice, let's walk through two hypothetical scenarios. These examples use realistic assumptions but represent illustrative calculations rather than guaranteed terms or actual borrower experiences.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-6">
                  <h4 className="font-serif text-lg font-bold text-slate-900 mb-3">
                    Hypothetical Example 1: Standard Jumbo Scenario
                  </h4>
                  
                  <p className="text-base text-slate-700 mb-3">
                    Consider a hypothetical borrower purchasing a $1,100,000 home in a California high-cost area, putting down 20% ($220,000) and financing $880,000.
                  </p>

                  <ul className="list-none space-y-1 text-sm text-slate-700 mb-3">
                    <li>• Loan amount: $880,000</li>
                    <li>• Down payment: $220,000 (20%)</li>
                    <li>• Interest rate: 7.00% (hypothetical)</li>
                    <li>• Loan term: 30 years</li>
                    <li>• Property taxes: $1,000/month</li>
                    <li>• Insurance: $300/month</li>
                    <li>• HOA: $200/month</li>
                  </ul>

                  <p className="text-base text-slate-700 mb-2">
                    <strong>Monthly P&I:</strong> $5,852 | <strong>Total housing payment:</strong> $7,352
                  </p>

                  <p className="text-sm text-slate-600">
                    To qualify at 40% DTI with no other debts requires approximately $220,560 annual income. With 12 months reserves required, this borrower would need $88,224 in liquid assets after closing.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-6">
                  <h4 className="font-serif text-lg font-bold text-slate-900 mb-3">
                    Hypothetical Example 2: Super-Jumbo Scenario
                  </h4>
                  
                  <p className="text-base text-slate-700 mb-3">
                    Consider a hypothetical borrower purchasing a $2,500,000 luxury property with 20% down, financing $2,000,000.
                  </p>

                  <ul className="list-none space-y-1 text-sm text-slate-700 mb-3">
                    <li>• Loan amount: $2,000,000</li>
                    <li>• Down payment: $500,000 (20%)</li>
                    <li>• Interest rate: 7.25% (hypothetical)</li>
                    <li>• Loan term: 30 years</li>
                    <li>• Property taxes: $2,500/month</li>
                    <li>• Insurance: $700/month</li>
                    <li>• HOA: $500/month</li>
                  </ul>

                  <p className="text-base text-slate-700 mb-2">
                    <strong>Monthly P&I:</strong> $13,650 | <strong>Total housing payment:</strong> $17,350
                  </p>

                  <p className="text-sm text-slate-600">
                    At 38% DTI with no other debts requires approximately $547,900 annual income. With 20 months reserves, this borrower would need $347,000 in liquid assets after closing.
                  </p>
                </div>

                <p className="text-base text-slate-600 leading-relaxed mb-4 italic">
                  Both examples use specific values for illustrative purposes. Your actual costs depend on current interest rates, specific property location, insurance needs, lender requirements, and qualification criteria.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  International Mortgage Calculator Context
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Borrowers searching for jumbo loan calculator terms sometimes encounter results for mortgage products from other countries with fundamentally different structures. Understanding these distinctions helps you use the right calculator for your specific financing need.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  In the United States, a "jumbo loan" specifically refers to a mortgage exceeding conforming loan limits set by the FHFA, typically starting around $766,550-$1,149,825 depending on location. These are conventional mortgages held by individual lenders or private investors rather than Fannie Mae or Freddie Mac.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  In India, terms like "jumbo loan calculator HDFC Bank" or "HDFC EMI calculator" refer to home loan products offered by Housing Development Finance Corporation (HDFC), one of India's largest housing finance companies. Indian home loans operate under entirely different regulatory frameworks, interest rate structures, loan terms, and down payment requirements. If you're seeking financing for property in India, you need an Indian housing loan calculator specific to that market—U.S. jumbo loan calculators won't provide meaningful guidance.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Canadian mortgage products referenced in searches like "mortgage calculator Canada," "best mortgage calculator Canada," "simple mortgage calculator BMO" (Bank of Montreal), or "CMHC mortgage calculator" relate to Canadian housing finance. Canadian mortgages have distinctive features: shorter maximum amortization periods, stricter stress test requirements, and mandatory insurance through CMHC (Canada Mortgage and Housing Corporation) for down payments under 20%. These regulations differ substantially from U.S. lending.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  In the United Kingdom, "large loan calculator UK" searches relate to UK mortgage products under FCA regulation with different interest rate structures, often variable rates tied to Bank of England base rate. The key takeaway: if you're financing U.S. real property, use U.S. mortgage calculators designed for U.S. lending standards. If you're financing property in another country, seek calculators specific to that nation's mortgage market.
                </p>

              </article>
            </div>
          </div>
        </section>


      {/* FAQ Section */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base">
                Common questions about this calculator
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                      {faq.q}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-4 pb-4 border-t border-slate-100">
                      <p className="text-sm text-slate-600 leading-relaxed mt-3">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
