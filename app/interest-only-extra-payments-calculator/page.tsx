"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, TrendingUp } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

export default function InterestOnlyExtraPaymentsCalculatorPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = TrendingUp;
  const title = "Interest-Only with Extra Payment Calculator";
  const description = [
    "Explore how making voluntary principal payments during an interest-only mortgage's initial period reduces your balance, lowers future payments, and builds equity earlier.",
    "Calculate the impact of additional payments on your loan balance, payment shock after the interest-only period, and total interest costs over the life of the loan."
  ];
  const howItWorks = [
    "This calculator demonstrates how extra principal payments during the interest-only period affect your loan. While the minimum payment covers only interest, any additional payment reduces your principal balance and creates compounding savings.",
    "Enter your loan details, interest-only period, and planned extra payments. The calculator shows how additional payments reduce your balance, lower the payment when full amortization begins, and decrease total interest costs.",
    "Results compare the standard interest-only scenario against your extra-payment strategy, showing balance reduction, payment savings when amortization starts, and interest saved over the loan term. This helps evaluate whether extra payments justify choosing an interest-only structure."
  ];
  const faqs = [
    {
      q: "Why make extra payments on an interest-only loan?",
      a: "Extra payments reduce your principal balance, building equity and lowering your eventual fully-amortizing payment. If you plan to keep the loan through the amortization period, reducing the balance beforehand decreases payment shock and total interest costs."
    },
    {
      q: "How much should I pay extra each month?",
      a: "Pay what you can afford consistently. Even small amounts like $100-200/month compound over years. Calculate what makes your post-interest-only payment comfortable, then work backwards to determine the extra payment needed to reach that target balance."
    },
    {
      q: "Can I skip extra payments if needed?",
      a: "Yes, extra payments are voluntary. Your required payment remains the interest-only amount. You can increase, decrease, or skip extra payments without penalty, providing flexibility that traditional amortizing loans don't offer."
    },
    {
      q: "Is this better than a traditional mortgage?",
      a: "Not necessarily. If you can afford regular extra payments, a traditional mortgage often provides better rates and forced discipline. Interest-only with extras works best when you need payment flexibility but want the option to pay down principal when cash flow allows."
    },
    {
      q: "Do extra payments during interest-only affect my taxes?",
      a: "Extra principal payments don't affect your mortgage interest deduction - you still deduct the interest you actually pay. Reducing your balance lowers future interest, which reduces future deductions, but this is offset by lower total interest costs."
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
        <MortgageCalculator category="arm" forcedSubcalculator="interest-only-extra" />
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
              <h2 className="!mt-0">Interest-Only Loans with Extra Payments: How They Work and How to Calculate Savings</h2>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Understanding Interest-Only Payments and Principal Reduction</h3>

            <p>
              An interest-only loan requires you to pay only the interest that accrues each month during an initial period—typically five to ten years—without reducing your principal balance. Your monthly payment covers the cost of borrowing money, but none of it goes toward paying down the amount you owe. If you borrow $300,000 at 6%, you pay $1,500 monthly in interest, and after five years of perfect payments, you still owe $300,000.
            </p>

            <p>
              This structure creates a straightforward question: <strong>Can you make extra payments on an interest-only mortgage?</strong> The answer depends entirely on your loan agreement. Many interest-only mortgages and HELOCs allow voluntary principal payments during the interest-only period, but some impose prepayment penalties, minimum extra payment thresholds, or restrictions on how frequently you can make additional payments. Before assuming you can pay extra, review your loan documents or contact your lender to confirm the terms governing voluntary principal reduction.
            </p>

            <p>
              When your loan does permit extra payments, those additional funds reduce your principal balance immediately. That reduction has a cascading effect: lower principal means less interest accrues in future months, which means more of your regular payment (once amortization begins) goes toward principal rather than interest. This creates genuine interest savings over the life of the loan, shortens your payoff timeline, and reduces the payment shock when the interest-only period ends.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">How to Calculate Interest-Only Payments</h3>

            <p>
              The calculation for an interest-only payment is deliberately simple. You're paying only the interest that accrues on your outstanding balance each month, with no principal component. The formula is:
            </p>

            <div className="my-6 text-center">
              <p className="font-bold text-slate-900 text-lg">
                Monthly Interest-Only Payment = Loan Amount × (Annual Interest Rate ÷ 12)
              </p>
            </div>

            <p>
              If you borrow $280,000 at 7%, your interest-only payment is:
            </p>

            <p className="font-semibold text-slate-900">
              $280,000 × (0.07 ÷ 12) = $280,000 × 0.005833 = <strong>$1,633 per month</strong>
            </p>


            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">How Extra Payments Reduce Your Balance</h3>

            <p>
              When you make an extra payment during an interest-only period, that entire extra amount reduces your principal immediately. Here's how a typical month works when you make an extra payment:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li><strong>Required interest payment</strong>: $1,633 (covers the cost of borrowing for that month)</li>
              <li><strong>Extra principal payment</strong>: $300 (voluntary, reduces your balance)</li>
              <li><strong>Total you pay</strong>: $1,933</li>
              <li><strong>New principal balance</strong>: $279,700 (down from $280,000)</li>
            </ul>

            <p>
              The next month, your interest calculation uses the new, lower balance:
            </p>

            <p className="font-semibold text-slate-900">
              $279,700 × 0.005833 = <strong>$1,631.25</strong> (slightly less than before)
            </p>

            <p>
              Your required interest payment decreases because you're paying interest on a smaller balance. This is the mechanism that creates savings: every dollar of principal you eliminate removes future interest charges on that dollar for every remaining month of the loan.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Calculating Interest Saved by Making Extra Payments</h3>

            <p>
              Understanding how to calculate interest saved by making extra payments requires comparing two scenarios: one where you make no extra payments and one where you consistently pay additional principal.
            </p>

            <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 my-6">
              <h4 className="font-serif font-bold text-lg text-slate-900 mb-4">Hypothetical Scenario: $280,000 Loan at 7% Interest, 30-Year Term, 10-Year Interest-Only Period</h4>
              
              <p className="text-slate-700 mb-2">Scenario A: No Extra Payments</p>
              
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Interest-Only Period (Years 1–10):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Monthly payment: $1,633</li>
                  <li>Total paid over 10 years: $195,960</li>
                  <li>Principal balance after 10 years: $280,000 (unchanged)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold text-slate-900 mb-2">Amortization Period (Years 11–30):</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>New monthly payment: $1,862 (principal + interest on $280,000 over 20 years)</li>
                  <li>Total paid over 20 years: $446,880</li>
                  <li>Total interest over 20 years: $166,880</li>
                </ul>
              </div>

              <p className="text-slate-700">
                Total Interest Over 30 Years: $195,960 (IO period) + $166,880 (amortization) = <strong>$362,840</strong>
              </p>
            </div>

            <p>
              By making consistent extra payments during the interest-only period, you reduce your total interest paid over the life of the loan, lower the payment shock when full amortization begins, and build equity that provides financial flexibility. This calculator helps you model exactly how much you'll save based on your specific loan terms and extra payment amount.
            </p>

            <p>
              Before committing to extra payments, ensure you have adequate emergency savings and aren't sacrificing higher-priority financial goals. Extra mortgage payments provide guaranteed returns equal to your interest rate, but they're illiquid—once paid, you can't access those funds without refinancing or selling. Balance the benefits of principal reduction against maintaining cash reserves for unexpected expenses or investment opportunities.
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
