export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Extra Payment Calculator",
      "description": "Calculate how extra mortgage payments can dramatically reduce your interest costs and help you become debt-free years earlier.",
      "url": `${baseUrl}/extra-payment-calculator`,
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
            "name": "Extra Payment Calculator",
            "item": `${baseUrl}/extra-payment-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Extra Payment Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate the impact of making additional principal payments on your mortgage. See exactly how much interest you'll save and how many years you'll cut off your mortgage term by making extra payments."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to pay off a 30-year mortgage in 15 years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To pay off a 30-year mortgage in 15 years, you need to roughly double your principal payment each month. For a $300,000 loan at 6.5%, the standard 30-year payment is $1,896/month. To pay it off in 15 years, pay approximately $2,596/month (an extra $700/month). This aggressive strategy saves approximately $200,000 in interest over the original 30-year term."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I pay an extra $200 a month on my mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paying an extra $200/month on your mortgage generates substantial savings. On a $300,000 loan at 6% over 30 years (standard payment: $1,799/month), adding $200 extra saves approximately $78,000 in interest and pays off your mortgage 7 years early (in 23 years instead of 30). The extra $200/month totals $2,000/year or $46,000 over the shortened loan period—but you avoid $78,000 in interest, netting $32,000 in pure savings."
          }
        },
        {
          "@type": "Question",
          "name": "How much will I save if I pay extra on my mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Savings from extra mortgage payments depend on your loan amount, interest rate, remaining term, and extra payment amount. Examples on a $300,000, 6% 30-year mortgage: $50 extra/month saves ~$22,000 in interest and shaves 2.5 years off; $100 extra/month saves ~$40,000 and reduces term by 4.5 years; $200 extra/month saves ~$70,000 and cuts 7 years; $500 extra/month saves ~$145,000 and eliminates 13 years."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to pay extra on principal or escrow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always pay extra toward principal, not escrow. Extra principal payments reduce your loan balance and save interest. Escrow payments go toward taxes and insurance—overpaying escrow just creates a larger escrow balance that sits with your lender earning no interest. When making extra payments, clearly mark them 'apply to principal' to ensure proper crediting."
          }
        },
        {
          "@type": "Question",
          "name": "Should I make extra mortgage payments or invest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This depends on your mortgage rate versus expected investment returns. If your mortgage rate is 3-4% and you can reliably earn 7-10% in investments, investing may build more wealth. If your rate is 6%+ or you prioritize guaranteed savings and debt elimination, extra payments make sense. Consider: your risk tolerance, tax situation, retirement savings status, and whether you have adequate emergency funds. Many choose both—max out retirement accounts first, then apply extra funds to mortgage."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to make extra mortgage payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The earlier you make extra payments, the more you save, as they reduce the principal when interest charges are highest. Early in your loan term, most of your monthly payment goes to interest—extra payments then have maximum impact. That said, extra payments always save money regardless of when you start. Make them whenever you can afford to, ensuring you maintain adequate emergency savings first."
          }
        }
      ]
    }
  };
}
