export function getStructuredData() {
  const baseUrl = 'https://mortgage-payment-calculator.com';
  
  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Balloon Mortgage Calculator",
      "description": "Calculate payments and balloon amounts for short-term mortgages where you make regular payments for a fixed period, then pay off the remaining balance in one large final payment.",
      "url": `${baseUrl}/balloon-mortgage-calculator`,
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
            "name": "Balloon Mortgage Calculator",
            "item": `${baseUrl}/balloon-mortgage-calculator`
          }
        ]
      }
    },
    
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Balloon Mortgage Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate monthly payments and balloon payment amounts for balloon mortgages. Understand how balloon mortgages work and compare costs versus traditional fully-amortizing mortgages."
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a balloon mortgage payment example?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A balloon mortgage payment example: you borrow $300,000 at 6.5% with a 7-year balloon and 30-year amortization. Your monthly payment is $1,896 (principal + interest), same as a traditional 30-year mortgage. After making 84 monthly payments ($159,264 total), you still owe approximately $275,000 as the balloon payment in year 7. At that point, you must: (1) refinance the $275,000 at current rates; (2) sell the property; or (3) pay the full balloon amount in cash."
          }
        },
        {
          "@type": "Question",
          "name": "How to calculate balloon payment on a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate a balloon payment: (1) Determine monthly payment using full amortization period (e.g., 30 years); (2) Calculate how many payments you'll make during the balloon term (e.g., 5 years = 60 payments); (3) Compute remaining principal after those payments using an amortization schedule. Example: $250,000 at 6% over 30 years with 5-year balloon: monthly payment = $1,499; after 60 payments, balloon = ~$233,139."
          }
        },
        {
          "@type": "Question",
          "name": "Are balloon mortgages a good idea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Balloon mortgages are good for specific situations but risky for traditional homebuyers. Good if: you're absolutely selling within balloon period (job relocation, planned upgrade), you're a real estate investor flipping property, you expect large cash inflow (inheritance, business sale, stock vesting), or rates are high and you're confident you can refinance at lower rates soon. Risky if: you plan to stay long-term, can't afford refinancing risk, have uncertain income/credit, or lack backup refinancing options."
          }
        },
        {
          "@type": "Question",
          "name": "What happens when balloon payment is due?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When your balloon payment comes due, you have three options: (1) Refinance into a new mortgage at current market rates—most common but requires qualifying again with good credit/income; (2) Sell the property and pay off the loan from proceeds—works if property value exceeds loan balance; (3) Pay the balloon in cash—rare unless you've saved or received large windfall. If you can't do any of these, the lender may foreclose."
          }
        },
        {
          "@type": "Question",
          "name": "Can you pay off a balloon mortgage early?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can pay off a balloon mortgage early, but check your loan documents for prepayment penalties. Most residential balloon mortgages allow early payoff without penalties, but some charge 1-3% of the remaining balance if you pay off within the first 3-5 years. Benefits of early payoff: avoid refinancing risk, save on interest costs, eliminate balloon payment stress, own home free and clear."
          }
        },
        {
          "@type": "Question",
          "name": "Balloon mortgage vs traditional mortgage—which is better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional mortgages are better for 90% of homebuyers due to predictability and full amortization. Traditional (30-year fixed) advantages: fully paid off at term end (no balloon shock), predictable payments for 30 years, no refinancing risk, easier to qualify for, better for long-term homeowners. Balloon mortgage advantages: potentially lower initial rates (0.25-0.75% less), lower monthly payments during balloon period, good for short-term ownership (5-7 years), suits real estate investors/flippers."
          }
        }
      ]
    }
  };
}
