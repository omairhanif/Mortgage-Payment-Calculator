"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

export default function BiweeklyPaymentCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = Calendar;
  const title = "Biweekly Payment Calculator";
  const description = [
    "Calculate how switching to biweekly mortgage payments can save you thousands in interest and help you pay off your mortgage years earlier.",
    "A biweekly payment calculator shows the powerful impact of making half your monthly payment every two weeks instead of one full payment per month."
  ];
  const howItWorks = [
    "This calculator demonstrates how biweekly payments accelerate mortgage payoff through a simple calendar trick. By paying every two weeks instead of monthly, you make 26 half-payments annually—equivalent to 13 full monthly payments instead of 12. That extra payment each year goes entirely toward principal, dramatically reducing interest costs over the loan term.",
    "Enter your current loan amount, interest rate, and loan term. The calculator compares traditional monthly payments against biweekly payments, showing you exactly how much interest you'll save and how many months faster you'll pay off your mortgage.",
    "Results display side-by-side comparisons of payment schedules, total interest paid, and payoff timelines. You'll see how this simple adjustment can save tens of thousands of dollars without requiring you to find extra money in your budget—you're just restructuring when you make the same total annual payments."
  ];
  const faqs = [
    {
      q: "How much will I save with biweekly mortgage payments?",
      a: "Biweekly payments typically save $30,000-$80,000 in interest and cut 4-7 years off a 30-year mortgage, depending on loan amount and rate. For example, a $300,000 mortgage at 6.5% with monthly payments costs $382,633 in total interest over 30 years. Switching to biweekly payments (half payment every two weeks) reduces total interest to $338,000—saving $44,633—and pays off the loan in approximately 25.5 years instead of 30. The savings come from making 26 half-payments annually (equivalent to 13 full payments) instead of 12, with the extra payment going entirely to principal. Use a biweekly mortgage payment calculator to see your specific savings based on your loan details."
    },
    {
      q: "Is it better to pay mortgage biweekly or monthly with extra payment?",
      a: "Both strategies save similar amounts—the key is making 13 payments per year instead of 12. Biweekly payments (half payment every 2 weeks) automatically result in 13 payments annually. Monthly payments plus one extra payment annually achieve the same result with more flexibility. Advantages of biweekly: automatic discipline, aligns well with biweekly paychecks, gradual principal reduction. Advantages of monthly + extra: more control over timing, can pause extra payments if needed, avoids potential lender fees ($200-400 setup + $3-5 per transaction). On a $300,000 loan at 6%, both methods save roughly $40,000-45,000 in interest. Choose biweekly if you want autopilot savings; choose monthly + extra for flexibility."
    },
    {
      q: "How to calculate biweekly mortgage payment?",
      a: "To calculate biweekly mortgage payments: (1) Calculate your standard monthly payment using the mortgage formula (or use a calculator); (2) Divide the monthly payment by 2 to get your biweekly amount; (3) You'll make this half-payment 26 times per year (every two weeks). Example: $300,000 loan at 6.5% for 30 years has a monthly payment of $1,896. Biweekly payment = $1,896 ÷ 2 = $948. You'll pay $948 every two weeks, totaling $24,648 annually (26 × $948) instead of $22,752 (12 × $1,896). That extra $1,896 per year accelerates payoff. A biweekly payment calculator automates this math and shows your payoff timeline and interest savings."
    },
    {
      q: "Do all lenders allow biweekly mortgage payments?",
      a: "Most lenders allow biweekly payments, but some charge fees or require enrollment in formal programs. Three approaches: (1) Formal lender biweekly program—automatic deductions every two weeks, but often has $200-400 setup fee plus $2.50-5 per transaction; (2) Lender-approved extra payments—make 1/12 extra each month or one extra annual payment yourself, usually free; (3) DIY approach—save half-payments in separate account, make extra payments on your schedule. Check your mortgage documents for prepayment terms. FHA, VA, and most conventional loans allow unlimited prepayments without penalties. Canadian mortgages typically allow 10-20% annual prepayment without fees. Contact your lender to confirm options and any associated costs."
    },
    {
      q: "When should I start biweekly payments?",
      a: "Start biweekly payments as soon as possible—early payments have the greatest impact. In the first years of a mortgage, most of your payment goes to interest. Extra payments during this period directly reduce principal when interest is accruing fastest, maximizing savings. On a $300,000, 6.5% 30-year mortgage: starting biweekly payments immediately saves $44,000+ in interest; starting after 10 years saves ~$20,000; starting after 20 years saves only ~$5,000. However, even late-start biweekly payments provide benefits. Before starting, ensure you have: adequate emergency fund (3-6 months expenses), no high-interest debt (credit cards >7-8%), and sufficient cash flow to handle the extra annual payment."
    },
    {
      q: "What is the biweekly equivalent of my monthly mortgage payment?",
      a: "The biweekly equivalent of your monthly payment is simply your monthly payment divided by 2. For example: $1,800 monthly payment = $900 biweekly; $2,000 monthly = $1,000 biweekly; $2,500 monthly = $1,250 biweekly; $3,000 monthly = $1,500 biweekly. Paying this biweekly amount every two weeks results in 26 payments annually, totaling 13 monthly payments instead of 12. The 'extra' payment (13th payment) goes entirely toward principal. This strategy doesn't require finding extra money—you're just redistributing your annual payments to align with a biweekly pay schedule. Many people find it easier to budget $900 every two weeks rather than $1,800 once monthly."
    },
    {
      q: "Can biweekly payments hurt my credit score?",
      a: "No, biweekly mortgage payments do not hurt your credit score—they can only help or have neutral impact. As long as your lender receives the full monthly payment amount by the due date (which happens automatically with 26 biweekly payments), your payment history remains positive. Benefits to credit: paying down principal faster lowers your overall debt, improves debt-to-income ratio, and shows strong financial management. Potential concerns to avoid: ensure your lender properly processes biweekly payments (some hold funds until full monthly amount received); verify payments aren't marked late if lender only credits monthly; confirm no fees charged that could strain your budget. Most importantly, biweekly payments demonstrate consistent repayment—the #1 factor in credit scores (35% of FICO score)."
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
        <MortgageCalculator category="savings" forcedSubcalculator="biweekly" />
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
            <h1 className="text-center">Understanding Biweekly Mortgage Payments: The Calendar Trick That Saves Thousands</h1>

            <p>
              Biweekly mortgage payments represent one of the simplest yet most effective strategies for accelerating mortgage payoff and reducing total interest costs. By shifting from monthly payments to biweekly payments—paying half your monthly amount every two weeks—you leverage a calendar quirk to make one full extra payment annually without significantly impacting your budget. This seemingly minor adjustment can save tens of thousands of dollars in interest and shave years off your mortgage term through the power of consistent additional principal reduction.
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

            <div className="my-8 rounded-lg border-l-4 border-slate-300 bg-slate-50 p-6">
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
