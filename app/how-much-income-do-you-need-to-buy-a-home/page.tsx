"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HowMuchIncomeArticle() {
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
            src="/images/articles/usda-loan-eligibility-income-property-requirements.jpg"
            alt="How much income to buy a home - complete qualification guide"
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
          <span className="mx-3">•</span>
          <span>9 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          
          {/* Introduction */}
          <div className="prose prose-slate prose-lg max-w-none">
            
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              <strong>The question keeps aspiring homeowners awake at night: "How much income do I actually need to buy a home?"</strong> In Canada, where the mortgage stress test can reduce purchasing power by 20-25%, understanding exactly how lenders calculate qualifying income is crucial for realistic house hunting.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              When Michael and Lisa started searching for their first home in Vancouver, they had $150,000 saved for a down payment and combined income of $130,000. They assumed they could afford a $625,000 home ($125,000 down, $500,000 mortgage). But when they applied for pre-approval, their broker delivered shocking news: they qualified for only $450,000 mortgage—$50,000 short of their target. The stress test, regional property taxes, and Lisa's $380 car payment had derailed their plans.
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

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8 rounded-r-lg">
              <p className="text-slate-900 font-semibold mb-4">GDS (Gross Debt Service) Ratio – Maximum 32%</p>
              <p className="text-slate-700 mb-4">
                <strong>Formula:</strong> (Mortgage Principal + Interest + Property Taxes + Heating + 50% Condo Fees) ÷ Gross Monthly Income
              </p>
              <p className="text-slate-700 mb-6">
                This ratio measures housing costs alone. Even if you have zero other debts, your housing costs cannot exceed 32% of gross income.
              </p>

              <p className="text-slate-900 font-semibold mb-4">TDS (Total Debt Service) Ratio – Maximum 42%</p>
              <p className="text-slate-700 mb-4">
                <strong>Formula:</strong> (GDS + All Other Debt Payments) ÷ Gross Monthly Income
              </p>
              <p className="text-slate-700">
                This includes housing PLUS car loans, student loans, credit card minimum payments, child support, alimony, and other loan obligations. You must satisfy both GDS and TDS—whichever is more restrictive determines your maximum mortgage.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              The Stress Test: Canada's Unique Challenge
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              Since 2018, all Canadian homebuyers must pass the <strong>mortgage stress test</strong>—you qualify at the higher of (contract rate + 2%) or 5.25%. In 2026, with typical rates at 5.79%, you must qualify at 7.79%. This single rule reduces purchasing power by approximately 20-25% compared to qualifying at actual contract rates.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Real impact:</strong> Without the stress test, a buyer with $100,000 income and minimal debts could qualify for ~$450,000 mortgage. With the stress test, that drops to ~$360,000—a $90,000 reduction in purchasing power, or nearly $115,000 less home with 20% down.
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

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6 rounded-r-lg">
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
              <li><strong>Formula:</strong> (Year 1 net income + Year 2 net income) ÷ 2</li>
              <li><strong>If declining:</strong> Use lower year only</li>
              <li><strong>Required docs:</strong> 2 years T1 + T2125 or T2, Notice of Assessment, current P&L</li>
              <li><strong>Minimum down payment:</strong> Often 20% required</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Rental Income
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              If buying a property with rental unit, lenders count 50-80% of gross rent toward qualifying income. Example: $2,000/month basement suite × 65% = $1,300/month additional qualifying income, potentially increasing your maximum mortgage by $75,000-100,000.
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
              
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  1. How much income do you need to buy a $300,000 home?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  To buy a $300,000 home in Canada with 20% down ($60,000), you need a $240,000 mortgage, requiring approximately $90,000-$95,000 annual income with minimal other debts. At the 7.79% stress test rate, this mortgage costs $1,867/month P&I plus property taxes ($350/mo) and heating ($150/mo) = $2,367 total PITH. Dividing by 32% GDS maximum: $2,367 ÷ 0.32 = $7,397/month or $88,766 annually. If you have a car payment ($400/mo) or other debts, you'll need approximately $95,000-100,000 income to stay within the 42% TDS limit. With only 10% down, the mortgage becomes $270,000 plus CMHC insurance (3.1%), requiring approximately $100,000-105,000 income. Regional variations apply: lower property tax areas like Alberta might only require $85,000, while Toronto or Vancouver could need $98,000-102,000 due to higher municipal costs.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  2. How much income is needed for a $200,000 mortgage in Canada?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A $200,000 mortgage in Canada requires approximately $73,000-$78,000 annual income, depending on regional property taxes and your other debts. At the 7.79% stress test rate over 25 years, a $200,000 mortgage costs $1,556/month. Add property taxes ($300-450/month depending on location) and heating ($120-150/month), bringing total PITH to $1,976-2,156/month. Using the 32% GDS ratio: minimum $74,250-80,850 annual income required. If you have $400/month in other debts (car, student loans), the TDS ratio becomes restrictive, requiring approximately $78,000-83,000 income. This mortgage typically supports purchasing a $250,000-$270,000 home with 20% down payment. The stress test is significant here—without it, you could qualify with just $58,000-62,000 income at the actual 5.79% contract rate, demonstrating how the stress test reduces affordability by about 20-25% for most buyers.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  3. What is debt-to-income ratio and how is it calculated?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Debt-to-income (DTI) ratio measures your monthly debt payments as a percentage of gross monthly income. Canada uses two ratios: GDS (Gross Debt Service) for housing costs only, and TDS (Total Debt Service) for all debts. GDS calculation: (mortgage P&I + property taxes + heating + 50% condo fees) ÷ gross monthly income—must be ≤32%. TDS calculation: (all GDS costs + car payments + student loans + credit card minimums + child support + other loans) ÷ gross monthly income—must be ≤42%. Example: $100,000 income = $8,333/month gross. Housing costs of $2,500 = 30% GDS ✓. Add $600 other debts = $3,100 total ÷ $8,333 = 37.2% TDS ✓. Both ratios must pass. If either exceeds limits, you must reduce home price, pay off debts, or increase income. These ratios protect borrowers from overextending and lenders from default risk. Higher ratios (up to 44% TDS) possible with compensating factors like excellent credit (760+), large down payment (25%+), or significant reserves (12+ months payments saved).
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  4. Can I use my spouse's income if they're not on the mortgage?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  In Canada, you cannot use a spouse's income for mortgage qualification unless they are also listed as a co-borrower on the mortgage and title. Both income and liability must match—if you want to count their income, they must be equally responsible for the debt. If your spouse has poor credit or high debts that would hurt qualification, you might choose to apply solo using only your income (though you'll qualify for less). However, if your spouse has good credit and income, adding them as co-borrower combines your incomes, significantly increasing purchasing power. Example: You earn $75,000, spouse earns $60,000. Combined $135,000 income supports $510,000+ mortgage vs. $290,000 mortgage on your income alone—nearly double the purchasing power. Note: Common-law partners are treated the same as married spouses. Non-married co-habitants can co-apply as joint borrowers even without legal relationship, but both must be on title and mortgage.
                </p>
              </div>



              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  5. How is self-employment income calculated for mortgages?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Self-employed borrowers' income is calculated by averaging net business income from two years of tax returns. Lenders use your T1 General personal tax return plus T2125 (sole proprietor/partnership) or T2 (corporation) showing business income after expenses. Formula: (2024 net income + 2025 net income) ÷ 2 = qualifying income. If income is declining (2025 lower than 2024), lenders typically use only the lower year. Example: 2024 net $82,000, 2025 net $88,000 = $85,000 qualifying income. If 2025 was $78,000, lenders use $78,000 only. Required documentation: 2 years personal and business tax returns, Notices of Assessment from CRA, year-to-date profit & loss statement, business license, sometimes CPA letter. Many lenders require 20% down minimum for self-employed buyers. Some allow adding back non-cash expenses like depreciation. Key strategy: minimize aggressive tax write-offs in the 2 years before applying—while deductions save tax, they reduce net income and hurt mortgage qualification. Alternative "stated income" programs exist with higher rates (5.5-7% vs. 5.79% standard) for those who can't document traditional income.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  6. Do you need 2 years at the same job to qualify?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  No, you don't need 2 years at the exact same job, but lenders prefer 2 years of stable employment history in the same field or industry. What matters is consistency of income, not employer name. Acceptable scenarios: (1) Job change within same field—e.g., moving from one accounting firm to another counts as continuous employment. (2) Promotion or transfer within same company. (3) Career progression in same industry—e.g., moving from junior to senior developer. Problematic scenarios: (1) Frequent job-hopping across unrelated fields. (2) Gaps in employment (3+ months unexplained). (3) Recent career change to lower-paying field. Exceptions: Recent graduates (less than 2 years post-graduation) can qualify with job offer letter in their field of study. If you've been at current job less than 3 months, some lenders require probation period to end. Self-employed borrowers need 2 years minimum in business. Contract workers need 2-year history with regular renewals. The key principle: lenders want confidence your income will continue—consistency matters more than specific employer tenure.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  7. What income sources count toward mortgage qualification?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Acceptable income sources in Canada: (1) Employment income—base salary, guaranteed bonuses (2-year average), commission (2-year average), overtime (if consistent 2+ years). (2) Self-employment income—2-year tax return average, net after expenses. (3) Rental income—50-80% of gross rent from property being purchased or existing rentals (requires lease/tax documentation). (4) Pension income—CPP, OAS, company pensions, RRSP/RRIF withdrawals with 3+ year continuity. (5) Investment income—dividends, interest if consistent and continuing (usually need 2-year history). (6) Disability/long-term benefits—if permanent and documented. (7) Child support/alimony—if court-ordered and 3+ years remaining. (8) Part-time employment—if 2+ year history. NOT accepted: (1) One-time windfalls, bonuses, or commissions. (2) Unreliable or sporadic income. (3) Cash income without tax documentation. (4) Gifts (can be used for down payment with gift letter, but not qualifying income). (5) Investment gains/losses (too volatile). Best practice: document everything for 2+ years before applying. The more conventional your income sources, the easier qualification becomes.
                </p>
              </div>



              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  8. How much income for FHA loan vs conventional loan?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  FHA loans (US program, not available in Canada) use slightly more lenient ratios than conventional loans: 31% front-end (housing) and 43% back-end (total debt) vs. conventional 28%/36%. This means FHA borrowers can qualify with approximately 10-15% less income for the same mortgage amount. Example: $300,000 home with 3.5% down = $289,500 mortgage. FHA with 31% ratio requires ~$95,000 income; conventional with 28% ratio requires ~$105,000 income. However, FHA requires mortgage insurance for life of loan (unless refinanced), increasing monthly costs. In Canada, the closest equivalent is high-ratio insured mortgages (under 20% down) through CMHC, Sagen, or Canada Guaranty—these use standard 32% GDS / 42% TDS ratios plus stress test, similar to conventional mortgages. Canadian first-time buyers with 5-19.99% down pay CMHC insurance (2.8-4.0% of mortgage, added to loan balance) but qualify under same income rules as 20%+ down buyers. Bottom line: Canada doesn't differentiate income requirements by loan type the way the US does with FHA vs. conventional—the stress test applies universally.
                </p>
              </div>

            </div>

            {/* Conclusion */}
            <div className="mt-16 p-8 bg-gradient-to-br from-indigo-50 to-slate-50 rounded-xl border border-indigo-100">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                Calculate Your Home Purchase Income Requirements
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Understanding exactly how much income you need to buy a home in Canada is essential for realistic house hunting. The stress test, GDS/TDS ratios, and regional variations all impact your specific qualification—but with the right income calculation, you can confidently determine your budget.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Whether you're earning $70,000, $120,000, or targeting a $500,000+ mortgage, knowing your qualifying income helps you avoid disappointment and focus on homes within reach. Use our <Link href="/income-requirement-calculator-how-much-you-need" className="text-indigo-600 hover:text-indigo-700 font-medium">income requirement calculator</Link> to determine what mortgage your salary supports, or explore our <Link href="/mortgage-payment-calculator-estimate-monthly-costs" className="text-indigo-600 hover:text-indigo-700 font-medium">mortgage payment calculator</Link> to estimate monthly costs.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Start planning your home purchase today with accurate income qualification.
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-12 border-t border-slate-200 pt-8">
              <h3 className="font-serif text-xl font-semibold text-slate-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/income-requirement-calculator-how-much-you-need" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  → Income Requirement Calculator
                </Link>
                <Link href="/mortgage-payment-calculator-estimate-monthly-costs" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  → Mortgage Payment Calculator
                </Link>
                <Link href="/rent-vs-buy-calculator-which-costs-less" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  → Rent vs Buy Calculator
                </Link>
                <Link href="/fha-loan-requirements-down-payment-credit-score" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  → Mortgage Qualification Requirements
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </div>
  );
}


