// chapter6-architectural-design.js

export const chapter6ArchitecturalDesign = {
  id: "theory-ch6",
  title: "Chapter 6: Architectural Design",
  subtitle: "Architectural Decisions, Views, Patterns, and Application Architectures",
  badge: "Architectural Design",

  contextAndPrerequisites: [
    "Recommended: Complete Chapter 5 (System Modeling) first",
    "Understanding of system components and their interactions is helpful"
  ],

  realWorldAnalogy: "Architectural design is like planning a building's structure before interior design. You decide: will it be a single-story ranch, a two-story colonial, or a high-rise? Where are load-bearing walls? Where are plumbing and electrical runs? How do people move through spaces? These decisions affect cost, safety, maintainability, and usability for decades. Similarly, software architecture determines performance, security, maintainability, and whether the system can evolve.",

  commonMisconceptions: [
    "Architecture is just boxes and lines → TRUTH: Good architecture captures rationale, decisions, constraints, and non-functional trade-offs, not just structure",
    "Agile methods don't need architecture → TRUTH: Even agile processes design an overall architecture early; refactoring architecture is expensive because it affects many components",
    "One architecture diagram is enough → TRUTH: Multiple views (logical, process, development, physical, scenarios) are needed for different stakeholders",
    "Architectural patterns are templates to copy → TRUTH: Patterns are starting points — they must be adapted to specific requirements and constraints",
    "Layering always improves maintainability → TRUTH: Layering can be artificial and may introduce performance overhead if layers are too strict"
  ],

  examTips: [
    "Two levels of architecture: Architecture in the small (individual program structure) vs Architecture in the large (enterprise systems, distributed across computers)",
    "Three advantages of explicit architecture: Stakeholder communication, System analysis (non-functional requirements), Large-scale reuse (product lines)",
    "5 key architectural design decisions: Application type, Distribution, Architectural style, Deployment, Technology stack",
    "4+1 View Model: Logical (abstractions), Process (run-time interactions), Development (decomposition for development), Physical (hardware distribution), +1 Scenarios (use cases)",
    "5 architectural patterns: MVC (Model-View-Controller), Layered, Repository, Client-Server, Pipe-and-Filter",
    "Non-functional trade-offs: Performance (large components, minimal communication), Security (layered, critical assets inner layers), Safety (localise safety-critical features), Availability (redundant components), Maintainability (fine-grain, replaceable components)",
    "Application types: Data processing (batch), Transaction processing (user requests, database), Event processing (environment events), Language processing (formal language input)"
  ],

  keyTakeaway: "Architectural design defines how a software system is organized — its major components, their relationships, and the principles governing their design. Key decisions include application type, distribution, architectural patterns, and deployment. The 4+1 view model provides multiple perspectives: logical (abstractions), process (run-time), development (decomposition), physical (hardware), and scenarios (use cases). Common architectural patterns include Model-View-Controller (MVC) for user interfaces, layered architecture for systems with different abstraction levels, repository for shared data, client-server for distributed systems, and pipe-and-filter for sequential transformations. Application architectures (transaction processing, language processing) provide generic starting points for specific system types. Architecture directly affects non-functional characteristics — performance, security, safety, availability, maintainability — often requiring trade-offs.",

  furtherConnections: [
    "Links to Chapter 4: Non-functional requirements drive architectural decisions",
    "Links to Chapter 5: UML for architectural views (class diagrams for logical, sequence for process, deployment for physical)",
    "Links to DDD module: Layered architecture aligns with DDD's separation of domain, application, infrastructure"
  ],

  objectives: [
    "Explain the importance of explicit software architecture",
    "List the key architectural design decisions that affect non-functional characteristics",
    "Describe the 4+1 architectural view model",
    "Compare and contrast MVC, layered, repository, client-server, and pipe-and-filter patterns",
    "Identify when each architectural pattern is appropriate",
    "Explain transaction processing and language processing application architectures"
  ],

  keyConcepts: [
    "Architectural Design: Understanding how a software system should be organized and designing its overall structure. Critical link between design and requirements engineering. Output is an architectural model of communicating components.",
    "Architecture in the Small: Architecture of individual programs — how a program is decomposed into components.",
    "Architecture in the Large: Architecture of complex enterprise systems including other systems, programs, components, distributed across different computers owned by different companies.",
    "Advantages of Explicit Architecture: Stakeholder communication (focus for discussion), System analysis (evaluate non-functional requirements), Large-scale reuse (product-line architectures across multiple systems).",
    "Architectural Design Decisions: Type of application, distribution approach, architectural patterns/styles, deployment configuration, technology stack, concurrency model, data management strategy, error handling approach.",
    "4+1 View Model: Logical view (key abstractions as objects/classes), Process view (run-time interacting processes), Development view (decomposition for development), Physical view (hardware and component distribution), +1 Scenarios (use cases relating views).",
    "MVC Pattern (Model-View-Controller): Separates presentation (View), user input (Controller), and application logic/data (Model). Advantages: multiple views of same model, supports parallel development, easy to modify interfaces.",
    "Layered Architecture: Organizes system into layers (abstract machines), each providing services to the layer above. Advantages: supports incremental development, layer interface changes only affect adjacent layer. Disadvantage: often artificial to structure.",
    "Repository Pattern: All sub-systems share a central database/repository. Advantages: efficient data sharing, single source of truth. Disadvantages: repository is single point of failure, performance bottleneck, evolution difficult.",
    "Client-Server Pattern: Distributed model with stand-alone servers (providing specific services) and clients (calling services) connected via network. Advantages: scalability, separation of concerns. Disadvantages: network dependency, server can be bottleneck.",
    "Pipe-and-Filter Pattern: Functional transformations process inputs to outputs; each filter transforms input data and passes to next filter via pipe. Used in batch sequential systems (e.g., Unix shell). Not suitable for interactive systems.",
    "Application Architectures: Generic architectures for types of software systems (transaction processing, language processing) that can be configured for specific requirements. Used as starting point, design checklist, team organization, reuse assessment.",
    "Transaction Processing Systems: Process user requests for database information or updates. Asynchronous requests processed by transaction manager. Examples: e-commerce, reservation systems, ATMs, banking systems.",
    "Language Processing Systems: Accept natural/artificial language as input, generate some other representation. Include translator and optionally interpreter. Examples: compilers, command interpreters, meta-case tools.",
    "Compiler Components: Lexical analyzer (tokens → internal form), Symbol table (entity names), Syntax analyzer (syntax checking), Syntax tree (internal structure), Semantic analyzer (semantic correctness), Code generator (abstract machine code).",
    "Architecture for Non-functional Characteristics: Performance (localize operations, minimize communication), Security (layered, critical assets inner layers), Safety (localize safety-critical features), Availability (redundant components, fault tolerance), Maintainability (fine-grain, replaceable components)."
  ],

  content: "Architectural design defines the overall organization of a software system — its major components, their relationships, and design principles. Architecture exists at two levels: in the small (individual program structure) and in the large (enterprise systems). Explicit architecture enables stakeholder communication, system analysis (especially non-functional requirements), and large-scale reuse (product lines). Key architectural decisions affect non-functional characteristics — performance, security, safety, availability, maintainability — often requiring trade-offs. The 4+1 view model provides multiple perspectives: logical (abstractions), process (run-time), development (decomposition), physical (hardware), and scenarios (use cases). Common architectural patterns include MVC (separating model, view, controller), layered (abstraction layers), repository (shared data), client-server (distributed services), and pipe-and-filter (sequential transformations). Generic application architectures (transaction processing systems like ATMs, language processing systems like compilers) provide reusable starting points for specific domains.",

  additionalKeyPoints: [
    "Architecture and Agility: Even agile processes design an overall architecture early. Refactoring architecture is expensive because it affects many components. Initial architecture decisions have long-lasting impact.",
    "Box and Line Limitations: Informal block diagrams lack semantics, don't show relationship types, don't show component properties. However, they are useful for stakeholder communication and project planning because they aren't cluttered with detail.",
    "Architecture as Creative Process: Architectural design differs depending on system type, but common decisions span all processes. No single 'right' architecture — trade-offs always exist.",
    "Architecture Reuse: Systems in same domain often have similar architectures. Application product lines built around core architecture with variants for specific customer requirements.",
    "Performance Architecture Decisions: Use large rather than fine-grain components to minimize communication overhead. Localize critical operations. Avoid distributed transactions when possible.",
    "Security Architecture Decisions: Use layered architecture with critical assets in inner layers. Each layer adds protection. Authenticate at outer layers, authorize at each layer.",
    "MVC Web Application Architecture: Browser (View) → Web Server (Controller) → Application Logic (Model) → Database. Browser sends HTTP requests, server processes, model updates, view rendered.",
    "Layered Architecture Example: iLearn system — UI Layer → Application Services → Domain Services → Database Layer. Each layer only depends on layer below.",
    "Repository Architecture Example: IDE — central repository stores program representation (abstract syntax tree, symbol table, etc.). Multiple tools (editor, compiler, debugger) access and modify repository.",
    "IDE Repository Advantages: Tools can share data without knowing each other. New tools can be added without modifying existing tools. Centralized management of data consistency.",
    "Client-Server Example: Film library — separate servers for catalog, video streaming, user authentication, payment processing. Clients (browsers, mobile apps) access servers via network.",
    "Pipe-and-Filter Example: Payments system — Read payments → Validate format → Validate accounts → Apply exchange rates → Generate output. Each filter performs single transformation.",
    "Transaction Processing Architecture: User interface → Transaction manager → Scheduler → Database. Transaction manager ensures ACID properties (Atomicity, Consistency, Isolation, Durability).",
    "ATM System Architecture: Customer (user), ATM (interface), Bank network (communication), Branch computer (transaction processing), Central database (account storage). Each layer abstracts lower-level details.",
    "Multi-tier Web Architecture: Web server (user communications, UI), Application server (business logic), Database server (data storage, transaction management). Separates concerns for scalability.",
    "Compiler Repository Architecture: Lexical analyzer, syntax analyzer, semantic analyzer, code generator all access shared repository (symbol table, syntax tree). Allows incremental compilation.",
    "Compiler Pipe-and-Filter Architecture: Source → Lexical analyzer → Syntax analyzer → Semantic analyzer → Code generator → Object code. Sequential transformation, each filter independent."
  ],

  codeExamples: [
    {
      description: "MVC Pattern Structure",
      language: "text",
      code: "┌─────────────────────────────────────────────────────────┐\n│                      USER                                   │\n└─────────────────────────────────────────────────────────┘\n         │                              │\n         ▼                              ▼\n┌─────────────────┐              ┌─────────────────┐\n│     View        │◄─────────────│    Controller   │\n│  (Presentation) │              │ (User Input)    │\n└────────┬────────┘              └────────┬────────┘\n         │                                │\n         │ (notifies)                     │ (updates)\n         │                                │\n         ▼                                ▼\n         └──────────────┬─────────────────┘\n                        │\n                        ▼\n              ┌─────────────────┐\n              │     Model       │\n              │ (Data & Logic)  │\n              └─────────────────┘\n\nFlow:\n1. User interacts with Controller\n2. Controller updates Model\n3. Model notifies View of changes\n4. View renders updated display"
    },
    {
      description: "Layered Architecture Pattern",
      language: "text",
      code: "┌─────────────────────────────────────┐\n│         User Interface Layer          │\n│    (menus, forms, displays)           │\n└─────────────────────────────────────┘\n                    │ uses services\n                    ▼\n┌─────────────────────────────────────┐\n│        Application Logic Layer       │\n│    (business rules, workflows)       │\n└─────────────────────────────────────┘\n                    │ uses services\n                    ▼\n┌─────────────────────────────────────┐\n│           Domain Layer               │\n│    (domain objects, entities)        │\n└─────────────────────────────────────┘\n                    │ uses services\n                    ▼\n┌─────────────────────────────────────┐\n│        Infrastructure Layer          │\n│    (database, file system, network)  │\n└─────────────────────────────────────┘"
    },
    {
      description: "Repository Pattern",
      language: "text",
      code: "┌─────────────────────────────────────────────────────┐\n│                    REPOSITORY                           │\n│              (Shared Data / Database)                    │\n│                                                         │\n│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │\n│  │ Data A  │ │ Data B  │ │ Data C  │ │ Data D  │       │\n│  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │\n└─────────────────────────────────────────────────────┘\n         ▲           ▲           ▲           ▲\n         │           │           │           │\n    ┌────┴────┐ ┌────┴────┐ ┌────┴────┐ ┌────┴────┐\n    │Subsys 1 │ │Subsys 2 │ │Subsys 3 │ │Subsys 4 │\n    └─────────┘ └─────────┘ └─────────┘ └─────────┘\n\nAll subsystems access and modify shared repository.\nNo direct communication between subsystems."
    },
    {
      description: "Client-Server Pattern",
      language: "text",
      code: "                    ┌─────────────┐\n                    │   Client 1  │\n                    └──────┬──────┘\n                           │\n┌─────────────┐       ┌─────┴─────┐       ┌─────────────┐\n│   Client 2  │───────│  Network  │───────│   Server    │\n└─────────────┘       └─────┬─────┘       └─────────────┘\n                           │\n                    ┌──────┴──────┐\n                    │   Client 3  │\n                    └─────────────┘\n\nServers provide specific services (file, print, database).\nClients request services from servers.\nNetwork enables communication."
    },
    {
      description: "Pipe-and-Filter Pattern",
      language: "text",
      code: "Input ──► ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐ ──► Output\n        │Filter 1│──►│Filter 2│──►│Filter 3│──►│Filter 4│\n        └────────┘   └────────┘   └────────┘   └────────┘\n\nPayments System Example:\nRead Paymts ──► Validate ──► Validate ──► Apply FX ──► Generate\n(CSV)          Format       Accounts      Rates        Output\n\nEach filter:\n- Reads input from previous filter (pipe)\n- Performs a single transformation\n- Writes output to next filter (pipe)\n- Independent and replaceable"
    },
    {
      description: "4+1 View Model",
      language: "text",
      code: "                    ┌─────────────────────┐\n                    │     Logical View      │\n                    │  (Class diagrams,      │\n                    │   object models)       │\n                    └──────────┬──────────┘\n                               │\n         ┌─────────────────────┼─────────────────────┐\n         │                     │                     │\n    ┌────┴────┐           ┌────┴────┐           ┌────┴────┐\n    │ Process │           │Development│         │ Physical│\n    │  View   │           │   View    │         │  View   │\n    │(Sequence│           │(Component │         │(Deploy- │\n    │ diagrams│           │ diagrams) │         │  ment)   │\n    └────┬────┘           └────┬────┘           └────┬────┘\n         │                     │                     │\n         └─────────────────────┼─────────────────────┘\n                               │\n                    ┌──────────┴──────────┐\n                    │      +1 View        │\n                    │     Scenarios       │\n                    │   (Use cases)       │\n                    └─────────────────────┘\n\nAll views are related by scenarios (use cases)."
    }
  ],

  exercises: [
    {
      q: "List the three advantages of explicit software architecture. For each, explain why it matters.",
      a: [
        "1. Stakeholder communication: Architecture provides a common vocabulary for discussion between developers, customers, project managers, and other stakeholders. Non-technical stakeholders can understand high-level box-and-line diagrams without being overwhelmed by detail.",
        "2. System analysis: Architecture enables analysis of whether the system can meet its non-functional requirements (performance, security, availability, maintainability) before implementation. Trade-offs can be identified and resolved early.",
        "3. Large-scale reuse: Architecture (or product-line architecture) can be reused across multiple systems in the same domain. Reduces development costs, accelerates delivery, and maintains consistency across product families."
      ]
    },
    {
      q: "Describe the five patterns in the 4+1 view model. What is the purpose of each view?",
      a: [
        "Logical View: Shows key abstractions as objects or object classes. Purpose: Describe the system's structure and how components relate. Uses class diagrams.",
        "Process View: Shows how the system, at run-time, is composed of interacting processes. Purpose: Address concurrency, distribution, performance. Uses sequence diagrams, activity diagrams.",
        "Development View: Shows how software is decomposed for development (modules, libraries, components). Purpose: Guide work allocation, integration, configuration management. Uses component diagrams, package diagrams.",
        "Physical View: Shows system hardware and how software components are distributed across processors. Purpose: Address deployment, resource allocation, network topology. Uses deployment diagrams.",
        "Scenarios (+1 View): Use cases that relate the other four views. Purpose: Show how views work together, validate the architecture against requirements, illustrate specific system behaviors."
      ]
    },
    {
      q: "For each architectural pattern (MVC, Layered, Repository, Client-Server, Pipe-and-Filter), give one advantage and one disadvantage.",
      a: [
        "MVC: Advantage — Multiple views of same model (e.g., web and mobile interfaces); Disadvantage — Increased complexity for simple UI applications.",
        "Layered: Advantage — Supports incremental development, changes only affect adjacent layer; Disadvantage — Often artificial to structure, can introduce performance overhead.",
        "Repository: Advantage — Efficient data sharing, single source of truth; Disadvantage — Repository is single point of failure and performance bottleneck.",
        "Client-Server: Advantage — Scalable, separation of concerns between clients and servers; Disadvantage — Network dependency, server can become bottleneck.",
        "Pipe-and-Filter: Advantage — Filters independent and replaceable, easy to add or modify transformations; Disadvantage — Not suitable for interactive systems, batch-oriented."
      ]
    },
    {
      q: "Match the architectural decision to the non-functional characteristic it optimizes: (a) Use large rather than fine-grain components, (b) Place critical assets in inner layers, (c) Include redundant components, (d) Use replaceable fine-grain components.",
      a: [
        "(a) Use large rather than fine-grain components → Performance (minimizes communication overhead between components)",
        "(b) Place critical assets in inner layers → Security (each layer adds protection, outer layers authenticate, inner layers contain sensitive data)",
        "(c) Include redundant components → Availability (if one component fails, another can take over; fault tolerance)",
        "(d) Use replaceable fine-grain components → Maintainability (smaller, independent components are easier to replace without affecting entire system)",
        "Additional: Localise safety-critical features in a small number of subsystems → Safety (easier to verify, less impact on rest of system)"
      ]
    },
    {
      q: "Describe the architecture of a compiler using both repository and pipe-and-filter styles. Which is more common and why?",
      a: [
        "Repository Style Compiler: Lexical analyzer, syntax analyzer, semantic analyzer, and code generator all access a shared repository containing symbol table and abstract syntax tree (AST). Each component reads from and writes to the repository.",
        "Pipe-and-Filter Style Compiler: Source code → Lexical analyzer → Tokens → Syntax analyzer → AST → Semantic analyzer → Annotated AST → Code generator → Object code. Each filter performs one transformation and passes to next.",
        "Most modern compilers use a HYBRID approach: Parser generates AST placed in repository; multiple passes (filters) access and modify the repository. The repository holds the shared program representation, while the passes act as filters.",
        "Repository is more common for complex compilers because:",
        "  - Multiple passes can access shared data without re-parsing source",
        "  - Incremental compilation (only recompile changed parts) is easier",
        "  - Tools (editor, debugger, refactoring) can share same repository"
      ]
    },
    {
      q: "An ATM system is a transaction processing system. Draw (describe) its layered architecture showing the user, ATM, bank network, branch computer, and central database.",
      a: [
        "Layer 1 (User): Customer interacting with the ATM interface",
        "        ↓ (insert card, enter PIN, request transaction)",
        "Layer 2 (ATM): Physical machine — reads card, captures PIN, dispenses cash, prints receipts. Communicates with bank network.",
        "        ↓ (encrypted transaction request)",
        "Layer 3 (Bank Network): Secure communication infrastructure connecting ATMs to branch computers. Handles routing, encryption, authentication.",
        "        ↓ (validated transaction)",
        "Layer 4 (Branch Computer): Transaction processing system — validates account, checks balance, approves/denies requests, updates local records.",
        "        ↓ (database update)",
        "Layer 5 (Central Database): Master account storage — maintains account balances, transaction history, customer information across all branches.",
        "",
        "Each layer abstracts lower-level details: ATM doesn't know database details; branch computer doesn't know ATM hardware details."
      ]
    }
  ]
};