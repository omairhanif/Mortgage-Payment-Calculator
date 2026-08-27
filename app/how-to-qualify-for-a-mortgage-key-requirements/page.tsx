"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

export default function HowToQualifyForMortgageArticle() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "What's the minimum credit score to qualify for a mortgage in Canada?",
      a: "Most Canadian banks require minimum 600 credit score for insured mortgages (under 20% down) and 650+ for conventional mortgages (20%+ down). However, scores below 680 typically result in higher interest rates. Real example: A Vancouver buyer with 625 credit score qualified for a $450,000 mortgage at 5.8% through TD, while her friend with 740 score got 5.1% at BMO—a 0.7% difference costing ~$145/month more. Navy Federal Credit Union (for US military members) has similar minimums around 620. If your score is below 600, consider alternative lenders, but expect rates 1.5-3% higher than prime."
    },
    {
      q: "How much income do I need to buy a $400,000 home in Ontario?",
      a: "For a $400,000 home in Ontario with 10% down ($360,000 mortgage), you typically need $90,000-$95,000 annual household income with minimal debt. Calculation: $360,000 loan at 5.5% = ~$2,045/month payment + $350 property tax + $125 insurance = $2,520 housing costs. At 32% GDS maximum, you need $7,875 monthly income ($94,500 annually). Real case: A Mississauga teacher earning $92,000 qualified for a $395,000 purchase using a free mortgage qualification calculator, then confirmed with her BMO pre-approval. With existing $600/month debt, her TDS ratio was 40%, within the 42-44% limit."
    },
    {
      q: "Can I qualify for a mortgage with student loans?",
      a: "Yes, but student loans reduce your maximum qualification. Lenders calculate 3% of your total student loan balance as a monthly obligation, even if you're in deferment. Example: $50,000 student loan = $1,500/month in qualification calculations. A Calgary graduate earning $78,000 initially qualified for $370,000. After aggressively paying down $20,000 in student debt over 18 months, she requalified for $425,000—a $55,000 increase. Using a mortgage qualification calculator Alberta helped her model payoff scenarios. Best strategy: pay down high-balance student loans before applying, or wait until they're fully paid off if possible."
    },
    {
      q: "Do I need 20% down to avoid CMHC insurance?",
      a: "Yes—20% down payment avoids CMHC (Canada Mortgage and Housing Corporation) insurance, which costs 0.6-4% of your mortgage amount. With less than 20% down, you pay insurance premiums. Example: $450,000 purchase with 10% down ($405,000 mortgage) requires ~$16,200 CMHC premium (4%), increasing your mortgage to $421,200. A Surrey couple used a mortgage qualification calculator BC to compare: 10% down = $421,200 loan at $2,396/month vs 20% down = $360,000 loan at $2,046/month. The 20% down saved them $350/month but required an extra $45,000 upfront."
    }
  ];

  const faqs2 = [
    {
      q: "How long does mortgage qualification take?",
      a: "Pre-qualification (soft inquiry, no documentation) takes 15-30 minutes using free calculators or speaking with a lender by phone. Full pre-approval (hard credit check, income/employment verification) takes 2-10 business days depending on document complexity. Real timeline example from Ontario: A Toronto couple submitted their TD pre-approval application Monday morning with T4s, pay stubs, and bank statements. They received conditional approval Wednesday afternoon (3 days), then final pre-approval Friday after employment verification (5 total days). Self-employed applicants typically wait 7-10 days due to additional tax return review."
    },
    {
      q: "Can I qualify if I'm self-employed?",
      a: "Yes, but documentation requirements are stricter. Most Canadian banks (TD, BMO, Scotiabank, RBC) require 2 years of tax returns (Notice of Assessments) showing consistent income. They average your net business income over 2 years. Real example: A Toronto consultant showed $88,000 income (Year 1) and $112,000 (Year 2) on NOAs. Banks averaged to $100,000 for qualification—she qualified for $430,000. BMO was more flexible, accepting 1 year of strong income for her industry. Alternative lenders (B-lenders) accept 1 year of returns but charge 0.5-1.5% higher rates. Use mortgage qualification calculator free tools first, then speak with a mortgage broker experienced with self-employed borrowers."
    },
    {
      q: "What's the stress test and how does it affect qualification?",
      a: "The federal mortgage stress test requires qualification at a rate 2% higher than your actual rate, or 5.25% (whichever is higher). This reduces borrowing power by ~20%. Example: A BC couple earning $110,000 would qualify for $580,000 at their actual 4.9% rate, but the stress test (qualifying at 6.9%) reduced them to $465,000—$115,000 less. A Victoria mortgage broker explained: 'The stress test protects buyers from overleveraging when rates rise.' Exceptions: 20%+ down payment with some alternative lenders, refinancing your existing lender, or uninsured mortgages over $1 million (though rare). Always test qualification using the higher stress test rate."
    },
    {
      q: "Do TD and BMO have different qualification requirements?",
      a: "Yes—while all Canadian banks follow federal stress test rules and GDS/TDS guidelines, each has specific overlays. TD typically requires 680+ credit for best rates and prefers 2-year employment history. BMO is more flexible with self-employed borrowers (1 year tax returns sometimes acceptable) and new immigrants (accepts foreign income documentation). Scotiabank's mortgage qualification calculator trinidad includes international buyers. Navy Federal (US military) has unique VA loan programs. Real example: A self-employed Toronto designer was declined by TD (needed 2 years self-employment) but approved by BMO with 15 months of strong tax records. Always compare multiple lenders."
    }
  ];

  const allFaqs = [...faqs, ...faqs2];

  return (
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
            src="/images/articles/bridge-loans-explained-costs-terms-when-to-use-them.jpg"
            alt="How to qualify for a mortgage with bridge loan options"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          How to Qualify for a Mortgage: Key Requirements
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>August 27, 2026</time>
          <span className="mx-3">•</span>
          <span>14 min read</span>
        </div>
      </div>

      {/* Banner Ad - Standardized Placement */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8 mb-8">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
            <span className="text-xs text-slate-400 font-medium">Banner Ad (728×90)</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            
            {/* Introduction */}
            <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              Michael, a 28-year-old software developer from Vancouver, assumed his $95,000 salary would easily qualify him for a $600,000 mortgage. He had $60,000 saved for a 10% down payment, no credit card debt, and a steady job for three years. When he applied to TD Bank, he was shocked to receive a pre-approval for only $465,000—$135,000 less than expected. The culprit? His $800/month car payment, $350/month student loan, and Vancouver's high property taxes pushed his TDS (Total Debt Service) ratio to 46%, exceeding TD's 44% maximum. After using a mortgage qualification calculator BC and consulting with a mortgage broker, he paid off his car loan early and requalified for $540,000 three months later.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Qualifying for a mortgage in Canada requires meeting specific financial criteria that go far beyond simply having a job and down payment. Canadian lenders assess your income, debts, credit score, employment history, and down payment amount through strict debt-to-income ratio formulas—primarily GDS (Gross Debt Service) and TDS (Total Debt Service) ratios. This comprehensive guide breaks down exactly what you need to qualify, with real examples from Ontario, BC, and Alberta showing how different income levels and debt situations affect your maximum mortgage amount. Whether you're checking requirements for TD, BMO, or other Canadian banks, understanding these qualification standards helps you prepare before applying.
            </p>

            {/* Section 1 */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Income Requirements: How Much Do You Need to Earn?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Income is the foundation of mortgage qualification. Canadian lenders need to verify that you earn enough to cover housing costs (mortgage payment, property taxes, heating) plus all other debt obligations without exceeding specific debt-to-income ratio thresholds. Most banks require proof of stable income for at least 2 years, though employment type, income sources, and documentation requirements vary significantly between salaried employees and self-employed borrowers.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Acceptable income sources for mortgage qualification:</strong> Salary and wages (easiest to verify with T4s and pay stubs), self-employment income (requires 2 years of Notice of Assessments showing consistent or growing revenue), rental income (typically 50-80% counted by lenders), pension and retirement income (fully counted if stable), child support/alimony (if documented and expected to continue 3+ years), and investment income (dividends, interest—requires consistent history). Commission-based income requires 2-year averaging, and overtime/bonus income is typically averaged over 2 years as well.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Real example from Ontario:</strong> Patricia, a registered nurse from Hamilton earning $84,000 base salary plus $8,000 average annual overtime, wanted to buy a $450,000 home. BMO averaged her overtime over 2 years, giving her $92,000 qualifying income. With 10% down ($405,000 mortgage) and minimal debt, her GDS ratio was 29% and TDS 32%—well within limits. She qualified for $420,000 total mortgage. Her brother, a self-employed contractor showing $78,000 (Year 1) and $96,000 (Year 2) on tax returns, averaged to $87,000 for qualification. Despite earning similar income, he qualified for $390,000 due to banks' conservative treatment of self-employed income. Both used mortgage qualification calculator Ontario tools to estimate before applying.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              For simple interest (rarely used in consumer loans), you would pay $500 per year on that $10,000—calculated as $10,000 × 0.05 = $500. Most consumer loans use compound or amortized interest, where interest is calculated on the remaining balance each payment period. As you pay down the principal, the interest portion of each payment decreases while the principal portion increases. This is why early mortgage payments are mostly interest, while later payments are mostly principal.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Interest rates appear prominently in loan advertisements, promotional materials, and initial quotes because they're straightforward and easy to understand. A lower interest rate means less interest accrues on your balance—but it doesn't account for upfront fees, origination charges, discount points, or closing costs that can significantly affect your total borrowing expense. This is where APR becomes essential for accurate comparison.
            </p>

            {/* Section 2: What Is APR */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              What Is APR (Annual Percentage Rate)?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              APR—Annual Percentage Rate—represents the total annual cost of borrowing, expressed as a percentage. Unlike the interest rate, which only covers the cost of borrowing the principal, APR includes the interest rate plus mandatory fees and costs associated with obtaining the loan. Think of APR as the "all-in" cost that reflects what you actually pay when all charges are factored in and spread over the loan term.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>What APR includes:</strong>
            </p>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-4 ml-4">
              <li><strong>Interest charges</strong> based on the stated interest rate</li>
              <li><strong>Origination fees</strong> (the lender's charge to process your loan)</li>
              <li><strong>Discount points</strong> (upfront fees paid to reduce your interest rate)</li>
              <li><strong>Broker fees</strong> (if a mortgage broker arranged your loan)</li>
              <li><strong>Prepaid interest</strong> (interest from closing date to first payment)</li>
              <li><strong>Some closing costs</strong> that are required to obtain the loan</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>What APR typically excludes:</strong>
            </p>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-4 ml-4">
              <li>Appraisal fees</li>
              <li>Title insurance and title search fees</li>
              <li>Home inspection costs</li>
              <li>Credit report fees</li>
              <li>Attorney fees (in some cases)</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Because APR includes both interest and certain fees, it is mathematically impossible for APR to be lower than the interest rate—APR must always be equal to or higher. When you use an APR calculator (whether labeled as an effective APR calculator, actual APR calculator, or simple APR calculator), the tool computes the equivalent annual rate that accounts for all these financed costs spread over your repayment term. The federal Truth in Lending Act requires lenders to disclose APR on most consumer loans, creating a standardized comparison metric that helps borrowers evaluate competing offers accurately.
            </p>

            {/* Section 3: Key Differences with Example */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Key Differences: Interest Rate vs APR
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              To understand why these two numbers matter, let's examine two hypothetical personal loan offers side by side. Both are for the same amount and term, but the fee structures differ—and that's where APR reveals the truth.
            </p>

            {/* Comparison Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Hypothetical Loan Comparison</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Loan Offer A */}
                <div className="bg-white border border-slate-300 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-600 mb-3">Loan Offer A</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Loan Amount:</strong> $20,000</li>
                    <li><strong>Interest Rate:</strong> 5.5%</li>
                    <li><strong>Origination Fee:</strong> $0</li>
                    <li><strong>Term:</strong> 5 years (60 months)</li>
                    <li className="pt-2 border-t border-slate-200"><strong>APR:</strong> 5.5%</li>
                    <li><strong>Monthly Payment:</strong> $380.44</li>
                    <li><strong>Total Interest Paid:</strong> $2,826.40</li>
                    <li><strong>Total Cost:</strong> $22,826.40</li>
                  </ul>
                </div>

                {/* Loan Offer B */}
                <div className="bg-white border border-slate-300 rounded-lg p-4">
                  <h4 className="font-bold text-red-600 mb-3">Loan Offer B</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Loan Amount:</strong> $20,000</li>
                    <li><strong>Interest Rate:</strong> 5.0%</li>
                    <li><strong>Origination Fee:</strong> $800 (4%)</li>
                    <li><strong>Term:</strong> 5 years (60 months)</li>
                    <li className="pt-2 border-t border-slate-200"><strong>APR:</strong> 5.84%</li>
                    <li><strong>Monthly Payment:</strong> $377.42</li>
                    <li><strong>Total Interest Paid:</strong> $2,845.20</li>
                    <li><strong>Total Cost:</strong> $23,645.20</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded">
                <p className="text-sm text-slate-700 font-semibold">Verdict: Loan Offer A costs $818.80 less over the life of the loan despite the higher interest rate.</p>
              </div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>What this comparison reveals:</strong>
            </p>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-6 ml-4">
              <li><strong>Interest rate alone is misleading:</strong> Offer B advertises a lower 5.0% rate, but the $800 origination fee increases the effective borrowing cost to 5.84% APR—higher than Offer A's 5.5% rate with no fees.</li>
              <li><strong>APR reveals true cost:</strong> When you compare the APRs (5.5% vs 5.84%), you immediately see that Offer A costs less annually and over the full term.</li>
              <li><strong>Total cost matters most:</strong> Over 5 years, you pay $22,826 total for Offer A versus $23,645 for Offer B. That $800 origination fee plus slightly higher effective interest costs you an extra $818.80.</li>
              <li><strong>Monthly payment can deceive:</strong> Offer B's monthly payment ($377.42) is slightly lower than Offer A's ($380.44), but you pay more total—because the fee is financed into the loan, extending the cost over 60 months plus interest charges on that fee.</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Bottom line:</strong> The interest rate shows the cost of borrowing the principal. APR shows the cost of borrowing the principal plus the cost of all mandatory fees spread over the loan term. When shopping for loans, always compare APRs for accurate cost comparison—but only between loans of the same type and term length.
            </p>
            {/* Section 4: APR Across Loan Types */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              How APR Differs Across Loan Types
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              APR varies dramatically depending on the loan category because each type of loan carries different risk profiles, collateral requirements, and fee structures. Understanding these differences helps you evaluate whether a specific APR is competitive for your situation.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Personal Loans: Unsecured Borrowing
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Personal loans are typically unsecured (no collateral required), making them higher risk for lenders. APRs generally range from 6% to 36% depending on your credit score, income, and the lender's policies. Online lenders, banks, and credit unions all offer personal loans, and an APR calculator personal loan tool can help you compare offers quickly by entering your loan amount, rate, fees, and term.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical example:</strong> You need $15,000 for home improvements. Lender quotes 8% interest rate with a 3% origination fee ($450). Your effective APR would be approximately 8.9%—the interest rate plus the annualized cost of the fee over your chosen term. If another lender offers 8.5% with no fee, that second option costs less despite the slightly higher rate.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Auto Loans: Secured by Vehicle
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Auto loans are secured by the vehicle, reducing lender risk and typically resulting in lower APRs—often 3% to 15% depending on whether you're financing new or used, your credit score, and loan term. Dealerships, banks, credit unions, and online lenders all offer auto financing. A real APR calculator car loan tool helps compare dealer financing (which may include dealer fees) against direct lender offers.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical example:</strong> You're financing a $25,000 vehicle over 60 months. The dealer offers 4.0% interest plus $1,500 in fees (documentation, acquisition, etc.). Your APR works out to approximately 4.8%. A credit union offers 4.5% with $300 in fees, giving an APR of about 4.7%—slightly better despite the higher base rate. Tools like loan APR calculators make these comparisons straightforward by computing the effective rates automatically.
            </p>


            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Credit Cards: Revolving Credit with Daily APR
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Credit cards have the highest APRs—typically 15% to 30%—because they're unsecured, have flexible borrowing limits, and involve revolving credit where balances fluctuate monthly. Credit card APR is calculated daily: the annual rate is divided by 365 to get the daily periodic rate, which is then applied to your average daily balance. An APR credit card calculator can show how much interest you'll pay on a carried balance.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Answering "How much is 26.99 APR on $3,000?":</strong> Let's calculate the monthly interest cost if you carry a $3,000 balance with 26.99% APR. Daily rate = 26.99% ÷ 365 = 0.0739% per day (or 0.0007393 in decimal form). Daily interest = $3,000 × 0.0007393 = $2.22 per day. For a 30-day billing cycle: $2.22 × 30 = approximately $66.60 in interest charges that month. If you only make minimum payments, this interest compounds—you'll pay interest on accumulated interest. The only way to avoid interest entirely is paying your full statement balance by the due date each month.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Mortgages: Long-Term Secured Loans
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Mortgage APRs typically range from 3% to 8% (highly dependent on economic conditions and market rates) and are secured by the property. Because mortgages involve substantial closing costs—origination fees, discount points, appraisal, title insurance, and more—the difference between interest rate and APR can be significant. A small fee difference has a big impact when spread over 15 or 30 years.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Hypothetical example:</strong> Comparing two 30-year fixed-rate mortgages for $300,000. Lender X: 6% interest rate + $5,000 in fees/points (APR approximately 6.18%). Lender Y: 6.25% interest rate + $2,000 in fees/points (APR approximately 6.32%). Lender X has the lower APR and will cost less over the full 30 years—but if you plan to refinance or sell within 5 years, Lender Y's lower upfront costs might actually save you money in that shorter timeframe. This demonstrates why understanding both numbers matters for mortgages specifically.
            </p>


            {/* Section 5: How to Calculate APR from Interest Rate */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              How Do I Calculate APR from Interest Rate?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              This is one of the most common borrower questions—and the answer is that manual APR calculation is mathematically complex. Unlike simple interest, which you can calculate with basic arithmetic, APR requires solving for an effective rate through iterative approximation or financial calculator functions. Here's the conceptual process:
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 1: Determine the cash you receive.</strong> If you borrow $10,000 but pay $300 in origination fees, you actually receive $9,700 in usable funds.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 2: Calculate the monthly payment.</strong> Using the stated interest rate (let's say 6% annually) on the full $10,000 loan amount over your term (say 3 years/36 months), compute the standard amortized payment. For this example, the monthly payment would be approximately $304.22.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Step 3: Solve for the effective rate.</strong> Now determine what annual interest rate would produce that same $304.22 monthly payment if applied to the $9,700 you actually received (not the $10,000 you're repaying). This requires solving the amortization formula for the interest rate variable—a calculation typically done through iterative approximation, financial calculators, or spreadsheet functions like Excel's RATE function.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>The result:</strong> In this hypothetical scenario, the APR works out to approximately 6.95%—higher than the 6% stated interest rate because the $300 fee effectively increased your borrowing cost when spread over 36 months. This is why effective APR calculators, actual APR calculators, and real loan calculators exist—they automate this complex math so borrowers can instantly see the true cost comparison.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>For DIY calculation:</strong> Use Excel or Google Sheets. Enter your cash received as the present value (PV), your monthly payment as PMT, and your number of payments as NPER. The RATE function will return your monthly rate—multiply by 12 to get your annual APR. Example formula: <code>=RATE(36, -304.22, 9700) * 12</code>. The negative payment is required by spreadsheet convention. Most borrowers find it simpler to use a simple APR calculator online that handles the math automatically.
            </p>


            {/* Section 6: When to Compare APR vs Interest Rate */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              When to Compare APR vs Interest Rate
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Both numbers serve important purposes, but they're useful in different scenarios. Understanding when to focus on each one helps you make better borrowing decisions.
            </p>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Use APR When:
            </h3>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-6 ml-4">
              <li><strong>Comparing loan offers with different fee structures.</strong> APR automatically accounts for these differences, giving you apples-to-apples comparison.</li>
              <li><strong>Shopping across multiple lenders.</strong> Each lender has different fee policies—APR standardizes total cost into a single comparable number.</li>
              <li><strong>Evaluating total borrowing cost.</strong> If you want to know what you'll actually pay annually, APR includes everything.</li>
              <li><strong>Planning to hold the loan to maturity.</strong> Over the full term, APR accurately reflects your total cost since all fees are spread across all payments.</li>
            </ul>

            <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
              Interest Rate Matters More When:
            </h3>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-6 ml-4">
              <li><strong>Refinancing within a short period.</strong> If you plan to refinance in 2-3 years, high upfront fees (reflected in APR) matter less than the monthly payment driven by the interest rate.</li>
              <li><strong>Early payoff expected.</strong> Paying off a loan early means fees are spread over fewer payments, making upfront cost more important than the APR suggests.</li>
              <li><strong>All offers have identical or minimal fees.</strong> When fees are zero or very similar across offers, interest rate and APR converge—choose the lower rate.</li>
              <li><strong>Comparing adjustable-rate initial periods.</strong> For ARMs, the APR calculation includes assumptions about future rate adjustments that may not match reality—the initial interest rate is more relevant for budgeting the early years.</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Critical rule:</strong> Only compare APR across loans of the same type and term length. A 5-year auto loan APR and a 30-year mortgage APR measure completely different things and cannot be meaningfully compared. The longer the term, the more the APR spreads fees across payments, changing how significant those fees appear. Always compare personal loans to personal loans, 30-year mortgages to 30-year mortgages, etc.
            </p>


            {/* Section 7: Is X APR Good */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Is 2.9% APR Good? Context Matters
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              One of the most common questions borrowers ask is whether a specific APR—like 2.9%—is competitive. The answer depends entirely on context: loan type, your credit profile, market conditions, and loan term. Here's how to evaluate any APR offer:
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>For auto loans:</strong> 2.9% APR on a new car with excellent credit (720+ FICO) could be competitive, especially during promotional periods when manufacturers subsidize financing. For used vehicles or borrowers with fair credit (650-699), 2.9% would be outstanding. However, if you're financing a used car with a 600 credit score, 2.9% would be suspiciously low—verify there are no hidden terms or unusually short repayment periods.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>For personal loans:</strong> 2.9% APR would be exceptionally rare and excellent. Most personal loan APRs start around 6-8% for borrowers with excellent credit and climb from there. If you're offered a 2.9% personal loan APR, read the fine print carefully—there may be collateral requirements, very short terms, or other conditions that explain the unusually low rate.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>For credit cards:</strong> 2.9% APR would be nearly impossible for a standard credit card outside of temporary promotional offers (0% introductory APR periods that convert to standard rates after 6-21 months). Ongoing credit card APRs typically range from 15-30%. A sustained sub-3% credit card APR doesn't exist in the consumer market.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>For mortgages:</strong> 2.9% APR on a 30-year fixed-rate mortgage would have been competitive during the historically low rate environment of 2020-2021 but would be exceptional in most other market periods. Mortgage rates fluctuate dramatically based on Federal Reserve policy, inflation, and economic conditions. What's competitive changes quarterly—always compare multiple current offers to determine if your rate is good for today's market.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Bottom line:</strong> There's no universal answer to "is X% APR good?" Always compare offers from at least 3-5 lenders for your specific loan type, amount, and term. Look at your credit score and understand which tier you fall into (excellent: 740+, good: 670-739, fair: 580-669). Check current market rate ranges online from sources like Bankrate, Freddie Mac (for mortgages), or major banks. An APR that's excellent for fair credit might be mediocre for excellent credit—and vice versa.
            </p>


            {/* Section 8: How to Interpret Calculator Results */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              How to Interpret Calculator Results
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Whether you're using an effective APR calculator, an actual APR calculator, or a simple APR calculator, understanding what the results mean helps you make informed decisions. Most loan calculators show several key outputs:
            </p>

            <ul className="list-disc list-inside space-y-2 text-base text-slate-600 mb-4 ml-4">
              <li><strong>APR:</strong> The total annualized cost including interest and fees—use this to compare offers.</li>
              <li><strong>Monthly Payment:</strong> How much you'll pay each month—verify this fits your budget comfortably.</li>
              <li><strong>Total Interest Paid:</strong> All interest charges over the full term—shows long-term cost.</li>
              <li><strong>Total Cost:</strong> Principal + interest + fees—the complete amount you'll repay.</li>
            </ul>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>What to verify:</strong> Check which fees the calculator includes in its APR calculation. Some basic calculators only account for origination fees, while comprehensive real loan calculators include points, broker fees, and certain closing costs. If you're comparing calculator results to a lender's official Truth in Lending disclosure, small differences are normal due to rounding, day-count conventions, or timing assumptions—but large discrepancies warrant investigation.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Using calculator results effectively:</strong> Run calculations for all loan offers you're considering. Compare the APRs directly—lowest APR wins for same loan type and term. Then verify that the winning offer's monthly payment fits your budget, check for prepayment penalties, and read the actual loan agreement carefully. Calculators are tools for comparison, but always base final decisions on official lender disclosures and contract terms.
            </p>

            {/* Conclusion */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Choose Loans Based on True Cost, Not Advertised Rates
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Interest rate and APR both matter, but for different reasons. The interest rate determines how much interest accrues on your principal balance, while APR reveals the complete annual cost including all mandatory fees spread over your repayment term. When comparing loan offers, APR gives you the accurate apples-to-apples comparison—especially when lenders have different fee structures. Use APR to identify the lowest total cost option, verify the monthly payment fits your budget, read all terms carefully, and make your borrowing decision based on comprehensive understanding rather than advertised rates alone. Whether you're using online calculators or reviewing lender disclosures, focusing on APR for comparison ensures you're seeing the complete financial picture.
            </p>


            </div>
          </div>
        </article>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
                {allFaqs.map((faq, index) => (
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
                      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
        </div>
      </section>
    </main>
  );
}

