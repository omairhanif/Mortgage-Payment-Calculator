export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Income Requirement Calculator",
      "description": "Calculate the income required to qualify for a mortgage based on your desired loan amount, interest rate, debts, and lender qualification ratios.",
      "url": `${baseUrl}/income-requirement-calculator`,
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
            "name": "Income Requirement Calculator",
            "item": `${baseUrl}/income-requirement-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Income Requirement Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate the minimum income needed to qualify for a mortgage. Understand debt-to-income ratios and how lenders determine qualification."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much mortgage can I get with $70,000 salary in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With a $70,000 annual salary in Canada ($5,833/month gross), you can typically qualify for approximately $310,000-340,000 mortgage, assuming minimal other debts. Canadian lenders use Gross Debt Service (GDS) ratio of 32-39% and Total Debt Service (TDS) ratio of 42-44%. Your actual amount depends on down payment size, interest rate, property taxes, heating costs, other debts, and credit score."
          }
        },
        {
          "@type": "Question",
          "name": "What income do I need for a $500,000 mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To qualify for a $500,000 mortgage, you typically need $120,000-145,000 annual household income, depending on interest rates, debts, and down payment. At 6.5% for 30 years, monthly payment is $3,160 plus taxes and insurance. With 28% front-end DTI ratio, you need approximately $165,000 annually. With 36% back-end ratio and no other debts, you need approximately $129,000 annually."
          }
        },
        {
          "@type": "Question",
          "name": "What income is needed for a $400,000 house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a $400,000 house, you need approximately $95,000-115,000 annual income, depending on your down payment, debts, and loan terms. With 20% down ($80,000), you're financing $320,000. At 6.5% over 30 years, monthly payment is approximately $2,522 including taxes and insurance. Using the 28/36 rule, you need $108,000 annually for 28% front-end DTI."
          }
        }
      ]
    }
  };
}
