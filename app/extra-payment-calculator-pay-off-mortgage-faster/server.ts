export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Extra Payment Calculator - Pay Off Mortgage Faster",
      "description": "Calculate how extra mortgage payments reduce interest and shorten your loan term. See savings from additional principal payments.",
      "url": `${baseUrl}/extra-payment-calculator-pay-off-mortgage-faster`,
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
            "name": "Extra Payment Calculator",
            "item": `${baseUrl}/extra-payment-calculator-pay-off-mortgage-faster`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Extra Payment Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate mortgage payoff savings with extra payments."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Extra Payment Calculator - Pay Off Mortgage Faster",
      "description": "Learn how extra mortgage payments can dramatically reduce interest costs and loan term.",
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
        "@id": `${baseUrl}/extra-payment-calculator-pay-off-mortgage-faster`
      }
    }
  };
}
