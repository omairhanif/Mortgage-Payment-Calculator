export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Biweekly vs Monthly Mortgage Payments Compared",
      "description": "Compare biweekly and monthly mortgage payments: costs, interest savings, payoff timeline, and which payment schedule saves the most money.",
      "url": `${baseUrl}/biweekly-vs-monthly-mortgage-payments-compared`,
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
            "name": "Biweekly vs Monthly Payments",
            "item": `${baseUrl}/biweekly-vs-monthly-mortgage-payments-compared`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Biweekly vs Monthly Mortgage Payments Compared",
      "description": "Complete comparison of biweekly vs monthly mortgage payment strategies.",
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
        "@id": `${baseUrl}/biweekly-vs-monthly-mortgage-payments-compared`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do biweekly payments save money?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Biweekly payments result in 26 half-payments yearly (13 full payments) vs 12 monthly payments. That extra payment goes entirely to principal, reducing your balance faster and saving thousands in interest over the loan term."
          }
        },
        {
          "@type": "Question",
          "name": "How much faster will I pay off my mortgage with biweekly payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Biweekly payments typically pay off a 30-year mortgage 4-6 years early and save 15-20% on total interest. A $300,000 loan at 7% saves about $70,000 in interest and pays off in 25-26 years instead of 30."
          }
        },
        {
          "@type": "Question",
          "name": "Should I use biweekly or monthly payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose biweekly if you're paid biweekly and want automatic acceleration. Choose monthly if you prefer control, want to make irregular extra payments, or don't want to coordinate payments with your pay schedule."
          }
        }
      ]
    }
  };
}
