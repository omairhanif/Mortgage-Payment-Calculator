'use client';

import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';

export default function TermsPage() {
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
            <span className="text-white font-medium">Terms of Service</span>
          </nav>

          {/* Page Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight">
              Terms of Service
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <article className="prose prose-slate max-w-none">
            
            {/* Section 1: Acceptance of Terms */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-6">
              1. Acceptance of Terms
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Welcome to Mortgage Calculators ("we," "our," or "us"). By accessing or using our website and mortgage calculation tools, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the revised Terms.
            </p>

            {/* Section 2: Use of Calculators */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              2. Use of Calculators & Tools
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Our mortgage calculators are designed to provide estimates and educational information about mortgage payments, affordability, refinancing, and related financial concepts. You may use our calculators for personal, non-commercial purposes only.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Important:</strong> All calculator results are estimates based on the inputs you provide. Actual mortgage terms, payments, interest rates, fees, and costs may differ significantly from calculator results. Our tools are not a substitute for professional financial, legal, or lending advice.
            </p>

            {/* Section 3: Disclaimer of Financial Advice */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              3. Disclaimer of Financial Advice
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Mortgage Calculators does not provide financial, legal, or lending advice.</strong> Our calculators and content are for informational and educational purposes only. We are not a lender, mortgage broker, financial advisor, or legal service provider.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Before making any mortgage or financial decisions, you should consult with qualified professionals including mortgage lenders, financial advisors, tax professionals, and attorneys who can assess your individual circumstances and provide personalized guidance.
            </p>

            {/* Section 4-7 */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              4. Accuracy & Liability
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              While we strive to ensure our calculators produce mathematically accurate results based on user inputs, we make no representations or warranties about the accuracy, reliability, completeness, or timeliness of calculator results. Actual mortgage terms may differ significantly from estimates.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              5. Limitation of Liability
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MORTGAGE CALCULATORS SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF OUR SERVICES, INCLUDING FINANCIAL DECISIONS MADE BASED ON CALCULATOR RESULTS.</strong> You use our calculators and content at your own risk.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              6. Intellectual Property
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              All content, features, functionality, calculators, and materials on our website are owned by Mortgage Calculators and protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or modify our content without express written permission.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              7. User Responsibilities
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              When using our website, you agree to provide accurate information, use our services for lawful purposes only, not interfere with or disrupt our website, and respect our intellectual property rights.
            </p>

            {/* Section 8-12 */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              8. Third-Party Links
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Our website may contain links to third-party websites or services that are not owned or controlled by Mortgage Calculators. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. You access third-party websites at your own risk.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              9. Prohibited Uses
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              You may not use our website for any illegal or unauthorized purpose, including violating laws, infringing intellectual property rights, transmitting malicious code, or engaging in any conduct that restricts or inhibits anyone's use of our services.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              10. Changes to Terms
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              We reserve the right to modify or replace these Terms at any time. Material changes will be effective immediately upon posting. Your continued use after changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              11. Governing Law
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions. Any disputes shall be resolved in the appropriate courts.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              12. Contact Information
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
              <p className="text-base text-slate-700 font-semibold mb-2">Mortgage Calculators</p>
              <p className="text-sm text-slate-600">Email: support@mortgagecalculators.com</p>
              <p className="text-sm text-slate-600 mt-1">Website: www.mortgagecalculators.com</p>
            </div>

            {/* Disclaimer Box */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mt-12">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-amber-900">Legal Disclaimer:</strong> These Terms of Service constitute a legal agreement between you and Mortgage Calculators. By using our website and calculators, you acknowledge that you have read, understood, and agree to be bound by these Terms. Our calculators provide estimates only and should not be relied upon as the sole basis for financial decisions. Always verify information with qualified professionals and lenders before making mortgage commitments.
              </p>
            </div>

          </article>
        </div>
      </section>
    </div>
  );
}

