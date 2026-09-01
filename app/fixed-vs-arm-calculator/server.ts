export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Fixed vs ARM Calculator",
      "description": "Compare fixed-rate and adjustable-rate mortgages side-by-side to determine which loan type better aligns with your financial goals, risk tolerance, and homeownership timeline.",
      "url": `${baseUrl}/fixed-vs-arm-calculator`,
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
            "name": "Fixed vs ARM Calculator",
            "item": `${baseUrl}/fixed-vs-arm-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Fixed vs ARM Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Compare fixed-rate mortgages and adjustable-rate mortgages (ARMs) side-by-side. Understand the trade-offs between ARM's lower initial rates and fixed-rate stability."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a 5/1 ARM and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 5/1 ARM (Adjustable-Rate Mortgage) has a fixed interest rate for the first 5 years, then adjusts annually for the remaining loan term based on market index rates. Rate caps protect you—common structure is 2/2/5, meaning the rate can increase maximum 2% at first adjustment, 2% per subsequent adjustment, and 5% total over loan life."
          }
        },
        {
          "@type": "Question",
          "name": "Is a 7/1 ARM better than a 5/1 ARM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 7/1 ARM is better than a 5/1 ARM if you need rate stability for 6-7 years but plan to sell or refinance before year 8. The 7/1 ARM offers longer fixed-rate protection (7 years vs 5) and still lower initial rate than 30-year fixed. However, the 7/1 ARM's initial rate is usually 0.125-0.25% higher than a 5/1 ARM."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose a 30-year fixed or 5-year ARM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose a 5-year ARM if you're confident you'll sell or refinance within 5-7 years and want to save $200-400/month during that period. Choose a 30-year fixed if you're staying 10+ years, value payment predictability, or can't risk payment increases. Consider your timeline, risk tolerance, and rate outlook."
          }
        },
        {
          "@type": "Question",
          "name": "What are ARM rate caps and how do they protect me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ARM rate caps are contractual limits protecting borrowers from excessive interest rate increases. Three types: Initial Adjustment Cap (typically 2-5%), Periodic Adjustment Cap (usually 2%), and Lifetime Cap (commonly 5-6% above start rate). Even if market rates soar, your rate can't exceed the lifetime cap."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I save with a 5/1 ARM vs 30-year fixed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can save $15,000-$35,000 over 5 years with a 5/1 ARM compared to a 30-year fixed, depending on the rate spread. Typical scenario on $300,000 loan: 30-year fixed at 7% = $1,996/month; 5/1 ARM at 5.75% = $1,751/month. Monthly savings: $245, totaling $14,700 saved over 5 years."
          }
        },
        {
          "@type": "Question",
          "name": "What happens when my ARM adjusts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When your ARM adjusts, your rate changes based on current market rates: the lender checks the specified index rate, adds their fixed margin, compares result to your rate caps, and recalculates monthly payment. Your lender notifies you 30-120 days before adjustment. You can refinance to a fixed rate before adjustment if desired."
          }
        },
        {
          "@type": "Question",
          "name": "Is an ARM a good idea in 2024?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ARMs can be smart in 2024 if you're certain you'll sell within 5-7 years, ARM rates are significantly below fixed rates (meaningful monthly savings), or you expect income increases. ARMs are risky if you plan to stay 10+ years, can't afford payment increases, or have tight budget with no cushion."
          }
        }
      ]
    }
  };
}
