// chapter4-requirements-engineering.js

export const chapter4RequirementsEngineering = {
  id: "theory-ch4",
  title: "Chapter 4: Requirements Engineering",
  subtitle: "Functional & Non-functional Requirements, Elicitation, Specification, Validation, and Change Management",
  badge: "Requirements Engineering",

  contextAndPrerequisites: [
    "Recommended: Complete Chapter 2 (Software Processes) and Chapter 3 (Agile) first",
    "Understanding of software process activities (specification phase) is helpful"
  ],

  realWorldAnalogy: "Requirements engineering is like planning a custom-built house. You start with vague ideas ('I want a modern kitchen'), then work with an architect to clarify (size, appliances, layout), then produce detailed blueprints that contractors can build from. Along the way, you discover things you forgot (storage space, outlet locations), and when construction starts, you inevitably want changes. The more precise the blueprint, the fewer surprises — but customers rarely know exactly what they want until they see something real.",

  commonMisconceptions: [
    "Requirements are what the system will do; design is how → TRUTH: In practice, requirements and design are inseparable — architecture choices affect requirements, and requirements constrain design options",
    "A complete requirements document is possible → TRUTH: Due to system and environmental complexity, it's impossible to produce a completely consistent and complete requirements document",
    "Non-functional requirements are less important than functional → TRUTH: Non-functional requirements (safety, security, reliability) may be MORE critical — if not met, the system may be useless",
    "Agile methods reject requirements documentation → TRUTH: Agile uses incremental requirements engineering (user stories), not zero documentation; but detailed pre-delivery analysis is still needed for critical systems",
    "Stakeholders know what they want → TRUTH: Stakeholders often don't know what they really want, express requirements poorly, have conflicting needs, and change their minds"
  ],

  examTips: [
    "Two types of requirements documents: User requirements (natural language, for customers) and System requirements (detailed, structured, may be part of contract)",
    "Functional requirements: Statements of services the system should provide (what)",
    "Non-functional requirements: Constraints on services or development (quality attributes, standards, regulations)",
    "Non-functional classifications: Product requirements (speed, reliability), Organizational requirements (process standards), External requirements (legislation, interoperability)",
    "Requirements validation checks (5): Validity, Consistency, Completeness, Realism, Verifiability",
    "Requirements elicitation problems: Stakeholders don't know what they want, express in their own terms, conflicting requirements, political factors, requirements change during analysis",
    "Requirements change costs: Fixing a requirements error after delivery costs up to 100× the cost of fixing an implementation error",
    "Requirements management activities: Problem analysis → Change analysis & costing → Change implementation",
    "Metrics for non-functional requirements: Speed (e.g., processed transactions/sec), Size (MB), Reliability (mean time to failure), Usability (training time, errors per hour)"
  ],

  keyTakeaway: "Requirements engineering establishes what services a customer needs and the constraints under which the system operates. Functional requirements describe what the system should do; non-functional requirements constrain how it does it (performance, security, usability, reliability). The RE process is iterative, combining elicitation (discovering requirements), specification (documenting them), and validation (checking them). Challenges include ambiguous natural language, conflicting stakeholder needs, and the impossibility of complete consistency. Requirements change is inevitable — management processes must track changes, assess impact, and control evolution. Requirements errors are the most expensive to fix, making validation critical. Agile methods use incremental requirements (user stories) but detailed pre-delivery analysis remains essential for critical systems.",

  furtherConnections: [
    "Links to Chapter 2: Requirements engineering as the first process activity (specification)",
    "Links to Chapter 3: User stories as agile requirements, challenges of requirements change in agile",
    "Links to Chapter 5: Validation and test-case generation from requirements",
    "Links to DDD module: Domain requirements connect to domain models"
  ],

  objectives: [
    "Differentiate between functional and non-functional requirements",
    "Distinguish user requirements from system requirements",
    "Describe the requirements engineering process (elicitation, specification, validation)",
    "Explain requirements elicitation techniques (interviews, ethnography, scenarios)",
    "Understand requirements specification formats (natural language, structured, tabular, use cases)",
    "Apply requirements validation checks (validity, consistency, completeness, realism, verifiability)",
    "Explain requirements change management process"
  ],

  keyConcepts: [
    "Requirement: Description of a system service or constraint. Ranges from high-level abstract statement to detailed mathematical specification. Serves dual function — open for contract bidding, but detailed for contract itself.",
    "User Requirements: Natural language statements plus diagrams, written for customers. Describe services and operational constraints at a high level.",
    "System Requirements: Structured document with detailed descriptions of functions, services, and constraints. Defines what should be implemented — may be part of contract.",
    "Functional Requirements: Statements of services the system should provide, how it reacts to inputs, how it behaves in situations. May state what the system should NOT do.",
    "Non-functional Requirements: Constraints on services or functions — timing constraints, development process constraints, standards. Often apply to system as a whole, not individual features.",
    "Non-functional Classifications: Product requirements (execution speed, reliability, size), Organizational requirements (process standards, implementation requirements), External requirements (interoperability, legislative, ethical).",
    "Domain Requirements: Constraints derived from the application domain (e.g., medical regulations, aviation standards). Often assumed by domain experts but must be explicitly stated.",
    "Requirements Elicitation: Process of discovering requirements through interviews, ethnography, scenarios, prototyping. Involves stakeholders — end-users, managers, domain experts, regulators.",
    "Requirements Elicitation Problems: Stakeholders don't know what they want, express in own terms, conflicting requirements, political factors, requirements change during analysis.",
    "Requirements Validation: Demonstrating that requirements define what customer really wants. Checks: Validity (right functions?), Consistency (no conflicts?), Completeness (all functions?), Realism (achievable?), Verifiability (testable?).",
    "Requirements Validation Techniques: Reviews (systematic manual analysis), Prototyping (executable model to check requirements), Test-case generation (develop tests to check testability).",
    "Requirements Management: Process of managing changing requirements during RE and development. Includes: requirements identification (unique IDs), change management process, traceability policies, tool support.",
    "Requirements Change Management Process: Problem analysis (validate change request) → Change analysis & costing (assess impact) → Change implementation (modify document, design, code).",
    "Requirements Error Costs: Fixing a requirements error after delivery may cost 100× the cost of fixing an implementation error. Validation is critical.",
    "Natural Language Specification Problems: Lack of clarity (precision difficult), Requirements confusion (functional/non-functional mixed), Requirements amalgamation (multiple requirements expressed together).",
    "Structured Specifications: Limiting freedom of requirements writer, using standard formats. Works well for embedded control systems, sometimes too rigid for business systems.",
    "Use Cases: UML-based scenarios identifying actors and interactions. Describe all possible interactions with system. High-level graphical model supplemented by detailed tabular description.",
    "Requirements Document Structure: Preface, Introduction, Glossary, User requirements definition, System architecture, System requirements specification, System models, System evolution, Appendices, Index."
  ],

  content: "Requirements engineering establishes the services a customer requires from a system and the constraints under which it operates. Functional requirements describe system services; non-functional requirements constrain system properties (performance, security, reliability) and the development process. User requirements use natural language for customers; system requirements provide detailed specifications potentially used in contracts. The RE process is iterative — elicitation (discovering requirements via interviews, ethnography, scenarios), specification (documenting in natural language, structured formats, or use cases), and validation (checking for validity, consistency, completeness, realism, verifiability). Problems are pervasive — stakeholders don't know what they want, express needs poorly, conflict, and change their minds. Natural language specifications suffer from lack of clarity, requirement confusion, and amalgamation. Structured and tabular specifications help for specific domains. Requirements change is inevitable due to evolving business, technical, and regulatory environments. Requirements management tracks changes, assesses impact, and controls implementation. Requirements errors are the most expensive to fix — validation is critical.",

  additionalKeyPoints: [
    "Requirements Abstraction (Davis quote): Contract requirements must be abstract enough for multiple bidders; after contract award, detailed specification for validation.",
    "Stakeholder Types: End users (use the system), System managers (oversee operations), System owners (fund/pay for system), External stakeholders (regulators, auditors, unions).",
    "Mentcare System Stakeholders (example): Patients, Doctors, Nurses, Receptionists, IT staff, Medical ethics manager, Healthcare managers, Medical records staff.",
    "Requirements Imprecision Example: 'A user shall be able to search the appointments lists for all clinics.' Developer interpreted as search within one clinic (user selects clinic first); Customer intended search across ALL clinics. Ambiguity causes implementation errors.",
    "Requirements Completeness & Consistency: In principle required, in practice impossible due to system/environmental complexity.",
    "Non-functional vs Functional Criticality: A safety-critical system that meets all functional requirements but fails reliability requirements is useless (e.g., aircraft control system that crashes).",
    "Goal vs Verifiable Requirement: Goal: 'System should be easy to use.' Verifiable: 'Medical staff shall use all functions after 4 hours training; average errors ≤ 2 per hour.'",
    "Metrics Table Examples: Speed (transactions/sec, response time), Size (MB, ROM), Reliability (mean time to failure, probability of failure), Usability (training time, error rate), Security (access control levels, encryption strength).",
    "Spiral View of RE: Requirements elicitation → specification → validation → repeat. Iterative, not sequential.",
    "Interview Types: Closed (predetermined questions) and Open (explore issues). Effective interviewing requires being open-minded, prompting with springboard questions or prototypes.",
    "Ethnography: Social scientist observes how people actually work (not how process definitions say they should work). Effective for understanding existing processes, cooperation, awareness of others' activities. Cannot identify new features.",
    "Focused Ethnography: Combines ethnography with prototyping — unanswered questions from prototyping focus ethnographic analysis.",
    "Scenario Structure: Starting situation, Normal flow of events, What can go wrong, Other concurrent activities, State when scenario finishes.",
    "Requirements vs Design Inseparability: System architecture may structure requirements; interoperation with other systems generates design requirements; specific architecture for non-functional requirements may be domain requirement.",
    "Natural Language Guidelines: Standard format, consistent language (shall=madatory, should=desirable), text highlighting, avoid computer jargon, include rationale.",
    "Form-based Specification Components: Function/entity definition, Inputs (source), Outputs (destination), Information needed, Action description, Pre/post conditions, Side effects.",
    "Tabular Specification: Useful for multiple alternative courses of action (e.g., insulin pump computing insulin requirement based on blood sugar change rate).",
    "Requirements Document Users: Customers (specify requirements), Managers (plan process), Engineers (implement system), Test engineers (develop tests), Maintenance engineers (understand system).",
    "Requirements Management Decisions: Requirements identification (unique IDs), Change management process, Traceability policies, Tool support (specialist tools, spreadsheets, databases).",
    "Reasons for Requirements Change: Business/technical environment changes, Different stakeholders (payers vs users), Diverse user community with conflicting priorities."
  ],

  codeExamples: [
    {
      description: "Functional vs Non-functional Requirements (Mentcare system)",
      language: "text",
      code: "FUNCTIONAL REQUIREMENTS (what the system does):\n- A user shall be able to search appointments lists for all clinics.\n- The system shall generate, for each clinic, a list of patients expected that day.\n- Each staff member shall be uniquely identified by their 8-digit employee number.\n\nNON-FUNCTIONAL REQUIREMENTS (constraints on how):\n- Safety: The system shall not disclose patient information without consent.\n- Security: All network communication shall be encrypted using TLS 1.2+.\n- Reliability: System uptime shall be 99.99% during operating hours.\n- Usability: Medical staff shall use all functions after 4 hours training."
    },
    {
      description: "Requirements Elicitation Spiral Process",
      language: "text",
      code: "Requirements Discovery (gather from stakeholders)\n        ↓\nClassification & Organization (group related requirements)\n        ↓\nPrioritization & Negotiation (resolve conflicts, rank priorities)\n        ↓\nRequirements Specification (document)\n        ↓\n↺ (repeat — spiral continues)"
    },
    {
      description: "Structured Specification Format (Insulin Pump Example)",
      language: "text",
      code: "Function: Compute insulin dose\n\nDescription: Computes the insulin dose to be delivered based on current blood sugar level and rate of change.\n\nInputs:\n- Current blood sugar level (mg/dL, range 0-600)\n- Rate of change (mg/dL per minute)\n- Previous insulin dose (units)\n\nOutputs:\n- Recommended insulin dose (units, 0-25)\n\nPre-conditions:\n- Blood sugar sensor is calibrated\n- Patient is not in hypoglycemic state\n\nPost-conditions:\n- Dose is recorded in delivery log\n- Alert triggered if dose exceeds threshold\n\nSide effects:\n- Insulin reservoir level decreased\n- Patient record updated"
    },
    {
      description: "Tabular Specification for Insulin Pump Computation",
      language: "text",
      code: "| Blood Sugar Level | Rate of Change | Insulin Dose |\n|-------------------|----------------|--------------|\n| < 70 (LOW)        | Any            | 0 (no insulin)|\n| 70-120 (Normal)   | Falling        | 0            |\n| 70-120 (Normal)   | Stable         | 1 unit       |\n| 70-120 (Normal)   | Rising         | 2 units      |\n| 120-180 (Elevated)| Any            | calculate = (level-120)/20 |\n| > 180 (High)      | Any            | calculate + 2 units |"
    },
    {
      description: "Requirements Validation Checks",
      language: "text",
      code: "Validity: Does the system provide the functions that best support the customer's needs?\n\nConsistency: Are there any requirements conflicts?\n\nCompleteness: Are all functions required by the customer included?\n\nRealism: Can the requirements be implemented given available budget and technology?\n\nVerifiability: Can the requirements be tested?"
    },
    {
      description: "Requirements Change Management Process",
      language: "text",
      code: "Problem Analysis & Change Specification\n(validate request, clarify change)\n        ↓\nChange Analysis & Costing\n(assess impact using traceability, estimate effort)\n        ↓\nDecision: Accept or Reject Change\n        ↓\nChange Implementation\n(modify requirements document, design, implementation)"
    }
  ],

  exercises: [
    {
      q: "Explain the difference between functional and non-functional requirements. Give two examples of each for an online banking system.",
      a: [
        "Functional requirements describe WHAT the system should do — specific services, reactions to inputs, behaviors in situations.",
        "Non-functional requirements describe CONSTRAINTS on how the system does it — quality attributes, development standards, regulations.",
        "Online banking functional examples:",
        "  - User shall be able to transfer funds between accounts",
        "  - System shall display account balance on request",
        "  - System shall generate monthly statements",
        "Online banking non-functional examples:",
        "  - All transactions shall complete within 2 seconds (performance)",
        "  - User accounts shall be locked after 3 failed login attempts (security)",
        "  - System uptime shall be 99.99% during business hours (reliability)",
        "  - User shall be able to perform all functions after 15 minutes training (usability)"
      ]
    },
    {
      q: "List and describe the five requirements validation checks. Why is validation more critical than implementation testing?",
      a: [
        "Validity: Does the system provide functions that support customer's actual needs? (right system?)",
        "Consistency: Are there conflicts or contradictions between requirements?",
        "Completeness: Are all required functions included? Nothing missing?",
        "Realism: Can requirements be implemented with available budget, time, technology?",
        "Verifiability: Can requirements be objectively tested?",
        "Validation is MORE critical because:",
        "  - Fixing a requirements error after delivery costs up to 100× fixing an implementation error",
        "  - If requirements are wrong, everything built from them is wrong",
        "  - Implementation errors affect single components; requirements errors affect entire system"
      ]
    },
    {
      q: "Describe three problems with natural language requirements specification. For each, suggest a mitigation technique.",
      a: [
        "Problem 1 — Lack of clarity: Natural language is imprecise, ambiguous. Mitigation: Use structured or tabular formats for critical requirements; add diagrams; use consistent keywords (shall/must for mandatory, should for desirable).",
        "Problem 2 — Requirements confusion: Functional and non-functional requirements get mixed together. Mitigation: Separate sections for functional vs non-functional; use distinct formatting or labeling.",
        "Problem 3 — Requirements amalgamation: Multiple requirements expressed as one statement. Mitigation: Enforce standard format where each requirement is a single sentence; review to split compound requirements; use numbering for traceability.",
        "Additional mitigation: Invent standard format, use text highlighting, avoid computer jargon, include rationale for each requirement."
      ]
    },
    {
      q: "You are eliciting requirements for a hospital patient management system. Identify at least six different stakeholders and explain what each might need from the system.",
      a: [
        "Patients: Need access to appointment scheduling, test results, prescription information; concerned about privacy and data security.",
        "Doctors: Need quick access to patient histories, test results, prescription records; ability to update diagnoses and treatment plans.",
        "Nurses: Need to coordinate consultations, administer treatments, record vitals, view doctor instructions.",
        "Receptionists: Need to manage appointments, check patients in/out, update contact information, handle billing.",
        "IT staff: Need to install/maintain system, manage backups, ensure security compliance, troubleshoot issues.",
        "Hospital managers: Need management reports (admissions, wait times, resource utilization), budget tracking, compliance reporting.",
        "Medical records staff: Need to maintain record integrity, manage retention policies, ensure proper documentation procedures.",
        "Medical ethics manager: Need to ensure system complies with ethical guidelines, consent management, data protection regulations."
      ]
    },
    {
      q: "Explain the difference between user requirements and system requirements. Why are both needed?",
      a: [
        "User requirements: Natural language statements plus diagrams, written for customers. High-level description of services and constraints. Customers and end-users must understand them.",
        "System requirements: Structured, detailed descriptions of functions, services, and constraints. May be part of contract between client and contractor. Developers use them to implement the system.",
        "Why both are needed:",
        "  - Customers cannot validate detailed technical specifications — they need understandable language",
        "  - Developers cannot implement from vague high-level statements — they need precise details",
        "  - User requirements serve as basis for contract bidding (abstract enough for multiple solutions)",
        "  - System requirements serve as contract after award (detailed enough to define deliverables)"
      ]
    },
    {
      q: "What is the cost ratio for fixing requirements errors at different stages? Why does the cost increase so dramatically?",
      a: [
        "Typical cost ratios (from research):",
        "  - Requirements phase: 1× (base cost)",
        "  - Design phase: 3-6×",
        "  - Implementation phase: 10×",
        "  - Testing phase: 15-40×",
        "  - After delivery: 60-100×",
        "Why costs increase dramatically:",
        "  - Later fixes require rework of multiple stages (requirements → design → code → tests)",
        "  - Dependencies: One requirements change may affect many components",
        "  - Documentation: Requirements, design documents, test plans all need updates",
        "  - Regression testing: Entire system must be retested",
        "  - Deployment: Already-deployed systems require patches, updates, customer coordination",
        "This is why requirements validation is critical — catch errors early!"
      ]
    }
  ]
};