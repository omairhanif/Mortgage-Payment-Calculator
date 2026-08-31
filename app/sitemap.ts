import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mortgagelab.com' // Update with your actual domain
  const lastModified = new Date()

  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Standalone Savings & Payoff Calculators - High Priority
    {
      url: `${baseUrl}/extra-payment-calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/biweekly-payment-calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/paying-points-calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tax-benefits-calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Standalone Loan Program Calculators - High Priority
    {
      url: `${baseUrl}/real-apr-calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fha-loan-calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/va-loan-calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jumbo-loan-calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Specialized Calculators - High Priority
    {
      url: `${baseUrl}/mortgage-payment-calculator-estimate-monthly-costs`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/extra-payment-calculator-pay-off-mortgage-faster`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biweekly-payment-calculator-pay-off-loans-faster`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/refinance-calculator-see-if-refinancing-pays-off`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rent-vs-buy-calculator-which-costs-less`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/income-requirement-calculator-how-much-you-need`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage-qualification-calculator-do-you-qualify`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Loan Type Calculators
    {
      url: `${baseUrl}/fha-loan-calculator-estimate-payments-costs`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/va-loan-calculator-estimate-benefits-payments`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jumbo-loan-calculator-estimate-high-value-payments`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fixed-vs-arm-calculator-compare-loan-payments`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/interest-only-calculator-estimate-loan-payments`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/interest-only-loan-calculator-with-extra-payments`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/balloon-payment-calculator-estimate-final-loan-amount`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/second-mortgage-calculator-estimate-your-payments`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/heloc-calculator-estimate-credit-line-costs`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/real-apr-calculator-true-cost-of-your-loan`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage-points-calculator-are-points-worth-it`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Articles Index
    {
      url: `${baseUrl}/articles`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Educational Articles - Medium-High Priority
    {
      url: `${baseUrl}/how-to-calculate-your-monthly-mortgage-payment`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-extra-mortgage-payments-save-you-money`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-much-income-do-you-need-to-buy-a-home`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-to-qualify-for-a-mortgage-key-requirements`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-mortgage-points-lower-your-interest-rate`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/when-should-you-refinance-your-mortgage`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/apr-vs-interest-rate-whats-the-real-difference`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fixed-rate-vs-arm-which-mortgage-fits-you`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biweekly-vs-monthly-mortgage-payments-compared`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/renting-vs-buying-a-home-full-cost-comparison`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fha-loan-requirements-down-payment-credit-score`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/va-loan-requirements-eligibility-approval-process`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/jumbo-loan-limits-rates-what-buyers-should-know`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-interest-only-mortgages-work-their-risks`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cut-interest-only-loan-costs-with-extra-payments`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/balloon-mortgages-explained-risks-when-they-make-sense`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-second-mortgages-work-rates-costs-payments`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-a-home-equity-line-of-credit-heloc-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mortgage-tax-benefits-calculator-save-on-taxes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mortgage-interest-tax-deduction-what-you-can-save`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Information Pages - Lower Priority
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/advice`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
