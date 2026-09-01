export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cut Interest-Only Loan Costs with Extra Payments",
      "description": "Learn strategies to reduce interest-only loan costs through extra principal payments, balance reduction techniques, and payment optimization.",
      "url": `${baseUrl}/cut-interest-only-loan-costs-with-extra-payments`,
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
            "name": "Cut Interest-Only Loan Costs",
            "item": `${baseUrl}/cut-interest-only-loan-costs-with-extra-payments`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cut Interest-Only Loan Costs with Extra Payments",
      "description": "Strategies to reduce interest-only mortgage costs through extra payments.",
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
        "@id": `${baseUrl}/cut-interest-only-loan-costs-with-extra-payments`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do extra payments reduce interest-only loan costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extra payments during the interest-only period reduce principal balance, which lowers total interest charges and reduces the payment shock when full amortization begins. Every dollar of extra payment permanently reduces the balance."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I pay extra on an interest-only loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pay enough to make the eventual fully-amortizing payment comfortable. Calculate what payment you can afford long-term, then determine the extra payment needed during interest-only period to reach that balance."
          }
        },
        {
          "@type": "Question",
          "name": "What's the best strategy for extra payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Make consistent extra payments throughout the interest-only period rather than waiting until the end. Early extra payments have more time to compound savings and reduce interest on the remaining balance."
          }
        }
      ]
    }
  };
}
