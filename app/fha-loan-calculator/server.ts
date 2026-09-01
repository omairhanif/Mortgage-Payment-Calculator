export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "FHA Loan Calculator",
      "description": "Calculate monthly payments for an FHA loan including lower down payment requirements, upfront and annual mortgage insurance premiums, and competitive interest rates for first-time buyers.",
      "url": `${baseUrl}/fha-loan-calculator`,
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
            "name": "FHA Loan Calculator",
            "item": `${baseUrl}/fha-loan-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "FHA Loan Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate FHA loan payments including upfront MIP (1.75%) and annual MIP premiums. Understand the costs and benefits of FHA financing with lower down payment requirements."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the payment on a $400,000 FHA loan at 7%?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a $400,000 FHA loan at 7% interest over 30 years with 3.5% down ($14,000), your loan amount would be $386,000 plus the upfront mortgage insurance premium (UFMIP) of 1.75% ($6,755), totaling $392,755. Your monthly principal and interest payment would be approximately $2,611. Add annual MIP of about 0.85% ($277/month), property taxes (varies by location, typically $300-500/month), homeowners insurance ($150-250/month), bringing your total monthly payment to roughly $3,400-3,700."
          }
        },
        {
          "@type": "Question",
          "name": "What income do I need to afford a $500,000 house with FHA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To afford a $500,000 house with an FHA loan, you typically need annual income of $120,000-135,000, assuming you meet the standard 43% debt-to-income ratio limit. With 3.5% down ($17,500), your loan would be about $482,500 plus UFMIP, resulting in monthly payments around $4,000-4,500 (including MIP, taxes, insurance)."
          }
        },
        {
          "@type": "Question",
          "name": "What's the minimum credit score for an FHA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum credit score for an FHA loan is technically 500, but practical requirements are higher. With a 580+ credit score, you qualify for the minimum 3.5% down payment. With a 500-579 credit score, you need 10% down. However, many FHA lenders set their own minimum credit score requirements—typically 580-620."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy a condo or townhouse with an FHA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can buy a condo or townhouse with an FHA loan, but the property must be in an FHA-approved condominium project. The FHA maintains a list of approved condo buildings that meet specific financial and legal requirements. Individual townhouses or single-unit properties don't need project approval."
          }
        },
        {
          "@type": "Question",
          "name": "What is FHA mortgage insurance (MIP) and can I remove it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FHA mortgage insurance premium (MIP) has two components: an upfront premium of 1.75% of the loan amount (typically financed into the loan) and annual MIP of 0.45%-1.05% divided into monthly payments. For loans with less than 10% down, MIP remains for the life of the loan—you cannot remove it unless you refinance to a conventional loan once you have 20% equity."
          }
        },
        {
          "@type": "Question",
          "name": "Are there FHA loan limits by state or county?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FHA loan limits vary by county based on local median home prices. For 2024, the FHA floor limit is $498,257 in low-cost counties, while high-cost areas can go up to $1,149,825 for single-family homes. You can find your specific county's FHA loan limit on the HUD website or by asking lenders."
          }
        },
        {
          "@type": "Question",
          "name": "What are FHA closing costs and who pays them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FHA closing costs typically range from 3-6% of the loan amount and include loan origination fees, appraisal, credit report, title insurance, recording fees, upfront MIP (1.75%), prepaid property taxes and insurance, and lender charges. FHA allows sellers to contribute up to 6% of the purchase price toward buyer closing costs—more generous than conventional loans."
          }
        }
      ]
    }
  };
}
