export const chapter2 = {
  id: "its-ch-2",
  title: "Chapter 2",
  subtitle: "Data Models",
  badge: "Modeling",
  
  contextAndPrerequisites: [
    "Prerequisite: Chapter 1 (understanding what databases solve)",
    "This chapter answers: 'How do we DESIGN a database before building it?'",
    "Connects to: Chapter 4 (ER modeling is a specific type of data model)"
  ],
  
  realWorldAnalogy: "Building a house without blueprints is possible — but you'll end up with outlets in the wrong places, rooms too small, and a roof that leaks. Data models are the blueprints for databases. They let you catch problems on paper before spending time and money building something wrong.",
  
  commonMisconceptions: [
    "MISCONCEPTION: Data modeling is just drawing pictures → TRUTH: It's a rigorous process that captures business rules, constraints, and relationships",
    "MISCONCEPTION: Business rules are optional nice-to-haves → TRUTH: They are requirements. Without them, your database won't match reality",
    "MISCONCEPTION: One data model fits all → TRUTH: Different levels (external, conceptual, internal) serve different audiences and purposes"
  ],
  
  examTips: [
    "Exam favorites: List and explain the three levels of abstraction (External, Conceptual, Internal)",
    "Be ready to generate business rules for a given scenario — examiners love this",
    "Know the evolution order: Hierarchical → Network → Relational → Object-Oriented → NoSQL",
    "Understand why business rules matter for constraints (e.g., 'a student can't enroll in 7 courses')"
  ],
  
  keyTakeaway: "Data models are blueprints that bridge the gap between business requirements and technical implementation — start with business rules, then build the model.",
  
  furtherConnections: [
    "Links to Chapter 4: ER diagrams are the most common implementation of data modeling",
    "Links to Chapter 5: EER adds supertypes/subtypes for more complex scenarios",
    "Links to normalization: Good data models reduce the need for heavy normalization later"
  ],
  
  objectives: [
    "Understand data modeling and why data models are important",
    "Learn basic data-modeling building blocks: entities, attributes, relationships",
    "Explore business rules and their influence on database design",
    "Review the evolution of major data models",
    "Examine levels of data abstraction: external, conceptual, internal"
  ],
  
  keyConcepts: [
    "Data models are simplified, often graphical representations of complex real-world data structures that serve as communication tools",
    "Business rules are policies that govern data and help define constraints and relationship participation",
    "Major data models evolved: Hierarchical → Network → Relational (dominant) → Object-Oriented → NoSQL/Graph",
    "Three levels of abstraction: External (user views), Conceptual (overall logical structure), Internal (physical storage)",
    "Data models reduce design complexity through abstraction and facilitate interaction among stakeholders"
  ],
  
  additionalKeyPoints: [
    "Discovering Business Rules: They standardize the company's view of data, serve as a communication tool, and help define relationship participation rules and constraints",
    "Linking Tables Example (Figure 2.1): Shows how the AGENT and CUSTOMER tables are connected via AGENT_CODE — a foundational concept for relational design",
    "XML and Object/Relational Models: XML became the standard for data exchange on the internet; modern DBMSs support it for interoperability",
    "Added Advice: When building a data model, start by collecting business rules from stakeholders — they are more important than you might initially think"
  ],
  
  content: "Data modeling is an iterative process that reduces design complexity through abstraction. Always start by collecting business rules from stakeholders—they are more important than you might think.",
  
  exercises: [
    {
      q: "For a university registration system, create 8 meaningful business rules.",
      a: [
        "A student cannot enroll in more than 6 courses per semester",
        "A course must have at least 10 students to run",
        "Students must complete prerequisites before enrolling in advanced courses",
        "A student's GPA must be ≥2.0 to register for the next semester",
        "A professor can teach a maximum of 4 courses per semester",
        "A course section has a maximum capacity of 40 students",
        "Tuition must be paid in full before grades are released",
        "A student can repeat a course at most 3 times"
      ]
    },
    {
      q: "What are the three levels of data abstraction? Why are they important?",
      a: [
        "External level: User views - different users see different subsets of data",
        "Conceptual level: Overall logical structure - describes what data is stored and relationships",
        "Internal level: Physical storage - how data is stored, indexed, and organized",
        "Importance: Provides data independence - changes at one level don't affect others, reduces complexity, allows multiple perspectives"
      ]
    },
    {
      q: "For a gym membership management system, list: at least 6 entities, key attributes for each, and at least 4 relationships.",
      a: [
        "Entities: Member (MemberID, Name, JoinDate, DOB, Phone)",
        "Entities: MembershipPlan (PlanID, Type, Price, DurationMonths)",
        "Entities: Visit (VisitID, Date, CheckInTime, CheckOutTime)",
        "Entities: Trainer (TrainerID, Name, Specialization, HireDate)",
        "Entities: Session (SessionID, DateTime, DurationMinutes)",
        "Entities: Payment (PaymentID, Amount, Date, PaymentMethod)",
        "Relationships: Member has one MembershipPlan (N:1)",
        "Relationships: Member makes many Visits (1:N)",
        "Relationships: Trainer conducts many Sessions (1:N)",
        "Relationships: Member books many Sessions (N:M, through Booking table)"
      ]
    },
    {
      q: "Explain how the external, conceptual, and internal views of data would differ for a banking system from different perspectives.",
      a: [
        "Customer (external view): sees only their own accounts, balances, recent transactions",
        "Teller (external view): sees customer info for anyone, can perform transactions, view multiple accounts",
        "DBA (conceptual view): sees all tables (Customer, Account, Transaction, Branch), their relationships and constraints",
        "DBA (internal view): sees indexes, partitions, storage allocations, buffer pool settings, security schemas"
      ]
    },
    {
      q: "Identify entities, attributes, and relationships for a small library system. Write 5 relevant business rules.",
      a: [
        "Entities: Book (ISBN, Title, Author, Year), Member (MemberID, Name, Phone, JoinDate), Loan (LoanID, DueDate, ReturnDate)",
        "Business Rule 1: A member can borrow a maximum of 5 books at a time",
        "Business Rule 2: Books can be borrowed for 14 days maximum",
        "Business Rule 3: Overdue books incur a fine of R5 per day",
        "Business Rule 4: Members with outstanding fines > R100 cannot borrow new books",
        "Business Rule 5: Reference books cannot be borrowed (in-library use only)"
      ]
    }
  ]
};