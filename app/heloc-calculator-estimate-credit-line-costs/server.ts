export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "HELOC Calculator - Estimate Credit Line Costs",
      "description": "Calculate HELOC payments and costs. Estimate interest on your home equity line of credit and compare draw vs repayment periods.",
      "url": `${baseUrl}/heloc-calculator-estimate-credit-line-costs`,
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
            "name": "HELOC Calculator",
            "item": `${baseUrl}/heloc-calculator-estimate-credit-line-costs`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "HELOC Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate HELOC payments and costs."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "HELOC Calculator - Estimate Credit Line Costs",
      "description": "Calculate HELOC payments and understand home equity line of credit costs.",
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
        "@id": `${baseUrl}/heloc-calculator-estimate-credit-line-costs`
      }
    }
  };
}
