"use server";

import { calculateMonthlyPI } from "@/lib/mortgage";

export interface MortgageRatesInput {
  loanPurpose: "purchase" | "refinance";
  loanTerm: string;
  purchasePrice: number;
  downPayment: number;
  zipCode: string;
  creditScore: string;
  points: string;
  rateLock: string;
  propertyType: string;
  propertyUse: string;
  fha: boolean;
  va: boolean;
  usda: boolean;
}

export interface MortgageRateQuote {
  lender: string;
  rate: number;
  apr: number;
  payment: number;
}

export interface MortgageRatesResult {
  location: { city: string; state: string; zip: string };
  rates: MortgageRateQuote[];
}

function parseRatesResponse(content: unknown): { location: MortgageRatesResult["location"]; rates: Array<{ lender: string; rate: number; apr: number }> } {
  if (typeof content !== "string") throw new Error("The rates provider returned an invalid response.");
  const jsonText = content.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  const parsed = JSON.parse(jsonText) as { location?: { city?: unknown; state?: unknown; zip?: unknown }; rates?: unknown };
  if (!parsed.location || typeof parsed.location.city !== "string" || typeof parsed.location.state !== "string" || typeof parsed.location.zip !== "string" || !Array.isArray(parsed.rates)) {
    throw new Error("The rates provider returned an invalid location or rates list.");
  }
  const rates = parsed.rates.filter((quote): quote is { lender: string; rate: number; apr: number } => {
    if (!quote || typeof quote !== "object") return false;
    const candidate = quote as Record<string, unknown>;
    return typeof candidate.lender === "string" && typeof candidate.rate === "number" && Number.isFinite(candidate.rate) && typeof candidate.apr === "number" && Number.isFinite(candidate.apr);
  });
  if (rates.length === 0) throw new Error("The rates provider returned no valid lender quotes.");
  return { location: { city: parsed.location.city, state: parsed.location.state, zip: parsed.location.zip }, rates };
}

export async function fetchMortgageRates(input: MortgageRatesInput): Promise<MortgageRatesResult> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("Rates API is not configured.");
  const borrowerProfile = {
    loanPurpose: input.loanPurpose,
    loanTerm: input.loanTerm,
    purchasePrice: input.purchasePrice,
    downPayment: input.downPayment,
    zipCode: input.zipCode,
    creditScore: input.creditScore,
    fha: input.fha,
    va: input.va,
    usda: input.usda,
    points: input.points,
    rateLock: input.rateLock,
    propertyType: input.propertyType,
    propertyUse: input.propertyUse,
  };
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "HTTP-Referer": "https://mortgage-payment-calculator.com", "X-Title": "Mortgage Payment Calculator" },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini:online",
      temperature: 0,
      plugins: [{ id: "web", max_results: 12 }],
      response_format: { type: "json_schema", json_schema: { name: "mortgage_rates", strict: true, schema: {
        type: "object", additionalProperties: false, required: ["location", "rates"], properties: {
          location: { type: "object", additionalProperties: false, required: ["city", "state", "zip"], properties: { city: { type: "string" }, state: { type: "string" }, zip: { type: "string" } } },
          rates: { type: "array", minItems: 1, items: { type: "object", additionalProperties: false, required: ["lender", "rate", "apr"], properties: { lender: { type: "string" }, rate: { type: "number" }, apr: { type: "number" } } } },
        },
      } } },
      messages: [{ role: "user", content: `Use web search to retrieve current mortgage rate and APR offers published by real US lenders as of ${new Date().toISOString().slice(0, 10)}. Do not invent, estimate, or return generic/plausible rates. Determine the US city and state for ZIP ${input.zipCode}. Use every field in this exact borrower profile when selecting applicable offers: ${JSON.stringify(borrowerProfile)}. A changed value in any field must be reflected in the returned rates. Return 9 lender offers only when supported by current web sources; otherwise return the fewer supported offers. Keep the response limited to the required JSON fields.` }],
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Rates provider error (${response.status}).`);
  const payload = await response.json() as { choices?: Array<{ message?: { content?: unknown } }> };
  const parsed = parseRatesResponse(payload.choices?.[0]?.message?.content);
  const termYears = Number(input.loanTerm.match(/^(\d+)/)?.[1] || 30);
  const loanAmount = Math.max(0, input.purchasePrice - input.downPayment);
  return { location: parsed.location, rates: parsed.rates.map((quote) => ({ ...quote, payment: calculateMonthlyPI(loanAmount, quote.rate, termYears) })) };
}
