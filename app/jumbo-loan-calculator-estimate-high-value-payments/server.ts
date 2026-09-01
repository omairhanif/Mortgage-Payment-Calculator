export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Jumbo Loan Calculator - Estimate High-Value Payments",
      "description": "Calculate jumbo loan payments for high-value properties. Estimate monthly costs on loans exceeding conforming loan limits with jumbo rates.",
      "url": `${baseUrl}/jumbo-loan-calculator-estimate-high-value-payments`,
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
            "name": "Jumbo Loan Calculator",
            "item": `${baseUrl}/jumbo-loan-calculator-estimate-high-value-payments`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Jumbo Loan Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate jumbo loan payments for high-value properties."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Jumbo Loan Calculator - Estimate High-Value Payments",
      "description": "Calculate jumbo loan payments for properties exceeding conforming loan limits.",
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
        "@id": `${baseUrl}/jumbo-loan-calculator-estimate-high-value-payments`
      }
    }
  };
}
