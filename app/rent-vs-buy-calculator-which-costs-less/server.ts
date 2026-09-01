export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Rent vs Buy Calculator - Which Costs Less?",
      "description": "Compare renting vs buying a home over time. Calculate total costs including mortgage, maintenance, taxes, insurance, and opportunity costs.",
      "url": `${baseUrl}/rent-vs-buy-calculator-which-costs-less`,
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
            "name": "Rent vs Buy Calculator",
            "item": `${baseUrl}/rent-vs-buy-calculator-which-costs-less`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Rent vs Buy Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Compare renting vs buying costs over time."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Rent vs Buy Calculator - Which Costs Less?",
      "description": "Compare renting vs buying a home with comprehensive cost analysis.",
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
        "@id": `${baseUrl}/rent-vs-buy-calculator-which-costs-less`
      }
    }
  };
}
