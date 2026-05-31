export const chapter4 = {
  id: "its-ch-4",
  title: "Chapter 4",
  subtitle: "Entity Relationship (ER) Modeling",
  badge: "ERD",
  
  contextAndPrerequisites: [
    "Prerequisite: Chapter 2 (understanding data model building blocks)",
    "This chapter answers: 'How do I VISUALLY design a database before building it?'",
    "Connects to: Chapter 3 (ERDs map to relational tables), Chapter 5 (EER extends ER), Chapter 6 (normalization refines the design)"
  ],
  
  realWorldAnalogy: "ER diagrams are like architect's blueprints for a house. Before you pour concrete (build tables), you draw walls, doors, and windows (entities, attributes, relationships). ERDs let stakeholders — who may not understand SQL — see and approve the design before you build.",
  
  commonMisconceptions: [
    "MISCONCEPTION: An entity is a row in a table → TRUTH: An entity corresponds to a TABLE, not a row. The table contains many ENTITY INSTANCES (rows)",
    "MISCONCEPTION: Relationships are always symmetric → TRUTH: Relationships have direction. 'Student enrolls in Course' is not the same as 'Course contains Student'",
    "MISCONCEPTION: M:N relationships can stay M:N → TRUTH: In implementation, M:N must be resolved with an associative table (bridge table)"
  ],
  
  examTips: [
    "Exam favorites: Draw ERDs from a scenario description (practice this!)",
    "Understand connectivity (1:1, 1:N, M:N) and cardinality (min,max) — examiners love asking for both",
    "Know Chen vs Crow's Foot differences — be able to read both",
    "Strong vs weak entities is a common question"
  ],
  
  keyTakeaway: "ER modeling is the most important skill for database design. Master it, and you can translate any business requirement into a database structure. Rushing to SQL without an ERD is like building without blueprints.",
  
  furtherConnections: [
    "Links to Chapter 3: ERDs map directly to relational tables (entities→tables, attributes→columns, relationships→foreign keys)",
    "Links to Chapter 5: EER adds supertypes/subtypes for inheritance",
    "Links to Chapter 6: Good ER design reduces normalization work later"
  ],
  
  objectives: [
    "Learn main characteristics of ER components",
    "Define, refine, and incorporate relationships into database design",
    "Understand how ERD components affect design and implementation",
    "Recognize that real-world design often reconciles conflicting goals"
  ],
  
  keyConcepts: [
    "Entities (nouns, represented as rectangles) correspond to tables (not rows). Entity set vs. single occurrence",
    "Attributes (characteristics of entities): Chen Notation uses ovals, Crow's Foot lists in box below entity",
    "Relationships show associations between entities",
    "Connectivity: 1:1, 1:N, M:N relationships",
    "Cardinality specifies minimum and maximum participation (e.g., (1,1), (0,N))",
    "Relationship strength: Strong (identifying) vs. Weak (non-identifying) relationships"
  ],
  
  additionalKeyPoints: [
    "Connectivity and Cardinality (Figure 4.7): Connectivity = 1:1, 1:N, M:N. Cardinality = minimum and maximum participation (e.g., (1,1), (0,N))",
    "Relationship Strength: Strong (identifying) vs. Weak (non-identifying) relationships",
    "Developing an ERD is highly iterative: 1) Create narrative of operations, 2) Identify business rules, 3) Identify main entities/relationships, 4) Build initial ERD → Add attributes/keys → Review & refine",
    "Pro Tip: Use Crow's Foot notation for implementation-focused designs (most CASE tools use it)"
  ],
  
  content: "ER modeling is the foundation for conceptual database design. Crow's Foot notation is preferred for most implementation-focused work as it's widely supported in CASE tools (Lucidchart, draw.io, ER/Studio).",
  
  comparisonTable: {
    title: "Chen vs Crow's Foot Notation",
    subtitle: "Comparison of ER Diagram Notations",
    badge: "Chapter 4",
    headers: ["Aspect", "Chen Notation", "Crow's Foot Notation"],
    rows: [
      ["Entity", "Rectangle", "Rectangle"],
      ["Attributes", "Ovals connected by lines", "Listed in attribute box below entity"],
      ["Relationships", "Diamond shape", "Line with symbols at ends"],
      ["Cardinality", "Numbers (1, N, M) near lines", "Crow's foot, circles, bars for (0,1,N)"],
      ["Visual Style", "More academic, detailed", "Cleaner, implementation-oriented"],
      ["Tool Support", "Less common in modern CASE tools", "Widely supported (Lucidchart, draw.io, etc.)"],
      ["Best For", "Conceptual understanding", "Practical database design & implementation"]
    ]
  },
  
  exercises: [
    {
      q: "Draw a Crow's Foot ERD for a Car Rental Company including CUSTOMER, CAR, RENTAL, and BRANCH. Include attributes and cardinalities.",
      a: [
        "Cardinalities: CUSTOMER (1) — (N) RENTAL — (1) CAR",
        "Cardinalities: BRANCH (1) — (N) CAR",
        "A Customer can have many Rentals (1:N relationship)",
        "A Rental has exactly one Car (1:1 at time of rental)",
        "A Branch has many Cars (1:N relationship)",
        "A Car belongs to exactly one Branch (N:1 relationship)",
        "Rental is an associative entity resolving the M:N between Customer and Car"
      ]
    },
    {
      q: "Give real-world examples of 1:1, 1:N, and M:N relationships.",
      a: [
        "1:1 - Person to Passport (each person has one passport, each passport belongs to one person)",
        "1:1 - Country to Capital City (each country has one capital, each capital belongs to one country)",
        "1:N - Department to Employees (one department has many employees, each employee belongs to one department)",
        "1:N - Customer to Orders (one customer can place many orders, each order belongs to one customer)",
        "M:N - Students to Courses (many students take many courses, resolved with Enrollment table)",
        "M:N - Doctors to Patients (many doctors see many patients, resolved with Appointment table)"
      ]
    },
    {
      q: "Differentiate between strong and weak entities with examples.",
      a: [
        "Strong entity: Exists independently, has its own primary key (e.g., STUDENT, COURSE, DEPARTMENT)",
        "Weak entity: Existence depends on a strong entity, has no unique key of its own (e.g., DEPENDENT cannot exist without EMPLOYEE)",
        "Weak entities use a partial key combined with foreign key from strong entity",
        "Example: COURSE (strong) and SECTION (weak) - sections don't exist without a course",
        "In ERD, weak entities are represented with a double rectangle"
      ]
    },
    {
      q: "Draw an ERD (Crow's Foot) for a simple hospital system (Patient, Doctor, Appointment). Include attributes and cardinalities.",
      a: [
        "Entities: Patient (PatientID, Name, DOB, Phone), Doctor (DoctorID, Name, Specialty, Room), Appointment (ApptID, DateTime, Reason)",
        "Cardinalities: Doctor (1) — (N) Appointment — (N) (1) Patient",
        "A Doctor has many Appointments (1:N)",
        "A Patient has many Appointments (1:N)",
        "Appointment is an associative entity linking Doctor and Patient (resolves M:N)",
        "Attributes: Appointment includes Date, Time, Reason, Status (Scheduled/Completed/Cancelled)"
      ]
    },
    {
      q: "Describe the relationships for a university with STUDENT, COURSE, and PROFESSOR. A student can take many courses, a course has many students. A professor teaches many courses.",
      a: [
        "STUDENT and COURSE have M:N relationship (enrollment)",
        "PROFESSOR and COURSE have 1:N relationship (teaches)",
        "COURSE acts as an associative entity between STUDENT and PROFESSOR",
        "The M:N enrollment is resolved with an ENROLLMENT table (StudentID, CourseID, Grade, Semester)",
        "A student can enroll in courses from different professors",
        "A professor can teach multiple sections of the same course"
      ]
    }
  ]
};