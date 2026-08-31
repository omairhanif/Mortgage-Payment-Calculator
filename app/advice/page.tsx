import Link from "next/link";

export const metadata = {
  title: "Mortgage Advice | MortgagePro",
  description: "Expert mortgage guidance, refinancing tips, PMI strategies, and home affordability advice.",
};

export default function AdvicePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-8 lg:px-12">{" "}
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            Mortgage Advice
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Practical mortgage guidance for every homebuyer.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Learn how to compare loan options, lower your monthly payment, avoid PMI, and make confident financing decisions with modern mortgage tools.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Refinance strategy</h2>
            <p className="mt-2 text-sm text-slate-600">
              Understand when refinancing makes sense, how to calculate break-even points, and how closing costs affect your savings.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">PMI optimization</h2>
            <p className="mt-2 text-sm text-slate-600">
              Explore ways to reduce or eliminate PMI, estimate premiums, and learn what triggers mortgage insurance removal.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Affordability planning</h2>
            <p className="mt-2 text-sm text-slate-600">
              See how debt-to-income ratios, loan term, and down payment choices affect your budget and buying capacity.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Payment optimization</h2>
            <p className="mt-2 text-sm text-slate-600">
              Learn how extra payments, amortization schedules, and loan comparisons can help you save interest and pay off sooner.
            </p>
          </article>
        </section>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Get started with calculators</h3>
            <p className="mt-2 text-sm text-slate-600">
              Choose the right tool for the question you want to answer.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <Link href="/mortgage?subcalculator=refinance" className="font-semibold text-indigo-600 hover:text-indigo-700">
                  Refinance break-even analysis
                </Link>
              </li>
              <li>
                <Link href="/mortgage-affordability-calculator" className="font-semibold text-indigo-600 hover:text-indigo-700">
                  PMI estimation and affordability guidance
                </Link>
              </li>
              <li>
                <Link href="/second-mortgage-calculator" className="font-semibold text-indigo-600 hover:text-indigo-700">
                  Home affordability and buying power
                </Link>
              </li>
              <li>
                <Link href="/extra-payment-calculator" className="font-semibold text-indigo-600 hover:text-indigo-700">
                  Loan comparison strategy
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-semibold text-slate-900">Headline advice</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A stronger mortgage decision starts with clarity on rate, term, and cost composition. Use the calculators to validate assumptions, but keep credit health, down payment, and long-term savings as the main anchors of your plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
