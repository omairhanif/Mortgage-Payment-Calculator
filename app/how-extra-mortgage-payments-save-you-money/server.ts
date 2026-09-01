export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How Extra Mortgage Payments Save You Money",
      "description": "Discover how making extra mortgage payments can save thousands in interest and help you pay off your home years earlier with strategic payment strategies.",
      "url": `${baseUrl}/how-extra-mortgage-payments-save-you-money`,
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
            "name": "How Extra Payments Save Money",
            "item": `${baseUrl}/how-extra-mortgage-payments-save-you-money`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Extra Mortgage Payments Save You Money",
      "description": "Learn how extra mortgage payments reduce interest costs and accelerate payoff timelines.",
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
        "@id": `${baseUrl}/how-extra-mortgage-payments-save-you-money`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much can I save with extra mortgage payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extra payments can save tens of thousands in interest and shorten your loan term by several years, depending on payment amounts and timing."
          }
        },
        {
          "@type": "Question",
          "name": "Should I make extra principal payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extra principal payments make sense if you have no higher-interest debt, have emergency savings, and don't have better investment opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to make extra payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extra payments have the greatest impact early in your loan term when the principal balance is highest."
          }
        }
      ]
    }
  };
}
