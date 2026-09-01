'use client';

import Link from 'next/link';
import { ChevronRight, Shield } from 'lucide-react';
import { getStructuredData } from './server';

export default function PrivacyPage() {
  const structuredData = getStructuredData();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webPage) }}
      />
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
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          {/* Page Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <article className="prose prose-slate max-w-none">
            
            {/* Section 1: Introduction */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-6">
              1. Introduction
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Welcome to Mortgage Calculators ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we handle information when you use our website and mortgage calculator tools. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our services.
            </p>

            {/* Section 2: Information We Collect */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              2. Information We Collect
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Calculator Inputs:</strong> When you use our mortgage calculators, you voluntarily enter financial information such as home price, down payment, interest rate, loan term, property taxes, and insurance costs. This information is processed locally in your browser and is not transmitted to our servers or stored by us.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Usage Data:</strong> We automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, operating system, referring URLs, pages viewed, and time spent on our site. This data helps us understand how visitors use our calculators and improve our services.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              <strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to collect information about your browsing behavior, preferences, and interactions with our site. You can control cookie settings through your browser preferences.
            </p>

            {/* Section 3: How We Use Your Information */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              3. How We Use Your Information
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-base text-slate-600 leading-relaxed mb-6 space-y-2">
              <li><strong>Provide Calculator Services:</strong> To power our mortgage calculators and deliver accurate results based on your inputs</li>
              <li><strong>Improve User Experience:</strong> To analyze usage patterns, identify popular features, and enhance website functionality</li>
              <li><strong>Site Analytics:</strong> To track visitor statistics, page views, and engagement metrics using tools like Google Analytics</li>
              <li><strong>Security and Fraud Prevention:</strong> To protect our website from malicious activity, abuse, and unauthorized access</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
            </ul>

            {/* Section 4: Cookies and Tracking Technologies */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Our website uses cookies to enhance your experience and collect analytics data. Cookies are small text files stored on your device that help us recognize your browser and remember certain information.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              <strong>Types of Cookies We Use:</strong>
            </p>
            <ul className="list-disc list-inside text-base text-slate-600 leading-relaxed mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality and navigation</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits</li>
            </ul>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              You can disable cookies through your browser settings, though this may limit certain features of our website.
            </p>

            {/* Section 5-7 */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              5. Data Security
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              We implement reasonable security measures to protect the information we collect from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              6. Third-Party Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Our website may use third-party services for analytics, advertising, and other purposes. These third parties may collect information about your online activities over time and across different websites. We are not responsible for their privacy practices.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              7. Your Privacy Rights
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Depending on your location, you may have certain rights regarding your personal information, including access, correction, deletion, and opt-out options. To exercise these rights, please contact us using the information provided below.
            </p>

            {/* Section 8-10 */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              8. Children's Privacy
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Our website and services are not directed to children under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information promptly.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Effective Date" at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              10. Contact Us
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
              <p className="text-base text-slate-700 font-semibold mb-2">Mortgage Calculators</p>
              <p className="text-sm text-slate-600">Email: privacy@mortgagecalculators.com</p>
              <p className="text-sm text-slate-600 mt-1">Website: www.mortgagecalculators.com</p>
            </div>

            {/* Disclaimer Box */}
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mt-12">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-indigo-900">Important Disclaimer:</strong> Mortgage Calculators provides educational and informational tools only. Our calculators do not collect, store, or transmit your financial data to our servers. All calculations are performed locally in your browser. We do not provide financial, legal, or lending advice. Always consult with qualified professionals before making mortgage or financial decisions.
              </p>
            </div>

          </article>
        </div>
      </section>
    </div>
    </>
  );
}

