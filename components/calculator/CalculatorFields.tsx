import React from "react";

export interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  icon?: React.ReactNode;
  helpText?: string;
  className?: string;
}

export interface NumberInputWithBadgeProps extends NumberInputProps {
  displayValue: string;
  badgeColor?: "default" | "warning";
}

export interface ToggleBinaryProps {
  label: string;
  option1: { value: string; label: string };
  option2: { value: string; label: string };
  activeValue: string;
  onChange: (value: string) => void;
}

export interface ToggleMultipleProps {
  label: string;
  options: Array<{ value: number; label: string }>;
  activeValue: number;
  onChange: (value: number) => void;
  columns?: number;
}

export interface DualInputFieldProps {
  label: string;
  mode: "dollar" | "percent";
  onModeChange: (mode: "dollar" | "percent") => void;
  dollarValue: number;
  percentValue: number;
  onDollarChange: (value: number) => void;
  onPercentChange: (value: number) => void;
  helpText?: string;
}

export interface ConditionalFieldProps {
  condition: boolean;
  children: React.ReactNode;
}

export function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  icon,
  helpText,
  className,
}: NumberInputProps) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
        {icon && <span className="inline-flex items-center gap-1">{icon}</span>}
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        min={min}
        max={max}
        step={step}
        className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200"
      />
      {helpText && <p className="mt-1 text-xs text-slate-500">{helpText}</p>}
    </div>
  );
}

export function NumberInputWithBadge({
  label,
  value,
  onChange,
  displayValue,
  badgeColor = "default",
  min,
  max,
  step,
  icon,
  helpText,
  className,
}: NumberInputWithBadgeProps) {
  const badgeClasses =
    badgeColor === "warning"
      ? "rounded border border-amber-200 bg-amber-50 px-2 py-1"
      : "rounded border border-slate-200 bg-slate-50 px-2 py-1";

  const badgeTextClasses =
    badgeColor === "warning"
      ? "text-xs font-bold text-amber-900"
      : "text-xs font-bold text-slate-900";

  return (
    <div className={className}>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
          {icon}
          {label}
        </label>
        <div className={badgeClasses}>
          <span className={badgeTextClasses}>{displayValue}</span>
        </div>
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        min={min}
        max={max}
        step={step}
        className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200"
      />
      {helpText && (
        <p
          className={`mt-1 text-xs ${
            badgeColor === "warning" ? "text-amber-600" : "text-slate-500"
          }`}
        >
          {helpText}
        </p>
      )}
    </div>
  );
}

export function ToggleBinary({
  label,
  option1,
  option2,
  activeValue,
  onChange,
}: ToggleBinaryProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-700">{label}</label>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onChange(option1.value)}
            className={`rounded border px-2.5 py-1 text-xs font-bold transition-all ${
              activeValue === option1.value
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {option1.label}
          </button>
          <button
            onClick={() => onChange(option2.value)}
            className={`rounded border px-2.5 py-1 text-xs font-bold transition-all ${
              activeValue === option2.value
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {option2.label}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ToggleMultiple({
  label,
  options,
  activeValue,
  onChange,
  columns = 4,
}: ToggleMultipleProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
        {label}
      </label>
      <div className={`grid grid-cols-${columns} gap-1.5`}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`rounded border px-2.5 py-2 text-sm font-bold transition-all ${
              activeValue === option.value
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function DualInputField({
  label,
  mode,
  onModeChange,
  dollarValue,
  percentValue,
  onDollarChange,
  onPercentChange,
  helpText,
}: DualInputFieldProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-700">{label}</label>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onModeChange("dollar")}
            className={`rounded border px-2.5 py-1 text-xs font-bold transition-all ${
              mode === "dollar"
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            $
          </button>
          <button
            onClick={() => onModeChange("percent")}
            className={`rounded border px-2.5 py-1 text-xs font-bold transition-all ${
              mode === "percent"
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            %
          </button>
        </div>
      </div>

      {mode === "dollar" ? (
        <input
          type="number"
          value={dollarValue}
          onChange={(e) => onDollarChange(Math.max(0, parseInt(e.target.value) || 0))}
          className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200"
        />
      ) : (
        <input
          type="number"
          value={percentValue}
          onChange={(e) => onPercentChange(Math.max(0, parseFloat(e.target.value) || 0))}
          className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200"
          step="0.1"
        />
      )}
      {helpText && <p className="mt-1 text-xs text-slate-500">{helpText}</p>}
    </div>
  );
}

export function ConditionalField({ condition, children }: ConditionalFieldProps) {
  if (!condition) return null;
  return <>{children}</>;
}

// Reusable Card component
interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, icon, children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white p-4 shadow-sm ${className}`}>
      {title && (
        <h3 className="mb-4 flex items-center gap-2 font-serif text-base font-bold text-slate-900">
          {icon}
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

// Config-based field rendering
export interface ConfigInputFieldProps {
  input: {
    id: string;
    type: string;
    label: string;
    defaultValue?: number | string | boolean;
    min?: number;
    max?: number;
    step?: number;
    options?: Array<{ value: any; label: string }>;
    tooltip?: string;
    condition?: {
      dependsOn: string;
      equals: any;
    };
  };
  value: any;
  inputs: Record<string, any>;
  onChange: (id: string, value: any) => void;
}

export function ConfigInputField({ input, value, inputs, onChange }: ConfigInputFieldProps) {
  // Ensure value is always defined to prevent uncontrolled->controlled warning
  // Fallback order: provided value -> input's defaultValue -> type-appropriate default
  const getSafeValue = () => {
    if (value !== undefined) return value;
    if (input.defaultValue !== undefined) return input.defaultValue;
    
    // Type-specific defaults as last resort
    switch (input.type) {
      case 'checkbox':
        return false;
      case 'select':
        return input.options?.[0]?.value ?? '';
      case 'currency':
      case 'percent':
      case 'years':
      case 'number':
      default:
        return 0;
    }
  };
  
  const safeValue = getSafeValue();
  
  // Check conditional visibility
  if (input.condition) {
    const dependentValue = inputs[input.condition.dependsOn];
    if (dependentValue !== input.condition.equals) {
      return null;
    }
  }

  switch (input.type) {
    case 'currency':
    case 'percent':
    case 'years':
    case 'number':
      return (
        <NumberInput
          label={input.label}
          value={safeValue}
          onChange={(val) => onChange(input.id, val)}
          min={input.min}
          max={input.max}
          step={input.step}
        />
      );

    case 'select':
      return (
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">
            {input.label}
          </label>
          <select
            value={safeValue}
            onChange={(e) => onChange(input.id, e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200"
          >
            {input.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {input.tooltip && (
            <p className="mt-1 text-xs text-slate-500">{input.tooltip}</p>
          )}
        </div>
      );

    case 'checkbox':
      return (
        <div className="flex items-center gap-2 md:col-span-2">
          <input
            type="checkbox"
            id={input.id}
            checked={safeValue}
            onChange={(e) => onChange(input.id, e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor={input.id} className="text-xs font-semibold text-slate-700">
            {input.label}
          </label>
          {input.tooltip && (
            <span className="text-xs text-slate-500">({input.tooltip})</span>
          )}
        </div>
      );

    default:
      return (
        <NumberInput
          label={input.label}
          value={safeValue}
          onChange={(val) => onChange(input.id, val)}
        />
      );
  }
}

