export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Qualification Calculator - Do You Qualify?",
      "description": "Calculate if you qualify for a mortgage. Check income requirements, debt-to-income ratios, and credit score requirements for home loan approval.",
      "url": `${baseUrl}/mortgage-qualification-calculator-do-you-qualify`,
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
            "name": "Mortgage Qualification Calculator",
            "item": `${baseUrl}/mortgage-qualification-calculator-do-you-qualify`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Mortgage Qualification Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate mortgage qualification and approval eligibility."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Mortgage Qualification Calculator - Do You Qualify?",
      "description": "Calculate if you qualify for a mortgage based on income and debt ratios.",
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
        "@id": `${baseUrl}/mortgage-qualification-calculator-do-you-qualify`
      }
    }
  };
}
