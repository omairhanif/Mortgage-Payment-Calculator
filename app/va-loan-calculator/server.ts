export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "VA Loan Calculator",
      "description": "Estimate monthly payments for a VA loan with zero down payment, no mortgage insurance, and competitive interest rates exclusively available to eligible veterans and active military members.",
      "url": `${baseUrl}/va-loan-calculator`,
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
            "name": "VA Loan Calculator",
            "item": `${baseUrl}/va-loan-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "VA Loan Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate VA loan payments with no down payment and no monthly mortgage insurance. Understand VA funding fees, benefits, and savings compared to conventional loans for eligible veterans."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the payment on a $400,000 VA loan at 6.5%?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a $400,000 VA loan at 6.5% over 30 years with no down payment, your monthly principal and interest payment would be approximately $2,528. The VA funding fee (2.3% for first-time use = $9,200) is typically financed into the loan, bringing your total loan to $409,200 and your P&I payment to about $2,586/month. Add property taxes and homeowners insurance, bringing your total monthly payment to roughly $3,100-3,400."
          }
        },
        {
          "@type": "Question",
          "name": "Can you get a VA loan with bad credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VA loans don't have a minimum credit score requirement set by the VA itself, but most lenders require 580-620 minimum. Some VA-specialized lenders accept scores as low as 500-550 for well-qualified borrowers with strong compensating factors. The VA loan program is generally more flexible than conventional loans."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between VA and FHA loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VA loans require no down payment (vs. 3.5% for FHA), have no monthly mortgage insurance (FHA requires MIP for life of loan), and typically offer lower interest rates. VA loans have a one-time funding fee (1.4-3.6%, waived for disabled veterans) while FHA has upfront MIP plus ongoing monthly MIP. For eligible veterans, VA loans almost always offer better terms."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my VA loan benefit more than once?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! You can use your VA loan benefit multiple times throughout your life. After paying off and selling a home purchased with a VA loan, your entitlement is restored for full reuse. You can even have multiple VA loans simultaneously if you have remaining entitlement."
          }
        },
        {
          "@type": "Question",
          "name": "Are there VA loan limits in 2024?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of 2020, VA loan limits were eliminated for veterans with full entitlement, meaning you can borrow any amount the lender approves based on your income and creditworthiness. For 2024, the conforming limit is $766,550 in most areas and up to $1,149,825 in high-cost counties."
          }
        },
        {
          "@type": "Question",
          "name": "Do disabled veterans pay the VA funding fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No! Veterans receiving VA disability compensation are completely exempt from the VA funding fee, saving $9,200-$14,400 on a $400,000 loan. This exemption applies whether you're rated at 10% or 100% disabled. Purple Heart recipients are also exempt from the funding fee."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy a multi-family property with a VA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! VA loans can finance properties with up to 4 units, as long as you occupy one unit as your primary residence. This is an excellent wealth-building strategy—you can live in one unit while renting out the others. The same VA loan benefits apply: 0% down payment, no monthly mortgage insurance, competitive rates."
          }
        }
      ]
    }
  };
}
