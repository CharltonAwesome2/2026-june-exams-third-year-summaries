// raising-capital.js

export const raisingCapital = {
  id: "entrepreneurship-raising-capital",
  title: "Foundations of Raising Capital",
  subtitle: "Debt, Equity, Grants, Accelerators, Angels, Venture Capital, and Crowdfunding",
  badge: "Funding",
  
  contextAndPrerequisites: [
    "Recommended: Complete Section 4 (Understanding Business) for context on business operations and finance basics",
    "Helpful to have a business idea or early-stage company to apply the concepts"
  ],
  
  realWorldAnalogy: "Raising capital is like choosing a vehicle for a road trip. Bootstrapping is walking — slow but total control. Debt (loans) is taking a bus — you pay for the ride but keep your destination. Equity (investors) is hitching a ride — you get there faster but share the journey and decisions. Grants are catching a free shuttle — rare but amazing. Choose the vehicle that matches your destination and timeline.",
  
  commonMisconceptions: [
    "Venture capital is how most companies start → TRUTH: Only ~5,000 companies globally raise early-stage VC annually vs 400,000-600,000 new businesses started each year in the US alone",
    "You need to raise capital to be successful → TRUTH: Many successful companies bootstrap (use their own resources) and never take outside money",
    "All investors are the same → TRUTH: Angels (individuals), VCs (firms), corporate VC, crowdfunding, and loans all have different expectations, timelines, and strings attached",
    "A great idea is enough to get investment → TRUTH: Investors need to see traction, market size, and a path to 5-10x return within 7-10 years",
    "Friends and family funding is simple and low-risk → TRUTH: It can damage relationships if not properly documented and if expectations aren't clear"
  ],
  
  examTips: [
    "5 Types of Capital: Debt (loans), Equity (selling ownership), Grants (non-repayable), Accelerators (programs + investment), Crowdfunding (public)",
    "VC Math: A $300M fund needs to return $900M (3x). With 10 investments, 1-2 must return a billion dollars each to make the fund work.",
    "Investment Stages: Pre-seed (friends/family, thousands) → Seed (angels/accelerators, $10k-$2M) → Series A (traction proven, $2-15M) → Series B (growth phase, $7-10M) → Series C+ (scaling)",
    "Valuation Formula: Pre-money valuation + Investment = Post-money valuation. Investor ownership = Investment ÷ Post-money valuation.",
    "Term Sheet Two Concerns: Economics (return) and Control (decision-making power). Key terms: liquidation preference, board seats, protective provisions.",
    "Accredited Investor Definition: $200k+ annual income or $1M+ net worth (required for equity investments from non-crowdfunding sources)"
  ],
  
  keyTakeaway: "Only raise capital if your business model requires it. Most companies don't need VC. Match your funding source to your business type: loans for predictable cash flows, angels for early validation, VC for hyper-growth tech, grants for R&D, crowdfunding for consumer products. The best funding is often the money you don't have to repay or give up control for — but that's also the hardest to get.",
  
  furtherConnections: [
    "Links to Section 4: Understanding debt vs equity financing from the finance basics section",
    "Links to Section 6: Finance Essentials covers managing money once you have it",
    "Links to Section 3: Idea validation helps prove traction before seeking investment"
  ],
  
  objectives: [
    "Distinguish between debt, equity, grants, and alternative funding sources",
    "Determine whether raising capital is right for your specific business",
    "Understand why investors invest and what returns they expect (ROI, 5-10x returns, 7-10 year timelines)",
    "Evaluate bootstrapping vs outside funding trade-offs",
    "Identify appropriate funding stages: pre-seed, seed, Series A, Series B, Series C+",
    "Prepare key materials: elevator pitch, executive summary, pitch deck, prototype",
    "Understand term sheet economics (valuation, liquidation preference, options, vesting) and control (board, protective provisions)",
    "Explore alternative funding: corporate VC, revenue-share agreements, crowdfunding"
  ],
  
  keyConcepts: [
    "Why Investors Invest: They're running a business too. They trade money for ownership, expecting a return (ROI). If they buy 20% of a $1M company that grows to $10M, their stake becomes $2M — a 10x return.",
    "Bootstrapping Trade-offs: PROS — maintain control, full focus on business (not fundraising). CONS — personal financial risk (savings, credit cards, home collateral), slower growth without external capital.",
    "Grants & Non-Dilutive Funding: Money that doesn't require repayment or giving up ownership. Examples: SBIR grants (up to $1M for tech R&D), pitch competitions ($100k+), local economic development grants. Requires proposals and persistence.",
    "Friends & Family Funding: Three forms: Gift (no repayment — rare), Loan (repayment with interest regardless of company performance), Equity investment (requires accredited investor status — $200k income or $1M net worth). CAUTION: Get everything in writing with a lawyer.",
    "Bank & SBA Loans: Commercial loans require credit score, cash flows, and collateral (assets the bank can seize if you default). SBA loans are easier to qualify for because the SBA guarantees part of the loan to the bank. No ownership given up — just debt.",
    "Accelerator Programs: 3-6 month programs offering education, mentorship, workspace, and $20k-$200k investment for 2-10% ownership. Y Combinator is most famous ($150k for 7%). Demo day events connect startups to follow-on investors.",
    "Angel Investors: High-net-worth individuals investing their own money ($10k-$100k+). Often former entrepreneurs. 'Smart money' brings experience and network; 'dumb money' brings only cash. Angels can write checks quickly but are responsible only to themselves.",
    "Venture Capital Math: A VC fund with $300M from limited partners (LPs) needs to return $900M in 10 years. With 10 investments, 1-2 companies must return over $1B each to make the fund work. VCs need unicorns ($1B+ valuations) — not suitable for lifestyle businesses.",
    "Investment Stages: Pre-seed (friends/family, $0-$50k) → Seed (angels/accelerators, $10k-$2M) → Series A (proven traction, $2-15M) → Series B (growth/hiring, $7-10M) → Series C+ (scaling, $10M+). Only ~48% of seed companies reach Series A.",
    "Valuation: Pre-money = value before investment. Post-money = value after investment. If pre-money is $4M and you raise $1M, post-money = $5M. Investor gets $1M/$5M = 20% ownership. Valuation factors: stage, founder experience, competition, market size, economy.",
    "Pitch Deck Essentials (10-20 slides): Problem → Solution → Timing (why now) → Traction (users/revenue) → How it works → Business model → Competition → Team → Timeline & Ask. Show investors how $50k today becomes $500k someday.",
    "Term Sheet Economics: Valuation (price per share), Liquidation preference (who gets paid first in a sale), Employee option pool (ownership for employees — comes from founder or investor equity), Vesting (ownership earned over time, typically 4 years).",
    "Term Sheet Control: Board of directors (can fire CEO — typically includes investor seats), Protective provisions (investor veto on major actions: creating stock, borrowing, selling the company), Conversion (investor can convert preferred to common stock for greater upside).",
    "Alternative Funding: Corporate VC (strategic investment from corporations like Google Ventures), Revenue-share agreements (pay back investment + 6-12% fee, no equity), Shared earnings (pay 2-5x return once founders pay themselves salaries, no equity).",
    "Crowdfunding Types: Product/rewards-based (Kickstarter — pre-sale of product, no equity), Equity crowdfunding (Republic, Wefunder — sell ownership to non-accredited investors, full control over terms, but many small investors to manage).",
    "Finding Investors: Search by industry, geography, company type, and stage using Crunchbase, AngelList, and Visible. Get warm introductions through your network — cold emails rarely work. Build relationships over months (invest in lines, not dots)."
  ],
  
  content: "Raising capital is not a requirement — most successful businesses never take outside investment. Only about 5,000 companies globally raise early-stage venture capital annually, compared to 400,000-600,000 new businesses started each year in the US alone. Before seeking funding, ask: Does my business require significant upfront capital (manufacturing, pharma, insurance)? Do I need to capture market share extremely quickly (Uber/Lyft)? If not, bootstrapping (using your own resources and revenue) may be better — you maintain control and focus. If you do raise capital, match the source to your business: loans for predictable cash flows, angel investors for early validation, venture capital only for hyper-growth tech companies that can return 5-10x within 7-10 years, grants for R&D, and crowdfunding for consumer products. Prepare a compelling pitch deck (10-20 slides) covering problem, solution, traction, business model, team, and ask. Understand term sheet economics (valuation, liquidation preference) and control terms (board seats, protective provisions). Remember: investors are running their own business — they need returns, not just great ideas.",
  
  additionalKeyPoints: [
    "The Odds: Only ~5,000 companies raised early-stage funding globally in 2018. $100B+ invested annually, but concentrated in very few companies. Don't let headlines fool you — VC is the exception, not the rule.",
    "Investor Return Expectations: Most venture investors want 5-10x return within 7-10 years. Return comes from acquisition (exit) or IPO. If you aren't comfortable promising that trajectory, don't take VC money.",
    "Bootstrapping Popularity: More entrepreneurs are bootstrapping because it maintains control and focus. Downside: slower growth and personal financial risk. Many successful companies bootstrapped for years before taking any funding.",
    "SBIR Grants: Small Business Innovation Research program awards up to $1M for technology R&D with commercialization potential. Non-dilutive (no ownership given up). Competitive but worth pursuing for deep tech.",
    "Pitch Competitions: TechCrunch Disrupt awards $100k to winner. Local competitions award hundreds to thousands. Tixers won $1,000 from a wiffle ball tournament — think creatively about where money is available.",
    "Friends & Family Legal Warning: Securities law views selling equity as offering a security. Private company securities can only be sold to accredited investors ($200k income or $1M net worth). Don't skip legal formalities — it can void the investment or create liability.",
    "Accelerator Success Story: Tixers joined UpTech (second class ever, no track record). Received $50k, mentorship, network. Graduated and raised $250k seed round. You don't need Y Combinator — hundreds of accelerators exist.",
    "Angel Investor Nuances: 'Smart money' brings expertise and connections. 'Dumb money' brings only cash. Smart money is better, but dumb money is better than no money. However, difficult angels can scare off future investors — choose carefully.",
    "VC Math Example: $300M fund needs $900M return. If fund makes 10 investments, 1-2 must return ~$450M each (or one returns $900M). If VC owns 20% of a company, that company must sell for $2.25B to return $450M. That's why VCs chase unicorns.",
    "Series A Requirements: Need proven market demand, business model showing promise, real customer traction. Not just a great idea — a functioning business. 48% of seed companies make it to Series A.",
    "Valuation Factors You Control: Stage of company (investors have ranges for seed vs Series A), Founder experience (more experience = higher valuation), Funding competition (multiple investors bidding = higher valuation), Market size (larger TAM = higher valuation).",
    "Valuation Factors You Don't Control: Overall economy. When market is down, valuations are down. When market is up, valuations are up. Just be aware.",
    "Elevator Pitch Formula: One to two sentences explaining your business. Tixers example: 'Tixers is a digital ticket marketplace. With Tixers, you can exchange tickets you're unable to use now for tickets you can use in the future.'",
    "Executive Summary: 1-3 page PDF covering problem, solution, why better than alternatives, team qualifications, high-level financials. Often the first impression that opens the door to a meeting.",
    "Pitch Deck Must-Haves: Problem (specific, quantified), Solution (clear), Timing (why now — Uber needed smartphones), Traction (users, revenue), How it works (high-level), Business model (how money is made), Competition (be honest — status quo is a competitor), Team (relevant background), Timeline & Ask (6,12,18 month milestones + investment needed).",
    "Monthly Investor Updates: Send to investors who have consented. Include traction, key metrics, challenges. Be honest — relationships built on trust. Once a month, not constant. Mark Suster's 'Invest in lines, not dots' — investors invest in trend lines, not single data points.",
    "Liquidation Event: An acquisition (exit) or IPO that converts illiquid private company ownership into cash or public stock. This is how investors get their return.",
    "Term Sheet Key Terms: Liquidation preference (investors get paid first in a sale — protects downside), Option pool (employee ownership — comes from founder/investor equity), Vesting (4-year schedule, 1-year cliff — keeps founders/employees committed), Board seats (investors get seats, can fire CEO), Protective provisions (investor veto on major actions).",
    "Corporate Venture Capital: Corporations investing in startups that complement or protect their core business. Can lead to acquisition. Examples: Google Ventures, Intel Capital.",
    "Revenue-Share Alternative: ClearBank offers non-dilutive investment repaid with 6-12% fee. No equity given up. Good for profitable businesses that don't need hyper-growth.",
    "Equity Crowdfunding: Since 2012 JOBS Act, non-accredited investors can invest in private companies. Platforms: Republic, Wefunder, StartEngine. Founder sets all terms, no board seats for crowd. Trade-off: many small investors to manage and update."
  ],
  
  exercises: [
    {
      q: "Calculate investor ownership. Your company has a pre-money valuation of $2 million. An investor offers $500,000. What is your post-money valuation? What percentage of the company does the investor own? What percentage do you retain?",
      a: [
        "Post-money valuation = Pre-money + Investment = $2,000,000 + $500,000 = $2,500,000",
        "Investor ownership = Investment ÷ Post-money = $500,000 ÷ $2,500,000 = 0.20 = 20%",
        "Founder retained ownership = 100% - 20% = 80%",
        "Alternative scenario: If investor insists on $2M post-money valuation (including their investment), then pre-money = $1.5M, investor gets $500,000 ÷ $2,000,000 = 25% ownership"
      ]
    },
    {
      q: "You're starting a business. Match each business type to the most appropriate funding source: (a) Restaurant, (b) Biotech company needing $10M for clinical trials, (c) Social media app aiming for 100M users, (d) Software tool you can build on nights/weekends, (e) Consumer hardware product.",
      a: [
        "(a) Restaurant → Bank loan (SBA loan) or personal savings. Predictable cash flows make debt appropriate. Not VC-suitable (not hyper-growth).",
        "(b) Biotech clinical trials → Venture capital or grants (SBIR). Requires significant upfront capital with no revenue for years. VC math works if drug can be billion-dollar blockbuster.",
        "(c) Social media app → Venture capital. Needs hyper-growth to capture network effects. Losses upfront, massive scale required. Classic VC candidate.",
        "(d) Software tool built nights/weekends → Bootstrapping. No upfront capital needed. Build MVP, get customers, reinvest revenue. Raise later if needed.",
        "(e) Consumer hardware → Product crowdfunding (Kickstarter). Perfect for pre-selling units, validating demand, and funding production run simultaneously."
      ]
    },
    {
      q: "VC Fund Math Problem: A venture capital firm has a $50 million fund. They need to return 3x to their limited partners ($150 million). They plan to make 20 investments. Assuming 2 investments will generate all the returns, how much must each of those 2 companies return to the fund? If the VC owns 20% of each company, what must each company be worth at exit?",
      a: [
        "Total needed return: $50M × 3 = $150M",
        "If 2 companies generate all returns: $150M ÷ 2 = $75M per company to the fund",
        "If VC owns 20% of each company: Company exit value = $75M ÷ 0.20 = $375M per company",
        "Interpretation: Even with a smaller $50M fund, each successful company must exit for $375M to make the fund work. This is why VC isn't for lifestyle businesses.",
        "Compare to $300M fund example: needed $900M return, 2 companies at 20% ownership = $2.25B each. Larger funds need unicorns ($1B+)."
      ]
    },
    {
      q: "You're preparing a pitch deck. List the 10 essential slides in order, with one sentence describing what each slide should communicate.",
      a: [
        "1. Problem — What specific problem exists, who experiences it, and how many people/companies have it?",
        "2. Solution — How does your company solve this problem clearly and concisely?",
        "3. Timing/Why Now — What technological, social, or regulatory changes make this the right moment?",
        "4. Traction — What are your user numbers, revenue, or key metrics proving market demand?",
        "5. How It Works — High-level explanation of your technology or process (not overly technical).",
        "6. Business Model — How will this company generate revenue and profit?",
        "7. Competition — Who else solves this problem (including doing nothing/status quo)?",
        "8. Team — Why are you and your team uniquely qualified to build this company?",
        "9. Timeline — What are the major milestones for the next 6, 12, and 18 months?",
        "10. Ask — How much investment do you need, what will you spend it on, and what valuation are you seeking?"
      ]
    },
    {
      q: "You're considering taking $100,000 from an angel investor. Evaluate 'smart money' vs 'dumb money.' What questions would you ask to determine if this angel brings value beyond cash? When would you accept 'dumb money' anyway?",
      a: [
        "Questions to ask angel:",
        "  - Have you started or operated a company in my industry before?",
        "  - Do you have a network of potential customers, partners, or future investors you can introduce?",
        "  - What specific help beyond cash can you offer (recruiting, strategy, sales intros)?",
        "  - Can you provide references from other founders you've invested in?",
        "When to accept 'dumb money' anyway:",
        "  - You have no other options and need the cash to survive",
        "  - The terms are very favorable (low valuation, no board seat, minimal control provisions)",
        "  - You're confident you can succeed without their active help",
        "  - You can structure the deal to minimize long-term relationship risk (e.g., convertible note instead of equity)",
        "CAUTION: Difficult angels can scare off future investors. Check references before accepting."
      ]
    }
  ]
};