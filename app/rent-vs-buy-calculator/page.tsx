"use client";

import { Suspense, useState } from "react";
import { ChevronDown, ChevronUp, Scale } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

function RentVsBuyCalculatorContent() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { 
      q: "Is it cheaper to rent or buy a house right now?", 
      a: "In 2024 with high interest rates (6-8%) and elevated home prices, renting is cheaper in the short term (1-3 years) in most markets, but buying builds equity and wins financially if you stay 5-10+ years. Here's the math: renting a $2,500/month home costs $30,000/year with zero equity built. Buying that same $500,000 home with 20% down ($100,000) at 7% costs approximately $3,200/month ($38,400/year) including mortgage, taxes, insurance, and maintenance, but you're building ~$8,000/year in equity initially (increasing over time). Break-even typically occurs around year 5-7. Renting wins if: you'll move within 3-5 years, property prices are falling, or rent is significantly less than ownership costs. Use a rent vs buy calculator with your actual local costs for accurate comparison."
    },
    { 
      q: "What is the 5% rule for rent vs buy?", 
      a: "The 5% rule is a quick rent vs buy decision framework: if annual rent is less than 5% of the home's purchase price, renting is likely cheaper; if more than 5%, buying may be better. The 5% represents unrecoverable homeownership costs: ~1% property tax, ~1% maintenance, ~3% opportunity cost of down payment invested elsewhere. Example: $400,000 home × 5% = $20,000/year ($1,667/month). If comparable rent is $1,400/month ($16,800/year), rent; if rent is $2,000/month ($24,000/year), buy. This rule provides quick guidance but doesn't account for: home appreciation, tax deductions, your timeline, or local market specifics. For detailed analysis, use a comprehensive rent vs buy calculator factoring in your complete situation."
    },
    { 
      q: "How many years until buying is better than renting?", 
      a: "Buying becomes better than renting after approximately 5-7 years in most markets, though this varies based on home prices, interest rates, and local conditions. The break-even point occurs when: cumulative home equity + appreciation + tax benefits exceed cumulative rent payments + opportunity cost of down payment. Year-by-year example on $400,000 home purchase: Years 1-2: renting cheaper (buyer pays closing costs, minimal equity built); Years 3-4: costs roughly equal (buyer building equity, renter avoiding maintenance); Years 5-7: buying pulls ahead (appreciation compounds, more payment goes to principal); Years 8+: buying significantly better (substantial equity, potential to own free and clear). Break-even happens sooner if: home appreciates faster, you get tax benefits, or rent increases aggressively. Use a rent vs own calculator to find your specific break-even timeline."
    },
    { 
      q: "What is the 20/30/3 rule for buying a house?", 
      a: "The 20/30/3 rule is a conservative home buying guideline: put 20% down, keep housing costs under 30% of gross income, and buy a home priced at maximum 3× your annual household income. Breaking it down: (1) 20% down—avoids PMI, gets better rates, ensures equity cushion. Example: $400,000 home = $80,000 down. (2) 30% of income—ensures affordability. Earning $100,000/year = max $2,500/month for housing (mortgage, taxes, insurance). (3) 3× income—prevents overextension. $100,000 income = max $300,000 home price. This rule is more conservative than lender maximums (which often allow 43-50% DTI and 5× income). Following 20/30/3 leaves room for savings, emergencies, and lifestyle expenses. Use income requirement and rent vs buy calculators to see if a home fits these parameters."
    },
    { 
      q: "Should I rent or buy in California in 2024?", 
      a: "In California 2024, renting often makes financial sense for 3-5 year horizons, but buying wins long-term (8+ years) if you can afford the entry costs. California challenges: median home price $800,000+ (requiring $160,000+ down payment), property taxes 1-1.3%, high maintenance costs, but rents also very high ($2,500-4,000+ for comparable homes). Scenario: buying $800,000 home at 7% with 20% down costs ~$6,100/month (mortgage, taxes, insurance, maintenance) vs $3,500/month rent. Short-term: you save $2,600/month renting ($31,200/year). But after 10 years with 3% appreciation: home worth $1.07M, you have $350,000+ equity, while renting saved nothing. Buy in CA if: staying 7+ years, can afford 20% down, expect long-term appreciation. Rent if: relocating soon, building down payment, or market seems overvalued."
    },
    { 
      q: "How to calculate if buying or renting is better?", 
      a: "Calculate rent vs buy by comparing total costs over your expected timeline: (1) Buying costs: down payment, closing costs (2-5%), monthly mortgage, property taxes, insurance, HOA, maintenance (1% of home value annually), opportunity cost (what down payment would earn invested). (2) Renting costs: monthly rent, renter's insurance, assumed annual rent increases (3-5%). (3) Buying benefits: equity buildup, home appreciation (use 2-4% annually), tax deductions (mortgage interest, property taxes). Example: $400,000 home, $2,000/month rent, 7 years: buying total outlay = $365,000, but $140,000 equity built, net cost = $225,000; renting total = $168,000 in rent with zero equity. Buy wins after 7 years. Use a comprehensive rent vs buy calculator or New York Times rent vs buy calculator for detailed analysis."
    },
    { 
      q: "Is the rent vs buy calculator accurate?", 
      a: "Rent vs buy calculators are accurate for financial comparisons if you input realistic assumptions, but they can't predict future market conditions or account for personal circumstances. Accuracy depends on: (1) Your inputs—use actual local property taxes, realistic maintenance costs (1% of home value), and conservative appreciation (2-4%); (2) Your timeline—calculations assume you stay the full period; selling early changes results dramatically; (3) Market assumptions—calculators can't predict rate changes, local appreciation, or economic shifts; (4) Lifestyle factors—calculators miss intangibles like stability, customization, forced savings through mortgage payments. Best calculators: New York Times rent vs buy (sophisticated, includes investment opportunity cost), Zillow rent vs buy (user-friendly), Excel-based (fully customizable). Use calculators as one input in your decision, not the only factor."
    }
  ];

  return (
    <section className="py-8">
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
      <div className="mb-8 mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="h-8 w-8 text-indigo-600 flex-shrink-0" />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
            Rent vs Buy Calculator
          </h1>
        </div>
        <div className="h-px bg-indigo-600 mb-6"></div>
        <div className="space-y-4 text-base text-slate-600 leading-relaxed">
          <p>
            Compare the financial implications of renting versus buying a home by analyzing monthly costs, tax benefits, home appreciation, and opportunity costs over time.
          </p>
          <p>
            Make an informed housing decision by understanding the true cost of homeownership versus renting based on your location, financial situation, and long-term plans.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <MortgageCalculator category="affordability" forcedSubcalculator="rent-vs-buy" />
        </Suspense>
      </div>

      {/* How It Works */}
      <div className="mb-16 bg-slate-50 py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              How It Works
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                This calculator helps you decide whether renting or buying makes more financial sense for your situation. The decision involves comparing monthly costs, tax benefits, equity building, and opportunity costs of each option.
              </p>
              <p>
                Enter your potential home price, down payment, mortgage details, property taxes, insurance, and maintenance costs for buying. For renting, enter monthly rent and anticipated annual rent increases. The calculator also factors in your tax bracket and expected home appreciation.
              </p>
              <p>
                Results show a side-by-side comparison of total costs, including the break-even point where buying becomes more cost-effective than renting. Consider both financial factors and lifestyle preferences when making your decision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Article */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <article className="mx-auto max-w-4xl">
            <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Understanding the True Cost of Renting vs. Buying: Beyond the Monthly Payment
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed">
                Making the decision between renting and buying a home ranks among the most significant financial choices you'll face. While monthly mortgage payments and rent checks offer an easy comparison point, the real financial picture involves dozens of additional factors that can tip the scales dramatically in either direction.
              </p>

              <p className="text-slate-600">
                The question "Is it better for me to rent or buy?" doesn't have a universal answer. Your finances, timeline, local market conditions, and personal circumstances all play crucial roles.
              </p>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
                The Complete Cost Picture
              </h3>

              <p className="text-slate-600">
                When calculating if buying or renting is better, the monthly payment represents only the starting point. Homeownership carries substantial ongoing costs beyond principal and interest.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <p className="font-semibold text-slate-900 mb-3">Upfront Costs:</p>
          <ul className="space-y-1 text-sm text-slate-600 mb-4">
            <li>• Down payment (typically 3-20% of home price)</li>
            <li>• Closing costs (2-5% of home price): appraisal, title insurance, origination fees, inspections</li>
            <li>• Moving expenses</li>
            <li>• Immediate repairs or renovations</li>
          </ul>

          <p className="font-semibold text-slate-900 mb-3">Ongoing Monthly Costs:</p>
          <ul className="space-y-1 text-sm text-slate-600 mb-4">
            <li>• Principal and interest (mortgage payment)</li>
            <li>• Property taxes (varies widely by location, typically 0.5-2.5% of home value annually)</li>
            <li>• Homeowners insurance ($1,000-$3,000+ annually)</li>
            <li>• Private mortgage insurance (PMI) if down payment &lt; 20%</li>
            <li>• HOA fees (if applicable)</li>
            <li>• Maintenance and repairs (budget 1-2% of home value annually)</li>
            <li>• Utilities (often higher than renting)</li>
          </ul>

          <p className="font-semibold text-slate-900 mb-3">Exit Costs:</p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>• Real estate agent commissions (typically 5-6% of sale price)</li>
            <li>• Closing costs when selling</li>
            <li>• Potential capital gains taxes (if profit exceeds $250k single / $500k married)</li>
          </ul>
        </div>

        <h4 className="font-serif text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
          True Cost of Renting
        </h4>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <p className="font-semibold text-slate-900 mb-3">Upfront Costs:</p>
          <ul className="space-y-1 text-sm text-slate-600 mb-4">
            <li>• Security deposit (typically 1-2 months' rent)</li>
            <li>• First month's rent (sometimes last month's rent too)</li>
            <li>• Application fees</li>
            <li>• Moving expenses</li>
          </ul>

          <p className="font-semibold text-slate-900 mb-3">Ongoing Monthly Costs:</p>
          <ul className="space-y-1 text-slate-600 mb-4">
            <li>• Monthly rent (subject to annual increases)</li>
            <li>• Renters insurance ($150-$300 annually)</li>
            <li>• Some utilities (varies by lease agreement)</li>
          </ul>

          <p className="font-semibold text-slate-900 mb-3">Exit Costs:</p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>• Minimal—typically just moving expenses</li>
            <li>• Potential loss of security deposit if damages exist</li>
          </ul>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          The Break-Even Analysis
        </h3>

        <p className="text-slate-600">
          The break-even point is when the total cost of buying equals the total cost of renting. This calculation factors in opportunity cost, tax benefits, home appreciation, and all expenses.
        </p>

        <div className="bg-slate-50 border-l-4 border-indigo-600 p-6 my-6">
          <h4 className="font-serif font-bold text-lg text-slate-900 mb-4">Example Break-Even Calculation</h4>
          
          <p className="text-slate-700 mb-2">Assumptions (Hypothetical):</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
            <li>Home purchase price: $400,000</li>
            <li>Down payment: $80,000 (20%)</li>
            <li>Mortgage: $320,000 at 7% for 30 years</li>
            <li>Monthly rent: $2,500</li>
            <li>Annual rent increase: 3%</li>
            <li>Home appreciation: 3% annually</li>
            <li>Property tax: 1.5% of home value</li>
            <li>Maintenance: 1% of home value annually</li>
          </ul>

          <div className="bg-white p-4 rounded mb-4">
            <p className="font-semibold text-slate-900 mb-2">Year 1 Comparison:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li><strong>Renting:</strong> $30,000 annual cost</li>
              <li><strong>Buying:</strong> $47,000 (mortgage + tax + insurance + maintenance) – $8,000 (tax deduction benefit) – $12,000 (equity gain) = <strong>$27,000 net cost</strong></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded mb-4">
            <p className="font-semibold text-slate-900 mb-2">Year 5 Cumulative:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li><strong>Renting:</strong> $159,000 total spent (accounting for rent increases)</li>
              <li><strong>Buying:</strong> $235,000 total spent – $45,000 (equity) – $60,000 (appreciation) = <strong>$130,000 net cost</strong></li>
              <li><strong>Result:</strong> Buying is $29,000 cheaper after 5 years</li>
            </ul>
          </div>

          <p className="text-slate-700 text-sm">
            This simplified example shows buying becomes advantageous around year 4-5. Your break-even point depends heavily on local conditions, how long you stay, and actual appreciation rates.
          </p>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          When Buying Makes Sense
        </h3>

        <ul className="space-y-3 text-slate-600 mb-6">
          <li><strong>Long-term stability:</strong> You plan to stay in the area for at least 5-7 years. Shorter timelines rarely justify transaction costs.</li>
          <li><strong>Financial readiness:</strong> You have a stable income, emergency fund (separate from down payment), and manageable debt levels.</li>
          <li><strong>Favorable price-to-rent ratio:</strong> In markets where buying costs are reasonable relative to rents, ownership becomes attractive sooner.</li>
          <li><strong>Building equity matters:</strong> You value wealth accumulation through forced savings (mortgage payments) rather than flexibility.</li>
          <li><strong>Personalization:</strong> You want control over your living space—renovations, pets, paint colors without landlord approval.</li>
          <li><strong>Tax benefits:</strong> You itemize deductions and your mortgage interest + property taxes exceed the standard deduction.</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          When Renting Makes Sense
        </h3>

        <ul className="space-y-3 text-slate-600 mb-6">
          <li><strong>Short-term plans:</strong> You expect to move within 3-5 years for work, education, or personal reasons.</li>
          <li><strong>Career flexibility:</strong> Your job may require relocation, or you're exploring different cities/industries.</li>
          <li><strong>Limited savings:</strong> You don't have enough for a down payment plus an emergency fund, or using your savings for a down payment would leave you cash-poor.</li>
          <li><strong>Expensive markets:</strong> In cities where home prices are extremely high relative to rents (price-to-rent ratio &gt;20), renting and investing the difference may yield better returns.</li>
          <li><strong>Avoiding maintenance:</strong> You prefer predictable monthly costs without surprise repair expenses or weekend maintenance work.</li>
          <li><strong>Investment alternatives:</strong> You can achieve higher returns investing your down payment funds in diversified portfolios rather than tying it up in a single property.</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Price-to-Rent Ratio: A Key Metric
        </h3>

        <p className="text-slate-600">
          The price-to-rent ratio divides the median home price by annual rent for a comparable property. It's a quick indicator of market conditions:
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-6">
          <ul className="space-y-2 text-slate-700">
            <li><strong>Ratio 1-15:</strong> Buying is typically favorable—prices are reasonable relative to rents</li>
            <li><strong>Ratio 16-20:</strong> Gray area—depends on your specific situation and plans</li>
            <li><strong>Ratio 21+:</strong> Renting often makes more financial sense—prices are expensive relative to rents</li>
          </ul>
        </div>

        <p className="text-slate-600">
          Calculate your local ratio: Find median home price, divide by (median monthly rent × 12). For example: $400,000 home ÷ ($2,000/month × 12) = 16.7 ratio.
        </p>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Common Mistakes in Rent vs Buy Analysis
        </h3>

        <ul className="space-y-3 text-slate-600 mb-6">
          <li><strong>Comparing monthly rent to monthly mortgage payment only:</strong> This ignores property taxes, insurance, maintenance, HOA fees, and transaction costs that make buying significantly more expensive than the mortgage alone.</li>
          <li><strong>Assuming home prices always rise:</strong> While real estate generally appreciates long-term, local markets can stagnate or decline for extended periods.</li>
          <li><strong>Ignoring opportunity cost:</strong> Money used for a down payment, closing costs, and maintenance could be invested elsewhere. Calculate what that capital could earn in index funds.</li>
          <li><strong>Overstating tax benefits:</strong> Tax reform increased the standard deduction, so fewer people benefit from itemizing mortgage interest. Calculate your actual tax savings.</li>
          <li><strong>Lifestyle trumps math:</strong> Buying makes sense financially but conflicts with your values (freedom, travel, avoiding debt) or vice versa. Honor both factors.</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          The Opportunity Cost of Your Down Payment
        </h3>

        <p className="text-slate-600">
          When you buy a home, your down payment is capital you can't invest elsewhere. Consider what that money could earn:
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-6">
          <p className="font-semibold text-slate-900 mb-3">Example: $80,000 Down Payment Opportunity Cost</p>
          <ul className="space-y-2 text-slate-700">
            <li><strong>Invested in S&P 500 (historical 10% annual return):</strong> Grows to ~$129,000 after 5 years</li>
            <li><strong>Used as home down payment:</strong> That $80,000 buys a $400,000 home. After 5 years with 3% appreciation, home worth $464,000. Your equity: $80,000 down payment + ~$30,000 principal paid + $64,000 appreciation = $174,000</li>
            <li><strong>Comparison:</strong> Home equity of $174,000 vs stock portfolio of $129,000 = $45,000 advantage to buying</li>
          </ul>
          <p className="text-slate-700 text-sm mt-3">
            However, this doesn't account for all costs of ownership (maintenance, taxes, insurance) or rent saved. Complete analysis needed.
          </p>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">
          Using This Calculator Effectively
        </h3>

        <p className="text-slate-600 mb-4">
          To get the most accurate rent vs buy comparison:
        </p>

        <ol className="space-y-3 text-slate-600 list-decimal pl-6 mb-6">
          <li><strong>Use realistic local data:</strong> Research actual home prices, property tax rates, insurance costs, and maintenance expenses for your target area.</li>
          <li><strong>Conservative appreciation:</strong> Use 2-4% annual appreciation rather than optimistic projections. Markets vary greatly by location.</li>
          <li><strong>Factor your tax bracket:</strong> Higher earners benefit more from mortgage interest deductions, but only if itemizing exceeds standard deduction.</li>
          <li><strong>Honest timeline:</strong> If uncertain about staying 5+ years, weight that heavily. Transaction costs eat into gains on shorter timelines.</li>
          <li><strong>Include opportunity cost:</strong> What else could your down payment money earn? Consider your alternative investment returns.</li>
          <li><strong>Run multiple scenarios:</strong> Test different appreciation rates, rent increases, and timelines to see how sensitive the decision is to assumptions.</li>
        </ol>

        <p className="text-slate-600 text-sm italic">
          The rent vs buy decision isn't purely financial—it involves lifestyle, flexibility, and personal values. Use this calculator as one input in a broader decision-making process that considers your complete situation.
        </p>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600">
                Quick answers to common questions about rent vs buy calculator
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-indigo-300 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                    aria-expanded={openFAQ === index}
                  >
                    <span className="font-medium text-slate-900 text-sm pr-2">
                      {faq.q}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-4 pb-4 border-t border-slate-100">
                      <p className="text-sm text-slate-600 leading-relaxed mt-3">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default function RentVsBuyCalculatorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <RentVsBuyCalculatorContent />
    </Suspense>
  );
}
