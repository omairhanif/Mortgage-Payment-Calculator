export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "FHA Loan Requirements: Down Payment & Credit Score",
      "description": "Learn FHA loan requirements including minimum down payment (3.5%), credit score (580+), debt-to-income ratios, and mortgage insurance for first-time buyers.",
      "url": `${baseUrl}/fha-loan-requirements-down-payment-credit-score`,
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
            "name": "FHA Loan Requirements",
            "item": `${baseUrl}/fha-loan-requirements-down-payment-credit-score`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "FHA Loan Requirements: Down Payment & Credit Score",
      "description": "Complete guide to FHA loan qualification requirements and eligibility.",
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
        "@id": `${baseUrl}/fha-loan-requirements-down-payment-credit-score`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum credit score for an FHA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FHA loans require a 580+ credit score for 3.5% down payment. Scores of 500-579 require 10% down. Most lenders set higher minimums (600-620) due to overlays and risk management."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum down payment for FHA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FHA minimum down payment is 3.5% with 580+ credit score, or 10% with 500-579 credit score. Down payment can come from savings, gifts, grants, or employer assistance programs."
          }
        },
        {
          "@type": "Question",
          "name": "Do FHA loans require mortgage insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FHA loans require both upfront mortgage insurance premium (1.75% of loan amount) and annual mortgage insurance (0.45-1.05% of balance). MIP lasts for the life of the loan if you put down less than 10%."
          }
        }
      ]
    }
  };
}
