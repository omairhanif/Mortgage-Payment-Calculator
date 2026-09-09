"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type SubCalculator = {
  id: string;
  label: string;
  path: string;
};

type NavCategory = {
  name: string;
  path: string;
  subCalculators: SubCalculator[];
};

const navCategories: NavCategory[] = [
  {
    name: "Home",
    path: "/",
    subCalculators: [],
  },
  {
    name: "Advice",
    path: "/advice",
    subCalculators: [],
  },
];

const calculatorCategories: NavCategory[] = [
  {
    name: "Mortgage",
    path: "/second-mortgage-calculator",
    subCalculators: [
      { id: "second", label: "Second Mortgage Calculator", path: "/second-mortgage-calculator" },
      { id: "heloc", label: "HELOC Calculator", path: "/heloc-calculator" },
      { id: "refinance", label: "Refinance Calculator", path: "/refinance-calculator" },
    ],
  },
  {
    name: "Loan Programs",
    path: "/real-apr-calculator",
    subCalculators: [
      { id: "real-apr", label: "Real APR Calculator", path: "/real-apr-calculator" },
      { id: "fha", label: "FHA Loan Calculator", path: "/fha-loan-calculator" },
      { id: "va", label: "VA Loan Calculator", path: "/va-loan-calculator" },
      { id: "jumbo", label: "Jumbo Loan Calculator", path: "/jumbo-loan-calculator" },
    ],
  },
  {
    name: "ARM & Alternatives",
    path: "/fixed-vs-arm-calculator",
    subCalculators: [
      { id: "fixed-vs-arm", label: "Fixed vs ARM Calculator", path: "/fixed-vs-arm-calculator" },
      { id: "interest-only", label: "Interest-Only Calculator", path: "/interest-only-calculator" },
      { id: "interest-only-extra", label: "Interest-Only + Extra Payments Calculator", path: "/interest-only-extra-payments-calculator" },
      { id: "balloon", label: "Balloon Mortgage Calculator", path: "/balloon-mortgage-calculator" },
    ],
  },
  {
    name: "Affordability",
    path: "/rent-vs-buy-calculator",
    subCalculators: [
      { id: "rent-vs-buy", label: "Rent vs Buy Calculator", path: "/rent-vs-buy-calculator" },
      { id: "income", label: "Income Requirement Calculator", path: "/income-requirement-calculator" },
      { id: "qualification", label: "Mortgage Affordability Calculator", path: "/mortgage-affordability-calculator" },
    ],
  },
  {
    name: "Savings & Payoff",
    path: "/extra-payment-calculator",
    subCalculators: [
      { id: "extra-payment", label: "Extra Payment Calculator", path: "/extra-payment-calculator" },
      { id: "biweekly", label: "Biweekly Payment Calculator", path: "/biweekly-payment-calculator" },
      { id: "points", label: "Paying Points Calculator", path: "/paying-points-calculator" },
      { id: "tax-benefits", label: "Tax Benefits Calculator", path: "/tax-benefits-calculator" },
    ],
  },
];

