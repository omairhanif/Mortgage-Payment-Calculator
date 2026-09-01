export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "VA Loan Calculator - Estimate Benefits & Payments",
      "description": "Calculate VA loan payments with no down payment and no PMI. Estimate monthly costs for veterans, active military, and eligible family members.",
      "url": `${baseUrl}/va-loan-calculator-estimate-benefits-payments`,
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
            "name": "VA Loan Calculator",
            "item": `${baseUrl}/va-loan-calculator-estimate-benefits-payments`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "VA Loan Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate VA loan payments with military benefits."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "VA Loan Calculator - Estimate Benefits & Payments",
      "description": "Calculate VA loan payments with no down payment and no PMI for veterans.",
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
        "@id": `${baseUrl}/va-loan-calculator-estimate-benefits-payments`
      }
    }
  };
}
