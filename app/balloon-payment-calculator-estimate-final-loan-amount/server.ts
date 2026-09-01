export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Balloon Payment Calculator - Estimate Final Loan Amount",
      "description": "Calculate your balloon payment amount and understand how balloon mortgages work. Estimate monthly payments and the large final payment required at the end of your loan term.",
      "url": `${baseUrl}/balloon-payment-calculator-estimate-final-loan-amount`,
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
            "name": "Balloon Payment Calculator",
            "item": `${baseUrl}/balloon-payment-calculator-estimate-final-loan-amount`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Balloon Payment Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate balloon payment amounts for balloon mortgages."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Balloon Payment Calculator - Estimate Final Loan Amount",
      "description": "Calculate your balloon payment amount and understand how balloon mortgages work.",
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
        "@id": `${baseUrl}/balloon-payment-calculator-estimate-final-loan-amount`
      }
    }
  };
}
