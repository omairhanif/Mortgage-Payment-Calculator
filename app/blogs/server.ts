export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';

  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Blogs",
      "description": "Browse mortgage blog articles covering basics, loan types, refinancing savings, and home buying strategy.",
      "url": `${baseUrl}/blogs`,
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
            "name": "Blogs",
            "item": `${baseUrl}/blogs`
          }
        ]
      }
    }
  };
}
