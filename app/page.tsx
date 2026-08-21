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

export default function Page() {
  // FAQ accordion state - only one open at a time
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div>
      {/* Calculator Section with Introduction */}
      <section className="pt-12 pb-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          {/* Banner Ad Placeholder - Top of Page */}
          <div className="mx-auto max-w-5xl mb-8">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
                <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
              </div>
            </div>
          </div>

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

      {/* Informational Article Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <article className="prose prose-slate max-w-none">
              
              {/* Article Header */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  Understanding Mortgage Payment Calculators: A Comprehensive Guide
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether you're a first-time homebuyer or refinancing your existing mortgage, understanding how mortgage payment calculators work can help you make more informed financial decisions. This guide explains what these tools calculate, why results can differ between calculators, and how to interpret the estimates you receive.
                </p>
              </div>

              {/* Section 1: Core Components */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  What Goes Into Your Monthly Mortgage Payment?
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A complete mortgage payment calculator with taxes and insurance accounts for several distinct components that together determine your total monthly housing cost. Understanding each piece helps explain why a simple mortgage payment calculator might show a different number than a comprehensive tool.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Principal and Interest: The Foundation
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When you see a mortgage payment calculator for principal and interest, it's calculating the core loan repayment. The principal is the amount you borrowed, while interest is what the lender charges for lending you that money. These two components are calculated using a standard amortization formula based on your loan amount, interest rate, and loan term.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For example, if you're using a hypothetical scenario with a $300,000 loan at 6.5% interest over 30 years, the monthly principal and interest payment would be approximately $1,896. This doesn't include any other costs—just the loan repayment itself. Early in your loan term, most of each payment goes toward interest. As years pass, more goes toward principal.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Property Taxes: Location Matters
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Property taxes vary significantly by location and are typically collected by your lender through an escrow account, then paid to local tax authorities on your behalf. This is one reason why mortgage payment calculators for specific regions like a mortgage payment calculator for Ontario, a mortgage payment calculator for BC, or a mortgage payment calculator for Alberta might show different total costs even with identical loan terms.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  In Canada, property tax rates can differ substantially between provinces and municipalities. Similarly, a mortgage payment calculator for California needs to account for that state's property tax structure, which operates differently than other US states due to Proposition 13's assessment limitations. When using any calculator, verify that the property tax estimate reflects your actual location.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Homeowners Insurance: Protecting Your Investment
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Lenders require homeowners insurance to protect their investment in your property. Insurance costs vary based on home value, location, coverage level, and local risk factors. A mortgage payment calculator that includes insurance gives you a more complete picture of your actual monthly cost than a basic calculator that only shows principal and interest.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Private Mortgage Insurance (PMI) and Down Payment Impact
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When exploring options with a down payment mortgage calculator, you'll notice a significant change when crossing the 20% down payment threshold. If you put down less than 20% on a conventional loan, you'll typically pay PMI—an additional monthly cost that protects the lender if you default. This can add $100-$200 or more to your monthly payment depending on your loan amount.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A mortgage affordability calculator helps you understand how different down payment amounts affect both your monthly payment and your overall borrowing capacity. Larger down payments reduce your loan amount, eliminate PMI, and often qualify you for better interest rates.
                </p>
              </div>

              {/* Section 2: Calculator Comparisons */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Why Different Calculators Show Different Results
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When conducting a mortgage payment calculator comparison, you might notice that results vary between tools—even when you enter identical information. Understanding why this happens helps you choose the right calculator for your needs.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Simple vs. Comprehensive Calculators
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A simple mortgage payment calculator typically calculates only principal and interest. These basic tools are useful for quick estimates or comparing how different interest rates or loan terms affect your base payment. However, they don't show your complete monthly housing cost.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  More comprehensive calculators include property taxes, homeowners insurance, HOA fees, and PMI when applicable. These provide a more realistic estimate of what you'll actually pay each month. The difference between a simple calculator's result and a comprehensive calculator's result can easily be $500-$1,000 or more per month.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Bank-Provided Calculator Tools
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Many Canadian banks and financial institutions provide their own calculator tools. For instance, some borrowers search for a mortgage payment calculator from TD or a mortgage payment calculator from CIBC when researching their options. These bank-provided calculators can be helpful for getting estimates, though it's important to understand that using a bank's calculator tool doesn't mean you're receiving a rate quote or pre-approval—it's simply a planning tool.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Bank calculators may incorporate assumptions or defaults specific to that institution's typical products, which could differ from independent online calculators. When using any calculator tool from a financial institution, review what components are included in the calculation and verify the assumptions being made.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Excel Spreadsheet Calculators
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Some people prefer using a mortgage payment calculator in Excel because spreadsheets offer complete transparency and customization. You can see exactly what formulas are being used, adjust every assumption, and create detailed amortization schedules. The trade-off is that you need to ensure your formulas are correct and keep tax and insurance estimates current.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Excel calculators are particularly useful for comparing multiple scenarios side-by-side or for borrowers with non-standard situations that don't fit neatly into online calculator templates. However, they require more initial setup and maintenance than simply using an online tool.
                </p>
              </div>

              {/* Section 3: Location-Specific Considerations */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  How Location Affects Your Mortgage Calculations
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Mortgage costs and structures vary by country, province, and state. Using a calculator designed for your specific location helps ensure more accurate estimates.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Canadian Mortgage Calculations
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When using a mortgage payment calculator for Canada, several factors differ from US mortgages. Canadian mortgages typically use semi-annual compounding for interest calculations rather than monthly compounding. Additionally, mortgage terms in Canada are often shorter than the amortization period—you might have a 25-year amortization but renew your mortgage every 5 years, potentially at a different interest rate.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Property tax rates vary significantly across Canadian provinces. A mortgage payment calculator for Ontario needs to account for that province's property tax structure, which differs from a mortgage payment calculator for BC or Alberta. BC homebuyers should also consider additional costs like the Property Transfer Tax, while Alberta has its own land transfer considerations. Each province has unique characteristics that affect overall housing costs.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  UK Mortgage Calculations
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A mortgage payment calculator for the UK operates within a different system entirely. UK mortgages often use different interest rate structures (including tracker mortgages and fixed-rate periods), and the calculation methods can differ from North American mortgages. UK property purchases also involve Stamp Duty Land Tax, which affects affordability even though it's not part of the monthly payment itself.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When researching UK mortgages, it's important to use a calculator specifically designed for that market rather than trying to adapt a US or Canadian calculator, as the underlying assumptions and requirements are often quite different.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  US Regional Variations
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Within the United States, property tax rates and insurance costs vary dramatically by state and locality. A mortgage payment calculator for California should account for that state's relatively high home prices but capped property tax assessment increases under Proposition 13. This creates a different affordability picture than states with lower home prices but higher effective tax rates, or states with frequent reassessments.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Some areas require additional insurance coverage—such as flood insurance in certain zones or earthquake insurance in seismically active regions. These location-specific costs aren't always included in basic calculator tools but significantly affect your actual monthly payment.
                </p>
              </div>

              {/* Section 4: Extra Payments */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  The Impact of Extra Payments on Your Mortgage
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A mortgage payment calculator with extra payments helps you understand how additional principal payments affect your loan payoff timeline and total interest costs. This feature is valuable for borrowers who want to explore paying off their mortgage faster.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  How Extra Payments Work
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When you make an extra payment specifically designated toward principal, you reduce your loan balance faster than the regular amortization schedule. Since interest is calculated on the remaining principal balance, a lower balance means less interest charged on future payments. This creates a compounding effect—early extra payments have a much larger impact than extra payments made late in your loan term.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  For example, in a hypothetical scenario with a $300,000 loan at 6.5% over 30 years, adding just $200 extra to your principal each month could potentially save over $100,000 in interest and shorten your loan by approximately 8 years. These numbers illustrate why many borrowers prioritize making extra payments when financially possible.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  When Extra Payments Make Sense
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Extra payments are most beneficial when you have a higher interest rate, plan to stay in the home long-term, and don't have higher-interest debt elsewhere. Before committing to extra mortgage payments, consider whether you have an adequate emergency fund, whether you're maximizing retirement contributions, and whether you have other debts with higher interest rates.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Some borrowers prefer the flexibility of making extra payments when they have surplus cash rather than committing to a higher monthly payment through a shorter loan term. A calculator that models extra payments helps you explore these different strategies.
                </p>
              </div>

              {/* Section 5: Interpreting Results */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Understanding Calculator Limitations and Next Steps
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  While mortgage calculators provide valuable estimates, it's important to understand what they can and cannot tell you about your actual mortgage costs.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Estimates vs. Actual Offers
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Calculator results are estimates based on the information you provide and certain assumptions. Your actual mortgage payment will be determined by the specific loan offer you receive from a lender, which depends on factors including your credit score, debt-to-income ratio, employment history, and the lender's current rates and programs.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Interest rates change frequently—sometimes multiple times in a single day. The rate you use in a calculator should be a current market rate, but your actual rate will be locked in when you complete your loan application. Property tax and insurance estimates in calculators are often based on typical ranges or your inputs, but your actual costs will depend on the specific property you purchase and the insurance coverage you choose.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  Using Calculators for Planning
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The most valuable use of mortgage calculators is exploring different scenarios. Compare how different down payment amounts affect your monthly payment. See how choosing a 15-year vs. 30-year term changes your payment and total interest. Test whether you can comfortably afford the payment at slightly higher interest rates than you expect—this helps you prepare for potential rate changes if you're getting an adjustable-rate mortgage or refinancing in the future.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A mortgage affordability calculator is particularly useful before you start house hunting, as it helps you understand what price range fits your budget. This prevents the disappointment of falling in love with homes you cannot comfortably afford and helps you focus your search productively.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  When to Speak with a Lender
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  After using calculators to understand your general affordability and comfortable payment range, the next step is getting pre-approved by actual lenders. A pre-approval involves a lender reviewing your financial situation, credit, and documentation to determine what they're willing to lend you and at what terms.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Shop with multiple lenders if possible. Different lenders may offer different rates, fees, and loan programs. What you learn from calculators helps you ask informed questions and understand whether the offers you receive are competitive. You'll be better prepared to evaluate closing costs, points, and other loan features beyond just the interest rate.
                </p>
              </div>

              {/* Section 6: Choosing the Right Calculator */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Selecting the Right Calculator for Your Needs
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Different situations call for different calculator tools. Understanding what each type offers helps you get the most relevant information for your decision-making.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  For Quick Estimates
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  If you're just starting to explore homebuying and want quick ballpark figures, a simple mortgage payment calculator that focuses on principal and interest is fine for initial research. These tools help you understand baseline costs before diving into the details of taxes, insurance, and other expenses.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  For Comprehensive Planning
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  When you're serious about buying and need realistic monthly payment estimates, use a comprehensive calculator that includes all cost components. Look for tools that let you input actual property tax rates for your area, get insurance estimates, include PMI calculations, and account for HOA fees if relevant to properties you're considering.
                </p>

                <h4 className="font-serif text-xl font-semibold text-slate-800 mb-3 mt-6">
                  For Detailed Analysis
                </h4>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  If you want to compare multiple scenarios in detail, explore prepayment strategies, or analyze refinancing options, consider using an Excel-based calculator or a comprehensive online tool with advanced features. These allow you to model complex situations and see exactly how different choices affect your long-term costs.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The best calculator is one that matches your specific situation—whether that means regional considerations, the ability to model extra payments, or features that help you compare different loan structures. Take time to verify that any calculator you use includes the cost components relevant to your purchase and provides results in a clear, understandable format.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4 mt-8">
                  Making Informed Mortgage Decisions
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Mortgage payment calculators are valuable tools for understanding affordability, comparing loan options, and planning your home purchase. By understanding what these calculators measure, why results vary between tools, and how to interpret the estimates they provide, you'll be better prepared to make informed decisions about one of the largest financial commitments most people make.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Remember that calculator results are starting points for your research, not final answers. Use them to explore possibilities, understand how different variables affect your costs, and determine what monthly payment fits comfortably in your budget. Then work with qualified lenders and, when appropriate, financial advisors to make decisions specific to your situation.
                </p>

                <p className="text-base text-slate-600 leading-relaxed">
                  Whether you're using a simple calculator for initial research or a comprehensive tool for detailed planning, the insights you gain help you approach your mortgage with confidence and realistic expectations about the costs involved.
                </p>
              </div>

            </article>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            
            {/* Section Header */}
            <div className="mb-10 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Latest Articles
              </h2>
              <p className="text-slate-600 text-base">
                Expert insights and guides for your mortgage journey
              </p>
            </div>

            {/* Article Cards Grid - 4 items (3 cards + See More button) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Article 1: Mortgage Payment Calculator */}
              <Link
                href="/mortgage-payment-calculator-estimate-monthly-costs"
                className="group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/articles/Mortgage Payment Calculator Estimate Monthly Costs.jpg"
                    alt="Mortgage Payment Calculator: Estimate Monthly Costs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Mortgage Payment Calculator: Estimate Monthly Costs
                  </h3>
                </div>
              </Link>

              {/* Article 2: HELOC Calculator */}
              <Link
                href="/heloc-calculator-estimate-credit-line-costs"
                className="group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/articles/HELOC Calculator Estimate Your Credit Line Costs.jpg"
                    alt="HELOC Calculator: Estimate Your Credit Line Costs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    HELOC Calculator: Estimate Your Credit Line Costs
                  </h3>
                </div>
              </Link>

              {/* Article 3: FHA Loan Calculator */}
              <Link
                href="/fha-loan-calculator-estimate-payments-costs"
                className="group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/articles/FHA Loan Calculator Estimate Payments & Costs.jpg"
                    alt="FHA Loan Calculator: Estimate Payments & Costs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    FHA Loan Calculator: Estimate Payments & Costs
                  </h3>
                </div>
              </Link>

              {/* See More Button (replaces 4th card) */}
              <Link
                href="/articles"
                className="group rounded-lg border-2 border-dashed border-slate-300 bg-white hover:bg-indigo-50 hover:border-indigo-400 shadow-sm overflow-hidden transition-all flex items-center justify-center min-h-[280px]"
              >
                <div className="text-center p-6">
                  <div className="mb-3 flex justify-center">
                    <div className="rounded-full bg-indigo-100 p-4 group-hover:bg-indigo-200 transition-colors">
                      <ArrowRight className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                    See More Articles
                  </h3>
                  <p className="text-sm text-slate-600">
                    Explore all mortgage guides
                  </p>
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
                    Can I make extra payments?
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
                      While this calculator shows your standard monthly payment, making extra principal payments can significantly reduce your total interest and pay off your loan faster. The amortization schedule shows how your payments are applied over time.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
