export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Jumbo Loan Limits, Rates & What Buyers Should Know",
      "description": "Learn about jumbo loan limits, current rates, qualification requirements, and key differences from conforming loans for high-value property purchases.",
      "url": `${baseUrl}/jumbo-loan-limits-rates-what-buyers-should-know`,
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
            "name": "Jumbo Loan Limits",
            "item": `${baseUrl}/jumbo-loan-limits-rates-what-buyers-should-know`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Jumbo Loan Limits, Rates & What Buyers Should Know",
      "description": "Complete guide to jumbo loans: limits, rates, and qualification requirements.",
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
        "@id": `${baseUrl}/jumbo-loan-limits-rates-what-buyers-should-know`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the jumbo loan limit in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 2026 conforming loan limit is $766,550 in most areas. Loans exceeding this amount are considered jumbo loans. High-cost areas may have higher limits."
          }
        },
        {
          "@type": "Question",
          "name": "What are jumbo loan interest rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jumbo loan rates are typically 0.25% to 0.50% higher than conforming loan rates due to increased risk for lenders."
          }
        },
        {
          "@type": "Question",
          "name": "How much down payment for a jumbo loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jumbo loans typically require 10-20% down payment, with better rates available at 20%+ to avoid higher costs."
          }
        }
      ]
    }
  };
}
