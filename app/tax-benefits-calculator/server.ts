export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Tax Benefits Calculator",
      "description": "Understand how mortgage interest deductions and other tax benefits impact your effective borrowing cost and reduce your after-tax housing expenses.",
      "url": `${baseUrl}/tax-benefits-calculator`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tax Benefits Calculator",
            "item": `${baseUrl}/tax-benefits-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Tax Benefits Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate mortgage tax deductions including mortgage interest and property tax benefits. Understand your effective after-tax interest rate and annual tax savings."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What mortgage expenses are tax deductible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mortgage interest on loans up to $750,000 is deductible on your primary residence and one second home. Property taxes are deductible up to $10,000 combined state and local taxes (SALT cap). Mortgage insurance premiums may be deductible depending on income and current tax law."
          }
        },
        {
          "@type": "Question",
          "name": "How much will I save on taxes with a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your savings depend on your marginal tax bracket and whether you itemize. If you're in the 24% bracket and pay $15,000 in mortgage interest, you save approximately $3,600 annually ($15,000 × 0.24). However, you only benefit if your total itemized deductions exceed the standard deduction."
          }
        },
        {
          "@type": "Question",
          "name": "Should I itemize deductions or take the standard deduction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Itemize only if your total deductions (mortgage interest + property taxes + other deductions) exceed the standard deduction ($13,850 single, $27,700 married filing jointly in 2023). With the increased standard deduction, many homeowners no longer benefit from itemizing."
          }
        },
        {
          "@type": "Question",
          "name": "What is effective interest rate after tax deduction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your effective interest rate is your actual interest rate minus the tax benefit. If you're in the 22% bracket with a 6% mortgage rate, your effective rate is approximately 4.68% (6% × (1 - 0.22)). This assumes you itemize and fully benefit from the mortgage interest deduction."
          }
        },
        {
          "@type": "Question",
          "name": "Do I get a tax break for buying a house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There's no direct tax break for purchasing a home, but homeownership provides ongoing deductions. Mortgage interest and property taxes are deductible if you itemize. When you sell, you can exclude up to $250,000 ($500,000 married) of capital gains if you lived in the home 2 of the last 5 years."
          }
        },
        {
          "@type": "Question",
          "name": "What is the $10,000 property tax deduction limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Tax Cuts and Jobs Act instituted a $10,000 cap on combined state and local tax (SALT) deductions, including property taxes and state income/sales taxes. This particularly affects homeowners in high-tax states like California, New York, and New Jersey."
          }
        },
        {
          "@type": "Question",
          "name": "Can I deduct mortgage interest on a rental property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but differently than personal residences. Rental property mortgage interest is deducted as a business expense on Schedule E without the $750,000 loan limit. However, rental properties don't qualify for the capital gains exclusion and have different depreciation rules."
          }
        }
      ]
    }
  };
}
