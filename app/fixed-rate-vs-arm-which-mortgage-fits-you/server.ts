export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Fixed-Rate vs ARM: Which Mortgage Fits You?",
      "description": "Compare fixed-rate and adjustable-rate mortgages (ARMs): rate stability, payment predictability, break-even analysis, and which fits your timeline and risk tolerance.",
      "url": `${baseUrl}/fixed-rate-vs-arm-which-mortgage-fits-you`,
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
            "name": "Fixed-Rate vs ARM",
            "item": `${baseUrl}/fixed-rate-vs-arm-which-mortgage-fits-you`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Fixed-Rate vs ARM: Which Mortgage Fits You?",
      "description": "Complete comparison of fixed-rate and adjustable-rate mortgages.",
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
        "@id": `${baseUrl}/fixed-rate-vs-arm-which-mortgage-fits-you`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's the difference between fixed and ARM mortgages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fixed-rate mortgages maintain the same interest rate for the entire loan term (15-30 years). ARMs have a fixed rate for an initial period (5, 7, or 10 years), then adjust annually based on market rates plus a margin."
          }
        },
        {
          "@type": "Question",
          "name": "When should I choose an ARM over fixed-rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose an ARM if you plan to sell or refinance before the rate adjusts, expect income to increase significantly, or believe rates will decrease. ARMs work best for short-term ownership (5-7 years) or in declining rate environments."
          }
        },
        {
          "@type": "Question",
          "name": "What are the risks of an ARM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ARM risks include: payment shock when rates adjust upward, inability to refinance if credit/equity deteriorates, rising rates making the loan unaffordable, and uncertainty in long-term budgeting. Rate caps limit adjustments but don't eliminate risk."
          }
        }
      ]
    }
  };
}
