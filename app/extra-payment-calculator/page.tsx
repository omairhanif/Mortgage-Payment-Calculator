"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, DollarSign } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

export default function ExtraPaymentCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const Icon = DollarSign;
  const title = "Extra Payment Calculator";
  const description = [
    "Calculate how extra mortgage payments can dramatically reduce your interest costs and help you become debt-free years earlier.",
    "Our extra payment calculator shows you exactly how much you'll save in interest and how many years you'll cut off your mortgage term by making additional principal payments."
  ];
  const howItWorks = [
    "This calculator demonstrates the powerful impact of making additional principal payments on your mortgage. Even small extra payments can save tens of thousands in interest and cut years off your loan term because they reduce the principal balance on which future interest is calculated.",
    "Enter your current loan amount, interest rate, loan term, and the amount of extra payment you plan to make (monthly, yearly, or one-time). The calculator will show you exactly how much interest you'll save and how many months you'll shave off your mortgage by consistently making these additional payments.",
    "Results show your original payoff timeline versus the accelerated schedule, total interest savings, and the reduction in loan term. You'll see how extra payments made early in the loan term have the greatest impact, as they reduce the principal when interest charges are at their highest."
  ];
  const faqs = [
    {
      q: "How to pay off a 30-year mortgage in 15 years?",
      a: "To pay off a 30-year mortgage in 15 years, you need to roughly double your principal payment each month. For a $300,000 loan at 6.5%, the standard 30-year payment is $1,896/month. To pay it off in 15 years, pay approximately $2,596/month (an extra $700/month). This aggressive strategy saves approximately $200,000 in interest over the original 30-year term. Using an extra payment calculator helps you model different scenarios. Benefits: you build equity faster, save massively on interest, and become debt-free in half the time. However, ensure you have adequate emergency savings and aren't sacrificing higher-return investments or retirement contributions to achieve this goal."
    },
    {
      q: "What happens if I pay an extra $200 a month on my mortgage?",
      a: "Paying an extra $200/month on your mortgage generates substantial savings. On a $300,000 loan at 6% over 30 years (standard payment: $1,799/month), adding $200 extra saves approximately $78,000 in interest and pays off your mortgage 7 years early (in 23 years instead of 30). The extra $200/month totals $2,000/year or $46,000 over the shortened loan period—but you avoid $78,000 in interest, netting $32,000 in pure savings. These extra payments reduce your principal balance faster, meaning less interest accrues each month. An extra payment calculator shows exactly how your specific loan benefits from additional payments."
    },
    {
      q: "How much will I save if I pay extra on my mortgage?",
      a: "Savings from extra mortgage payments depend on your loan amount, interest rate, remaining term, and extra payment amount. Here are examples on a $300,000, 6% 30-year mortgage: $50 extra/month saves ~$22,000 in interest and shaves 2.5 years off; $100 extra/month saves ~$40,000 and reduces term by 4.5 years; $200 extra/month saves ~$70,000 and cuts 7 years; $500 extra/month saves ~$145,000 and eliminates 13 years. The earlier you start making extra payments, the greater your savings—payments made in year 1 have far more impact than payments in year 20. Use a mortgage calculator with extra payments to model your specific scenario."
    },
    {
      q: "Should I pay extra on my mortgage or save/invest?",
      a: "The decision depends on comparing your mortgage interest rate to potential investment returns and your personal financial situation. If your mortgage rate is 6% and you can reliably earn 8-10% in investments, investing may yield better long-term returns. However, consider: (1) Guaranteed return—paying off your mortgage guarantees savings equal to your interest rate with zero risk; (2) Risk tolerance—market investments fluctuate while mortgage payoff is certain; (3) Tax implications—mortgage interest deduction (if applicable) vs. investment capital gains taxes; (4) Psychological factors—debt-free peace of mind vs. growing wealth. Generally, if mortgage rate >6%, prioritize extra payments; if <4%, consider investing; between 4-6%, it's personal preference. Always maintain adequate emergency savings first."
    },
    {
      q: "Can I make extra principal payments on any mortgage?",
      a: "Most mortgages allow extra principal payments without penalties, but you should always verify with your lender first. Conventional mortgages in the U.S. rarely have prepayment penalties anymore. FHA and VA loans cannot have prepayment penalties. Canadian mortgages typically allow 10-20% annual prepayment privileges without penalty—exceeding this may trigger fees. Check your mortgage documents for prepayment terms or contact your lender directly. When making extra payments, specify they should apply to principal only, not future interest or payments. Some lenders have online portals for designating extra principal payments, while others require written instructions. Setting up automatic extra payments ensures consistency and maximizes savings."
    },
    {
      q: "How to calculate extra mortgage payment savings?",
      a: "To calculate extra mortgage payment savings, you need to compare the original loan amortization to the accelerated schedule with extra payments. Use this process: (1) Calculate original monthly payment with standard mortgage formula; (2) Add your planned extra payment to each month; (3) Recalculate the balance each month, applying extra payment directly to principal; (4) Continue until balance reaches $0; (5) Compare total interest paid in both scenarios. The difference is your savings. An extra payment calculator automates this complex calculation. For example, a $250,000 loan at 6.5% for 30 years has standard payments of $1,580/month and total interest of $318,861. Adding $200/month extra reduces term to 22 years and total interest to $233,675—saving $85,186."
    },
    {
      q: "What's better: extra payments or biweekly payments?",
      a: "Biweekly payments and extra payments both reduce your mortgage faster, but work differently. Biweekly payments mean paying half your monthly payment every two weeks (26 payments/year = 13 months of payments instead of 12), essentially adding one extra monthly payment annually. Extra monthly payments let you add any amount you choose. On a $300,000, 6% 30-year loan: biweekly payments save ~$40,000 in interest and cut ~5 years; $150 extra monthly saves ~$60,000 and cuts ~6 years. Extra payments offer more flexibility—you can adjust amounts or pause during tight financial periods. Biweekly payments require lender participation and sometimes fees. For maximum savings, combine both: make biweekly payments AND add extra principal when possible."
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
        <MortgageCalculator category="savings" forcedSubcalculator="extra-payment" />
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
            <h1 className="text-center">Understanding Extra Mortgage Payments: Your Path to Faster Debt Freedom</h1>

            <p>
              Extra mortgage payments represent one of the most powerful yet underutilized strategies for building wealth and achieving financial freedom. By paying even modest additional amounts toward your mortgage principal, you can save tens of thousands of dollars in interest and shave years off your loan term. The mathematics of compound interest work dramatically in your favor when you reduce principal early, as every dollar paid above your minimum payment attacks the loan balance directly without being diluted by interest charges.
            </p>

            <p>
              Most homeowners focus exclusively on their required monthly payment, viewing it as a fixed obligation like a utility bill. This mindset overlooks a crucial opportunity: mortgage payments are split between principal (reducing your loan balance) and interest (the cost of borrowing). Early in your loan term, the vast majority of each payment services interest while only a small portion reduces principal. When you make extra payments, 100% of that money reduces principal immediately, disrupting the amortization schedule in your favor and accelerating your path to ownership.
            </p>

            <p>
              The decision to make extra payments isn't simply about mathematics—it reflects your financial priorities, risk tolerance, and life goals. Some borrowers prioritize the guaranteed return and psychological peace that comes with debt elimination. Others prefer investing excess cash in assets with potentially higher returns. Understanding how extra payments work, their impact over time, and when they make most sense empowers you to make informed decisions aligned with your specific situation rather than following generic advice.
            </p>

            <h2>The Mechanics of Extra Payments</h2>

            <p>
              When you make your regular mortgage payment, your lender applies it according to your amortization schedule—a predetermined split between principal and interest calculated to pay off the loan over its full term. For a 30-year loan at 6%, your first payment on $300,000 might be $1,799, with roughly $1,500 going to interest and only $299 reducing principal. The following month, you pay interest on a slightly smaller balance, allowing a bit more to go toward principal. This gradual shift continues throughout the loan, with later payments consisting mostly of principal.
            </p>

            <p>
              Extra payments bypass this slow process entirely. When you pay $100 beyond your required payment and specify it should go toward principal, you immediately reduce the balance by $100. This doesn't just save interest on that $100—it eliminates all future interest that would have accrued on it over the remaining loan term. That $100 extra payment made in your first year effectively saves $300+ in interest over 30 years, because you're cutting out three decades of interest accumulation at 6% annually.
            </p>

            <p>
              The compounding effect accelerates over time. That same $100 extra payment not only saves interest on itself but also enables more of your subsequent regular payments to go toward principal rather than interest. You're essentially "jumping ahead" in your amortization schedule, reaching the later years where payments are more effective at reducing balance. Make that $100 extra payment every month, and you'll save approximately $60,000 in interest while paying off a $300,000 mortgage at 6% five years earlier.
            </p>

            <div className="my-8 rounded-lg border-l-4 border-slate-300 bg-slate-50 p-6">
              <h3 className="mb-4 mt-0 text-lg font-semibold text-slate-900">Example: $300,000 Mortgage at 6% for 30 Years</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span className="font-medium">Scenario 1: Minimum Payments Only</span>
                  <span></span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex justify-between">
                    <span>Monthly Payment:</span>
                    <span className="font-mono">$1,799</span>
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
                  <span className="font-medium">Scenario 2: Extra $200/Month</span>
                  <span></span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex justify-between">
                    <span>Total Monthly Payment:</span>
                    <span className="font-mono">$1,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Paid:</span>
                    <span className="font-mono">$251,406</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payoff Time:</span>
                    <span className="font-mono">270 months (22.5 years)</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-indigo-200 pt-2 font-semibold text-indigo-700">
                    <span>Interest Saved:</span>
                    <span className="font-mono">$96,109</span>
                  </div>
                  <div className="flex justify-between font-semibold text-indigo-700">
                    <span>Time Saved:</span>
                    <span className="font-mono">7.5 years</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Strategies for Making Extra Payments</h2>

            <p>
              The most straightforward approach is making consistent monthly extra payments. Adding a fixed amount—$50, $100, $200, or more—to each mortgage payment requires minimal planning and delivers maximum impact through consistency. Set up automatic payments to include the extra amount so you never miss a contribution. Even small monthly additions compound dramatically over time. An extra $50 monthly on a $300,000 loan at 6% saves over $30,000 in interest and cuts nearly three years from the loan term.
            </p>

            <p>
              Annual lump-sum payments offer flexibility for borrowers whose income varies or who prefer allocating windfalls strategically. Direct tax refunds, work bonuses, inheritance distributions, or other large one-time receipts toward your mortgage principal once yearly. A single $2,000 payment annually produces similar savings to $167 monthly. This approach suits professionals with variable compensation or business owners whose income fluctuates seasonally while still providing substantial interest savings and timeline reduction.
            </p>

            <p>
              The biweekly payment strategy leverages calendar mathematics to create an extra monthly payment annually. Instead of paying your full monthly amount once per month, pay half the amount every two weeks. Since there are 52 weeks in a year, you'll make 26 half-payments, equaling 13 full monthly payments instead of 12. The 13th payment each year acts as a pure extra payment, accelerating payoff without requiring you to find additional money beyond your normal monthly budget. This strategy is particularly effective for borrowers paid biweekly who can align mortgage payments with paychecks.
            </p>

            <p>
              Regardless of strategy, always specify that extra payments should apply to principal, not future payments. Some lenders may apply extra money to upcoming payments unless you explicitly designate it for principal reduction. Verify with your lender how to properly designate extra principal payments—this might involve notations on checks, special procedures for online payments, or separate payment submissions. Confirm that your extra payments are being applied correctly by reviewing your loan statements to ensure principal balance decreases appropriately.
            </p>

            <h2>When Extra Payments Make the Most Sense</h2>

            <p>
              Extra payments deliver maximum value when your mortgage interest rate exceeds returns you could realistically earn on low-risk investments. If your mortgage rate is 6% and conservative investments offer 3-4% returns, paying down your mortgage guarantees a 6% return with zero risk—a compelling proposition. The higher your interest rate, the more attractive extra payments become, as you're guaranteeing yourself that interest rate as a return on every extra dollar paid.
            </p>

            <p>
              Consider extra payments when you have high-interest mortgage debt, have already maximized tax-advantaged retirement accounts, lack better guaranteed returns, and value the psychological benefit of debt freedom. If you're risk-averse and the idea of being mortgage-free provides significant peace of mind, the emotional value of extra payments may exceed their pure mathematical benefit. Many borrowers find the guaranteed nature of mortgage payoff more appealing than the uncertainty of investment markets, especially as they approach retirement.
            </p>

            <p>
              Conversely, skip or minimize extra payments if your mortgage rate is below 4%, you haven't maxed out retirement contributions, you lack an emergency fund, or you have higher-interest debt like credit cards or car loans. Address high-interest debt first—paying off a 20% credit card provides a guaranteed 20% return, far exceeding mortgage savings. Build a 3-6 month emergency fund before aggressively attacking mortgage principal. Maximize employer 401(k) matches and fill tax-advantaged retirement space before diverting money to extra mortgage payments, as these often provide better long-term returns.
            </p>

            <p>
              Young homeowners early in their careers might benefit more from investing extra cash in their human capital or business opportunities that could yield significantly higher returns than mortgage interest savings. A $300 monthly extra payment might save $60,000 over 30 years, but investing that money in education, certifications, or business development could increase earning capacity by far more. Consider your complete financial picture, life stage, risk tolerance, and alternative opportunities when deciding whether to prioritize extra mortgage payments.
            </p>

            <p>
              Before committing to aggressive extra payments, ensure you can afford them consistently without creating financial strain. Extra payments shouldn't come at the expense of funding emergencies, retirement savings, or quality of life. The goal is financial freedom, not financial stress. Start with modest extra payments you can maintain indefinitely rather than large amounts you might need to stop. Even $25-50 monthly provides meaningful savings if sustained over years.
            </p>

            <p>
              <strong>What about prepayment penalties?</strong> Most modern mortgages don't include prepayment penalties, but some loans—particularly those with very low rates or special terms—may charge fees for paying off the loan early. Review your loan documents or contact your lender to confirm whether prepayment penalties apply to your mortgage. If present, calculate whether the penalties offset your savings from extra payments. Prepayment penalties are increasingly rare on standard residential mortgages but remain common on some commercial loans and certain special-rate programs.
            </p>

            <p>
              <strong>Should I pay points or make extra payments?</strong> Paying discount points upfront to reduce your interest rate versus making extra payments involves different strategies. Points reduce your interest rate permanently but require large upfront cash and take years to break even. Extra payments offer flexibility—you can increase, decrease, or stop them as your situation changes. If you're certain you'll keep the mortgage long-term and have substantial cash available, points might make sense. If you value flexibility or might sell or refinance within a few years, extra payments offer more adaptability.
            </p>

            <p>
              Consult your lender about the most effective methods for making extra principal payments and ensure you understand how they'll be applied. Some lenders offer formal biweekly payment programs, though these often charge enrollment and processing fees. You can replicate the benefits yourself by making one extra monthly payment annually or adding 1/12 of your monthly payment to each regular payment. Maintain records of all extra payments and verify they're reducing your principal as intended.
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
