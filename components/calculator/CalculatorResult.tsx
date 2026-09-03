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
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const displayEntries = isExpanded 
    ? amortizationSchedule 
    : amortizationSchedule.slice(0, 20);
  
  const hasMoreEntries = amortizationSchedule.length > 20;
  
  return (
    <div className={className}>
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
              {displayEntries.map((entry) => (
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
        {hasMoreEntries && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
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

// Fixed vs ARM Result Component
interface FixedVsARMResultProps {
  results: {
    fixedMonthlyPI: number;
    fixedInitialMonthlyPayment: number;
    fixedTotalInterest: number;
    fixedLTV: number;
    armInitialMonthlyPI: number;
    armInitialMonthlyPayment: number;
    armMaximumMonthlyPI: number;
    armMaximumMonthlyPayment: number;
    armTotalInterestAtMax: number;
    armLTV: number;
    initialSavingsARM: number;
    potentialMaxDifference: number;
  };
  showAd?: boolean;
  className?: string;
}

export function FixedVsARMResult({
  results,
  showAd = false,
  className = "",
}: FixedVsARMResultProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Single Consolidated Results Card */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-1.5">
          <Calculator className="h-4 w-4 text-indigo-600" />
          <h3 className="font-serif text-base font-bold text-slate-900">
            Fixed vs ARM Comparison
          </h3>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-2 pr-2 text-left font-semibold text-slate-700">
                  Metric
                </th>
                <th className="pb-2 px-2 text-right font-semibold text-slate-700">
                  Fixed
                </th>
                <th className="pb-2 pl-2 text-right font-semibold text-slate-700">
                  ARM
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-2 pr-2 text-slate-600">Initial P&I</td>
                <td className="py-2 px-2 text-right font-medium text-slate-900">
                  {formatCurrency(results.fixedMonthlyPI)}
                </td>
                <td className="py-2 pl-2 text-right font-medium text-slate-900">
                  {formatCurrency(results.armInitialMonthlyPI)}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2 pr-2 text-slate-600">
                  Initial Monthly Payment
                </td>
                <td className="py-2 px-2 text-right font-medium text-slate-900">
                  {formatCurrency(results.fixedInitialMonthlyPayment)}
                </td>
                <td className="py-2 pl-2 text-right font-medium text-slate-900">
                  {formatCurrency(results.armInitialMonthlyPayment)}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2 pr-2 text-slate-600">Maximum P&I Payment</td>
                <td className="py-2 px-2 text-right font-medium text-slate-400">
                  —
                </td>
                <td className="py-2 pl-2 text-right font-medium text-slate-900">
                  {formatCurrency(results.armMaximumMonthlyPI)}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2 pr-2 text-slate-600">
                  Maximum Monthly Payment
                </td>
                <td className="py-2 px-2 text-right font-medium text-slate-400">
                  —
                </td>
                <td className="py-2 pl-2 text-right font-medium text-slate-900">
                  {formatCurrency(results.armMaximumMonthlyPayment)}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2 pr-2 text-slate-600">Total Interest</td>
                <td className="py-2 px-2 text-right font-medium text-slate-900">
                  {formatCurrency(results.fixedTotalInterest)}
                </td>
                <td className="py-2 pl-2 text-right font-medium text-slate-900">
                  {formatCurrency(results.armTotalInterestAtMax)}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2 pr-2 text-slate-600">LTV Ratio</td>
                <td className="py-2 px-2 text-right font-medium text-slate-900">
                  {results.fixedLTV.toFixed(2)}%
                </td>
                <td className="py-2 pl-2 text-right font-medium text-slate-900">
                  {results.armLTV.toFixed(2)}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-slate-200"></div>

        {/* Highlighted Summary Metrics */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between rounded-lg bg-green-50 p-3 border border-green-200">
            <span className="text-sm font-medium text-slate-700">
              Initial Savings with ARM
            </span>
            <span className="text-base font-bold text-green-700">
              {formatCurrency(results.initialSavingsARM)}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-amber-50 p-3 border border-amber-200">
            <span className="text-sm font-medium text-slate-700">
              Potential Max Difference
            </span>
            <span className="text-base font-bold text-amber-700">
              {formatCurrency(results.potentialMaxDifference)}
            </span>
          </div>
        </div>
      </div>

      {/* Ad Placeholder */}
      {showAd && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-500">Advertisement</p>
        </div>
      )}
    </div>
  );
}

// Rent vs Buy Result Component
interface RentVsBuyResultProps {
  results: {
    netCostDifference: number;
    breakevenYear: number | null;
    totalRentPaid: number;
    netBuyCostAfterEquity: number;
    homeValueAtSale: number;
    remainingLoanBalance: number;
    grossHomeEquity: number;
    sellingCosts: number;
    netEquityAfterSale: number;
    totalTaxesAndInsurance: number;
    totalPMI: number;
    totalMaintenance: number;
    totalMortgagePayments: number;
    averageMonthlyPayment: number;
    monthlyRentSavings: number;
    averageAnnualTaxDeduction: number;
    totalTaxDeduction: number;
    averageAnnualTaxSavings: number;
    totalTaxSavings: number;
  };
  showAd?: boolean;
  className?: string;
}

export function RentVsBuyResult({
  results,
  showAd = false,
  className = "",
}: RentVsBuyResultProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Single Consolidated Results Card */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-1.5">
          <Calculator className="h-4 w-4 text-indigo-600" />
          <h3 className="font-serif text-base font-bold text-slate-900">Results</h3>
        </div>

        {/* Primary Result Section - Light blue highlight box */}
        <div className="mb-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
          <div className="mb-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Net Cost Difference (Positive = Buying Saves)
            </p>
          </div>
          <p className="font-serif text-3xl font-bold text-blue-600">
            {formatCurrency(results.netCostDifference)}
          </p>
        </div>

        {/* Divider */}
        <div className="mb-3 border-t border-slate-200"></div>

        {/* Cost Comparison Table */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Cost Comparison</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-2 pr-2 text-left font-semibold text-slate-700">Metric</th>
                  <th className="pb-2 px-2 text-right font-semibold text-slate-700">Rental</th>
                  <th className="pb-2 pl-2 text-right font-semibold text-slate-700">Purchase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Taxes & Insurance</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">—</td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.totalTaxesAndInsurance)}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Total PMI</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">—</td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.totalPMI)}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Total Maintenance</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">—</td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.totalMaintenance)}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Total Payments</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.totalRentPaid)}
                  </td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.totalMortgagePayments)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* Monthly Expenses Table */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Monthly Expenses</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-2 pr-2 text-left font-semibold text-slate-700">Metric</th>
                  <th className="pb-2 px-2 text-right font-semibold text-slate-700">Rental</th>
                  <th className="pb-2 pl-2 text-right font-semibold text-slate-700">Purchase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Average Monthly Payment</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.totalRentPaid / (results.breakevenYear || 10) / 12)}
                  </td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.averageMonthlyPayment)}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Monthly Rent Savings</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">—</td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.monthlyRentSavings)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Income Tax Table */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Income Tax</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-2 pr-2 text-left font-semibold text-slate-700">Metric</th>
                  <th className="pb-2 px-2 text-right font-semibold text-slate-700">Rental</th>
                  <th className="pb-2 pl-2 text-right font-semibold text-slate-700">Purchase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Average Annual Tax Deduction</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">—</td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.averageAnnualTaxDeduction)}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Total Tax Deduction</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">—</td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.totalTaxDeduction)}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Average Annual Tax Savings</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">—</td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.averageAnnualTaxSavings)}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-1.5 pr-2 text-slate-600">Total Tax Savings</td>
                  <td className="py-1.5 px-2 text-right font-medium text-slate-900">—</td>
                  <td className="py-1.5 pl-2 text-right font-medium text-slate-900">
                    {formatCurrency(results.totalTaxSavings)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* Divider */}
        <div className="mb-3 border-t border-slate-200"></div>

        {/* Purchase Analysis - Existing metrics as list */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Breakeven Year</span>
            <span className="text-sm font-semibold text-slate-900">
              {results.breakevenYear !== null ? results.breakevenYear : "—"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Total Rent Paid</span>
            <span className="text-sm font-semibold text-slate-900">
              {formatCurrency(results.totalRentPaid)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Net Buy Cost (After Equity)</span>
            <span className="text-sm font-semibold text-slate-900">
              {formatCurrency(results.netBuyCostAfterEquity)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Home Value at Sale</span>
            <span className="text-sm font-semibold text-slate-900">
              {formatCurrency(results.homeValueAtSale)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Remaining Mortgage Balance</span>
            <span className="text-sm font-semibold text-slate-900">
              {formatCurrency(results.remainingLoanBalance)}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-green-50 p-2 border border-green-200">
            <span className="text-xs font-medium text-slate-700">Gross Home Equity</span>
            <span className="text-sm font-bold text-green-700">
              {formatCurrency(results.grossHomeEquity)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Selling Costs</span>
            <span className="text-sm font-semibold text-slate-900">
              {formatCurrency(results.sellingCosts)}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-green-50 p-2 border border-green-200">
            <span className="text-xs font-medium text-slate-700">Net Equity After Sale</span>
            <span className="text-sm font-bold text-green-700">
              {formatCurrency(results.netEquityAfterSale)}
            </span>
          </div>
        </div>
      </div>

      {/* Ad Placeholder */}
      {showAd && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-500">Advertisement</p>
        </div>
      )}
    </div>
  );
}

// Income Requirement Result Component
interface IncomeRequirementResultProps {
  results: {
    minimumAnnualIncome: number;
    minimumMonthlyIncome: number;
    monthlyPITI: number;
    loanAmount: number;
    downPayment: number;
    frontEndRequiredIncome: number;
    backEndRequiredIncome: number;
    monthlyPI: number;
    monthlyTax: number;
    monthlyInsurance: number;
    monthlyPMI: number;
    frontEndDTI: number;
    backEndDTI: number;
    maxAllowableMonthlyHousing: number;
    maxAllowableMonthlyDebt: number;
    monthlyDebtPayments: number;
  };
  showAd?: boolean;
  className?: string;
}

export function IncomeRequirementResult({
  results,
  showAd = false,
  className = "",
}: IncomeRequirementResultProps) {
  // Determine which DTI is the constraining factor
  const isConstrainedByFrontEnd = results.frontEndRequiredIncome >= results.backEndRequiredIncome;
  
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Single Consolidated Results Card */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-1.5">
          <Calculator className="h-4 w-4 text-indigo-600" />
          <h3 className="font-serif text-base font-bold text-slate-900">Results</h3>
        </div>

        {/* Primary Result Section - Light blue highlight box */}
        <div className="mb-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
          <div className="mb-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Minimum Required Annual Income
            </p>
          </div>
          <p className="font-serif text-3xl font-bold text-blue-600">
            {formatCurrency(results.minimumAnnualIncome)}
          </p>
        </div>

        {/* Divider */}
        <div className="mb-3 border-t border-slate-200"></div>

        {/* Basic Results */}
        <div className="mb-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Minimum Required Monthly Income</span>
            <span className="text-sm font-semibold text-slate-900">
              {formatCurrency(results.minimumMonthlyIncome)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Monthly PITI Payment</span>
            <span className="text-sm font-semibold text-slate-900">
              {formatCurrency(results.monthlyPITI)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Loan Amount</span>
            <span className="text-sm font-semibold text-slate-900">
              {formatCurrency(results.loanAmount)}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-3 border-t border-slate-200"></div>

        {/* Front-End Ratio Details */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Front-End Ratio Details</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Front-End DTI Limit</span>
              <span className="text-sm font-semibold text-slate-900">
                {results.frontEndDTI.toFixed(0)}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Monthly Principal & Interest</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(results.monthlyPI)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Monthly Property Taxes</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(results.monthlyTax)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Monthly Insurance</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(results.monthlyInsurance)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Monthly PMI</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(results.monthlyPMI)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-blue-50 p-2 border border-blue-200">
              <span className="text-xs font-medium text-slate-700">Maximum Allowable Monthly Housing Expense</span>
              <span className="text-sm font-bold text-blue-700">
                {formatCurrency(results.maxAllowableMonthlyHousing)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Front-End Required Income</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(results.frontEndRequiredIncome)}/month
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-3 border-t border-slate-200"></div>


        {/* Back-End Ratio Details */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Back-End Ratio Details</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Back-End DTI Limit</span>
              <span className="text-sm font-semibold text-slate-900">
                {results.backEndDTI.toFixed(0)}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Monthly Other Debt Payments</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(results.monthlyDebtPayments)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-blue-50 p-2 border border-blue-200">
              <span className="text-xs font-medium text-slate-700">Maximum Allowable Monthly Debt Payment</span>
              <span className="text-sm font-bold text-blue-700">
                {formatCurrency(results.maxAllowableMonthlyDebt)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Back-End Required Income</span>
              <span className="text-sm font-semibold text-slate-900">
                {formatCurrency(results.backEndRequiredIncome)}/month
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Explanation */}
        <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
          <p className="text-xs text-slate-700 leading-relaxed">
            {isConstrainedByFrontEnd ? (
              <>
                Your minimum income is determined by the <strong>front-end DTI ratio</strong> of {results.frontEndDTI.toFixed(0)}%, which limits your housing expenses to {formatCurrency(results.maxAllowableMonthlyHousing)} per month.
              </>
            ) : results.frontEndRequiredIncome === results.backEndRequiredIncome ? (
              <>
                Both front-end and back-end DTI ratios require the same minimum income of {formatCurrency(results.minimumMonthlyIncome)} per month.
              </>
            ) : (
              <>
                Your minimum income is determined by the <strong>back-end DTI ratio</strong> of {results.backEndDTI.toFixed(0)}%, which limits your total debt payments (housing + other debts) to {formatCurrency(results.maxAllowableMonthlyDebt)} per month.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Ad Placeholder */}
      {showAd && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-500">Advertisement</p>
        </div>
      )}
    </div>
  );
}





