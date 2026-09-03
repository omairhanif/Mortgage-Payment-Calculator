/**
 * Unified type definitions for configuration-driven calculator architecture
 * Consolidated from calculator-config.types.ts and calculator-configs.type.ts
 */

import { LucideIcon } from "lucide-react";

// ============================================================================
// FIELD TYPES
// ============================================================================

export type FieldType = "currency" | "percent" | "number" | "years" | "months" | "select" | "checkbox" | "toggle" | "buttonGroup";
export type InputType = "currency" | "percent" | "number" | "years" | "months";

export interface FieldOption {
  value: string | number;
  label: string;
}

export interface FieldValidation {
  min?: number;
  max?: number;
  message?: string;
  required?: boolean;
}

export interface FieldConfig {
  id: string;
  label: string;
  type: FieldType;
  defaultValue: any;
  
  // For number inputs
  min?: number;
  max?: number;
  step?: number;
  prefix?: string; // '$', '%'
  suffix?: string; // e.g., '/year', '/month'
  
  // For select/buttonGroup
  options?: FieldOption[];
  
  // For grouped fields
  section?: string; // e.g., "Property Details", "Fees"
  group?: string; // Alternative name for section
  
  // Validation
  validation?: FieldValidation;
  
  // Display
  icon?: LucideIcon | string; // lucide-react icon or icon name
  helpText?: string;
  tooltip?: string;
  col?: 1 | 2; // grid column span (1 = half, 2 = full)
  
  // Dependencies
  dependsOn?: string; // Show only if this field has a certain value
}

// Legacy compatibility
export interface CalculatorInput extends FieldConfig {
  type: InputType;
  defaultValue: number;
}

export interface InputConfig {
  id: string;
  label: string;
  type: "currency" | "percent" | "years" | "number" | "select" | "checkbox" | "toggle";
  defaultValue: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string | number; label: string }[];
  tooltip?: string;
  section?: string;
  dependsOn?: string;
  condition?: {
    dependsOn: string;  // Field ID to check
    equals: any;        // Value that makes this field visible
  };
}

// ============================================================================
// OUTPUT TYPES
// ============================================================================

export type OutputFormat = "currency" | "percent" | "number" | "text" | "date";
export type ResultFormat = "currency" | "percent" | "number" | "date";

export interface OutputConfig {
  id: string;
  label: string;
  format: OutputFormat;
  isPrimary?: boolean; // Large display
  highlight?: boolean; // Color accent
  description?: string; // Additional text below value
  section?: string; // e.g., "Breakdown", "Details", "Fees"
  group?: string; // Alternative name for section
  icon?: LucideIcon | string; // lucide-react icon or icon name
  suffix?: string; // e.g., '/month'
}

// Legacy compatibility
export interface CalculatorResult extends OutputConfig {
  format: ResultFormat;
}

export interface ResultConfig {
  id: string;
  label: string;
  format: "currency" | "percent" | "date" | "number" | "text";
  isPrimary?: boolean;
  highlight?: boolean;
  description?: string;
}

// ============================================================================
// VALIDATION TYPES
// ============================================================================

export interface ValidationRule {
  field: string;
  rule: (value: any, allValues: Record<string, any>) => boolean;
  message: string;
}

// ============================================================================
// CALCULATOR CONFIGURATION TYPES
// ============================================================================

export type CalculatorResultData = Record<string, any>;

export interface CalculatorConfig {
  id: string;
  label: string;
  description: string;
  category?: string;
  
  // Field definitions (declarative)
  fields: FieldConfig[];
  
  // Calculation function
  calculate: (inputs: Record<string, any>) => CalculatorResultData;
  
  // Output definitions
  outputs: OutputConfig[];
  
  // Optional features
  validation?: ValidationRule[];
  showAmortization?: boolean;
  showChart?: boolean;
  showAI?: boolean;
  aiPromptType?: string;
  warnings?: string[];
}

// Legacy compatibility
export interface SubCalculator extends CalculatorConfig {
  inputs: CalculatorInput[];
  results: CalculatorResult[];
  calculate: (inputs: Record<string, number>) => Record<string, any>;
}

export interface SubCalculatorConfig {
  id: string;
  label: string;
  description: string;
  inputs: InputConfig[];
  calculate: (inputs: any) => any;
  results: ResultConfig[];
  showAmortization?: boolean;
  showChart?: boolean;
  warnings?: string[];
  customResultComponent?: string; // Name of custom result component to use
}

// ============================================================================
// CATEGORY & TAB TYPES
// ============================================================================

export interface TabConfig {
  id: string;
  label: string;
  category?: string;
}

export interface CategoryConfig {
  id: string;
  title: string;
  description: string;
  defaultSubCalculator: string;
  subCalculators: Record<string, SubCalculatorConfig>;
  defaultCalculator?: string;
  calculators?: string[]; // IDs of calculators in this category
}

export type CalculatorConfigs = Record<string, CategoryConfig>;
