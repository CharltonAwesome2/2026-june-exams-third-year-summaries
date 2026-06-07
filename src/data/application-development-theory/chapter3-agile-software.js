// chapter3-agile-software.js

export const chapter3AgileSoftware = {
  id: "theory-ch3",
  title: "Chapter 3: Agile Software Development",
  subtitle: "Agile Methods, XP, Scrum, and Scaling Agile",
  badge: "Agile Development",

  contextAndPrerequisites: [
    "Recommended: Complete Chapter 2 (Software Processes) first",
    "Understanding of plan-driven vs incremental development helpful"
  ],

  realWorldAnalogy: "Agile development is like planning a road trip with a general destination but no fixed route. You decide where to go next based on current conditions, weather, and what looks interesting. You stop frequently to check your progress and adjust. Waterfall is like a train on fixed tracks — the route is predetermined, and changing direction requires going back to the station and rebuilding tracks.",

  commonMisconceptions: [
    "Agile means no documentation → TRUTH: Agile minimizes unnecessary documentation but still documents what's needed. 'Working software over comprehensive documentation' doesn't mean no documentation.",
    "Agile has no planning → TRUTH: Agile plans incrementally and continuously, not 'no planning'",
    "Agile works for every project → TRUTH: Agile is best for small-to-medium projects with co-located teams and customer involvement; large systems may need plan-driven elements",
    "Scrum is the same as agile → TRUTH: Scrum is ONE agile method (for project management); agile includes many methods (XP, Kanban, etc.)",
    "Test-first development means write all tests first → TRUTH: Write tests for each small increment before implementing that increment, then code, then test again"
  ],

  examTips: [
    "Agile Manifesto (4 values): Individuals & interactions > processes & tools; Working software > documentation; Customer collaboration > contract negotiation; Responding to change > following a plan",
    "Extreme Programming (XP) key practices: User stories, Refactoring, Test-first development, Pair programming, Small releases, Continuous integration, On-site customer",
    "Scrum roles: Product Owner (prioritizes backlog), Scrum Master (facilitator, removes obstacles), Development Team (self-organizing)",
    "Scrum artifacts: Product Backlog (all features wanted), Sprint Backlog (features for current sprint), Sprint (2-4 week development cycle)",
    "Agile is most appropriate for: Product development (software products/apps), Custom systems with committed customer involvement, Small/medium co-located teams",
    "Agile maintenance problems: Lack of documentation makes handover difficult, Customer involvement hard to sustain, Original developers may leave",
    "Scaling agile challenges: No single product owner, Can't focus only on code, Cross-team communication needed, Continuous integration difficult across teams",
    "Multi-team Scrum solutions: Role replication (each team has Product Owner/ScrumMaster), Product architects from each team, Release alignment, Scrum of Scrums daily meetings"
  ],

  keyTakeaway: "Agile methods prioritize rapid delivery, responding to change, and customer collaboration over rigid plans and comprehensive documentation. The Agile Manifesto values individuals, working software, customer collaboration, and responding to change. Extreme Programming (XP) introduced technical practices like user stories, test-first development, refactoring, and pair programming. Scrum provides a project management framework with sprints, product backlogs, and defined roles (Product Owner, Scrum Master, Team). While agile excels for small-to-medium co-located projects with customer involvement, scaling to large systems requires hybrid approaches — incorporating up-front design, documentation for long-term maintenance, and cross-team coordination mechanisms like Scrum of Scrums.",

  furtherConnections: [
    "Links to Chapter 2: Agile as a specific process model contrasting with waterfall",
    "Links to DDD module: Test-first development relates to testing DDD domain objects",
    "Links to Chapter 5: Validation and acceptance testing aligns with agile customer testing",
    "Links to Chapter 6: User stories as lightweight requirements specification"
  ],

  objectives: [
    "Explain the four values of the Agile Manifesto",
    "Describe key Extreme Programming (XP) practices: user stories, test-first development, refactoring, pair programming",
    "Understand Scrum roles (Product Owner, Scrum Master, Team) and artifacts (Product Backlog, Sprint Backlog, Sprint)",
    "Identify when agile methods are appropriate vs when plan-driven approaches are needed",
    "Recognize the challenges of scaling agile methods for large systems",
    "Understand multi-team Scrum coordination mechanisms"
  ],

  keyConcepts: [
    "Agile Development: Specification, design, and implementation are interleaved. System developed as increments with stakeholder involvement. Frequent delivery, extensive tool support, minimal documentation focused on working code.",
    "Agile Manifesto (2001): Four values — (1) Individuals and interactions over processes and tools, (2) Working software over comprehensive documentation, (3) Customer collaboration over contract negotiation, (4) Responding to change over following a plan.",
    "Extreme Programming (XP): Influential agile method with 'extreme' practices — builds multiple times daily, 2-week increments, all tests must pass for every build. Technical focus, introduced key practices used widely today.",
    "User Stories: Requirements expressed as short scenarios written on cards. Customer chooses stories for next release based on priorities. Development team breaks stories into implementation tasks for estimating.",
    "Test-First Development (Test-Driven Development): Write tests BEFORE code. Tests are executable (e.g., JUnit). All previous and new tests run automatically when adding functionality. Catches errors immediately.",
    "Refactoring: Continuous code improvement — reorganizing class hierarchies, renaming for clarity, replacing inline code with library calls. Makes changes easier because code is well-structured and clear.",
    "Pair Programming: Two programmers work together at same computer. Pairs created dynamically. Benefits: code reviewed in real-time, knowledge spreads across team, encourages refactoring, reduces project risk when members leave.",
    "Scrum: Agile method focused on managing iterative development. Phases: Outline planning → Sprint cycles (2-4 weeks each) → Project closure.",
    "Scrum Roles: Product Owner (prioritizes backlog, represents customer), Scrum Master (facilitator, removes obstacles, protects team), Development Team (self-organizing, does the work).",
    "Scrum Artifacts: Product Backlog (all desired features, prioritized), Sprint Backlog (features selected for current sprint), Sprint (time-boxed development cycle, 2-4 weeks).",
    "Daily Scrum (Daily Stand-up): Short daily meeting where team shares: progress since last meeting, problems encountered, plans for next day. Everyone knows what's happening.",
    "Scaling Agile Challenges: Large systems require up-front design, multiple teams in different locations, diverse stakeholders, external regulations, long procurement times, team continuity issues.",
    "Multi-team Scrum Solutions: Role replication (each team has Product Owner/ScrumMaster), Product architects from each team, Release alignment, Scrum of Scrums (daily meetings with team representatives).",
    "Hybrid Approaches: Most practical processes combine plan-driven and agile elements. Decision factors: system size, type, expected lifetime, regulation, team skills, organizational culture."
  ],

  content: "Agile methods emerged in the late 1990s to address rapid software delivery in fast-changing business environments. The Agile Manifesto prioritizes individuals and interactions, working software, customer collaboration, and responding to change. Extreme Programming (XP) introduced technical practices including user stories for requirements, test-first development, continuous refactoring, and pair programming. Scrum provides a project management framework with sprints (2-4 week development cycles), product backlogs (prioritized features), and defined roles (Product Owner, Scrum Master, Development Team). Agile works best for small-to-medium co-located projects with committed customer involvement. Scaling agile to large systems requires hybrid approaches — adding up-front design, documentation for long-term maintenance, and cross-team coordination (Scrum of Scrums, role replication, release alignment). Most practical projects blend plan-driven and agile elements based on system size, type, lifetime, regulation, and organizational culture.",

  additionalKeyPoints: [
    "Agile Principles (12): Satisfy customer through early delivery, welcome changing requirements, deliver frequently (weeks to months), business and developers work daily, motivated individuals, face-to-face conversation, working software as progress measure, sustainable pace, technical excellence, simplicity (maximize work not done), self-organizing teams, regular reflection and adjustment.",
    "XP Release Cycle: User stories defined → Release plan created → Iteration (1-3 weeks) → Task development → Test-first → Acceptance testing → Small release.",
    "XP Practices Summary: Planning game, Small releases, Metaphor, Simple design, Test-first development, Refactoring, Pair programming, Collective ownership, Continuous integration, 40-hour week, On-site customer, Coding standards.",
    "User Story Example (Prescribing Medication): 'A doctor prescribes medication for a registered patient. The system checks that the prescribed medication does not interact with other medications the patient is taking. It also checks that the patient is not allergic to the medication.'",
    "Task Cards from User Story: Task 1: Check drug interactions with current medications, Task 2: Check patient allergies, Task 3: Record prescription in patient record, Task 4: Print prescription for patient.",
    "Refactoring vs Design for Change: Traditional design anticipates changes proactively; XP refactors continuously when changes actually occur. XP argues changes cannot be reliably anticipated.",
    "Test Automation with JUnit: Tests are executable components using frameworks like JUnit. Automated test harness runs all component tests with each new release. Provides regression testing — catches new bugs immediately.",
    "Test-First Development Problems: Programmers may write incomplete tests, some tests difficult to write (complex UI logic), difficult to judge completeness of test set.",
    "Pair Programming Efficiency: Research suggests pairs are more efficient than two programmers working separately — real-time review catches errors early, knowledge sharing reduces future rework.",
    "Scrum Sprint Cycle Steps: Product Backlog → Sprint Planning Meeting → Sprint Backlog → Sprint (2-4 weeks development) → Review & Retrospective → Repeat.",
    "Scrum Master Responsibilities: Facilitates daily meetings, tracks backlog, records decisions, measures progress, communicates with external stakeholders, protects team from distractions.",
    "Distributed Scrum Challenges: Time zone differences, cultural differences, communication overhead, loss of informal communication. Mitigations: overlapping working hours, video conferencing, regular travel.",
    "Agile vs Plan-based Decision Factors:",
    "  - Requirements stability: Unstable → Agile, Stable → Plan-driven",
    "  - System size: Small → Agile, Large → Plan-driven",
    "  - Team location: Co-located → Agile, Distributed → Plan-driven",
    "  - Customer availability: Available → Agile, Unavailable → Plan-driven",
    "  - Regulation/compliance: Low → Agile, High → Plan-driven",
    "  - Expected lifetime: Short → Agile, Long → Plan-driven (needs documentation)",
    "Brownfield Systems: Large systems that include and interact with existing systems. Requirements are often about integration, not flexibility — less suitable for pure agile.",
    "Scrum of Scrums: Daily meeting with representatives from each team. Discuss: What has your team done since last meeting? What will you do? Any obstacles? Will anything affect other teams?",
    "Cultural Resistance to Agile: Organizations with long history of plan-driven development may resist agile informality. Requires change management and proven success stories."
  ],

  codeExamples: [
    {
      description: "Test-First Development Workflow (JUnit style)",
      language: "java",
      code: "// 1. Write test FIRST (before implementing)\n@Test\npublic void testAddItemToCart() {\n    Cart cart = new Cart();\n    cart.addItem(\"product-1\", 2, new Money(25.99));\n    assertEquals(51.98, cart.getTotal().getAmount(), 0.01);\n}\n\n// 2. Run test (fails - no implementation yet)\n// 3. Write MINIMAL code to pass test\npublic void addItem(String productId, int quantity, Money price) {\n    items.add(new CartItem(productId, quantity, price));\n}\n\n// 4. Run test again (passes)\n// 5. Refactor if needed, then repeat for next feature"
    },
    {
      description: "User Story Card Format",
      language: "text",
      code: "Story Card: 'Prescribing Medication'\n\nAs a doctor,\nI want to check for drug interactions and allergies\nwhen prescribing medication to a registered patient,\nSo that I can ensure patient safety.\n\nTasks:\n- Check drug interactions with current medications\n- Check patient allergies\n- Record prescription in patient record\n- Print prescription for patient\n\nEstimate: 5 story points"
    },
    {
      description: "Agile Manifesto (Four Values)",
      language: "text",
      code: "We value:\n\n1. Individuals and interactions   over   processes and tools\n2. Working software               over   comprehensive documentation\n3. Customer collaboration         over   contract negotiation\n4. Responding to change           over   following a plan\n\nWhile there is value in the items on the right,\nwe value the items on the left more."
    },
    {
      description: "Scrum Sprint Cycle",
      language: "text",
      code: "Product Backlog (prioritized features)\n        ↓\nSprint Planning Meeting (select features for sprint)\n        ↓\nSprint Backlog (features + tasks)\n        ↓\nSprint (2-4 weeks development, daily Scrums)\n        ↓\nSprint Review (demonstrate working software)\n        ↓\nSprint Retrospective (reflect and improve)\n        ↓\n↺ (repeat with next sprint)"
    },
    {
      description: "Daily Scrum (Stand-up) Questions",
      language: "text",
      code: "Each team member answers three questions:\n\n1. What did I do yesterday that helped the team meet the sprint goal?\n2. What will I do today to help the team meet the sprint goal?\n3. Do I see any obstacle that prevents me or the team from meeting the sprint goal?"
    }
  ],

  exercises: [
    {
      q: "List the four values of the Agile Manifesto. For each, give a concrete example of what the 'left' item means in practice.",
      a: [
        "Individuals and interactions over processes and tools: Example — Having a daily stand-up meeting (interaction) instead of requiring detailed status reports (process document).",
        "Working software over comprehensive documentation: Example — Delivering a working increment every 2 weeks (software) instead of waiting months to write complete specification documents.",
        "Customer collaboration over contract negotiation: Example — Customer works with team daily to refine requirements (collaboration) rather than lawyers negotiating fixed requirements upfront.",
        "Responding to change over following a plan: Example — Adjusting next sprint's features based on customer feedback (change) instead of rigidly following 6-month plan made at project start."
      ]
    },
    {
      q: "Describe the test-first development (TDD) cycle. Why is automated testing essential to this approach?",
      a: [
        "TDD Cycle (Red-Green-Refactor):",
        "  1. Write a test for the next small piece of functionality (test fails — RED)",
        "  2. Write just enough code to pass the test (test passes — GREEN)",
        "  3. Refactor code for clarity/maintainability while keeping tests green",
        "  4. Repeat for next feature",
        "Automated testing is essential because:",
        "  - All previous and new tests run automatically when adding functionality",
        "  - Catches new bugs immediately (regression testing)",
        "  - Without automation, running all tests manually would be too time-consuming",
        "  - Frameworks like JUnit make automated testing practical"
      ]
    },
    {
      q: "What are the three roles in Scrum? Describe the primary responsibility of each.",
      a: [
        "Product Owner: Prioritizes the product backlog, represents customer/stakeholders, makes decisions on requirements, ensures team works on highest-value features.",
        "Scrum Master: Facilitator who removes obstacles, protects team from external distractions, arranges daily meetings, tracks backlog progress, communicates with outside stakeholders.",
        "Development Team: Self-organizing group that does the actual work (design, coding, testing). Team decides how to accomplish sprint goals, no one tells them how to do their work."
      ]
    },
    {
      q: "Explain the difference between a Product Backlog and a Sprint Backlog. How are they used in Scrum?",
      a: [
        "Product Backlog: Complete list of all desired features, changes, and fixes for the product. Prioritized by Product Owner. Continuously refined throughout project.",
        "Sprint Backlog: Subset of Product Backlog selected for the current sprint (2-4 weeks). Broken down into tasks. Fixed during sprint — no changes once sprint starts.",
        "Usage: During Sprint Planning, team selects top priority items from Product Backlog to move into Sprint Backlog. Sprint Backlog is commitment for the sprint. At end of sprint, completed items are 'done' and remaining (if any) go back to Product Backlog."
      ]
    },
    {
      q: "List three challenges of scaling agile methods to large systems. For each, describe a potential solution.",
      a: [
        "Challenge 1: No single Product Owner can represent all stakeholders. Solution: Multiple Product Owners for different components, with a chief Product Owner coordinating overall priorities.",
        "Challenge 2: Can't focus only on code; large systems need up-front architecture design. Solution: Hybrid approach — initial architecture planning phase before agile development, with architects from each team collaborating.",
        "Challenge 3: Cross-team communication difficult, especially with distributed teams. Solution: Scrum of Scrums (daily meetings with team representatives), overlapping working hours, video conferencing, regular travel.",
        "Challenge 4: Continuous integration across all teams is practically impossible. Solution: Frequent system builds and regular releases (e.g., weekly integration builds, aligned release dates)."
      ]
    },
    {
      q: "Why is refactoring considered essential in agile development? How does it address the problem of system structure degradation?",
      a: [
        "In incremental development, adding new features without refactoring corrupts system structure over time — code becomes messy, duplicated, hard to understand.",
        "Refactoring (continuous code improvement) prevents this degradation by:",
        "  - Reorganizing class hierarchies to remove duplicate code",
        "  - Renaming attributes/methods for clarity",
        "  - Replacing inline code with library calls",
        "Benefits: Code remains well-structured and clear, making future changes easier and cheaper.",
        "XP argues that anticipating all changes upfront is impossible; refactoring makes changes easier WHEN they actually occur."
      ]
    }
  ]
};