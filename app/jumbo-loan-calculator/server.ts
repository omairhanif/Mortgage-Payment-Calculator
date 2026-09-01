export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Jumbo Loan Calculator",
      "description": "Calculate payments for jumbo loans that exceed conforming loan limits. Understand the requirements, rates, and costs for financing high-value properties.",
      "url": `${baseUrl}/jumbo-loan-calculator`,
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
            "name": "Jumbo Loan Calculator",
            "item": `${baseUrl}/jumbo-loan-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Jumbo Loan Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate jumbo loan payments for amounts exceeding conforming loan limits. Understand stricter requirements including higher down payments, credit scores, and reserves."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a jumbo loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A jumbo loan exceeds the conforming loan limits set by Fannie Mae and Freddie Mac ($766,550 in most counties for 2024, up to $1,149,825 in high-cost areas). Because these loans can't be purchased by government-sponsored entities, they carry different requirements and often slightly higher rates."
          }
        },
        {
          "@type": "Question",
          "name": "What are the requirements for a jumbo loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jumbo loans typically require: 10-20% down payment (sometimes more), credit score of 700+ (often 740+ for best rates), debt-to-income ratio below 43%, 6-12 months reserves (savings equal to mortgage payments), and full income documentation. Requirements are stricter than conforming loans."
          }
        },
        {
          "@type": "Question",
          "name": "Are jumbo loan rates higher than conventional rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Historically yes, but the gap has narrowed. Jumbo rates are often only 0.25-0.50% higher than conforming rates, and sometimes competitive or even lower for well-qualified borrowers. Rates vary significantly based on credit score, down payment, and reserves."
          }
        },
        {
          "@type": "Question",
          "name": "How much down payment do I need for a jumbo loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum down payments typically range from 10-20%, with 20% being most common to avoid mortgage insurance. Some lenders offer jumbo loans with as little as 10% down, but expect higher rates and stricter qualification requirements. Larger down payments (25%+) often secure better rates."
          }
        },
        {
          "@type": "Question",
          "name": "Do jumbo loans require mortgage insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually no, if you put down 20% or more. Some lenders offer jumbo loans with less than 20% down but will require PMI, which is expensive on large loan amounts. Most jumbo borrowers put down 20%+ to avoid PMI and secure better terms."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a jumbo loan for investment properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but requirements are even stricter: typically 25-30% down payment, higher interest rates, larger reserves (12+ months), and lower maximum debt-to-income ratios. Investment property jumbo loans are considered higher risk and priced accordingly."
          }
        }
      ]
    }
  };
}
