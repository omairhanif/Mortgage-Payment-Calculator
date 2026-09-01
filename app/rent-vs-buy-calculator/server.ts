export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Rent vs Buy Calculator",
      "description": "Compare the long-term costs of renting versus buying a home. Understand break-even timelines, equity building, and which option makes more financial sense for your situation.",
      "url": `${baseUrl}/rent-vs-buy-calculator`,
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
            "name": "Rent vs Buy Calculator",
            "item": `${baseUrl}/rent-vs-buy-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Rent vs Buy Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Compare renting versus buying a home. Calculate break-even timelines, total costs, equity building, and determine which option is better for your financial situation."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it cheaper to rent or buy a house right now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 2024 with high interest rates (6-8%) and elevated home prices, renting is cheaper in the short term (1-3 years) in most markets, but buying builds equity and wins financially if you stay 5-10+ years. Break-even typically occurs around year 5-7. Renting wins if you'll move within 3-5 years, property prices are falling, or rent is significantly less than ownership costs."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 5% rule for rent vs buy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 5% rule states: if annual rent is less than 5% of the home's purchase price, renting is likely cheaper; if more than 5%, buying may be better. The 5% represents unrecoverable homeownership costs: ~1% property tax, ~1% maintenance, ~3% opportunity cost of down payment. This provides quick guidance but doesn't account for home appreciation, tax deductions, or your timeline."
          }
        },
        {
          "@type": "Question",
          "name": "How many years until buying is better than renting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buying becomes better than renting after approximately 5-7 years in most markets. The break-even point occurs when cumulative home equity + appreciation + tax benefits exceed cumulative rent payments + opportunity cost of down payment. Break-even happens sooner if home appreciates faster, you get tax benefits, or rent increases aggressively."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 20/30/3 rule for buying a house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 20/30/3 rule is a conservative home buying guideline: put 20% down, keep housing costs under 30% of gross income, and buy a home priced at maximum 3× your annual household income. This rule is more conservative than lender maximums and leaves room for savings, emergencies, and lifestyle expenses."
          }
        },
        {
          "@type": "Question",
          "name": "Should I rent or buy in California in 2024?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In California 2024, renting often makes financial sense for 3-5 year horizons, but buying wins long-term (8+ years) if you can afford the entry costs. California challenges include high median home prices ($800,000+), requiring large down payments, but rents are also very high. Buy if staying 7+ years, can afford 20% down, and expect long-term appreciation."
          }
        },
        {
          "@type": "Question",
          "name": "How to calculate if buying or renting is better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare total costs over your expected timeline: Buying costs include down payment, closing costs, monthly mortgage, property taxes, insurance, HOA, maintenance, and opportunity cost. Renting costs include monthly rent, renter's insurance, and assumed annual rent increases. Buying benefits include equity buildup, home appreciation, and tax deductions."
          }
        },
        {
          "@type": "Question",
          "name": "Is the rent vs buy calculator accurate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rent vs buy calculators are accurate for financial comparisons if you input realistic assumptions, but they can't predict future market conditions or account for personal circumstances. Accuracy depends on your inputs, timeline assumptions, and whether you use realistic figures for local property taxes, maintenance costs, and appreciation rates."
          }
        }
      ]
    }
  };
}
