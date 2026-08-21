import Link from "next/link";
import { Landmark } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-100 bg-slate-50/60 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
                <Landmark className="h-4 w-4" />
              </div>
              <span className="font-serif text-base font-bold tracking-tight text-slate-900">
                Mortgage<span className="text-indigo-600 font-sans font-medium">Calc</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              An advanced, interactive suite of analytical financial tools. Calculate precise payments, 
              compare structures, model early principal paydowns, and analyze refinance options in real time.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">Calculators</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Payment Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/amortization" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Amortization Schedule
                </Link>
              </li>
              <li>
                <Link href="/calculators/affordability" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Home Affordability
                </Link>
              </li>
              <li>
                <Link href="/calculators/compare" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Loan Comparison
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">Advanced tools</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/calculators/extra-payment" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Extra Payments
                </Link>
              </li>
              <li>
                <Link href="/calculators/pmi" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  PMI Estimator
                </Link>
              </li>
              <li>
                <Link href="/mortgage?subcalculator=refinance" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Refinance Break-Even
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/60 pt-8">
          <p className="text-xs leading-relaxed text-slate-400">
            Disclaimer: The calculators provided by MortgageCalc are for informational and educational purposes only 
            and do not constitute professional financial or lending advice. Actual mortgage terms, interest rates, 
            PMI premiums, and insurance costs will depend on your individual credit profile, lender policies, and market 
            conditions. Always consult with a qualified lending professional before making home purchase or financing decisions.
          </p>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
            <p className="text-xs text-slate-400">&copy; {currentYear} MortgageCalc. Designed with mathematical precision.</p>
            <div className="flex gap-4 text-xs text-slate-400">
              <span className="hover:text-slate-600 transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-600 transition-colors cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
