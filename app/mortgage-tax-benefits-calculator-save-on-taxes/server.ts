export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Tax Benefits Calculator: Save on Taxes",
      "description": "Calculate your mortgage tax benefits including interest deduction, property tax deduction, and PMI deduction savings on federal income taxes.",
      "url": `${baseUrl}/mortgage-tax-benefits-calculator-save-on-taxes`,
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
            "name": "Mortgage Tax Benefits",
            "item": `${baseUrl}/mortgage-tax-benefits-calculator-save-on-taxes`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Mortgage Tax Benefits Calculator: Save on Taxes",
      "description": "Calculate total mortgage tax benefits and deductions to maximize savings.",
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
        "@id": `${baseUrl}/mortgage-tax-benefits-calculator-save-on-taxes`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What mortgage tax benefits can I claim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can deduct mortgage interest (up to $750K loan), property taxes (up to $10K SALT limit), and potentially PMI premiums if extended by Congress."
          }
        },
        {
          "@type": "Question",
          "name": "Should I itemize to claim mortgage deductions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Itemize only if your total deductions exceed the standard deduction ($14,600 single, $29,200 married filing jointly in 2024)."
          }
        },
        {
          "@type": "Question",
          "name": "Can I deduct mortgage interest on a second home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can deduct interest on a second home, but the combined mortgage debt on both homes cannot exceed $750,000."
          }
        }
      ]
    }
  };
}
