"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
    <path d="M12 2v7" />
    <path d="M8 9h8" />
  </svg>
);

const faqs = [
  {
    q: "How does biweekly payment save money?",
    a: "By paying every two weeks instead of monthly, you make 26 half-payments (13 full payments) per year instead of 12. This extra payment per year reduces principal faster, saving thousands in interest."
  },
  {
    q: "Can I set up biweekly payments myself?",
    a: "Yes! You can replicate the benefits by making one extra monthly payment per year, or by paying 1/12 extra each month. This avoids fees some lenders charge for biweekly programs."
  },
  {
    q: "Are there fees for biweekly payment programs?",
    a: "Some lenders charge $200-400 setup fees plus $2.50-5 per transaction. You can achieve the same results without fees by making extra payments yourself."
  }
];

export default function BiweeklyPaymentCalculatorPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const descriptions = [
    "Calculate how switching to biweekly mortgage payments can save you thousands in interest and help you pay off your mortgage years earlier.",
    "A biweekly payment calculator shows the powerful impact of making half your monthly payment every two weeks instead of one full payment per month."
  ];

  const howItWorks = [
    "Enter your current mortgage amount, interest rate, and loan term",
    "See the comparison between monthly and biweekly payment schedules",
    "View your potential savings and reduced payoff timeline"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-white pb-12 pt-8">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
              <Icon />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                Biweekly Payment Calculator
              </h1>
              <p className="text-sm text-slate-600 sm:text-base mt-1">
                Accelerate mortgage payoff with biweekly payment strategy
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {descriptions.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <MortgageCalculator 
            category="savings" 
            forcedSubcalculator="biweekly" 
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            How It Works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Educational Article */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <article className="mx-auto max-w-4xl">
            <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Understanding Extra Payments: Your Path to Faster Debt Freedom
              </h2>
              
              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                What Are Extra Payments?
              </h3>
              <p className="text-slate-600 mb-4">
                Extra payments are additional amounts you pay toward your loan principal beyond your required monthly payment. These payments directly reduce your loan balance, which means less interest accrues over time and you pay off your loan faster.
              </p>
              
              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                The Power of Extra Payments
              </h3>
              <p className="text-slate-600 mb-4">
                Extra payments have a compound effect on your loan. When you reduce principal early, you save on all the interest that would have accrued on that amount for the remaining loan term. This makes even small extra payments incredibly powerful.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 my-6">
                <h4 className="font-serif text-lg font-semibold text-slate-900 mb-3">
                  Example: $300,000 Mortgage at 6% for 30 Years
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Regular payment: $1,799/month → Total interest: $347,515</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Adding $200/month extra → Total interest: $251,406 (Save $96,109!)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Loan paid off in 22.5 years instead of 30 (7.5 years sooner!)</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                Strategies for Making Extra Payments
              </h3>
              <p className="text-slate-600 mb-4">
                <strong>Monthly Extra Payments:</strong> Add a fixed amount to each payment. Even $50-100 extra per month makes a significant difference over time.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Annual Lump Sum:</strong> Use tax refunds, bonuses, or other windfalls to make one large payment per year.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Biweekly Payments:</strong> Pay half your monthly payment every two weeks. You'll make 26 half-payments (13 full payments) per year instead of 12, creating one extra payment annually.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-8 text-base font-semibold text-slate-900 sm:text-lg">
                    {faq.q}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-slate-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="mb-12 flex justify-center">
        <div className="rounded bg-slate-100 px-4 py-6 text-center text-sm text-slate-500">
          Advertisement (728×90)
        </div>
      </div>
    </>
  );
}
