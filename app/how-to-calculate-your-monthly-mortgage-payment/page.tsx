"use client";

import { useState } from "react";
import { Calculator, ChevronDown, ChevronUp } from "lucide-react";

export default function HowToCalculateMortgagePayment() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How do I convert an annual interest rate to a monthly rate?",
      a: "Divide the annual interest rate by 12. For example, a 6.5% annual rate becomes 6.5% ÷ 12 = 0.54167% per month, or 0.065 ÷ 12 = 0.00542 in decimal form. Always use the decimal form in mortgage formulas. Never multiply by 12 when converting annual to monthly—that would give you the wrong rate."
    },
    {
      q: "What if I don't know my property tax rate?",
      a: "Check your county or municipality's assessor website—most publish property tax records online. You can look up the specific property address to see its assessed value and annual taxes. Alternatively, real estate listings often show estimated taxes. For planning purposes, research typical rates in your area: they range from 0.3% to 2.5% of home value annually depending on location."
    },
    {
      q: "How accurate is the mortgage payment formula?",
      a: "The standard amortization formula is mathematically precise for fixed-rate mortgages. Your calculation will match any accurate mortgage calculator. However, your result might differ slightly from a lender's quote due to: escrow reserve requirements, actual/360 vs. actual/365 day count conventions, timing of first payment, or inclusion of additional fees. The formula gives you the true principal and interest payment."
    },
    {
      q: "Can I calculate this in Excel or Google Sheets?",
      a: "Yes. Use the PMT function: =PMT(rate, nper, pv). For a $300,000 loan at 6.5% for 30 years: =PMT(6.5%/12, 360, -300000) returns $1,896.20. The negative loan amount is required. PMT calculates principal and interest only—add taxes, insurance, PMI, and HOA separately. You can build a complete mortgage calculator spreadsheet with these formulas."
    }
  ];

  const faqs2 = [
    {
      q: "Why is my calculation different from what my lender quoted?",
      a: "Lenders include items your calculation might not: escrow reserves (2-6 months of taxes/insurance held upfront), prepaid interest from closing date to month-end, private mortgage insurance with their specific rate, homeowners association dues, and sometimes additional fees. Your formula calculates the true principal and interest payment plus standard monthly escrow—the lender's closing disclosure shows all actual costs."
    },
    {
      q: "How do I calculate payments for a 15-year vs. 30-year mortgage?",
      a: "Use the same formula but change n (number of payments). For 15 years, n = 15 × 12 = 180 months. The monthly payment will be higher but you'll pay dramatically less interest. For example, $300,000 at 6.25%: 30-year payment is $1,847, 15-year is $2,580. The 15-year loan costs $164,400 less in total interest despite the higher monthly payment."
    },
    {
      q: "What's the difference between simple interest and amortized mortgage interest?",
      a: "Simple interest calculates interest only on the original principal for the entire period. Amortized mortgages use compound interest where interest is calculated monthly on the remaining balance, which decreases with each payment. This is why early mortgage payments are mostly interest (large balance) while later payments are mostly principal (small balance). The amortization formula accounts for this changing balance automatically."
    },
    {
      q: "How do I work backward to calculate what home price I can afford?",
      a: "Start with your maximum comfortable monthly payment. Subtract estimated taxes, insurance, PMI, and HOA to get your available principal and interest budget. Use a mortgage affordability calculator to reverse-calculate the loan amount at your expected rate and term. Add your down payment to that loan amount to find your maximum home price. For example: $2,000 monthly budget - $550 (taxes/insurance/PMI) = $1,450 P&I → approximately $230,000 loan at 6.75% for 30 years → $255,000 home with 10% down."
    }
  ];

  const allFaqs = [...faqs, ...faqs2];

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header Section */}
      <section className="pt-12 pb-8">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          {/* Banner Ad Placeholder */}
          <div className="mx-auto max-w-5xl mb-8">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
                <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
              </div>
            </div>
          </div>

          {/* Article Title */}
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
                How to Calculate Your Monthly Mortgage Payment
              </h1>
            </div>
            <div className="h-px bg-indigo-600 mb-8"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-slate prose-lg max-w-none">
            
            {/* Introduction */}
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Knowing how to calculate your monthly mortgage payment gives you power in home financing decisions. Rather than relying blindly on calculators or quotes, understanding the underlying mathematics helps you verify estimates, compare loan scenarios, and make informed choices about home affordability. The calculation involves straightforward arithmetic once you understand the formula and components.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              This guide walks through every step of calculating your complete monthly housing payment, from determining your loan amount to adding property taxes, insurance, and other costs. You'll learn the fixed-rate mortgage formula, see worked examples with real numbers, and understand why your calculation might differ slightly from a lender's estimate. By the end, you'll be able to calculate any mortgage payment by hand or verify calculator results with confidence.
            </p>

            {/* Step 1: Calculate Loan Amount */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 1: Calculate Your Loan Amount
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Your mortgage calculation begins with determining how much you need to borrow. This is simply your home purchase price minus your down payment. The larger your down payment, the smaller your loan—which means lower monthly payments and potentially no private mortgage insurance requirement.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Formula:</strong> Loan Amount = Home Price - Down Payment
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> Consider a $400,000 home purchase with different down payment scenarios. With a 5% down payment ($20,000), your loan amount is $380,000. With 10% down ($40,000), you borrow $340,000. With 15% down ($60,000), the loan is $340,000. With the standard 20% down ($80,000), you need $320,000. That 15% difference in down payment (from 5% to 20%) reduces your loan by $60,000—which lowers your monthly payment by approximately $390 at a 6.75% interest rate over 30 years, and eliminates PMI entirely.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Why Down Payment Percentage Matters
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Beyond reducing your loan amount, your down payment percentage determines whether you'll pay PMI. With less than 20% down, lenders typically require private mortgage insurance to protect their risk. This adds 0.3% to 1.5% of your loan amount annually to your monthly payment. A down payment mortgage calculator can show you the complete impact, but the manual calculation is straightforward: multiply your loan amount by the PMI percentage, divide by 12 for the monthly cost.
            </p>

            {/* Step 2: Calculate Principal and Interest */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 2: Calculate Monthly Principal and Interest
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              The monthly principal and interest payment uses the standard mortgage amortization formula. This formula ensures your fixed payment covers both interest charges and gradual principal reduction, fully repaying the loan by the end of the term. While it looks complex, breaking it down step-by-step makes it manageable.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              The Mortgage Payment Formula
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>M = P × [r(1+r)^n] / [(1+r)^n - 1]</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Where:
            </p>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-6 ml-4">
              <li><strong>M</strong> = Monthly payment (what we're calculating)</li>
              <li><strong>P</strong> = Principal loan amount (from Step 1)</li>
              <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12, in decimal form)</li>
              <li><strong>n</strong> = Number of monthly payments (loan term in years × 12)</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              This formula accounts for compound interest—each month, interest is calculated on the remaining balance, which decreases as you pay down principal. Early payments are mostly interest because the balance is large. Later payments are mostly principal because the balance is small. The formula calculates the exact payment that fully amortizes the loan over the specified term.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Step-by-Step Calculation Example
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Hypothetical Scenario:</strong> Calculate the monthly payment for a $320,000 loan at 6.75% annual interest for 30 years.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 2a: Convert annual interest rate to monthly rate</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              r = 6.75% ÷ 12 = 0.5625% per month = 0.005625 in decimal form
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 2b: Calculate number of monthly payments</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              n = 30 years × 12 months = 360 payments
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 2c: Calculate (1+r)^n</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              (1 + 0.005625)^360 = 7.4522
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 2d: Calculate the numerator [r(1+r)^n]</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              0.005625 × 7.4522 = 0.041919
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 2e: Calculate the denominator [(1+r)^n - 1]</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              7.4522 - 1 = 6.4522
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 2f: Divide numerator by denominator</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              0.041919 ÷ 6.4522 = 0.006497
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 2g: Multiply by principal loan amount</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              $320,000 × 0.006497 = <strong>$2,079.04 per month</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              This $2,079.04 is your monthly principal and interest payment. Over 30 years, you'll make 360 payments totaling $748,454—the original $320,000 principal plus $428,454 in interest. This demonstrates why interest rate and loan term dramatically affect your total cost.
            </p>

            {/* Step 3: Add Property Taxes */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 3: Add Monthly Property Taxes
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Property taxes fund local government services and vary significantly by location. Most lenders require you to pay property taxes through an escrow account—they collect 1/12 of your annual tax bill with each mortgage payment, then pay the taxes on your behalf when due.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Formula:</strong> Monthly Property Tax = (Home Value × Annual Tax Rate) ÷ 12
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Property tax rates typically range from 0.3% to 2.5% of home value annually, depending on your state, province, or municipality. You can find your specific tax rate on county assessor websites or property tax records.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Regional Examples</strong> for a $400,000 home:
            </p>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-6 ml-4">
              <li><strong>Ontario:</strong> 0.8% rate = $3,200 annually ÷ 12 = $267 monthly</li>
              <li><strong>BC (British Columbia):</strong> 0.6% rate = $2,400 annually ÷ 12 = $200 monthly</li>
              <li><strong>Alberta:</strong> 1.0% rate = $4,000 annually ÷ 12 = $333 monthly</li>
              <li><strong>California:</strong> 1.1% rate = $4,400 annually ÷ 12 = $367 monthly</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              For our ongoing example with a $400,000 home in a location with a 1.2% property tax rate: $400,000 × 0.012 = $4,800 annually, or <strong>$400 per month</strong>. A mortgage payment calculator with taxes and insurance will include this component automatically, but now you understand where that number comes from.
            </p>

            {/* Step 4: Add Homeowners Insurance */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 4: Add Monthly Homeowners Insurance
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Lenders require homeowners insurance to protect the property securing your loan. Insurance costs depend on home value, location, coverage level, deductible, and local risks like floods, earthquakes, or hurricanes. Like property taxes, insurance premiums are typically paid through escrow.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Formula:</strong> Monthly Insurance = Annual Premium ÷ 12
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Hypothetical Example:</strong> For a $400,000 home, annual insurance might cost $1,200 in a low-risk area ($100 monthly), $1,800 in a moderate-risk area ($150 monthly), or $2,400 in a high-risk coastal region ($200 monthly). In Canada, premiums typically range from $900-1,800 annually depending on province and coverage. In the UK, building insurance commonly costs £300-600 annually for standard properties.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              For our example, assume annual insurance of $1,680: $1,680 ÷ 12 = <strong>$140 per month</strong>. Get actual insurance quotes for precise numbers—costs vary significantly based on your specific home and desired coverage.
            </p>

            {/* Step 5: Calculate PMI */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 5: Calculate Private Mortgage Insurance (If Applicable)
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              If your down payment is less than 20% of the home price, lenders typically require PMI. This insurance protects the lender if you default. PMI rates range from 0.3% to 1.5% of your loan amount annually, based on your down payment size and credit score. Unlike property taxes and homeowners insurance, PMI eventually cancels once you reach 20% equity through payments and home appreciation.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Formula:</strong> Monthly PMI = (Loan Amount × Annual PMI Rate) ÷ 12
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> Our $400,000 home with 20% down ($80,000) results in a $320,000 loan—no PMI required. But if you put down only 15% ($60,000), you'd borrow $340,000 and likely pay 0.6% PMI: $340,000 × 0.006 = $2,040 annually ÷ 12 = <strong>$170 per month</strong>. With just 10% down ($40,000) and a $360,000 loan at 0.8% PMI, you'd pay $2,880 annually or $240 monthly. This shows why saving for a 20% down payment eliminates a significant monthly expense.
            </p>

            {/* Step 6: Add HOA Fees */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 6: Add HOA Fees (If Applicable)
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Homeowners association fees apply to condominiums, townhouses, and planned communities. These fees cover maintenance of common areas, amenities, and shared services. HOA fees typically range from $100 to $600+ monthly depending on what's included—some cover only basic landscaping while others include extensive amenities, utilities, and building maintenance. HOA fees aren't part of your mortgage but are part of your total monthly housing cost. Check the property listing or HOA documents for exact amounts.
            </p>

            {/* Complete Calculation */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Putting It All Together: Complete Monthly Payment Calculation
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Now we'll combine all components to calculate the total monthly housing payment. This complete calculation shows what you'll actually pay each month—not just the principal and interest that a simple mortgage payment calculator displays.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Hypothetical Complete Example:</strong>
            </p>

            <ul className="list-disc list-inside space-y-1 text-base text-slate-600 mb-4 ml-4">
              <li>Home Price: $400,000</li>
              <li>Down Payment: 20% ($80,000)</li>
              <li>Loan Amount: $320,000</li>
              <li>Interest Rate: 6.75% annual</li>
              <li>Loan Term: 30 years</li>
              <li>Property Tax Rate: 1.2% annually</li>
              <li>Annual Insurance: $1,680</li>
              <li>PMI: None (20% down)</li>
              <li>HOA Fees: $200 monthly</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step-by-Step Total Calculation:</strong>
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <p className="text-base text-slate-700 mb-3">
                <strong>Principal & Interest</strong> (from Step 2 calculation):<br/>
                $320,000 loan at 6.75% for 30 years = <strong>$2,079.04</strong>
              </p>
              <p className="text-base text-slate-700 mb-3">
                <strong>Property Taxes</strong> (Step 3):<br/>
                $400,000 × 1.2% ÷ 12 = <strong>$400.00</strong>
              </p>
              <p className="text-base text-slate-700 mb-3">
                <strong>Homeowners Insurance</strong> (Step 4):<br/>
                $1,680 annual ÷ 12 = <strong>$140.00</strong>
              </p>
              <p className="text-base text-slate-700 mb-3">
                <strong>PMI</strong> (Step 5):<br/>
                Not applicable (20% down) = <strong>$0.00</strong>
              </p>
              <p className="text-base text-slate-700 mb-4">
                <strong>HOA Fees</strong> (Step 6):<br/>
                Monthly fee = <strong>$200.00</strong>
              </p>
              <div className="border-t-2 border-slate-300 pt-4">
                <p className="text-lg font-bold text-slate-900">
                  <strong>Total Monthly Housing Payment: $2,819.04</strong>
                </p>
              </div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              This $2,819.04 represents your complete monthly housing cost. Note that the principal and interest ($2,079.04) is only 74% of your total payment. The remaining 26% covers property taxes, insurance, and HOA fees. This is why using a mortgage payment calculator with taxes and insurance gives you a more realistic affordability picture than looking at principal and interest alone.
            </p>

            {/* Extra Payments */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Calculating the Impact of Extra Mortgage Payments
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Making extra principal payments reduces your loan balance faster, which decreases future interest charges and shortens your loan term. While a mortgage payment calculator with extra payments provides precise results, you can estimate the impact manually.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>How Extra Payments Work:</strong> Each extra dollar you pay toward principal immediately reduces your loan balance. Since interest is calculated monthly on the remaining balance, lowering that balance saves interest on every subsequent payment. The earlier you make extra payments, the more you save because you're reducing the principal that future interest calculations are based upon.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical Example:</strong> On our $320,000 loan at 6.75% for 30 years with a $2,079.04 monthly payment, adding $200 extra toward principal each month would reduce the loan term by approximately 6.5 years (78 months) and save roughly $90,000 in interest over the life of the loan. Even a modest $100 extra monthly cuts about 3.5 years and saves $50,000 in interest. For precise calculations including the exact payoff date and interest savings, use a dedicated extra payment calculator that can track the changing balance month by month.
            </p>

            {/* Verifying Calculator Results */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              How to Verify a Mortgage Calculator Result
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Now that you understand the calculation process, you can verify whether any mortgage calculator is accurate. Use your manual calculation as a baseline to check calculator results.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              What to Verify
            </h3>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-6 ml-4">
              <li><strong>Principal & Interest:</strong> Input your loan amount, interest rate, and term into the calculator. The P&I result should match your manual calculation within a few cents (small rounding differences are normal).</li>
              <li><strong>Property Taxes:</strong> Verify the calculator uses the correct tax rate for your location, or allows you to input the actual annual amount.</li>
              <li><strong>Insurance:</strong> Check whether the calculator uses a default estimate or lets you enter your actual insurance premium.</li>
              <li><strong>PMI:</strong> Confirm the calculator applies PMI correctly based on your down payment percentage, and uses an appropriate rate for your scenario.</li>
              <li><strong>Total Payment:</strong> The sum of all components should equal the total monthly payment displayed.</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              A mortgage payment calculator comparison is useful because different calculators have different default assumptions. One might assume 1.2% property tax while another uses your state average. Always verify what assumptions the calculator makes and adjust inputs to match your specific situation. When comparing loan options, use the same calculator with consistent assumptions to ensure accurate comparisons.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Why Your Calculation Might Differ From a Lender's Estimate
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Your manual calculation or online calculator result may differ from what your lender quotes. Common reasons include:
            </p>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-6 ml-4">
              <li><strong>Escrow Reserves:</strong> Lenders collect 2-6 months of property taxes and insurance upfront at closing to establish your escrow account. This doesn't affect your monthly payment but increases your closing costs.</li>
              <li><strong>Prepaid Interest:</strong> You pay interest from your closing date to the end of that month, which varies based on closing timing.</li>
              <li><strong>Lender-Specific PMI Rates:</strong> Your actual PMI rate depends on your credit score, down payment, and lender's pricing—it may differ from standard estimates.</li>
              <li><strong>Day Count Conventions:</strong> Some lenders use actual/360 instead of actual/365 calculations, causing slight differences.</li>
              <li><strong>Additional Fees:</strong> Some quotes include mortgage insurance, flood insurance, or other items not in basic calculators.</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Your calculation gives you the true principal and interest payment plus standard monthly escrow costs. A lender's loan estimate or closing disclosure shows all actual costs based on your specific loan terms, property, and closing date. Use your calculation for planning and comparison; use the lender's disclosure for final budgeting.
            </p>

            {/* Conclusion */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Understanding Empowers Better Decisions
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Calculating your monthly mortgage payment by hand demystifies the home financing process. You now understand how each component—loan amount, interest rate, term, taxes, insurance, and PMI—affects your monthly cost. This knowledge helps you evaluate different loan scenarios, verify calculator results, and make informed decisions about home affordability.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              While online calculators save time for routine calculations, knowing the underlying mathematics gives you confidence and control. You can quickly estimate payments for properties you're considering, understand why one loan costs more than another, and spot errors in calculations or quotes. For complex scenarios like adjustable-rate mortgages or detailed extra payment analysis, specialized calculators remain valuable—but you'll use them with understanding rather than blind trust. Whether you calculate manually or use a mortgage affordability calculator to determine your maximum home price, the principles remain the same: understand the numbers, verify the assumptions, and make informed financial decisions.
            </p>

            </div>
          </div>
        </div>
      </article>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {allFaqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-slate-900 pr-8">{faq.q}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad Placeholder */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
              <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
