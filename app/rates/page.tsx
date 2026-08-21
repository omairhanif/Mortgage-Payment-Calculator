"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp, Percent, Home, Shield, Building2, type LucideIcon } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

function RatesPageContent() {
  const searchParams = useSearchParams();
  const subcalculator = searchParams.get("subcalculator") || "real-apr";
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Content for each calculator
  const content: Record<string, { icon: LucideIcon; title: string; description: [string, string]; howItWorks: string[]; faqs: Array<{ q: string; a: string }> }> = {
    "real-apr": {
      icon: Percent,
      title: "Real APR Calculator",
      description: [
        "Calculate the true Annual Percentage Rate (APR) of your mortgage by factoring in interest rate, closing costs, points, and fees to understand the real cost of borrowing.",
        "Compare loan offers accurately by understanding the real cost of borrowing beyond just the stated interest rate, helping you choose the most cost-effective option."
      ],
      howItWorks: [
        "This calculator reveals the true Annual Percentage Rate (APR) of your mortgage by factoring in all loan costs, not just the interest rate. The APR provides a more accurate picture of your total borrowing cost, including fees, points, and other charges.",
        "Enter your loan amount, interest rate, loan term, and all associated costs including origination fees, discount points, lender fees, and closing costs. The calculator determines the effective APR that reflects these expenses spread over the loan term.",
        "Results show your note rate versus true APR, total cost difference, and how fees impact your effective rate. A higher APR compared to your note rate indicates significant upfront costs. Use APR to compare loan offers from different lenders fairly."
      ],
      faqs: [
        {
          q: "What's the difference between interest rate and APR?",
          a: "The interest rate is the cost of borrowing the principal loan amount. APR includes the interest rate plus other costs like origination fees, discount points, and certain closing costs, expressed as a yearly rate. APR is always equal to or higher than the interest rate."
        },
        {
          q: "Why is APR important when comparing loans?",
          a: "APR lets you compare the true cost of loans with different fee structures. A loan with a 6.5% rate and high fees might have a 7% APR, while a 6.75% rate with low fees might have a 6.85% APR, making the latter actually cheaper overall."
        },
        {
          q: "What costs are included in APR?",
          a: "APR typically includes: loan origination fees, discount points, lender fees, mortgage insurance premiums (for FHA/USDA), and some closing costs. It doesn't include: appraisal fees, title insurance, attorney fees, or costs you'd pay regardless of lender."
        },
        {
          q: "Is a lower APR always better?",
          a: "Usually, yes - but consider your time horizon. If selling or refinancing soon, a loan with higher APR but lower upfront costs might be better. APR assumes you hold the loan to term, so it's less meaningful for short-term ownership plans."
        }
      ]
    },
    fha: {
      icon: Home,
      title: "FHA Loan Calculator",
      description: [
        "Calculate monthly payments for an FHA loan including lower down payment requirements, upfront and annual mortgage insurance premiums, and competitive interest rates for first-time buyers.",
        "Understand the costs and benefits of FHA financing, including easier qualification requirements balanced against mandatory mortgage insurance throughout the loan term."
      ],
      howItWorks: [
        "This calculator shows payment and cost details for an FHA (Federal Housing Administration) loan, which allows lower down payments (as low as 3.5%) and more lenient credit requirements compared to conventional loans. FHA loans require mortgage insurance premiums (MIP) for the loan's life.",
        "Enter your home price, down payment (3.5% minimum with 580+ credit score), interest rate, and loan term. The calculator includes both upfront MIP (1.75% of loan amount) and annual MIP (0.55%-0.85% of loan amount), which significantly affect monthly payments and total costs.",
        "Results display your monthly payment including MIP, total insurance costs over the loan term, and comparison to conventional loans. FHA loans help first-time buyers and those with limited savings, but MIP adds substantial long-term costs that conventional loans may avoid."
      ],
      faqs: [
        {
          q: "What is an FHA loan?",
          a: "An FHA loan is insured by the Federal Housing Administration, allowing lenders to offer mortgages with lower down payments (3.5%) and more flexible credit requirements (580+ score). The government insurance protects lenders, making them willing to accept higher-risk borrowers."
        },
        {
          q: "What is FHA mortgage insurance (MIP)?",
          a: "MIP consists of two parts: upfront MIP of 1.75% of loan amount (usually rolled into the loan), and annual MIP of 0.55%-0.85% divided into monthly payments. Unlike conventional PMI, FHA MIP typically lasts the entire loan term and can't be removed, adding significant cost."
        },
        {
          q: "Who should consider an FHA loan?",
          a: "FHA loans suit first-time buyers with limited savings for down payment, buyers with credit scores in the 580-680 range, those who can't afford 20% down, or buyers in expensive markets where FHA loan limits accommodate home prices. Not ideal if you have 20% down and 700+ credit."
        },
        {
          q: "Can I remove FHA mortgage insurance?",
          a: "For loans after June 2013 with less than 10% down, MIP lasts the entire loan term and cannot be removed. With 10%+ down, MIP ends after 11 years. The only way to eliminate MIP is to refinance to a conventional loan once you have 20% equity."
        },
        {
          q: "What are FHA loan limits?",
          a: "FHA loan limits vary by county, ranging from $498,257 in low-cost areas to $1,149,825 in high-cost areas (2024). The limit is based on area median home prices. Loans above these limits require jumbo or conventional financing."
        }
      ]
    },
    va: {
      icon: Shield,
      title: "VA Loan Calculator",
      description: [
        "Estimate monthly payments for a VA loan with zero down payment, no mortgage insurance, and competitive interest rates exclusively available to eligible veterans and active military members.",
        "Calculate your VA loan benefits including the funding fee, closing costs, and long-term savings compared to conventional financing options."
      ],
      howItWorks: [
        "This calculator estimates payments and costs for a VA (Veterans Affairs) loan, available to eligible veterans, active military, and surviving spouses. VA loans require no down payment and no mortgage insurance, offering significant advantages despite a one-time funding fee.",
        "Enter your home price, down payment (if any), interest rate, loan term, and funding fee percentage (varies by service type, down payment, and first-time use). The calculator shows monthly payments and compares total costs versus conventional loans.",
        "Results display the funding fee amount (typically 1.4%-3.6% of loan amount), monthly payment savings from no mortgage insurance, and long-term cost advantages. VA loans often provide the best terms for eligible borrowers, even with the upfront funding fee."
      ],
      faqs: [
        {
          q: "Who qualifies for a VA loan?",
          a: "Veterans with sufficient service time, active-duty service members, National Guard and Reserve members with 6+ years, and surviving spouses of service members who died in service or from service-related disabilities. You need a Certificate of Eligibility (COE) from the VA to apply."
        },
        {
          q: "Do VA loans require a down payment?",
          a: "No! VA loans allow 0% down payment for loan amounts up to $766,550 (2024). For amounts above this in expensive areas, you may need to pay 25% of the difference. This is one of the biggest advantages versus conventional loans requiring 3-20% down."
        },
        {
          q: "What is the VA funding fee?",
          a: "The funding fee is a one-time charge (1.4%-3.6% of loan amount) that helps fund the VA loan program. It varies based on: service type, down payment amount, and whether it's your first VA loan. Veterans receiving VA disability compensation are exempt from this fee."
        },
        {
          q: "Can I use a VA loan multiple times?",
          a: "Yes! You can reuse your VA loan benefit after paying off a previous VA loan, or even have multiple VA loans simultaneously if you have remaining entitlement. The funding fee is higher for subsequent uses (3.6% vs. 2.3% for first-time with 0% down)."
        },
        {
          q: "Do VA loans have mortgage insurance?",
          a: "No! VA loans never require monthly mortgage insurance premiums, regardless of down payment amount. This saves hundreds per month versus FHA (which requires MIP) or conventional loans with less than 20% down (which require PMI). The funding fee is a one-time charge, not ongoing insurance."
        },
        {
          q: "Are VA loans only for primary residences?",
          a: "Yes, VA loans must be used for your primary residence where you intend to live. You can't use VA loans for investment properties or vacation homes. However, you can rent out your home after living there, and you can use a VA loan for a multi-unit property (up to 4 units) if you occupy one unit."
        }
      ]
    },
    jumbo: {
      icon: Building2,
      title: "Jumbo Loan Calculator",
      description: [
        "Calculate monthly payments for jumbo loans that exceed conforming loan limits, typically requiring larger down payments, higher credit scores, and slightly elevated interest rates.",
        "Understand jumbo loan requirements and costs for financing luxury properties or homes in high-cost areas where standard loan limits don't apply."
      ],
      howItWorks: [
        "This calculator shows payments and requirements for jumbo loans, which exceed conforming loan limits set by Fannie Mae and Freddie Mac ($766,550 in most areas, higher in expensive markets). Jumbo loans typically require larger down payments, higher credit scores, and offer different rates than conforming loans.",
        "Enter your home price, down payment, interest rate, and loan term. The calculator compares jumbo loan scenarios and shows how loan amount affects qualification requirements, including minimum credit score, debt-to-income ratios, and reserve requirements that lenders typically require.",
        "Results display monthly payments, total interest costs, and additional qualification criteria for jumbo loans. While jumbo loans mean higher balances and stricter requirements, they enable purchases of luxury or high-priced homes in expensive markets."
      ],
      faqs: [
        {
          q: "What is a jumbo loan?",
          a: "A jumbo loan exceeds the conforming loan limits set annually by the Federal Housing Finance Agency ($766,550 in most areas for 2024, up to $1,149,825 in high-cost areas). Because these loans can't be purchased by Fannie Mae or Freddie Mac, lenders assume more risk and impose stricter requirements."
        },
        {
          q: "What are the requirements for a jumbo loan?",
          a: "Typical requirements include: 700+ credit score (preferably 720+), 10-20% down payment, debt-to-income ratio under 43% (preferably under 38%), 6-12 months of reserves (mortgage payments in savings), full income documentation, and often lower loan-to-value ratios than conventional loans."
        },
        {
          q: "Are jumbo loan rates higher than conventional rates?",
          a: "Not always! Jumbo rates used to be significantly higher, but competition has made them comparable to or even lower than conforming rates for well-qualified borrowers. Rates depend on your credit score, down payment, reserves, and market conditions."
        },
        {
          q: "How much should I put down on a jumbo loan?",
          a: "Most lenders require 10-20% down, with better rates and terms for larger down payments. Putting down 20% avoids private mortgage insurance and typically secures the best rate. Some lenders offer jumbo loans with as little as 10% down for highly qualified borrowers, but expect higher rates."
        },
        {
          q: "What are reserve requirements?",
          a: "Reserves are liquid assets (savings, investments, retirement accounts) equal to several months of mortgage payments. Jumbo lenders typically require 6-12 months of reserves to ensure you can handle payments during income disruptions. Higher loan amounts often require more months of reserves."
        }
      ]
    }
  };

  const currentContent = content[subcalculator];
  const Icon = currentContent?.icon;

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
        {currentContent && Icon && (
          <div className="mb-8 mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
                {currentContent.title}
              </h1>
            </div>
            <div className="h-px bg-indigo-600 mb-6"></div>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>{currentContent.description[0]}</p>
              <p>{currentContent.description[1]}</p>
            </div>
          </div>
        )}

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <MortgageCalculator category="rates" />
        </Suspense>
      </div>

      {/* How It Works Section */}
      {currentContent && currentContent.howItWorks.length > 0 && (
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
                How It Works
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {currentContent.howItWorks.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Real APR Calculator Article */}
      {subcalculator === 'real-apr' && (
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
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
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
      )}

      {/* FHA Loan Calculator Article */}
      {subcalculator === 'fha' && (
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <article className="prose prose-slate max-w-none">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Understanding FHA Loan Calculations: A Complete Guide
                </h2>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Federal Housing Administration (FHA) loans have helped millions of Americans achieve homeownership by requiring lower down payments and accepting borrowers with less-than-perfect credit. However, FHA loans come with unique costs—particularly mortgage insurance—that significantly affect your monthly payment and long-term expenses. An FHA loan calculator helps you understand these costs before you commit, but only if you understand what it's actually calculating and what the results mean for your specific situation.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Whether you're searching for an FHA loan calculator with closing costs, trying to determine how much you can borrow, or comparing FHA financing to conventional options, understanding how these calculations work ensures you make informed decisions. This calculator provides estimates based on the inputs you provide—your actual qualification and final terms will depend on lender requirements, your complete financial profile, and current market conditions.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  What an FHA Loan Calculator Shows You
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  An FHA loan calculator mortgage tool processes several key inputs to estimate your monthly payment and total borrowing costs. You'll enter the purchase price of the home you're considering, your planned down payment (minimum 3.5% with a credit score of 580 or higher), the interest rate, and the loan term (typically 30 years, though 15-year terms are available).
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The calculator then determines your base loan amount, adds the upfront mortgage insurance premium to your loan balance, and calculates your monthly payment including principal, interest, monthly mortgage insurance, property taxes, homeowners insurance, and any HOA fees. This comprehensive approach gives you a realistic picture of what you'll actually pay each month, not just the principal and interest portion that some simpler calculators show.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When you see references to an FHA loan calculator with PMI, it's important to understand that FHA loans don't technically have PMI (Private Mortgage Insurance). Instead, they have MIP (Mortgage Insurance Premium), which works differently. While both protect the lender if you default, FHA MIP includes both an upfront premium and annual premiums, and typically cannot be removed without refinancing to a conventional loan. This distinction matters significantly when calculating your long-term costs.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Breaking Down FHA Loan Components
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Understanding how to calculate an FHA loan requires knowing how each component contributes to your monthly payment and total loan amount. Let's break down each element in the calculation process.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Purchase Price and Down Payment:</strong> You start with the home's purchase price and your down payment. With a credit score of 580 or higher, FHA requires just 3.5% down. If your score is between 500-579, you'll need 10% down. Your base loan amount equals the purchase price minus your down payment.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Upfront Mortgage Insurance Premium (UFMIP):</strong> FHA charges an upfront premium of 1.75% of your base loan amount. Most borrowers finance this into the loan rather than paying it at closing, which means it increases your total loan balance and you'll pay interest on it over the life of the loan. For example, on a $300,000 base loan, the UFMIP would be $5,250, bringing your total financed amount to $305,250.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Annual Mortgage Insurance Premium:</strong> In addition to the upfront premium, you'll pay annual MIP divided into monthly payments. The annual rate typically ranges from 0.45% to 0.85% of your loan amount, depending on your loan-to-value ratio, loan amount, and loan term. This monthly charge appears in your payment and continues for the life of the loan if you put down less than 10%.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Interest Rate and Term:</strong> The FHA loan interest rate you receive depends on market conditions, your credit score, and lender pricing. Rates on FHA loans are often competitive with conventional loans, though the mortgage insurance costs can make the total monthly payment higher. Most borrowers choose 30-year terms for lower monthly payments, though 15-year terms build equity faster and reduce total interest paid.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Property Taxes, Insurance, and HOA Fees:</strong> These ongoing costs vary significantly by location and property but must be included in your total monthly payment calculation. Property taxes might be $200/month in one area and $800/month in another for a similar home. Homeowners insurance depends on the home's value, location, and coverage level. If the property has HOA fees, these add to your monthly housing expense. An FHA loan calculator with closing costs often includes these in the estimate to show your complete monthly obligation.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  How FHA Loan Limits Affect Your Calculations
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  FHA loan limits represent the maximum amount you can borrow through the FHA program, and these limits vary dramatically by location and property type. Understanding these limits is crucial when using any FHA loan calculator, whether you're searching for an FHA loan calculator Texas tool, an FHA loan calculator Florida option, or calculators specific to California, Ohio, Oregon, Utah, or any other state.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The Federal Housing Administration sets loan limits by county based on local median home prices. In 2024, the floor limit for most counties is $498,257 for a single-family home, while high-cost areas like parts of California, certain Florida counties, and expensive markets in other states can have limits exceeding $1,149,825. This means an FHA loan calculator California user in San Francisco might calculate a loan up to the high-cost limit, while someone using an FHA loan calculator Ohio tool in a rural county might face the floor limit.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  These geographic variations explain why location-specific searches are common—the loan limit in your county directly affects how much you can borrow. A home priced at $600,000 might qualify for FHA financing in expensive markets but exceed the limit in standard-cost areas, requiring conventional financing instead. Property taxes and insurance costs also vary substantially by state and county, which is why calculators that let you input your actual local costs provide more accurate estimates than generic tools.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For multifamily properties (2-4 units), FHA loan limits are higher than single-family limits. An FHA loan calculator multifamily scenario would use these elevated limits—for example, the floor limit for a four-unit property might be around $950,000, with high-cost areas allowing even more. If you're considering purchasing a duplex, triplex, or fourplex to live in one unit and rent the others, understanding these higher limits matters significantly.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Calculating Real FHA Costs: A Detailed Example
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  To understand what is the monthly payment on a $400,000 loan at 7% under FHA terms, let's work through a complete hypothetical calculation showing exactly how each cost component contributes to the final payment.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Hypothetical Scenario:</strong> Purchase price of $400,000, minimum 3.5% down payment, 7% interest rate, 30-year term.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Step 1 - Base Loan Amount:</strong><br />
                  Down payment: $400,000 × 3.5% = $14,000<br />
                  Base loan amount: $400,000 - $14,000 = $386,000
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Step 2 - Upfront MIP:</strong><br />
                  UFMIP at 1.75%: $386,000 × 1.75% = $6,755<br />
                  Total financed amount: $386,000 + $6,755 = $392,755
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Step 3 - Monthly Principal and Interest:</strong><br />
                  On $392,755 at 7% for 30 years: approximately $2,613 per month<br />
                  This covers the loan principal and interest only.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Step 4 - Monthly MIP:</strong><br />
                  Assuming annual MIP rate of 0.55% (typical for this scenario):<br />
                  Annual MIP: $392,755 × 0.55% = $2,160<br />
                  Monthly MIP: $2,160 ÷ 12 = $180
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Step 5 - Property Taxes and Insurance:</strong><br />
                  Property taxes (example): $400/month<br />
                  Homeowners insurance (example): $150/month<br />
                  HOA fees (if applicable): $0 in this example
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Total Monthly Payment: $2,613 + $180 + $400 + $150 = $3,343</strong>
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  This example assumes specific values for taxes and insurance, which vary dramatically by location. The actual interest rate you receive depends on your credit profile and market conditions. The MIP rate may vary slightly based on exact loan terms. This calculation demonstrates the methodology—your specific numbers will differ based on your situation.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Income Requirements and Affordability
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  One of the most common questions when using an FHA loan calculator income estimator is: how much income do you need to qualify for a $500,000 mortgage? The answer depends on several factors, but we can work through the general approach lenders use to evaluate affordability.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Lenders evaluate your debt-to-income ratio (DTI), which compares your total monthly debt payments to your gross monthly income. FHA typically allows DTI ratios up to 43-50%, though some lenders may go slightly higher with strong compensating factors. Your housing payment (including principal, interest, MIP, taxes, insurance, and HOA) typically shouldn't exceed 31% of your gross monthly income under traditional guidelines, though this can vary.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  In a hypothetical scenario, if a $500,000 FHA purchase with 3.5% down at 7% interest resulted in a total monthly payment of approximately $4,100 (including all costs), and we apply a 31% front-end ratio, you'd need gross monthly income of about $13,225, or approximately $159,000 annually. However, this simplified calculation doesn't account for your other debts. If you have car payments, student loans, credit card payments, or other obligations, you'd need higher income to stay within acceptable DTI ratios.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The question "how much can I borrow on an FHA loan?" depends on multiple factors: your income, existing debts, credit score, the property location (loan limits), down payment amount, and current interest rates. An FHA loan calculator income tool can provide estimates, but only a lender can determine your actual qualification after reviewing your complete financial profile. Two borrowers with identical incomes might qualify for vastly different loan amounts depending on their debts and credit profiles.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  FHA vs. Conventional Loan Calculations
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Understanding the difference between an FHA loan calculator and a conventional loan calculator helps you determine which financing option might cost less over time. The key differences affect both your upfront costs and long-term monthly payments.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  FHA loans require just 3.5% down with a 580+ credit score, while conventional loans typically require at least 5% down, and often 10-20% to get better terms. However, FHA's upfront MIP (1.75% added to your loan balance) and monthly MIP (which usually lasts the life of the loan) can make FHA more expensive long-term, even with lower down payment and potentially slightly better interest rates for borrowers with lower credit scores.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Conventional loans with less than 20% down require PMI, but this private mortgage insurance can be removed once you reach 20% equity through payments and appreciation. The ability to remove PMI makes conventional loans potentially more cost-effective for borrowers who can afford the higher down payment and have good credit (typically 680+). Running the numbers through both calculators helps you compare the true costs based on your specific situation.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Special FHA Loan Scenarios
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Beyond standard single-family home purchases, FHA financing covers several special scenarios that require different calculation approaches.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>FHA Multifamily Loans:</strong> If you're considering purchasing a 2-4 unit property to live in one unit and rent the others, FHA allows this with higher loan limits than single-family properties. You can use 75% of the projected rental income from the other units to help qualify, which can substantially increase your borrowing power. An FHA loan calculator multifamily tool would need to account for these higher limits and the rental income offset when estimating qualification, though actual approval requires detailed rent schedules and property appraisals.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>FHA 203(k) Renovation Loans:</strong> An FHA construction loan, more specifically the FHA 203(k) program, allows you to finance both the purchase price and renovation costs in a single loan. The calculation becomes more complex because you're borrowing based on the property's after-repair value rather than current value. Renovation costs, contractor estimates, and a detailed work plan all factor into the loan amount. Standard FHA calculators don't typically handle these scenarios—specialized 203(k) calculators or lender guidance is necessary.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Down Payment Assistance Programs:</strong> Many state and local housing agencies offer down payment assistance grants or low-interest loans to qualified buyers. While some programs, including various first-time homebuyer initiatives, can provide substantial assistance, the availability and amounts vary significantly by location and change over time. If you've heard about programs like a $25,000 first-time home buyer grant application, research current offerings in your specific area—such programs may be available in some jurisdictions but not others, and typically have income limits and other eligibility requirements. These programs can work with FHA financing but add complexity to the calculation.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Why FHA Calculator Results Vary Between Tools
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  You might notice that an FHA loan calculator Zillow tool produces different results than this calculator or a lender's calculator. These variations occur for legitimate reasons related to different assumptions and estimation methods.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Different calculators may use different MIP rate assumptions. Some might assume the minimum 0.45% annual MIP, while others use 0.55% or higher rates. Property tax and insurance estimates vary—some calculators use national averages, others use state or county-specific estimates, and some require you to input your own figures. Closing cost estimates also differ, with some calculators providing detailed breakdowns and others using simplified percentages.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Most importantly, online calculators provide estimates for planning purposes—they cannot account for your specific credit profile, debt situation, or lender-specific pricing adjustments. Only an actual loan application with a lender produces binding terms. Use calculators to understand the range of costs and compare scenarios, but don't rely on them as guaranteed qualification tools.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Mortgage Renewal vs. FHA Purchase Calculations
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A mortgage renewal calculator serves a different purpose than an FHA purchase calculator. Mortgage renewals, more common in Canada than the United States, involve renegotiating your mortgage terms at the end of a term period while keeping the same loan. In the U.S., the equivalent concepts are refinancing or rate modification.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  An FHA purchase calculator, like this one, focuses on the initial home purchase: calculating down payment, upfront MIP, monthly payments including all MIP, taxes, and insurance from the start of the loan. If you're looking for a mortgage calculator Canada tool, you'll need different calculators designed for Canadian mortgage products, which have different structures, terms, and regulations than U.S. FHA loans. FHA refinance calculators exist for converting existing loans to FHA terms, but those involve different calculations than new purchases.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Making the Most of Your FHA Calculator
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  To get the most accurate estimates from any FHA calculator, input realistic values specific to your situation. Use your actual planned down payment amount, obtain current interest rate quotes from lenders, and research property tax rates for the specific area where you're house hunting. Get homeowners insurance quotes for your price range and location rather than relying on generic estimates.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Compare multiple scenarios—try calculations with 3.5% down versus 10% down to see how that affects monthly MIP and total costs. Calculate the same home price using both FHA and conventional assumptions to determine which actually costs less over time for your situation. Factor in all your existing monthly debts to ensure the payment fits within realistic DTI ratios.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Remember that FHA loan requirements extend beyond just the numbers. You'll need a property that meets FHA appraisal standards, employment verification, acceptable credit history (even if your score is lower than conventional requirements), and sufficient funds for closing costs and reserves. The calculator tells you if the numbers could work—a lender determines if you actually qualify.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                    Frequently Asked Questions About FHA Loan Calculations
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        How do I calculate an FHA loan payment?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Calculate your base loan (purchase price minus down payment), add 1.75% upfront MIP to get your total financed amount, then calculate the monthly principal and interest payment on that amount. Add monthly MIP (annual rate divided by 12), property taxes, homeowners insurance, and any HOA fees. All these components together equal your total monthly payment.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        What are the current FHA loan limits in my area?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        FHA loan limits vary by county and are updated annually. Visit the HUD website or ask a local FHA-approved lender for current limits in your specific county. Limits for 2024 range from $498,257 in standard-cost areas to over $1,149,825 in high-cost counties, with higher limits for multifamily properties.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Can I use this calculator for a multifamily property?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Yes, but you'll need to adjust your inputs. Multifamily properties (2-4 units) have higher FHA loan limits than single-family homes. You may also be able to use projected rental income to help qualify, though this requires more complex calculations. For detailed multifamily analysis, consult with an FHA lender who can factor in rental income offsets.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Why does my result differ from Zillow or other calculators?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Different calculators use different assumptions for MIP rates, property taxes, insurance costs, and closing costs. Some use national averages while others allow custom inputs. None can provide guaranteed terms—only an actual lender quote with a complete loan application determines your real costs. Use multiple calculators to understand the range, then get lender quotes for accurate pricing.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Do I have to pay mortgage insurance with an FHA loan?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Yes, FHA loans require both upfront MIP (1.75% of the base loan amount, typically financed into the loan) and annual MIP (paid monthly). For loans with less than 10% down, annual MIP lasts the entire loan term. With 10% or more down, MIP ends after 11 years. The only way to eliminate MIP earlier is to refinance to a conventional loan once you have at least 20% equity.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        What income do I need to qualify for an FHA loan?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        There's no minimum income requirement, but your income must be sufficient to keep your debt-to-income ratio within acceptable limits (typically 43-50% max). Required income depends on the loan amount, your existing debts, property taxes and insurance costs, and the interest rate. A $300,000 loan might require $70,000-$80,000 in annual income with minimal other debts, but individual situations vary significantly. A lender evaluates your complete financial picture to determine qualification.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Can I get help with my down payment?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Down payment assistance programs exist in many states and localities, often aimed at first-time homebuyers or those meeting income limits. These programs can provide grants or low-interest loans that work with FHA financing. Availability, amounts, and eligibility requirements vary significantly by location and change over time. Check with your state housing finance agency, local housing authorities, and FHA-approved lenders about current programs in your area.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* VA Loan Calculator Article */}
      {subcalculator === 'va' && (
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <article className="prose prose-slate max-w-none">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Understanding VA Loan Affordability: A Complete Guide to Calculating Your Home Buying Power
                </h2>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When you're ready to use your VA loan benefit, one of your first questions is likely: "How much house can I actually afford?" A VA loan calculator serves as your starting point for this discovery, helping you estimate monthly payments and explore different scenarios before you ever talk to a lender. Unlike a formal pre-qualification, which involves documentation and credit review, a calculator lets you experiment freely with different home prices, down payment amounts, interest rates, and loan terms to see how these variables affect your monthly obligation.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The value of running these calculations yourself goes beyond just seeing a monthly payment number. You gain insight into how various factors interact—how a slightly higher interest rate impacts your payment, what happens when you adjust your loan term from 30 years to 15 years, or how property taxes in one area versus another change your total housing cost. This understanding prepares you for informed conversations with lenders and helps you set realistic expectations as you begin your home search.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Keep in mind that calculator results provide estimates, not guarantees. Actual qualification depends on a lender's review of your complete financial picture, including your income documentation, credit history, debt obligations, and the specific property you're purchasing. Think of calculator results as your planning tool, while lender qualification represents your actual buying power.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  What Determines How Much VA Loan You Can Afford
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Affordability for a VA loan depends on multiple factors working together. While conventional loan qualification often focuses heavily on down payment size and loan-to-value ratios, VA loans work differently because they don't require a down payment in most cases. Instead, your affordability centers on whether your income can comfortably support the monthly payment while maintaining adequate residual income for your household's living expenses.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Your gross monthly income forms the foundation of affordability calculations. Lenders examine your stable, verifiable income from employment, self-employment, retirement, disability compensation, and other consistent sources. For VA loans specifically, disability compensation can be particularly valuable because it counts as tax-free income, effectively making it worth more than the same amount from taxable sources when lenders calculate your debt-to-income ratio.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The debt-to-income ratio (DTI) compares your total monthly debt obligations to your gross monthly income. For VA loans, lenders typically look for a DTI of 41% or lower, though some flexibility exists depending on other compensating factors. This ratio includes your projected mortgage payment (principal, interest, property taxes, and insurance), plus any recurring debts like car loans, student loans, credit card minimum payments, and other obligations. If you're wondering how much income you need for a specific loan amount—say, qualifying for a $500,000 mortgage—the answer depends heavily on your other debts. A borrower with no other debt obligations needs substantially less income than someone carrying significant monthly debt payments.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Beyond DTI, VA loans require adequate residual income, which represents the money left over after you pay all major monthly obligations. The VA establishes minimum residual income requirements based on your geographic region, loan amount, and family size. This guideline ensures you have enough money remaining for food, healthcare, clothing, and other necessities. A calculator won't typically account for residual income requirements, which is one reason why calculator estimates differ from actual lender qualification.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  VA Loan Entitlement and Zero Down Payment Borrowing
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  One of the VA loan program's most significant benefits is the entitlement guarantee, which allows most eligible veterans to purchase a home without any down payment. Your entitlement represents the amount the VA guarantees to the lender if you default, giving lenders confidence to offer loans without traditional down payment requirements.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Veterans typically have access to basic entitlement plus bonus entitlement, combining to allow loans up to certain limits without requiring a down payment. In most areas, veterans with full entitlement can borrow based on their income qualification rather than hitting a hard cap. If you've previously used your VA loan benefit and haven't fully restored your entitlement, you may have partial entitlement available, which still provides benefits but might require a down payment on higher-priced properties or limit how much you can borrow without putting money down.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The entitlement system connects directly to affordability because it determines whether your desired home price requires a down payment. When using a VA loan calculator, understanding your entitlement status helps you set realistic parameters. Some calculators allow you to input a down payment even though it's not required, which can be useful for exploring how a down payment might reduce your monthly payment or help you qualify for a more expensive home if your entitlement is partially used.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Breaking Down Your VA Loan Monthly Payment
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Your total monthly payment on a VA loan consists of several components, all of which a comprehensive mortgage calculator should include for accurate estimates. Understanding each piece helps you evaluate whether a particular home fits your budget.
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Jumbo Loan Calculator Article */}
      {subcalculator === 'jumbo' && (
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
      )}

      {/* FAQ Section */}

      {currentContent && currentContent.faqs.length > 0 && (
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
                {currentContent.faqs.map((faq, index) => (
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
      )}
    </section>
  );
}

export default function RatesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <RatesPageContent />
    </Suspense>
  );
}
