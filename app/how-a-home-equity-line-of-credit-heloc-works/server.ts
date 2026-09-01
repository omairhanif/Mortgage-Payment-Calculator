export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How a Home Equity Line of Credit (HELOC) Works",
      "description": "Learn how HELOCs work, how to qualify, interest rates, draw periods, repayment terms, and when a HELOC makes sense for homeowners.",
      "url": `${baseUrl}/how-a-home-equity-line-of-credit-heloc-works`,
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
            "name": "How a HELOC Works",
            "item": `${baseUrl}/how-a-home-equity-line-of-credit-heloc-works`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How a Home Equity Line of Credit (HELOC) Works",
      "description": "Complete guide to HELOCs: how they work, qualification requirements, rates, and repayment terms.",
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
        "@id": `${baseUrl}/how-a-home-equity-line-of-credit-heloc-works`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a HELOC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A HELOC (Home Equity Line of Credit) is a revolving line of credit secured by your home's equity that allows you to borrow money as needed up to a credit limit."
          }
        },
        {
          "@type": "Question",
          "name": "How does a HELOC differ from a home equity loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A HELOC is a revolving line of credit with variable rates, while a home equity loan is a lump sum with fixed rates and payments."
          }
        },
        {
          "@type": "Question",
          "name": "What are HELOC interest rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HELOC interest rates are typically variable and based on the prime rate plus a margin, usually ranging from 5% to 9% depending on creditworthiness."
          }
        }
      ]
    }
  };
}
