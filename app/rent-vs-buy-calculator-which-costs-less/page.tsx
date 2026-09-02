"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { getStructuredData } from "./server";

export default function RentVsBuyCalculatorArticle() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How does a rent vs buy calculator work?",
      a: "A rent vs buy calculator compares the total cost of renting versus buying over a specific time period by factoring in: (1) Buying costsâ€”down payment, closing costs, monthly mortgage, property taxes, insurance, maintenance, and selling costs when you eventually move, (2) Renting costsâ€”monthly rent plus projected annual increases, and (3) Opportunity costâ€”investment returns you could have earned on the down payment if you rented instead. The calculator shows which option costs less based on your timeline, market appreciation rates, and individual financial situation."
    },
    {
      q: "What's the 5% rule for rent vs buy decisions?",
      a: "The 5% rule is a quick test: if annual rent is less than 5% of the home's purchase price, renting is typically cheaper. The 5% represents unrecovered ownership costs: 1% property tax + 1% maintenance + 3% cost of capital. Example: $400,000 home Ã— 5% = $20,000 yearly ($1,667/month). If comparable rent is $1,800/month ($21,600 yearly), buying is better. If rent is $1,400/month ($16,800 yearly), renting wins. This provides directional guidance before detailed calculator analysis."
    },
    {
      q: "Is the New York Times rent vs buy calculator accurate?",
      a: "The NYT rent vs buy calculator is one of the most sophisticated free tools available, accounting for opportunity cost, taxes, maintenance, closing costs, and home appreciation. It's highly accurate for modeling financial outcomes IF your inputs are realistic. The calculator's main limitations: it assumes you invest down payment savings if renting (many people don't), uses national averages that may not match your specific market, and can't account for personal factors like lifestyle value or forced savings benefits of homeownership. Use it for financial analysis, but recognize intangible factors also matter."
    },
    {
      q: "How much should I spend on a home using the 20/30/3 rule?",
      a: "The 20/30/3 rule is a conservative buying guideline: (1) 20% down paymentâ€”avoids PMI, gets better rates, ensures equity ($80,000 down on $400,000 home), (2) Housing costs under 30% of gross incomeâ€”$100,000 income = max $2,500/month for mortgage, taxes, insurance, (3) Home price maximum 3Ã— annual household incomeâ€”$100,000 income = max $300,000 home price. This rule is more conservative than lender maximums (which allow 43-50% DTI and 5Ã— income), leaving room for savings, emergencies, and lifestyle expenses."
    },
    {
      q: "Should I use Zillow or Realtor.com rent vs buy calculator?",
      a: "Zillow's rent vs buy calculator is better for quick comparisons with real-time market data for specific properties, while Realtor.com's calculator is simpler but less comprehensive. However, the New York Times calculator is the most sophisticated for financial modeling with opportunity cost considerations. Best approach: use Zillow for property-specific quick checks with actual market data, then the NYT calculator for comprehensive financial analysis including investment opportunity costs. Avoid oversimplified calculators that only compare monthly rent to monthly mortgageâ€”they miss crucial ownership costs."
    },
    {
      q: "What other factors should I consider beyond calculator results?",
      a: "Beyond financial calculations, consider: (1) Mobilityâ€”how likely are you to relocate for career or family? Moving within 5 years often favors renting, (2) Market conditionsâ€”are home prices inflated, stable, or declining in your area? (3) Personal preferencesâ€”do you value stability and control (buy) or flexibility (rent)? (4) Maintenance toleranceâ€”are you willing to handle repairs and yard work? (5) Financial disciplineâ€”will you actually invest down payment savings if you rent? (6) Life stageâ€”are you establishing roots or exploring options? Use calculators for financial framework, but let your specific circumstances guide the final decision."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.article) }}
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
            src="/images/articles/rent-vs-buy-calculator-which-costs-less.jpg"
            alt="Rent vs buy calculator comparing costs"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title & Metadata */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Rent vs. Buy Calculator: Which Costs Less?
        </h1>
        
        <div className="flex items-center text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <time>May 1, 2026</time>
          <span className="mx-3">â€¢</span>
          <span>12 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-2">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none">

            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              When Sarah pulled up three different calculators to decide between her $2,800-per-month Brooklyn apartment and a $650,000 condo purchase, she got three different answers. Zillow's rent vs buy calculator said buying made sense if she stayed 6 years. The New York Times calculator suggested renting was better for at least 8 years. Her carefully built Excel spreadsheet showed break-even at 7 years. Which calculator was right?
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            The confusion wasn't about bad calculatorsâ€”it was about different methodologies and assumptions. Understanding how rent vs buy calculators actually work, what variables matter most, and which tool to use for your situation can mean the difference between a smart financial decision and a costly mistake. Whether you're comparing options in NYC, Toronto, London, or anywhere else, the right calculator approach combined with decision frameworks like the 5% rule and 20/30/3 rule will guide you to the answer that's right for your circumstances.
          </p>

          <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">
            How Rent vs Buy Calculators Actually Work
          </h2>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            Every rent vs buy calculator, whether it's Zillow, the NYT, or an Excel template, asks the same fundamental question: Is the total cost of homeownership less than the total cost of renting over your expected timeframe? But the way they calculate those costs varies significantly, which explains why you might get different results from different tools.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            <strong>The buying costs calculation includes:</strong> Down payment (your initial capital locked into the home), closing costs (typically 2-5% of purchase price), monthly PITI payments (principal, interest, property taxes, insurance), maintenance and repairs (historically 1% of home value annually), HOA fees if applicable, opportunity cost of the down payment (what that money could earn invested elsewhere), and transaction costs when you eventually sell (typically 6-10% of sale price). From this total, calculators subtract equity gained through two sources: principal paydown (the portion of your mortgage payment that reduces the loan balance) and home appreciation (the increase in property value over time).
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            <strong>The renting costs calculation includes:</strong> Monthly rent multiplied by the number of months, plus annual rent increases (typically 3-5% per year based on historical averages), minus potential investment returns on the money you didn't spend on a down payment and the difference between rent and buying costs if rent is lower. Some calculators, particularly the NYT version, subtract investment returns assuming you invest your down payment savings at historical stock market returns (roughly 7% after inflation).
          </p>

          <div className="bg-slate-50 border-l-4 border-slate-300 p-6 my-8">
            <h3 className="font-bold text-lg text-slate-900 mb-3">
              Why Calculator Results Differ: Sarah's Real Brooklyn Example
            </h3>
            <p className="text-slate-700 mb-3">
              <strong>The Property:</strong> $650,000 condo in Brooklyn, 20% down ($130,000), 6.75% mortgage rate, $3,400/month PITI + $600 HOA + $200 maintenance = $4,200 total monthly
            </p>
            <p className="text-slate-700 mb-3">
              <strong>The Alternative:</strong> Continue renting at $2,800/month, increasing 4% annually
            </p>
            <p className="text-slate-700 mb-3">
              <strong>Zillow Calculator Result:</strong> Buy if staying 6+ years. Zillow assumes 3% home appreciation, doesn't account for investment returns on the $130,000 down payment, uses simplified transaction cost estimates.
            </p>
            <p className="text-slate-700 mb-3">
              <strong>NYT Calculator Result:</strong> Rent if staying less than 8 years. The NYT calculator includes opportunity costâ€”that $130,000 down payment invested at 7% annual return would grow to $182,000 in 5 years.
            </p>
            <p className="text-slate-700">
              <strong>Her Decision:</strong> Sarah plans to stay 10+ years. She bought the condo. At year 10, she'll have approximately $215,000 in equity while total extra costs compared to renting will be about $190,000â€”ahead by roughly $25,000 plus the intangible benefits of ownership she values.
            </p>
          </div>


          <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">
            Understanding Calculator Inputs & Regional Variations
          </h2>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            The accuracy of any rent or buy calculator depends entirely on the quality of your inputs. Generic defaults often don't reflect your actual market conditions, especially if you're using a rent vs buy calculator for NYC, Canada, UK, or India where real estate markets operate differently.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            <strong>Home price and down payment:</strong> Most calculators default to 20% down, which avoids PMI. However, if you're putting down less, you must include PMI costs ($100-300 monthly). The down payment also represents opportunity costâ€”that $80,000 could be invested earning 7-8% annually. A rent vs buy calculator with investment returns explicitly accounts for this.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            <strong>Mortgage rate:</strong> As of 2026, rates typically range from 6.5% to 7.5%. A 0.5% rate difference on a $400,000 mortgage equals roughly $150 more monthly. Use your actual pre-approved rate, not generic assumptions.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            <strong>Monthly rent and rent increases:</strong> Annual rent increases average 3-5% nationally, but vary by market: NYC historically sees 4-5%, Canadian cities 3-4%, Midwest markets 2-3%.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            <strong>Home appreciation:</strong> The national average is 3-4% annually. Use your local market's 10-year historical average rather than recent boom years.
          </p>

          <div className="bg-slate-50 border-l-4 border-slate-300 p-6 my-8">
            <h3 className="font-bold text-lg text-slate-900 mb-3">
              Regional Calculator Variations
            </h3>
            
            <p className="text-slate-700 mb-3">
              <strong>NYC (Rent vs Buy Calculator NYC):</strong> Property taxes 1.5-2.5%, HOA fees $500-2,000+ monthly. A $750,000 condo costs ~$5,200/month versus $3,200 rent. Break-even: 8-10 years.
            </p>

            <p className="text-slate-700 mb-3">
              <strong>Canada (Rent vs Buy Calculator Canada):</strong> 5-year mortgage terms typical (not 30-year fixed). CMHC insurance 2.8-4% if under 20% down. Toronto $850K townhouse costs ~$6,500/month versus $2,600 rent.
            </p>

            <p className="text-slate-700 mb-3">
              <strong>UK (Rent vs Buy Calculator UK):</strong> Stamp duty 2-12% on purchase. A Â£500,000 London flat costs ~Â£3,200/month versus Â£2,000 rent. Break-even: 9-12 years.
            </p>

            <p className="text-slate-700">
              <strong>India (Rent vs Buy Calculator India):</strong> EMI calculations, purchase prices typically 30-40Ã— annual rent. A â‚¹1 crore Mumbai flat rents for â‚¹35,000/month while mortgage EMI is â‚¹75,000/month.
            </p>
          </div>



          <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">
            The 5% Rule and 20/30/3 Rule
          </h2>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            <strong>The 5% Rule for Renting vs Buying:</strong> Unrecoverable homeownership costs equal roughly 5% of home value annually: 1% property tax + 1% maintenance + 1% cost of capital + 2% other costs. If monthly rent is less than (home price Ã— 5% Ã· 12), renting is likely better.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            <strong>Example:</strong> A $400,000 home has $20,000 in annual unrecoverable costs ($1,667/month). If rent is $1,400/month, renting saves money. If rent is $2,200/month, buying makes sense.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            <strong>The 20/30/3 Rule:</strong> 20% down payment minimum, maximum 30% of gross monthly income on housing, and home price should not exceed 3Ã— annual household income.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            <strong>Example:</strong> $100,000 annual income â†’ max $300,000 home, $60,000 down payment, $2,500/month maximum housing costs. This ensures you can afford not just the mortgage but also maintenance, repairs, and other life expenses.
          </p>

          <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">
            Choosing the Right Calculator
          </h2>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            Rather than searching for the single "best" calculator, use multiple tools. Start with Zillow's rent vs buy calculator for quick estimates. It uses simplified assumptions (3% appreciation, basic transaction costs)â€”good for directional guidance within 2-3 minutes.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            Next, use the New York Times (NYT/NYTimes) rent vs buy calculator for sophisticated analysis. This calculator's key advantage is including investment opportunity costâ€”what your down payment could earn if invested in index funds at 7% returns. It typically shows longer break-even timelines because it accounts for foregone investment returns.
          </p>

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            For detailed customization, use an Excel rent vs buy calculator. Excel templates let you adjust every variable: property tax rates, maintenance costs, different appreciation scenarios, varying rent increases, and selling costs. You can model "what if" scenarios to assess risk.
          </p>

          <div className="bg-slate-50 border-l-4 border-slate-300 p-6 my-8">
            <h3 className="font-bold text-lg text-slate-900 mb-3">
              Real Decision Process: Marcus in Austin
            </h3>
            <p className="text-slate-700 mb-3">
              Marcus, 32, software engineer earning $145,000, faced buying a $425,000 house or continuing to rent at $1,850/month.
            </p>
            <p className="text-slate-700 mb-3">
              <strong>Zillow:</strong> Buy if staying 5+ years. <strong>NYT:</strong> Break-even at 6.2 years with investment returns. <strong>Excel:</strong> Break-even at 5.8 years with his custom assumptions.
            </p>
            <p className="text-slate-700 mb-3">
              <strong>His Decision:</strong> Bought. Planning to stay 8+ years, Austin's strong job market, fixed payment versus rent that had increased 28% in three years.
            </p>
            <p className="text-slate-700">
              <strong>One Year Later:</strong> Home appraised at $458,000 (7.8% appreciation). He's paid down $12,000 in principal. Total equity: $45,000. Old apartment rents now at $2,400/month (30% increase).
            </p>
          </div>



          {/* FAQs */}
          <div className="mt-16 mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How to calculate if buying or renting is better?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Compare total costs over your expected timeframe. For buying: Add down payment + closing costs + monthly payments + maintenance + opportunity cost + selling costs, then subtract equity gained. For renting: Multiply monthly rent by time period, add rent increases, subtract investment returns. If buying total cost is less than renting total cost at your timeline, buying wins. Use multiple calculatorsâ€”Zillow for quick estimates, NYT for investment opportunity cost, Excel for customization. Break-even is typically 5-7 years.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What is the 5% rule for renting vs. buying a home?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  The 5% rule estimates annual unrecoverable homeownership costs at 5% of home value: 1% property tax + 1% maintenance + 1% cost of capital + 2% other costs. If monthly rent is less than (home price Ã— 5% Ã· 12), renting is likely better. Example: A $400,000 home has $20,000 annual unrecoverable costs ($1,667/month). If rent is $1,400/month, renting saves money. If rent is $2,200/month, buying makes sense. Adjust the percentages for your local property tax rates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Is it cheaper to rent or buy monthly?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Renting is usually cheaper month-to-month in the short term. A $400,000 home costs approximately $3,388 monthly (P&I + taxes + insurance + maintenance) versus $2,200 rent. However, buying builds equityâ€”roughly $10,000-15,000 in principal paydown year 1, plus $12,000 if the home appreciates 3%. Over 7+ years, buying typically becomes cheaper when you factor in equity gains, fixed payments, and avoided rent increases.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What is the 20/30/3 rule?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  The 20/30/3 rule is an affordability guideline: 20% down payment minimum, maximum 30% of gross monthly income on housing, and home price should not exceed 3Ã— your annual household income. Example: With $100,000 annual income, target a maximum $300,000 home, save $60,000 for down payment, and ensure total monthly housing costs stay under $2,500. This prevents overextending financially.
                </p>
              </div>



              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Which rent vs buy calculator is most accurateâ€”Zillow, NYT, or Excel?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Each serves different purposes. Zillow offers quick estimatesâ€”good for initial screening. The New York Times (NYT/NYTimes) calculator is more sophisticated, includes investment opportunity cost with adjustable returns (default 7%)â€”best for comprehensive analysis. Excel offers complete customizationâ€”ideal for detailed planning. Use all three: Zillow for quick check, NYT for thorough analysis, Excel to model your specific assumptions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How does rent vs buy calculator with investment returns work?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  A rent vs buy calculator with investment considers opportunity costâ€”what your down payment could earn if invested elsewhere. If you have $80,000 for down payment, investing it at 7% average annual return would grow to approximately $112,000 in 5 years. The calculator compares this investment growth against home equity gained. This often extends break-even timelines because investment returns (7-10% historically) can outpace home equity growth in early years when most mortgage payments go to interest.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Is it better for me to rent or buy?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  It depends on five key factors: (1) Timelineâ€”if staying less than 5 years, usually rent; 7+ years typically favors buying. (2) Financial readinessâ€”can you afford 20% down plus 6 months reserves? (3) Career stabilityâ€”uncertain job or likely relocation favors renting. (4) Local marketâ€”calculate price-to-rent ratio; above 20 suggests renting, below 15 suggests buying. (5) Life stageâ€”value stability and control (buy) or flexibility (rent)? Use a calculator with your actual numbers, apply the 5% rule and 20/30/3 rule.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How much income do you need to buy a $300,000 house in Canada?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  For a $300,000 house in Canada, you need approximately $75,000-80,000 annual gross income. With 20% down ($60,000), your mortgage is $240,000. At 5.5% interest (typical Canadian 5-year fixed), monthly P&I is $1,360. Add property taxes ($250/month), insurance ($120/month), and maintenance ($250/month) for total housing costs of $1,980/month. Lenders require housing costs under 30-32% of gross income: $1,980 Ã· 0.30 = $79,200 annually. Additionally, total debt payments must stay under 40-44% of income due to Canada's mortgage stress test.
                </p>
              </div>
            </div>
          </div>



          {/* Conclusion */}
          <div className="mt-12 p-6 bg-slate-50 border-l-4 border-slate-900">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
              Make Your Decision With Confidence
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              The rent vs buy decision isn't about finding the "right" calculatorâ€”it's about understanding your market, your finances, and your timeline. Use Zillow's rent vs buy calculator for a quick directional check, the New York Times calculator for sophisticated analysis including investment opportunity cost, and Excel for customized scenario planning.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Apply the 5% rule to determine if your market's price-to-rent ratio favors buying, and verify affordability with the 20/30/3 rule. For a deeper dive into the complete costs of each option, read our companion guide on <Link href="/renting-vs-buying-a-home-full-cost-comparison" className="text-indigo-600 hover:text-indigo-800 font-medium underline">renting vs buying a home with full cost comparison</Link>.
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
                  href="/renting-vs-buying-a-home-full-cost-comparison"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Renting vs. Buying a Home: A Full Cost Comparison
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
                  href="/how-to-calculate-your-monthly-mortgage-payment"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  How to Calculate Your Monthly Mortgage Payment
                </Link>
              </li>
              <li>
                <Link
                  href="/income-requirement-calculator-how-much-you-need"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Income Requirement Calculator: How Much You Need
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



