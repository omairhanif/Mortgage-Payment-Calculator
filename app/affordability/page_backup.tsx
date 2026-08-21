"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp, Scale, Wallet, CheckCircle, type LucideIcon } from "lucide-react";
import MortgageCalculator from "@/components/calculator/MortgageCalculator";

function AffordabilityPageContent() {
  const searchParams = useSearchParams();
  const subcalculator = searchParams.get("subcalculator") || "rent-vs-buy";
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Content for each calculator (keeping existing structure - truncated for brevity)
  const content: Record<string, { icon: LucideIcon; title: string; description: [string, string]; howItWorks: string[]; faqs: Array<{ q: string; a: string }> }> = {
    "rent-vs-buy": {
      icon: Scale,
      title: "Rent vs Buy Calculator",
      description: [
        "Compare the financial implications of renting versus buying a home by analyzing monthly costs, tax benefits, home appreciation, and opportunity costs over time.",
        "Make an informed housing decision by understanding the true cost of homeownership versus renting based on your location, financial situation, and long-term plans."
      ],
      howItWorks: [
        "This calculator helps you decide whether renting or buying makes more financial sense for your situation.",
        "Enter your potential home price, down payment, mortgage details, property taxes, insurance, and maintenance costs for buying.",
        "Results show a side-by-side comparison of total costs, including the break-even point."
      ],
      faqs: []
    },
    // ... other subcalculators
  };

  const currentContent = content[subcalculator];

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero content */}
      </div>

      {/* Calculator Section */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-12">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <MortgageCalculator category="affordability" />
        </Suspense>
      </div>

      {/* Educational Articles - All 3 inline here */}
      {subcalculator === "rent-vs-buy" && (
        <section className="py-12 bg-white">
          {/* RentVsBuyArticle content would go here */}
          <div>RENT VS BUY ARTICLE PLACEHOLDER</div>
        </section>
      )}

      {subcalculator === "income" && (
        <article className="max-w-4xl mx-auto px-4 py-12 prose prose-slate lg:prose-lg">
          {/* IncomeRequirementArticle content would go here */}
          <div>INCOME REQUIREMENT ARTICLE PLACEHOLDER</div>
        </article>
      )}

      {subcalculator === "qualification" && (
        <article className="max-w-4xl mx-auto px-4 py-12 prose prose-slate lg:prose-lg">
          {/* MortgageAffordabilityArticle content would go here */}
          <div>MORTGAGE AFFORDABILITY ARTICLE PLACEHOLDER</div>
        </article>
      )}

      {/* FAQ Section */}
      {currentContent && currentContent.faqs.length > 0 && (
        <section className="py-12">
          {/* FAQ rendering */}
        </section>
      )}
    </section>
  );
}

export default function AffordabilityPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <AffordabilityPageContent />
    </Suspense>
  );
}
