'use client';

import Link from 'next/link';
import { ChevronRight, Mail, MessageSquare, HelpCircle, Headphones } from 'lucide-react';

export default function ContactPage() {
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
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          {/* Page Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <article className="prose prose-slate max-w-none">
            
            {/* Introduction */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Thank you for your interest in Mortgage Calculators! Whether you have questions about our tools, need technical support, or want to provide feedback, we'd love to hear from you.
            </p>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
              {/* Email Support */}
              <div className="border border-slate-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 mb-4">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Email Support</h3>
                <p className="text-sm text-slate-600 mb-3">For general inquiries and support</p>
                <a href="mailto:support@mortgagecalculators.com" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  support@mortgagecalculators.com
                </a>
              </div>

              {/* General Inquiries */}
              <div className="border border-slate-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 mb-4">
                  <MessageSquare className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">General Inquiries</h3>
                <p className="text-sm text-slate-600 mb-3">Questions about our services</p>
                <a href="mailto:info@mortgagecalculators.com" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  info@mortgagecalculators.com
                </a>
              </div>

              {/* Technical Support */}
              <div className="border border-slate-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 mb-4">
                  <Headphones className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Technical Support</h3>
                <p className="text-sm text-slate-600 mb-3">Calculator issues or bugs</p>
                <a href="mailto:tech@mortgagecalculators.com" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  tech@mortgagecalculators.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Send Us a Message
            </h2>
            
            <div className="not-prose bg-slate-50 border border-slate-200 rounded-lg p-8 mb-12">
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    disabled
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    disabled
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    disabled
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    disabled
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  disabled
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>

                <p className="text-xs text-slate-500 text-center mt-4">
                  Note: This is a demo form. Please use the email addresses above to contact us directly.
                </p>
              </form>
            </div>

            {/* FAQ Section */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-semibold text-slate-900 mb-2">Are your calculators free to use?</h3>
                <p className="text-base text-slate-600">
                  Yes! All our mortgage calculators are completely free. No registration, no hidden fees, no credit card required.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-semibold text-slate-900 mb-2">Do you collect or store my financial data?</h3>
                <p className="text-base text-slate-600">
                  No. All calculations are performed locally in your browser. We do not collect, transmit, or store any of the financial information you enter into our calculators.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-semibold text-slate-900 mb-2">Can you help me get a mortgage?</h3>
                <p className="text-base text-slate-600">
                  We are not a lender or mortgage broker. We provide educational tools to help you understand mortgage costs. For actual mortgage applications, please contact licensed lenders or mortgage brokers.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-semibold text-slate-900 mb-2">How accurate are your calculator results?</h3>
                <p className="text-base text-slate-600">
                  Our calculators use industry-standard formulas and provide mathematically accurate estimates based on the inputs you provide. However, actual loan terms may vary by lender and individual circumstances.
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Response Time</h3>
              <p className="text-sm text-slate-600">
                We typically respond to inquiries within 24-48 hours during business days (Monday-Friday). For urgent technical issues, please include "URGENT" in your subject line.
              </p>
            </div>

            {/* Disclaimer Box */}
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mt-12">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-indigo-900">Important Note:</strong> Mortgage Calculators provides educational tools and informational content only. We are not a financial institution, lender, or mortgage broker. Our calculators produce estimates and should not be used as the sole basis for financial decisions. Always consult with qualified mortgage professionals, financial advisors, and lenders for personalized guidance.
              </p>
            </div>

          </article>
        </div>
      </section>
    </div>
  );
}
