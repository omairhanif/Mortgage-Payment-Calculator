export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How to Qualify for a Mortgage: Key Requirements",
      "description": "Learn the essential requirements to qualify for a mortgage including credit score, income, debt-to-income ratio, down payment, and employment history.",
      "url": `${baseUrl}/how-to-qualify-for-a-mortgage-key-requirements`,
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
            "name": "Mortgage Qualification",
            "item": `${baseUrl}/how-to-qualify-for-a-mortgage-key-requirements`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Qualify for a Mortgage: Key Requirements",
      "description": "Complete guide to mortgage qualification requirements including credit, income, and debt ratios.",
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
        "@id": `${baseUrl}/how-to-qualify-for-a-mortgage-key-requirements`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What credit score do I need for a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conventional loans typically require a 620+ credit score, FHA loans accept 580+, and best rates require 740+."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum down payment for a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum down payments range from 0% (VA/USDA loans) to 3% (conventional) to 3.5% (FHA), though 20% down avoids PMI."
          }
        },
        {
          "@type": "Question",
          "name": "What debt-to-income ratio do I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most lenders require a debt-to-income ratio below 43%, though some programs allow up to 50% with strong credit."
          }
        }
      ]
    }
  };
}
