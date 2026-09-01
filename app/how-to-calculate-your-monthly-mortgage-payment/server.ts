export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How to Calculate Your Monthly Mortgage Payment",
      "description": "Learn the formula to calculate monthly mortgage payments including principal, interest, taxes, insurance, PMI, and HOA fees with step-by-step examples.",
      "url": `${baseUrl}/how-to-calculate-your-monthly-mortgage-payment`,
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
            "name": "Calculate Mortgage Payment",
            "item": `${baseUrl}/how-to-calculate-your-monthly-mortgage-payment`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Calculate Your Monthly Mortgage Payment",
      "description": "Master the mortgage payment formula with step-by-step calculation examples.",
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
        "@id": `${baseUrl}/how-to-calculate-your-monthly-mortgage-payment`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the mortgage payment formula?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The mortgage payment formula is: M = P[r(1+r)^n]/[(1+r)^n-1], where M is monthly payment, P is principal, r is monthly interest rate, and n is number of payments."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in a mortgage payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A mortgage payment includes principal, interest, property taxes, homeowners insurance, PMI (if applicable), and HOA fees (if applicable) - often called PITI."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate monthly interest rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Divide the annual interest rate by 12. For example, a 6% annual rate equals 0.06/12 = 0.005 monthly rate."
          }
        }
      ]
    }
  };
}
