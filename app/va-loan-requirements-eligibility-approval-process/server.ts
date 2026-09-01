export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "VA Loan Requirements: Eligibility & Approval Process",
      "description": "Learn VA loan eligibility requirements, certificate of eligibility, credit score minimums, income verification, and the complete VA loan approval process.",
      "url": `${baseUrl}/va-loan-requirements-eligibility-approval-process`,
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
            "name": "VA Loan Requirements",
            "item": `${baseUrl}/va-loan-requirements-eligibility-approval-process`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "VA Loan Requirements: Eligibility & Approval Process",
      "description": "Complete guide to VA loan eligibility requirements and approval process.",
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
        "@id": `${baseUrl}/va-loan-requirements-eligibility-approval-process`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is eligible for a VA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veterans, active-duty service members with 90+ days service, National Guard/Reserve members with 6+ years, and eligible surviving spouses qualify for VA loans."
          }
        },
        {
          "@type": "Question",
          "name": "What credit score is needed for a VA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While the VA has no minimum, most lenders require 620+ credit score. Better rates are available with 680+ scores."
          }
        },
        {
          "@type": "Question",
          "name": "Do VA loans require a down payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, VA loans allow 0% down payment for eligible borrowers, though funding fees apply unless exempt due to disability."
          }
        }
      ]
    }
  };
}
