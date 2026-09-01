export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Interest-Only Loan Calculator with Extra Payments",
      "description": "Calculate interest-only loan payments with optional extra principal payments. See how additional payments reduce your loan balance and future payment shock.",
      "url": `${baseUrl}/interest-only-loan-calculator-with-extra-payments`,
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
            "name": "Interest-Only Loan Calculator",
            "item": `${baseUrl}/interest-only-loan-calculator-with-extra-payments`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Interest-Only Loan Calculator with Extra Payments",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate interest-only payments with extra principal payments."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Interest-Only Loan Calculator with Extra Payments",
      "description": "Calculate interest-only loan payments and see how extra payments reduce your balance.",
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
        "@id": `${baseUrl}/interest-only-loan-calculator-with-extra-payments`
      }
    }
  };
}
