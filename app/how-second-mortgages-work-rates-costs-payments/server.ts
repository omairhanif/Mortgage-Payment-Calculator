export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How Second Mortgages Work: Rates, Costs & Payments",
      "description": "Learn how second mortgages work, interest rates, closing costs, payment structures, and when a second mortgage makes sense for homeowners.",
      "url": `${baseUrl}/how-second-mortgages-work-rates-costs-payments`,
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
            "name": "Second Mortgages",
            "item": `${baseUrl}/how-second-mortgages-work-rates-costs-payments`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Second Mortgages Work: Rates, Costs & Payments",
      "description": "Complete guide to second mortgages: how they work, rates, costs, and payment structures.",
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
        "@id": `${baseUrl}/how-second-mortgages-work-rates-costs-payments`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a second mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A second mortgage is a loan secured by your home equity that sits behind your primary mortgage in priority. It includes home equity loans and HELOCs."
          }
        },
        {
          "@type": "Question",
          "name": "What are second mortgage interest rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Second mortgage rates are typically 1-3% higher than first mortgage rates due to increased lender risk, usually ranging from 7-10%."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I borrow with a second mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most lenders allow combined loan-to-value (CLTV) ratios up to 85-90%, meaning you can borrow up to 85-90% of your home's value minus your first mortgage."
          }
        }
      ]
    }
  };
}
