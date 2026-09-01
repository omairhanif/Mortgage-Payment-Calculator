export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Points Calculator: Are Points Worth It?",
      "description": "Calculate if buying mortgage points saves money. Analyze upfront costs, interest savings, break-even point, and long-term value of discount points.",
      "url": `${baseUrl}/mortgage-points-calculator-are-points-worth-it`,
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
            "name": "Mortgage Points Worth It",
            "item": `${baseUrl}/mortgage-points-calculator-are-points-worth-it`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Mortgage Points Calculator: Are Points Worth It?",
      "description": "Calculate whether buying mortgage points provides value based on your situation.",
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
        "@id": `${baseUrl}/mortgage-points-calculator-are-points-worth-it`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When are mortgage points worth buying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Points are worth buying if you plan to keep the mortgage long enough to recoup the upfront cost through lower monthly payments, typically 5-7 years or longer."
          }
        },
        {
          "@type": "Question",
          "name": "How do you calculate break-even on points?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Divide the cost of points by your monthly savings. If points cost $3,000 and save $50/month, break-even is 60 months (5 years)."
          }
        },
        {
          "@type": "Question",
          "name": "Can you negotiate mortgage points?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can negotiate with lenders on the cost and rate reduction per point. Shop multiple lenders to compare point pricing and rate reductions."
          }
        }
      ]
    }
  };
}
