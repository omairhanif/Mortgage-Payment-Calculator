'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import type { Metadata } from 'next';

export default function FHALoanRequirementsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const allFaqs = [
    {
      q: "What credit score do I need for an FHA loan?",
      a: "FHA minimum credit score requirements are 580 for 3.5% down payment loans and 500-579 for 10% down payment loans. Borrowers with credit scores below 500 generally don't qualify for FHA financing. However, individual lenders may require higher credit scores as overlays—many set minimums at 580 or 600 even when FHA would allow lower scores. Your credit score affects not just eligibility but also your interest rate, with higher scores typically receiving better rates."
    },
    {
      q: "How much down payment is required for an FHA loan?",
      a: "FHA down payment requirements are 3.5% of the purchase price with a 580+ credit score, or 10% with a 500-579 credit score. For a $300,000 home, that's $10,500 down (3.5%) or $30,000 down (10%). The down payment can come from savings, gifts from family members, down payment assistance programs, or employer programs—FHA allows 100% gift funds. The source must be documented, and gift donors must provide a gift letter stating no repayment is expected."
    },
    {
      q: "What are the income requirements for FHA loans?",
      a: "FHA doesn't set specific minimum income amounts—instead, you must have sufficient income to meet debt-to-income ratio limits. Your total monthly housing payment (including mortgage insurance, taxes, and insurance) plus all other debts typically can't exceed 43% of your gross monthly income, though compensating factors can allow up to 50% in some cases. Income must be stable, verifiable, and likely to continue for at least three years. Acceptable income sources include employment wages, self-employment income, Social Security, disability, retirement, alimony, and certain other documented sources."
    },
    {
      q: "What is the maximum DTI ratio for FHA loans?",
      a: "FHA's standard maximum debt-to-income ratio is 43% for the back-end ratio (total monthly debts divided by gross monthly income) and 31% for the front-end ratio (housing payment divided by income). However, borrowers with strong compensating factors—such as large down payments, substantial cash reserves, minimal payment increases from current housing, excellent credit history, or conservative use of credit—may qualify with DTI ratios up to 50% or occasionally higher through manual underwriting. Each lender applies these guidelines differently based on the complete borrower profile."
    },
    {
      q: "What are the FHA loan limits in 2026?",
      a: "FHA loan limits vary by county based on local housing costs. For 2026, the standard floor limit in most areas is typically around $498,000-$510,000 for single-family homes, while high-cost areas can have limits exceeding $1,000,000. California, parts of Oregon, and expensive metro areas generally have higher limits, while Texas, Florida, Ohio, and Utah typically use standard or moderately elevated limits. Exact amounts change annually and vary by county even within the same state—check HUD's website or use county-specific FHA loan calculators for your area's precise limits."
    },
    {
      q: "Can I get an FHA loan with a 580 credit score?",
      a: "Yes, a 580 credit score meets FHA's minimum requirement for 3.5% down payment loans. However, qualifying involves more than just credit score—you must also meet income requirements, DTI ratio limits, employment stability standards, and property eligibility criteria. Additionally, many lenders impose credit score overlays requiring 600 or higher despite FHA allowing 580. Even when approved, a 580 credit score typically results in higher interest rates than borrowers with 680+ scores would receive. If your score is near 580, improving it before applying could save thousands in interest over the loan term."
    },
    {
      q: "How much income do I need for a $500,000 FHA mortgage?",
      a: "For a $500,000 FHA loan (roughly $515,500 purchase with 3.5% down), you'd typically need approximately $125,000-$140,000 in annual gross income, depending on your other monthly debts, property taxes, insurance costs, and the interest rate. At 7% interest, this loan would cost roughly $3,367 monthly for principal and interest, plus about $232 for mortgage insurance, plus property taxes and homeowners insurance. If your total housing payment is $4,500/month and you have no other debts, you'd need about $10,465 monthly income ($125,580 annually) to stay within the 43% DTI limit. Existing debts require proportionally higher income."
    },
    {
      q: "Does FHA allow gift funds for down payment?",
      a: "Yes, FHA allows the entire down payment and closing costs to come from gift funds—you can use 100% gifted money with no personal savings required, as long as the gifts come from acceptable sources. Acceptable donors include family members, employers, labor unions, charitable organizations, or government agencies providing down payment assistance. The donor must provide a signed gift letter stating the funds are a gift with no expectation of repayment, and the source of the donor's funds must be documented through bank statements showing the transfer. Friends' gifts typically aren't allowed unless there's a clearly defined interest in the borrower (such as a fiancé)."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 pt-20 pb-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">FHA Loan Requirements</span>
          </nav>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            FHA Loan Requirements: Down Payment & Credit Score
          </h1>

          <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
            Complete guide to FHA qualification requirements, including credit score minimums, down payment rules, income standards, and borrowing limits by location.
          </p>
        </div>

        {/* Ad Placeholder */}
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 mt-12">
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-600 bg-slate-800/30 backdrop-blur-sm flex items-center justify-center rounded-lg">
              <span className="text-xs text-slate-400 font-medium">Banner Ad (728�90)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-slate prose-lg max-w-none">
            
            {/* Introduction */}
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              FHA loans make homeownership accessible to millions of Americans who might not qualify for conventional financing, but understanding whether you meet FHA loan requirements is essential before you start house hunting or use an FHA loan calculator. The Federal Housing Administration sets minimum standards for credit scores, down payments, income documentation, debt-to-income ratios, and property eligibility—yet individual lenders often add their own overlays that create higher bars than FHA's published minimums.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              This guide explains every major FHA qualification requirement in detail, from the 580 credit score threshold for 3.5% down payment loans to income calculations that determine how much you can borrow. You'll learn how to calculate whether you meet income requirements for specific loan amounts, understand FHA loan limits by location including Texas, Florida, California, Ohio, Oregon, and Utah, and see how requirements interact with payment estimates from FHA loan calculators. Whether you're wondering if you qualify with a 580 credit score, trying to determine how much income you need for a $500,000 mortgage, or researching FHA multifamily or construction loan requirements, you'll find mathematically accurate examples and practical frameworks for evaluating your eligibility.
            </p>


            {/* Section 1: Core FHA Qualification Requirements */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Core FHA Qualification Requirements
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              FHA loan requirements establish baseline eligibility standards that every borrower must meet, though lenders may impose stricter overlays. Understanding how to calculate an FHA loan starts with knowing whether you meet these fundamental criteria—credit score minimums, down payment amounts, debt-to-income limits, employment stability, and property standards.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Credit Score Minimums:</strong> FHA requires a minimum 580 credit score for 3.5% down payment loans and allows credit scores between 500-579 with 10% down. Borrowers below 500 generally don't qualify. However, most lenders set overlays requiring 600+ scores, so FHA's published 580 minimum doesn't guarantee approval. Your credit score affects both eligibility and the interest rate you'll receive—higher scores secure better rates.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Down Payment Requirements:</strong> The 3.5% minimum down payment is FHA's signature feature, requiring just $10,500 down on a $300,000 purchase versus $60,000 (20%) for conventional loans without PMI. Borrowers with 500-579 credit scores must put 10% down. The down payment can come from savings, gifts from family members, employer assistance, or down payment assistance programs—FHA allows 100% gift funds.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Debt-to-Income Ratio Limits:</strong> FHA typically requires your total monthly debts (including the new mortgage payment, property taxes, insurance, mortgage insurance, credit cards, auto loans, student loans, and other obligations) not exceed 43% of your gross monthly income. The front-end ratio (housing payment alone) should stay below 31%. Compensating factors like large down payments, substantial reserves, or minimal payment increases from current housing can allow DTI ratios up to 50% through manual underwriting.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Employment and Income Stability:</strong> FHA requires stable, verifiable income likely to continue for at least three years. Most lenders want to see two years of continuous employment history, though job changes within the same field generally don't disqualify you. Self-employed borrowers need two years of tax returns showing consistent or increasing income. Acceptable income sources include wages, salaries, bonuses, commissions, self-employment, Social Security, disability, retirement, alimony, and child support.
            </p>


            {/* Section 2: Down Payment Requirements & Scenarios */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Down Payment Requirements & Scenarios
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              FHA's down payment structure creates a direct link between your credit score and your upfront cash requirement. The 3.5% minimum applies only to borrowers with 580+ credit scores, while those with 500-579 scores must contribute 10%—nearly three times more cash upfront.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>3.5% Down Scenario (580+ Credit Score):</strong> For a $300,000 purchase price, 3.5% down equals $10,500. This creates a base loan amount of $289,500. FHA then adds the 1.75% upfront mortgage insurance premium ($5,066), making your total loan amount $294,566. While $10,500 is significantly more accessible than a 20% conventional down payment ($60,000), you'll also need funds for closing costs—typically 2-5% of the purchase price, or $6,000-$15,000 in this example. Some or all of these closing costs can come from seller concessions or lender credits.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>10% Down Scenario (500-579 Credit Score):</strong> The same $300,000 purchase requires $30,000 down (10%), creating a $270,000 base loan. Adding 1.75% upfront MIP ($4,725) makes the total loan $274,725. While your loan amount is lower, the additional $19,500 in required down payment creates a significant barrier—this higher requirement exists because FHA views lower credit scores as higher risk.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Source of Funds Flexibility:</strong> FHA allows your entire down payment to come from gift funds provided by family members, employers, charitable organizations, or government down payment assistance programs. The donor must sign a gift letter stating the funds are a gift with no repayment expected, and you must document the transfer through bank statements. This flexibility makes FHA loans particularly accessible to first-time buyers who haven't accumulated substantial savings but have family support or qualify for assistance programs.
            </p>


            {/* Section 3: Credit Score Impact */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Credit Score Impact on Eligibility
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Your credit score serves as the gateway to FHA financing. The 580+ threshold unlocks 3.5% down payment, while 500-579 requires 10% down. Below 500, FHA loans generally aren't available.
            </p>

            {/* Section 4: Income & DTI Requirements */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Income & DTI Requirements
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              FHA loan requirements don't specify minimum income amounts—instead, your income must be sufficient to meet debt-to-income ratio limits. An FHA loan calculator income feature can help estimate your qualification range. FHA uses two DTI calculations: front-end (housing payment ÷ income, max 31%) and back-end (total debts ÷ income, max 43%).
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>How Much Income Do You Need to Qualify for a $500,000 Mortgage?</strong> A $500,000 FHA loan typically requires purchasing around $515,500 (with 3.5% down). At 7% interest for 30 years, principal and interest cost approximately $3,367 monthly, plus $232 for mortgage insurance, plus taxes/insurance (estimated $600). Total payment: roughly $4,200 monthly. At 43% DTI with no other debts, you need gross monthly income of $9,767 ($117,200 annually). With $500 monthly in other debts, you'd need $131,160 annually.
            </p>

            {/* Section 5: FHA Loan Limits by Location */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              FHA Loan Limits by Location
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              FHA loan limits vary significantly by county. Standard limits (typically ~$498,000-$510,000 for 2026) apply in most areas. High-cost regions exceed $1,000,000. When using an FHA loan calculator Texas, Florida, or Ohio, expect standard limits in most counties. An FHA loan calculator California or Oregon should account for elevated limits in major metros. FHA loan calculator Utah shows standard limits in most counties but higher limits in Park City (Summit County). These variations directly affect how much can I borrow on an FHA loan in your area.
            </p>

            {/* Section 6: Mortgage Insurance Requirements */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Mortgage Insurance Requirements
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              FHA mortgage insurance is mandatory. Understanding these costs is essential when using an FHA loan calculator with PMI. FHA charges 1.75% upfront MIP (financed into the loan) plus ongoing annual MIP (typically 0.55% for loans under $726,200 with 3.5% down). For most 30-year loans with less than 10% down, MIP is permanent—removable only by refinancing to conventional once you have 20% equity.
            </p>


            {/* Section 7: Property & Loan Type Variations */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Property & Loan Type Variations
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              FHA loans must finance your primary residence. However, FHA loan calculator multifamily scenarios show you can purchase 2-4 unit properties while living in one unit. FHA construction loan programs (203k) allow financing both purchase and renovation costs with just 3.5% down on the combined amount.
            </p>

            {/* Section 8: Using FHA Calculators */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Using FHA Calculators for Requirement Planning
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              An FHA loan calculator mortgage tool helps estimate whether you meet income requirements before applying. A comprehensive FHA loan calculator with closing costs shows your complete monthly payment including MIP, taxes, and insurance.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>What Is the Monthly Payment on a $400,000 Loan at 7%?</strong> A $400,000 FHA loan at 7% interest for 30 years costs $2,661 monthly for principal and interest. Adding 0.55% annual MIP ($183/month), property taxes (~$400/month), and homeowners insurance (~$150/month) brings total payment to roughly $3,400 monthly. At 43% DTI with no other debts, this requires gross monthly income of about $7,900 ($94,800 annually).
            </p>

            {/* Conclusion */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Understanding Requirements Leads to Successful Applications
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              FHA loan requirements create accessible homeownership paths for borrowers with modest down payment savings and credit profiles that might not qualify for conventional financing. The 580 credit score minimum and 3.5% down payment open doors that would remain closed under conventional 620+ score requirements and larger down payment expectations.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Before using FHA loan calculators to explore payment scenarios or starting your home search, verify you meet core requirements: sufficient credit score for your target down payment, stable documented income meeting DTI limits, property prices within your county's FHA loan limits, and readiness to occupy the property as your primary residence. Understanding what is required—and what lenders look for beyond published minimums—positions you to apply with realistic expectations, avoid homes outside your qualification range, and work toward approval rather than facing unexpected rejection.
            </p>

            </div>
          </div>
        </div>
      </article>


      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {allFaqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-slate-900 pr-8">{faq.q}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad Placeholder */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
              <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

