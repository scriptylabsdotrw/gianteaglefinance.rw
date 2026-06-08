export type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; intro?: string; items: string[] }
  | { type: 'callout'; label: string; text: string }

export interface Article {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  author: string
  content: Block[]
}

export const articles: Article[] = [
  {
    slug: 'borrowing-responsibly',
    category: 'Guidance',
    title: 'Borrowing responsibly: how to choose the right loan',
    excerpt:
      'A practical look at matching the loan type and repayment term to your real needs and income — so your facility works for you, not against you.',
    date: 'May 2026',
    readTime: '4 min read',
    author: 'Giant Eagle Finance Team',
    image:
      'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'Borrowing money is a powerful financial tool — but only when used with intention and clarity. Before you apply for any loan, the most important question to answer is not "how much can I borrow?" but "what do I actually need, and can I comfortably repay it?"',
      },
      {
        type: 'heading',
        text: 'Start with your purpose, not the amount',
      },
      {
        type: 'paragraph',
        text: 'Every responsible borrowing decision begins with a clear purpose. Whether you are covering a medical emergency, funding your child\'s school fees, or investing in business growth, your loan should have a defined goal. Vague borrowing — taking money because it is available — almost always leads to financial strain.',
      },
      {
        type: 'list',
        intro: 'Before you submit any application, ask yourself:',
        items: [
          'What exactly will I use this money for?',
          'How much do I genuinely need — not the maximum I can access?',
          'How will I repay it given my current income and expenses?',
          'What happens to my repayment if my income reduces by 20%?',
          'Is this a productive investment (that generates return) or a consumptive expense?',
        ],
      },
      {
        type: 'heading',
        text: 'Matching the product to your needs',
      },
      {
        type: 'paragraph',
        text: 'Different loan products are designed for different purposes and timelines. A short-term emergency loan has a very different structure from a 36-month business expansion facility. Using a short-term product for a long-term need — or vice versa — creates misaligned repayments that put pressure on your cash flow.',
      },
      {
        type: 'callout',
        label: 'Rule of Thumb',
        text: 'Your total monthly debt repayments — across all loans — should not exceed 30% of your take-home income. If you are already above this, carefully consider whether adding another facility is the right move.',
      },
      {
        type: 'heading',
        text: 'Understanding the true cost of borrowing',
      },
      {
        type: 'paragraph',
        text: 'The interest rate advertised is only part of the story. Look at the total cost of credit — the full amount you will repay over the loan term, including all fees. In Rwanda, lenders are required to disclose this figure under BNR consumer-protection guidelines. Always compare the Total Cost of Credit (TCC), not just the monthly repayment amount.',
      },
      {
        type: 'heading',
        text: 'Build a repayment buffer',
      },
      {
        type: 'paragraph',
        text: 'Life is unpredictable. When planning your repayments, aim to borrow slightly less than you think you need, and make sure your monthly repayment is an amount you can sustain even if your income dips. A buffer gives you room to breathe — and protects your credit history if times get tight.',
      },
    ],
  },
  {
    slug: 'financing-sme-growth',
    category: 'Business',
    title: 'Financing growth for small and medium enterprises',
    excerpt:
      'How working capital and structured financing can help your business expand with confidence, manage cash flow, and seize new opportunities.',
    date: 'Apr 2026',
    readTime: '5 min read',
    author: 'Giant Eagle Finance Team',
    image:
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'Small and medium enterprises are the backbone of Rwanda\'s economy. Whether you run a retail shop in Kigali, a manufacturing unit in the Eastern Province, or a growing service business, access to the right financing at the right time can be the difference between stagnation and meaningful growth.',
      },
      {
        type: 'heading',
        text: "What kind of financing does your business need?",
      },
      {
        type: 'paragraph',
        text: "The most common mistake SME owners make is applying for the wrong type of loan. Working capital loans are designed for short-cycle needs — buying stock, covering payroll, or bridging a receivables gap. Business expansion loans are for longer-term investments: new equipment, additional premises, or market expansion. Mixing these up leads to cash-flow mismatches.",
      },
      {
        type: 'list',
        intro: 'Match your need to the right product:',
        items: [
          'Buying inventory or raw materials → Working Capital Loan (3–12 months)',
          'Purchasing equipment or machinery → Business Loan (12–36 months)',
          'Expanding to a new location → SME Financing (24–36 months)',
          'Covering payroll while awaiting payment → Short-term Loan (1–3 months)',
          'Bidding on a government or corporate contract → Bid Guarantee',
        ],
      },
      {
        type: 'heading',
        text: 'Prepare your business before you apply',
      },
      {
        type: 'paragraph',
        text: "Lenders assess your business on its ability to repay — which means your cash flow history matters more than your projected turnover. Clean, organised financial records dramatically improve your approval chances and may reduce your interest rate.",
      },
      {
        type: 'callout',
        label: 'Before You Apply',
        text: 'Prepare 12 months of bank statements, your most recent business registration certificate (RDB), and a simple cash flow projection for the next 12 months. The stronger your documentation, the faster your review.',
      },
      {
        type: 'heading',
        text: 'Managing growth without over-borrowing',
      },
      {
        type: 'paragraph',
        text: 'Rapid growth financed entirely by debt is fragile. The healthiest SMEs use a combination of retained earnings and strategic borrowing — taking on debt when it enables a clear, calculable return. Before borrowing for expansion, ask: "If this investment generates less than expected, can I still service this loan from existing revenue?"',
      },
      {
        type: 'paragraph',
        text: 'At Giant Eagle Finance, our business loan advisors work with you to structure a facility that fits your real cash-flow cycle — not just the maximum you qualify for.',
      },
    ],
  },
  {
    slug: 'understanding-repayment',
    category: 'Planning',
    title: 'Understanding your repayment schedule',
    excerpt:
      "What to look for in clear loan terms, how transparent repayment keeps you in control, and why knowing the numbers matters before you sign.",
    date: 'Mar 2026',
    readTime: '3 min read',
    author: 'Giant Eagle Finance Team',
    image:
      'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'A repayment schedule is more than a list of payment dates — it is a complete picture of the total cost of your loan, broken down month by month. Reading it correctly before you sign protects you from surprises and helps you plan your budget with confidence.',
      },
      {
        type: 'heading',
        text: 'Flat rate vs. declining balance',
      },
      {
        type: 'paragraph',
        text: "In Rwanda's lending market, interest is calculated one of two ways. A flat rate applies interest to the original principal throughout the loan term — so you pay the same interest amount each month regardless of how much you have already repaid. A declining balance rate applies interest only to the outstanding principal, meaning your interest cost reduces as you repay.",
      },
      {
        type: 'callout',
        label: 'Worked Example',
        text: 'On a RWF 5,000,000 loan at 12% flat over 12 months: Total interest = RWF 600,000. Monthly repayment ≈ RWF 466,667. The equivalent declining-balance rate would be approximately 21.5% — always compare on a consistent basis.',
      },
      {
        type: 'heading',
        text: 'Six things to check in your loan agreement',
      },
      {
        type: 'list',
        items: [
          'Annual Percentage Rate (APR) or the equivalent total interest figure',
          'Total Cost of Credit — the full amount you will repay over the term',
          'Monthly instalment amount and due dates',
          'Late payment penalty — the fee charged if a payment is missed',
          'Early repayment terms — whether you can pay off early and at what cost',
          'Insurance requirements — whether life or disability cover is mandatory',
        ],
      },
      {
        type: 'heading',
        text: 'Your rights as a borrower',
      },
      {
        type: 'paragraph',
        text: "All licensed lenders in Rwanda are supervised by the National Bank of Rwanda (BNR) and are required to fully disclose the cost of credit before a loan is issued. If your lender cannot or will not provide a complete repayment schedule, that is a red flag. At Giant Eagle Finance, every loan comes with a clear, signed schedule — no hidden figures.",
      },
    ],
  },
  {
    slug: 'salary-advances-guide',
    category: 'Personal Finance',
    title: 'Salary advances: when to use them and when to wait',
    excerpt:
      'Salary loans are a powerful tool for bridging short gaps — but timing and planning make all the difference between financial relief and a debt cycle.',
    date: 'Feb 2026',
    readTime: '4 min read',
    author: 'Giant Eagle Finance Team',
    image:
      'https://images.pexels.com/photos/5561923/pexels-photo-5561923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: "A salary loan gives employed individuals quick access to funds against their next paycheck. It is one of the fastest financial tools available — and one of the most misused. Used correctly, it solves a real short-term cash-flow gap. Used carelessly, it can trap you in a cycle of borrowing before every payday.",
      },
      {
        type: 'heading',
        text: 'When a salary advance genuinely makes sense',
      },
      {
        type: 'paragraph',
        text: "The ideal salary advance is used for a one-time, time-sensitive need that falls between paydays — not as a supplement to a budget that simply doesn't balance.",
      },
      {
        type: 'list',
        intro: 'Appropriate situations include:',
        items: [
          'An unexpected medical expense that cannot wait until month-end',
          'Essential utility or rent payment to avoid a late penalty larger than the loan cost',
          'School fees due before your salary arrives',
          'A non-recurring expense with a clear, specific amount',
        ],
      },
      {
        type: 'callout',
        label: 'Warning',
        text: "Avoid using a salary advance for lifestyle spending, entertainment, or to repay another loan. If you find yourself taking a salary advance every month, that signals a budgeting problem — not a financing solution.",
      },
      {
        type: 'heading',
        text: 'How salary loans differ from personal loans',
      },
      {
        type: 'paragraph',
        text: "Salary advances are typically shorter in term (1–3 months), easier to qualify for with an employment confirmation letter, and repaid in one or two instalments directly from your salary. Personal loans have longer terms (up to 36 months), higher maximum amounts, and are assessed on your full financial profile. If your need is more than a few months' worth, a personal loan is usually more appropriate.",
      },
      {
        type: 'heading',
        text: 'Breaking the cycle',
      },
      {
        type: 'paragraph',
        text: 'If you have been using salary advances repeatedly, the most important step is to review your monthly budget. Track every expense, identify what is genuinely non-negotiable, and look for areas where spending can be reduced. Our loan advisors can also help you consolidate recurring short-term debt into a single, manageable personal loan.',
      },
    ],
  },
  {
    slug: 'agricultural-loans-rwanda',
    category: 'Agriculture',
    title: "Agricultural loans: funding Rwanda's farming season",
    excerpt:
      'A guide for farmers and agri-entrepreneurs on accessing affordable seasonal financing to buy inputs, equipment, and grow with confidence.',
    date: 'Jan 2026',
    readTime: '6 min read',
    author: 'Giant Eagle Finance Team',
    image:
      'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: "Agriculture is central to Rwanda's economy, supporting millions of households and contributing significantly to GDP. Yet access to affordable seasonal financing remains one of the biggest barriers for smallholder farmers and agri-entrepreneurs. The right loan, timed correctly, can double the productivity of a single growing season.",
      },
      {
        type: 'heading',
        text: "Rwanda's agricultural calendar",
      },
      {
        type: 'callout',
        label: 'Growing Seasons',
        text: 'Rwanda has two main agricultural seasons: Season A (September–January) and Season B (February–June). A shorter Season C exists in some irrigated areas (July–August). Structure your loan disbursement to coincide with the start of your planting season — and your repayment with your harvest.',
      },
      {
        type: 'heading',
        text: 'What agricultural loans can finance',
      },
      {
        type: 'list',
        intro: 'Our agricultural and livestock loans can be used for:',
        items: [
          'Seeds, fertilizers, and crop inputs for the planting season',
          'Irrigation equipment, pumps, and water storage systems',
          'Livestock purchase — cattle, goats, poultry, or pigs',
          'Veterinary costs and animal health management',
          'Harvest storage equipment and post-harvest handling',
          'Land preparation, ploughing, and terracing',
          'Agri-processing equipment for value-added products',
        ],
      },
      {
        type: 'heading',
        text: 'Seasonal repayment structures',
      },
      {
        type: 'paragraph',
        text: "Unlike standard monthly-repayment loans, agricultural facilities at Giant Eagle Finance can be structured with seasonal repayment terms — aligning your repayment schedule to your harvest income rather than a fixed monthly calendar. This reduces cash-flow pressure during the growing season when your costs are highest and income is lowest.",
      },
      {
        type: 'heading',
        text: 'Preparing your application',
      },
      {
        type: 'paragraph',
        text: "To apply for an agricultural loan, you will typically need proof of land ownership or usage rights, a description of what you intend to produce or purchase, and an estimate of expected seasonal income. Our team can guide you through the documentation process in person at our Kigali office.",
      },
    ],
  },
  {
    slug: 'land-property-financing',
    category: 'Property',
    title: 'Land and property financing: what you need to know',
    excerpt:
      'From land purchase to full property acquisition, understand the key steps, title requirements, and financing options available in Rwanda.',
    date: 'Dec 2025',
    readTime: '5 min read',
    author: 'Giant Eagle Finance Team',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: "Rwanda has built one of Africa's most advanced land administration systems, with a digital registry that makes property transactions more transparent and secure than ever before. This creates a strong foundation for property financing — but it also means clear rules that both buyers and lenders must follow.",
      },
      {
        type: 'heading',
        text: 'Why land title is non-negotiable',
      },
      {
        type: 'paragraph',
        text: "In Rwanda, all land is registered under the Rwanda Land Management and Use Authority (RLMUA). A titre foncier (land title certificate) is the only legal proof of land ownership. No lender can accept untitled land as collateral, and no property purchase should proceed without confirming that the seller holds a clean, unencumbered title.",
      },
      {
        type: 'callout',
        label: 'Critical Check',
        text: "Before signing any purchase agreement, verify the title at the RLMUA district office or online registry. Confirm there are no existing mortgages, court orders, or encumbrances on the property. Our advisory team can help you conduct this check.",
      },
      {
        type: 'heading',
        text: 'Documents required for a property loan',
      },
      {
        type: 'list',
        items: [
          'Certified copy of the land title certificate (titre foncier)',
          'Notarised sale agreement between buyer and seller',
          'Property valuation report from a recognised valuer',
          'National ID of both buyer and seller',
          'Proof of income (payslips, business accounts, or tax returns)',
        ],
      },
      {
        type: 'heading',
        text: 'How property financing works at Giant Eagle Finance',
      },
      {
        type: 'paragraph',
        text: "Our property purchase loans allow you to acquire residential or commercial land and property while spreading the cost over an agreed term. Once your application is approved, funds are disbursed directly to the seller or escrow account — never to you as an intermediary. This protects both parties and ensures the transaction is clean.",
      },
      {
        type: 'heading',
        text: 'Protecting your investment',
      },
      {
        type: 'paragraph',
        text: "Once you have purchased your property, protect it with building insurance and ensure the title is transferred into your name at the RLMUA. If your property loan requires a mortgage, the lender will register a charge against the title — this is standard practice and is released once the loan is fully repaid. Keep all documentation safely stored.",
      },
    ],
  },
]

export const categoryColours: Record<string, string> = {
  Guidance: 'bg-gold text-white',
  Business: 'bg-ink-black text-white',
  Planning: 'bg-gold/80 text-white',
  'Personal Finance': 'bg-ink-charcoal text-white',
  Agriculture: 'bg-[#2d6a2d] text-white',
  Property: 'bg-[#1a4a7a] text-white',
}
