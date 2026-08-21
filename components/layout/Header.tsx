"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navCategories = [
  {
    name: "Home",
    path: "/",
    subCalculators: [],
  },
  {
    name: "Mortgage",
    path: "/mortgage",
    subCalculators: [
      { id: "second", label: "Second Mortgage" },
      { id: "heloc", label: "HELOC" },
      { id: "refinance", label: "Refinance" },
    ],
  },
  {
    name: "Loan Programs",
    path: "/rates",
    subCalculators: [
      { id: "real-apr", label: "Real APR Calculator" },
      { id: "fha", label: "FHA Loan Calculator" },
      { id: "va", label: "VA Loan Calculator" },
      { id: "jumbo", label: "Jumbo Loan Calculator" },
    ],
  },
  {
    name: "ARM & Alternatives",
    path: "/arm",
    subCalculators: [
      { id: "fixed-vs-arm", label: "Fixed vs ARM" },
      { id: "interest-only", label: "Interest-Only" },
      { id: "interest-only-extra", label: "Interest-Only + Extra Payments" },
      { id: "balloon", label: "Balloon Mortgage" },
    ],
  },
  {
    name: "Affordability",
    path: "/affordability",
    subCalculators: [
      { id: "rent-vs-buy", label: "Rent vs Buy" },
      { id: "income", label: "Income Requirement" },
      { id: "qualification", label: "Mortgage Affordability" },
    ],
  },
  {
    name: "Savings & Payoff",
    path: "/savings",
    subCalculators: [
      { id: "extra-payment", label: "Extra Payment" },
      { id: "biweekly", label: "Biweekly Payment" },
      { id: "points", label: "Paying Points" },
      { id: "tax-benefits", label: "Tax Benefits" },
    ],
  },
  {
    name: "Advice",
    path: "/advice",
    subCalculators: [],
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [openMobileCategory, setOpenMobileCategory] =
    React.useState<string | null>(null);

  const isActivePath = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  // Close desktop dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
    };

    if (openDropdown) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [openDropdown]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0EA5E9] shadow-sm">
      {/* Desktop Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-center">
          <nav className="hidden lg:flex items-center justify-center gap-1">
            {navCategories.map((category) => {
              const hasSubCalculators =
                category.subCalculators.length > 1;

              // Simple link for categories without sub-calculators
              if (!hasSubCalculators) {
                return (
                  <Link
                    key={category.name}
                    href={category.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActivePath(category.path)
                        ? "text-white bg-indigo-700"
                        : "text-white hover:text-indigo-100 hover:bg-indigo-500"
                    }`}
                  >
                    {category.name}
                  </Link>
                );
              }

              // Dropdown for categories with sub-calculators
              return (
                <div key={category.name} className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      setOpenDropdown(
                        openDropdown === category.name
                          ? null
                          : category.name
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
                        openDropdown === category.name
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === category.name && (
                    <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-1 z-50">
                      {category.subCalculators.map((subCalc, index) => (
                        <Link
                          key={subCalc.id}
                          href={
                            index === 0
                              ? category.path
                              : `${category.path}?subcalculator=${subCalc.id}`
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
          </nav>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#0EA5E9] bg-[#0EA5E9] shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col space-y-1">
              {navCategories.map((category) => {
                const hasSubCalculators =
                  category.subCalculators.length > 1;

                const isOpen =
                  openMobileCategory === category.name;

                // Simple mobile link
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

                // Expandable mobile category
                return (
                  <div key={category.name}>
                    <button
                      onClick={() =>
                        setOpenMobileCategory(
                          isOpen ? null : category.name
                        )
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

                    {/* Mobile Sub-calculators */}
                    {isOpen && (
                      <div className="mt-1 ml-4 space-y-1">
                        {category.subCalculators.map(
                          (subCalc, index) => (
                            <Link
                              key={subCalc.id}
                              href={
                                index === 0
                                  ? category.path
                                  : `${category.path}?subcalculator=${subCalc.id}`
                              }
                              onClick={() =>
                                setMobileMenuOpen(false)
                              }
                              className="block rounded-lg px-4 py-2 text-sm text-indigo-100 hover:text-white hover:bg-indigo-500 transition-colors"
                            >
                              {subCalc.label}
                            </Link>
                          )
                        )}
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