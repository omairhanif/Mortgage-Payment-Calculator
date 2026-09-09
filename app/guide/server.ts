export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';

  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Guides",
      "description": "Explore mortgage guides covering payments, second mortgages, HELOCs, APR, mortgage types, interest-only loans, extra payments, and renting vs buying.",
      "url": `${baseUrl}/guides`,
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
            "name": "Guides",
            "item": `${baseUrl}/guides`
          }
        ]
      }
    }
  };
}
