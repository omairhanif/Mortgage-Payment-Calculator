export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Affordability Calculator",
      "description": "Calculate how much house you can afford based on your income, debts, down payment, and loan terms. Understand lender qualification requirements.",
      "url": `${baseUrl}/mortgage-affordability-calculator`,
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
            "name": "Mortgage Affordability Calculator",
            "item": `${baseUrl}/mortgage-affordability-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Mortgage Affordability Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate how much home you can afford based on income, debts, down payment, and credit score. Understand qualification requirements and debt-to-income ratios."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do lenders look for in qualification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders evaluate the '4 Cs': Capacity (income and DTI), Credit (score and history), Collateral (home value and down payment), and Capital (assets and reserves). They also verify employment history (typically 2+ years in same field) and assess overall financial stability."
          }
        },
        {
          "@type": "Question",
          "name": "What credit score do I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum scores vary by loan type: Conventional loans typically require 620+, FHA loans 580+ (or 500+ with 10% down), VA loans 580-620+, and Jumbo loans 700+. Higher scores get better rates. Below 620, consider FHA or work on improving credit first."
          }
        },
        {
          "@type": "Question",
          "name": "Can I qualify with high student loan debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but it affects your DTI ratio and reduces how much you can borrow. Lenders use 0.5-1% of your student loan balance as the monthly payment if you're on income-driven repayment. Higher income or lower other debts help offset student loans."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need perfect credit to qualify?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No! While higher scores help, you can qualify with imperfect credit. Focus on: paying all bills on time for 12+ months, keeping credit utilization below 30%, not opening new credit before applying, and resolving any collections or disputes."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I save before applying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Save for: down payment (3-20% of home price), closing costs (2-5% of home price), and 3-6 months of mortgage payments as reserves. Some loan programs require reserves, and having more strengthens your application."
          }
        }
      ]
    }
  };
}
