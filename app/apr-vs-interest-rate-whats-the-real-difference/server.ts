export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "APR vs Interest Rate: What's the Real Difference?",
      "description": "Understand the difference between APR and interest rate, how each affects your mortgage cost, and why APR provides a more accurate comparison.",
      "url": `${baseUrl}/apr-vs-interest-rate-whats-the-real-difference`,
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
            "name": "APR vs Interest Rate",
            "item": `${baseUrl}/apr-vs-interest-rate-whats-the-real-difference`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "APR vs Interest Rate: What's the Real Difference?",
      "description": "Complete guide to understanding APR vs interest rate for mortgages.",
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
        "@id": `${baseUrl}/apr-vs-interest-rate-whats-the-real-difference`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between APR and interest rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Interest rate is the cost to borrow principal, shown as a percentage. APR (Annual Percentage Rate) includes the interest rate plus additional costs like origination fees, points, and closing costs, expressed as a yearly rate. APR is always higher than or equal to the interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Which matters more: APR or interest rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your monthly payment is based on the interest rate, but APR shows the true cost of the loan. Use interest rate to calculate payments, and APR to compare loan offers from different lenders."
          }
        },
        {
          "@type": "Question",
          "name": "Can APR be lower than interest rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, APR cannot be lower than the interest rate because APR includes the interest rate plus additional loan costs. If a lender shows APR lower than the rate, it's an error."
          }
        }
      ]
    }
  };
}
