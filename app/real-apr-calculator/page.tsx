"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Percent } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

export default function RealAPRCalculatorPage() {
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
    <section className="py-8">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Banner Ad Placeholder */}
        <div className="mb-6 flex justify-center">
          <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
            <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="mb-8 mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <Percent className="h-8 w-8 text-indigo-600 flex-shrink-0" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
              Real APR Calculator
            </h1>
          </div>
          <div className="h-px bg-indigo-600 mb-6"></div>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed">
            <p>Calculate the true Annual Percentage Rate (APR) of your mortgage by factoring in interest rate, closing costs, points, and fees to understand the real cost of borrowing.</p>
            <p>Compare loan offers accurately by understanding the real cost of borrowing beyond just the stated interest rate, helping you choose the most cost-effective option.</p>
          </div>
        </div>

        <MortgageCalculator category="rates" forcedSubcalculator="real-apr" />
      </div>

      {/* How It Works Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              How It Works
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
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
                  Understanding Real APR: What Your Loan Actually Costs
                </h2>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When you're shopping for a mortgage, personal loan, or car loan, the advertised interest rate rarely tells the complete story. Lenders might promote an attractive 6% rate, but after factoring in origination fees, discount points, and other closing costs, your effective borrowing cost could be significantly higher. This is where an effective APR calculator becomes essential—it reveals the true annual percentage rate that accounts for all the costs of borrowing, not just the interest on the principal.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The difference between the stated interest rate and the real APR can substantially affect your financial decisions. Understanding how to calculate APR from interest rate and fees helps you compare loan offers accurately and avoid expensive surprises. This knowledge applies whether you're considering a mortgage, evaluating credit card offers, or financing a vehicle purchase.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  APR vs. Interest Rate: Why They're Not the Same
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The interest rate represents the percentage charged on the loan principal over time. If you borrow $10,000 at a 6% annual interest rate for one year with no other costs, you'd pay $600 in interest. This rate determines your periodic interest charges and is used to calculate your payment amount.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  APR, or Annual Percentage Rate, includes the interest rate plus additional costs required to obtain the loan. When a lender charges a $500 origination fee on that same $10,000 loan at 6% interest, your true cost of borrowing increases. An actual APR calculator factors these fees into the rate calculation, showing you're effectively paying more than 6% when all costs are considered over the loan term.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Here's a hypothetical example that illustrates the difference: Suppose you're borrowing $200,000 for a mortgage at a 6.5% interest rate over 30 years. Your monthly principal and interest payment would be approximately $1,264. However, if the lender charges 1% origination fee ($2,000), 1 discount point ($2,000), and $1,000 in other lender fees, your total upfront costs are $5,000. When these costs are spread over the loan term and expressed as an annual rate, your effective APR might be 6.72%—noticeably higher than the stated rate.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  What an APR Calculator Actually Shows You
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A real loan calculator designed for APR takes multiple inputs to determine your true borrowing cost. You'll enter your loan amount, interest rate, loan term, and all associated fees. The calculator then computes an effective interest rate that, when applied to the loan amount, produces the same total cost as paying the stated interest rate plus all upfront fees.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  This calculation is mathematically precise but conceptually straightforward: the calculator determines what single interest rate would cost you the same amount as your actual rate plus all fees combined. This standardized comparison rate lets you evaluate loans with different fee structures on equal footing. A simple APR calculator performs this conversion automatically, saving you from complex manual calculations.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  How APR is Calculated From Interest Rate and Fees
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The APR calculation involves determining the internal rate of return that equates the present value of all payments with the net amount received. In practical terms, this means finding the rate at which the total of your payments equals the loan amount minus fees you paid upfront.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Let's walk through a simplified hypothetical example to show the logic: You borrow $10,000 at 8% interest for 3 years with a $300 origination fee. Your monthly payment at 8% would be approximately $313.36 for 36 months, totaling $11,281. However, you only received $9,700 (the $10,000 loan minus the $300 fee). The APR calculation asks: what interest rate on $9,700 would require the same $313.36 monthly payment? The answer is approximately 8.65%. That's your actual APR—the rate that reflects both the interest charges and the upfront fee cost.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  This is why fees have a proportionally larger impact on shorter-term loans. If the same $300 fee were on a 1-year loan instead of 3 years, the APR would jump even higher because the fee cost is concentrated over fewer payments. The fee represents the same dollar amount but becomes a larger percentage of the total interest when compressed into a shorter timeframe.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Understanding Monthly APR and Payment Calculations
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  One common source of confusion involves how to calculate APR per month. It's important to understand that APR is an annualized rate—it represents the yearly cost of borrowing. You cannot simply divide the APR by 12 to get a monthly rate that accurately reflects the cost structure of most loans.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When lenders calculate monthly payments, they typically use a monthly periodic rate derived from the interest rate (not the APR). For example, a 6% annual interest rate translates to a 0.5% monthly periodic rate (6% ÷ 12). This monthly rate is applied to the outstanding balance each month to determine the interest portion of your payment.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The APR itself doesn't change your monthly payment amount—your payment is calculated from the interest rate. Instead, the APR serves as a comparison tool that reveals the true cost of the loan when fees are factored in. Your monthly payment stays the same whether you look at the interest rate or the APR, but the APR tells you the effective rate you're paying when all costs are considered.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  APR Across Different Financial Products
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  An APR calculator personal loan tool works fundamentally the same way as a mortgage APR calculator, but the typical fee structures differ. Personal loans often have origination fees ranging from 1% to 8% of the loan amount, which can significantly increase the effective APR, especially on smaller loan amounts or shorter terms. A loan APR calculator helps you see how these fees affect your true borrowing cost compared to the stated interest rate.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Credit cards present a unique situation. An APR credit card calculator focuses primarily on the interest rate itself since credit cards typically don't have upfront fees factored into the APR (though they may have annual fees, balance transfer fees, or other charges disclosed separately). Credit card APR is usually variable and compounds daily. A daily APR calculator divides the annual rate by 365 to determine the daily periodic rate applied to your balance each day.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For auto financing, a real APR calculator car loan tool becomes valuable when dealers offer loans with various fee structures or when comparing dealer financing to bank loans. Auto loans might include documentation fees, loan processing fees, or require add-on products that affect your effective cost. The APR helps you see through promotional rates that might look attractive but come with substantial fees.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Evaluating Specific APR Rates: Is 2.9% APR Good?
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Whether a specific APR represents a good deal depends entirely on context: the type of loan, current market conditions, your credit profile, and the loan term. For example, is 2.9 apr good for an auto loan? In a low-interest-rate environment, 2.9% could be competitive or even above-market for borrowers with excellent credit. In a higher-rate environment, that same 2.9% might be an exceptional rate available only to the most qualified borrowers.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For mortgages, a 2.9% APR would be considered very low in most historical contexts, though rates fluctuate significantly based on economic conditions. For personal loans, 2.9% would be extremely competitive, as personal loan APRs typically range much higher due to the unsecured nature of the debt. For credit cards, 2.9% would be an exceptional promotional rate, as typical credit card APRs often exceed 15-25%.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The key is comparing the APR you're offered to current market rates for your loan type and credit profile. A rate that seems high in isolation might actually be competitive for your situation, while a rate that sounds low might not be as attractive as alternatives available to you.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Calculating the Cost of Credit Card APR: A Real Example
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Let's address a common question with a concrete hypothetical calculation: how much is 26.99 APR on $3,000? This helps illustrate how credit card interest accumulates and why the APR matters significantly for revolving debt.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Assume you carry a $3,000 balance on a credit card with a 26.99% APR and make no additional purchases. Credit cards typically compound interest daily, so first convert the annual rate to a daily rate: 26.99% ÷ 365 = 0.0739% per day. Each day, the card issuer applies this rate to your balance.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  If you made no payments for one year (purely hypothetical to show cost), the interest would compound to approximately $922 in total interest charges, bringing your balance to $3,922. This demonstrates why a high APR on revolving credit becomes expensive quickly—the 26.99% rate means you'd pay nearly 31% of your original balance in interest over just one year.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  In reality, if you made minimum payments (often 2-3% of the balance), you'd pay interest every month while slowly reducing the principal. On a $3,000 balance at 26.99% APR making only $60 minimum payments, it would take approximately 94 months to pay off the debt, with total interest paid exceeding $2,600. This shows why paying more than the minimum is crucial when carrying high-APR credit card balances.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Simple APR vs. Effective APR: Understanding the Distinction
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The term "simple APR" sometimes refers to APR calculated without considering the effect of compounding within the year, though this distinction is more relevant in some financial contexts than others. For most consumer loans, the APR calculation already accounts for how interest is applied over the payment schedule.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Effective APR, as used in mortgage lending and other consumer credit contexts, includes all mandatory fees required to obtain the loan. This is the standardized APR that lenders must disclose under federal Truth in Lending regulations. The effective APR gives you a true comparison rate that accounts for both the interest rate and the cost of fees spread over the loan term.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Some fees aren't included in the APR calculation because they're considered optional or unrelated to the credit transaction itself—things like homeowners insurance, property taxes, or certain third-party fees. The APR focuses on the cost of the credit, not the total cost of homeownership or the transaction.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Real-Time APR in Different Financial Contexts
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The phrase "real time apr" can mean different things depending on the financial product. In traditional lending, it might refer to variable-rate loans where the APR changes based on an underlying index like the prime rate or SOFR. Your rate adjusts periodically, making the APR a moving target rather than a fixed number for the life of the loan.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For credit cards, real-time APR typically refers to variable APRs that change when the Federal Reserve adjusts interest rates. Most credit card agreements specify that your APR is the prime rate plus a certain margin. When the prime rate changes, your APR adjusts accordingly, usually with at least 45 days notice.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  In cryptocurrency and decentralized finance contexts, "real time apr binance" or similar phrases refer to variable yield rates on cryptocurrency deposits or staking products. These rates fluctuate continuously based on supply, demand, and protocol-specific factors. Unlike traditional APR, these rates often represent gross yields before considering platform fees, network fees, or price volatility risk. The term APR in crypto contexts may be used more loosely than in regulated lending, and rates can change dramatically over short periods. When evaluating such products, understand that the displayed rate is not comparable to traditional loan APR and doesn't carry the same regulatory protections or standardization.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Using an APR Calculator to Make Better Borrowing Decisions
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When comparing loan offers, enter each option into a real-time APR calculator or effective APR calculator to see the true cost beyond the advertised rate. Pay attention to how different fee structures affect the APR—sometimes a slightly higher interest rate with lower fees results in a better overall deal than a lower rate with substantial upfront costs.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Consider your time horizon. If you plan to refinance or sell within a few years, a loan with lower fees and a slightly higher rate might cost less overall than paying substantial points to buy down the rate. The APR assumes you hold the loan to maturity, but your personal situation might not match that assumption.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For credit cards, understanding how daily compounding and payment timing affect your actual costs helps you minimize interest charges. Even with the same APR, making payments earlier in the billing cycle or making multiple payments per month can reduce the interest you pay because you're lowering the average daily balance.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Remember that the APR is a standardized comparison tool, but it doesn't capture every aspect of a loan that might matter to you—factors like customer service, prepayment penalties, flexibility in payment dates, or loan features may also influence which option best fits your needs.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 text-center">
                    Frequently Asked Questions About APR Calculations
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Can I calculate APR from just the interest rate and loan amount?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        No—calculating APR requires knowing all fees associated with obtaining the loan. Without fee information, the APR equals the interest rate. The APR will always be equal to or higher than the interest rate, with the difference determined by how much you pay in fees relative to the loan amount and term.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Why is the APR on my mortgage different from my interest rate if I paid no points?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Even without discount points, mortgages typically include origination fees, lender fees, or other charges that get factored into the APR. Even relatively small fees (1-2% of the loan amount) can increase the APR noticeably above the stated interest rate. Review your loan estimate to see which specific fees are affecting your APR.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Does APR change my monthly payment amount?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        No—your monthly payment is calculated from the interest rate and loan amount, not the APR. The APR is a comparison tool that shows your effective cost including fees, but the actual payment you make each month is determined by the note rate (interest rate) on your loan. The APR helps you compare total borrowing costs between loans with different fee structures.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        How often does APR change on a variable-rate loan?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        This depends on your loan agreement. Some adjustable-rate mortgages change annually after an initial fixed period, while others adjust monthly or according to a specific schedule. Credit card APRs typically change when the underlying index (usually prime rate) changes. Your loan documents will specify the index, margin, adjustment frequency, and any caps on rate changes.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Is a 0% APR credit card really free borrowing?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        During the promotional period, yes—you pay no interest on qualifying balances. However, these are usually temporary offers (6-21 months), and any remaining balance after the promotional period ends will accrue interest at the regular APR, which is typically quite high. Additionally, missed payments often result in immediate loss of the 0% rate. Balance transfer fees (often 3-5%) also apply to transfers, even during 0% APR periods.
                      </p>
                    </div>
                  </div>
                </div>
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
