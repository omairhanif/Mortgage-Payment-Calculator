export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Advice & Guides",
      "description": "Expert mortgage advice, guides, and tips for homebuyers. Learn about rates, qualification, refinancing, and making smart financing decisions.",
      "url": `${baseUrl}/advice`,
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
            "name": "Advice",
            "item": `${baseUrl}/advice`
          }
        ]
      }
    }
  };
}
