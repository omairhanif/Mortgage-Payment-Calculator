import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Mortgage Interest Tax Deduction: What You Can Save | Mortgage Lab",
  description: "Learn about mortgage interest tax deductions in Canada. Understand why primary residences don't qualify, how rental properties DO, the Smith Manoeuvre strategy, and real tax savings in Ontario, BC, and Alberta with 2026 calculations."
};

export default function MortgageInterestTaxDeductionPage() {
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
            src="/images/articles/no-closing-cost-mortgages-are-they-worth-it.jpg"
            alt="Mortgage interest tax deduction guide for Canadian homeowners"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Mortgage Interest Tax Deduction: What You Can Save
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>August 27, 2026</time>
          <span className="mx-3">•</span>
          <span>13 min read</span>
        </div>
      </div>

      {/* Banner Ad */}
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
            <section className="mb-12">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Marcus moved from Chicago to Vancouver last year and was shocked when his Canadian accountant told him: "You can't deduct mortgage interest on your home." Coming from the United States where he'd claimed thousands in annual mortgage interest deductions, he assumed the <strong>mortgage interest tax deduction Canada</strong> worked the same way. It doesn't. In fact, for primary residences, there is no <strong>mortgage interest tax deduction Canada</strong> at all.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you're Googling "<strong>can you deduct mortgage interest in Canada</strong>" or "mortgage interest tax deduction Ontario," this guide will save you hours of confusion. We'll explain exactly why primary residence mortgage interest isn't deductible, show you when and how mortgage interest IS deductible (rental properties and the Smith Manoeuvre), provide real calculation examples for Ontario, BC, and Alberta with 2026 tax rates, and clarify the fundamental differences between Canadian and American mortgage tax treatment.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This comprehensive 2,400+ word guide covers the complete truth about <strong>mortgage interest tax write-off Canada</strong> rules, showing you how to maximize legitimate deductions if you qualify, and what alternative benefits exist for primary residence owners. Whether you're a homeowner, landlord, or investor, understanding these rules can save you thousands in taxes—or prevent costly mistakes on your tax return.
              </p>
            </section>


            {/* Section 1: The Hard Truth About Primary Residence Mortgage Interest */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                The Hard Truth: You Cannot Deduct Primary Residence Mortgage Interest in Canada
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Let's start with the answer everyone searching for "<strong>can I write off mortgage interest in Canada</strong>" needs to hear upfront: <strong>No, you cannot deduct mortgage interest on your primary residence</strong>. This applies whether you live in Ontario, British Columbia, Alberta, or any other Canadian province or territory.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Why Canada Doesn't Allow Primary Residence Interest Deductions
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The Canada Revenue Agency (CRA) treats your primary residence as personal consumption, not an income-producing investment. According to CRA rules, you can only deduct interest expenses when you borrow money to earn income from a business or property. Since living in your own home doesn't generate taxable income, the mortgage interest isn't deductible.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This is fundamentally different from the United States, where homeowners can itemize deductions and claim mortgage interest on Schedule A of their tax return. The U.S. tax code views homeownership differently—as an economic activity worthy of subsidy through tax deductions. Canada's approach prioritizes other benefits instead (explained later).
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">What "Mortgage Interest Tax Deduction Canada" Searches Won't Find:</p>
                <ul className="space-y-2 text-slate-700">
                  <li>❌ <strong>Primary Residence:</strong> Mortgage interest NOT deductible</li>
                  <li>❌ <strong>Second Home (Personal Use):</strong> Mortgage interest NOT deductible</li>
                  <li>❌ <strong>Cottage/Vacation Home (Personal Use):</strong> Mortgage interest NOT deductible</li>
                  <li>❌ <strong>Home Equity Line of Credit (HELOC) for Personal Expenses:</strong> Interest NOT deductible</li>
                </ul>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                The Cost of This Difference: Real Numbers
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To understand what Canadians "miss out on" compared to Americans, let's calculate the theoretical value of a <strong>mortgage interest tax write-off Canada</strong> if it existed:
              </p>

              <div className="bg-slate-50 border-l-4 border-slate-400 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">Hypothetical Deduction Value - $650,000 Toronto Home:</p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Purchase Price:</strong> $650,000</li>
                  <li><strong>Down Payment (20%):</strong> $130,000</li>
                  <li><strong>Mortgage Amount:</strong> $520,000 at 5.79%</li>
                  <li><strong>Annual Interest (Year 1):</strong> ~$29,900</li>
                  <li><strong>Ontario Marginal Tax Rate:</strong> 29.65% (at $90,000 income)</li>
                  <li><strong>Hypothetical Tax Savings (if deductible):</strong> $29,900 × 29.65% = <strong>$8,865/year</strong></li>
                  <li><strong>Actual Canadian Tax Savings:</strong> <strong>$0</strong></li>
                </ul>
                <p className="text-slate-700 mt-3 text-sm italic">This is why people search "mortgage interest deduction Canada" hoping to find this benefit—in the U.S., this would save nearly $9,000 annually.</p>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                However, before feeling too disappointed, remember that Canada offers other benefits the U.S. doesn't: principal residence exemption (100% tax-free capital gains when you sell), GST/HST rebates on new homes, provincial first-time buyer credits, and the Home Buyers' Plan. These benefits can equal or exceed the value of mortgage interest deductions over time.
              </p>
            </section>



            {/* Section 2: When Mortgage Interest IS Deductible in Canada */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                When Mortgage Interest IS Deductible in Canada
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                While primary residence mortgage interest isn't deductible, there ARE situations where <strong>mortgage interest tax deduction Canada</strong> rules DO apply. Understanding these exceptions is crucial for investors and strategic homeowners.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                1. Rental Properties: Full Mortgage Interest Deduction
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you own a rental property, congratulations—you CAN deduct mortgage interest. The CRA allows deductions for interest on money borrowed to earn income from business or property. Since rental properties generate taxable rental income, the mortgage interest is fully deductible as a rental expense.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Claiming the Deduction:</strong> Report your rental income and expenses on Form T776 (Statement of Real Estate Rentals). Include mortgage interest alongside other deductible expenses: property taxes, insurance, repairs, maintenance, property management fees, utilities (if you pay them), and advertising costs.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">Rental Property Deduction Example - Vancouver Condo:</p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Purchase Price:</strong> $750,000</li>
                  <li><strong>Down Payment (20%):</strong> $150,000</li>
                  <li><strong>Mortgage Amount:</strong> $600,000 at 5.79%</li>
                  <li><strong>Annual Interest (Year 1):</strong> ~$34,500</li>
                  <li><strong>Annual Rental Income:</strong> $36,000 ($3,000/month)</li>
                  <li><strong>Other Deductible Expenses:</strong> $12,000 (property tax, strata fees, insurance, maintenance)</li>
                  <li><strong>Net Rental Income (Loss):</strong> $36,000 - $34,500 - $12,000 = <strong>-$10,500</strong></li>
                  <li><strong>Tax Savings (28.2% BC rate):</strong> $10,500 × 28.2% = <strong>$2,961</strong></li>
                </ul>
                <p className="text-slate-700 mt-3 text-sm italic">This rental loss can offset other income, reducing your total tax bill by $2,961. This is a legitimate mortgage interest tax write-off Canada benefit.</p>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                2. Home Office Business Deduction (Partial Interest)
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you run a business from home and meet the CRA's home office requirements (the space is your principal place of business OR used exclusively for earning business income and used regularly to meet clients), you can deduct a proportional amount of mortgage interest as a business expense.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Calculation Method:</strong> Determine the percentage of your home used for business (typically based on square footage), then apply that percentage to eligible home expenses including mortgage interest.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">Home Office Deduction - Calgary Entrepreneur:</p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Total Home Size:</strong> 2,000 sq ft</li>
                  <li><strong>Home Office Size:</strong> 200 sq ft (10% of home)</li>
                  <li><strong>Annual Mortgage Interest:</strong> $25,000</li>
                  <li><strong>Deductible Portion:</strong> $25,000 × 10% = <strong>$2,500</strong></li>
                  <li><strong>Tax Savings (30.5% Alberta rate):</strong> $2,500 × 30.5% = <strong>$763</strong></li>
                </ul>
                <p className="text-slate-700 mt-3 text-sm italic">Note: Capital gains exemption on your primary residence may be reduced proportionally. Consult a tax professional to weigh benefits vs. costs.</p>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                3. Investment Purpose Borrowing (HELOC for Investments)
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you use a Home Equity Line of Credit (HELOC) or refinance your mortgage to extract equity for investment purposes—such as purchasing stocks, bonds, rental properties, or a business—the interest on that borrowed amount IS deductible. The key requirement: you must prove the funds were used to earn income from business or property.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Critical CRA Rule:</strong> Track the borrowed funds meticulously. Deposit HELOC/refinance proceeds into a dedicated account, and only use that account for investment purposes. Mixing personal and investment funds can disqualify the entire deduction.
              </p>
            </section>



            {/* Section 3: The Smith Manoeuvre - Making Primary Residence Interest Deductible */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                The Smith Manoeuvre: Converting Non-Deductible Debt to Deductible Debt
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The Smith Manoeuvre is the closest thing Canada has to a <strong>mortgage interest tax write-off Canada</strong> strategy for primary residences. Developed by Canadian financial planner Fraser Smith, this legal strategy gradually converts your non-deductible mortgage interest into deductible investment loan interest.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                How the Smith Manoeuvre Works
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The basic concept: As you pay down your primary residence mortgage (reducing non-deductible debt), you simultaneously borrow that same amount through a readvanceable mortgage or HELOC to invest in income-producing investments. The interest on the investment loan IS deductible because you're borrowing to earn income.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Step-by-Step Process:</strong>
              </p>

              <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li><strong>Get a readvanceable mortgage:</strong> This type of mortgage has a regular mortgage component plus a HELOC component that increases as you pay down the mortgage principal.</li>
                <li><strong>Make regular mortgage payments:</strong> Each payment reduces your mortgage principal, increasing available HELOC credit.</li>
                <li><strong>Borrow from HELOC immediately:</strong> Withdraw the newly available credit (equal to the principal portion of your mortgage payment).</li>
                <li><strong>Invest the borrowed funds:</strong> Purchase income-producing investments (dividend stocks, bonds, REITs, rental properties).</li>
                <li><strong>Deduct HELOC interest:</strong> Claim the interest on the HELOC as an investment expense, reducing your taxable income.</li>
                <li><strong>Repeat monthly:</strong> Continue this cycle every time you make a mortgage payment.</li>
              </ol>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">Smith Manoeuvre Example - Ontario Homeowner (Year 1):</p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Mortgage Balance:</strong> $500,000 at 5.79%</li>
                  <li><strong>Monthly Payment:</strong> $3,421 (principal + interest)</li>
                  <li><strong>Principal Paid (Month 1):</strong> ~$1,010</li>
                  <li><strong>HELOC Withdrawal (Month 1):</strong> $1,010 → invested in dividend stocks</li>
                  <li><strong>Repeat Monthly:</strong> By year end, ~$13,000 principal paid = $13,000 HELOC borrowed for investments</li>
                  <li><strong>HELOC Interest (Year 1 average):</strong> ~$400 (on average balance)</li>
                  <li><strong>Tax Savings (29.65% Ontario rate):</strong> $400 × 29.65% = <strong>$119</strong></li>
                </ul>
                <p className="text-slate-700 mt-3 text-sm italic">Over 25 years, this can convert your entire $500,000 mortgage to deductible investment debt, creating massive tax savings. Year 25 might produce $15,000+ in annual deductions.</p>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Smith Manoeuvre Risks and Considerations
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                While the Smith Manoeuvre creates the "<strong>can you deduct mortgage interest in Canada</strong>" outcome you're looking for, it comes with significant risks:
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li><strong>Investment Risk:</strong> Your borrowed money is invested in the market, which can decline. You're leveraging your home equity for stock market exposure.</li>
                <li><strong>Interest Rate Risk:</strong> HELOCs have variable rates. If rates rise, your investment loan interest increases, potentially exceeding investment returns.</li>
                <li><strong>Cash Flow Requirements:</strong> You must pay HELOC interest monthly. Unlike mortgage interest (part of your payment), HELOC interest is an additional cash outflow.</li>
                <li><strong>CRA Scrutiny:</strong> You must maintain perfect records proving borrowed funds were used for income-producing investments. Any personal use disqualifies the deduction.</li>
                <li><strong>Complexity:</strong> This isn't a set-and-forget strategy. It requires monthly discipline, rebalancing, and tracking.</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The Smith Manoeuvre works best for financially sophisticated homeowners with stable incomes, high risk tolerance, long investment horizons (20+ years), and disciplined investment habits. It's NOT suitable for everyone searching for "mortgage interest deduction Canada" solutions.
              </p>
            </section>



            {/* Section 4: Provincial Tax Rate Impact on Deductions */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Provincial Tax Rates: How Location Affects Your Deduction Value
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When mortgage interest IS deductible (rental properties, Smith Manoeuvre, business use), the value of that deduction depends on your marginal tax rate—which varies significantly by province. Let's compare Ontario, BC, and Alberta for 2026.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                2026 Combined Federal-Provincial Tax Rates
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Ontario (2026 Rates at $90,000 income):</strong>
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li>Federal: 20.5%</li>
                <li>Ontario Provincial: 9.15%</li>
                <li><strong>Combined: 29.65%</strong></li>
                <li><strong>$20,000 interest deduction value: $5,930</strong></li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>British Columbia (2026 Rates at $90,000 income):</strong>
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li>Federal: 20.5%</li>
                <li>BC Provincial: 7.70%</li>
                <li><strong>Combined: 28.20%</strong></li>
                <li><strong>$20,000 interest deduction value: $5,640</strong></li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Alberta (2026 Rates at $90,000 income):</strong>
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li>Federal: 20.5%</li>
                <li>Alberta Provincial: 10%</li>
                <li><strong>Combined: 30.5%</strong></li>
                <li><strong>$20,000 interest deduction value: $6,100</strong></li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-slate-900 mb-3">Provincial Comparison: Same $20,000 Interest Deduction</p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Alberta:</strong> $6,100 tax savings (30.5% rate)</li>
                  <li><strong>Ontario:</strong> $5,930 tax savings (29.65% rate)</li>
                  <li><strong>BC:</strong> $5,640 tax savings (28.20% rate)</li>
                  <li><strong>Difference:</strong> Alberta saves $460 more than BC on the same deduction</li>
                </ul>
                <p className="text-slate-700 mt-3 text-sm italic">Higher-income investors (above $155,000) face even higher marginal rates: Ontario 53.53%, BC 53.50%, Alberta 48%. At that level, a $20,000 deduction saves $10,000-$10,700.</p>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Why Higher Tax Rates Make Deductions More Valuable
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Tax deductions reduce your taxable income, saving you taxes at your marginal rate (the rate on your last dollar earned). If you're in a higher tax bracket, each dollar of deduction saves more. This is why high-income investors benefit most from strategies like the Smith Manoeuvre or rental property investments.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For someone earning $200,000 in Ontario (53.53% marginal rate), a $30,000 annual mortgage interest deduction on a rental property saves $16,059 in taxes. Someone earning $50,000 (20.05% rate) deducting the same $30,000 saves only $6,015. Same deduction, different value based on your income and province.
              </p>
            </section>



            {/* Section 5: US vs Canada Comparison */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                US vs. Canada: Why the Systems Differ
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Americans searching "<strong>mortgage interest tax deduction</strong>" find robust benefits. Canadians searching the same term find... disappointment. Understanding WHY these systems differ helps you appreciate Canada's alternative approach.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                United States: Incentivizing Homeownership Through Tax Deductions
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The U.S. mortgage interest deduction dates back to 1913, when the federal income tax was established. Originally, all interest was deductible. Over time, the tax code evolved to limit deductions primarily to mortgage interest (up to $750,000 in mortgage debt for loans originated after December 15, 2017).
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                American homeowners who itemize deductions (instead of taking the standard deduction) can deduct mortgage interest, property taxes (up to $10,000 SALT cap), and certain other expenses. This creates significant tax savings for homeowners with large mortgages.
              </p>

              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 mt-8">
                Canada: Alternative Benefits Instead of Interest Deductions
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Canada never adopted mortgage interest deductions for primary residences. Instead, the Canadian tax system provides different benefits:
              </p>

              <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6 ml-4">
                <li><strong>Principal Residence Exemption:</strong> 100% tax-free capital gains when you sell your primary home (U.S. limits this to $250,000/$500,000)</li>
                <li><strong>First-Time Home Buyer Credits:</strong> Federal Home Buyers' Tax Credit ($1,500) + provincial credits (Ontario LTT rebate up to $8,475 in Toronto, BC PTT exemption up to ~$10,000)</li>
                <li><strong>Home Buyers' Plan:</strong> Withdraw up to $60,000 from RRSP tax-free for home purchase</li>
                <li><strong>GST/HST New Housing Rebates:</strong> Up to $30,000+ on qualifying new home purchases</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For many Canadians, especially first-time buyers and those who sell their homes for significant gains, these benefits can exceed the lifetime value of U.S.-style mortgage interest deductions. A Toronto homeowner who buys for $700,000 and sells for $1.2 million pays $0 tax on that $500,000 gain. An American would pay capital gains tax on gains above the exemption threshold.
              </p>
            </section>



            {/* FAQs */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                    Can I deduct mortgage interest on my primary residence in Canada?
                  </h3>
                  <p className="text-slate-700">
                    No. Canada does not allow mortgage interest deductions on primary residences. The CRA treats your home as personal consumption, not an income-producing asset, so the interest is not deductible. This applies to all provinces including Ontario, BC, and Alberta.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                    Is rental property mortgage interest deductible in Canada?
                  </h3>
                  <p className="text-slate-700">
                    Yes! Mortgage interest on rental/investment properties IS fully deductible. Report it on Form T776 alongside other rental expenses. In a 30% tax bracket, $25,000 in annual interest saves you $7,500 in taxes. This is why real estate investors still benefit from "mortgage interest tax write-off Canada" provisions—just not on their primary homes.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                    What is the Smith Manoeuvre?
                  </h3>
                  <p className="text-slate-700">
                    The Smith Manoeuvre is a legal strategy to convert non-deductible primary residence mortgage debt into deductible investment loan debt. As you pay down your mortgage, you reborrow that amount through a HELOC to invest in income-producing assets. The HELOC interest IS deductible. Over 25 years, this can create substantial tax savings, though it requires discipline and comes with investment risks.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                    Can I deduct HELOC interest in Canada?
                  </h3>
                  <p className="text-slate-700">
                    Only if you use the borrowed funds to earn income. HELOC interest for renovations, vacations, or paying off credit cards is NOT deductible. HELOC interest for purchasing rental properties, stocks, bonds, or other income-producing investments IS deductible. Track funds meticulously—the CRA requires proof of how you used borrowed money.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                    Does Ontario, BC, or Alberta have better mortgage interest deduction values?
                  </h3>
                  <p className="text-slate-700">
                    Alberta has the highest combined marginal tax rate (30.5% at $90K income), making deductions most valuable there. Ontario is second (29.65%), and BC third (28.20%). However, at incomes above $155,000, Ontario and BC have higher top rates (~53.5%) compared to Alberta (48%), making deductions more valuable for high earners in ON/BC.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                    Why doesn't Canada allow primary residence mortgage interest deductions like the US?
                  </h3>
                  <p className="text-slate-700">
                    Different tax policy philosophies. The U.S. incentivizes homeownership through interest deductions. Canada provides different benefits: 100% tax-free capital gains on principal residence sale (vs. limited exemption in US), GST/HST rebates, Home Buyers' Plan RRSP access, and provincial first-time buyer credits. Many Canadian homeowners come out ahead with this approach, especially when selling homes that have appreciated significantly.
                  </p>
                </div>
              </div>
            </section>



            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Conclusion: Understanding Canadian Mortgage Interest Deductions
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The answer to "<strong>can you deduct mortgage interest in Canada</strong>" depends entirely on what type of property you're asking about. For your primary residence, the answer is definitively no—Canada does not allow these deductions the way the United States does. However, for rental properties, the answer is yes, with full deductibility creating substantial tax savings for real estate investors.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you're disappointed by the lack of primary residence mortgage interest deductions, remember that Canada's tax system compensates through other benefits: 100% tax-free capital gains on principal residence sales, substantial first-time buyer credits (especially in Ontario and BC), the Home Buyers' Plan providing tax-free access to RRSP funds, and GST/HST rebates on new home purchases. These benefits can equal or exceed U.S.-style interest deductions over your homeownership lifetime.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For sophisticated homeowners willing to accept investment risk, the Smith Manoeuvre provides a legal path to creating <strong>mortgage interest tax write-off Canada</strong> benefits on your primary residence by converting non-deductible debt to deductible investment debt. This strategy isn't for everyone, but it demonstrates that creative approaches exist for those seeking tax-deductible interest in Canada.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Whether you're in Ontario (29.65% marginal rate), British Columbia (28.20% rate), or Alberta (30.5% rate), understanding when and how <strong>mortgage interest tax deduction Canada</strong> rules apply empowers you to make strategic financial decisions. Rental property investors should maximize this deduction by tracking all deductible expenses carefully. Primary residence owners should focus on the alternative benefits Canada provides—and if you're truly motivated, explore strategies like the Smith Manoeuvre with professional guidance.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The key takeaway: while Canada doesn't mirror U.S. mortgage interest deduction policies for primary residences, it's not because Canadians lack tax benefits—it's because our tax system achieves homeowner support through different, often more generous, mechanisms.
              </p>
            </section>

            {/* CTA Section */}
            <section className="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-indigo-100">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                Calculate Your Mortgage Payments
              </h3>
              <p className="text-indigo-900 mb-6 text-lg">
                Understanding tax deductions is important, but so is knowing your monthly mortgage payment. Use our calculator to see exactly what you'll pay based on current Canadian mortgage rates.
              </p>
              <Link 
                href="/mortgage"
                className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Calculate Your Mortgage
              </Link>
            </section>

          </div>
        </div>
      </article>

    </main>
  );
}

