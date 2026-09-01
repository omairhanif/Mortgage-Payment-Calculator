export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How Mortgage Points Lower Your Interest Rate",
      "description": "Learn how mortgage points work, how much they cost, how they reduce your interest rate, and when buying points makes financial sense.",
      "url": `${baseUrl}/how-mortgage-points-lower-your-interest-rate`,
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
            "name": "Mortgage Points",
            "item": `${baseUrl}/how-mortgage-points-lower-your-interest-rate`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Mortgage Points Lower Your Interest Rate",
      "description": "Understand mortgage points, their cost, and whether buying points saves money over time.",
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
        "@id": `${baseUrl}/how-mortgage-points-lower-your-interest-rate`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are mortgage points?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mortgage points (discount points) are upfront fees paid to the lender to reduce your interest rate. One point equals 1% of your loan amount."
          }
        },
        {
          "@type": "Question",
          "name": "How much do mortgage points cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "One point costs 1% of the loan amount. On a $300,000 loan, one point costs $3,000 and typically reduces your rate by 0.25%."
          }
        },
        {
          "@type": "Question",
          "name": "Are mortgage points worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Points are worth it if you plan to keep the loan long enough to recoup the upfront cost through lower monthly payments, typically 5-7 years."
          }
        }
      ]
    }
  };
}
