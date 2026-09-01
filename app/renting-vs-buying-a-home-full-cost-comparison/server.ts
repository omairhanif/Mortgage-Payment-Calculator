export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Renting vs Buying a Home: Full Cost Comparison",
      "description": "Compare the true costs of renting vs buying a home over time including mortgage, maintenance, taxes, insurance, appreciation, and opportunity costs.",
      "url": `${baseUrl}/renting-vs-buying-a-home-full-cost-comparison`,
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
            "name": "Renting vs Buying",
            "item": `${baseUrl}/renting-vs-buying-a-home-full-cost-comparison`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Renting vs Buying a Home: Full Cost Comparison",
      "description": "Comprehensive cost comparison of renting versus buying a home over time.",
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
        "@id": `${baseUrl}/renting-vs-buying-a-home-full-cost-comparison`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it cheaper to rent or buy a house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on location, timeframe, and home appreciation. Buying is usually cheaper long-term (7+ years) in stable markets with normal appreciation."
          }
        },
        {
          "@type": "Question",
          "name": "What costs do buyers pay that renters don't?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buyers pay property taxes, homeowners insurance, maintenance, HOA fees, closing costs, and mortgage interest that renters avoid."
          }
        },
        {
          "@type": "Question",
          "name": "How long should I stay to make buying worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally 5-7 years minimum to recoup closing costs and build equity, though this varies by market and appreciation rates."
          }
        }
      ]
    }
  };
}
