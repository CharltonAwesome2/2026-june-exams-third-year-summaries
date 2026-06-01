// chapter3.js
// 
export const chapter3 = {
  id: "its-ch-3",
  title: "Chapter 3",
  subtitle: "The Relational Database Model",
  badge: "Relational",

  contextAndPrerequisites: [
    "Prerequisite: Chapter 2 (understanding data models and business rules)",
    "This chapter answers: 'What does a database actually LOOK like?'",
    "Connects to: Chapter 4 (ER models map to relational tables), Chapter 6 (normalization refines them)",
  ],

  realWorldAnalogy:
    "A spreadsheet is a primitive relation. Each row is a tuple (record), each column is an attribute (field). But spreadsheets lack the mathematical rigor and operators that make relational databases powerful. Think of Excel on steroids — with set theory baked in.",

  commonMisconceptions: [
    "MISCONCEPTION: 'Relation' means 'relationship' → TRUTH: In relational model, 'relation' means 'table' (the mathematical term from set theory)",
    "MISCONCEPTION: SQL SELECT is the same as relational SELECT → TRUTH: Relational SELECT (σ) filters rows. SQL SELECT does both filtering AND projection",
    "MISCONCEPTION: Indexes are always good → TRUTH: Indexes speed up reads but slow down writes (INSERT/UPDATE/DELETE)",
  ],

  examTips: [
    "Know the 8 characteristics of a relational table",
    "Memorize key types: Superkey, Candidate, Primary, Foreign, Secondary",
    "Understand Entity Integrity (no null PK) and Referential Integrity (FK matches existing PK or null)",
    "Be able to write relational algebra expressions using σ (SELECT), π (PROJECT), and ⨝ (JOIN)",
    "Understand the difference between Natural JOIN, Equijoin, and Theta JOIN",
    "Know why indexing is critical for performance and its trade-offs",
    "Be able to identify candidate keys vs primary keys vs foreign keys",
  ],

  keyTakeaway:
    "The relational model's power comes from set theory — tables are sets, operations are set operations. This mathematical foundation makes querying both powerful and intuitive.",

  furtherConnections: [
    "Links to Chapter 4: ER diagrams are converted directly to relational tables",
    "Links to Chapter 6: Normalization ensures relational tables are well-structured",
    "Links to SQL: SQL is the practical implementation of relational algebra",
  ],

  objectives: [
    "Understand the relational model as a logical view of data",
    "Learn about relations (tables), tuples (rows), and attributes (columns)",
    "Explore relational operators: SELECT, PROJECT, JOIN, UNION, etc.",
    "Understand keys: superkey, candidate, primary, foreign, secondary",
    "Learn entity integrity and referential integrity",
    "Explore data dictionary, system catalog, and indexing",
    "Understand data redundancy handling and indexing strategies",
  ],

  keyConcepts: [
    "Relational model (E.F. Codd, 1970): logical view using tables; provides structural and data independence",
    "Key elements: Relation/Table, Tuple/Row, Attribute/Column, Domain (set of allowable values)",
    "Table characteristics (8): 2D structure, rows=entities, columns=attributes, each intersection=one value, same format per column, domain defined, order immaterial, unique row identifier",
    "Keys: Superkey (uniquely identifies row), Candidate (minimal superkey), Primary (chosen candidate), Foreign (matches PK in another table), Secondary (for retrieval only)",
    "Entity integrity: No primary key attribute can be null",
    "Referential integrity: Foreign key must either be null or match an existing primary key value",
    "Relational algebra operators: SELECT (σ), PROJECT (π), JOIN (⨝), UNION (∪), INTERSECT (∩), DIFFERENCE (-), PRODUCT (×)",
    "Natural join: joins on common attributes; Equijoin: equality condition; Theta join: any comparison",
    "Inner join: only matched records; Outer join: unmatched records preserved (Left/Right/Full)",
    "Data dictionary stores metadata about tables, columns, relationships, and constraints",
    "Index: ordered arrangement for faster access; unique indexes prevent duplicate values",
  ],

  additionalKeyPoints: [
    "Student Classification Example (Table 3.2): Demonstrates how derived attributes (Fr, So, Jr, Sr) can be based on credit hours",

    "Determination: if A determines B, each value of A has exactly one value of B",
    "Functional dependence: B is functionally dependent on A if all rows agreeing on A also agree on B",

    "Relational Operators: The book heavily illustrates SELECT, PROJECT, JOIN, PRODUCT, and DIFFERENCE with before/after table examples",

    "KEY HIERARCHY: Superkey → Candidate Key → Primary Key → Alternate Key",

    "Superkey: any attribute(s) that uniquely identify a row",
    "Candidate key: minimal superkey (no unnecessary attributes)",
    "Primary key: selected candidate key used as the main row identifier",
    "Alternate key: candidate keys not chosen as the primary key",
    "Composite key: key composed of multiple attributes; may serve as candidate, primary, or foreign key",
    "Natural key: real-world identifier (ISBN, SSN, email)",
    "Surrogate key: artificial system-generated identifier (auto-increment ID); preferred for stability",
    "Foreign key: attribute(s) that reference a primary key in another table",
    "Unique key: must contain unique values but is not necessarily the primary key",
    "Secondary key: used for searching/retrieval rather than uniqueness",

    "Data dictionary: stores metadata including table names, attributes, formats, ranges, relationships, and constraints",
    "Homonym: same name used for different attributes",
    "Synonym: different names used for the same attribute",

    "1:M relationship: the normal relationship structure in relational databases",
    "1:1 relationship: relatively rare and may indicate a design issue",
    "M:N relationship: cannot be implemented directly; requires a bridge/composite entity",

    "Codd's 12 rules: define what constitutes a true relational database; few systems fully comply",

    "Quick Memory Trick: Superkey finds it, Candidate minimizes it, Primary chooses it, Foreign links it, Composite builds it, Natural comes from reality, Surrogate fakes it",
  ],

  content:
    "The relational model's power comes from its mathematical foundation in set theory, making complex queries intuitive through operators. The relational model is easier to understand than hierarchical or network models.",

  exercises: [
    {
      q: "List the 8 characteristics of a relational table.",
      a: [
        "Perceived as two-dimensional structure of rows and columns",
        "Each row (tuple) represents a single entity occurrence",
        "Each column (attribute) has a distinct name",
        "Each row/column intersection contains a single data value",
        "All values in a column conform to same data format",
        "Each column has a specific domain (range of values)",
        "Order of rows and columns is immaterial to DBMS",
        "Each table must have a unique row identifier (primary key)",
      ],
    },
    {
      q: "Define superkey, candidate key, primary key, foreign key, and secondary key.",
      a: [
        "Superkey: any attribute or combination that uniquely identifies each row",
        "Candidate key: a minimal superkey (no unnecessary attributes)",
        "Primary key: candidate key selected as the unique identifier",
        "Foreign key: attribute whose values match primary key values in another table",
        "Secondary key: used only for data retrieval, not for identification",
      ],
    },
    {
      q: "What are entity integrity and referential integrity?",
      a: [
        "Entity integrity: No primary key attribute can be null. Every row must have a unique, non-null identifier.",
        "Referential integrity: A foreign key must either be null OR match an existing primary key value in the related table.",
        "These rules prevent orphaned records and maintain data consistency across tables.",
      ],
    },
    {
      q: "What is the difference between an inner join and an outer join?",
      a: [
        "Inner join: Returns only rows that have matching values in both tables",
        "Outer join: Returns all rows from one table, with nulls where no match exists in the other",
        "Left outer join: all rows from left table, matches from right",
        "Right outer join: all rows from right table, matches from left",
        "Full outer join: all rows from both tables",
      ],
    },
    {
      q: "Using a STUDENT table (STU_NUM, STU_LNAME, STU_FNAME, STU_GPA, DEPT_CODE, CLASSIFICATION), write relational algebra expressions.",
      a: [
        "(a) All students with GPA > 3.0: σ GPA > 3.0 (STUDENT)",
        "(b) Students who are juniors or seniors in CIS: σ (DEPT_CODE = 'CIS' ∧ (CLASSIFICATION = 'Junior' ∨ CLASSIFICATION = 'Senior')) (STUDENT)",
        "The result includes all attributes from STUDENT",
        "These can then be projected (π) to show only specific columns if needed",
      ],
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
        "Improvement 4: OrderLine (OrderID, ProductID, Quantity, UnitPriceAtOrderTime)",
      ],
    },
    {
      q: "For a BOOK table, evaluate which would be the best primary key: ISBN, Book Title, or a system-generated Book_ID.",
      a: [
        "ISBN: Good (unique, stable, simple, internationally standard) - recommended if available",
        "Book Title: Bad (not unique - multiple books can share titles, can change with new editions)",
        "System-generated Book_ID: Excellent (simple, guaranteed unique, stable) but has no business meaning",
        "Best practice: Use ISBN as natural key if stable and available, otherwise use surrogate ID",
        "In library systems, often both are kept: ISBN as alternate key, internal ID as primary key",
      ],
    },
    {
      q: "Why is indexing important?",
      a: [
        "Indexing dramatically improves search and join performance on large tables (O(log n) vs O(n))",
        "Without indexes, the DBMS performs full table scans for every query",
        "Primary keys are automatically indexed in most DBMSs",
        "Foreign keys benefit greatly from indexing for JOIN operations",
        "Trade-off: Indexes add overhead to INSERT, UPDATE, DELETE operations",
        "Strategy: Index columns used in WHERE, JOIN, ORDER BY clauses",
      ],
    },
    {
      q: "Write relational algebra to find all students with GPA > 3.0 in the CIS department.",
      a: [
        "π STU_LNAME, STU_FNAME (σ GPA > 3.0 ∧ DEPT_CODE = 'CIS' (STUDENT))",
        "Step 1: SELECT filters rows with GPA > 3.0 AND Dept = 'CIS'",
        "Step 2: PROJECT keeps only last name and first name columns",
        "Alternative: σ then π (order doesn't matter for correctness, but π first can be more efficient)",
      ],
    },
  ],
};
