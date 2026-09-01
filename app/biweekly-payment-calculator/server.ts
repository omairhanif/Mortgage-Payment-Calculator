export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Biweekly Payment Calculator",
      "description": "Calculate how switching to biweekly mortgage payments can save you thousands in interest and help you pay off your mortgage years earlier.",
      "url": `${baseUrl}/biweekly-payment-calculator`,
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
            "name": "Biweekly Payment Calculator",
            "item": `${baseUrl}/biweekly-payment-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Biweekly Payment Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate the savings and accelerated payoff from making biweekly mortgage payments instead of monthly payments. See how making half your monthly payment every two weeks results in one extra payment per year."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much will I save with biweekly mortgage payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Biweekly payments typically save $30,000-$80,000 in interest and cut 4-7 years off a 30-year mortgage, depending on loan amount and rate. For example, a $300,000 mortgage at 6.5% with monthly payments costs $382,633 in total interest over 30 years. Switching to biweekly payments reduces total interest to $338,000—saving $44,633—and pays off the loan in approximately 25.5 years instead of 30."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to pay mortgage biweekly or monthly with extra payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both strategies save similar amounts—the key is making 13 payments per year instead of 12. Biweekly payments (half payment every 2 weeks) automatically result in 13 payments annually. Monthly payments plus one extra payment annually achieve the same result with more flexibility. On a $300,000 loan at 6%, both methods save roughly $40,000-45,000 in interest."
          }
        },
        {
          "@type": "Question",
          "name": "How to calculate biweekly mortgage payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate biweekly mortgage payments: (1) Calculate your standard monthly payment using the mortgage formula; (2) Divide the monthly payment by 2 to get your biweekly amount; (3) You'll make this half-payment 26 times per year (every two weeks). Example: $300,000 loan at 6.5% over 30 years = $1,896 monthly payment. Biweekly payment = $948 paid every two weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What are the disadvantages of biweekly mortgage payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Disadvantages include: lender fees ($200-400 setup + $3-5 per payment for formal programs), budgeting challenges if you're paid monthly/semi-monthly, reduced flexibility compared to making voluntary extra payments, and opportunity cost if that money could earn higher returns elsewhere. You can replicate biweekly benefits yourself by making one extra monthly payment annually without paying lender fees."
          }
        },
        {
          "@type": "Question",
          "name": "Will biweekly payments hurt my credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, biweekly payments don't hurt your credit. Your credit report reflects whether you make required payments on time, not the frequency. Biweekly payments help you pay off your mortgage faster, which can improve your debt-to-income ratio over time, but the payment schedule itself doesn't directly impact your credit score."
          }
        },
        {
          "@type": "Question",
          "name": "How does biweekly mortgage payment work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Biweekly payments work by paying half your monthly payment every two weeks instead of one full payment monthly. Since there are 52 weeks in a year, you make 26 half-payments (equivalent to 13 full payments) instead of 12 monthly payments. That extra annual payment goes entirely to principal, reducing your balance faster and saving substantial interest over the loan term."
          }
        }
      ]
    }
  };
}
