export const chapter1 = {
  id: "its-ch-1",
  title: "Chapter 1",
  subtitle: "The Database Approach",
  badge: "Foundation",
  
  contextAndPrerequisites: [
    "No strict prerequisites — this is the foundation chapter for the entire course",
    "Assumes you understand basic computer concepts (files, folders, applications)",
    "Connects to: Every subsequent chapter builds on the 'why databases' argument"
  ],
  
  realWorldAnalogy: "Think of a file system as separate filing cabinets in different offices — accounting has one, sales has another, management has a third. Same customer appears in three places, addresses get out of sync, and no one has the complete picture. A database is one central filing cabinet everyone shares, with a librarian (the DBMS) controlling who sees what.",
  
  commonMisconceptions: [
    "MISCONCEPTION: 'Database' and 'DBMS' are the same thing → TRUTH: The database is the actual data; the DBMS is the software that manages it (like MySQL, PostgreSQL)",
    "MISCONCEPTION: Spreadsheets are fine for small businesses → TRUTH: Spreadsheets lack concurrency control, security, and data integrity — they become problematic as soon as multiple people need access",
    "MISCONCEPTION: Data and information are interchangeable → TRUTH: Data is raw material, information is processed product"
  ],
  
  examTips: [
    "Exam favorites: List problems of file systems (redundancy, inconsistency, security, maintenance, standards, sharing)",
    "Be ready to explain data vs information with original examples (not textbook ones)",
    "Know the 5 components: Hardware, Software (DBMS), People, Data, Procedures"
  ],
  
  keyTakeaway: "A DBMS solves the six fatal flaws of file systems: redundancy, inconsistency, poor security, difficult maintenance, no standards, and no sharing.",
  
  furtherConnections: [
    "Links to Chapter 2: Data models are how we design the database that solves these problems",
    "Links to Chapter 3: The relational model is the dominant DBMS type that implements these solutions",
    "Links to later chapters: Transactions (concurrency), Security, Backup/Recovery"
  ],
  
  objectives: [
    "Differentiate between data (raw facts) and information (processed, meaningful data)",
    "Define what a database is and its value for decision-making",
    "Explore different types of databases and why database design matters",
    "Understand the evolution from file systems to modern databases",
    "Learn the main components and functions of a Database Management System (DBMS)"
  ],
  
  keyConcepts: [
    "Databases solve data management problems found in file systems: redundancy, inconsistency, lack of security, difficult maintenance, lack of standards, and no data sharing",
    "A DBMS acts as an intermediary between users and the physical database, enabling data sharing and integrating multiple users' views",
    "Database system components: Hardware, software (DBMS), people (users, administrators, designers), data, and procedures",
    "Data independence (structural and data) is a key advantage over file systems",
    "Provides concurrency control, security, and better integration"
  ],
  
  additionalKeyPoints: [
    "Role of the DBMS: Acts as an intermediary between users and the physical database. It enables data sharing and integrates multiple users' views of the same data",
    "Types of Data/Databases: Structured data (highly organized, e.g., relational tables), Unstructured data (raw form, e.g., text documents, videos), Semistructured data (partially organized, e.g., XML databases)",
    "Evolution Insight: File systems started like manual systems but became fragmented as applications multiplied, each owning its own files",
    "Practical Tip: Always evaluate a database solution based on how well it handles data independence (structural + data) compared to old file systems"
  ],
  
  content: "Good decisions depend on good information derived from raw data. Databases solve many data management problems encountered in file systems, such as redundancy, inconsistency, and lack of security.",
  
  exercises: [
    {
      q: "Compare the file system approach vs. database approach for a university registration system. List at least 5 problems solved by using a DBMS.",
      a: [
        "Data redundancy eliminated through centralized storage",
        "Data inconsistency removed by single source of truth",
        "Improved security with user access controls",
        "Better data integrity with constraints",
        "Concurrent access without corruption",
        "Standardized data formats across the organization"
      ]
    },
    {
      q: "Explain the difference between data and information with examples.",
      a: [
        "Data = raw, unprocessed facts (e.g., '85', 'Smith', 'A')",
        "Information = processed, organized data that has meaning (e.g., 'John Smith scored 85%, earning an A grade')",
        "Information is data put into context for decision-making"
      ]
    },
    {
      q: "Give three examples of raw data and convert each into useful information in the context of a university.",
      a: [
        "Raw data: '75' → Information: 'Student scored 75%, earning a B grade in CS101'",
        "Raw data: '2024-05-15' → Information: 'Enrollment deadline is May 15, 2024 - 3 days remaining'",
        "Raw data: '400' → Information: 'Current library fines total R400, payment due within 7 days'"
      ]
    },
    {
      q: "A small law firm stores client information in separate Word/Excel files for each case. Identify at least six problems this approach causes and explain how a DBMS would solve each one.",
      a: [
        "Data redundancy - same client info repeated across cases → DBMS stores once, referenced many times",
        "Data inconsistency - address changes might not update everywhere → DBMS has single source of truth",
        "Poor security - files accessible to anyone → DBMS has user authentication and row/column-level permissions",
        "Difficult maintenance - updating structure requires changing every file → DBMS alters schema once",
        "Lack of standards - different formats across files → DBMS enforces consistent data types and constraints",
        "No data sharing - difficult to query across cases → DBMS provides SQL for complex cross-case queries"
      ]
    },
    {
      q: "Why would a hospital benefit more from a database system than from file-based systems when managing patient records, appointments, and billing?",
      a: [
        "Real-time patient record access across departments (ER, radiology, pharmacy)",
        "Coordinated appointment scheduling prevents double-booking",
        "Accurate billing integration between services and insurance",
        "Audit trails for compliance with medical regulations (HIPAA/POPIA)",
        "Concurrent access by multiple staff without file locks",
        "Automated data backup and disaster recovery"
      ]
    }
  ]
};