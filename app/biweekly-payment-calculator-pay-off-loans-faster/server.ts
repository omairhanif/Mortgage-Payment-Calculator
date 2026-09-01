export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Biweekly Payment Calculator - Pay Off Loans Faster",
      "description": "Calculate how much faster you can pay off your mortgage with biweekly payments. See interest savings and shortened loan terms.",
      "url": `${baseUrl}/biweekly-payment-calculator-pay-off-loans-faster`,
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
            "name": "Biweekly Payment Calculator",
            "item": `${baseUrl}/biweekly-payment-calculator-pay-off-loans-faster`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Biweekly Payment Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate the benefits of biweekly mortgage payments."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Biweekly Payment Calculator - Pay Off Loans Faster",
      "description": "Discover how biweekly mortgage payments can save interest and shorten your loan.",
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
        "@id": `${baseUrl}/biweekly-payment-calculator-pay-off-loans-faster`
      }
    }
  };
}