const infoPageLinks = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy", path: "/privacy" },
  { name: "Advice", path: "/advice" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [openMobileCategory, setOpenMobileCategory] =
    React.useState<string | null>(null);
  const [allCalculatorsOpen, setAllCalculatorsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("Mortgage");
  const [infoMenuOpen, setInfoMenuOpen] = React.useState(false);

  const selectedCategoryData =
    calculatorCategories.find((category) => category.name === selectedCategory) ??
    calculatorCategories[0];

  const isActivePath = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".all-calculators-dropdown")) {
        setAllCalculatorsOpen(false);
      }
      if (!target.closest(".info-menu-dropdown")) {
        setInfoMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0EA5E9] shadow-sm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center">
          <nav className="hidden lg:flex items-center justify-start w-full gap-1">
            <div className="flex items-center gap-1 flex-none">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActivePath("/")
                    ? "text-white bg-indigo-700"
                    : "text-white hover:text-indigo-100 hover:bg-indigo-500"
                }`}
              >
                Home
              </Link>

              <div className="relative all-calculators-dropdown">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAllCalculatorsOpen(!allCalculatorsOpen);
                  }}
                  className="px-3 py-2 text-sm font-medium transition-colors rounded-lg inline-flex items-center gap-1 text-white hover:text-indigo-100 hover:bg-indigo-500"
                >
                  All Calculators
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      allCalculatorsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {allCalculatorsOpen && calculatorCategories.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 w-[560px] rounded-xl bg-white shadow-2xl ring-1 ring-slate-200 z-50">
                    <div className="grid grid-cols-[180px_minmax(280px,1fr)]">
                      <div className="border-r border-slate-100 bg-slate-50/70">
                        {calculatorCategories.map((category) => (
                          <button
                            key={category.name}
                            type="button"
                            onClick={() => setSelectedCategory(category.name)}
                            className={`flex w-full items-center justify-between px-4 py-3 text-sm font-semibold transition-colors ${
                              selectedCategory === category.name
                                ? "bg-indigo-50 text-indigo-700 border-l-2 border-indigo-600"
                                : "text-slate-700 hover:bg-white hover:text-indigo-600"
                            }`}
                          >
                            <span>{category.name}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                selectedCategory === category.name
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        ))}
                      </div>

                      <div className="p-3">
                        <div className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                          {selectedCategoryData.name}
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {selectedCategoryData.subCalculators.map((subCalc) => (
                            <Link
                              key={subCalc.id}
                              href={subCalc.path}
                              onClick={() => setAllCalculatorsOpen(false)}
                              className="rounded-lg px-3 py-2 text-xs font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                            >
                              {subCalc.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 flex-1 justify-center">
              {navCategories
                .filter((category) => category.name !== "Home" && category.name !== "Advice")
                .map((category) => {
                  const hasSubCalculators = category.subCalculators.length > 1;

                  if (!hasSubCalculators) {
                    return null;
                  }

                  return (
                    <div key={category.name} className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(
                            openDropdown === category.name ? null : category.name,
                          );
                        }}
                        className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg inline-flex items-center gap-1 ${
                          isActivePath(category.path)
                            ? "text-white bg-indigo-700"
                            : "text-white hover:text-indigo-100 hover:bg-indigo-500"
                        }`}
                      >
                        {category.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === category.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === category.name && (
                        <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-1 z-50">
                          {category.subCalculators.map((subCalc, index) => (
                            <Link
                              key={subCalc.id}
                              href={
                                subCalc.path ||
                                (index === 0
                                  ? category.path
                                  : `${category.path}?subcalculator=${subCalc.id}`)
                              }
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            >
                              {subCalc.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            <div className="flex items-center gap-1 flex-none">
              <Link
                href="/blog"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActivePath("/blogs")
                    ? "text-white bg-indigo-700"
                    : "text-white hover:text-indigo-100 hover:bg-indigo-500"
                }`}
              >
                Blogs
              </Link>

              <Link
                href="/guide"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActivePath("/guides")
                    ? "text-white bg-indigo-700"
                    : "text-white hover:text-indigo-100 hover:bg-indigo-500"
                }`}
              >
                Guides
              </Link>
            </div>

            <div className="relative info-menu-dropdown flex-none">
              <button
                type="button"
                aria-label="Open information menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setInfoMenuOpen(!infoMenuOpen);
                }}
                className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-indigo-500 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>

              {infoMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-white shadow-2xl ring-1 ring-slate-200 z-50 py-2">
                  {infoPageLinks.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      onClick={() => setInfoMenuOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex lg:hidden ml-auto">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-indigo-500 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#0EA5E9] bg-[#0EA5E9] shadow-lg">
          <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col space-y-1">
              {navCategories.map((category) => {
                const hasSubCalculators = category.subCalculators.length > 1;
                const isOpen = openMobileCategory === category.name;

                if (!hasSubCalculators) {
                  return (
                    <Link
                      key={category.name}
                      href={category.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        isActivePath(category.path)
                          ? "text-white bg-indigo-700"
                          : "text-white hover:text-indigo-100 hover:bg-indigo-500"
                      }`}
                    >
                      {category.name}
                    </Link>
                  );
                }

                return (
                  <div key={category.name}>
                    <button
                      onClick={() =>
                        setOpenMobileCategory(isOpen ? null : category.name)
                      }
                      className={`w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors flex items-center justify-between ${
                        isActivePath(category.path)
                          ? "text-white bg-indigo-700"
                          : "text-white hover:text-indigo-100 hover:bg-indigo-500"
                      }`}
                    >
                      {category.name}

                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-1 ml-4 space-y-1">
                        {category.subCalculators.map((subCalc, index) => (
                          <Link
                            key={subCalc.id}
                            href={
                              subCalc.path ||
                              (index === 0
                                ? category.path
                                : `${category.path}?subcalculator=${subCalc.id}`)
                            }
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg px-4 py-2 text-sm text-indigo-100 hover:text-white hover:bg-indigo-500 transition-colors"
                          >
                            {subCalc.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
