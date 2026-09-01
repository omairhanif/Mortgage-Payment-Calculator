export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Balloon Mortgages Explained: Risks & When They Make Sense",
      "description": "Learn how balloon mortgages work, their risks and benefits, qualification requirements, and situations where short-term financing with large final payments makes sense.",
      "url": `${baseUrl}/balloon-mortgages-explained-risks-when-they-make-sense`,
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
            "name": "Balloon Mortgages Explained",
            "item": `${baseUrl}/balloon-mortgages-explained-risks-when-they-make-sense`
          }
        ]
      }
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Balloon Mortgages Explained: Risks & When They Make Sense",
      "description": "Complete guide to balloon mortgages, their risks, benefits, and use cases.",
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
        "@id": `${baseUrl}/balloon-mortgages-explained-risks-when-they-make-sense`
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a balloon mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A balloon mortgage has low monthly payments for 5-7 years, followed by a large final 'balloon' payment of the remaining balance. Payments are based on a 30-year amortization, but the loan matures much sooner, requiring refinancing, sale, or lump-sum payoff."
          }
        },
        {
          "@type": "Question",
          "name": "What are the risks of balloon mortgages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Major risks include: inability to refinance if credit/income worsens, rising rates making refinancing expensive, property value decline preventing refinancing, and forced sale if you can't pay the balloon. Most borrowers must refinance or sell before the balloon is due."
          }
        },
        {
          "@type": "Question",
          "name": "When does a balloon mortgage make sense?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Balloon mortgages work for: short-term ownership (plan to sell before balloon), expecting major income increase (bonus, inheritance), property flippers, or buyers in declining rate environments. They're risky for long-term owners without exit strategies."
          }
        }
      ]
    }
  };
}
