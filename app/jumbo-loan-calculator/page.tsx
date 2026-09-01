"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Building2 } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";
import { getStructuredData } from "./server";

export default function JumboLoanCalculatorPage() {
  const structuredData = getStructuredData();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "What is a jumbo loan?",
      a: "A jumbo loan exceeds the conforming loan limits set by Fannie Mae and Freddie Mac ($766,550 in most counties for 2024, up to $1,149,825 in high-cost areas). Because these loans can't be purchased by government-sponsored entities, they carry different requirements and often slightly higher rates."
    },
    {
      q: "What are the requirements for a jumbo loan?",
      a: "Jumbo loans typically require: 10-20% down payment (sometimes more), credit score of 700+ (often 740+ for best rates), debt-to-income ratio below 43%, 6-12 months reserves (savings equal to mortgage payments), and full income documentation. Requirements are stricter than conforming loans."
    },
    {
      q: "Are jumbo loan rates higher than conventional rates?",
      a: "Historically yes, but the gap has narrowed. Jumbo rates are often only 0.25-0.50% higher than conforming rates, and sometimes competitive or even lower for well-qualified borrowers. Rates vary significantly based on credit score, down payment, and reserves."
    },
    {
      q: "How much down payment do I need for a jumbo loan?",
      a: "Minimum down payments typically range from 10-20%, with 20% being most common to avoid mortgage insurance. Some lenders offer jumbo loans with as little as 10% down, but expect higher rates and stricter qualification requirements. Larger down payments (25%+) often secure better rates."
    },
    {
      q: "Do jumbo loans require mortgage insurance?",
      a: "Usually no, if you put down 20% or more. Some lenders offer jumbo loans with less than 20% down but will require PMI, which is expensive on large loan amounts. Most jumbo borrowers put down 20%+ to avoid PMI and secure better terms."
    },
    {
      q: "Can I use a jumbo loan for investment properties?",
      a: "Yes, but requirements are even stricter: typically 25-30% down payment, higher interest rates, larger reserves (12+ months), and lower maximum debt-to-income ratios. Investment property jumbo loans are considered higher risk and priced accordingly."
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
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">

        {/* Introduction Section */}
        <div className="mb-8 mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-8 w-8 text-indigo-600 flex-shrink-0" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
              Jumbo Loan Calculator
            </h1>
          </div>
          <div className="h-px bg-indigo-600 mb-6"></div>
          <div className="space-y-4 text-base text-slate-600 leading-relaxed">
            <p>Calculate monthly payments for jumbo loans that exceed conforming loan limits, typically requiring larger down payments, higher credit scores, and slightly elevated interest rates.</p>
            <p>Understand jumbo loan requirements and costs for financing luxury properties or homes in high-cost areas where standard loan limits don't apply.</p>
          </div>
        </div>

        <MortgageCalculator category="rates" forcedSubcalculator="jumbo" />
      </div>

      {/* How It Works Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              How It Works
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                This calculator shows payments and requirements for jumbo loans, which exceed conforming loan limits set by Fannie Mae and Freddie Mac ($766,550 in most areas, higher in expensive markets). Jumbo loans typically require larger down payments, higher credit scores, and offer different rates than conforming loans.
              </p>
              <p>
                Enter your home price, down payment, interest rate, and loan term. The calculator compares jumbo loan scenarios and shows how loan amount affects qualification requirements, including minimum credit score, debt-to-income ratios, and reserve requirements that lenders typically require.
              </p>
              <p>
                Results display monthly payments, total interest costs, and additional qualification criteria for jumbo loans. While jumbo loans mean higher balances and stricter requirements, they enable purchases of luxury or high-priced homes in expensive markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Understanding Jumbo Loan Calculations: Your Complete Guide to High-Balance Financing
              </h2>
              
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Jumbo loans—mortgages that exceed the conforming loan limits set by the Federal Housing Finance Agency (FHFA)—represent a significant segment of the luxury and high-cost real estate market. For 2024, the baseline conforming loan limit is $766,550 for single-family homes in most counties, with higher limits up to $1,149,825 in designated high-cost areas. Any loan amount above these thresholds requires jumbo financing, which comes with stricter qualification requirements, higher interest rates, and larger down payments than conventional conforming loans.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A jumbo loan calculator helps you estimate monthly payments and determine affordability for luxury property purchases, but understanding how jumbo mortgages differ from conventional loans is essential. Unlike conforming loans that can be purchased by Fannie Mae or Freddie Mac, jumbo loans remain on lenders' books or are sold to private investors, creating additional risk that translates to more stringent underwriting standards. This calculator provides estimates based on your inputs—your actual qualification depends on credit score, debt-to-income ratios, reserve requirements, and lender-specific policies.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  What a Jumbo Loan Calculator Shows You
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  A jumbo loan calculator processes your inputs—home price, down payment, interest rate, and loan term—to estimate your monthly payment including principal, interest, property taxes, homeowners insurance, and any HOA fees. Unlike conventional loan calculators, jumbo calculators must account for the significantly higher down payment requirements (typically 10-20% minimum) and higher interest rates that lenders charge for non-conforming loans.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  The calculator determines your loan amount by subtracting your down payment from the purchase price, then calculates monthly principal and interest based on your rate and term. It adds estimated property taxes (which can be substantial on luxury properties), homeowners insurance (often higher for expensive homes), and any HOA fees. The result is your total monthly housing payment, though keep in mind that actual qualification depends on factors beyond the payment itself, including credit score minimums (typically 700-720+), debt-to-income ratios (usually capped at 43% or lower), and significant cash reserves (often 6-12 months of payments).
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  One advantage of jumbo loans: they typically don't require mortgage insurance, even with down payments below 20%, though some lenders may require it with down payments under 10-20%. This distinguishes jumbo financing from conventional conforming loans, which require PMI with less than 20% down. However, the higher interest rate on jumbo loans often outweighs any savings from avoiding PMI.
                </p>

                <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-4">
                  Breaking Down Jumbo Loan Requirements
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Understanding jumbo loan calculations requires knowing the significantly stricter qualification criteria that lenders impose on non-conforming loans. Because lenders retain the risk rather than selling loans to Fannie Mae or Freddie Mac, they compensate with more conservative underwriting.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Down Payment Requirements:</strong> While some lenders advertise jumbo loans with as little as 10% down, most require 15-20% minimum for luxury properties. The more you put down, the better your rate and terms. Down payments of 25-30% often unlock the best pricing. On a $1,500,000 home, expect to bring $300,000-$450,000 to closing.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Credit Score Standards:</strong> Jumbo lenders typically require minimum credit scores of 700-720, with many preferring 740+ for the best rates. Unlike FHA or even conventional loans that may accept scores in the 600s, jumbo underwriting leaves little room for credit imperfections. Lenders review not just your score but your complete credit history, payment patterns, and credit utilization.
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  <strong>Debt-to-Income Ratios:</strong> Maximum DTI ratios for jumbo loans typically cap at 43%, though some portfolio lenders may go to 45% with exceptional credit and reserves. This is more restrictive than conventional lending (often 50% max) and means you need substantial income. For a $7,000 monthly payment, you'd need roughly $16,300 in monthly gross income just to meet the 43% threshold, assuming no other debts.
                </p>

              <p className="text-base text-slate-600 leading-relaxed mb-4">
                <strong>Reserve Requirements:</strong> Lenders require significant cash reserves after closing—typically 6-12 months of mortgage payments sitting in accounts after you've made your down payment and covered all closing costs. On a $10,000 monthly payment, that's $60,000-$120,000 in liquid reserves. This requirement ensures you can weather income disruptions without defaulting.
              </p>
            </article>
          </div>
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
              <p className="text-slate-600 text-base">
                Common questions about this calculator
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-serif text-base font-bold text-slate-900 pr-4">
                      {faq.q}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
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
