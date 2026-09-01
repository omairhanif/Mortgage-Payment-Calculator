export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Fixed vs ARM Calculator - Compare Loan Payments",
      "description": "Compare fixed-rate and adjustable-rate mortgage payments. Analyze costs, risks, and benefits of each loan type for your situation.",
      "url": `${baseUrl}/fixed-vs-arm-calculator-compare-loan-payments`,
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
            "name": "Fixed vs ARM Calculator",
            "item": `${baseUrl}/fixed-vs-arm-calculator-compare-loan-payments`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Fixed vs ARM Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Compare fixed-rate and ARM mortgage payments."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Fixed vs ARM Calculator - Compare Loan Payments",
      "description": "Compare fixed-rate and adjustable-rate mortgages to determine the best loan type for your needs.",
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
        "@id": `${baseUrl}/fixed-vs-arm-calculator-compare-loan-payments`
      }
    }
  };
}
