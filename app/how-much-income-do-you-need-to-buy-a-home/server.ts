export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How Much Income Do You Need to Buy a Home?",
      "description": "Calculate the income required to buy a home based on price, down payment, debt-to-income ratios, and mortgage qualification standards.",
      "url": `${baseUrl}/how-much-income-do-you-need-to-buy-a-home`,
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
            "name": "Income Required to Buy a Home",
            "item": `${baseUrl}/how-much-income-do-you-need-to-buy-a-home`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Much Income Do You Need to Buy a Home?",
      "description": "Learn how to calculate the income required for home buying based on price and debt ratios.",
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
        "@id": `${baseUrl}/how-much-income-do-you-need-to-buy-a-home`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the 28/36 rule for mortgages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 28/36 rule states that housing costs should not exceed 28% of gross income, and total debt should not exceed 36% of gross income."
          }
        },
        {
          "@type": "Question",
          "name": "How much income do I need for a $300,000 house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a $300,000 house with 20% down and 7% interest, you typically need around $60,000-$70,000 annual income to qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy a house with $50,000 income?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With $50,000 income and no other debt, you can typically afford a home priced around $200,000-$250,000 depending on down payment and rates."
          }
        }
      ]
    }
  };
}
