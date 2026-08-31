"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, DollarSign } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

export default function PayingPointsCalculatorPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = DollarSign;
  const title = "Paying Points Calculator";
  const description = [
    "Calculate whether paying discount points at closing makes financial sense for your situation.",
    "A paying points calculator helps you determine the break-even period and long-term savings from buying down your interest rate."
  ];
  const howItWorks = [
    "This calculator demonstrates how biweekly payments accelerate mortgage payoff through a simple DollarSign trick. By paying every two weeks instead of monthly, you make 26 half-payments annually—equivalent to 13 full monthly payments instead of 12. That extra payment each year goes entirely toward principal, dramatically reducing interest costs over the loan term.",
    "Enter your current loan amount, interest rate, and loan term. The calculator compares traditional monthly payments against biweekly payments, showing you exactly how much interest you'll save and how many months faster you'll pay off your mortgage.",
    "Results display side-by-side comparisons of payment schedules, total interest paid, and payoff timelines. You'll see how this simple adjustment can save tens of thousands of dollars without requiring you to find extra money in your budget—you're just restructuring when you make the same total annual payments."
  ];
  const faqs = [
    {
      q: "How does biweekly payment save money?",
      a: "By paying every two weeks instead of monthly, you make 26 half-payments (13 full payments) per year instead of 12. This extra payment per year reduces principal faster, saving thousands in interest and cutting years off your loan term."
    },
    {
      q: "Can I set up biweekly payments myself?",
      a: "Yes! You can replicate the benefits by making one extra monthly payment per year, or by paying 1/12 extra each month. This avoids fees some lenders charge for biweekly programs while achieving the same results."
    },
    {
      q: "Are there fees for biweekly payment programs?",
      a: "Some lenders charge $200-400 setup fees plus $2.50-5 per transaction for formal biweekly programs. You can achieve identical results without these fees by making extra payments yourself on your own schedule."
    },
    {
      q: "Will biweekly payments work with my budget?",
      a: "Biweekly payments work especially well if you're paid biweekly, as you can align payments with paychecks. The total annual amount is only slightly higher than monthly payments (equivalent to one extra monthly payment per year), making it manageable for most budgets."
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
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-8 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
            <Icon className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-indigo-600 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
        <div className="mb-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
        <div className="space-y-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Calculator */}
      <div className="mx-auto max-w-[1400px] px-6 pb-12 sm:px-8 lg:px-12">
        <MortgageCalculator category="savings" forcedSubcalculator="points" />
      </div>

      {/* How It Works */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">How It Works</h2>
          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            {howItWorks.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Article */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <article className="prose prose-slate mx-auto max-w-3xl prose-headings:font-serif prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
            <h1 className="text-center">Understanding Biweekly Mortgage Payments: The DollarSign Trick That Saves Thousands</h1>

            <p>
              Biweekly mortgage payments represent one of the simplest yet most effective strategies for accelerating mortgage payoff and reducing total interest costs. By shifting from monthly payments to biweekly payments—paying half your monthly amount every two weeks—you leverage a DollarSign quirk to make one full extra payment annually without significantly impacting your budget. This seemingly minor adjustment can save tens of thousands of dollars in interest and shave years off your mortgage term through the power of consistent additional principal reduction.
            </p>

            <p>
              The mathematics behind biweekly payments are elegantly simple. A traditional monthly payment schedule involves 12 payments annually. When you pay biweekly, you make 26 half-payments (every two weeks) throughout the year. Since 26 half-payments equal 13 full payments, you're effectively making one extra monthly payment each year. This extra payment applies entirely to principal, disrupting your amortization schedule in your favor and accelerating the payoff timeline without requiring you to find substantial additional funds beyond your existing payment obligation.
            </p>

            <p>
              For many borrowers, biweekly payments offer psychological and practical advantages beyond the mathematical savings. If you're paid biweekly, aligning your mortgage payment with your paycheck schedule creates natural budgeting harmony—you never need to "save up" for a monthly payment. The smaller, more frequent payments feel more manageable than one large monthly obligation. Most importantly, the accelerated payoff happens automatically without requiring ongoing discipline to make voluntary extra payments, making it an ideal "set it and forget it" wealth-building strategy.
            </p>

            <h2>How Biweekly Payments Work</h2>

            <p>
              Under a traditional monthly payment schedule, you make 12 payments per year, typically on the same date each month. Each payment is split between principal and interest according to your amortization schedule. Early payments consist mostly of interest, with only a small portion reducing principal. As your loan progresses, the balance shifts gradually toward principal, with later payments reducing your balance more substantially.
            </p>

            <p>
              Biweekly payments restructure this schedule by dividing your monthly payment in half and submitting that amount every 14 days. A $1,800 monthly payment becomes $900 every two weeks. Since most months are longer than four weeks, you'll occasionally make three half-payments in a single month, but over the course of a year, you make exactly 26 half-payments—13 full monthly equivalents. That 13th payment accelerates principal reduction significantly.
            </p>

            <p>
              The impact compounds over time because each biweekly payment slightly reduces your principal before the next payment is due. With monthly payments, interest accrues on your full balance for a month before you make your payment. With biweekly payments, you're reducing principal every two weeks, meaning slightly less interest accrues between payments. This incremental reduction, combined with the extra annual payment, creates substantial long-term savings.
            </p>

            <div className="my-8 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-6">
              <h3 className="mb-4 mt-0 text-lg font-semibold text-slate-900">Example: $300,000 Mortgage at 6% for 30 Years</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span className="font-medium">Scenario 1: Monthly Payments</span>
                  <span></span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex justify-between">
                    <span>Payment Frequency:</span>
                    <span className="font-mono">12x per year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Amount:</span>
                    <span className="font-mono">$1,799/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Paid:</span>
                    <span className="font-mono">$347,515</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payoff Time:</span>
                    <span className="font-mono">360 months (30 years)</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between border-t border-indigo-200 pt-2">
                  <span className="font-medium">Scenario 2: Biweekly Payments</span>
                  <span></span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex justify-between">
                    <span>Payment Frequency:</span>
                    <span className="font-mono">26x per year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Amount:</span>
                    <span className="font-mono">$900 every 2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Paid:</span>
                    <span className="font-mono">$282,496</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payoff Time:</span>
                    <span className="font-mono">312 months (26 years)</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-indigo-200 pt-2 font-semibold text-indigo-700">
                    <span>Interest Saved:</span>
                    <span className="font-mono">$65,019</span>
                  </div>
                  <div className="flex justify-between font-semibold text-indigo-700">
                    <span>Time Saved:</span>
                    <span className="font-mono">4 years</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Setting Up Biweekly Payments</h2>

            <p>
              Many lenders offer formal biweekly payment programs, but these often come with setup fees ($200-400) and per-transaction charges ($2.50-5). Before enrolling in a lender program, consider whether you can replicate the benefits yourself. The key advantage of biweekly payments is making one extra payment annually—you can achieve this without special programs or fees.
            </p>

            <p>
              The simplest DIY approach involves dividing your monthly payment by 12 and adding that amount to each regular monthly payment. For a $1,800 monthly payment, add $150 ($1,800 ÷ 12) to make your payment $1,950 monthly. This creates the equivalent of one extra payment spread across the year. You maintain your monthly payment schedule while achieving the same accelerated payoff as biweekly payments.
            </p>

            <p>
              Alternatively, make one extra full payment annually using a windfall like a tax refund or work bonus. This delivers identical results to biweekly payments without changing your payment frequency. Some borrowers prefer this approach because it maintains monthly payment simplicity while still capturing the accelerated payoff benefits.
            </p>

            <p>
              If your lender does offer a biweekly program and you're paid biweekly, the convenience might justify any fees—especially if automatic deductions align perfectly with your paychecks. However, always calculate whether the fees offset your interest savings. A $300 setup fee and $3 per payment ($78/year) reduces your net benefit, though you'll still come out ahead over the long term.
            </p>

            <h2>When Biweekly Payments Make Sense</h2>

            <p>
              Biweekly payments work best for borrowers who are paid biweekly and want to align mortgage payments with income. The natural synchronization creates budget simplicity—you never need to accumulate funds over several paychecks to make one large monthly payment. The smaller, more frequent payments feel less burdensome, and the accelerated payoff happens automatically without requiring ongoing decision-making about extra payments.
            </p>

            <p>
              This strategy also appeals to borrowers who struggle with payment discipline. Because the extra payment is built into the schedule rather than requiring voluntary action each month, you benefit from accelerated payoff without needing to remember to make extra payments. The automation removes temptation to skip months or redirect funds elsewhere, ensuring consistent progress toward debt freedom.
            </p>

            <p>
              Consider biweekly payments if you plan to stay in your home long-term, as the benefits compound over many years. Short-term homeowners (planning to sell within 5-7 years) receive less benefit, as the major interest savings accumulate in later years. The strategy works for any interest rate, but higher rates produce more dramatic savings because you're avoiding more interest accumulation.
            </p>

            <p>
              Conversely, if you're paid monthly or semi-monthly, biweekly mortgage payments may create budgeting challenges as payment dates won't align neatly with income. In these cases, adding 1/12 extra to each monthly payment provides equivalent benefits while maintaining monthly synchronization with your income schedule.
            </p>

            <p>
              Before committing to biweekly payments, ensure the slightly higher annual payment amount (equivalent to one extra monthly payment) fits comfortably in your budget. Unlike true extra payments that you can stop during financial stress, enrolling in a formal biweekly program creates an obligation to maintain the schedule. Make sure you can sustain it without financial strain.
            </p>

            <p>
              <strong>What if I need to skip a payment?</strong> Formal biweekly programs typically don't allow skipping payments, as they're structured obligations. This is why DIY approaches offer more flexibility—you can adjust or pause extra principal payments during financial challenges while maintaining your required minimum payment. Consider this flexibility when deciding between formal programs and self-managed strategies.
            </p>

            <p>
              <strong>Do biweekly payments affect my credit score?</strong> No. Your credit report reflects whether you make required payments on time, not the frequency of those payments. Biweekly payments help you pay off your mortgage faster, which can improve your debt-to-income ratio over time, but the payment schedule itself doesn't directly impact your credit score.
            </p>

            <p>
              Consult with your lender about biweekly payment options and any associated fees. If they charge significant fees, calculate the break-even point where interest savings exceed fee costs. In most cases, DIY approaches provide better value unless the convenience of automated biweekly deductions aligned with your paychecks justifies the administrative costs.
            </p>

          </article>
        </div>
      </section>

      
      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
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
