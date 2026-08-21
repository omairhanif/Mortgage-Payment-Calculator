"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp, Home, CreditCard, RefreshCw, type LucideIcon } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

function MortgagePageContent() {
  const searchParams = useSearchParams();
  const subcalculator = searchParams.get("subcalculator") || "second";
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Content for each calculator
  const content: Record<string, { icon: LucideIcon; title: string; description: [string, string]; howItWorks: string[]; faqs: Array<{ q: string; a: string }> }> = {
    second: {
      icon: Home,
      title: "Second Mortgage Calculator",
      description: [
        "Calculate monthly payments and total costs for a second mortgage or home equity loan based on your home's equity, desired loan amount, interest rate, and repayment term.",
        "Compare second mortgage options and understand how additional debt affects your overall monthly housing costs and long-term financial obligations."
      ],
      howItWorks: [
        "This calculator helps you understand the costs of taking out a second mortgage or home equity loan on your property. A second mortgage allows you to borrow against your home equity while keeping your existing first mortgage in place.",
        "Enter your home value, existing mortgage balance, the amount you wish to borrow, interest rate, and loan term. The calculator uses your home equity (home value minus existing mortgage) to determine if you have sufficient equity for the loan.",
        "Results show your monthly payment for the second mortgage, total interest paid over the loan term, and how the additional debt affects your overall housing costs and equity position."
      ],
      faqs: [
        {
          q: "What is a second mortgage?",
          a: "A second mortgage is a loan taken out against your home equity while your original mortgage remains in place. It's called 'second' because it's subordinate to your first mortgage, meaning the first mortgage gets paid first if you default."
        },
        {
          q: "How much can I borrow with a second mortgage?",
          a: "Most lenders allow you to borrow up to 80-85% of your home's value minus your existing mortgage balance. For example, if your home is worth $400,000 and you owe $250,000, you might borrow up to $70,000-$90,000 depending on lender requirements."
        },
        {
          q: "What's the difference between a second mortgage and HELOC?",
          a: "A second mortgage is a lump-sum loan with fixed payments over a set term, while a HELOC is a revolving line of credit you can draw from as needed. Second mortgages typically have fixed rates, while HELOCs usually have variable rates."
        },
        {
          q: "How does a second mortgage affect my home equity?",
          a: "A second mortgage reduces your available equity by the loan amount. As you make payments, you gradually rebuild equity. However, you're now making payments on two mortgages, which increases your overall housing costs."
        },
        {
          q: "Can I deduct second mortgage interest on my taxes?",
          a: "You may be able to deduct interest if the loan is used to buy, build, or substantially improve your home. However, the Tax Cuts and Jobs Act limits total mortgage debt eligible for interest deduction to $750,000. Consult a tax professional for your specific situation."
        }
      ]
    },
    heloc: {
      icon: CreditCard,
      title: "HELOC Calculator",
      description: [
        "Estimate payments and costs for a Home Equity Line of Credit (HELOC) during both the draw period and repayment period, factoring in variable interest rates and flexible borrowing.",
        "Understand how HELOC draw schedules, interest-only payments, and rate adjustments impact your monthly obligations and total borrowing costs over time."
      ],
      howItWorks: [
        "This calculator estimates payments and costs for a Home Equity Line of Credit (HELOC), which works like a credit card secured by your home equity. HELOCs have two phases: a draw period where you can borrow money and typically make interest-only payments, and a repayment period where you pay back principal and interest.",
        "Enter your desired credit line amount, draw period length (usually 5-10 years), repayment period length (usually 10-20 years), and interest rate. The calculator determines payments during both periods based on standard HELOC terms.",
        "Results display your monthly payment during the draw period (interest-only), your higher monthly payment during the repayment period (principal + interest), and total interest costs over the life of the HELOC."
      ],
      faqs: [
        {
          q: "How does a HELOC work?",
          a: "A HELOC is a revolving credit line secured by your home equity. During the draw period (typically 5-10 years), you can borrow up to your credit limit and usually make interest-only payments. After the draw period ends, you enter the repayment period where you pay back principal and interest."
        },
        {
          q: "What is the draw period vs repayment period?",
          a: "The draw period is when you can borrow money from your HELOC and typically make interest-only payments. The repayment period begins after the draw period ends, when you can no longer borrow and must repay both principal and interest, resulting in higher monthly payments."
        },
        {
          q: "How is my HELOC interest rate determined?",
          a: "HELOC rates are typically variable and based on the prime rate plus a margin set by your lender. Your rate depends on factors like your credit score, loan-to-value ratio, and lender policies. Some lenders offer fixed-rate options for all or part of your balance."
        },
        {
          q: "Can I make principal payments during the draw period?",
          a: "Yes, most HELOCs allow you to make principal payments during the draw period even though only interest is required. Paying down principal reduces your balance, lowers your interest charges, and may allow you to borrow again up to your credit limit."
        },
        {
          q: "What happens when the draw period ends?",
          a: "When the draw period ends, you can no longer borrow from your HELOC and must begin repaying principal and interest. Your monthly payment will increase significantly. Some HELOCs require a balloon payment, while others convert to a standard amortizing loan."
        }
      ]
    },
    refinance: {
      icon: RefreshCw,
      title: "Refinance Calculator",
      description: [
        "Calculate potential savings from refinancing your mortgage by comparing your current loan with new loan terms, interest rates, and closing costs.",
        "Determine your break-even point and understand whether refinancing makes financial sense based on your specific situation and long-term goals."
      ],
      howItWorks: [
        "This calculator compares your current mortgage to potential refinance options to determine if refinancing makes financial sense. Refinancing replaces your existing mortgage with a new loan, potentially at a lower rate or different term.",
        "Enter your current loan balance, interest rate, and remaining term, along with the new loan's interest rate, term, and closing costs. The calculator compares your current monthly payment and total interest to what you'd pay with the new loan.",
        "Results show your monthly payment savings, break-even point (how long until closing cost savings exceed costs), total interest savings over the loan term, and whether refinancing is financially beneficial based on your situation."
      ],
      faqs: [
        {
          q: "When should I consider refinancing?",
          a: "Consider refinancing when rates are significantly lower than your current rate (typically 0.5-1% or more), you want to shorten your loan term, need to switch from an ARM to fixed-rate, want to eliminate PMI, or need to tap home equity. Ensure savings exceed closing costs."
        },
        {
          q: "What is a break-even point?",
          a: "The break-even point is how many months it takes for your monthly payment savings to exceed your closing costs. For example, if refinancing costs $3,000 and saves you $150/month, your break-even is 20 months. Stay in your home past this point to benefit financially."
        },
        {
          q: "How do closing costs affect refinancing?",
          a: "Closing costs (typically 2-5% of loan amount) reduce your net savings from refinancing. Higher closing costs mean a longer break-even period. Always compare total costs vs. total savings to ensure refinancing is worthwhile for your time horizon."
        },
        {
          q: "Can I roll closing costs into the new loan?",
          a: "Yes, many lenders allow you to roll closing costs into your new loan balance, so you don't pay them upfront. However, this increases your loan amount and total interest paid over time. Compare both options to see which works better."
        },
        {
          q: "How much can I save by refinancing?",
          a: "Savings depend on your rate reduction, loan balance, and remaining term. A 1% rate reduction on a $300,000 loan could save $200-300/month and $50,000+ over 30 years. Use this calculator to see your specific savings potential."
        },
        {
          q: "Does refinancing extend my loan term?",
          a: "Only if you choose a longer term for your new loan. If you've paid your current mortgage for 5 years (25 years left), you can refinance to a new 25-year loan to keep the same payoff date, or choose a 30-year loan for lower payments but more total interest."
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
            <span className="text-xs text-slate-400 font-medium">Banner Ad (728Ã—90)</span>
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
          <MortgageCalculator category="mortgage" />
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
      {/* Comprehensive HELOC Calculator Article */}
      {subcalculator === "heloc" && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">
              <article className="prose prose-slate max-w-none">
                
                {/* Article Header */}
                <div className="mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                    Understanding HELOC Calculators: How Much Can You Borrow, Interest-Only Payments, and Monthly Payment Estimates
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Home Equity Lines of Credit (HELOCs) provide homeowners with flexible access to their home equity, but understanding how much you can borrow and what your monthly payments might be requires careful calculation. Whether you're searching for a HELOC calculator in Canada, Ontario, Alberta, or comparing options from TD, Scotiabank, BMO, CIBC, or RBC, this comprehensive guide explains how HELOC calculators work, how payments are calculated during interest-only and repayment periods, and what to expect when borrowing $50,000, $100,000, or $150,000 through a home equity line of credit.
                  </p>
                </div>

                {/* Section 1: What Is a HELOC */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    What Is a HELOC and How Does It Differ From Other Home Equity Products?
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    A Home Equity Line of Credit (HELOC) is a revolving credit line secured by your home equityâ€”the difference between your home's current market value and what you owe on your existing mortgage. Unlike a traditional mortgage where you receive a lump sum and make fixed monthly payments over a predetermined term, a HELOC works more like a credit card. You're approved for a maximum credit limit, and you can borrow money as needed up to that limit, pay it back, and borrow again during what's called the "draw period."
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    What makes a HELOC distinct from a home equity loan or second mortgage is this revolving credit structure. With a home equity loan or second mortgage, you receive a lump sum upfront and immediately begin making fixed monthly payments that include both principal and interest. Once you've paid back the loan, you can't borrow from it again unless you apply for a new loan. A HELOC, by contrast, gives you ongoing access to funds throughout the draw period, and you only pay interest on the amount you've actually borrowed, not on your entire credit limit.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    HELOCs typically operate in two distinct phases. During the draw periodâ€”usually lasting 5 to 10 yearsâ€”you can borrow from your credit line and generally make interest-only payments, though many lenders allow you to pay down principal if you choose. When the draw period ends, the HELOC enters the repayment period, which typically lasts 10 to 20 years. During repayment, you can no longer draw additional funds, and your monthly payment increases to include both principal and interest as the outstanding balance is amortized over the remaining term.
                  </p>
                </div>

                {/* Section 2: How a HELOC Calculator Works */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    How a HELOC Calculator Works and What Variables Affect Your Estimate
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    A HELOC calculator helps you estimate how much you might be able to borrow against your home equity and what your monthly payments could look like during both the draw and repayment periods. Understanding the key variables that influence these calculations will help you use any HELOC calculator more effectively, whether you're using a free online calculator or one provided by a specific bank.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The primary inputs for most HELOC calculators include your home's current market value, your existing mortgage balance, the HELOC credit limit you're considering, the applicable interest rate, the length of the draw period, and the length of the repayment period. Some calculators also ask about existing debts you plan to consolidate, which helps estimate potential monthly savings when using a HELOC for debt consolidation purposes.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Your home value and existing mortgage balance determine your available equity—the foundation for how much you might be able to borrow. The interest rate significantly impacts your monthly payment calculation, especially because many HELOCs use variable rates that can change over time. The draw and repayment period lengths affect how long you'll make interest-only payments versus principal-and-interest payments, dramatically changing your payment amounts at different stages of the HELOC lifecycle.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    It's essential to understand that HELOC calculators provide estimates based on the information you input. These estimates help you model different scenarios and compare options, but they don't represent guaranteed loan terms. The actual interest rate, credit limit, fees, and payment structure you qualify for depend on your credit score, income, debt-to-income ratio, loan-to-value ratio, and the specific lender's underwriting criteria.
                  </p>
                </div>

                {/* Section 3: How Much Can I Borrow */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    How Much Can I Borrow With a HELOC? Understanding Equity and Lender Limits
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The amount you can borrow through a HELOC depends primarily on two factors: the equity you've built in your home and your lender's maximum combined loan-to-value (CLTV) ratio requirements. Home equity is calculated by subtracting your existing mortgage balance from your home's current market value. This equity represents the portion of your home that you own outright, and it serves as the collateral securing your HELOC.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Most lenders allow you to borrow up to a certain percentage of your home's value across all mortgages and home equity products combined. This combined loan-to-value ratio typically ranges from 80% to 85% of your home's appraised value, though some lenders may have more conservative limits or, in certain cases, allow higher ratios for well-qualified borrowers.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Consider this hypothetical example to illustrate how HELOC borrowing capacity is calculated: Suppose your home is currently worth $400,000, and you have an existing mortgage balance of $200,000. Your home equity is $200,000 ($400,000 minus $200,000). However, your maximum HELOC availability isn't simply your $200,000 in equity—it's constrained by your lender's combined loan-to-value requirements.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    If your lender uses an 85% CLTV limit, they would calculate your maximum borrowing as follows: $400,000 (home value) × 85% = $340,000 total allowable debt against the property. Subtracting your existing $200,000 mortgage leaves $140,000 as your maximum HELOC availability in this hypothetical scenario. However, your actual approved credit limit could be lower based on the lender's internal policies, your creditworthiness, income verification, and debt-to-income ratio.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Additionally, even if you're approved for a $140,000 credit limit in this example, many lenders cap HELOC amounts at specific dollar thresholds regardless of available equity. Some institutions might have internal maximums of $100,000, $250,000, or $500,000, depending on their risk management policies and the market they serve. This means your actual HELOC calculator results should be viewed as estimates that need validation through the lender's application and underwriting process.
                  </p>
                </div>


              </article>
            </div>
          </div>
        </section>
      )}

      {/* Comprehensive Second Mortgage Article */}
      {subcalculator === "second" && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">
              <article className="prose prose-slate max-w-none">
                
                {/* Article Header */}

                {/* Section 4: How HELOC Payments Are Calculated */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    How Is a HELOC Monthly Payment Calculated?
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Understanding how HELOC monthly payments are calculated requires recognizing the relationship between your outstanding balance, the applicable interest rate, and whether you're in the draw period or repayment period. Unlike fixed-payment mortgages where your monthly payment remains constant, HELOC payments can vary based on how much you've borrowed and changes in the interest rate if your HELOC has a variable rate.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    During the interest-only draw period, your monthly payment is typically calculated by multiplying your current outstanding balance by the monthly interest rate (your annual rate divided by 12). This means if you borrow more money from your HELOC, your minimum monthly payment increases. If you pay down your balance, your minimum payment decreases. This flexibility is one of the defining characteristics of a HELOC and differs significantly from traditional installment loans.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When the repayment period begins, the calculation changes substantially. Your remaining balance is amortized over the repayment period—typically 10 to 20 years—and your monthly payment now includes both principal and interest. The payment is calculated using standard amortization formulas that ensure your balance is fully repaid by the end of the repayment term. This generally results in a significant payment increase compared to the interest-only draw period payments.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Because many HELOCs use variable interest rates tied to a benchmark like the prime rate, your monthly payment can change when interest rates change, even if your outstanding balance remains the same. This introduces an element of payment uncertainty that doesn't exist with fixed-rate home equity loans or second mortgages. A HELOC payment calculator can help you model how different interest rate scenarios would affect your payment, but remember that future rate movements can't be predicted with certainty.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                    Understanding Second Mortgages: Borrowing Capacity, Costs, and Qualification
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    If you're considering borrowing against your home equity, understanding how second mortgages work can help you make informed financial decisions. This comprehensive guide explains how much you might be able to borrow, what lenders look for when evaluating applications, how rates compare to first mortgages, and how to use second mortgage calculators effectively to plan your borrowing strategy.
                  </p>
                </div>

                {/* Section 1: Second Mortgage Rates */}

                {/* Section 5: Interest-Only HELOC Payments */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Understanding Interest-Only HELOC Payments During the Draw Period
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Interest-only payments are a hallmark feature of the HELOC draw period, and understanding how they work is crucial for anyone considering a home equity line of credit. An interest-only payment means you're only required to pay the interest that accrues on your outstanding balance each month—you're not required to pay down any of the principal amount you've borrowed.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The primary advantage of interest-only payments is that your monthly payment obligations remain relatively low during the draw period. This can be particularly beneficial if you're using the HELOC for a purpose where you expect to receive funds later to pay down the principal—for example, if you're renovating a home you plan to sell, or if you're temporarily bridging a cash flow gap. The lower required payment provides flexibility and can help you manage cash flow more effectively during the draw period.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    However, it's critical to understand that making only interest-only payments means your principal balance doesn't decrease. If you borrow $50,000 from your HELOC and make only the minimum interest-only payments for the entire 10-year draw period, you'll still owe the full $50,000 when the repayment period begins. This is fundamentally different from a traditional mortgage or home equity loan, where each payment reduces your principal balance and builds equity.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Most HELOCs allow you to make principal payments during the draw period even though they're not required. Paying down principal voluntarily during the draw period reduces your outstanding balance, which lowers your monthly interest charges and also restores your available credit if you need to borrow again later. Some borrowers strategically use this feature, making principal payments when cash flow allows and drawing funds again when needed, effectively using the HELOC as a financial flexibility tool.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When the draw period ends and the repayment period begins, the payment structure changes dramatically. You'll transition from interest-only payments to payments that include both principal and interest, and you can no longer draw additional funds. This payment increase can be substantial—often doubling or even tripling your monthly payment—which is why it's essential to plan for this transition when evaluating whether a HELOC makes sense for your financial situation.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    How Second Mortgage Rates Work and What to Expect
                  </h3>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Traditional Lenders vs. Private Lenders
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Traditional lenders such as banks and credit unions typically offer second mortgages with rates that might be 1-3 percentage points higher than their first mortgage rates, though the exact spread varies based on market conditions and borrower qualifications. These lenders follow stricter underwriting standards and usually require good credit, documented income, and lower debt-to-income ratios.
                  </p>

                {/* Section 6: HELOC Payment Examples */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    HELOC Payment Examples: What Would Monthly Payments Be on $50,000, $100,000, or $150,000?
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    One of the most common questions people have when researching HELOCs is: "What would my monthly payment be on a $50,000 HELOC?" or similar questions about $100,000 or $150,000 amounts. The answer depends on the interest rate, whether you're in the interest-only draw period or the principal-and-interest repayment period, and the length of the repayment term. Let's explore hypothetical examples to illustrate how these calculations work.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    For a $50,000 HELOC balance at a hypothetical interest rate of 7.5%, your interest-only payment during the draw period would be calculated as $50,000 × (7.5% ÷ 12 months) = $312.50 per month. This represents only the interest accruing on your balance—your principal remains at $50,000. During the repayment period, if your balance is amortized over 15 years at the same 7.5% rate, your monthly payment would increase to approximately $463 per month, which now includes both principal and interest designed to fully repay the $50,000 over the 15-year term.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    How much would a $100,000 HELOC cost per month? Using the same hypothetical 7.5% interest rate, your interest-only payment would be $625 per month during the draw period ($100,000 × 7.5% ÷ 12). When the repayment period begins and the balance amortizes over 15 years, your monthly payment would increase to approximately $927 per month. The difference between the $625 interest-only payment and the $927 principal-and-interest payment illustrates why it's essential to plan for the payment increase when the draw period ends.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    For those considering a larger HELOC, what is the monthly payment on a $150,000 HELOC? At our hypothetical 7.5% interest rate, you'd pay approximately $937.50 per month in interest-only payments during the draw period. During a 15-year repayment period, your monthly payment would increase to roughly $1,390 per month to fully amortize the $150,000 balance. This nearly 50% payment increase from draw to repayment period highlights why understanding both payment phases is crucial before committing to a HELOC.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    It's important to emphasize that these examples use a hypothetical 7.5% interest rate for illustration purposes only. Your actual interest rate will depend on market conditions, the lender's pricing, your creditworthiness, and your home's loan-to-value ratio. HELOC rates in Canada may differ from rates in the United States, and rates vary significantly between lenders and over time. A one percentage point difference in your interest rate can change your monthly payment by $40-50 on a $50,000 balance, so the actual rate you receive makes a substantial difference in your true borrowing cost.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When using a HELOC calculator to estimate payments, always verify what assumptions the calculator makes about interest rates and payment structure. Some calculators show only interest-only payments, while others show repayment period payments. Understanding which calculation you're seeing helps you make more informed comparisons between different borrowing options and better prepares you for the actual costs you'll face throughout the HELOC's lifecycle.
                  </p>
                </div>


                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Private second mortgage lenders often work with borrowers who don't meet traditional lending criteria. Private second mortgage rates can be significantly higherâ€”sometimes in the 8-15% range or even higherâ€”reflecting the increased risk of lending to borrowers with credit challenges, high debt loads, or limited documentation. While private lenders provide access to capital when traditional options aren't available, the higher cost makes it essential to have a clear repayment strategy.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Rate Variations by Location
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Second mortgage rates vary by location based on local market conditions, regulatory environments, and lending competition. When researching second mortgage rates in Canada, you'll find that rates can differ between provinces based on factors like property market strength, foreclosure laws, and lender appetite for second-position lending.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    For borrowers researching second mortgage rates in Ontario specifically, the province's competitive lending market includes both major banks and numerous private lenders. Rates will vary based on individual borrower circumstances, property location, and current market conditions. It's important to obtain actual rate quotes from multiple lenders rather than relying solely on advertised rates, as your specific situation will determine what rates you actually qualify for.
                  </p>

                {/* Section 7: HELOC With Extra Payments */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Making Extra Payments on Your HELOC: How Additional Payments Reduce Interest Costs
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    One of the valuable features of most HELOCs is the flexibility to make payments beyond the minimum required amount without prepayment penalties. Making extra payments—whether during the interest-only draw period or the repayment period—can significantly reduce your outstanding balance, lower your total interest costs over the life of the HELOC, and potentially reduce your monthly minimum payment if you're still in the draw period.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When you make extra payments on your HELOC, the additional amount goes directly toward reducing your principal balance. Because your interest charges are calculated based on your outstanding balance, reducing the principal means less interest accrues each month going forward. This creates a compounding effect where paying down principal accelerates your debt reduction over time.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The revolving nature of HELOCs adds another dimension to extra payment strategies. During the draw period, when you pay down your principal balance, you restore your available credit up to your original credit limit. This means if you have a $50,000 credit limit and borrow the full amount, then pay down $10,000, you once again have $10,000 available to draw if needed. This flexibility allows you to use extra payments strategically—reducing your balance to save on interest when you don't need the funds, but knowing you can access that credit again if an opportunity or emergency arises.
                  </p>
                </div>

                {/* Section 8: HELOC Rates and Payment Changes */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    How HELOC Rates Impact Monthly Payments and What to Expect With Variable Rates
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Unlike home equity loans or second mortgages that typically carry fixed interest rates, most HELOCs use variable rates that fluctuate based on changes in broader interest rate benchmarks. This variable rate structure significantly impacts your monthly payments and total borrowing costs, making it essential to understand how rate changes affect your HELOC before you commit to this financing option.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    HELOC rates are typically structured as a margin above a benchmark rate, most commonly the prime rate. Your lender sets the margin based on factors like your credit score, loan-to-value ratio, and their own pricing policies. The prime rate component fluctuates based on changes in central bank policy rates.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    This variable rate characteristic means your monthly payment can change even if your outstanding balance remains constant. In a rising rate environment, your payments increase, potentially straining your budget. In a falling rate environment, your payments decrease, freeing up cash flow.
                  </p>
                </div>

                {/* Section 9: HELOC Calculators in Canada */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    HELOC Calculators in Canada: Ontario, Alberta, and Regional Considerations
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Canadian homeowners searching for "HELOC calculator Canada," "HELOC calculator Ontario," or "HELOC calculator Alberta" are often looking to understand how much they might be able to borrow and what their payments could look like within the context of Canadian lending practices and regulations. While the fundamental mathematics of HELOC calculations remain the same regardless of location, there are important contextual differences between Canadian and American HELOC markets.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The major Canadian banks—TD, Scotiabank, BMO, CIBC, and RBC—each have their own HELOC products with specific features, rate structures, and qualification requirements. While a general HELOC calculator provides useful baseline estimates, comparing actual offers from multiple Canadian lenders will give you the most accurate picture of your real borrowing options, costs, and payment obligations within the Canadian lending environment.
                  </p>
                </div>

                </div>

                {/* Section 6: Regional and Lender Considerations */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Regional Considerations and Lender Options
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Second mortgage lending practices, terminology, regulations, and availability vary significantly across different countries and regions. Understanding these differences is important when researching your options, especially if you're using a second mortgage calculator designed for a different market than your own.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Second Mortgages in Canada
                  </h4>


                {/* Section 10: Bank-Specific Calculator Searches */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Why People Search for TD, Scotiabank, BMO, CIBC, and RBC HELOC Calculators
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Many homeowners search specifically for "TD HELOC calculator," "Scotiabank HELOC calculator," "BMO HELOC calculator," "CIBC HELOC calculator," or "RBC HELOC calculator" when researching home equity borrowing options. Each major Canadian bank structures its HELOC products somewhat differently, with varying rate structures, fee schedules, credit limit calculations, and qualification requirements.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Rather than relying on calculator estimates alone, request detailed rate and fee information from multiple lenders. Gathering actual quotes from TD, Scotiabank, BMO, CIBC, RBC, and potentially credit unions or other lenders gives you concrete information for making an informed borrowing decision.
                  </p>
                </div>

                {/* Section 11: HELOC vs Home Equity Loan vs Second Mortgage */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    HELOC vs Home Equity Loan vs Second Mortgage: Understanding the Key Differences
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Homeowners looking to tap their home equity face a choice between three primary product types: HELOCs, home equity loans, and second mortgages. A HELOC operates as revolving credit with flexible borrowing and typically interest-only payments initially. A home equity loan provides a lump sum upfront with fixed monthly payments. The term "second mortgage" can refer to either, but often describes a lump-sum loan from an alternative lender.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Choosing between these options depends on your specific needs. If you value flexibility and are comfortable with variable rates, a HELOC might be best. If you prefer payment predictability and want a fixed rate, a home equity loan makes more sense.
                  </p>
                </div>

                {/* Section 12: Using HELOC Calculators Responsibly */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    How to Use a HELOC Calculator Responsibly: Understanding Limitations and Next Steps
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    HELOC calculators serve as valuable planning tools that help you model different borrowing scenarios and understand approximate costs. However, responsible use requires understanding their limitations. Calculator results are estimates based on standardized methods and cannot account for all variables that affect your actual borrowing capacity—factors like your specific credit score, debt-to-income ratio, employment history, and individual lender policies all influence what you'll actually be approved for.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    After using calculators to develop a preliminary understanding, contact actual lenders for detailed rate quotes and preliminary qualification assessments. Request information about all fees and ask about rate adjustment terms, prepayment privileges, and conversion options.
                  </p>
                </div>

                {/* Conclusion */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Making Informed Decisions About HELOC Borrowing
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    A HELOC can be a powerful financial tool for accessing your home equity while maintaining flexibility. Understanding how much you might be able to borrow, what your monthly payments could look like during both interest-only and repayment periods, and how different variables affect your costs empowers you to make informed borrowing decisions.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Whether you're researching HELOC options in Canada, Ontario, Alberta, or elsewhere, using calculators to model scenarios provides valuable insights. Understanding that a $50,000 HELOC might cost around $312 per month in interest-only payments at a hypothetical 7.5% rate—but could increase to $463 per month during repayment—helps you budget appropriately.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed">
                    Remember that calculator estimates serve as starting points, not definitive answers. Validate projections by requesting detailed quotes from lenders, understanding all terms and fees, and confirming you can afford payments throughout the HELOC lifecycle. By combining calculator insights with thorough lender comparisons and careful financial planning, you'll be well-positioned to make HELOC borrowing decisions that support your financial wellbeing.
                  </p>
                </div>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When using a second mortgage calculator in Canada, it's important to understand that Canadian mortgage regulations, interest calculation methods, and lending practices differ from other countries. Many major Canadian banks offer second mortgage products or home equity loans, though the specific products, rates, and qualification criteria vary by institution.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Some borrowers research whether banks like CIBC or RBC offer second mortgage products or calculator tools on their websites. While major Canadian banks do provide various home equity borrowing options, the availability, terms, and rates for these products vary and change over time. It's best to contact lenders directly or visit their websites for current product information rather than assuming specific products or rates based on general information.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    For those researching second mortgage lenders in Ontario, the province has a robust market that includes major banks, credit unions, alternative lenders, and private mortgage lenders. Ontario's diverse lending landscape means borrowers often have multiple options, but it also makes comparison shopping essential to find the most appropriate product for your situation.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    UK, Ireland, and New Zealand Considerations
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    If you're using a second mortgage calculator in the UK, be aware that British mortgage terminology and products can differ from North American practices. What North Americans call a "second mortgage" might be referred to differently in the UK, and the regulatory framework governing these loans varies from the Canadian or US systems.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Similarly, borrowers looking for a second mortgage calculator for Ireland or a second mortgage calculator for NZ (New Zealand) should understand that local regulations, typical loan-to-value limits, standard lending practices, and available products may differ significantly from North American norms. If you're researching second mortgages in these jurisdictions, consult resources specific to your local market and speak with local lenders or mortgage advisors who understand the regional lending environment.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    For borrowers in or near Halifax (whether Halifax, Nova Scotia in Canada or Halifax in the UK), checking with local lenders and financial institutions about their specific second mortgage or home equity loan products will provide more accurate information than relying on generalized calculator estimates from other markets.
                  </p>
                </div>

                {/* Section 7: Using Second Mortgage to Buy Another Property */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Using a Second Mortgage to Buy Another House
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Some homeowners consider taking out a second mortgage on their current home to use as a down payment on an additional propertyâ€”whether that's an investment property, a vacation home, or a primary residence upgrade. While this strategy can work, it requires careful financial planning and a realistic assessment of whether you can afford both mortgage payments simultaneously.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Understanding the Combined Payment Obligation
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When you get a second mortgage to buy another house, you'll be making three mortgage payments: your original first mortgage, the second mortgage on your current home, and the new mortgage on the property you're purchasing. This substantially increases your monthly housing costs and debt-to-income ratio. Before pursuing this strategy, use calculators to model your total combined payments and ensure they fit comfortably within your budget.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    For a hypothetical scenario: if your current first mortgage payment is $1,800, a new second mortgage payment might be $600, and the mortgage on the new property could be $2,200â€”bringing your total monthly mortgage payments to $4,600. Can your income support this level of debt along with your other expenses? If the new property is an investment, will the rental income reliably cover its mortgage payment, or will you need to cover shortfalls?
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Alternative Strategies to Consider
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Before committing to a second mortgage for this purpose, consider whether refinancing your first mortgage might be a better option. If current rates are favorable and your home has appreciated substantially, a cash-out refinance could provide the funds you need while maintaining a single mortgage payment. Alternatively, a home equity line of credit (HELOC) might offer more flexibility than a lump-sum second mortgage if you're uncertain about timing or amounts.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Lender Considerations and Risks
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When you're applying for a mortgage on the new property, the lender will consider your second mortgage payment as part of your debt obligations. This increases your debt-to-income ratio and may affect how much you can borrow or whether you qualify at all. Additionally, leveraging your home equity this way increases your financial riskâ€”if property values decline or you experience income disruption, you could find yourself with more debt than equity across your properties.
                  </p>
                </div>

                {/* Section 8: Extra Payments */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Understanding Second Mortgage Payments and Extra Payments
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Second mortgage payments work the same way as first mortgage paymentsâ€”each monthly payment includes both principal and interest, calculated so the loan will be fully repaid by the end of the term if you make all scheduled payments. In the early years, a larger portion of each payment goes toward interest, while in later years more goes toward reducing the principal balance.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    The Impact of Extra Payments
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Using a second mortgage calculator with extra payments functionality, you can see how making additional principal payments affects both your payoff timeline and total interest cost. When you make an extra payment that goes entirely toward principal, you reduce the loan balance faster, which means less interest accrues over time. Even modest extra payments made consistently can save thousands of dollars in interest and shorten your loan term by years.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    For a hypothetical example: on a $60,000 second mortgage at 8% over 15 years, your regular monthly payment would be approximately $573. If you paid an extra $100 per month toward principal, you could pay off the loan roughly 3 years earlier and save around $6,500 in interest. Before implementing an aggressive extra payment strategy, verify that your loan doesn't have prepayment penalties and ensure the extra payments fit your budget without compromising your emergency savings or other financial priorities.
                  </p>
                </div>

                {/* Section 9: The 2-2-2 Rule */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    What Is the 2-2-2 Rule for Mortgages?
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The "2-2-2 rule" is not a universally standardized mortgage term, and its meaning can vary depending on context and source. In some cases, it refers to a guideline related to debt ratios or payment affordability benchmarks. Because the definition isn't consistent across all lenders or regions, it's important to understand what any particular lender means when they reference this or similar rules.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    One interpretation sometimes mentioned relates to mortgage stress testing or payment shock considerationsâ€”ensuring borrowers can handle payments if rates increase or circumstances change. However, since specific definitions and applications vary, if a lender or advisor mentions a "2-2-2 rule" or similar guideline, ask them to clarify exactly what they mean and how it applies to your situation. What matters most is understanding your lender's specific qualification criteria and affordability requirements rather than assuming a particular rule has a universal meaning.
                  </p>
                </div>

                {/* Section 10: Comparing Offers */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Comparing Second Mortgage Offers: Beyond the Interest Rate
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When comparing second mortgage offers from different lenders, the advertised interest rate is important but shouldn't be your only consideration. The total cost of borrowing includes fees, closing costs, prepayment terms, and other factors that can significantly impact what you actually pay.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Fees and Closing Costs
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Second mortgages often come with origination fees, appraisal fees, title search fees, legal fees, and other closing costs. These can add thousands of dollars to your borrowing cost. A lender offering a slightly lower rate but significantly higher fees might actually be more expensive than a lender with a marginally higher rate and lower fees. When you're comparing second mortgage calculator results with actual lender offers, factor in these upfront costs to understand the true cost of each option.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Prepayment Terms and Flexibility
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Some second mortgages allow prepayment without penalty, while others charge significant fees if you pay off the loan early. If you anticipate potentially refinancing, selling your home, or making extra payments, prepayment flexibility can be valuable. Private lenders may have stricter prepayment terms than traditional lenders, so read the fine print carefully.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Traditional Lenders vs. Private Lenders
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Traditional lenders like banks and credit unions typically offer lower rates but require stronger credit profiles and more extensive documentation. Private lenders provide access to borrowers who don't meet traditional criteria but charge higher rates and fees to compensate for increased risk. Neither option is inherently betterâ€”the right choice depends on your individual circumstances, timeline, and ability to qualify through traditional channels.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Using Free Calculators for Comparison
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Free second mortgage calculators available online provide valuable initial estimates and help you compare different loan scenarios. These tools let you model various combinations of loan amounts, terms, and rates without any obligation. While some lenders provide their own calculator tools on their websites, using an independent, free second mortgage calculator can help you understand the costs before you start shopping for actual rate quotes.
                  </p>
                </div>

                {/* Section 11: Calculator Limitations */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Calculator Limitations and Next Steps
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Second mortgage calculators are valuable planning tools, but they have important limitations. Calculators provide estimates based on the inputs you provideâ€”they don't evaluate your actual creditworthiness, verify your income, appraise your property, or guarantee loan approval. The interest rate you enter into a calculator may not reflect the rate a lender will actually offer you based on your specific financial profile and current market conditions.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Additionally, calculators typically show only principal and interest payments. They don't automatically account for closing costs, origination fees, appraisal fees, or other expenses you'll incur when taking out a second mortgage. Your actual borrowing capacity may be lower than a calculator suggests if lenders have stricter debt-to-income requirements or lower maximum CLTV limits than you assumed.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Moving from Estimates to Real Offers
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Once you've used a calculator to understand approximate costs and borrowing capacity, the next step is getting pre-qualified or pre-approved by actual lenders. This process involves providing documentation, authorizing credit checks, and potentially having your property appraised. Only through this process will you know what loan amounts, rates, and terms you truly qualify for.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Contact multiple lendersâ€”including traditional banks, credit unions, and potentially private lenders if neededâ€”to compare actual offers. Ask each lender for a complete breakdown of rates, fees, terms, and closing costs. Use the information you gathered from calculator estimates to ask informed questions and evaluate whether each offer aligns with your expectations and financial goals.
                  </p>
                </div>

                {/* Conclusion */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Making Informed Second Mortgage Decisions
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    A second mortgage can be a useful financial tool when you need to access your home equity for renovations, debt consolidation, education expenses, or even purchasing another property. However, taking on additional debt secured by your home is a significant financial decision that requires careful consideration of your ability to handle the increased payment obligations and your overall financial goals.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Using a second mortgage calculator helps you model different scenarios, understand potential costs, and compare how various loan structures affect your monthly payment and total borrowing cost. These tools provide valuable insights during the planning stage, but remember that calculator estimates should be validated with actual lender quotes before making any commitments.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed">
                    Whether you're exploring options in Canada, Ontario specifically, the UK, Ireland, New Zealand, or elsewhere, understanding regional lending practices, comparing multiple lenders, and thoroughly evaluating both traditional and private lending options will help you make the most informed decision for your financial situation. Take the time to research, calculate, compare, and consult with financial professionals to ensure that a second mortgage truly aligns with your long-term financial wellbeing.
                  </p>
                </div>

              </article>
            </div>
          </div>
        </section>
      )}

      {/* Comprehensive Refinance Calculator Article */}
      {subcalculator === "refinance" && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">
              <article className="prose prose-slate max-w-none">
                
                {/* Article Header */}
                <div className="mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                    Understanding Refinance Calculators: Making Informed Decisions About Mortgage and Auto Loan Refinancing
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Refinance calculators help borrowers evaluate whether replacing an existing loan with a new one makes financial sense. Whether considering mortgage refinancing or exploring auto loan options, understanding how these calculators work and what their results mean can help you make more informed borrowing decisions.
                  </p>
                </div>

                {/* Section 1: What Refinance Calculators Do */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    What Refinance Calculators Show You
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    A refinance calculator compares your existing loan to a potential new loan, helping you see how changing your interest rate, loan term, or borrowing amount might affect your finances. These tools typically show you several key metrics: your current monthly payment versus what your new payment would be, how long it would take to recover the costs of refinancing (the break-even point), and how much interest you might pay over the life of each loan.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The calculator needs specific information about your current loan—including your remaining balance, current interest rate, and how much time remains on your loan term. You'll also enter details about the potential new loan, such as the interest rate you expect to qualify for, the term length you're considering, and the closing costs you'll need to pay. With these inputs, the calculator can provide estimates that help you evaluate whether refinancing aligns with your financial goals.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    It's important to understand that calculator results are estimates based on the information you provide. Actual loan terms, rates, fees, and costs can vary depending on your credit profile, the lender you work with, property details, and current market conditions. These tools help you model different scenarios and understand general trends, but they shouldn't replace detailed quotes from actual lenders when you're ready to move forward.
                  </p>
                </div>

                {/* Section 2: Mortgage Refinancing Calculations */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    How Mortgage Refinancing Works
                  </h3>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Rate-and-Term Refinancing
                  </h4>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Rate-and-term refinancing means replacing your current mortgage with a new one that has different interest rate or loan term, without significantly changing the loan amount. Borrowers often pursue this type of refinancing when interest rates have dropped since they originally borrowed, or when they want to shorten or lengthen their loan term to adjust their monthly payment or total interest costs.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    For example, if you originally borrowed at 6% interest and rates have fallen to 4.5%, refinancing could reduce your monthly payment and the total interest you pay over the life of the loan. Alternatively, if you started with a 30-year mortgage and have paid it down for several years, you might refinance into a 15-year term at a lower rate, potentially paying off your home sooner while paying less total interest, though your monthly payment might be higher.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Cash-Out Refinancing
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Cash-out refinancing involves borrowing more than you currently owe and receiving the difference in cash. This might be used for home improvements, debt consolidation, or other financial needs. The calculator helps you see how increasing your loan amount affects your monthly payment and long-term costs, even if you secure a lower interest rate. Because you're borrowing more, your payment might actually increase despite the better rate, or you might extend your term to keep payments manageable.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Cash-out refinancing turns home equity into accessible funds, but it also means you owe more against your property and will pay interest on a larger balance. Calculator results can help you weigh the immediate access to cash against the long-term cost of borrowing that money through your mortgage.
                  </p>
                </div>

                {/* Section 3: Break-Even Analysis */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Understanding the Break-Even Point
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The break-even point is one of the most important metrics a refinance calculator provides. It tells you how many months it will take for your monthly payment savings to equal the upfront costs of refinancing. Before that point, you're effectively paying back the refinancing costs through your monthly savings. After that point, the savings become net gains that improve your financial position.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    To calculate the break-even point, divide your total closing costs by your monthly savings. For instance, if refinancing costs $3,000 in closing costs and reduces your monthly payment by $150, your break-even point is 20 months ($3,000 ÷ $150 = 20). If you plan to stay in your home and keep the loan for longer than 20 months, refinancing could make financial sense. If you might sell or refinance again within that timeframe, you may not recover the upfront costs.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Closing costs typically include application fees, appraisal fees, title search and insurance, origination fees, and other lender charges. Some lenders offer "no-closing-cost" refinancing, but this usually means the costs are built into a higher interest rate rather than eliminated entirely. A calculator can help you compare paying costs upfront versus accepting a higher rate to avoid out-of-pocket expenses.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    The break-even calculation focuses on monthly payment changes, but it's also important to consider the total interest paid over the life of each loan. Sometimes a refinance that appears beneficial based on monthly savings might actually cost more in total interest if you're extending the loan term. Calculators that show total interest for both your current and proposed loans help you evaluate the complete financial picture, not just the immediate monthly impact.
                  </p>
                </div>

                {/* Section 4: Auto and Car Loan Refinancing */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Refinancing Auto and Car Loans
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    While mortgage refinancing receives more attention, auto loan refinancing works on similar principles. If interest rates have dropped since you financed your vehicle, or if your credit has improved significantly, you might qualify for a better rate that reduces your monthly payment or total interest paid. Auto loan refinance calculators help you compare your current loan terms against potential new loan options.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Auto refinancing differs from mortgage refinancing in some important ways. Vehicle depreciation means the collateral securing your loan loses value over time, which can affect refinancing options if you owe more than the car is worth. Loan terms are generally much shorter—typically 3 to 6 years rather than 15 to 30 years for mortgages—so the time horizon for recovering refinancing costs is compressed. Closing costs for auto refinancing are typically lower than for mortgages, but the loan-to-value ratio and the vehicle's age can limit your options.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    A car loan refinance calculator helps you model scenarios like reducing your interest rate while keeping the same term, extending the term to lower monthly payments, or shortening the term to pay off the vehicle faster. As with mortgage refinancing, pay attention to both the monthly payment change and the total interest paid. Extending an auto loan term to reduce monthly payments might result in paying more total interest, and you could find yourself making payments on a vehicle that needs replacement before the loan is paid off.
                  </p>
                </div>

                {/* Section 5: Refinancing in Canada */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Mortgage Refinancing in Canada
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Mortgage refinancing works differently in Canada compared to the United States, and these differences affect how calculators should be used. Canadian mortgages typically have terms of 1 to 5 years, even though the amortization period (the time to pay off the loan completely) might be 25 or 30 years. When your term expires, you renew or refinance, potentially with different rates and terms. This structure means Canadians refinance or renegotiate more frequently than Americans with 30-year fixed-rate mortgages.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Breaking a Canadian mortgage before the term ends often involves prepayment penalties, which can be substantial. Many Canadian mortgages use the Interest Rate Differential (IRD) to calculate penalties, comparing your current rate to the rate the lender could charge if they re-lent the money for the remaining term. This can result in penalties that are significantly higher than a simple three-month interest penalty. A refinance calculator for Canadian mortgages should account for these potential penalties when calculating whether refinancing makes sense.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Major Canadian banks and lenders—including TD, RBC, Scotiabank, CIBC, and BMO—each have their own policies for refinancing, prepayment penalties, and eligible loan amounts. Some lenders allow limited prepayments without penalty, which might provide an alternative to full refinancing. If you're considering refinancing in Canada, understanding your current lender's prepayment terms and comparing them against potential new loan options is essential.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Canadian mortgage rules also include regulations around loan-to-value ratios and mortgage insurance. If you're refinancing to access equity and your new loan exceeds 80% of your home's value, you may need mortgage insurance, adding to your costs. Provincial regulations and lending practices can also vary, affecting what refinancing options are available to you. Calculator results provide a starting point, but consulting with Canadian lenders or mortgage brokers who understand the specific rules and options in your province is important for accurate assessments.
                  </p>
                </div>

                {/* Section 6: Using Calculator Results Responsibly */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Using Calculator Results Responsibly
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Refinance calculators provide estimates that depend entirely on the accuracy of your inputs and the assumptions built into the calculations. Small differences in interest rates, fees, or loan terms can significantly affect the results, so treat calculator outputs as approximations rather than guarantees. Before making refinancing decisions, obtain actual loan offers from lenders with confirmed rates, terms, and costs specific to your situation.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    When comparing refinancing options, make sure you're evaluating equivalent components. Comparing a 30-year refinance against your current 15-year mortgage might show lower monthly payments, but the comparison isn't apples-to-apples because you're extending the term. Similarly, comparing a refinance with points paid upfront against one with a higher rate but no upfront costs requires looking at both the immediate cash requirements and the long-term interest costs.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Interest rates change constantly based on economic conditions, Federal Reserve policy, and lender pricing. A calculator estimate based on today's rates might not reflect what's available when you actually apply. Use calculators to understand how rate changes affect your costs, but be prepared for rates to differ when you get actual quotes. Some calculators allow you to model multiple rate scenarios, helping you see how sensitive your decision is to rate variations.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Remember that refinancing involves more than just numbers. Consider how long you plan to stay in your home or keep the loan, whether you value lower monthly payments or faster loan payoff, and how refinancing fits into your broader financial goals. A calculator showing modest savings might suggest refinancing isn't worthwhile if you're planning to move soon, while even a small monthly reduction could be valuable if you need better cash flow and plan to stay long-term.
                  </p>
                </div>

                {/* Section 7: Common Refinancing Scenarios */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Common Refinancing Scenarios
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    To illustrate how refinance calculators work in practice, consider these hypothetical scenarios. Each demonstrates different refinancing situations and what the calculator might reveal about costs, savings, and trade-offs. Remember that these are illustrative examples with simplified numbers—your actual situation will have its own unique details.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Scenario 1: Rate Reduction Refinance
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Imagine a homeowner with $250,000 remaining on a 30-year mortgage at 5.5% interest, with 25 years left. The monthly principal and interest payment is about $1,540. Interest rates have dropped, and they can now refinance to 4.0% for a new 25-year term with $4,000 in closing costs. Using a refinance calculator, they find the new payment would be approximately $1,320—saving $220 per month. The break-even point is about 18 months ($4,000 ÷ $220 = 18.2). If they plan to keep the home and loan for more than 18 months, refinancing could make sense.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    However, the calculator also shows that over the full 25 years, they would pay roughly $146,000 in total interest with the new loan compared to about $212,000 if they kept their current loan for its remaining 25 years—a savings of approximately $66,000 in total interest, even after accounting for the $4,000 in closing costs. This scenario demonstrates a situation where refinancing offers both immediate monthly relief and long-term interest savings.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Scenario 2: Cash-Out Refinance for Debt Consolidation
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Consider someone who owes $180,000 on their mortgage at 4.5% with 20 years remaining, resulting in a monthly payment of approximately $1,140. They also have $25,000 in credit card debt at an average interest rate of 18%, costing them about $600 per month in minimum payments. They're considering a cash-out refinance to borrow $205,000 (their current mortgage plus the credit card debt) at 5.0% for 30 years with $5,000 in closing costs.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    A refinance calculator shows the new mortgage payment would be approximately $1,100 per month for principal and interest. Combined with eliminating the $600 in credit card payments, their total monthly debt obligation drops from $1,740 to $1,100—a savings of $640 per month. The break-even point considering only the closing costs would be about 8 months.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    However, this scenario involves important trade-offs. They're replacing unsecured credit card debt with debt secured by their home, and they're extending repayment from their current mortgage timeline to a new 30-year term. While the monthly payment is much lower and the interest rate on the refinanced mortgage is far below their credit card rates, they'll pay interest on the consolidated debt over 30 years rather than paying off the credit cards more quickly. The total interest cost over the life of the loan needs to be weighed against the immediate monthly relief and the psychological benefit of having a single, more manageable payment. This example shows how refinance calculators help quantify options, but the decision involves personal financial circumstances and discipline.
                  </p>

                  <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                    Scenario 3: Term Extension Trade-Off
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Suppose a borrower has $200,000 remaining on a mortgage at 6.0% interest with 20 years left, making monthly payments of around $1,432. They're experiencing temporary financial strain and considering refinancing to 5.25% for 30 years with $3,000 in closing costs. The calculator shows they could also do a cash-out refinance to access $5,000, making the new loan balance $205,000. At 5.25% for 30 years, the new monthly payment would be approximately $1,132—a reduction of about $300 per month. The break-even point would be about 17 months. However, they would now be making payments for 30 years instead of 20. While the monthly payment is lower and provides better cash flow, the total interest paid over 30 years might be higher than continuing with their current 20-year loan, even though the new rate is lower. This scenario illustrates the trade-off between monthly payment relief and total interest cost.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    These hypothetical examples demonstrate how different refinancing scenarios affect monthly payments, break-even periods, and total costs. Your actual situation will depend on your specific loan details, the rates you qualify for, and the costs involved. Running multiple scenarios through a calculator helps you understand how different options might work for you.
                  </p>
                </div>

                {/* Section 8: Conclusion */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                    Making Informed Refinancing Decisions
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Refinance calculators serve as valuable starting points for evaluating whether replacing your current loan makes financial sense. By modeling different scenarios—varying interest rates, loan terms, and costs—you can better understand the potential benefits and trade-offs of refinancing before committing to the process.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Remember that calculator estimates are not guarantees. The rates you qualify for, the actual costs you'll pay, and the specific terms available depend on many factors that calculators can't fully account for. Use these tools to narrow your options and identify promising scenarios, then work with lenders to get detailed quotes and confirmed terms.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed">
                    Whether you're considering mortgage refinancing, exploring auto loan options, or researching how refinancing works in different regions, take time to understand both the immediate impact on your monthly budget and the long-term total cost. Refinancing can be a useful financial tool when it aligns with your goals and circumstances, but it's not automatically beneficial in every situation. By combining calculator insights with careful research and professional guidance, you can make refinancing decisions that support your financial well-being.
                  </p>
                </div>

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
                ))}\n              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

export default function MortgagePage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <MortgagePageContent />
    </Suspense>
  );
}
