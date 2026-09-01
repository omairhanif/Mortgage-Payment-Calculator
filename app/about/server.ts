export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "About Mortgage Payment Calculator",
      "description": "Learn about our mission to provide accurate, free mortgage calculators and educational resources to help you make informed home financing decisions.",
      "url": `${baseUrl}/about`,
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
            "name": "About",
            "item": `${baseUrl}/about`
          }
        ]
      }
    }
  };
}
