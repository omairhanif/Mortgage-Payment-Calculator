'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

export default function HELOCCalculatorPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const allFaqs = [
    {
      q: "How much can I borrow on a 2nd mortgage?",
      a: "Most lenders allow 80-85% combined loan-to-value (CLTV)—meaning your first mortgage plus HELOC can't exceed 80-85% of home value. Formula: (Home Value × 0.80) - Existing Mortgage = Available HELOC. Example: $600K home with $400K mortgage = $80K maximum HELOC (at 80% CLTV). Actual amount depends on credit score (680+ typically required), income/DTI ratio (43% max), and appraisal. Use \"second mortgage calculator how much can i borrow\" tools for estimates, but expect appraisal to determine final amount. Canada and UK calculators may show different limits due to local regulations."
    },
    {
      q: "How do I qualify for a 2nd mortgage?",
      a: "Lenders evaluate: (1) Credit score—680+ preferred, 620 minimum for conventional HELOCs, (2) Debt-to-income ratio—43% maximum including HELOC payment, (3) Home equity—15-20% remaining after HELOC required, (4) Income documentation—2 years tax returns, recent paystubs for W-2 earners; 2 years business/personal returns for self-employed, (5) Reserves—2 months housing payments in savings. Most qualification denials stem from insufficient equity (home hasn't appreciated enough) or DTI exceeding limits (too much existing debt)."
    },
    {
      q: "Is it hard to get a 2nd mortgage?",
      a: "Moderate difficulty. Easier than first mortgages if you have equity and stable income; harder because lenders view HELOCs as higher risk (second position lien). Borrowers with 700+ credit, 30%+ equity, DTI below 40%, and 2+ years steady employment typically approve in 30-45 days. Challenges arise with 620-680 credit (higher rates, stricter scrutiny), DTI above 40% (need income increase or debt paydown), or recent job changes (employment gaps raise concerns). Private second mortgage lenders accommodate borrowers conventional lenders decline, but charge 9-15% rates vs. 8-10% at banks."
    },
    {
      q: "What is the 2 2 2 rule for mortgages?",
      a: "The 2-2-2 rule requires: (1) 2 years employment history in same field, (2) 2 years tax returns documenting income, (3) 2 months mortgage payment reserves in savings. For HELOCs, lenders apply this guideline to verify stability—income must be consistent over time, and borrower must have financial cushion for emergencies. Self-employed borrowers particularly affected (need full 2 years business tax returns showing profit). Job changes within same industry generally acceptable if income remains stable or increases. Reserves calculated as 2 months × (first mortgage + HELOC payment + property taxes/insurance)."
    },
    {
      q: "What's the difference between HELOC draw period and repayment period payments?",
      a: "Draw period (typically 10 years): Access funds as needed, pay interest-only on outstanding balance. Example: $60K drawn at 8.75% = $437/month. Repayment period (typically 20 years after draw ends): Can no longer borrow, must repay principal + interest. Same $60K at 8.75% over 20 years = $554/month—27% payment increase. Use \"second mortgage calculator payment\" tools to model both phases. Paying extra principal during draw period reduces repayment period shock. Many borrowers refinance before repayment period hits to avoid payment jump."
    },
    {
      q: "Can I use a second mortgage calculator with extra payments to pay off my HELOC faster?",
      a: "Yes—\"second mortgage calculator with extra payments\" tools show how additional principal reduces balance and interest costs. Example: $60K HELOC at 8.75%, $437/month required (interest-only). Adding $200/month extra principal during 10-year draw period reduces balance to ~$31K by repayment period start, cutting future payment from $554 to $286/month. Key difference: HELOCs are revolving—you can re-borrow paid-down amounts during draw period (requires discipline). Extra payments most effective when rates are low or rising—prevents payment shock if rates increase during draw period."
    },
    {
      q: "How do second mortgage calculator Canada/UK versions differ from US calculators?",
      a: "Core math is identical (home value × LTV - mortgage = available equity), but regulations differ significantly. Canada: Stress test required—must qualify at higher rate (~2% above actual), affecting affordability. CIBC second mortgage and RBC second mortgage products follow strict OSFI guidelines; second mortgage rates Canada currently 7-9%. UK: \"Second mortgage calculator Halifax\" and similar tools reflect FCA regulations, typically cap at 75% LTV, use \"further advance\" terminology. Ireland/NZ: Similar CLTV principles but country-specific caps. Always use calculators specific to your country—qualification rules and typical second mortgage rates Ontario vs. Texas vs. London vary significantly."
    },
    {
      q: "Can I use a HELOC to buy another house?",
      a: "Yes—common strategy for investment property or second home down payments. Example: $750K primary home with $425K mortgage allows $175K HELOC (80% CLTV). Use $95K for 20% down on $450K investment property. Costs: HELOC interest (~$712/month on $95K at 9%) + new mortgage (~$2,396/month on $360K). Offset with rental income ($3,200/month) = net $92/month increase over original mortgage. Risks: vacancy periods, HELOC rate increases, qualifying DTI must support both properties. Alternative: \"how to get a second mortgage to buy another house\" via cash-out refinance (fixed rate vs. variable HELOC rate). Many lenders restrict HELOC usage for investment properties—verify before applying."
    }
  ];


  return (
    <div className="min-h-screen bg-white">
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
            src="/images/articles/heloc-calculator-estimate-credit-line-costs.jpg"
            alt="HELOC calculator for estimating home equity line of credit costs"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          HELOC Calculator: Estimate Your Credit Line Costs
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>March 5, 2026</time>
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
              A Home Equity Line of Credit (HELOC) functions as a revolving credit line secured by your home equity—similar to a credit card but with significantly lower interest rates and your home as collateral. Understanding how to calculate available HELOC amount, estimate monthly costs during different payment phases, and determine whether you qualify requires specialized calculators that account for the unique two-period structure HELOCs employ. Standard mortgage calculators don't capture the complexity of interest-only draw periods followed by principal-plus-interest repayment periods, nor do they reflect the variable rate risk most HELOCs carry.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Homeowners typically use HELOCs for substantial renovations ($50,000-$150,000 projects), debt consolidation, investment property down payments, or ongoing expenses requiring flexible access to funds. Whether you're using a second mortgage calculator free tool, exploring second mortgage calculator Canada or second mortgage calculator UK versions, or researching how much can I borrow on a 2nd mortgage, this guide provides the mathematical framework and real-world context for calculating HELOC costs, understanding qualification requirements including the 2-2-2 mortgage rule, and navigating strategies like how to get a second mortgage to buy another house. You'll see concrete examples showing available equity calculations, draw period vs repayment period payment differences, and qualification scenarios that demonstrate how do I qualify for a 2nd mortgage in practice.
            </p>

            {/* Section 1: How HELOCs Differ from Traditional Second Mortgages */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              How HELOCs Differ from Traditional Second Mortgages
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Before using any second mortgage calculator payment tool, understanding the fundamental difference between HELOCs and traditional second mortgages prevents calculation errors and sets appropriate payment expectations.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Traditional Second Mortgages:</strong> You receive a lump sum at closing—typically $50,000 to $200,000—with a fixed interest rate (currently 8-11% for most borrowers) and fixed monthly payment over 10 to 30 years. From day one, you're paying principal plus interest on the full amount borrowed. A $75,000 second mortgage at 9.5% for 15 years costs $786 monthly, every month, whether you've spent the money or not.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Home Equity Lines of Credit (HELOCs):</strong> You're approved for a credit limit—say $100,000—but only pay interest on amounts actually drawn. The rate is variable, typically Prime Rate plus 0.5% to 2.5% (currently 8.25% to 10.25% for most borrowers), and the structure splits into two distinct phases: a 10-year draw period where you can borrow, repay, and re-borrow with interest-only payments common, followed by a 20-year repayment period where you can no longer draw funds and must pay principal plus interest to eliminate the balance.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Real-World Example:</strong> If you need $75,000 for a kitchen renovation with potential future expenses, a HELOC provides flexibility—you might draw $50,000 initially, pay interest only on that $50,000 (about $417/month at 10%), then access the remaining $25,000 later for landscaping. A traditional second mortgage would charge interest on the full $75,000 from day one, costing an extra $200+ monthly even if you don't need all the funds immediately. This flexibility makes HELOCs ideal for phased projects or uncertain expense timelines, though the variable rate introduces risk traditional fixed second mortgages don't carry.
            </p>


            {/* Section 2: Calculating Your Maximum Available HELOC Amount */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Calculating Your Maximum Available HELOC Amount
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              The question "how much can I borrow on a 2nd mortgage" starts with understanding Combined Loan-to-Value (CLTV) limits—the maximum percentage of your home's value that lenders allow across all mortgages combined. Most lenders cap HELOCs at 80-85% CLTV, occasionally reaching 90% for borrowers with excellent credit (750+) and strong income documentation.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>The Formula:</strong> (Home Value × CLTV%) - Existing Mortgage Balance = Maximum HELOC Available
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Real-World Example 1 (Suburban Homeowner):</strong> A homeowner purchased their property five years ago for $550,000, now appraised at $625,000 due to market appreciation. Their original mortgage has been paid down to $410,000. They have a 720 credit score and documented W-2 income. Using a second mortgage calculator how much can i borrow tool with 80% CLTV (standard for this credit profile):
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              ($625,000 × 0.80) - $410,000 = $500,000 - $410,000 = <strong>$90,000 maximum HELOC</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Real-World Example 2 (Urban Condo Owner):</strong> A condo owner in a high-cost market purchased for $460,000 three years ago, now valued at $485,000. Mortgage balance: $290,000. Credit score: 780 with tech sector employment showing stable $180,000 annual income. Lender approves 85% CLTV (higher due to excellent credit and income):
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              ($485,000 × 0.85) - $290,000 = $412,250 - $290,000 = <strong>$122,250 maximum HELOC</strong>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Reality Check on Available Equity:</strong> Most lenders use 80% CLTV as the standard—85% is uncommon and typically requires credit scores above 750, debt-to-income ratios below 36%, and substantial income verification. Getting to 90% CLTV is exceptionally rare, limited to relationship banking customers with significant assets held at the lending institution. When using any second mortgage calculator free tool or second mortgage calculator Canada/UK version, verify the CLTV percentage assumption—many calculators default to 85% or 90%, creating unrealistic expectations when actual approvals come in at 80%.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>International Context:</strong> The same basic formula applies whether you're using a second mortgage calculator UK tool (Halifax and other UK lenders), second mortgage calculator Ireland or second mortgage calculator NZ versions, but local lending limits vary significantly. Canada requires stress testing—you must qualify at a higher interest rate (typically 2% above the actual rate you'll pay), reducing how much can I borrow on a 2nd mortgage for Canadian borrowers compared to similar US borrowers. UK lenders often cap at 75% LTV for second charges (their term for second mortgages), and regulatory frameworks in Ireland and New Zealand create different maximum lending ratios. Always verify local requirements when calculating potential borrowing capacity outside the United States.
            </p>


            {/* Section 3: Understanding Draw Period Costs */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Understanding Draw Period Costs
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              During the typical 10-year draw period, you access funds as needed and most lenders structure payments as interest-only. The rate is variable, usually Prime Rate plus a margin (0.5% to 2.5% depending on creditworthiness), meaning your second mortgage calculator payment estimate changes as rates adjust.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Real-World Example:</strong> Homeowner draws $60,000 at 8.75% (Prime 7.75% + 1% margin). Monthly payment: ($60,000 × 0.0875) ÷ 12 = $437.50/month interest-only. Six months later, Fed raises rates and Prime increases to 8.25%. New rate: 9.25%, new payment: $462.50/month—a $25 increase from rate change alone.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Reality Check:</strong> Variable rates create uncertainty. Budget for potential 2-3% rate increases. Interest-only payments build no equity—you owe the full balance unless you voluntarily pay extra principal during the draw period.
            </p>

            {/* Section 4: Repayment Period Payment Shock */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Repayment Period Payment Shock
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              After 10 years, the draw period ends—you can no longer access funds and must repay principal + interest over 20 years (typically). Draw period payment: $462.50/month (interest-only on $60K). Repayment period payment: $554/month (P&I over 20 years). Payment increase: $91.50/month or 20% jump.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Worse-Case Scenario:</strong> If balance grew to $85,000 during draw period (re-borrowing for additional projects), repayment period payment jumps to $785/month—70% increase. Many homeowners refinance before this transition or use home sales to pay off the balance. Those who can't face mandatory payment increases.
            </p>

            {/* Section 5: Strategic Extra Payment Planning */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Strategic Extra Payment Planning
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Using a second mortgage calculator with extra payments demonstrates how paying additional principal during the draw period reduces future payment shock. Example: $60,000 HELOC at 8.75%, required payment $437.50/month (interest-only). Borrower adds $200/month extra principal, total payment $637.50/month.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Impact After 10 Years:</strong> Without extra payments: $60,000 balance remains, repayment period payment $554/month. With $200/month extra: ~$31,000 balance remains, repayment period payment $286/month. Saved ~$270/month through discipline. Caution: HELOCs are revolving—you can re-borrow paid-down amounts during draw period, requiring financial discipline to maintain paydown progress.
            </p>


            {/* Section 6: Qualification Requirements */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Qualification Requirements: How Do I Qualify for a 2nd Mortgage?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Credit Score Requirements (Tiered Structure):</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-slate-600 mb-4">
              <li><strong>750+:</strong> Best rates (Prime + 0.5% to 1.0%), 85% CLTV possible, streamlined approval</li>
              <li><strong>680-749:</strong> Standard rates (Prime + 1.0% to 1.5%), 80% CLTV typical, full documentation</li>
              <li><strong>620-679:</strong> Higher rates (Prime + 1.5% to 2.5%), 75% CLTV maximum, scrutinized approval</li>
              <li><strong>Below 620:</strong> Conventional HELOC unlikely—consider private second mortgage lenders</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Debt-to-Income (DTI) Requirements:</strong> Maximum 43% including proposed HELOC payment. Lenders calculate DTI using full repayment period payment (not interest-only) for conservatism.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Real-World Qualification Example:</strong> Gross monthly income $8,500. First mortgage: $2,100, car loan: $450, credit cards: $150, proposed HELOC repayment payment: $550. DTI: ($2,100 + $450 + $150 + $550) ÷ $8,500 = 38% → <strong>APPROVED</strong>. If income were $7,000: same debts = 47% DTI → <strong>DENIED</strong> (exceeds 43%).
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Income Documentation:</strong> W-2 employees need 2 recent paystubs, 2 years W-2s, 2 years tax returns. Self-employed need 2 years business + personal tax returns, year-to-date P&L, CPA letter.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Is it hard to get a 2nd mortgage?</strong> Moderate difficulty—easier than first mortgages in some ways (home already owned, equity established), harder in others (lenders view as higher risk, stricter DTI limits). Borrowers with 680+ credit, 30%+ equity, and DTI under 40% typically encounter minimal obstacles.
            </p>

            {/* Section 7: The 2-2-2 Mortgage Rule Explained */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              The 2-2-2 Mortgage Rule Explained
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>What is the 2 2 2 rule for mortgages?</strong> This industry guideline requires: (1) 2 years employment history in same field, (2) 2 years tax returns documenting income, (3) 2 months reserves—savings equal to 2 months total housing payments.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>How It Applies to HELOCs:</strong> Lenders evaluate stability through 2-year documentation. Self-employed borrowers especially scrutinized (need 2 years business returns showing consistent profit). Reserve requirement example: First mortgage $2,100/month, HELOC repayment period payment $550/month. Required reserves: 2 × ($2,100 + $550) = $5,300 minimum in savings.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Exceptions:</strong> Job changes within same field generally acceptable (engineer → engineer at new company). Less than 2 years employment okay with compensating factors (high credit score, substantial equity). Reserves can include retirement accounts (with 30% discount for potential early withdrawal penalties).
            </p>

            {/* Section 8: Using HELOCs to Buy Another House */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Using HELOCs to Buy Another House
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>How to get a second mortgage to buy another house:</strong> Tap primary residence equity via HELOC for investment property down payment—avoids liquidating investments, keeps primary mortgage untouched.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Real-World Investment Property Strategy:</strong> Primary home value $750,000, existing mortgage $425,000. 80% CLTV = $600,000 max, available HELOC: $175,000. Target investment property: $450,000 duplex requiring 20% down ($90,000). Use $95,000 from HELOC (down payment + closing costs). New investment mortgage: $360,000.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Monthly Carrying Costs:</strong> Primary mortgage $2,650, HELOC interest ($95K at 9%): $712/month interest-only, investment property mortgage: $2,396 (at 7.5% investor rate). Total: $5,758/month. Offset with rental income: $3,200/month (both units). Net cash outlay: $2,558/month vs. $2,650 before—only $92/month net increase.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Risks:</strong> Vacancy risk (budget for months without rental income), HELOC rate increases affect affordability, qualifying DTI must support both properties. Many lenders cap HELOC usage for investment property down payments—verify before applying. Alternative: cash-out refinance on primary vs. HELOC (fixed rate vs. variable).
            </p>


            {/* Section 9: Lender Landscape & Rate Shopping */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Lender Landscape & Rate Shopping
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Traditional Bank HELOCs:</strong> Rate range Prime + 0.5% to 2.0% (currently 8.25% to 9.75% for most borrowers). Major players: Chase, Bank of America, Wells Fargo, US Bank. Pros: Lower rates, relationship discounts possible. Cons: Strict qualification, lengthy approval (30-60 days).
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Credit Union HELOCs:</strong> Often 0.25-0.50% below big banks. Navy Federal, Pentagon Federal, local credit unions. Membership required.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Online Lenders:</strong> Figure, Springboard, LoanDepot. Fast approval (as quick as 5 days), online process. Rates slightly higher (Prime + 1.5% to 2.5%), less personal service.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Canadian Context:</strong> CIBC second mortgage and RBC second mortgage are major players requiring stress test qualification. Second mortgage rates Canada currently 7-9% (Prime + margin). Second mortgage lenders Ontario include B-lenders for non-prime borrowers (Equitable Bank, Home Trust). Second mortgage rates Ontario typically 7.5-9.5%, with regional variation minimal.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Private Second Mortgage Lenders:</strong> For credit below 620, self-employment with complex income, recent bankruptcy. Private second mortgage rates: 9-15% typical (3-6% above bank HELOCs). Terms: Shorter (1-3 years common), higher fees, faster approval. Rate shopping strategy: Compare at least 3 lenders (bank, credit union, online). Check second mortgage calculator free tools to estimate payments before applying. Ask about rate discounts (autopay, relationship, large balances).
            </p>

            </div>
        </div>
      </article>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {allFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-8">
                      {faq.q}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Ad */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center rounded-lg">
              <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

