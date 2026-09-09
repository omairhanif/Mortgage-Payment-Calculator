import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
            Terms of Use
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-slate-900">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-6 text-sm leading-7 text-slate-600">
          <p>
            Mortgage calculators and educational content on this website are provided for information and planning purposes only.
            They are estimates and do not constitute financial, legal, or lending advice.
          </p>
          <p>
            Use the calculators as budgeting and comparison tools. Final mortgage terms, approval, fees, taxes, and rates depend
            on your lender, credit profile, and property details.
          </p>
          <p>
            We do not guarantee the accuracy of any estimate or recommendation shown on this website. Please consult a qualified
            professional before making financial decisions.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/privacy" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-indigo-700">
            Privacy Policy
          </Link>
          <Link href="/contact" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-indigo-700">
            Contact
          </Link>
          <Link href="/" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-indigo-700">
            Mortgage Payment Calculator
          </Link>
        </div>
      </section>
    </main>
  );
}
