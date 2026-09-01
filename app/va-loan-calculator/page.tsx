"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Shield } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

export default function VALoanCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the payment on a $400,000 VA loan at 6.5%?",
      a: "For a $400,000 VA loan at 6.5% over 30 years with no down payment, your monthly principal and interest payment would be approximately $2,528. The VA funding fee (2.3% for first-time use = $9,200) is typically financed into the loan, bringing your total loan to $409,200 and your P&I payment to about $2,586/month. Add property taxes ($300-500/month depending on location), homeowners insurance ($150-250/month), bringing your total monthly payment to roughly $3,100-3,400. Veterans with VA disability ratings are exempt from the funding fee. Use a VA loan calculator to estimate your specific payment with your local tax rates and insurance costs."
    },
    {
      q: "Can you get a VA loan with bad credit?",
      a: "VA loans don't have a minimum credit score requirement set by the VA itself, but most lenders require 580-620 minimum. Some VA-specialized lenders accept scores as low as 500-550 for well-qualified borrowers with strong compensating factors (stable income, low debt-to-income ratio, significant residual income). Veterans with credit scores below 620 may face higher interest rates, stricter income verification, and need manual underwriting rather than automatic approval. If your credit score is 640+, you'll have much better access to lenders and competitive rates. The VA loan program is generally more flexible than conventional loans, making it easier for veterans with less-than-perfect credit to become homeowners."
    },
    {
      q: "What's the difference between VA and FHA loans?",
      a: "VA loans require no down payment (vs. 3.5% for FHA), have no monthly mortgage insurance (FHA requires MIP for life of loan with <10% down), and typically offer lower interest rates. VA loans have a one-time funding fee (1.4-3.6%, waived for disabled veterans) while FHA has upfront MIP (1.75%) plus ongoing monthly MIP (0.45-1.05%). VA loans have stricter property condition requirements than FHA and require veterans to occupy as primary residence. FHA loans are available to anyone who qualifies, while VA loans require military service. For eligible veterans, VA loans almost always offer better terms than FHA—lower costs, no down payment, no ongoing insurance premiums."
    },
    {
      q: "Can I use my VA loan benefit more than once?",
      a: "Yes! You can use your VA loan benefit multiple times throughout your life. After paying off and selling a home purchased with a VA loan, your entitlement is restored for full reuse. You can even have multiple VA loans simultaneously if you have remaining entitlement—for example, keeping your first VA loan while buying a second home with another VA loan (subject to entitlement limits). The funding fee increases for subsequent use: first-time users with 0% down pay 2.3%, while second-time users pay 3.6%. Veterans with 10%+ down payment reduce the funding fee (1.4% first-time, 1.4% subsequent). Your Certificate of Eligibility (COE) shows your available entitlement."
    },
    {
      q: "Are there VA loan limits in 2024?",
      a: "As of 2020, VA loan limits were eliminated for veterans with full entitlement, meaning you can borrow any amount the lender approves based on your income and creditworthiness. However, conforming loan limits still matter for veterans with partial entitlement or who already have an existing VA loan. For 2024, the conforming limit is $766,550 in most areas and up to $1,149,825 in high-cost counties. Veterans can borrow above these amounts without a down payment if they have full entitlement and lender approval. If you don't have full entitlement, you may need a down payment of 25% of the amount exceeding the limit. Check your Certificate of Eligibility (COE) to see your available entitlement."
    },
    {
      q: "Do disabled veterans pay the VA funding fee?",
      a: "No! Veterans receiving VA disability compensation are completely exempt from the VA funding fee, saving $9,200-$14,400 on a $400,000 loan. This exemption applies whether you're rated at 10% or 100% disabled—any disability rating qualifies. Surviving spouses receiving Dependency and Indemnity Compensation (DIC) are also exempt. Purple Heart recipients are exempt from the funding fee as well. The exemption is automatic once your VA disability status is confirmed—lenders verify this through your Certificate of Eligibility (COE). If you become disabled after closing, you cannot get a refund of funding fees already paid, but future VA loans will be exempt."
    },
    {
      q: "Can I buy a multi-family property with a VA loan?",
      a: "Yes! VA loans can finance properties with up to 4 units, as long as you occupy one unit as your primary residence. This is an excellent wealth-building strategy—you can live in one unit while renting out the other 2-3 units, with rental income helping cover your mortgage. Lenders will consider 75% of projected rental income when qualifying you for the loan. The same VA loan benefits apply: 0% down payment, no monthly mortgage insurance, competitive rates. Property must meet VA's Minimum Property Requirements (MPRs) for all units. You can also use a VA loan to buy a single-family home and rent out rooms while you occupy the property."
    }
  ];

  return (
    <section className="py-8">
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
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">

        {/* Introduction Section */}
        <div className="mb-8 mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-indigo-600 flex-shrink-0" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
              VA Loan Calculator
            </h1>
          </div>
          <div className="h-px bg-indigo-600 mb-6"></div>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed">
            <p>Estimate monthly payments for a VA loan with zero down payment, no mortgage insurance, and competitive interest rates exclusively available to eligible veterans and active military members.</p>
            <p>Calculate your VA loan benefits including the funding fee, closing costs, and long-term savings compared to conventional financing options.</p>
          </div>
        </div>

        <MortgageCalculator category="rates" forcedSubcalculator="va" />
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
                This calculator estimates payments and costs for a VA (Veterans Affairs) loan, available to eligible veterans, active military, and surviving spouses. VA loans require no down payment and no mortgage insurance, offering significant advantages despite a one-time funding fee.
              </p>
              <p>
                Enter your home price, down payment (if any), interest rate, loan term, and funding fee percentage (varies by service type, down payment, and first-time use). The calculator shows monthly payments and compares total costs versus conventional loans.
              </p>
              <p>
                Results display the funding fee amount (typically 1.4%-3.6% of loan amount), monthly payment savings from no mortgage insurance, and long-term cost advantages. VA loans often provide the best terms for eligible borrowers, even with the upfront funding fee.
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
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 text-center">
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
