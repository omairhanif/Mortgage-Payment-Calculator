"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

export default function BalloonMortgageCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = Circle;
  const title = "Balloon Mortgage Calculator";
  const description = [
    "Calculate payments and balloon amounts for short-term mortgages where you make regular payments for a fixed period, then pay off the remaining balance in one large final payment.",
    "Understand how balloon mortgages work, evaluate whether you can afford or refinance the balloon payment, and compare costs versus traditional fully-amortizing mortgages."
  ];
  const howItWorks = [
    "This calculator models balloon mortgages, where you make regular monthly payments based on a longer amortization schedule (like 30 years) but the loan comes due after a much shorter period (typically 5-7 years), requiring you to pay off the remaining balance in full.",
    "Enter your purchase price, down payment, interest rate, balloon term, and amortization period. The calculator shows your monthly payment, total paid before the balloon, and the large final balloon payment due.",
    "Results help you assess whether you can refinance or pay the balloon when due, compare costs versus traditional loans, and understand the risks of balloon structures. These loans suit borrowers with clear exit strategies but carry significant risk if you can't refinance or sell."
  ];
  const faqs = [
    {
      q: "What is a balloon mortgage payment example?",
      a: "A balloon mortgage payment example: you borrow $300,000 at 6.5% with a 7-year balloon and 30-year amortization. Your monthly payment is $1,896 (principal + interest), same as a traditional 30-year mortgage. After making 84 monthly payments ($159,264 total), you still owe approximately $275,000 as the balloon payment in year 7. At that point, you must: (1) refinance the $275,000 at current rates; (2) sell the property; or (3) pay the full balloon amount in cash. If you refinance to a traditional 15-year mortgage at 7%, your new payment jumps to $2,474/month. Use a balloon payment calculator with amortization schedule to see your exact remaining balance at any point."
    },
    {
      q: "How to calculate balloon payment on a mortgage?",
      a: "To calculate a balloon payment: (1) Determine monthly payment using full amortization period (e.g., 30 years); (2) Calculate how many payments you'll make during the balloon term (e.g., 5 years = 60 payments); (3) Compute remaining principal after those payments using an amortization schedule. Formula: Remaining Balance = Principal × [(1 + r)^n - (1 + r)^p] / [(1 + r)^n - 1], where r = monthly interest rate, n = total payments (360 for 30 years), p = payments made (60 for 5 years). Example: $250,000 at 6% over 30 years with 5-year balloon: monthly payment = $1,499; after 60 payments, balloon = ~$233,139. Use a free balloon mortgage calculator for accurate results."
    },
    {
      q: "Are balloon mortgages a good idea?",
      a: "Balloon mortgages are good for specific situations but risky for traditional homebuyers. Good if: you're absolutely selling within balloon period (job relocation, planned upgrade), you're a real estate investor flipping property, you expect large cash inflow (inheritance, business sale, stock vesting), or rates are high and you're confident you can refinance at lower rates soon. Risky if: you plan to stay long-term, can't afford refinancing risk, have uncertain income/credit, or lack backup refinancing options. The 2008 crisis showed many couldn't refinance when home values dropped. Most financial advisors recommend traditional fixed-rate mortgages for primary residences. Only choose balloon mortgages with a concrete, realistic exit strategy."
    },
    {
      q: "What happens if I can't pay my balloon payment?",
      a: "If you can't pay your balloon payment, you have limited options—all with serious consequences: (1) Refinance—but requires qualifying with sufficient credit (usually 620+), income, and equity (20%+); if property value dropped or your finances weakened, you may not qualify; (2) Sell the property—must sell quickly, potentially at unfavorable prices; if you owe more than current value, you'll need cash to cover difference; (3) Negotiate with lender—some may offer modification or extension, but not guaranteed; (4) Default and foreclosure—if you can't refinance or sell, lender forecloses on the property, destroying your credit for 7+ years. Always have a backup plan before signing a balloon mortgage. Check refinancing requirements well before balloon due date."
    },
    {
      q: "How much is the balloon payment on a 5-year mortgage?",
      a: "On a 5-year balloon mortgage with 30-year amortization, you'll owe approximately 92-95% of the original loan amount as the balloon payment, depending on interest rate. Examples: $200,000 at 6% = ~$186,108 balloon; $300,000 at 6.5% = ~$281,000 balloon; $400,000 at 7% = ~$377,300 balloon. After 5 years (60 monthly payments), you've paid mostly interest and very little principal—that's why the balloon is so large. On a $300,000 loan at 6.5%, your 60 payments of $1,896 total $113,760, but only $19,000 goes to principal while $94,760 goes to interest. Use a balloon mortgage calculator with amortization schedule to see your specific balloon amount."
    },
    {
      q: "Can you pay off a balloon mortgage early?",
      a: "Yes, you can pay off a balloon mortgage early, but check your loan documents for prepayment penalties. Most residential balloon mortgages allow early payoff without penalties, but some charge 1-3% of the remaining balance if you pay off within the first 3-5 years. Benefits of early payoff: avoid refinancing risk, save on interest costs, eliminate balloon payment stress, own home free and clear. You can pay extra toward principal monthly, make lump sum payments, or refinance to a traditional mortgage before balloon due. Making extra principal payments throughout the loan term significantly reduces your eventual balloon amount. Always verify prepayment terms before committing to a balloon mortgage."
    },
    {
      q: "Balloon mortgage vs traditional mortgage—which is better?",
      a: "Traditional mortgages are better for 90% of homebuyers due to predictability and full amortization. Traditional (30-year fixed) advantages: fully paid off at term end (no balloon shock), predictable payments for 30 years, no refinancing risk, easier to qualify for, better for long-term homeowners. Balloon mortgage advantages: potentially lower initial rates (0.25-0.75% less), lower monthly payments during balloon period, good for short-term ownership (5-7 years), suits real estate investors/flippers. Example on $350,000: traditional at 7% = $2,329/month for 30 years, owns home fully; balloon at 6.5% = $2,212/month for 7 years, then $320,000 balloon due. Choose traditional for primary residence and long-term ownership; choose balloon only with concrete exit strategy and tolerance for refinancing risk."
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
      <div className="mb-8">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold text-indigo-600 sm:text-4xl">{title}</h1>
          </div>
          <div className="mb-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
          <div className="space-y-3 text-slate-600">
            <p className="text-base leading-relaxed sm:text-lg">{description[0]}</p>
            <p className="text-base leading-relaxed sm:text-lg">{description[1]}</p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-12">
        <MortgageCalculator category="arm" forcedSubcalculator="balloon" />
      </div>

      {/* How It Works Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">How It Works</h2>
          <div className="space-y-6">
            {howItWorks.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Article */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <article className="mx-auto max-w-3xl prose prose-slate prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:text-slate-900 prose-h2:mb-6 prose-h2:mt-10 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-slate-900 prose-strong:font-semibold prose-ul:text-slate-600 prose-li:mb-2">
            <div className="mb-8">
              <h2 className="!mt-0">Balloon Mortgages: How Payments and Balloon Amounts Are Calculated</h2>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Understanding Balloon Mortgages</h3>

            <p>
              A balloon mortgage is a loan structured with regular monthly payments calculated as if it will be repaid over a long period—typically 15, 20, or 30 years—but with the full remaining balance coming due much earlier, usually after 5, 7, or 10 years. This creates a large lump-sum payment at the end of the balloon term, hence the name &quot;balloon payment.&quot; The critical distinction in a balloon mortgage is between the <strong>amortization period</strong> (how long the payments are calculated to last) and the <strong>balloon due date</strong> (when you must pay off the entire remaining balance).
            </p>

            <p>
              For example, a mortgage might have a 30-year amortization schedule but a 7-year balloon due date. Your monthly payments are calculated as if you're repaying the loan over 30 years, keeping them relatively affordable. However, after making 84 monthly payments (7 years), the entire remaining principal balance becomes due immediately. At that point, you must either pay the full balance in cash, refinance into a new loan, or sell the property.
            </p>

            <p>
              Balloon mortgages are common in seller financing arrangements where property owners carry the mortgage for buyers, commercial real estate loans, and situations where borrowers expect significant income increases or plan to sell before the balloon date. They offer lower monthly payments compared to loans fully amortized over the balloon period, but require careful planning for the eventual balloon payment.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">How Balloon Mortgage Payments Are Calculated</h3>

            <p>
              Monthly payments on a balloon mortgage use the same formula as traditional fully-amortizing mortgages. The payment is calculated based on the amortization period, not the balloon due date. The standard mortgage payment formula is:
            </p>

            <div className="my-6 text-center">
              <p className="font-bold text-slate-900 text-lg">
                Monthly Payment = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> - 1]
              </p>
            </div>

            <p className="text-sm text-slate-600">
              Where: <strong>P</strong> = principal loan amount, <strong>r</strong> = monthly interest rate (annual rate ÷ 12), <strong>n</strong> = total number of payments in the amortization period
            </p>

            <p>
              If you have a $300,000 loan at 6.5% interest with a 30-year amortization period, your monthly payment is calculated as if you'll make 360 payments (30 years × 12 months). Using the formula:
            </p>

            <ul>
              <li>Principal (P) = $300,000</li>
              <li>Monthly rate (r) = 6.5% ÷ 12 = 0.00541667</li>
              <li>Number of payments (n) = 360</li>
              <li>Monthly payment = <strong>$1,896</strong></li>
            </ul>


            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">How to Calculate the Balloon Payment Amount</h3>

            <p>
              The balloon payment is the remaining principal balance at the balloon due date. To calculate this, you must track how much principal has been paid down through the monthly payments up to that point. This calculation is more complex because each monthly payment consists of both interest and principal, with the proportion changing each month.
            </p>

            <p>
              A balloon mortgage calculator with amortization schedule shows you exactly how much principal remains at any point. The general process works like this:
            </p>

            <ul>
              <li><strong>Month 1</strong>: Calculate interest on full principal, subtract from payment to get principal portion, reduce balance</li>
              <li><strong>Month 2</strong>: Calculate interest on new (lower) principal, subtract from payment, reduce balance again</li>
              <li><strong>Continue</strong>: Repeat for each month until the balloon due date</li>
              <li><strong>Balloon payment</strong>: The remaining balance at the balloon due date</li>
            </ul>

            <p>
              For example, on a $300,000 loan at 6.5% with a $1,896 monthly payment:
            </p>

            <ul>
              <li><strong>Month 1</strong>: Interest = $300,000 × 0.00541667 = $1,625; Principal = $1,896 - $1,625 = $271</li>
              <li><strong>Month 2</strong>: Balance = $299,729; Interest = $299,729 × 0.00541667 = $1,624; Principal = $272</li>
              <li>Principal portion gradually increases each month as interest decreases</li>
            </ul>


            <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 my-6">
              <h4 className="font-serif font-bold text-lg text-slate-900 mb-4">Hypothetical Example: How Does a 7-Year Balloon Mortgage Work?</h4>
              
              <p className="text-slate-700 mb-2">Loan Details:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Loan amount: $300,000</li>
                <li>Interest rate: 6.5%</li>
                <li>Amortization period: 30 years</li>
                <li>Balloon due date: 7 years (84 payments)</li>
              </ul>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Monthly Payment Calculation:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Calculated as if loan amortizes over 30 years (360 payments)</li>
                  <li>Monthly payment = <strong>$1,896</strong></li>
                  <li>This payment stays the same for all 84 months</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">After 7 Years (84 Payments):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Total paid = $1,896 × 84 = <strong>$159,264</strong></li>
                  <li>Interest paid during 7 years = ~$136,200</li>
                  <li>Principal paid down during 7 years = ~$23,100</li>
                  <li>Remaining principal balance = <strong>$276,900</strong></li>
                  <li><strong>Balloon payment due: $276,900</strong></li>
                </ul>
              </div>

              <p className="text-slate-700 mb-2">Key Insight:</p>
              <p className="text-slate-700">
                After paying $159,264 over 7 years, you still owe 92.3% of the original loan amount. This demonstrates why balloon mortgages require solid exit strategies—the balloon payment is nearly as large as the original loan.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Planning for the Balloon Payment</h3>

            <p>
              The critical risk in balloon mortgages is that the balloon payment comes due regardless of your financial situation, property value, or ability to refinance. When the balloon date arrives, you must pay the full amount immediately. Your options typically include refinancing the balance into a new mortgage, selling the property to pay off the loan, or paying the balloon in cash from savings or other sources.
            </p>

            <p>
              Refinancing success depends on factors outside your control: your credit score at the balloon date, prevailing interest rates, property value (which must support the loan amount), employment stability, and lender willingness to refinance. If any of these factors deteriorate during the balloon period, refinancing may not be possible or may only be available at unfavorable rates.
            </p>

            <p>
              Balloon mortgages work best when you have a specific, reliable plan for handling the balloon payment. Real estate investors planning to sell or refinance after property appreciation, buyers expecting substantial income increases that will support a larger loan, or professionals in career transitions with clear earnings trajectories can use balloon structures strategically. However, if your balloon payment plan depends on assumptions about future property values, interest rates, or income growth, you're taking significant risk.
            </p>

            <p>
              Before accepting a balloon mortgage, calculate whether you could afford the fully-amortized payment if you had to refinance at current rates, verify you'll have adequate equity to refinance, confirm you have a realistic exit strategy, and ensure you could handle the balloon payment even if your circumstances change. Balloon mortgages are powerful financial tools in the right situations, but they require careful planning and realistic assessment of future scenarios.
            </p>

          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
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
