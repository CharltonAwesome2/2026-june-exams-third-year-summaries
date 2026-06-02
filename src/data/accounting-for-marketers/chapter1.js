// chapter1.js

export const chapter1 = {
  id: "acc-ch-1",
  title: "Chapters 1 & 2",
  subtitle: "Accounting Fundamentals & Business Forms",
  badge: "Foundation",

  contextAndPrerequisites: [
    "No prerequisites — this is introductory accounting for non-accountants",
    "Assumes zero prior accounting knowledge",
    "Connects to: Any business course requiring financial literacy (marketing, management, entrepreneurship)",
  ],

  realWorldAnalogy:
    "Accounting is like a fitness tracker for your business. Just as a tracker records steps, calories, and heart rate, accounting records transactions, expenses, and profits. Both give you data to make better decisions — you can't improve what you don't measure.",

  commonMisconceptions: [
    "MISCONCEPTION: Accounting is just about tax → TRUTH: Tax is one small part; accounting is about decision-making for owners, managers, investors, and lenders",
    "MISCONCEPTION: Profit equals cash in the bank → TRUTH: Profit is an accounting concept; cash flow is separate (you can be profitable but cash-poor)",
    "MISCONCEPTION: All businesses must register with CIPC → TRUTH: Sole traders and partnerships don't need external registration",
    "MISCONCEPTION: Close corporations still exist → TRUTH: No new CCs can be registered after 2008 (existing ones continue)",
  ],

  examTips: [
    "Exam favorites: List internal vs external users (6+ of each) — memorize the full sets",
    "Be ready to compare the 4 business forms in a table (owners called? liability type? taxation? continuity?)",
    "Know the 4 qualitative characteristics: Comparability, Reliability, Understandability, Relevance (CRURe)",
    "Remember: Public vs Private company differences — transferability, AGM requirements, director minimums",
    "Will appear: 'Identify whether this is an asset, liability, or owner's equity' classification questions",
  ],

  keyTakeaway:
    "Accounting is the language of business. Marketers who understand assets vs expenses, profit vs cash flow, and business structures make better budget decisions and communicate more effectively with finance teams.",

  furtherConnections: [
    "Links to marketing: Customer profitability analysis, campaign ROI calculation, budget justification",
    "Links to management: Break-even analysis, cost-volume-profit relationships",
    "Links to entrepreneurship: Choosing the right business structure affects liability, taxes, and fund raising",
  ],

  objectives: [
    "Define the purpose of accounting",
    "Identify the main users of accounting information (internal and external)",
    "Explain the difference between financial accounting and cost/management accounting",
    "Understand the four basic business forms in South Africa",
    "Recognize types of business activity (service, manufacturer, wholesaler, retailer)",
    "Apply the accounting equation: Assets = Liabilities + Owner's Equity",
  ],

  keyConcepts: [
    "Accounting is a system of gathering, analyzing, recording, reporting, and interpreting financial information",
    "Internal users: Owners, managers, employees and their representatives",
    "External users: Customers, competitors, lenders, government, suppliers, investment analysts",
    "Four qualitative characteristics: Comparability, Understandability, Reliability, Relevance",
    "Four business forms: Sole trader, Partnership, Close Corporation (CC), Company (private/public/non-profit)",
    "Accounting classifications: Assets (current/non-current), Liabilities (current/non-current), Owner's equity",
    "Net profit = Income - Expenses",
    "Wealth (net worth) = Possessions (Assets) - Debts (Liabilities)",
  ],

  additionalKeyPoints: [
    "Financial Accounting vs Management Accounting: Financial focuses on external reporting (standardized, historical); Management focuses on internal decisions (flexible, forward-looking)",
    "Business Activity Types: Service (sell expertise), Manufacturers (make products), Wholesalers (sell to businesses), Retailers (sell to consumers)",
    "Considerations Before Starting a Business: Type of activity, entity form, location, capital requirements",
    "Qualitative Characteristics Explained:",
    "  - Comparability: Can you compare this year to last year? Can you compare Company A to Company B?",
    "  - Reliability: Information is verifiable, free from bias and material error",
    "  - Understandability: Presented clearly for users with reasonable business knowledge",
    "  - Relevance: Makes a difference in decision-making (has predictive or confirmatory value)",
    "Public vs Private Companies Key Differences: Private shares restricted, no AGM required, 10 days' notice for meetings, fewer disclosure requirements, no CIPC filing; Public has opposite on all counts",
  ],

  content:
    "Accounting is the language of business. It provides the financial information needed to make decisions about resource allocation, evaluate performance, and plan for the future. For marketers, understanding accounting means better budget requests, more credible ROI calculations, and stronger communication with finance departments.",

  comparisonTable: {
    title: "South African Business Forms",
    subtitle: "Comparison of Sole Trader, Partnership, CC, and Company",
    badge: "Chapters 1 & 2",
    headers: ["Feature", "Sole Trader", "Partnership", "Close Corporation (CC)", "Company"],
    rows: [
      ["Owners called", "Owner", "Partners", "Members", "Shareholders"],
      ["Number of owners", "1 owner", "2-20 partners", "1-10 members", "1 or more persons"],
      [
        "Legal requirements",
        "None",
        "Voluntary agreement",
        "Founding statement (pre-2008)",
        "MOI (Memorandum of Incorporation)",
      ],
      [
        "Type of liability",
        "Unlimited (personal liability)",
        "Unlimited (joint and several)",
        "Limited liability",
        "Limited liability",
      ],
      [
        "Registration required",
        "Does not have to register",
        "Does not have to register",
        "No further registration (pre-2008 only)",
        "Yes — CIPC",
      ],
      [
        "Continuity (owner dies/retires)",
        "Entity ceases to exist",
        "Partnership terminated",
        "Perpetual continuation",
        "Perpetual continuation",
      ],
      [
        "Transfer of ownership",
        "Owner can transfer/sell anytime",
        "Complicated unless in agreement",
        "Transfer requires all members' consent",
        "Private: restricted; Public: free transfer",
      ],
      [
        "How profits are taxed",
        "Owner's personal tax",
        "Partners' personal tax",
        "Company tax + STC on dividends",
        "Company tax + STC on dividends",
      ],
    ],
  },

  exercises: [
    {
      q: "List 5 internal users and 5 external users of accounting information. For each, explain what information they need and why.",
      a: [
        "Internal - Owners: Need net profit to assess return on investment",
        "Internal - Managers: Need departmental costs to control budgets",
        "Internal - Employees: Need company profitability to negotiate wages",
        "External - Lenders: Need debt ratios to assess loan repayment risk",
        "External - Government: Need taxable income to calculate tax owed",
        "External - Suppliers: Need payment history to set credit terms",
        "External - Investment analysts: Need growth trends to recommend buying/selling shares",
      ],
    },
    {
      q: "You have R50,000 in a business bank account, owe R15,000 to a supplier, and own equipment worth R30,000. Calculate your net worth (owner's equity) using the accounting equation.",
      a: [
        "Assets: R50,000 (cash) + R30,000 (equipment) = R80,000 total assets",
        "Liabilities: R15,000 (creditor)",
        "Owner's Equity = Assets - Liabilities = R80,000 - R15,000 = R65,000",
        "Verification: Assets (R80,000) = Liabilities (R15,000) + Owner's Equity (R65,000)",
      ],
    },
    {
      q: "A marketing consultant is starting a business. Compare sole trader vs private company across 5 criteria and recommend which is better. Justify your answer.",
      a: [
        "Liability: Sole trader has unlimited risk (loses personal assets); Company has limited liability — RECOMMEND COMPANY if client has personal assets to protect",
        "Taxation: Sole trader taxed once personally; Company subject to double taxation — RECOMMEND SOLE TRADER for lower tax if profits are low",
        "Startup complexity: Sole trader has zero registration; Company requires MOI and CIPC filing — RECOMMEND SOLE TRADER for quick start",
        "Credibility: Company appears more established to corporate clients — RECOMMEND COMPANY for B2B marketing consulting",
        "Fundraising: Company can issue shares; Sole trader limited to personal savings/loans — RECOMMEND COMPANY if growth capital needed",
      ],
    },
    {
      q: "Classify each as an asset, liability, owner's equity, income, or expense: (a) Bank loan, (b) Office furniture, (c) Rent paid, (d) Fees earned from clients, (e) Owner's initial investment, (f) Money owed to a supplier.",
      a: [
        "(a) Bank loan → Liability (non-current, if >1 year)",
        "(b) Office furniture → Asset (non-current)",
        "(c) Rent paid → Expense",
        "(d) Fees earned → Income (revenue)",
        "(e) Owner's investment → Owner's equity (capital contribution)",
        "(f) Money owed to supplier → Liability (current liability / accounts payable)",
      ],
    },
    {
      q: "Explain the difference between a private company (Pty) Ltd and a public company (Ltd) regarding: share transferability, AGM requirements, director minimums, and financial statement disclosure.",
      a: [
        "Share transferability: Private — restricted, cannot offer to public; Public — free and unlimited transfer",
        "AGM requirement: Private — not compelled to hold; Public — required by law",
        "Director minimums: Private — at least 1 director; Public — minimum 3 directors",
        "Financial disclosure: Private — fewer requirements, no CIPC filing; Public — Chapter 3 transparency rules, must lodge with CIPC",
        "Notice period for meetings: Private — 10 business days; Public — 15 business days",
      ],
    },
  ],
};
