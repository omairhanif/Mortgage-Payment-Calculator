import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as currency with $ sign and commas
 * @param value - The number to format
 * @param decimals - Optional number of decimal places (default: 2)
 * @returns Formatted string like "$412,300" or "$412,300.00"
 */
export function formatCurrency(value: number, decimals: number = 2): string {
  if (isNaN(value) || value === null || value === undefined) {
    return decimals > 0 ? "$0.00" : "$0";
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Formats a number as currency with decimals
 */
export function formatCurrencyWithDecimals(value: number, decimals: number = 2): string {
  if (isNaN(value) || value === null || value === undefined) {
    return "$0.00";
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Formats a number as percentage
 * @param value - The number to format (e.g., 6.5)
 * @returns Formatted string like "6.5%"
 */
export function formatPercent(value: number): string {
  if (isNaN(value) || value === null || value === undefined) {
    return "0%";
  }
  
  // Format with up to 2 decimal places, removing trailing zeros
  const formatted = parseFloat(value.toFixed(2));
  return `${formatted}%`;
}

/**
 * Formats a number with commas (no $)
 */
export function formatNumber(value: number): string {
  if (isNaN(value) || value === null || value === undefined) {
    return "0";
  }
  return new Intl.NumberFormat('en-US').format(Math.round(value));
}

/**
 * Parses a currency input string, removing $ signs and commas
 * @param raw - The raw input string (e.g., "$1,234.56" or "1234")
 * @returns Parsed number, or 0 if invalid
 */
export function parseCurrencyInput(raw: string): number {
  if (!raw || typeof raw !== 'string') {
    return 0;
  }
  
  // Remove $, commas, and spaces
  const cleaned = raw.replace(/[$,\s]/g, '');
  
  // Parse as float
  const parsed = parseFloat(cleaned);
  
  // Return 0 if invalid, otherwise return the parsed number
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Validates a positive number
 */
export function validatePositiveNumber(value: number, defaultValue: number = 0): number {
  if (isNaN(value) || value < 0) return defaultValue;
  return value;
}

/**
 * Validates a percentage (0-100)
 */
export function validatePercent(value: number, min: number = 0, max: number = 100): number {
  if (isNaN(value)) return 0;
  return Math.max(min, Math.min(max, value));
}

/**
 * Clamps a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Calculates percentage of a value
 */
export function percentOf(percent: number, value: number): number {
  return (percent / 100) * value;
}

/**
 * Calculates what percentage one value is of another
 */
export function percentageOf(part: number, whole: number): number {
  if (whole === 0) return 0;
  return (part / whole) * 100;
}

/**
 * Formats a date to readable string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Debounce function for input handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
