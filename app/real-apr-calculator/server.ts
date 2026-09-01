export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Real APR Calculator",
      "description": "Calculate the true Annual Percentage Rate (APR) of your mortgage including all fees, points, and costs to accurately compare loan offers.",
      "url": `${baseUrl}/real-apr-calculator`,
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
            "name": "Real APR Calculator",
            "item": `${baseUrl}/real-apr-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Real APR Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate the true APR of your mortgage including interest rate, origination fees, discount points, and all lender charges. Compare the real cost of different loan offers."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between interest rate and APR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The interest rate is the cost of borrowing money expressed as a percentage of the loan amount—it determines your monthly principal and interest payment. APR (Annual Percentage Rate) includes the interest rate PLUS other borrowing costs like origination fees, discount points, mortgage insurance, and certain lender fees. APR is always equal to or higher than the interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "How to calculate APR on a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate APR: add all financed costs (origination fees, points, lender fees, upfront mortgage insurance), determine the net loan amount you receive, calculate what interest rate would produce the same monthly payment, and that rate is your APR. Use an APR calculator for accurate results as the math involves complex iterative calculations."
          }
        },
        {
          "@type": "Question",
          "name": "Is 7% APR high for a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whether 7% APR is high depends on current market conditions. As of 2024, with rates ranging from 6-8%, a 7% APR is moderate. Compare to multiple lenders' offers—if others quote 6.5%, then 7% is high; if others quote 7.5%, it's competitive. Shop at least 3 lenders within 14 days to compare."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between APR and APY?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "APR (Annual Percentage Rate) is used for loans and shows what you'll pay, including interest and fees. APY (Annual Percentage Yield) is used for savings/investments and shows what you'll earn, including compound interest. For mortgages, you'll see APR—not APY."
          }
        },
        {
          "@type": "Question",
          "name": "What fees are included in APR calculation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "APR includes loan origination fees, discount points, lender underwriting fees, upfront mortgage insurance premiums, broker fees, and application fees. NOT included: appraisal fees, home inspection, title insurance, attorney fees, recording fees, homeowners insurance, property taxes, and prepaid interest/escrow items."
          }
        },
        {
          "@type": "Question",
          "name": "How much higher is APR than interest rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "APR is typically 0.125% to 0.5% higher than the interest rate, depending on fees and loan type. With minimal fees, APR might be 0.15% higher; with typical fees, 0.35% higher; with high fees or points, 0.6%+ higher. If APR is more than 0.5% higher than interest rate, examine the closing costs carefully."
          }
        },
        {
          "@type": "Question",
          "name": "Should I focus on interest rate or APR when comparing mortgages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Focus on APR for long-term ownership (5+ years) and interest rate for short-term ownership (1-3 years). APR reflects total borrowing cost over the full loan term. If you're selling within 2-3 years, upfront fees matter less, so a lower interest rate might save money even if APR is higher."
          }
        }
      ]
    }
  };
}
