import Link from "next/link";
import { Landmark } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const calculatorLinks = [
    { href: "/mortgage-payment-calculator-estimate-monthly-costs", label: "Mortgage Payment" },
    { href: "/mortgage-affordability-calculator", label: "Affordability" },
    { href: "/heloc-calculator", label: "HELOC" },
    { href: "/fixed-vs-arm-calculator", label: "ARM Calculator" },
    { href: "/refinance-calculator", label: "Refinance" },
    { href: "/fha-loan-calculator", label: "FHA Loan" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/guide", label: "Guide" },
    { href: "/blog", label: "Blogs" },
    { href: "/about", label: "About" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
    { href: "/advice", label: "Advice" },
  ];

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/60 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-200 bg-indigo-600 text-white shadow-sm">
                <Landmark className="h-5 w-5" />
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-slate-900">
                Mortgage Payment Calculator
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Smart mortgage calculators and practical planning resources for homebuyers, homeowners, and future borrowers.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
                Free
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
                Compare
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
                Tools
              </span>
            </div>
          </div>

          {/* Column 2 - Calculators */}
          <div>
            <h4 className="font-serif text-lg font-bold tracking-tight text-slate-900">
              Calculators
            </h4>
            <ul className="mt-4 space-y-2.5">
              {calculatorLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-indigo-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold tracking-tight text-slate-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-indigo-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Legal & Support */}
          <div>
            <h4 className="font-serif text-lg font-bold tracking-tight text-slate-900">
              Legal & Support
            </h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-indigo-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
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
