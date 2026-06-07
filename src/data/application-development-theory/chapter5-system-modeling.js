// chapter5-system-modeling.js

export const chapter5SystemModeling = {
  id: "theory-ch5",
  title: "Chapter 5: System Modeling",
  subtitle: "Context, Interaction, Structural, and Behavioral Models using UML",
  badge: "System Modeling",

  contextAndPrerequisites: [
    "Recommended: Complete Chapter 4 (Requirements Engineering) first",
    "Understanding of software design concepts is helpful"
  ],

  realWorldAnalogy: "System modeling is like creating architectural blueprints for a building. You need different views: a site plan shows context (where the building sits relative to roads and other buildings), floor plans show structure (room layouts), electrical diagrams show interactions (how switches connect to lights), and evacuation maps show behavior (how people move during a fire). Each view serves a different purpose, uses different notation, and is understood by different stakeholders. UML is the standard 'architectural notation' for software.",

  commonMisconceptions: [
    "Models must be perfect before coding starts → TRUTH: Models serve different purposes — incomplete models are fine for discussion, only implementation models need correctness",
    "UML is a methodology → TRUTH: UML is a NOTATION (diagram types), not a methodology or process",
    "One diagram type is enough → TRUTH: Different perspectives (context, interaction, structure, behavior) need different diagram types",
    "Class diagrams are database schemas → TRUTH: Class diagrams show object-oriented structure; they may map to database tables but are not the same",
    "State diagrams are only for real-time systems → TRUTH: State diagrams are useful for any system with distinct states (e.g., order processing, user session management)"
  ],

  examTips: [
    "Four modeling perspectives: External (context), Interaction (communication), Structural (organization), Behavioral (dynamic response)",
    "UML diagram types to know: Activity (process flow), Use case (interactions with actors), Sequence (interaction order), Class (static structure), State (event response)",
    "System boundaries: Define what's inside/outside; affected by social/organizational politics; profoundly affects requirements",
    "Use case components: Actors (people or other systems), System boundary, Use cases (discrete tasks), Relationships (include, extend, generalization)",
    "Sequence diagram elements: Actors/objects across top, lifelines (dotted lines), activation boxes, messages (arrows), return arrows",
    "Class diagram relationships: Association (link between classes), Aggregation (part-of), Generalization (inheritance, 'is-a')",
    "Behavioral model types: Data-driven (processing input data, use activity diagrams) vs Event-driven (responding to events, use state diagrams)",
    "MDA model levels: CIM (domain/computation independent), PIM (platform independent), PSM (platform specific)"
  ],

  keyTakeaway: "System modeling creates abstract representations of a system using graphical notation (primarily UML). Different models serve different purposes: context models show system boundaries and environment; interaction models (use case, sequence) show communication between actors and system; structural models (class diagrams) show system organization and relationships; behavioral models (activity, state) show dynamic execution behavior. Models can be used for discussion (incomplete OK), documentation (accurate but not necessarily complete), or implementation generation (must be correct and complete). Model-Driven Engineering (MDE) aims to generate executable code from models automatically, though adoption has been limited due to tooling costs and the rise of agile methods.",

  furtherConnections: [
    "Links to Chapter 4: Use cases for requirements elicitation, system boundaries affect requirements",
    "Links to Chapter 6: Design and implementation using class diagrams",
    "Links to DDD module: Domain models (class diagrams) map to DDD entities and value objects"
  ],

  objectives: [
    "Explain the four modeling perspectives (context, interaction, structural, behavioral)",
    "Create and interpret context models showing system boundaries and environment",
    "Develop use case diagrams and sequence diagrams for interaction modeling",
    "Construct class diagrams showing associations, aggregation, and generalization",
    "Create activity diagrams for data-driven modeling and state diagrams for event-driven modeling",
    "Understand the levels of model-driven engineering (CIM, PIM, PSM)"
  ],

  keyConcepts: [
    "System Modeling: Developing abstract models of a system, each presenting a different view. Usually uses UML (Unified Modeling Language) graphical notation.",
    "Four Modeling Perspectives: External (context/environment), Interaction (between system and environment or components), Structural (organization/data structure), Behavioral (dynamic response to events).",
    "Context Models: Show operational context of system — what lies outside system boundaries. System boundaries define what is inside/outside; affected by organizational politics.",
    "Process Models (Activity Diagrams): Show how the system being developed is used in broader business processes. Reveal the workflow, not just other systems.",
    "Interaction Models: Use case diagrams (showing interactions between system and actors) and sequence diagrams (showing sequence of interactions during a use case).",
    "Use Case Components: Actors (people or other systems), System boundary (rectangle), Use cases (ellipses representing discrete tasks), Relationships (include, extend, generalization).",
    "Sequence Diagram Elements: Actors/objects across top with lifelines (dotted lines). Activation boxes show periods when object is active. Messages as annotated arrows between lifelines.",
    "Structural Models: Class diagrams showing static organization — classes, attributes, operations, and relationships (associations, aggregation, generalization).",
    "Generalization (Inheritance): Higher-level classes (superclasses) have attributes/operations inherited by lower-level classes (subclasses). Implements 'is-a' relationship.",
    "Aggregation: 'Part-of' relationship — shows how classes that are collections are composed of other classes (e.g., a Patient has many Consultations).",
    "Behavioral Models: Show dynamic behavior during execution. Two types: Data-driven (processing input data, using activity diagrams) and Event-driven (responding to events, using state diagrams).",
    "Activity Diagrams: Show sequence of actions in processing input data and generating output. Useful for showing end-to-end processing in business systems.",
    "State Machine Models (Statecharts): Show system states as nodes, events as arcs. When event occurs, system moves from one state to another. Used for real-time systems and any system with distinct states.",
    "Model-Driven Engineering (MDE): Models rather than programs are principal outputs; code generated automatically from models. Raises abstraction level.",
    "MDA (Model-Driven Architecture): Precursor to MDE. Three model levels: CIM (computation independent/domain models), PIM (platform independent), PSM (platform specific).",
    "MDA Transformations: CIM → PIM → PSM (for each platform) → executable code. In principle, automatic transformation possible.",
    "MDE Adoption Limitations: Specialized tool support required, limited tool availability, models for discussion not right for implementation, agile methods diverted attention, implementation not the major problem for most systems."
  ],

  content: "System modeling develops abstract graphical models (using UML) to represent different perspectives of a system. Context models show system boundaries and environment; interaction models (use case and sequence diagrams) show communication between actors and system; structural models (class diagrams) show organization, classes, associations, aggregation, and generalization; behavioral models show dynamic execution — data-driven (activity diagrams for processing flows) and event-driven (state diagrams for event responses). Models serve three purposes: facilitating discussion (incomplete OK), documenting existing systems (accurate but not necessarily complete), and generating implementations (must be correct and complete). Model-Driven Engineering (MDE) aims to automatically generate code from models, but adoption has been limited due to tool costs, the need for both abstraction and implementation fidelity, and competition from agile methods.",

  additionalKeyPoints: [
    "Uses of Graphical Models: 1) Facilitating discussion (incomplete/incorrect OK), 2) Documenting existing systems (accurate, need not be complete), 3) Detailed system description for implementation (must be correct and complete).",
    "System Boundary Impact: The position profoundly affects requirements. Defining boundaries is a POLITICAL judgment — may increase/decrease influence or workload of different organizational parts.",
    "Mentcare System Context: Includes Patients Database, Admissions System, Statistics System, Prescriptions System, etc. Shows relationships but not how system is used.",
    "Process Model vs Context Model: Context models show other systems; process models (activity diagrams) show HOW the system is used in broader business processes.",
    "Use Case Tabular Description Components: Use case name, Actors, Description, Data, Stimulus, Response, Comments.",
    "Sequence Diagram Importance: Shows order of interactions, helps understand timing and communication patterns, reveals potential performance issues.",
    "Class Diagram Aggregation Example: Patient — contains → Consultations — contains → Prescriptions. Shows part-of hierarchy.",
    "Generalization Example: Doctor, Nurse, Receptionist all generalize to User (common attributes: name, ID, login). Each subclass adds specific attributes/operations.",
    "State Machine Benefits: Helps identify all possible states, ensures all event responses are defined, reveals missing transitions or invalid states.",
    "Microwave Oven States: Waiting → (door closed, power set) → Power Set → (time set) → Timer Set → (start) → Cooking → (door opened) → Waiting, etc.",
    "Data-driven vs Event-driven: Data-driven = input data triggers processing (business systems). Event-driven = external events trigger state changes (real-time systems, embedded systems).",
    "Activity Diagram for Insulin Pump: Read blood sugar → Compute insulin dose → Deliver insulin → Wait → (repeat). Shows continuous processing loop.",
    "MDA Promise: Write once, generate for multiple platforms (Windows, Linux, Mac, mobile). Reduces migration costs for long-lifetime systems.",
    "MDA Limitations: Tool availability and customization costs, abstraction for discussion not right for implementation, requirements/security/integration/testing are bigger problems than implementation.",
    "Agile vs MDA Tension: Agile values working software over comprehensive models. Extensive up-front modeling contradicts agile principles. However, if code generation is fully automated, MDA could theoretically fit iterative development.",
    "Practical Advice: For most projects, use models to THINK and COMMUNICATE, not to generate code. Class diagrams for structure, sequence diagrams for interactions, state diagrams for behavior, activity diagrams for processes."
  ],

  codeExamples: [
    {
      description: "Use Case Diagram Structure",
      language: "text",
      code: "┌─────────────────────────────────────┐\n│           System Boundary              │\n│  ┌─────────┐    ┌─────────┐           │\n│  │ Use     │    │ Use     │           │\n│  │ Case 1  │◄───│ Case 2  │           │\n│  └─────────┘    └─────────┘           │\n│        ▲              ▲               │\n└────────┼──────────────┼───────────────┘\n         │              │\n    ┌────┴────┐    ┌────┴────┐\n    │ Actor 1 │    │ Actor 2 │\n    └─────────┘    └─────────┘"
    },
    {
      description: "Class Diagram Association (Patient to Consultations)",
      language: "text",
      code: "┌───────────┐         ┌───────────────┐\n│  Patient  │         │ Consultation  │\n├───────────┤ 1    * ┌─├───────────────┤\n│ -id       │─────────│ │ -date         │\n│ -name     │         │ │ -diagnosis    │\n│ -address  │         │ │ -treatment    │\n└───────────┘         │ │ -doctor       │\n                      │ └───────────────┘\n                      │\n                      │ *        ┌─────────────┐\n                      └──────────│Prescription │\n                                 ├─────────────┤\n                                 │ -medication │\n                                 │ -dosage     │\n                                 │ -quantity   │\n                                 └─────────────┘"
    },
    {
      description: "Generalization Hierarchy",
      language: "text",
      code: "        ┌──────────┐\n        │   User   │  (superclass)\n        ├──────────┤\n        │ -name    │\n        │ -id      │\n        │ -login() │\n        └────┬─────┘\n             │\n    ┌────────┼────────┐\n    │        │        │\n┌───┴───┐ ┌──┴───┐ ┌──┴────┐\n│Doctor │ │Nurse │ │Recep- │  (subclasses)\n├───────┤ ├──────┤ │tionist│\n│special│ │ward  │ ├───────┤\n│treat()│ │admin │ │schedu-│\n└───────┘ │ister()│ │le()   │\n         └───────┘ └───────┘"
    },
    {
      description: "State Diagram for Microwave Oven",
      language: "text",
      code: "    ┌──────────┐\n    │ Waiting  │\n    └─────┬────┘\n          │ door closed /\n          │ set power\n          ▼\n    ┌──────────┐\n    │ Power    │\n    │ Set      │\n    └─────┬────┘\n          │ set time\n          ▼\n    ┌──────────┐\n    │ Timer    │\n    │ Set      │\n    └─────┬────┘\n          │ start\n          ▼\n    ┌──────────┐\n    │ Cooking  │◄────────┐\n    └─────┬────┘         │\n          │ door opened  │ timer\n          │ / stop       │ expired\n          ▼              │\n    ┌──────────┐         │\n    │ Waiting  │─────────┘\n    └──────────┘"
    },
    {
      description: "Activity Diagram for Order Processing",
      language: "text",
      code: "┌─────────────┐\n│ Receive     │\n│ Order       │\n└──────┬──────┘\n       ▼\n┌─────────────┐\n│ Validate    │\n│ Order       │\n└──────┬──────┘\n       ▼\n   ┌───┴───┐\n   │Valid? │\n   └───┬───┘\n   ┌───┴───┐\n   ▼       ▼\n┌─────┐ ┌─────┐\n│Yes  │ │No   │\n└──┬──┘ └──┬──┘\n   ▼       ▼\n┌─────┐ ┌─────┐\n│Ship │ │Rej- │\n│Order│ │ect  │\n└──┬──┘ └──┬──┘\n   ▼       ▼\n┌─────┐ ┌─────┐\n│Send │ │Send │\n│Conf │ │Rej  │\n└──┬──┘ └──┬──┘\n   ▼       ▼\n   └───┬───┘\n       ▼\n┌─────────────┐\n│ Complete    │\n└─────────────┘"
    },
    {
      description: "MDA Model Transformation Levels",
      language: "text",
      code: "CIM (Computation Independent Model)\n  - Domain abstractions\n  - \"What\" not \"how\"\n        │\n        ▼  (transformation)\nPIM (Platform Independent Model)\n  - UML models (static structure, behavior)\n  - No implementation details\n        │\n        ▼  (transformation for each platform)\n┌───────┼───────┐\n▼       ▼       ▼\nPSM    PSM     PSM\n(Java) (.NET) (Mobile)\n        │\n        ▼  (code generation)\nExecutable Code"
    }
  ],

  exercises: [
    {
      q: "List the four modeling perspectives and describe what each one shows. Give an example diagram type for each.",
      a: [
        "1. External perspective (Context models): Shows the system's environment, boundaries, and relationships with other systems. Diagram: Context diagram or system boundary diagram.",
        "2. Interaction perspective (Interaction models): Shows communication between the system and its environment, or between system components. Diagrams: Use case diagrams, Sequence diagrams.",
        "3. Structural perspective (Structural models): Shows organization of the system or structure of data. Diagram: Class diagrams.",
        "4. Behavioral perspective (Behavioral models): Shows dynamic behavior and how system responds to events. Diagrams: Activity diagrams (data-driven), State diagrams (event-driven)."
      ]
    },
    {
      q: "Explain the difference between a use case diagram and a sequence diagram. When would you use each?",
      a: [
        "Use Case Diagram: Shows actors (external entities) and use cases (discrete tasks) at a HIGH LEVEL. Shows WHAT interactions exist, but not order or detail. Best for: Requirements elicitation, showing system scope, communicating with customers.",
        "Sequence Diagram: Shows the ORDER of interactions between actors and system objects over TIME. Shows lifelines, activation periods, and messages with sequence. Best for: Detailed design, understanding communication patterns, identifying performance issues.",
        "Analogy: Use case diagram is a restaurant menu (lists what you can order); sequence diagram is the kitchen workflow (chef receives order → cooks → plates → serves)."
      ]
    },
    {
      q: "Draw (describe) a class diagram showing generalization for a university system with Person as superclass and Student and Professor as subclasses. Include at least two attributes and one operation in each.",
      a: [
        "Superclass: Person",
        "  Attributes: name (String), id (String), email (String)",
        "  Operation: login()",
        "",
        "Subclass: Student extends Person",
        "  Additional attributes: studentId (String), major (String), gpa (double)",
        "  Additional operations: enrollCourse(), submitAssignment()",
        "",
        "Subclass: Professor extends Person",
        "  Additional attributes: employeeId (String), department (String), office (String)",
        "  Additional operations: teachCourse(), gradeAssignment()",
        "",
        "Inheritance: Student and Professor inherit name, id, email, and login() from Person. Arrow from subclass to superclass with hollow triangle."
      ]
    },
    {
      q: "What is the difference between data-driven and event-driven behavioral modeling? Provide an example system for each.",
      a: [
        "Data-driven modeling: System is controlled by input data; processing follows a sequence of actions to transform input to output. Best shown with ACTIVITY DIAGRAMS.",
        "  Example: Order processing system — receives order data → validates → processes payment → updates inventory → generates shipping label → sends confirmation.",
        "",
        "Event-driven modeling: System responds to external or internal events that cause state transitions. Best shown with STATE DIAGRAMS.",
        "  Example: Phone system — events: 'receiver off hook' → state: dial tone; 'digit dialed' → state: dialing; 'call connected' → state: talking; 'receiver on hook' → state: idle.",
        "",
        "Many systems combine both: A vending machine (event-driven: coin inserted, button pressed) but also data-driven (process payment, dispense product)."
      ]
    },
    {
      q: "List the three levels of models in Model-Driven Architecture (MDA). What is the purpose of each level?",
      a: [
        "CIM (Computation Independent Model): Domain abstractions — models the important concepts in the application domain without reference to computation. Sometimes called domain models. Purpose: Understand the problem domain, communicate with domain experts.",
        "PIM (Platform Independent Model): Models system operation without reference to implementation platform. Described using UML (static structure, behavior, interactions). Purpose: Define WHAT the system does, independent of HOW it will be implemented.",
        "PSM (Platform Specific Model): Transformation of PIM for a specific platform (Java, .NET, mobile). Adds platform-specific details (e.g., JPA annotations for Java). Purpose: Adapt the design to a specific technology stack.",
        "From PSM, code can be generated automatically. In principle, a single PIM can generate multiple PSMs for different platforms, enabling portability."
      ]
    },
    {
      q: "Why has Model-Driven Engineering (MDE/MDA) not been widely adopted despite its theoretical benefits? Give at least four reasons.",
      a: [
        "1. Tool support: Specialized tools required to convert between model levels; limited tool availability; organizations may need to customize or build their own tools.",
        "2. Abstraction vs implementation conflict: Models good for facilitating discussion may not have the right abstractions for implementation. What helps humans understand may not be what code generators need.",
        "3. Implementation isn't the biggest problem: For most complex systems, requirements engineering, security, dependability, legacy integration, and testing are more significant challenges than coding.",
        "4. Rise of agile methods: Over same period MDE evolved, agile methods gained widespread adoption. Agile values working software over comprehensive models — contradicting extensive up-front modeling.",
        "5. Cost-benefit concerns: Platform-independence benefits only large, long-lifetime systems. For typical software products and information systems, savings from code generation are outweighed by tooling and training costs.",
        "6. Vendor lock-in risk: For long-lifetime systems, companies are reluctant to rely on small tool vendors that may go out of business."
      ]
    }
  ]
};