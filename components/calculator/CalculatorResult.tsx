import React from "react";
import { Calculator, ChevronDown, ChevronUp } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export interface ResultMetric {
  id: string;
  label: string;
  value: string | number | undefined | null;
  icon?: React.ReactNode;
  isPrimary?: boolean;
  highlight?: boolean;
  format?: "currency" | "percent" | "date" | "text";
}

export interface AmortizationEntry {
  year: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

interface CalculatorResultProps {
  primaryResult?: {
    label: string;
    value: string | number;
    subtext?: string;
  };
  metrics?: ResultMetric[];
  amortization?: {
    schedule: AmortizationEntry[];
    isOpen: boolean;
    onToggle: () => void;
  };
  showAd?: boolean;
  className?: string;
  customContent?: React.ReactNode;
  // Config-based consolidated view
  consolidatedView?: boolean;
}

// Config-based consolidated result component
export interface ConfigResultProps {
  primaryResult?: {
    label: string;
    value: string;
  };
  metrics: ResultMetric[];
  showAd?: boolean;
  className?: string;
}

export function ConfigConsolidatedResult({
  primaryResult,
  metrics = [],
  showAd = false,
  className = "",
}: ConfigResultProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Display Ad Placeholder - Only when showAd is true */}
      {showAd && (
        <div className="flex justify-center">
          <div className="w-full max-w-[400px] h-[300px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
            <span className="text-xs text-slate-400 font-medium">
              Display Ad (400×300)
            </span>
          </div>
        </div>
      )}

