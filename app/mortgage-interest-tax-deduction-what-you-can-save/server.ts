export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Interest Tax Deduction: What You Can Save",
      "description": "Learn how the mortgage interest tax deduction works, who qualifies, deduction limits, and how much you can save on your federal income taxes.",
      "url": `${baseUrl}/mortgage-interest-tax-deduction-what-you-can-save`,
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
            "name": "Mortgage Tax Deduction",
            "item": `${baseUrl}/mortgage-interest-tax-deduction-what-you-can-save`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Mortgage Interest Tax Deduction: What You Can Save",
      "description": "Complete guide to mortgage interest tax deductions and savings.",
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
        "@id": `${baseUrl}/mortgage-interest-tax-deduction-what-you-can-save`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I deduct mortgage interest on my taxes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if you itemize deductions, you can deduct mortgage interest on loans up to $750,000 ($375,000 if married filing separately) for mortgages taken after December 15, 2017."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I save with mortgage interest deduction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Savings depend on your tax bracket. In the 24% bracket, deducting $15,000 in interest saves $3,600 in federal taxes annually."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mortgage interest deduction limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can deduct interest on mortgage debt up to $750,000 for loans originated after December 15, 2017, or $1 million for earlier loans."
          }
        }
      ]
    }
  };
}
