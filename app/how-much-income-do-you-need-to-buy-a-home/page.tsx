"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { getStructuredData } from "./server";

export default function HowMuchIncomeArticle() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "What salary do I need to afford a $500,000 house?",
      a: "To afford a $500,000 house in Canada, you need approximately $130,000-145,000 annual gross income with 20% down payment ($100,000). This leaves a $400,000 mortgage which at 5.5% interest creates ~$2,457/month principal and interest payments. Add property taxes ($550/month), insurance ($180/month), heating ($150/month), and maintenance ($250/month) for ~$3,587 total monthly housing costs. Canadian lenders require your GDS ratio to stay under 32-39% of gross income, meaning $3,587 Ã· 0.35 = $123,343 annually. However, with the mortgage stress test (qualifying at higher rates) and maintaining room for other debt payments (TDS under 44%), you realistically need $130,000-$145,000 stable income."
    },
    {
      q: "How much income do you need for a $300,000 mortgage in Canada?",
      a: "For a $300,000 mortgage in Canada, you need approximately $70,000-80,000 annual gross income. At 5.5% interest on a 25-year amortization, your monthly P&I payment is ~$1,843. Add property taxes ($300/month), insurance ($135/month), and heating ($120/month) for ~$2,398 total monthly housing costs. Using the standard 32-35% GDS ratio: $2,398 Ã· 0.33 = $87,212 annually. Factor in the mortgage stress test (must qualify at ~7.5% rate instead of 5.5%), which increases the qualifying payment significantly, and you realistically need $70,000-$80,000 in documented income depending on your other debts and down payment size."
    },
    {
      q: "Can I buy a house making $70,000 a year in Canada?",
      a: "Yes, earning $70,000 annually in Canada typically qualifies you for approximately a $280,000-$320,000 mortgage, allowing you to purchase a $350,000-$400,000 home with 20% down. Monthly gross income is $5,833. At 35% GDS ratio, you can afford $2,042/month in housing costs. With a $300,000 mortgage at 5.5%, your P&I is ~$1,843, leaving ~$200/month for property taxes and insurance. This works in markets like parts of Alberta, Saskatchewan, Atlantic Canada, and smaller Ontario cities. In expensive markets (Toronto, Vancouver, Victoria), $70,000 income limits you to condos or requires co-borrowers/larger down payments. Key: minimal other debts helpsâ€”car loans and credit card balances reduce your maximum mortgage significantly."
    },
    {
      q: "What's the 28/36 rule and does Canada use it?",
      a: "The 28/36 rule is a U.S. guideline: housing costs should be â‰¤28% of gross income (front-end ratio) and total debts â‰¤36% (back-end ratio). Canada uses similar but slightly different ratios: (1) Gross Debt Service (GDS)â€”housing costs should be â‰¤32-39% of gross income (varies by lender and insurer), and (2) Total Debt Service (TDS)â€”all debt payments should be â‰¤40-44% of gross income. Example with $6,000 monthly gross: Canada allows ~$1,920-2,340 for housing (32-39%) and ~$2,400-2,640 for all debts (40-44%). The U.S. 28/36 rule would allow $1,680 for housing and $2,160 for all debts. Canadian limits are generally slightly more generous, but the mortgage stress test offsets this by requiring qualification at higher interest rates."
    },
    {
      q: "How does the mortgage stress test affect how much I can borrow?",
      a: "Canada's mortgage stress test requires you to qualify at the higher of: (1) your contract rate + 2%, or (2) 5.25% (the minimum qualifying rate). This significantly reduces borrowing capacity. Example: $400,000 mortgage at 5.5% actual rate = $2,457/month payment. Stress test requires qualifying as if rate is 7.5% = $2,858/month (+$401/month or +16% higher). This means you need ~$13,700 more annual income to qualify, or you must borrow ~$60,000-80,000 less than you could without the stress test. The test reduces most buyers' maximum mortgage by 15-20%. While frustrating, it ensures you can still afford payments if rates rise at renewal. Uninsured mortgages (20%+ down) from some lenders may have slightly more flexibility."
    },
    {
      q: "What other factors affect mortgage qualification beyond income?",
      a: "Beyond income, key factors include: (1) Credit scoreâ€”minimum 600 for insured mortgages, 680+ for best rates; higher scores can reduce required income by qualifying for lower rates, (2) Down payment sizeâ€”20%+ avoids CMHC insurance and may reduce income requirements slightly; larger down = smaller mortgage, (3) Existing debtsâ€”car loans, credit cards, lines of credit all reduce maximum mortgage; every $400/month in other debt reduces mortgage capacity by ~$80,000-100,000, (4) Employment stabilityâ€”2+ years in same field preferred; job hoppers or recent career changes face scrutiny, (5) Property type/locationâ€”condos, rural properties, or properties needing repairs may require more income or larger down payments. Best strategy: minimize other debts, save 20%+ down, maintain stable employment, and keep credit score 700+ before applying."
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
            src="/images/articles/usda-loan-calculator-rural-home-payment-estimator.jpg"
            alt="USDA loan calculator showing income requirements for rural home financing and payment estimation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          How Much Income Do You Need to Buy a Home?
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>May 5, 2026</time>
          <span className="mx-3">â€¢</span>
          <span>9 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-2">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          
          {/* Introduction */}
          <div className="prose prose-slate prose-lg max-w-none">
            
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              <strong>The question keeps aspiring homeowners awake at night: "How much income do I actually need to buy a home?"</strong> In Canada, where the mortgage stress test can reduce purchasing power by 20-25%, understanding exactly how lenders calculate qualifying income is crucial for realistic house hunting.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              When Michael and Lisa started searching for their first home in Vancouver, they had $150,000 saved for a down payment and combined income of $130,000. They assumed they could afford a $625,000 home ($125,000 down, $500,000 mortgage). But when they applied for pre-approval, their broker delivered shocking news: they qualified for only $450,000 mortgageâ€”$50,000 short of their target. The stress test, regional property taxes, and Lisa's $380 car payment had derailed their plans.
            </p>


            {/* Section 1 */}
            <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">
              Understanding Canadian Mortgage Income Requirements
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              Canadian lenders use a fundamentally different approach than US lenders when calculating <strong>income needed for mortgage qualification</strong>. While US conventional loans use the 28/36 rule (28% housing, 36% total debt), Canada employs GDS and TDS ratios combined with the mandatory stress test.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              The GDS and TDS Rules in Canada
            </h3>

            <div className="bg-slate-50 border-l-4 border-slate-300 p-6 mb-8 rounded-r-lg">
              <p className="text-slate-900 font-semibold mb-4">GDS (Gross Debt Service) Ratio â€“ Maximum 32%</p>
              <p className="text-slate-700 mb-4">
                <strong>Formula:</strong> (Mortgage Principal + Interest + Property Taxes + Heating + 50% Condo Fees) Ã· Gross Monthly Income
              </p>
              <p className="text-slate-700 mb-6">
                This ratio measures housing costs alone. Even if you have zero other debts, your housing costs cannot exceed 32% of gross income.
              </p>

              <p className="text-slate-900 font-semibold mb-4">TDS (Total Debt Service) Ratio â€“ Maximum 42%</p>
              <p className="text-slate-700 mb-4">
                <strong>Formula:</strong> (GDS + All Other Debt Payments) Ã· Gross Monthly Income
              </p>
              <p className="text-slate-700">
                This includes housing PLUS car loans, student loans, credit card minimum payments, child support, alimony, and other loan obligations. You must satisfy both GDS and TDSâ€”whichever is more restrictive determines your maximum mortgage.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              The Stress Test: Canada's Unique Challenge
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              Since 2018, all Canadian homebuyers must pass the <strong>mortgage stress test</strong>â€”you qualify at the higher of (contract rate + 2%) or 5.25%. In 2026, with typical rates at 5.79%, you must qualify at 7.79%. This single rule reduces purchasing power by approximately 20-25% compared to qualifying at actual contract rates.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Real impact:</strong> Without the stress test, a buyer with $100,000 income and minimal debts could qualify for ~$450,000 mortgage. With the stress test, that drops to ~$360,000â€”a $90,000 reduction in purchasing power, or nearly $115,000 less home with 20% down.
            </p>


            <p className="text-slate-700 leading-relaxed mb-6">
              This comprehensive guide walks you through exactly <strong>how much income you need for mortgages from $200,000 to $1,000,000+</strong>, how Canadian lenders calculate qualifying income, and what strategies can boost your purchasing power.
            </p>

            {/* Section 2 */}
            <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">
              Income Needed by Mortgage Amount (Canada 2026)
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              Here's exactly what income you need for common mortgage amounts, calculated with 2026 stress test rates and typical costs:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="pb-3 pr-3 font-semibold text-slate-900">Mortgage Amount</th>
                    <th className="pb-3 pr-3 font-semibold text-slate-900">Monthly PITH</th>
                    <th className="pb-3 font-semibold text-slate-900">Income Needed Annually</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-3">$200,000</td>
                    <td className="py-2 pr-3">$1,956</td>
                    <td className="py-2">$73,350/year</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-3">$300,000</td>
                    <td className="py-2 pr-3">$2,834</td>
                    <td className="py-2">$106,275/year</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-3">$400,000</td>
                    <td className="py-2 pr-3">$3,711</td>
                    <td className="py-2">$139,163/year</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-3">$500,000</td>
                    <td className="py-2 pr-3">$4,589</td>
                    <td className="py-2">$172,088/year</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-3">$750,000</td>
                    <td className="py-2 pr-3">$6,684</td>
                    <td className="py-2">$250,650/year</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3">$1,000,000</td>
                    <td className="py-2 pr-3">$8,878</td>
                    <td className="py-2">$332,925/year</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-600 mt-3">
                Based on 7.79% stress test rate, 25-year amortization, property taxes $400-800/mo, heating $150/mo
              </p>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Real Example: Complete Income Calculation
            </h3>

            <p className="text-slate-700 leading-relaxed mb-4">
              Emma earns $70,000 annually in Edmonton. Here's her complete mortgage qualification calculation:
            </p>

            <div className="bg-slate-50 border-l-4 border-slate-300 p-6 mb-6 rounded-r-lg">
              <p className="font-semibold text-slate-900 mb-2">Gross monthly income: $5,833</p>
              <p className="font-semibold text-slate-900 mb-2">Maximum housing (32% GDS): $1,867/month</p>
              <p className="text-slate-700 mb-3">Less: Property tax $280 + Heating $135 = $415</p>
              <p className="text-slate-700 mb-3"><strong>Available for P&I: $1,452/month</strong></p>
              <p className="text-slate-700 mb-3">At 7.79% stress test rate: Supports <strong>$235,000 mortgage</strong></p>
              <p className="text-slate-700">With $60,000 down (25.5%): Can buy <strong>$295,000 home</strong></p>
            </div>



            {/* Section 3 */}
            <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">
              How Lenders Calculate Different Income Types
            </h2>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              W-2/Salaried Employees
            </h3>

            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Base salary:</strong> Full amount counts (verified with pay stubs and T4)</li>
              <li><strong>Bonuses/Commission:</strong> Must have 2-year history, averaged over 24 months</li>
              <li><strong>Overtime:</strong> Requires 2+ years consistency, averaged</li>
              <li><strong>Part-time/Second job:</strong> Counts if held 2+ years</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Self-Employed Income
            </h3>

            <p className="text-slate-700 leading-relaxed mb-4">
              Lenders average 2 years of net business income from tax returns:
            </p>

            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Formula:</strong> (Year 1 net income + Year 2 net income) Ã· 2</li>
              <li><strong>If declining:</strong> Use lower year only</li>
              <li><strong>Required docs:</strong> 2 years T1 + T2125 or T2, Notice of Assessment, current P&L</li>
              <li><strong>Minimum down payment:</strong> Often 20% required</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Rental Income
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              If buying a property with rental unit, lenders count 50-80% of gross rent toward qualifying income. Example: $2,000/month basement suite Ã— 65% = $1,300/month additional qualifying income, potentially increasing your maximum mortgage by $75,000-100,000.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Retirement Income
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              Accepted sources: CPP/OAS pensions, RRSP/RRIF withdrawals, company pensions, annuities. Must document 3+ years continuity. Lenders may limit amortization so mortgage matures by age 80-85.
            </p>

            {/* Section 4 */}
            <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">
              Regional Income Variations Across Canada
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              Income requirements vary significantly by region due to property taxes and housing costs:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
              <ul className="text-slate-700 space-y-3">
                <li><strong>Toronto/GTA:</strong> High property taxes ($600-900/mo) + condo fees mean $100K salary supports $310K-340K mortgage</li>
                <li><strong>Vancouver/Lower Mainland:</strong> Highest costs, $100K salary typically qualifies for $300K-330K mortgage</li>
                <li><strong>Calgary/Edmonton:</strong> Lower property taxes ($280-380/mo), $100K salary supports $350K-380K mortgage</li>
                <li><strong>Montreal:</strong> Moderate taxes, $100K salary qualifies for $330K-360K mortgage</li>
                <li><strong>Atlantic provinces:</strong> Lower costs, $100K salary can support $360K-390K mortgage</li>
              </ul>
            </div>



            {/* FAQ Section */}
            <h2 className="font-serif text-3xl font-bold text-slate-900 mt-16 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              
              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  1. How much income do you need to buy a $300,000 home?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  To buy a $300,000 home in Canada with 20% down ($60,000), you need a $240,000 mortgage, requiring approximately $90,000-$95,000 annual income with minimal other debts. At the 7.79% stress test rate, this mortgage costs $1,867/month P&I plus property taxes ($350/mo) and heating ($150/mo) = $2,367 total PITH. Dividing by 32% GDS maximum: $2,367 Ã· 0.32 = $7,397/month or $88,766 annually. If you have a car payment ($400/mo) or other debts, you'll need approximately $95,000-100,000 income to stay within the 42% TDS limit. With only 10% down, the mortgage becomes $270,000 plus CMHC insurance (3.1%), requiring approximately $100,000-105,000 income. Regional variations apply: lower property tax areas like Alberta might only require $85,000, while Toronto or Vancouver could need $98,000-102,000 due to higher municipal costs.
                </p>
              </div>

              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  2. How much income is needed for a $200,000 mortgage in Canada?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A $200,000 mortgage in Canada requires approximately $73,000-$78,000 annual income, depending on regional property taxes and your other debts. At the 7.79% stress test rate over 25 years, a $200,000 mortgage costs $1,556/month. Add property taxes ($300-450/month depending on location) and heating ($120-150/month), bringing total PITH to $1,976-2,156/month. Using the 32% GDS ratio: minimum $74,250-80,850 annual income required. If you have $400/month in other debts (car, student loans), the TDS ratio becomes restrictive, requiring approximately $78,000-83,000 income. This mortgage typically supports purchasing a $250,000-$270,000 home with 20% down payment. The stress test is significant hereâ€”without it, you could qualify with just $58,000-62,000 income at the actual 5.79% contract rate, demonstrating how the stress test reduces affordability by about 20-25% for most buyers.
                </p>
              </div>

              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  3. What is debt-to-income ratio and how is it calculated?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Debt-to-income (DTI) ratio measures your monthly debt payments as a percentage of gross monthly income. Canada uses two ratios: GDS (Gross Debt Service) for housing costs only, and TDS (Total Debt Service) for all debts. GDS calculation: (mortgage P&I + property taxes + heating + 50% condo fees) Ã· gross monthly incomeâ€”must be â‰¤32%. TDS calculation: (all GDS costs + car payments + student loans + credit card minimums + child support + other loans) Ã· gross monthly incomeâ€”must be â‰¤42%. Example: $100,000 income = $8,333/month gross. Housing costs of $2,500 = 30% GDS âœ“. Add $600 other debts = $3,100 total Ã· $8,333 = 37.2% TDS âœ“. Both ratios must pass. If either exceeds limits, you must reduce home price, pay off debts, or increase income. These ratios protect borrowers from overextending and lenders from default risk. Higher ratios (up to 44% TDS) possible with compensating factors like excellent credit (760+), large down payment (25%+), or significant reserves (12+ months payments saved).
                </p>
              </div>

              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  4. Can I use my spouse's income if they're not on the mortgage?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  In Canada, you cannot use a spouse's income for mortgage qualification unless they are also listed as a co-borrower on the mortgage and title. Both income and liability must matchâ€”if you want to count their income, they must be equally responsible for the debt. If your spouse has poor credit or high debts that would hurt qualification, you might choose to apply solo using only your income (though you'll qualify for less). However, if your spouse has good credit and income, adding them as co-borrower combines your incomes, significantly increasing purchasing power. Example: You earn $75,000, spouse earns $60,000. Combined $135,000 income supports $510,000+ mortgage vs. $290,000 mortgage on your income aloneâ€”nearly double the purchasing power. Note: Common-law partners are treated the same as married spouses. Non-married co-habitants can co-apply as joint borrowers even without legal relationship, but both must be on title and mortgage.
                </p>
              </div>



              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  5. How is self-employment income calculated for mortgages?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Self-employed borrowers' income is calculated by averaging net business income from two years of tax returns. Lenders use your T1 General personal tax return plus T2125 (sole proprietor/partnership) or T2 (corporation) showing business income after expenses. Formula: (2024 net income + 2025 net income) Ã· 2 = qualifying income. If income is declining (2025 lower than 2024), lenders typically use only the lower year. Example: 2024 net $82,000, 2025 net $88,000 = $85,000 qualifying income. If 2025 was $78,000, lenders use $78,000 only. Required documentation: 2 years personal and business tax returns, Notices of Assessment from CRA, year-to-date profit & loss statement, business license, sometimes CPA letter. Many lenders require 20% down minimum for self-employed buyers. Some allow adding back non-cash expenses like depreciation. Key strategy: minimize aggressive tax write-offs in the 2 years before applyingâ€”while deductions save tax, they reduce net income and hurt mortgage qualification. Alternative "stated income" programs exist with higher rates (5.5-7% vs. 5.79% standard) for those who can't document traditional income.
                </p>
              </div>

              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  6. Do you need 2 years at the same job to qualify?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  No, you don't need 2 years at the exact same job, but lenders prefer 2 years of stable employment history in the same field or industry. What matters is consistency of income, not employer name. Acceptable scenarios: (1) Job change within same fieldâ€”e.g., moving from one accounting firm to another counts as continuous employment. (2) Promotion or transfer within same company. (3) Career progression in same industryâ€”e.g., moving from junior to senior developer. Problematic scenarios: (1) Frequent job-hopping across unrelated fields. (2) Gaps in employment (3+ months unexplained). (3) Recent career change to lower-paying field. Exceptions: Recent graduates (less than 2 years post-graduation) can qualify with job offer letter in their field of study. If you've been at current job less than 3 months, some lenders require probation period to end. Self-employed borrowers need 2 years minimum in business. Contract workers need 2-year history with regular renewals. The key principle: lenders want confidence your income will continueâ€”consistency matters more than specific employer tenure.
                </p>
              </div>

              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  7. What income sources count toward mortgage qualification?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Acceptable income sources in Canada: (1) Employment incomeâ€”base salary, guaranteed bonuses (2-year average), commission (2-year average), overtime (if consistent 2+ years). (2) Self-employment incomeâ€”2-year tax return average, net after expenses. (3) Rental incomeâ€”50-80% of gross rent from property being purchased or existing rentals (requires lease/tax documentation). (4) Pension incomeâ€”CPP, OAS, company pensions, RRSP/RRIF withdrawals with 3+ year continuity. (5) Investment incomeâ€”dividends, interest if consistent and continuing (usually need 2-year history). (6) Disability/long-term benefitsâ€”if permanent and documented. (7) Child support/alimonyâ€”if court-ordered and 3+ years remaining. (8) Part-time employmentâ€”if 2+ year history. NOT accepted: (1) One-time windfalls, bonuses, or commissions. (2) Unreliable or sporadic income. (3) Cash income without tax documentation. (4) Gifts (can be used for down payment with gift letter, but not qualifying income). (5) Investment gains/losses (too volatile). Best practice: document everything for 2+ years before applying. The more conventional your income sources, the easier qualification becomes.
                </p>
              </div>



              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  8. How much income for FHA loan vs conventional loan?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  FHA loans (US program, not available in Canada) use slightly more lenient ratios than conventional loans: 31% front-end (housing) and 43% back-end (total debt) vs. conventional 28%/36%. This means FHA borrowers can qualify with approximately 10-15% less income for the same mortgage amount. Example: $300,000 home with 3.5% down = $289,500 mortgage. FHA with 31% ratio requires ~$95,000 income; conventional with 28% ratio requires ~$105,000 income. However, FHA requires mortgage insurance for life of loan (unless refinanced), increasing monthly costs. In Canada, the closest equivalent is high-ratio insured mortgages (under 20% down) through CMHC, Sagen, or Canada Guarantyâ€”these use standard 32% GDS / 42% TDS ratios plus stress test, similar to conventional mortgages. Canadian first-time buyers with 5-19.99% down pay CMHC insurance (2.8-4.0% of mortgage, added to loan balance) but qualify under same income rules as 20%+ down buyers. Bottom line: Canada doesn't differentiate income requirements by loan type the way the US does with FHA vs. conventionalâ€”the stress test applies universally.
                </p>
              </div>

            </div>

            {/* Conclusion */}
            <div className="mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                Calculate Your Home Purchase Income Requirements
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Understanding exactly how much income you need to buy a home in Canada is essential for realistic house hunting. The stress test, GDS/TDS ratios, and regional variations all impact your specific qualificationâ€”but with the right income calculation, you can confidently determine your budget.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Whether you're earning $70,000, $120,000, or targeting a $500,000+ mortgage, knowing your qualifying income helps you avoid disappointment and focus on homes within reach. Use our <Link href="/income-requirement-calculator-how-much-you-need" className="text-indigo-600 hover:text-indigo-700 font-medium">income requirement calculator</Link> to determine what mortgage your salary supports, or explore our <Link href="/mortgage-payment-calculator-estimate-monthly-costs" className="text-indigo-600 hover:text-indigo-700 font-medium">mortgage payment calculator</Link> to estimate monthly costs.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Start planning your home purchase today with accurate income qualification.
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="p-6 bg-slate-50 rounded-lg">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
              Related Articles
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/income-requirement-calculator-how-much-you-need"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Income Requirement Calculator: How Much You Need
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage-qualification-calculator-do-you-qualify"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Mortgage Qualification Calculator: Do You Qualify?
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage-payment-calculator-estimate-monthly-costs"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Mortgage Payment Calculator: Estimate Monthly Costs
                </Link>
              </li>
              <li>
                <Link
                  href="/how-to-qualify-for-a-mortgage-key-requirements"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  How to Qualify for a Mortgage: Key Requirements
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-8">
                    {faq.q}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}




