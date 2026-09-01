export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Paying Points Calculator",
      "description": "Calculate whether paying discount points at closing makes financial sense for your situation and determine the break-even period and long-term savings.",
      "url": `${baseUrl}/paying-points-calculator`,
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
            "name": "Paying Points Calculator",
            "item": `${baseUrl}/paying-points-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Paying Points Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate whether buying discount points makes sense. Determine break-even period, monthly savings, and total interest savings from paying points to reduce your interest rate."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are mortgage discount points?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Discount points are upfront fees paid to lenders at closing to reduce your interest rate. One point costs 1% of your loan amount and typically lowers your rate by 0.25%. For example, on a $300,000 loan, one point costs $3,000 and might reduce your rate from 7% to 6.75%."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate if paying points is worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Calculate your break-even point by dividing the cost of points by your monthly payment savings. If points cost $3,000 and save you $50/month, your break-even is 60 months (5 years). If you keep the loan longer than the break-even period, points save money; if you sell or refinance sooner, you lose money."
          }
        },
        {
          "@type": "Question",
          "name": "When should I pay discount points?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pay points when you plan to keep the loan long past the break-even point, typically 7+ years. Points work best for long-term owners in low-rate environments. Avoid points if you might sell, refinance, or pay off the loan within a few years—you won't recoup the upfront cost."
          }
        },
        {
          "@type": "Question",
          "name": "How much would a borrower pay for 2 discount points on a $150,000 mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 discount points on a $150,000 mortgage would cost $3,000 (2% of $150,000). Each point costs 1% of the loan amount. These points would typically reduce your interest rate by approximately 0.50%, though the exact rate reduction depends on current market conditions and lender pricing."
          }
        },
        {
          "@type": "Question",
          "name": "What does 1.5 points mean on a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1.5 points means you're paying 1.5% of your loan amount upfront to buy down your interest rate. On a $200,000 loan, 1.5 points costs $3,000. This typically reduces your rate by about 0.375% (1.5 × 0.25%), though exact reductions vary by lender and market conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Are mortgage points tax deductible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally yes, if you paid points to obtain a mortgage on your primary residence and meet IRS requirements. Points are typically deductible in the year paid for purchase mortgages, but must be amortized over the loan term for refinances. Consult a tax professional for your specific situation."
          }
        },
        {
          "@type": "Question",
          "name": "Is 1 point worth refinancing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 1-point rate reduction (1% lower rate, not 1 discount point) is almost always worth refinancing if you plan to keep the loan long enough to break even on closing costs. However, 1 discount point (0.25% rate reduction) may or may not justify refinancing—calculate your break-even timeline."
          }
        }
      ]
    }
  };
}
