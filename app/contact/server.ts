export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Contact Us",
      "description": "Get in touch with Mortgage Payment Calculator for questions, feedback, or support regarding our calculators and mortgage resources.",
      "url": `${baseUrl}/contact`,
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
            "name": "Contact",
            "item": `${baseUrl}/contact`
          }
        ]
      }
    }
  };
}
