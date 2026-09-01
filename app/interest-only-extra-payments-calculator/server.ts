export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Interest-Only with Extra Payment Calculator",
      "description": "Explore how making voluntary principal payments during an interest-only mortgage's initial period reduces your balance, lowers future payments, and builds equity earlier.",
      "url": `${baseUrl}/interest-only-extra-payments-calculator`,
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
            "name": "Interest-Only with Extra Payment Calculator",
            "item": `${baseUrl}/interest-only-extra-payments-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Interest-Only with Extra Payment Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate the impact of making extra principal payments during an interest-only mortgage period. See how additional payments reduce balance, lower payment shock, and decrease total interest costs."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why make extra payments on an interest-only loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extra payments reduce your principal balance, building equity and lowering your eventual fully-amortizing payment. If you plan to keep the loan through the amortization period, reducing the balance beforehand decreases payment shock and total interest costs."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I pay extra each month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pay what you can afford consistently. Even small amounts like $100-200/month compound over years. Calculate what makes your post-interest-only payment comfortable, then work backwards to determine the extra payment needed to reach that target balance."
          }
        },
        {
          "@type": "Question",
          "name": "Can I skip extra payments if needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, extra payments are voluntary. Your required payment remains the interest-only amount. You can increase, decrease, or skip extra payments without penalty, providing flexibility that traditional amortizing loans don't offer."
          }
        },
        {
          "@type": "Question",
          "name": "Is this better than a traditional mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. If you can afford regular extra payments, a traditional mortgage often provides better rates and forced discipline. Interest-only with extras works best when you need payment flexibility but want the option to pay down principal when cash flow allows."
          }
        },
        {
          "@type": "Question",
          "name": "Do extra payments during interest-only affect my taxes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extra principal payments don't affect your mortgage interest deduction - you still deduct the interest you actually pay. Reducing your balance lowers future interest, which reduces future deductions, but this is offset by lower total interest costs."
          }
        }
      ]
    }
  };
}
