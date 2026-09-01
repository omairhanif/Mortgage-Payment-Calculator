export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Interest-Only Mortgage Calculator",
      "description": "Calculate monthly payments and total costs for an interest-only mortgage, where you pay only interest for a set period before transitioning to full principal and interest payments.",
      "url": `${baseUrl}/interest-only-calculator`,
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
            "name": "Interest-Only Calculator",
            "item": `${baseUrl}/interest-only-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Interest-Only Mortgage Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate interest-only mortgage payments and compare to traditional amortizing loans. Understand payment structure during interest-only period and payment shock when amortization begins."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an interest-only mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An interest-only mortgage allows you to pay only the interest portion for a set period (usually 5-10 years), with no principal reduction. After this period, payments increase significantly as you begin paying both principal and interest to fully repay the loan over the remaining term."
          }
        },
        {
          "@type": "Question",
          "name": "Who should consider an interest-only mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "These loans suit buyers expecting significant income increases, investors with rental properties seeking cash flow, or those planning to sell before the interest-only period ends. They're risky for buyers counting on home appreciation or uncertain future income."
          }
        },
        {
          "@type": "Question",
          "name": "How much will my payment increase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Payment increases can be substantial - often 30-50% or more. For example, a $400,000 loan at 7% might have interest-only payments of $2,333, jumping to $3,200+ when full amortization begins. The shorter the remaining term, the higher the increase."
          }
        },
        {
          "@type": "Question",
          "name": "Do I build any equity with interest-only payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No equity builds through loan paydown during the interest-only period - your loan balance stays the same. Equity only increases through home appreciation. This makes you vulnerable to market downturns and limits refinancing options if home value decreases."
          }
        },
        {
          "@type": "Question",
          "name": "Can I make principal payments during the interest-only period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most loans allow voluntary principal payments during the interest-only period. This reduces your balance, lowers future payments, and builds equity. However, if you can afford extra payments, consider whether an interest-only loan is the right choice."
          }
        }
      ]
    }
  };
}
