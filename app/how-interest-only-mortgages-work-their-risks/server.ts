export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How Interest-Only Mortgages Work & Their Risks",
      "description": "Understand interest-only mortgages, how they work, who they benefit, and the risks of payment shock when the interest-only period ends.",
      "url": `${baseUrl}/how-interest-only-mortgages-work-their-risks`,
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
            "name": "Interest-Only Mortgages",
            "item": `${baseUrl}/how-interest-only-mortgages-work-their-risks`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Interest-Only Mortgages Work & Their Risks",
      "description": "Complete guide to interest-only mortgages: benefits, risks, and payment shock considerations.",
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
        "@id": `${baseUrl}/how-interest-only-mortgages-work-their-risks`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an interest-only mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An interest-only mortgage allows you to pay only interest for a set period (typically 5-10 years), with no principal reduction during that time."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after the interest-only period ends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After the interest-only period, payments increase significantly as you must pay both principal and interest over the remaining loan term."
          }
        },
        {
          "@type": "Question",
          "name": "Who should consider an interest-only mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Interest-only mortgages may suit borrowers with irregular income, investors, or those expecting significant income increases."
          }
        }
      ]
    }
  };
}
