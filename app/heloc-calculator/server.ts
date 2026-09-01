export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "HELOC Calculator",
      "description": "Calculate payments and costs for a Home Equity Line of Credit (HELOC), which works like a credit card secured by your home equity with a draw period and repayment period.",
      "url": `${baseUrl}/heloc-calculator`,
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
            "name": "HELOC Calculator",
            "item": `${baseUrl}/heloc-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "HELOC Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate HELOC payments during draw and repayment periods. Understand interest-only payments, payment shock when repayment begins, and total interest costs."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the monthly payment on a $50,000 HELOC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The monthly payment on a $50,000 HELOC depends on the period. During the typical 10-year draw period with interest-only payments at 7.5% APR, you'd pay approximately $312.50/month. Once the repayment period begins, payments include principal and interest. For a 15-year repayment at 7.5%, the payment jumps to about $463/month."
          }
        },
        {
          "@type": "Question",
          "name": "What would payments be on a $100,000 HELOC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a $100,000 HELOC balance, expect interest-only payments of approximately $625/month during the draw period at 7.5% APR. When the repayment period starts, payments increase dramatically—to about $927/month over 15 years at 7.5%. Over the full HELOC term, you'll pay roughly $241,000 total ($100,000 principal + $141,000 interest)."
          }
        },
        {
          "@type": "Question",
          "name": "How much is a HELOC payment on $150,000?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A $150,000 HELOC generates interest-only payments of approximately $937.50/month during the draw period at 7.5% APR. When you enter the repayment period, payments surge to around $1,390/month over 15 years. Total cost over a typical HELOC structure would be about $362,000—that's $150,000 in principal and $212,000 in interest."
          }
        },
        {
          "@type": "Question",
          "name": "What are HELOC rates in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HELOC rates in Canada typically range from prime rate + 0.5% to prime + 1% for qualified borrowers at major banks. With current prime rate around 6.95%, most HELOC rates fall between 7.45-7.95%. Your actual rate depends on credit score, loan-to-value ratio, and lender relationship."
          }
        },
        {
          "@type": "Question",
          "name": "How to pay off a HELOC fast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To pay off a HELOC faster: make principal payments during the draw period instead of just interest-only, set up automatic biweekly payments, apply windfalls directly to principal, stop drawing from the line, and consider refinancing to a fixed-rate term loan if rates drop."
          }
        },
        {
          "@type": "Question",
          "name": "Is a HELOC or home equity loan better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A HELOC is better for ongoing, flexible access to funds—you draw what you need, pay interest only on what you've borrowed, and can pay down and reborrow. A home equity loan is better when you need a fixed lump sum with predictable payments. Use a HELOC for flexibility; use a home equity loan for discipline and fixed rates."
          }
        }
      ]
    }
  };
}
