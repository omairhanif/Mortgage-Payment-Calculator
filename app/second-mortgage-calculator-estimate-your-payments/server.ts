export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Second Mortgage Calculator - Estimate Your Payments",
      "description": "Calculate second mortgage or home equity loan payments. Compare rates, terms, and monthly costs for additional home financing.",
      "url": `${baseUrl}/second-mortgage-calculator-estimate-your-payments`,
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
            "name": "Second Mortgage Calculator",
            "item": `${baseUrl}/second-mortgage-calculator-estimate-your-payments`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Second Mortgage Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate second mortgage and home equity loan payments."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Second Mortgage Calculator - Estimate Your Payments",
      "description": "Calculate second mortgage or home equity loan payments with rate comparisons.",
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
        "@id": `${baseUrl}/second-mortgage-calculator-estimate-your-payments`
      }
    }
  };
}
