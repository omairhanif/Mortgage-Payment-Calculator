"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

export default function BalloonMortgageCalculatorPage() {
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
      q: "What is a balloon mortgage?",
      a: "A balloon mortgage is a loan where you make regular payments for a short term (usually 5-7 years) calculated as if you're paying over 30 years, but the entire remaining balance comes due as one large 'balloon' payment at the end of the term. You must pay, refinance, or sell at that point."
    },
    {
      q: "Who should consider a balloon mortgage?",
      a: "Balloon mortgages suit buyers planning to sell within the balloon period, those confident they can refinance, real estate investors flipping properties, or borrowers expecting large cash inflows (inheritance, business sale) before the balloon comes due. They're risky for typical homeowners without exit strategies."
    },
    {
      q: "What happens if I can't pay the balloon?",
      a: "You must refinance or sell the property. If you can't qualify for refinancing (due to credit, income, or equity issues) and can't sell quickly enough, you risk foreclosure. The lender can foreclose if you default on the balloon payment, just like any other loan default."
    },
    {
      q: "Are balloon mortgages cheaper?",
      a: "Not necessarily. While monthly payments may be lower (since you're not fully amortizing), balloon mortgages often carry higher rates due to lender risk. You'll pay less total interest if you sell or refinance early, but you face refinancing costs and rate risk at balloon maturity."
    },
    {
      q: "Can I convert my balloon mortgage to a traditional loan?",
      a: "Only through refinancing, which requires qualifying again with adequate credit, income, and equity. Some balloon mortgages include conversion options, but these aren't standard. Never assume you can refinance - market conditions, property values, and your finances may prevent it."
    }
  ];

  return (
    <>
      {/* Banner Ad */}
      <div className="mb-6 flex justify-center">
        <div className="rounded bg-slate-100 px-4 py-6 text-center text-sm text-slate-500">
          Advertisement (728×90)
        </div>
      </div>

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
