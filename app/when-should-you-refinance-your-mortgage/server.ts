export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "When Should You Refinance Your Mortgage?",
      "description": "Learn the best times to refinance your mortgage, break-even calculations, rate drop thresholds, and when refinancing makes financial sense.",
      "url": `${baseUrl}/when-should-you-refinance-your-mortgage`,
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
            "name": "When to Refinance",
            "item": `${baseUrl}/when-should-you-refinance-your-mortgage`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "When Should You Refinance Your Mortgage?",
      "description": "Learn when refinancing makes sense and how to calculate break-even points.",
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
        "@id": `${baseUrl}/when-should-you-refinance-your-mortgage`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much should rates drop before refinancing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional advice suggests refinancing when rates drop 1-2%, but modern no-cost refinancing can make 0.5-0.75% drops worthwhile if you'll keep the loan long enough."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to refinance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refinance when rates drop significantly, your credit improves for better rates, you want to eliminate PMI, or need to change loan terms."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate refinance break-even?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Divide total closing costs by monthly savings. If costs are $4,000 and savings are $200/month, break-even is 20 months."
          }
        }
      ]
    }
  };
}
