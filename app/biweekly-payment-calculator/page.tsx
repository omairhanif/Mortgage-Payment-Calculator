"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

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
  },
  {
    q: "Is biweekly or monthly mortgage payment better for paying off a loan?",
    a: "A true biweekly schedule can pay off a fixed-rate mortgage sooner because 26 half-payments equal 13 full payments each year. The benefit depends on the extra annual payment reaching principal and on any program fees. A monthly schedule with one extra principal payment per year can produce a similar result and may be easier to control. Compare the total annual amount, payoff date, and interest savings rather than choosing based only on the payment frequency."
  },
  {
    q: "How much faster will biweekly payments pay off my mortgage?",
    a: "There is no single answer because the result depends on the balance, interest rate, remaining term, and payment-processing date. On a typical 30-year fixed mortgage, paying the equivalent of one extra monthly principal-and-interest payment per year can shorten the schedule by several years. Use the current balance and rate in a biweekly mortgage payment calculator, then confirm the projected payoff date with your servicer."
  },
  {
    q: "Does my lender apply biweekly payments directly to principal?",
    a: "Not always. Some servicers hold partial payments until they can assemble a full scheduled payment, while others credit funds when received. Ask whether the extra annual payment is applied to principal, whether the service charges a fee, and how escrow is handled. Check the next statement or payment history to confirm the principal balance changed as expected."
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
        <div className="w-full mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h1 className="font-serif text-3xl font-bold text-indigo-600 sm:text-4xl lg:text-5xl">
              Biweekly Payment Calculator
            </h1>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              {descriptions[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-white py-12">
        <div className="w-full mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MortgageCalculator 
            category="savings" 
            forcedSubcalculator="biweekly" 
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="w-full mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
        <div className="w-full mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-4xl">
            <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Biweekly Mortgage Payments: How They Work and What They Can Save
              </h2>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                What Are Biweekly Mortgage Payments?
              </h3>
              <p className="text-slate-600 mb-4">
                A biweekly mortgage payment schedule divides your required monthly principal-and-interest payment into two equal payments made every two weeks. Because a year has 52 weeks, this creates 26 half-payments, or the equivalent of 13 full monthly payments. A standard monthly schedule has 12 full payments. The difference is one additional monthly payment each year, applied over time to reduce the mortgage balance.
              </p>
              <p className="text-slate-600 mb-4">
                That extra payment is the main source of the savings. It is not a special interest-rate discount, and it does not make each individual payment smaller in the long run. The schedule pays principal down sooner, so future interest is calculated on a lower balance. A biweekly mortgage payment calculator helps separate that effect from taxes, homeowners insurance, private mortgage insurance, and other costs that may not change when the payment frequency changes.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why the Extra Payment Matters
              </h3>
              <p className="text-slate-600 mb-4">
                Mortgage interest is usually calculated from the outstanding principal balance. At the beginning of a fully amortizing loan, a larger share of each scheduled payment goes to interest because the balance is largest. When an additional amount reaches principal, the next interest calculation starts from a slightly lower balance. The reduction may look modest in the first few payments, but the effect repeats across the remaining amortization schedule.
              </p>
              <p className="text-slate-600 mb-4">
                This is why timing matters. Paying an extra amount early generally saves more interest than paying the same amount near the end of the loan. It also explains why the result depends on the starting balance, annual interest rate, remaining term, and the date the extra payment is credited. A calculator can show the payoff date and interest difference, but the lender's payment-processing rules determine whether the theoretical schedule is achieved in practice.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 my-6">
                <h4 className="font-serif text-lg font-semibold text-slate-900 mb-3">
                  Illustrative Example: $300,000 at 6% for 30 Years
                </h4>
                <p className="text-slate-600 mb-3">
                  The figures below use principal and interest only. They are an illustration of the payment-frequency math, not a quote from a lender. Actual results vary with the loan balance, rate, servicing method, and the date extra funds are credited.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold"> </span><span>Estimated monthly principal-and-interest payment: about $1,799</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold"> </span><span>Biweekly payment: about $899 every two weeks</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold"> </span><span>Annual scheduled amount: about $23,382 biweekly versus $21,584 monthly</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold"> </span><span>Difference: approximately one additional $1,799 payment each year</span></li>
                </ul>
              </div>

              <p className="text-slate-600 mb-4">
                The important comparison is not $899 versus $1,799, because those are different payment intervals. Compare the total amount paid during a full year and confirm whether the extra amount is applied to principal. The biweekly schedule can shorten a 30-year payoff period by several years in a scenario like this, while also reducing total interest. The exact payoff reduction should be calculated from the actual loan balance and rate rather than promised as a fixed number.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                Biweekly vs. Semi-Monthly Payments
              </h3>
              <p className="text-slate-600 mb-4">
                These terms are often confused. A biweekly payment occurs every 14 days, so there are 26 payment dates in most calendar years. A semi-monthly schedule occurs twice per month, usually on set dates such as the 1st and 15th, for 24 half-payments. Semi-monthly payments total the same as 12 monthly payments unless the borrower separately adds principal. They may help match payroll timing, but they do not automatically create the extra annual payment that makes a true biweekly schedule faster.
              </p>
              <p className="text-slate-600 mb-4">
                When speaking with a lender, ask which schedule is actually being offered. “Twice a month” is not necessarily biweekly, and a payment company may hold half-payments in an account until the full monthly payment is due. The frequency, processing date, fees, and principal-application policy all affect the result.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                How to Calculate Biweekly Mortgage Savings
              </h3>
              <p className="text-slate-600 mb-4">
                Start with the current principal balance, annual interest rate, remaining term, and regular principal-and-interest payment. Divide the monthly payment by two for the nominal biweekly amount. Then compare two amortization schedules: one with 12 monthly payments per year and one with 26 half-payments per year. The difference between the schedules shows the estimated interest savings and earlier payoff date.
              </p>
              <p className="text-slate-600 mb-4">
                Include the details that can change the result. If the loan has a fixed rate, the rate itself stays the same; the balance changes faster. If the loan is adjustable, future rate changes need to be modeled separately. If escrow is included in the quoted payment, divide only the portion the lender permits to be paid biweekly. Property taxes and insurance are not reduced by paying the mortgage more often. A reliable calculation should also account for the possibility that the servicer posts funds monthly rather than immediately.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                Three Practical Ways to Create the Same Result
              </h3>
              <p className="text-slate-600 mb-4"><strong>Use a true biweekly program:</strong> The lender or payment service drafts half of the principal-and-interest payment every two weeks and sends the additional annual amount to the loan. Confirm that the service is authorized, understand any setup or transaction fees, and check how missed or returned drafts are handled.</p>
              <p className="text-slate-600 mb-4"><strong>Make one extra payment annually:</strong> Continue paying monthly and send an additional payment equal to the principal-and-interest amount once each year. This is easy to explain to a servicer and avoids a third-party scheduling fee, but it requires enough cash at one point in the year.</p>
              <p className="text-slate-600 mb-4"><strong>Add one-twelfth each month:</strong> Divide the extra annual payment by 12 and add that amount to each monthly payment. For a $1,799 principal-and-interest payment, the extra amount is about $150 per month. This spreads the budget impact across the year and begins reducing principal earlier, provided the servicer applies the extra amount correctly.</p>
              <p className="text-slate-600 mb-4">
                A borrower paid monthly who receives income every two weeks may find the biweekly method easier to budget because the payment lines up with payday. However, two months each year usually contain three biweekly paychecks. Those “extra paycheck” months should not be treated as free money: they still need to cover groceries, utilities, insurance, and other obligations. A sustainable extra payment is better than an aggressive schedule that causes late payments or high-interest credit-card debt.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                Check the Lender Before You Change the Schedule
              </h3>
              <p className="text-slate-600 mb-4">
                The phrase “extra payment” does not always mean “immediate principal reduction.” Some servicers accept partial payments but hold them in a suspense account until enough money arrives for a complete scheduled payment. Others apply the amount to the next payment due, which may not reduce principal as quickly as the calculator assumes. Ask for the answer in writing or verify it in the payment history after the first few transactions.
              </p>
              <p className="text-slate-600 mb-4">
                Ask these specific questions: Is there a fee for biweekly drafts? Are funds credited when received or when a full payment is assembled? Does the extra annual payment go directly to principal? Can the borrower make principal-only payments through the normal portal? Is there a prepayment penalty? How are escrow funds treated? These questions are practical because a mathematically correct plan can underperform if the servicer's posting rules differ from the assumed schedule.
              </p>
              <p className="text-slate-600 mb-4">
                Also check the loan documents and account terms before sending more than the required amount. Most U.S. residential mortgages allow extra principal payments, but the borrower should confirm the terms for the specific loan. Keep confirmation numbers, review the next statement, and make sure the principal balance falls by the expected amount. Do not skip a required payment because a separate biweekly draft is pending.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                When Biweekly Payments May Not Be the Best Choice
              </h3>
              <p className="text-slate-600 mb-4">
                Paying down a mortgage faster produces a predictable interest saving, but it is not automatically the highest-priority use of every dollar. Build an emergency reserve, stay current on required payments, and address high-interest debt before committing to an inflexible schedule. A borrower who has no cash reserve may need access to the money more than they need a faster payoff date.
              </p>
              <p className="text-slate-600 mb-4">
                Compare the guaranteed mortgage-interest saving with the cost of employer retirement-plan matches, credit-card interest, student-loan obligations, and near-term home repairs. The right choice depends on the interest rate, tax situation, liquidity needs, and risk tolerance. A biweekly mortgage calculator answers the payoff and interest question; it cannot decide how the household should allocate its entire budget.
              </p>
              <p className="text-slate-600 mb-4">
                Refinancing is another reason to pause. If a borrower expects to sell or refinance soon, the lifetime savings from a long amortization change may never be realized. In that situation, making a smaller flexible principal payment may be more practical than paying a fee for a formal biweekly program. The same is true if the program requires a contract or makes it difficult to stop drafts when income changes.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                How to Use This Biweekly Payment Calculator
              </h3>
              <p className="text-slate-600 mb-4">
                Enter the current loan balance rather than the original purchase price if the mortgage is already in progress. Use the actual interest rate and remaining term, then compare the monthly and biweekly outputs. Review the estimated total interest, payoff date, and amount applied to principal. If the calculator asks for taxes or insurance, keep those amounts separate from the principal-and-interest comparison unless the lender truly includes them in each draft.
              </p>
              <p className="text-slate-600 mb-4">
                Run a second scenario using the annual extra-payment method. If the results are materially different, check whether the assumptions use 26 payment periods, whether interest is credited on each payment date, and whether the extra amount is applied immediately. Use the result as a planning estimate, then confirm the implementation with the mortgage servicer. The most useful output is a payment amount that fits the household budget and a clear record of how the additional principal will be credited.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
                Budgeting, Escrow, and Tax Considerations
              </h3>
              <p className="text-slate-600 mb-4">
                A biweekly plan changes the timing of cash leaving the household account, so map the drafts against actual paydays and other automatic bills. A household paid twice per month may prefer a monthly extra-principal amount because its income does not arrive every 14 days. A household paid every other Friday may prefer biweekly drafts, but it should keep enough buffer for a calendar month with an unusual holiday or payroll date. The safest setup is one that remains affordable during months with medical bills, home repairs, or seasonal expenses.
              </p>
              <p className="text-slate-600 mb-4">
                Escrow deserves separate attention. Property taxes and homeowners insurance are collected for future bills, not calculated from the outstanding mortgage principal. Paying those escrow dollars more frequently does not normally reduce the tax or insurance charge. Escrow analyses can also change the total monthly amount after a tax or premium adjustment. For a clean comparison, use principal and interest when measuring payoff savings, then add the current escrow amount to the household budget separately.
              </p>
              <p className="text-slate-600 mb-4">
                Tax treatment should not be used as the only reason to choose a payment schedule. Mortgage interest deductions depend on the borrower's filing situation, loan purpose, eligibility, and whether itemizing deductions makes sense under current law. Paying less interest can reduce a potential deduction, but it also means paying less interest overall. A tax professional can address the household's circumstances; the calculator should focus on the loan balance, payment timing, and interest cost.
              </p>
              <p className="text-slate-600 mb-4">
                After starting the plan, compare the lender's statement with the calculator once every few months. Check the principal balance, interest charged, payment dates, and any fee. If the statement shows a partial payment in suspense or the extra amount is being held for a future installment, contact the servicer before sending more money. Keep the original amortization estimate and the statement history together. That simple record makes it easier to spot a posting problem and to update the payoff estimate when the rate, escrow, or loan balance changes.
              </p>
              <p className="text-slate-600 mb-4">
                The bottom line is simple: true biweekly payments work because they create one extra monthly payment each year. The financial benefit comes from reducing principal sooner, not from the calendar label. Compare total annual payments, account for fees and servicing rules, and choose a method you can maintain for the time you expect to keep the loan.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="w-full mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl text-center">
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
    </>
  );
}
