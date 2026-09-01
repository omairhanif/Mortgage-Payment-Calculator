export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Refinance Calculator - See If Refinancing Pays Off",
      "description": "Calculate if refinancing your mortgage saves money. Compare current vs. new loan costs, break-even point, and lifetime interest savings.",
      "url": `${baseUrl}/refinance-calculator-see-if-refinancing-pays-off`,
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
            "name": "Refinance Calculator",
            "item": `${baseUrl}/refinance-calculator-see-if-refinancing-pays-off`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Refinance Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate refinancing benefits and break-even analysis."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Refinance Calculator - See If Refinancing Pays Off",
      "description": "Calculate if refinancing your mortgage saves money with break-even analysis.",
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
        "@id": `${baseUrl}/refinance-calculator-see-if-refinancing-pays-off`
      }
    }
  };
}
