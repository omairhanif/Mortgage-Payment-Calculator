export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "FHA Loan Calculator - Estimate Payments and Costs",
      "description": "Calculate FHA loan payments including mortgage insurance premiums. Estimate monthly costs with low down payment FHA financing options.",
      "url": `${baseUrl}/fha-loan-calculator-estimate-payments-costs`,
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
            "name": "Articles",
            "item": `${baseUrl}/articles`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "FHA Loan Calculator",
            "item": `${baseUrl}/fha-loan-calculator-estimate-payments-costs`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "FHA Loan Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate FHA loan payments with mortgage insurance."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "FHA Loan Calculator - Estimate Payments and Costs",
      "description": "Calculate FHA loan payments including mortgage insurance and understand FHA financing requirements.",
      "author": {
        "@type": "Organization",
        "name": "Mortgage Payment Calculator"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Mortgage Payment Calculator"
      },
      "datePublished": "2026-09-01",
      "dateModified": "2026-09-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/fha-loan-calculator-estimate-payments-costs`
      }
    }
  };
}