      {/* Single Consolidated Results Card */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-1.5">
          <Calculator className="h-4 w-4 text-indigo-600" />
          <h3 className="font-serif text-base font-bold text-slate-900">Results</h3>
        </div>

        {/* Primary Result Section - Light blue highlight box */}
        {primaryResult && (
          <>
            <div className="mb-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
              <div className="mb-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  {primaryResult.label}
                </p>
              </div>
              <p className="font-serif text-3xl font-bold text-blue-600">
                {primaryResult.value}
              </p>
            </div>
            {/* Divider after primary result */}
            {metrics.length > 0 && <div className="mb-3 border-t border-slate-200"></div>}
          </>
        )}

        {/* Other Metrics - Listed within same card */}
        {metrics.length > 0 && (
          <div className="space-y-2.5">
            {metrics.map((metric) => {
              let displayValue: string;
              
              // Handle undefined or null values
              if (metric.value === undefined || metric.value === null) {
                displayValue = "-";
              } else if (typeof metric.value === "string") {
                displayValue = metric.value;
              } else if (metric.format === "currency") {
                displayValue = formatCurrency(metric.value as number);
              } else if (metric.format === "percent") {
                displayValue = `${(metric.value as number).toFixed(2)}%`;
              } else {
                displayValue = metric.value.toString();
              }

              return (
                <div key={metric.id} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{metric.label}</span>
                  <span className={`text-sm font-semibold ${metric.highlight ? 'text-blue-600' : 'text-slate-900'}`}>
                    {displayValue}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// Config-based detailed amortization schedule component
export interface ConfigAmortizationProps {
  amortizationSchedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
  className?: string;
}

export function ConfigAmortizationSchedule({
  amortizationSchedule,
  className = "",
}: ConfigAmortizationProps) {
  return (
    <div className={`mt-6 ${className}`}>
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 font-serif text-base font-bold text-slate-900">Amortization Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-2 py-2 text-left font-semibold text-slate-700">Month</th>
                <th className="px-2 py-2 text-right font-semibold text-slate-700">Payment</th>
                <th className="px-2 py-2 text-right font-semibold text-slate-700">Principal</th>
                <th className="px-2 py-2 text-right font-semibold text-slate-700">Interest</th>
                <th className="px-2 py-2 text-right font-semibold text-slate-700">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {amortizationSchedule.map((entry) => (
                <tr key={entry.month} className="hover:bg-slate-50">
                  <td className="px-2 py-1.5 font-medium text-slate-900">{entry.month}</td>
                  <td className="px-2 py-1.5 text-right text-slate-700">
                    ${entry.payment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-2 py-1.5 text-right text-green-600">
                    ${entry.principal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-2 py-1.5 text-right text-red-600">
                    ${entry.interest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-2 py-1.5 text-right font-semibold text-slate-900">
                    ${entry.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function CalculatorResult({
  primaryResult,
  metrics = [],
  amortization,
  showAd = true,
  className = "",
  customContent,
}: CalculatorResultProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Display Ad Placeholder */}
      {showAd && (
        <div className="flex justify-center">
          <div className="w-full max-w-[400px] h-[300px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
            <span className="text-xs text-slate-400 font-medium">
              Display Ad (400×300)
            </span>
          </div>
        </div>
      )}

      {/* Primary Result Card */}
      {primaryResult && (
        <div className="rounded-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-4 shadow-sm">
          <div className="mb-1 flex items-center gap-1.5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {primaryResult.label}
            </p>
          </div>
          <p className="font-serif text-4xl font-bold text-indigo-600">
            {primaryResult.value}
          </p>
          {primaryResult.subtext && (
            <p className="mt-1 text-xs text-slate-500">
              {primaryResult.subtext}
            </p>
          )}
        </div>
      )}

      {/* Metrics Grid */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-1 gap-3">
          {metrics.map((metric) => {
            let displayValue: string;
            
            // Handle undefined or null values
            if (metric.value === undefined || metric.value === null) {
              displayValue = "-";
            } else if (typeof metric.value === "string") {
              displayValue = metric.value;
            } else if (metric.format === "currency") {
              displayValue = formatCurrency(metric.value as number);
            } else if (metric.format === "percent") {
              displayValue = `${metric.value}%`;
            } else if (metric.format === "date") {
              displayValue = metric.value.toString();
            } else {
              displayValue = metric.value.toString();
            }

            return (
              <div
                key={metric.id}
                className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {metric.label}
                    </p>
                    <p className={`mt-0.5 font-bold text-slate-900 ${metric.isPrimary ? 'text-2xl' : 'text-xl'}`}>
                      {displayValue}
                    </p>
                  </div>
                  {metric.icon && (
                    <div className="text-slate-400">
                      {metric.icon}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Custom Content */}
      {customContent && customContent}

      {/* Amortization Schedule */}
      {amortization && amortization.schedule.length > 0 && (
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <button
            onClick={amortization.onToggle}
            className="flex w-full items-center justify-between text-left"
          >
            <h3 className="font-serif text-base font-bold text-slate-900">
              Amortization Schedule
            </h3>
            {amortization.isOpen ? (
              <ChevronUp className="h-4 w-4 text-slate-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-400" />
            )}
          </button>

          {amortization.isOpen && (
            <div className="mt-3">
              <table className="w-full text-xs">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-2 py-1.5 text-left font-semibold text-slate-700">
                      Year
                    </th>
                    <th className="px-2 py-1.5 text-right font-semibold text-slate-700">
                      Principal
                    </th>
                    <th className="px-2 py-1.5 text-right font-semibold text-slate-700">
                      Interest
                    </th>
                    <th className="px-2 py-1.5 text-right font-semibold text-slate-700">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {amortization.schedule.map((entry) => (
                    <tr key={entry.year} className="hover:bg-slate-50">
                      <td className="px-2 py-1.5 font-medium text-slate-900">
                        {entry.year}
                      </td>
                      <td className="px-2 py-1.5 text-right text-slate-700">
                        {formatCurrency(entry.principalPaid)}
                      </td>
                      <td className="px-2 py-1.5 text-right text-slate-700">
                        {formatCurrency(entry.interestPaid)}
                      </td>
                      <td className="px-2 py-1.5 text-right font-semibold text-slate-900">
                        {formatCurrency(entry.endingBalance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

