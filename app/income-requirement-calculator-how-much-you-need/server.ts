export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Income Requirement Calculator - How Much You Need",
      "description": "Calculate the income required to qualify for a mortgage. Understand debt-to-income ratios and income requirements for home loans.",
      "url": `${baseUrl}/income-requirement-calculator-how-much-you-need`,
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
            "name": "Income Requirement Calculator",
            "item": `${baseUrl}/income-requirement-calculator-how-much-you-need`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Income Requirement Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate required income for mortgage qualification."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Income Requirement Calculator - How Much You Need",
      "description": "Determine the income required to qualify for your target mortgage amount.",
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
        "@id": `${baseUrl}/income-requirement-calculator-how-much-you-need`
      }
    }
  };
}
