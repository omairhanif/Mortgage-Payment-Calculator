import React from "react";

export interface InputField {
  id: string;
  label: string;
  type: "number" | "text" | "select" | "toggle" | "custom";
  value: any;
  onChange: (value: any) => void;
  options?: { value: any; label: string }[];
  step?: number;
  min?: number;
  max?: number;
  icon?: React.ReactNode;
  helpText?: string;
  displayValue?: React.ReactNode;
  customRender?: () => React.ReactNode;
  className?: string;
}

export interface InputSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  fields: InputField[];
}

interface CalculatorInputProps {
  sections: InputSection[];
  onCalculate?: () => void;
  calculateButtonText?: string;
  className?: string;
}

export default function CalculatorInput({
  sections,
  onCalculate,
  calculateButtonText = "Calculate",
  className = "",
}: CalculatorInputProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {sections.map((section) => (
        <div
          key={section.id}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <h3 className="mb-4 flex items-center gap-2 font-serif text-base font-bold text-slate-900">
            {section.icon}
            {section.title}
          </h3>

          <div className="space-y-3">
            {section.fields.map((field) => {
              if (field.type === "custom" && field.customRender) {
                return <div key={field.id}>{field.customRender()}</div>;
              }

              return (
                <div key={field.id}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                      {field.icon}
                      {field.label}
                    </label>
                    {field.displayValue && (
                      <div className="rounded border border-slate-200 bg-slate-50 px-2 py-1">
                        {field.displayValue}
                      </div>
                    )}
                  </div>

                  {field.type === "number" && (
                    <input
                      type="number"
                      value={field.value}
                      onChange={(e) =>
                        field.onChange(
                          field.step && field.step < 1
                            ? parseFloat(e.target.value) || 0
                            : parseInt(e.target.value) || 0
                        )
                      }
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      className={`w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200 ${field.className || ""}`}
                    />
                  )}

                  {field.type === "text" && (
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className={`w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200 ${field.className || ""}`}
                    />
                  )}

                  {field.type === "select" && field.options && (
                    <select
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className={`w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200 ${field.className || ""}`}
                    >
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {field.type === "toggle" && field.options && (
                    <div className="grid grid-cols-4 gap-1.5">
                      {field.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => field.onChange(option.value)}
                          className={`rounded border px-2.5 py-2 text-sm font-bold transition-all ${
                            field.value === option.value
                              ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                              : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {field.helpText && (
                    <p className="mt-1 text-xs text-slate-500">
                      {field.helpText}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {onCalculate && (
        <div className="mt-4">
          <button
            onClick={onCalculate}
            className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 font-serif text-sm font-bold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md active:scale-[0.98]"
          >
            {calculateButtonText}
          </button>
        </div>
      )}
    </div>
  );
}
