export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Refinance Calculator",
      "description": "Calculate potential savings from refinancing your mortgage by comparing your current loan with new loan terms, interest rates, and closing costs.",
      "url": `${baseUrl}/refinance-calculator`,
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
            "name": "Refinance Calculator",
            "item": `${baseUrl}/refinance-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Refinance Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate refinance savings including monthly payment reduction, break-even point, and total interest savings. Compare current loan to new refinance terms."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it worth refinancing for 1% lower rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, refinancing for a 1% rate reduction is usually worth it if you plan to stay in your home for at least 2-3 years. On a $300,000 mortgage, dropping from 7% to 6% saves approximately $200/month. With typical closing costs of $3,000-6,000, you'd break even in 15-30 months. Over a 30-year term, you'd save roughly $72,000 in interest."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I save to refinance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most financial experts recommend refinancing when you can save at least 0.5-1% on your interest rate, typically translating to $150-300/month on a $300,000 mortgage. The key metric is your break-even point—when monthly savings equal closing costs. If you're staying longer than the break-even period, refinancing makes sense."
          }
        },
        {
          "@type": "Question",
          "name": "What is a cash-out refinance and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A cash-out refinance replaces your current mortgage with a larger loan, letting you pocket the difference in cash while using your home equity. Lenders typically allow you to borrow up to 80% of your home's value. Cash-out refinances are popular for home renovations, debt consolidation, or major expenses."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to refinance a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refinancing typically takes 30-45 days from application to closing, though it can be as quick as 20 days with streamlined programs or extend to 60+ days if complications arise. The process includes application, processing, underwriting, appraisal, final approval, and closing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I refinance with bad credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but refinancing with bad credit (below 620) is challenging and limits your options. Most conventional refinances require 620+ credit score, with best rates for 740+. With bad credit, expect higher interest rates, larger equity requirements, and limited lender options."
          }
        },
        {
          "@type": "Question",
          "name": "What are current refinance rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of 2024, typical refinance rates range from 6-8% for 30-year fixed mortgages, 5.5-7.5% for 15-year fixed, and 5.5-7% for 5/1 ARMs. Your actual rate depends on credit score, loan-to-value ratio, debt-to-income ratio, loan amount, and property type."
          }
        },
        {
          "@type": "Question",
          "name": "Should I refinance from 30-year to 15-year mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refinancing to a 15-year makes sense if you can afford higher monthly payments and want to save substantially on interest while building equity faster. For a $300,000 loan at 6.5% (30-year), total interest is $382,633. At 6% (15-year), total interest drops to $155,743—saving $226,890."
          }
        }
      ]
    }
  };
}
