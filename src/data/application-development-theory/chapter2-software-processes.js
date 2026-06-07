// chapter2-software-processes.js

export const chapter2SoftwareProcesses = {
  id: "theory-ch2",
  title: "Chapter 2: Software Processes",
  subtitle: "Process Models, Activities, Coping with Change, and Process Improvement",
  badge: "Core Concepts",

  contextAndPrerequisites: [
    "No prerequisites — this is foundational software engineering theory",
    "Understanding of basic software development concepts helpful but not required"
  ],

  realWorldAnalogy: "A software process is like a recipe for baking a cake. Some recipes (waterfall) require you to mix all dry ingredients, then all wet ingredients, then bake — with no going back. Others (agile) let you taste as you go, adjust ingredients, and change the recipe based on feedback. Both can produce a good cake, but they work better in different situations.",

  commonMisconceptions: [
    "There is one 'right' software process → TRUTH: Different projects need different processes; no single process works for everything",
    "Agile means no planning → TRUTH: Agile processes plan incrementally, not 'no planning'",
    "Waterfall is obsolete → TRUTH: Waterfall is still used for large systems with stable requirements, especially when multiple sites coordinate",
    "Process improvement is about working faster → TRUTH: Process improvement aims for better quality, lower costs, OR faster delivery — sometimes trade-offs are needed",
    "Testing happens only at the end → TRUTH: Testing occurs throughout — component testing, system testing, customer testing at different stages"
  ],

  examTips: [
    "Four basic process activities: Specification (what), Design/Implementation (how), Validation (checking), Evolution (changing)",
    "Three software process models: Waterfall (plan-driven, phases sequential), Incremental (spec/design/validation interleaved), Integration & Configuration (reuse-based)",
    "Waterfall is only suitable when: requirements well-understood, changes limited, multiple development sites need coordination",
    "Incremental development benefits: accommodates change easily, gets customer feedback early, delivers useful software faster",
    "Incremental development problems: less visible progress, system structure degrades without refactoring",
    "Testing stages in order: Component testing (individual parts) → System testing (whole system) → Customer testing (with real data)",
    "Two ways to reduce rework costs: Change anticipation (prototyping) and Change tolerance (incremental development)",
    "Process improvement cycles: Measure → Analyze → Change → Repeat",
    "CMM Maturity Levels (5): Initial (uncontrolled) → Repeatable (product management) → Defined (process management) → Managed (quality management) → Optimising (process improvement)"
  ],

  keyTakeaway: "Software processes are structured sets of activities for developing software. The four fundamental activities are specification, design/implementation, validation, and evolution. Different projects need different processes — waterfall works when requirements are stable, incremental development handles change better, and reuse-based approaches speed delivery. Change is inevitable, so processes should include prototyping and incremental delivery. Process improvement cycles of measure-analyze-change help organizations mature their practices, from uncontrolled (Initial) to continuously improving (Optimising).",

  furtherConnections: [
    "Links to Chapter 3: Systems thinking and understanding what a system is",
    "Links to Chapter 4: Design and implementation details",
    "Links to Chapter 5: Validation and testing in depth",
    "Links to Chapter 6: Requirements engineering process",
    "Links to DDD module: Incremental development aligns with agile DDD practices"
  ],

  objectives: [
    "Describe the four basic software process activities (specification, design/implementation, validation, evolution)",
    "Compare and contrast waterfall, incremental, and reuse-oriented process models",
    "Explain when waterfall is appropriate vs when incremental development is better",
    "Understand prototyping and incremental delivery as strategies for coping with change",
    "Describe the process improvement cycle (measure → analyze → change)",
    "Identify the five CMM maturity levels"
  ],

  keyConcepts: [
    "Software Process: A structured set of activities required to develop a software system. Includes specification (defining what), design/implementation (building), validation (checking), and evolution (changing).",
    "Process Model: An abstract representation of a process. Examples: Waterfall (phases separate), Incremental (phases interleaved), Integration & Configuration (reuse-based).",
    "Plan-driven vs Agile: Plan-driven processes plan all activities in advance; agile processes plan incrementally and welcome change. Most practical processes blend both.",
    "Waterfall Model: Sequential phases — Requirements → Design → Implementation → Testing → Maintenance. Inflexible for change, only suitable when requirements are stable and well-understood.",
    "Incremental Development: Specification, design, and validation are interleaved. Benefits: accommodates change easily, gets customer feedback, delivers useful software faster. Problems: less visible progress, system structure degrades without refactoring.",
    "Reuse-Oriented Development (Integration & Configuration): System assembled from existing components (COTS). Stages: Requirements specification → Software discovery/evaluation → Requirements refinement → Configuration → Adaptation/integration.",
    "Requirements Engineering Process: Elicitation (gathering needs) → Specification (documenting details) → Validation (checking correctness).",
    "Design Activities: Architectural design (overall structure), Database design (data structures), Interface design (component interactions), Component selection/design (reuse or build).",
    "Testing Stages: Component testing (individual units) → System testing (whole system, especially emergent properties) → Customer testing (with real customer data).",
    "Coping with Change: Change anticipation (prototyping to predict changes before rework) and Change tolerance (incremental development so changes affect only one increment).",
    "Prototyping: Initial version to demonstrate concepts, explore design options, elicit requirements. Should be throw-away — not suitable for production.",
    "Incremental Delivery: Deliver system in increments. Early increments provide customer value quickly, act as prototypes for later requirements, lower project failure risk.",
    "Process Improvement: Understanding existing processes and changing them to increase quality, reduce costs, or accelerate delivery. Cycle: Measure → Analyze → Change → Repeat.",
    "CMM Maturity Levels (Capability Maturity Model): Initial (uncontrolled) → Repeatable (product management defined) → Defined (process management defined) → Managed (quality management defined) → Optimising (process improvement defined)."
  ],

  content: "Software processes are structured activities for developing software systems. The four fundamental activities are specification (defining what the system should do), design and implementation (building the system), validation (checking it works), and evolution (adapting to changing needs). Different projects use different process models. The waterfall model separates phases sequentially but struggles with change. Incremental development interleaves activities, handles change better, and delivers value faster, but can degrade system structure without refactoring. Reuse-oriented development assembles systems from existing components, reducing cost and risk but requiring requirements compromises. Change is inevitable, so processes should include prototyping (to anticipate changes) and incremental delivery (to tolerate changes). Process improvement follows a cycle of measuring attributes, analyzing weaknesses, and introducing changes. The CMM framework classifies organizational maturity from Initial (uncontrolled) to Optimising (continuously improving).",

  additionalKeyPoints: [
    "Products: Outcomes of process activities (e.g., requirements document, design model, code, test results)",
    "Roles: Responsibilities of people involved (e.g., requirements engineer, designer, developer, tester, project manager)",
    "Pre/post-conditions: Statements true before/after an activity (e.g., 'requirements approved before design starts')",
    "Waterfall Drawback: A phase must complete before next begins — impossible to go back without significant rework",
    "Waterfall Still Used For: Large systems engineering projects where multiple sites need coordination, requirements are stable",
    "Incremental Development Visibility Problem: Managers need deliverables to measure progress, but quick development makes documentation costly",
    "Refactoring: Restructuring software without changing external behavior — necessary to prevent structure degradation in incremental development",
    "COTS: Commercial Off-The-Shelf systems — standard approach for business systems",
    "Reuse Advantages: Reduced costs/risks, faster delivery, leverages proven components",
    "Reuse Disadvantages: Requirements compromises, loss of control over evolution of reused components",
    "Design-Implementation Interleaving: For most systems, design and implementation happen together, not sequentially",
    "Debugging vs Testing: Debugging finds and fixes faults; testing is the systematic activity that reveals faults",
    "Verification vs Validation: Verification checks conformance to specification; Validation checks meets customer needs",
    "V-Model: Testing phases mirror design phases — component test during implementation, system test during integration, acceptance test during requirements",
    "Prototyping Focus: Areas that are not well-understood, functional requirements (not non-functional like security/performance)",
    "Throw-away Prototype Reason: Prototypes lack documentation, degraded structure, can't meet quality standards — rebuild from learned lessons",
    "Incremental Delivery vs Development: Development = evaluate each increment before next; Delivery = deploy increment for end-user use",
    "Process Measurement Baseline: Data collected before improvements to assess effectiveness of changes",
    "Maturity Levels Are Cumulative: Higher levels include practices from all lower levels"
  ],

  codeExamples: [
    {
      description: "The Waterfall Model (Phases in sequence)",
      language: "text",
      code: "Requirements Analysis and Definition\n           ↓\n     System and Software Design\n           ↓\n     Implementation and Unit Testing\n           ↓\n     Integration and System Testing\n           ↓\n        Operation and Maintenance"
    },
    {
      description: "V-Model - Testing phases mirror design phases",
      language: "text",
      code: "Requirements → System Test Planning\n     ↓\n   Design → Integration Test Planning\n     ↓\nImplementation → Component Testing\n     ↓\n   Integration Test\n     ↓\n   System Test\n     ↓\nAcceptance Test"
    },
    {
      description: "Process Improvement Cycle",
      language: "text",
      code: "Process Measurement (collect data)\n        ↓\n   Process Analysis (identify weaknesses)\n        ↓\n    Process Change (implement improvements)\n        ↓\n        ↺ (repeat)"
    },
    {
      description: "CMM Maturity Levels",
      language: "text",
      code: "Level 1: Initial (uncontrolled, ad-hoc)\nLevel 2: Repeatable (product management defined)\nLevel 3: Defined (process management defined)\nLevel 4: Managed (quality management defined)\nLevel 5: Optimising (process improvement defined)"
    }
  ],

  exercises: [
    {
      q: "List the four basic software process activities and briefly describe what each involves.",
      a: [
        "Specification: Defining what the system should do — understanding requirements from stakeholders",
        "Design and Implementation: Building the system — designing architecture, interfaces, components, then coding",
        "Validation: Checking that the system works — testing components, the whole system, and with customer data",
        "Evolution: Changing the system over time — adapting to new business needs, platforms, or technologies"
      ]
    },
    {
      q: "Compare the waterfall model and incremental development. Give one situation where each would be preferred.",
      a: [
        "Waterfall: Sequential phases, requires completion before moving on, inflexible for change",
        "Incremental: Interleaved activities, flexible for change, delivers value faster",
        "Waterfall preferred for: Large systems with stable requirements, developed across multiple sites (e.g., aerospace, defense)",
        "Incremental preferred for: Business systems with changing requirements, when customer feedback is valuable early (e.g., web applications, SaaS)"
      ]
    },
    {
      q: "Explain the difference between change anticipation and change tolerance. What process activities support each?",
      a: [
        "Change anticipation: Predicting possible changes before significant rework is needed. Supported by prototyping (show key features early to validate understanding).",
        "Change tolerance: Designing the process so changes can be accommodated at low cost. Supported by incremental development — changes affect only one increment.",
        "Both strategies reduce the costs of rework when requirements change during development."
      ]
    },
    {
      q: "Why are prototypes normally 'throw-away' rather than evolved into production systems? Give three reasons.",
      a: [
        "Cannot be tuned to meet non-functional requirements (security, performance, reliability)",
        "Prototypes are normally undocumented (lack of design rationale, test plans, etc.)",
        "The structure degrades through rapid change (quick fixes over proper refactoring)",
        "Prototypes don't meet normal organizational quality standards",
        "Better to learn from the prototype and rebuild properly than to maintain a poorly structured system"
      ]
    },
    {
      q: "Describe the process improvement cycle. What are the three main activities?",
      a: [
        "Step 1 — Process Measurement: Collect data about process attributes (time taken, resources used, number of defects)",
        "Step 2 — Process Analysis: Assess current process, identify weaknesses and bottlenecks (create process maps/models)",
        "Step 3 — Process Change: Propose and introduce changes to address weaknesses, then resume cycle to measure effectiveness",
        "The cycle repeats continuously — improvement is ongoing, not a one-time event"
      ]
    },
    {
      q: "List the five CMM maturity levels in order. What characterizes each level?",
      a: [
        "Level 1 — Initial: Essentially uncontrolled, ad-hoc processes, success depends on individuals",
        "Level 2 — Repeatable: Product management procedures defined and used (requirements management, project planning)",
        "Level 3 — Defined: Process management procedures and strategies defined and used across organization",
        "Level 4 — Managed: Quality management strategies defined and used (quantitative quality goals)",
        "Level 5 — Optimising: Process improvement strategies defined and used (continuous improvement)"
      ]
    }
  ]
};