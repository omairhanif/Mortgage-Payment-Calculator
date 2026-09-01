export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Second Mortgage Calculator",
      "description": "Calculate monthly payments and total costs for a second mortgage or home equity loan. Understand rates, qualification requirements, and how much you can borrow against your home equity.",
      "url": `${baseUrl}/second-mortgage-calculator`,
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
            "name": "Second Mortgage Calculator",
            "item": `${baseUrl}/second-mortgage-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Second Mortgage Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate second mortgage payments and determine how much you can borrow against your home equity. Compare rates and understand qualification requirements."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much can I borrow on a 2nd mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most lenders allow you to borrow up to 80-85% of your home's current value minus your existing first mortgage balance. For example, if your home is worth $400,000 and you owe $250,000, you could borrow up to $70,000 (80% of $400,000 = $320,000 max total debt, minus $250,000 first mortgage)."
          }
        },
        {
          "@type": "Question",
          "name": "How do I qualify for a 2nd mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To qualify for a second mortgage, you need sufficient home equity (typically 15-20% after the new loan), a credit score of 620+, verifiable income supporting debt-to-income ratios below 43%, and documented ability to repay both mortgages. Lenders assess your first mortgage payment history and employment stability."
          }
        },
        {
          "@type": "Question",
          "name": "Is it hard to get a 2nd mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting a second mortgage is generally harder than a first mortgage because lenders take a subordinate position. This means stricter requirements: higher credit scores (620-680+ minimum), lower loan-to-value ratios (80% CLTV maximum), thorough income verification, and higher interest rates (often 1-3% above first mortgage rates)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 2 2 2 rule for mortgages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 2-2-2 rule suggests borrowers should have: 2 months of mortgage payments in savings as a reserve, a 2-year history of stable employment in the same field, and 2 years of good credit history with no major derogatory marks. Many lenders use variations of this rule, particularly for second mortgages."
          }
        },
        {
          "@type": "Question",
          "name": "How to get a second mortgage to buy another house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To use a second mortgage to buy another property, borrow against the equity in your current home and use those funds as a down payment. You'll need at least 20-25% equity in your existing home, strong credit (700+ recommended), and stable income sufficient to cover both properties."
          }
        },
        {
          "@type": "Question",
          "name": "What are second mortgage rates in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Second mortgage rates in Canada typically range from 6-12%, or 2-5 percentage points above prime first mortgage rates. Major banks offer rates around 6-8% for well-qualified borrowers, while private lenders charge higher rates (8-12%+) but offer more flexible approval criteria."
          }
        },
        {
          "@type": "Question",
          "name": "Can I make extra payments on a second mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most second mortgages allow extra payments, though terms vary by lender. Many permit annual prepayment privileges of 10-20% of the original principal without penalty. Adding extra payments helps you pay off the loan faster and save substantially on interest."
          }
        }
      ]
    }
  };
}
