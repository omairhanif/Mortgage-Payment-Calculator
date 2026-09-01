export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Payment Calculator - Estimate Monthly Costs",
      "description": "Estimate your complete monthly housing cost based on your loan amount, interest rate, down payment, and loan term, while including property taxes, homeowners insurance, PMI, and HOA fees.",
      "url": `${baseUrl}/`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Mortgage Payment Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate your complete monthly mortgage payment including principal, interest, taxes, insurance, PMI, and HOA fees. Understand how your loan terms affect your monthly payment and total interest costs."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is my monthly mortgage payment calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your monthly payment includes principal and interest (P&I) calculated using your loan amount, interest rate, and loan term. Additional costs like property taxes, homeowners insurance, PMI (if applicable), and HOA fees are added to determine your total monthly housing payment."
          }
        },
        {
          "@type": "Question",
          "name": "What does my monthly payment include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your total monthly payment typically includes: Principal & Interest (P&I), Property Taxes, Homeowners Insurance, Private Mortgage Insurance (PMI) if your down payment is less than 20%, and HOA fees if applicable to your property."
          }
        },
        {
          "@type": "Question",
          "name": "How does the interest rate affect my payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The interest rate directly impacts both your monthly payment and total interest paid over the life of the loan. Higher rates mean higher monthly payments and more total interest. Even small rate changes can significantly affect your payment—a 0.5% difference on a $300,000 loan changes your monthly payment by approximately $90 and total interest by over $30,000."
          }
        },
        {
          "@type": "Question",
          "name": "Should I make a larger down payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A larger down payment reduces your loan amount, eliminates PMI at 20%, often qualifies you for better rates, and builds equity faster. However, it also reduces your liquid cash reserves. Consider your emergency fund, other investment opportunities, and whether keeping cash for renovations or other expenses makes more sense than a larger down payment."
          }
        },
        {
          "@type": "Question",
          "name": "What is PMI and when do I need it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Private Mortgage Insurance (PMI) protects the lender if you default on your loan. It's required on conventional loans when your down payment is less than 20% of the home's value. PMI typically costs 0.5-1% of the loan amount annually, adding $100-200+ monthly on a $300,000 loan. Once you reach 20% equity through payments or appreciation, you can request PMI removal."
          }
        },
        {
          "@type": "Question",
          "name": "How do property taxes affect my payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Property taxes are typically 0.5-2% of your home's value annually, varying significantly by location. Most lenders require you to pay property taxes through an escrow account—1/12 of your annual tax bill is added to your monthly mortgage payment. The lender then pays your tax bill when due. Property taxes can add $200-1,000+ to your monthly payment depending on home value and location."
          }
        }
      ]
    }
  };
}
