import Link from "next/link";
import { Landmark } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/60 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo & Description */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <Landmark className="h-4 w-4" />
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-slate-900">
              Mortgage Calculators
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
            Smart mortgage calculators and helpful resources for homebuyers and homeowners.
          </p>
        </div>

        {/* 3 Column Navigation - Centered */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {/* Column 1: Calculators */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">Calculators</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Mortgage Payment
                </Link>
              </li>
              <li>
                <Link href="/mortgage-affordability-calculator" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Affordability
                </Link>
              </li>
              <li>
                <Link href="/heloc-calculator" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  HELOC
                </Link>
              </li>
              <li>
                <Link href="/fixed-vs-arm-calculator" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  ARM Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Popular Tools */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">Popular Tools</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/refinance-calculator" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Refinance
                </Link>
              </li>
              <li>
                <Link href="/fha-loan-calculator" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  FHA Calculator
                </Link>
              </li>
              <li>
                <Link href="/va-loan-calculator" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  VA Calculator
                </Link>
              </li>
              <li>
                <Link href="/biweekly-payment-calculator" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Biweekly Payments
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/articles" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-400">
              &copy; {currentYear} Mortgage Calculators
            </p>
            <p className="text-xs text-slate-400">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
