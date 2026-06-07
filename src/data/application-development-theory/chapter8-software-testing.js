// chapter8-software-testing.js

export const chapter8SoftwareTesting = {
  id: "theory-ch8",
  title: "Chapter 8: Software Testing",
  subtitle: "Development Testing, Test-Driven Development, Release Testing, and User Testing",
  badge: "Software Testing",

  contextAndPrerequisites: [
    "Recommended: Complete Chapter 5 (System Modeling) and Chapter 6 (Architectural Design)",
    "Understanding of software development process is helpful"
  ],

  realWorldAnalogy: "Software testing is like quality control in a car factory. Unit testing checks each component (brake pads, spark plugs) individually. Component testing checks assemblies (brake system, engine). System testing runs the complete car on a test track. Release testing is the final inspection before shipping. User testing is customers test-driving the car. And just like a test drive can't prove a car has NO defects — only that none were found — testing can only reveal errors, not prove their absence.",

  commonMisconceptions: [
    "Testing can prove a program is correct → TRUTH: Testing can only reveal the presence of errors, NOT their absence. Exhaustive testing is impossible.",
    "Unit testing is enough → TRUTH: Unit testing finds individual component bugs but not integration or interaction problems. Component, system, and user testing are also essential.",
    "Test-driven development means no design → TRUTH: TDD requires design — you write tests based on requirements/design, then implement to pass tests.",
    "Developers should test their own code exclusively → TRUTH: Release testing should be done by an independent team who haven't been involved in development (avoid blindness to own errors).",
    "Black-box and white-box testing are the same → TRUTH: Black-box tests from specification (what), white-box tests from code structure (how). Both are needed.",
    "Verification and validation are the same → TRUTH: Verification checks 'are we building the product right?' (conforms to spec). Validation checks 'are we building the right product?' (meets customer needs)."
  ],

  examTips: [
    "Two testing goals: Validation testing (demonstrate meets requirements, successful test = works as intended) vs Defect testing (discover faults, successful test = exposes defect)",
    "Verification vs Validation: Verification = 'Are we building the product right?' (conformance to spec). Validation = 'Are we building the right product?' (meets customer needs).",
    "Three testing stages: Unit testing (individual components in isolation) → Component testing (integrated units, focus on interfaces) → System testing (partial/complete system, focus on interactions)",
    "Unit testing strategies: Partition testing (equivalence partitions — inputs with common characteristics) and Guideline-based testing (experience from common errors)",
    "Equivalence partitioning: Input data falls into classes where program behaves equivalently. Test one from each partition (e.g., negative, zero, positive numbers).",
    "Interface error types: Interface misuse (wrong parameter order), Interface misunderstanding (incorrect assumptions), Timing errors (different operating speeds)",
    "Test-driven development (TDD) process: Identify increment → Write test → Run test (fails) → Implement code → Run test (passes) → Repeat",
    "Regression testing: Rerunning all tests after changes to ensure existing functionality still works. Automated testing makes regression testing cheap.",
    "User testing types: Alpha testing (at developer's site with developers), Beta testing (release to users for experimentation), Acceptance testing (customer decides if ready to deploy)",
    "Testing can only reveal presence of errors, NOT their absence — exhaustive testing is impossible."
  ],

  keyTakeaway: "Software testing has two goals: validation (demonstrating the system meets requirements) and defect testing (finding faults). Testing occurs at three levels: unit (individual components), component (integrated units, focus on interfaces), and system (component interactions). Test-driven development (TDD) writes tests before code, incrementally building a regression test suite. Release testing, done by an independent team, validates that the system is good enough for use. User testing (alpha, beta, acceptance) involves real users in their environment. Testing can only reveal errors, not prove their absence — exhaustive testing is impossible. Verification checks conformance to specification; validation checks customer needs.",

  furtherConnections: [
    "Links to Chapter 3: Test-driven development is central to XP and agile methods",
    "Links to Chapter 4: Requirements-based testing (each requirement has at least one test)",
    "Links to Chapter 5: Sequence diagrams and use cases for system testing scenarios",
    "Links to DDD module: Unit testing domain objects (Money, Cart) is pure unit testing"
  ],

  objectives: [
    "Distinguish between validation testing and defect testing",
    "Explain the difference between verification and validation",
    "Describe the three levels of development testing (unit, component, system)",
    "Apply equivalence partitioning and testing guidelines to select test cases",
    "Explain the test-driven development (TDD) process and its benefits",
    "Differentiate between alpha, beta, and acceptance testing"
  ],

  keyConcepts: [
    "Program Testing: Executing a program with artificial data to check results for errors. Can reveal presence of errors, NOT their absence.",
    "Validation Testing: Demonstrates that software meets its requirements. A successful test shows the system operates as intended.",
    "Defect Testing: Discovers faults where behavior is incorrect or doesn't conform to specification. A successful test exposes a defect.",
    "Verification: 'Are we building the product right?' — checking that software conforms to its specification. Static process (inspections, reviews).",
    "Validation: 'Are we building the right product?' — checking that software does what the user really requires. Dynamic process (testing).",
    "Development Testing: Testing carried out by the development team. Includes unit, component, and system testing.",
    "Unit Testing: Testing individual components in isolation (functions, methods, object classes). Focuses on functionality of the unit.",
    "Component Testing: Testing composite components made of several interacting objects. Focuses on testing component interfaces.",
    "System Testing: Testing integrated components as a partial or complete system. Focuses on testing component interactions and emergent behavior.",
    "Partition Testing (Equivalence Partitioning): Identify groups of inputs with common characteristics (equivalence partitions). Choose test cases from each partition. Program behaves equivalently for all members of a partition.",
    "Guideline-based Testing: Use testing guidelines reflecting experience of common programmer errors. Examples: test with zero-length sequences, empty inputs, boundary values, force errors.",
    "Interface Testing: Detects faults due to interface errors or invalid assumptions. Types: parameter interfaces, shared memory, procedural, message passing.",
    "Interface Error Types: Misuse (wrong parameter order), Misunderstanding (incorrect assumptions about behavior), Timing (different operating speeds, stale data).",
    "Test-Driven Development (TDD): Tests written before code. Passing tests drives development. Process: Identify increment → Write test → Run (fails) → Implement → Run (passes) → Repeat.",
    "TDD Benefits: Code coverage (every line has test), Regression testing (suite grows incrementally), Simplified debugging (failing test points to new code), System documentation (tests describe behavior).",
    "Regression Testing: Rerunning all tests after changes to ensure previously working code hasn't broken. Automated testing makes regression testing cheap and simple.",
    "Release Testing: Testing a release intended for external use. Done by independent team (not developers). Black-box testing from specification. Goal: convince supplier system is good enough.",
    "Requirements-based Testing: Examining each requirement and developing a test for it. Ensures every requirement has at least one test.",
    "Performance Testing: Testing emergent properties (performance, reliability). Gradually increase load until performance unacceptable. Stress testing deliberately overloads system.",
    "User Testing: Users provide input on testing. Essential because working environment affects reliability, performance, usability, robustness — can't be replicated in testing environment.",
    "Alpha Testing: Users test software at developer's site, working with development team.",
    "Beta Testing: Software release made available to users to experiment and raise problems.",
    "Acceptance Testing: Customers test to decide whether system is ready for deployment. Stages: Define acceptance criteria → Plan tests → Derive tests → Run tests → Negotiate results → Reject/Accept."
  ],

  content: "Software testing has two goals: validation (demonstrating the system meets requirements) and defect testing (finding faults). Testing can reveal errors but never prove their absence. Development testing occurs at three levels: unit testing (individual components in isolation), component testing (integrated units, focusing on interfaces), and system testing (component interactions and emergent behavior). Equivalence partitioning groups inputs with common characteristics to select test cases efficiently. Interface testing detects misuse, misunderstanding, and timing errors. Test-driven development (TDD) writes tests before code, creating an incremental regression test suite where all tests run after every change. Release testing, performed by an independent team, validates that the system meets requirements and is good enough for use. User testing (alpha at developer's site, beta with users, acceptance for deployment) involves real users in real environments. Verification checks conformance to specification; validation checks customer needs. Testing is essential but cannot guarantee correctness.",

  additionalKeyPoints: [
    "Testing Limitations: Testing can only show presence of errors, not their absence. Dijkstra: 'Program testing can be used to show the presence of bugs, but never to show their absence.'",
    "V&V Confidence Factors: Software purpose (critical systems need more confidence), User expectations (users may tolerate some bugs in games but not banking), Marketing environment (time-to-market vs defect finding).",
    "Inspections vs Testing: Inspections are static (no execution), can check incomplete systems, find broader quality issues (standards, maintainability). Testing is dynamic (execution), checks runtime behavior, performance, usability. They are COMPLEMENTARY.",
    "Object Class Testing Challenges: Must test all operations, set and interrogate all attributes, exercise object in all possible states. Inheritance makes testing harder because information is not localized.",
    "Automated Testing Frameworks (JUnit): Three parts — Setup (initialize inputs and expected outputs), Call (execute method under test), Assert (compare result with expected).",
    "Equivalence Partitioning Example: Testing a numeric input that accepts 1-100. Partitions: values <1 (invalid), 1-100 (valid), >100 (invalid). Test one from each partition (e.g., -5, 50, 150).",
    "Testing Guidelines for Sequences: Test with single value, different sizes, access first/middle/last elements, test with zero length. Catches off-by-one and empty collection errors.",
    "General Testing Guidelines: Force all error messages, overflow input buffers, repeat inputs numerous times, force invalid outputs, force computation results too large/small.",
    "Interface Testing Guidelines: Test parameters at extreme ranges, test pointer parameters with null pointers, cause component to fail, stress test message passing, vary activation order in shared memory.",
    "Use-case Testing: Use cases describe interactions between actors and system, involving multiple components. Testing use cases forces interactions to occur. Sequence diagrams document interactions being tested.",
    "Testing Policies Examples: All menu-accessed functions must be tested, combinations of functions from same menu must be tested, all functions tested with correct AND incorrect input.",
    "TDD and Agile: TDD introduced in Extreme Programming (XP). Works in both agile and plan-driven processes. Requires automated testing framework.",
    "Regression Test Suite: In TDD, tests accumulate as code grows. Every code segment has at least one test. All tests run after every change. If a test fails, the newly written code is the likely culprit.",
    "Release Testing vs System Testing: Release testing is done by INDEPENDENT team (not developers). Objective is validation (good enough for use). System testing by developers focuses on defect testing (finding bugs).",
    "Requirements Test Example (Mentcare): Requirement: 'If patient is allergic, prescription of that medication shall result in a warning message.' Test: Choose patient with known allergy, prescribe medication, verify warning displayed.",
    "Usage Scenario Testing: Create realistic scenario (e.g., doctor visiting patient at home) that exercises multiple features: authentication, record download/upload, encryption/decryption, record retrieval/modification, drug database links.",
    "Acceptance Testing Stages: 1. Define acceptance criteria (measurable), 2. Plan tests, 3. Derive tests (from requirements), 4. Run tests, 5. Negotiate results (if failures, decide fixes), 6. Reject or accept system.",
    "Agile Acceptance Testing: Customer is part of development team, defines tests, integrated with other tests, run automatically on changes. Problem: Is the embedded user 'typical' of all stakeholders?"
  ],

  codeExamples: [
    {
      description: "JUnit Automated Test Example",
      language: "java",
      code: "import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\npublic class MoneyTest {\n    @Test\n    public void testAdd() {\n        // Setup: create test data and expected result\n        Money ten = new Money(10);\n        Money twenty = new Money(20);\n        Money expected = new Money(30);\n        \n        // Call: execute method under test\n        Money actual = ten.add(twenty);\n        \n        // Assert: compare result with expected\n        assertEquals(expected.getAmount(), actual.getAmount());\n    }\n    \n    @Test\n    public void testConstructorRejectsNegative() {\n        assertThrows(IllegalArgumentException.class, () -> {\n            new Money(-10);\n        });\n    }\n}"
    },
    {
      description: "Equivalence Partitioning Example",
      language: "text",
      code: "Testing a function that processes employee ages (valid range: 0-120)\n\n┌─────────────────────────────────────────────────────┐\n│  Invalid -1   │   Valid 0-120   │  Invalid 121+    │\n│  (too low)    │                 │   (too high)     │\n└─────────────────────────────────────────────────────┘\n\nTest cases (one from each partition):\n- Partition 1 (invalid low): age = -5\n- Partition 2 (valid): age = 25\n- Partition 3 (invalid high): age = 999\n\nAdditional boundary tests:\n- age = 0 (minimum valid)\n- age = 120 (maximum valid)\n- age = 121 (first invalid high)"
    },
    {
      description: "Test-Driven Development (TDD) Cycle",
      language: "text",
      code: "1. Write Test\n   ┌─────────────────────────────────────┐\n   │ @Test                               │\n   │ public void testAddItemToCart() {   │\n   │     Cart cart = new Cart();          │\n   │     cart.addItem(\"prod-1\", 2, 25.99);│\n   │     assertEquals(51.98, total);     │\n   │ }                                   │\n   └─────────────────────────────────────┘\n              │\n              ▼\n2. Run Test → FAILS (no implementation yet)\n              │\n              ▼\n3. Implement Code\n   ┌─────────────────────────────────────┐\n   │ public void addItem(prodId, qty, pr){│\n   │     items.add(new Item(prodId,qty,pr));│\n   │ }                                   │\n   └─────────────────────────────────────┘\n              │\n              ▼\n4. Run Test → PASSES\n              │\n              ▼\n5. Refactor (optional)\n              │\n              ▼\n6. Repeat for next increment"
    },
    {
      description: "Unit, Component, and System Testing Levels",
      language: "text",
      code: "┌─────────────────────────────────────────────────────────────┐\n│                        SYSTEM TESTING                          │\n│              (interactions between components)                  │\n│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐         │\n│  │ Component A │◄──►│ Component B │◄──►│ Component C │         │\n│  └─────────────┘    └─────────────┘    └─────────────┘         │\n│         ▲                  ▲                  ▲                 │\n│         │                  │                  │                 │\n│    ┌────┴────┐        ┌────┴────┐        ┌────┴────┐            │\n│    │COMPONENT│        │COMPONENT│        │COMPONENT│            │\n│    │ TESTING │        │ TESTING │        │ TESTING │            │\n│    │(interface)│      │(interface)│      │(interface)│          │\n│    └────┬────┘        └────┬────┘        └────┬────┘            │\n│         ▲                  ▲                  ▲                 │\n│         │                  │                  │                 │\n│    ┌────┴────┐        ┌────┴────┐        ┌────┴────┐            │\n│    │  UNIT   │        │  UNIT   │        │  UNIT   │            │\n│    │ TESTING │        │ TESTING │        │ TESTING │            │\n│    │(isolated)│       │(isolated)│       │(isolated)│           │\n│    └─────────┘        └─────────┘        └─────────┘            │\n└─────────────────────────────────────────────────────────────┘"
    },
    {
      description: "Interface Error Types",
      language: "text",
      code: "┌─────────────────────────────────────────────────────────────┐\n│  Calling Component              Called Component              │\n│  ┌─────────────┐                ┌─────────────┐               │\n│  │             │ ──────────────► │             │               │\n│  │   Client    │    Interface    │   Server    │               │\n│  │             │ ◄────────────── │             │               │\n│  └─────────────┘                └─────────────┘               │\n│                                                                 │\n│  Interface Error Types:                                         │\n│                                                                 │\n│  1. Interface Misuse: Client calls with wrong parameters        │\n│     e.g., calculateTotal(price, quantity) called as            │\n│           calculateTotal(quantity, price)                       │\n│                                                                 │\n│  2. Interface Misunderstanding: Client assumes wrong behavior   │\n│     e.g., assumes calculateTotal returns double but returns int │\n│                                                                 │\n│  3. Timing Error: Different operating speeds                    │\n│     e.g., Client reads data before Server has updated it        │\n└─────────────────────────────────────────────────────────────┘"
    },
    {
      description: "V-Model of Testing (Verification and Validation)",
      language: "text",
      code: "Requirements ─────────────────────► Acceptance Testing\n      │                                      ▲\n      ▼                                      │\n   Design ──────────────────────────────► System Testing\n      │                                      ▲\n      ▼                                      │\nImplementation ─────────────────────────► Integration Testing\n      │                                      ▲\n      ▼                                      │\n   Code ─────────────────────────────────► Unit Testing\n\nLeft side = Verification (building product right)\nRight side = Validation (building right product)\nEach design level has a corresponding test level"
    }
  ],

  exercises: [
    {
      q: "Distinguish between validation testing and defect testing. What does a 'successful' test mean for each?",
      a: [
        "Validation Testing: Demonstrates that the software meets its requirements. A SUCCESSFUL test shows the system operates as intended (no failures).",
        "Defect Testing: Discovers faults where behavior is incorrect or doesn't conform to specification. A SUCCESSFUL test EXPOSES a defect (makes the system fail).",
        "Example: Testing a calculator's add function",
        "  - Validation test: 2 + 2 = 4 → test passes, system works as intended",
        "  - Defect test: large numbers (999999999 + 1) to check for overflow → if overflow occurs, test succeeded in finding a defect"
      ]
    },
    {
      q: "Explain the difference between verification and validation. Give an example where a system passes verification but fails validation.",
      a: [
        "Verification: 'Are we building the product right?' — checks conformance to specification. Static process (inspections, reviews).",
        "Validation: 'Are we building the right product?' — checks that the system meets customer needs. Dynamic process (testing).",
        "Example: Customer orders a system to calculate employee bonuses based on years of service and performance rating.",
        "Verification passes: System correctly implements specification (calculates exactly as written in requirements document).",
        "Validation fails: Customer realizes the formula in the specification doesn't actually reflect company policy — the 'right' product would use a different formula. The system does what was specified, but that's not what the customer needed."
      ]
    },
    {
      q: "Describe the three levels of development testing. For each, state what is being tested and the primary focus.",
      a: [
        "Unit Testing: Tests individual components in isolation (functions, methods, object classes). Focus: Testing functionality of the unit. Ensures each part works correctly alone.",
        "Component Testing: Tests composite components made of several interacting objects. Focus: Testing component interfaces. Ensures that units work together correctly when integrated.",
        "System Testing: Tests integrated components as a partial or complete system. Focus: Testing component interactions and emergent properties (behavior that emerges from interactions).",
        "Example (Weather station): Unit tests for reportWeather() method, Component tests for reconfiguration component (multiple objects), System tests for full station interacting with satellites."
      ]
    },
    {
      q: "What is equivalence partitioning? For a function that accepts integer inputs from 1 to 100 (inclusive) plus special code 0 (reset), identify the equivalence partitions and select one test case from each.",
      a: [
        "Equivalence Partitioning: Identifying groups of inputs that have common characteristics where the program behaves equivalently for all members of the class. Test one value from each partition.",
        "Partitions for this function:",
        "  - Partition 1 (special reset): input = 0",
        "  - Partition 2 (invalid low): inputs < 0 (e.g., -5)",
        "  - Partition 3 (valid range): inputs 1-100 (e.g., 50)",
        "  - Partition 4 (invalid high): inputs > 100 (e.g., 200)",
        "Additional boundary tests (good practice):",
        "  - Boundary: input = 1 (minimum valid)",
        "  - Boundary: input = 100 (maximum valid)",
        "  - Boundary: input = -1 (just below invalid low)",
        "  - Boundary: input = 101 (just above invalid high)"
      ]
    },
    {
      q: "Describe the test-driven development (TDD) process. List three benefits of TDD.",
      a: [
        "TDD Process:",
        "  1. Identify the increment of functionality required (small, few lines of code)",
        "  2. Write an automated test for this functionality",
        "  3. Run the test (fails — no implementation yet)",
        "  4. Implement the functionality",
        "  5. Run the test again (passes)",
        "  6. Refactor if needed",
        "  7. Repeat for next increment",
        "Benefits:",
        "  1. Code coverage: Every code segment has at least one associated test",
        "  2. Regression testing: Test suite grows incrementally; all tests run after every change",
        "  3. Simplified debugging: When a test fails, the newly written code is the likely culprit (not old code)",
        "  4. System documentation: Tests describe what the code should do"
      ]
    },
    {
      q: "Differentiate between alpha testing, beta testing, and acceptance testing. When is each used?",
      a: [
        "Alpha Testing: Users test software at the DEVELOPER'S site, working with the development team. Used during development, before public release. Developers can observe and fix problems immediately.",
        "Beta Testing: Software release made available to USERS in their own environment to experiment and raise problems. Used before final release. Users find bugs developers couldn't replicate. Examples: beta versions of apps, games, operating systems.",
        "Acceptance Testing: CUSTOMERS test to decide whether system is ready for deployment. Used for custom systems at the end of development. Formal process: define criteria, plan, derive tests, run, negotiate results, reject/accept.",
        "When used: Alpha (development phase) → Beta (pre-release) → Acceptance (before deployment for custom systems). Agile methods: customer is part of team, tests integrated into development, no separate acceptance phase."
      ]
    }
  ]
};