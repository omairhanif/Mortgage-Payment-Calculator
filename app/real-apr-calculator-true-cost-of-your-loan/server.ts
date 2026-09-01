export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Real APR Calculator - True Cost of Your Loan",
      "description": "Calculate the true APR of your mortgage including all fees and closing costs. Compare lender offers with real effective annual percentage rates.",
      "url": `${baseUrl}/real-apr-calculator-true-cost-of-your-loan`,
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
            "name": "Real APR Calculator",
            "item": `${baseUrl}/real-apr-calculator-true-cost-of-your-loan`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Real APR Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate true APR including all fees and costs."
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Real APR Calculator - True Cost of Your Loan",
      "description": "Calculate the true APR of your mortgage including all fees and closing costs.",
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
        "@id": `${baseUrl}/real-apr-calculator-true-cost-of-your-loan`
      }
    }
  };
}
