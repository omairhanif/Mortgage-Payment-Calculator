'use client';

import Link from 'next/link';
import { ChevronRight, Building2, Calculator, Shield, BookOpen, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-sky-550 to-sky-600 py-8">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">About Us</span>
          </nav>

          {/* Page Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <article className="prose prose-slate max-w-none">
            
            {/* Mission Statement */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At Mortgage Calculators, our mission is to simplify the home-buying journey by providing free, accurate, and easy-to-use mortgage calculation tools. We believe that everyone deserves access to clear, transparent information when making one of life's biggest financial decisions—buying a home.
            </p>

            {/* What We Offer */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              What We Offer
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Our comprehensive suite of mortgage calculators helps you understand every aspect of home financing:
            </p>
            <ul className="list-disc list-inside text-base text-slate-600 leading-relaxed mb-8 space-y-2">
              <li><strong>Mortgage Payment Calculator:</strong> Estimate your monthly payments including principal, interest, taxes, and insurance</li>
              <li><strong>Affordability Calculator:</strong> Determine how much home you can comfortably afford based on your income and expenses</li>
              <li><strong>Refinance Calculator:</strong> Analyze potential savings and break-even points when refinancing your mortgage</li>
              <li><strong>ARM Calculators:</strong> Compare adjustable-rate mortgages and understand rate adjustment scenarios</li>
              <li><strong>Specialized Tools:</strong> FHA, VA, HELOC, jumbo loans, and more specialized mortgage calculations</li>
              <li><strong>Educational Content:</strong> In-depth articles and guides to help you make informed decisions</li>
            </ul>

            {/* Why Choose Us */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Why Choose Mortgage Calculators
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
              {/* Accurate Calculations */}
              <div className="border border-slate-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 mb-4">
                  <Calculator className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Accurate Calculations</h3>
                <p className="text-sm text-slate-600">
                  Industry-standard formulas ensure precise estimates based on your financial inputs and current market conditions.
                </p>
              </div>

              {/* Privacy & Security */}
              <div className="border border-slate-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Privacy First</h3>
                <p className="text-sm text-slate-600">
                  All calculations happen locally in your browser. We never collect, store, or transmit your financial data.
                </p>
              </div>

              {/* Educational Resources */}
              <div className="border border-slate-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Educational Content</h3>
                <p className="text-sm text-slate-600">
                  Comprehensive guides and articles help you understand mortgage concepts and make informed decisions.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              How It Works
            </h2>
            <div className="space-y-4 mb-12">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Choose Your Calculator</h3>
                  <p className="text-base text-slate-600">
                    Select from our wide range of mortgage calculators based on your specific needs—whether you're buying, refinancing, or exploring loan options.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Enter Your Information</h3>
                  <p className="text-base text-slate-600">
                    Input your financial details such as home price, down payment, interest rate, loan term, and other relevant factors. All data stays on your device.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Get Instant Results</h3>
                  <p className="text-base text-slate-600">
                    View detailed breakdowns, amortization schedules, charts, and comprehensive analysis to help you understand the true cost of your mortgage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Make Informed Decisions</h3>
                  <p className="text-base text-slate-600">
                    Use the insights from our calculators along with professional advice from lenders and financial advisors to make confident home financing decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Our Commitment to Transparency
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              We believe in complete transparency about how our tools work and their limitations:
            </p>
            <ul className="list-disc list-inside text-base text-slate-600 leading-relaxed mb-8 space-y-2">
              <li><strong>100% Free:</strong> All our calculators and resources are completely free to use with no hidden costs</li>
              <li><strong>No Data Collection:</strong> We don't collect, store, or sell your personal financial information</li>
              <li><strong>Educational Purpose:</strong> Our tools provide estimates to help you understand mortgage costs, not financial advice</li>
              <li><strong>No Lending Services:</strong> We are not a lender or broker—we don't originate loans or earn commissions</li>
              <li><strong>Accurate Formulas:</strong> We use industry-standard mortgage calculations trusted by financial professionals</li>
              <li><strong>Regular Updates:</strong> We continuously improve our calculators based on user feedback and market changes</li>
            </ul>

            {/* Who We Serve */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-3">
                <Users className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">First-Time Homebuyers</h3>
                  <p className="text-sm text-slate-600">
                    Navigate the complex world of mortgages with easy-to-understand tools and educational content.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <TrendingUp className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Current Homeowners</h3>
                  <p className="text-sm text-slate-600">
                    Explore refinancing options, calculate payoff scenarios, and understand your equity opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Calculator className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Real Estate Professionals</h3>
                  <p className="text-sm text-slate-600">
                    Quick reference tools to help clients understand payment scenarios and affordability ranges.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <BookOpen className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Financial Learners</h3>
                  <p className="text-sm text-slate-600">
                    Anyone interested in understanding how mortgages work and exploring different loan scenarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer Box */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mt-12">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-amber-900">Important Disclaimer:</strong> Mortgage Calculators is an educational platform providing free mortgage calculation tools. We are not a financial institution, lender, mortgage broker, or financial advisor. Our calculators provide estimates based on the information you input and should not be used as the sole basis for financial decisions. Actual mortgage terms, interest rates, fees, and monthly payments will vary based on your credit profile, lender policies, and market conditions. Always consult with qualified mortgage professionals, lenders, and financial advisors before making home financing commitments.
              </p>
            </div>

          </article>
        </div>
      </section>
    </div>
  );
}
