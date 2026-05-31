export const chapter3 = {
  id: "its-ch-3",
  title: "Chapter 3",
  subtitle: "The Relational Database Model",
  badge: "Relational",
  
  contextAndPrerequisites: [
    "Prerequisite: Chapter 2 (understanding data models and business rules)",
    "This chapter answers: 'What does a database actually LOOK like?'",
    "Connects to: Chapter 4 (ER models map to relational tables), Chapter 6 (normalization refines them)"
  ],
  
  realWorldAnalogy: "A spreadsheet is a primitive relation. Each row is a tuple (record), each column is an attribute (field). But spreadsheets lack the mathematical rigor and operators that make relational databases powerful. Think of Excel on steroids — with set theory baked in.",
  
  commonMisconceptions: [
    "MISCONCEPTION: 'Relation' means 'relationship' → TRUTH: In relational model, 'relation' means 'table' (the mathematical term from set theory)",
    "MISCONCEPTION: SQL SELECT is the same as relational SELECT → TRUTH: Relational SELECT (σ) filters rows. SQL SELECT does both filtering AND projection",
    "MISCONCEPTION: Indexes are always good → TRUTH: Indexes speed up reads but slow down writes (INSERT/UPDATE/DELETE)"
  ],
  
  examTips: [
    "Exam favorites: Write relational algebra expressions (know σ, π, ⨝)",
    "Understand the difference between natural JOIN and THETA JOIN",
    "Know why indexing is critical for performance (and its trade-offs)",
    "Be able to identify candidate keys vs primary keys vs foreign keys"
  ],
  
  keyTakeaway: "The relational model's power comes from set theory — tables are sets, operations are set operations. This mathematical foundation makes querying both powerful and intuitive.",
  
  furtherConnections: [
    "Links to Chapter 4: ER diagrams are converted directly to relational tables",
    "Links to Chapter 6: Normalization ensures relational tables are well-structured",
    "Links to SQL: SQL is the practical implementation of relational algebra"
  ],
  
  objectives: [
    "Understand the relational model as a logical view of data",
    "Learn about relations (tables), tuples (rows), and attributes (columns)",
    "Explore relational operators, data dictionary, and system catalog",
    "Understand data redundancy handling and the importance of indexing"
  ],
  
  keyConcepts: [
    "The relational model (E.F. Codd) provides a simple, logical view using tables, offering structural and data independence",
    "Key elements: Relation/Table, Tuple/Row, Attribute/Column, Domain (set of allowable values)",
    "Relational operators based on set theory: SELECT (σ), PROJECT (π), JOIN (⨝), UNION (∪), INTERSECT (∩), DIFFERENCE (-)",
    "Data dictionary stores metadata about tables, columns, relationships, and constraints",
    "Indexing dramatically improves search and join performance on large tables"
  ],
  
  additionalKeyPoints: [
    "Student Classification Example (Table 3.2): Demonstrates how derived attributes (like classification: Fr, So, Jr, Sr) can be based on credit hours",
    "Relational Operators: The book heavily illustrates SELECT, PROJECT, JOIN, PRODUCT, and DIFFERENCE with clear before/after table examples",
    "Key Strength: The relational model's power comes from its mathematical foundation (set theory), making complex queries intuitive through operators"
  ],
  
  content: "The relational model's power comes from its mathematical foundation in set theory, making complex queries intuitive through operators. The relational model is easier to understand than hierarchical or network models.",
  
  exercises: [
    {
      q: "Using a STUDENT table (STU_NUM, STU_LNAME, STU_FNAME, STU_GPA, DEPT_CODE, CLASSIFICATION), write relational algebra expressions.",
      a: [
        "(a) All students with GPA > 3.0: σ GPA > 3.0 (STUDENT)",
        "(b) Students who are juniors or seniors in CIS: σ (DEPT_CODE = 'CIS' ∧ (CLASSIFICATION = 'Junior' ∨ CLASSIFICATION = 'Senior')) (STUDENT)",
        "The result includes all attributes from STUDENT",
        "These can then be projected (π) to show only specific columns if needed"
      ]
    },
    {
      q: "Given an Orders table with OrderID, CustomerName, CustomerCity, Product, Quantity, Price, identify problems and suggest improvements.",
      a: [
        "Problem 1: Repeating customer data across multiple orders → Create separate Customer table",
        "Problem 2: Product name stored redundantly with each order → Create separate Product table",
        "Problem 3: Price stored in Order table (changes over time) → Store in OrderLine with frozen price",
        "Improvement 1: Customer (CustomerID, CustomerName, CustomerCity)",
        "Improvement 2: Product (ProductID, ProductName, CurrentPrice)",
        "Improvement 3: Order (OrderID, CustomerID, OrderDate)",
        "Improvement 4: OrderLine (OrderID, ProductID, Quantity, UnitPriceAtOrderTime)"
      ]
    },
    {
      q: "For a BOOK table, evaluate which would be the best primary key: ISBN, Book Title, or a system-generated Book_ID.",
      a: [
        "ISBN: Good (unique, stable, simple, internationally standard) - recommended if available",
        "Book Title: Bad (not unique - multiple books can share titles, can change with new editions)",
        "System-generated Book_ID: Excellent (simple, guaranteed unique, stable) but has no business meaning",
        "Best practice: Use ISBN as natural key if stable and available, otherwise use surrogate ID",
        "In library systems, often both are kept: ISBN as alternate key, internal ID as primary key"
      ]
    },
    {
      q: "Why is indexing important in relational databases?",
      a: [
        "Indexing dramatically improves search and join performance on large tables (O(log n) vs O(n))",
        "Without indexes, the DBMS performs full table scans for every query",
        "Primary keys are automatically indexed in most DBMSs",
        "Foreign keys benefit greatly from indexing for JOIN operations",
        "Trade-off: Indexes add overhead to INSERT, UPDATE, DELETE operations",
        "Strategy: Index columns used in WHERE, JOIN, ORDER BY clauses"
      ]
    },
    {
      q: "Write relational algebra to find all students with GPA > 3.0 in the CIS department (combined operation).",
      a: [
        "π STU_LNAME, STU_FNAME (σ GPA > 3.0 ∧ DEPT_CODE = 'CIS' (STUDENT))",
        "Step 1: SELECT filters rows with GPA > 3.0 AND Dept = 'CIS'",
        "Step 2: PROJECT keeps only last name and first name columns",
        "Alternative: σ then π (order doesn't matter for correctness, but π first can be more efficient)"
      ]
    }
  ]
};