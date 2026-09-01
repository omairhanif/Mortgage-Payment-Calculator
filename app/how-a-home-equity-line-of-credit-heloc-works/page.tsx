'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { getStructuredData } from './server';

export default function HowHELOCWorksPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const allFaqs = [
    {
      q: "What is the monthly payment on a $50,000 HELOC Canada?",
      a: "At current Prime Rate (approximately 6.95% in 2026) plus typical 0.5% margin = 7.45%, a $50,000 HELOC costs approximately $310.42/month interest-only during the draw period. This assumes you're only paying interest (standard for first 10 years). If you add $200/month extra principal, total payment becomes $510/month while reducing your balance. Payment adjusts whenever Bank of Canada changes Prime Rate—during 2022-2023 rate increases, $50K HELOC payments climbed from $163/month to over $300/month."
    },
    {
      q: "How much would a $100,000 HELOC cost per month?",
      a: "A $100,000 HELOC at 7.45% (Prime + 0.5%) costs approximately $620.83/month interest-only during the draw period. This doubles the $50K payment since interest is calculated on outstanding balance. Many Canadians use $100K HELOCs for major home renovations or investment property down payments. TD, Scotiabank, BMO, CIBC, and RBC all offer heloc calculator payment tools on their websites for personalized estimates based on your specific rate and balance."
    },
    {
      q: "What is the monthly payment on a $150,000 HELOC?",
      a: "A $150,000 HELOC at 7.45% costs approximately $931.25/month interest-only. This is near the upper limit for many Canadian homeowners since HELOCs are capped at 65% of home value by OSFI regulations—a $150K HELOC requires approximately $230K home value minimum. Combined with existing mortgage, total borrowing cannot exceed 80% of home value. Rates adjust when Bank of Canada changes Prime Rate (8 policy announcements per year)."
    },
    {
      q: "How do I calculate my monthly HELOC payment?",
      a: "Use the formula: (Outstanding Balance × Annual Interest Rate) ÷ 12 = Monthly Interest-Only Payment. Example: $75,000 balance at 7.70% rate = ($75,000 × 0.077) ÷ 12 = $481.25/month. Your rate equals Prime Rate (set by Bank of Canada) plus your lender's margin (typically 0.5% to 1.0% for qualified borrowers). All major Canadian banks offer heloc calculator free tools—TD heloc calculator, heloc calculator scotiabank, bmo heloc calculator, cibc heloc calculator, and rbc heloc calculator provide personalized estimates."
    },
    {
      q: "Which Canadian bank has the best HELOC calculator?",
      a: "TD (heloc calculator td with Home Equity FlexLine), Scotiabank (heloc calculator scotiabank for Scotia STEP), BMO (bmo heloc calculator for ReadiLine), CIBC (cibc heloc calculator for Home Power Plan), and RBC (rbc heloc calculator for Homeline Plan) all offer free online calculators. CIBC and TD calculators are particularly user-friendly, showing both interest-only and extra payment scenarios. For heloc calculator ontario or heloc calculator alberta searches, rates are nationally consistent—provincial differences arise in home values (affecting borrowing capacity) not base rate structure."
    },
    {
      q: "What's the difference between heloc calculator interest only vs with extra payments?",
      a: "Interest-only calculators show minimum monthly payment during draw period (just interest, no principal reduction). Heloc calculator with extra payments tools show how additional principal payments reduce balance over time and lower future repayment period costs. Example: $80K HELOC at 7.45% requires $496.67/month interest-only. Adding $300/month extra principal reduces balance to $62K in 5 years vs staying at $80K interest-only—saves $18K debt and significantly lowers repayment period payment when draw period ends."
    },
    {
      q: "How much can I borrow with a HELOC in Canada?",
      a: "Canadian OSFI regulations cap HELOCs at 65% of home value, with combined mortgage + HELOC maximum 80% of home value. Example: $600K home with $300K mortgage allows $180K HELOC ($480K combined limit minus $300K mortgage, within 65% HELOC cap of $390K). Mortgage-free $700K home allows $455K HELOC (65% of value). Use heloc calculator how much can i borrow tools from TD, Scotiabank, BMO, CIBC, or RBC to determine your specific limit based on home value and existing mortgage balance."
    },
    {
      q: "Are HELOC rates different in Ontario vs Alberta?",
      a: "HELOC rates are nationally consistent across Canadian provinces—TD, Scotiabank, BMO, CIBC, RBC use same Prime Rate + margin structure whether you search heloc calculator ontario or heloc calculator alberta. All banks base rates on Bank of Canada Prime Rate (currently ~6.95%). Provincial differences arise in home values (affecting borrowing capacity based on 65% OSFI cap) and local lender competition (some credit unions offer regional rate discounts of 0.10-0.25%). Core rate structure remains Prime + 0.5% to 1.0% nationwide for qualified borrowers."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }}
      />
      
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 py-6">
          <Link 
            href="/articles" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8 py-8">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/articles/how-a-home-equity-line-of-credit-heloc-works.jpg"
            alt="HELOC line of credit explained"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          How a Home Equity Line of Credit (HELOC) Works
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>March 12, 2026</time>
          <span className="mx-3">•</span>
          <span>16 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">


            {/* Introduction */}
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A Home Equity Line of Credit (HELOC) functions as a revolving credit line secured by your home equity, allowing Canadian homeowners to borrow, repay, and re-borrow funds during a draw period—typically 10 years—before entering a repayment period where the balance must be amortized. Unlike traditional home equity loans that provide lump-sum financing with fixed payments, HELOCs offer flexibility for ongoing expenses like home renovations, debt consolidation, or investment property down payments, with interest charged only on drawn amounts rather than the full credit limit.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Understanding how HELOCs work requires grasping three core mechanics: the two-phase payment structure (draw vs repayment periods), variable interest rates tied to Prime Rate, and Canadian regulatory limits set by OSFI (Office of the Superintendent of Financial Institutions) that cap HELOCs at 65% of home value. Major Canadian banks—TD (Home Equity FlexLine), Scotiabank (Scotia Total Equity Plan), BMO (Homeowner ReadiLine), CIBC (Home Power Plan), and RBC (Homeline Plan)—structure their products similarly, though specific rates and features vary. This guide answers the most common questions: What is the monthly payment on a $50,000 HELOC Canada? How much would a $100,000 HELOC cost per month? How do I calculate my monthly HELOC payment using heloc calculator payment tools? You'll see real payment calculations based on current Prime Rate, compare major lender offerings, and understand how heloc calculator interest only versus heloc calculator with extra payments scenarios impact long-term costs.
            </p>



            {/* Section 2: HELOC Mechanics */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              How HELOCs Function as Revolving Credit
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Draw Period (10 Years Typical):</strong> During the first phase, homeowners access funds through checks, online transfers, or debit cards linked to the HELOC. Interest accrues daily on the outstanding balance—if you draw $30,000 from a $100,000 credit limit, you pay interest only on the $30,000, not the full limit. Most Canadian lenders structure payments as interest-only during this period, meaning no principal reduction occurs unless you voluntarily pay extra. Critically, HELOCs are revolving: you can repay $10,000 and immediately re-borrow it during the draw period, maintaining flexible access to equity as long as you stay within the credit limit.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Repayment Period (15-20 Years Typical):</strong> When the draw period ends, the credit line closes—you can no longer access additional funds. The outstanding balance must be amortized through principal plus interest payments over the remaining term. For homeowners who paid interest-only during the draw period, this transition creates payment shock: a $75,000 balance that cost $465/month interest-only suddenly requires $650+/month when principal amortization begins. Many Canadian borrowers refinance their HELOC into a traditional mortgage or home equity loan before this phase to lock in fixed rates and avoid payment increases.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Variable Rate Structure:</strong> Canadian HELOCs tie interest rates to Prime Rate, the benchmark set by major banks based on Bank of Canada policy rate. When the Bank of Canada raises or lowers its overnight rate (announced 8 times annually), banks adjust Prime Rate within days. Your HELOC rate equals Prime plus a margin determined by creditworthiness and loan-to-value ratio—typically Prime + 0.5% for borrowers with 750+ credit scores and lower LTV, Prime + 1.0% for good credit (680-749), and Prime + 1.5% or higher for fair credit (620-679). This means your heloc payment calculator estimate changes whenever Prime Rate adjusts, creating interest rate risk that fixed-rate home equity loans avoid.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>How Interest Accrues:</strong> Lenders calculate interest daily using the formula: (Outstanding Balance × Annual Rate) ÷ 365 = Daily Interest Charge. These daily charges accumulate through the month, with your monthly payment covering accrued interest. Example: $50,000 balance at 7.45% annual rate accrues $10.21 per day ($50,000 × 0.0745 ÷ 365). Over 30 days, total interest is $306.30, which rounds to the $310.42 monthly payment shown in most heloc calculator free tools. This daily accrual means paying down principal mid-month reduces subsequent interest charges immediately—unlike traditional loans where interest is front-loaded into fixed monthly payments.
            </p>



            {/* Section 3: Payment Examples */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              What Does a HELOC Cost Per Month? (Canadian Payment Examples)
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Current Canadian Rate Environment (2026):</strong> Bank of Canada Prime Rate ~6.95%, down from 2023 peak of 7.20%. Major banks (TD, Scotiabank, BMO, CIBC, RBC) price HELOCs at Prime + 0.5-1.0% for qualified borrowers, creating typical rates of 7.45-7.95%. Following calculations use 7.45% (Prime + 0.5%) for borrowers with excellent credit.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Monthly Payment on a $50,000 HELOC Canada
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Balance $50,000, Rate 7.45% → <strong>($50,000 × 0.0745) ÷ 12 = $310.42/month interest-only</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>What is the monthly payment on a $50,000 HELOC Canada?</strong> Approximately $310/month interest-only at current rates. Adding $200/month extra principal makes total payment $510/month while reducing balance. During 2022-2023 rate increases, $50K HELOCs jumped from $163/month (Prime 2.45%) to over $300/month (Prime 7.20%)—demonstrating heloc payment calculator volatility.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Monthly Payment on a $100,000 HELOC
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Balance $100,000, Rate 7.45% → <strong>($100,000 × 0.0745) ÷ 12 = $620.83/month interest-only</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>How much would a $100,000 HELOC cost per month?</strong> Approximately $621/month interest-only. Common for substantial renovations or investment property down payments. Interest-only means you still owe $100K when draw period ends—traditional $100K home equity loan at 7.45% over 15 years costs $920/month (P&I), making HELOC $300/month lower initially.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Monthly Payment on a $150,000 HELOC
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Balance $150,000, Rate 7.45% → <strong>($150,000 × 0.0745) ÷ 12 = $931.25/month interest-only</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>What is the monthly payment on a $150,000 HELOC?</strong> Approximately $931/month interest-only. Upper limit for many Canadians—OSFI's 65% cap means $150K HELOC requires $230K+ home equity. Combined with mortgages (80% total limit), typically requires $400K+ home value with minimal mortgage debt.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              How to Calculate Your Monthly HELOC Payment
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Formula:</strong> (Outstanding Balance × Annual Rate) ÷ 12 = Monthly Interest-Only Payment
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Example:</strong> $75,000 balance at 7.70% (Prime 6.95% + 0.75% margin) = ($75,000 × 0.077) ÷ 12 = <strong>$481.25/month</strong>. All major banks offer heloc calculator payment tools: heloc calculator td, heloc calculator scotiabank, bmo heloc calculator, cibc heloc calculator, rbc heloc calculator. These heloc calculator free tools show both interest-only minimums and extra payment scenarios. Heloc calculator ontario and heloc calculator alberta use identical calculations—rates nationwide based on Bank of Canada Prime.
            </p>

            {/* Section 4: Canadian Lender Comparison */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Canadian Lender HELOC Products
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>TD Home Equity FlexLine:</strong> Readvanceable structure—HELOC increases as mortgage paid down. Prime + 0.5% for qualified borrowers. Max: 65% HELOC, 80% combined. The heloc calculator td tool models draw scenarios and extra payment impact.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Scotia STEP:</strong> Integrated mortgage + HELOC account. Prime + 0.5-1.0% based on credit/LTV. As mortgage principal decreases, HELOC limit expands automatically. The heloc calculator scotiabank provides personalized capacity estimates.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>BMO ReadiLine:</strong> Flexibility to convert HELOC portions to fixed-rate loans during draw period. Prime + variable margin. Access via debit, checks, transfers. The bmo heloc calculator shows variable vs fixed conversion payment comparisons.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>CIBC Home Power Plan:</strong> 80% combined limit (65% HELOC max). Prime + 0.5% for 750+ credit. Sub-accounts for separate tracking. The cibc heloc calculator estimates capacity based on home value and existing mortgage.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>RBC Homeline Plan:</strong> Readvanceable mortgage with auto-expanding HELOC as principal paid. Prime + 0.5-1.0%. No reapplication as equity builds. The rbc heloc calculator projects repayment period payment increases when draw period ends.
            </p>

            {/* Section 5: Interest-Only vs Extra Payments */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Interest-Only vs Extra Payment Strategies
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Heloc calculator interest only scenario:</strong> $80,000 balance at 7.45% = $496.67/month minimum. After 10-year draw period, you still owe $80,000. If repayment period is 15 years at same rate, payment jumps to $739/month (principal + interest). Total interest paid: $59,600 during draw + $53,020 during repayment = $112,620 total interest on $80K borrowed.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Heloc calculator with extra payments scenario:</strong> Same $80K HELOC, but add $300/month extra principal during draw period. Total monthly payment: $797 ($497 interest + $300 principal). After 10 years, balance reduced to $34,000. Repayment period payment: $314/month (P&I on $34K). Total interest paid: $42,180 draw period + $22,520 repayment = $64,700 total—saves $47,920 versus interest-only. Extra $300/month ($36K total paid over 10 years) reduces lifetime interest by $48K.
            </p>

            {/* Section 6: Borrowing Capacity */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              HELOC Borrowing Capacity (OSFI 65% Rule)
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Canadian HELOCs are capped at 65% of home value per OSFI Guideline B-20, with combined mortgage + HELOC limited to 80% of home value. This prevents over-leveraging and protects borrowers from negative equity during housing downturns.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Example 1 - Mortgage-Free Home:</strong> $500,000 home value, no existing mortgage. Maximum HELOC: $325,000 (65% of $500K). Use heloc calculator how much can i borrow tools to verify your specific limit.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Example 2 - Home with Existing Mortgage:</strong> $600,000 home value, $300,000 remaining mortgage. Maximum combined borrowing: $480,000 (80% of $600K). Minus $300K mortgage = $180,000 available HELOC. However, HELOC alone cannot exceed $390,000 (65% of $600K), so actual limit is $180,000.
            </p>

            {/* Section 7: HELOC vs Home Equity Loan */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              HELOC vs Home Equity Loan (Product Distinction)
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>HELOC (Line of Credit):</strong> Revolving credit during draw period, borrow/repay/reborrow flexibility, interest-only minimum payments, variable rate tied to Prime, best for ongoing expenses with uncertain timing (multi-phase renovations, emergency fund access).
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Home Equity Loan:</strong> Lump-sum financing, fixed principal + interest payments from day one, often fixed rate available, loan balance decreases every month, best for one-time expenses with known costs (single major renovation, debt consolidation). Use home equity loan calculator tools for fixed-payment scenarios, heloc calculator for flexible draw scenarios.
            </p>

            {/* Section 8: Current Rates & Summary */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Current Canadian HELOC Rates (2026)
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              As of 2026, Bank of Canada Prime Rate sits at approximately 6.95%, following the gradual decline from 2023's peak of 7.20%. Major Canadian banks price HELOCs at Prime + 0.5-1.0% for qualified borrowers, creating effective rates between 7.45-7.95%. Rate changes occur when Bank of Canada adjusts policy rate (8 scheduled announcements yearly), with banks typically adjusting Prime within 1-2 business days.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              <strong>Key Takeaways:</strong> HELOCs provide flexible revolving credit during 10-year draw periods with interest-only minimum payments. Monthly payments on $50K, $100K, and $150K HELOCs cost approximately $310, $621, and $931 respectively at current 7.45% rates (Prime + 0.5%). Canadian borrowers can access heloc calculator payment tools from TD, Scotiabank, BMO, CIBC, and RBC. Understanding heloc calculator interest only versus heloc calculator with extra payments scenarios helps plan for long-term costs—voluntary principal payments during draw period significantly reduce repayment period payment shock. OSFI's 65% HELOC cap limits borrowing capacity, with combined mortgage + HELOC maximum 80% of home value.
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Frequently Asked Questions About HELOCs</h2>
            
            <div className="space-y-4 mb-12">
              {allFaqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors flex justify-between items-center gap-4"
                  >
                    <span className="font-semibold text-slate-900 pr-8">{faq.q}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </article>
    </main>
    </>
  );
}
