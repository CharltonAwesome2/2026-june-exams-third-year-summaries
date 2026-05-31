export const chapter6 = {
  id: "its-ch-6",
  title: "Chapter 6",
  subtitle: "Normalization of Database Tables",
  badge: "Normalization",
  
  contextAndPrerequisites: [
    "Prerequisite: Chapter 3 (relational tables), Chapter 4 (ER design)",
    "This chapter answers: 'My tables work, but are they OPTIMAL? How do I fix them if they're not?'",
    "Connects to: Real-world database tuning, denormalization for performance"
  ],
  
  realWorldAnalogy: "Normalization is like organizing a messy desk. You start with everything in one pile (denormalized). Then you sort: papers go in one folder, pens in a cup, sticky notes in a drawer (1NF). Then you make sure each item has one logical home (2NF). Then you remove redundancies (3NF). The desk is now tidy, but finding a pen takes walking to the drawer — sometimes you leave a pen on the desk (denormalize) for convenience, accepting a little mess for speed.",
  
  commonMisconceptions: [
    "MISCONCEPTION: Higher normal form is always better → TRUTH: 3NF is usually sufficient. BCNF and 4NF are rarely needed. Over-normalization can hurt performance with too many joins",
    "MISCONCEPTION: Normalization is separate from ER modeling → TRUTH: They work together. A good ERD reduces the normalization work needed",
    "MISCONCEPTION: Denormalization is 'wrong' → TRUTH: Denormalization is a valid performance strategy for read-heavy systems like data warehouses"
  ],
  
  examTips: [
    "Exam favorites: Take a denormalized table and normalize it to 3NF step by step",
    "Be able to identify which normal form a table violates and why",
    "Know the three anomalies: Insertion, Update, Deletion — give examples of each",
    "Understand when denormalization makes sense (data warehouses, reporting, heavy read loads)"
  ],
  
  keyTakeaway: "Normalization removes redundancy and anomalies. 3NF is the sweet spot for most applications. Denormalize only when you have a proven performance problem and a clear use case.",
  
  furtherConnections: [
    "Links to Chapter 3: Normalization ensures relational tables are well-structured",
    "Links to Chapter 4: Good ER design reduces normalization work",
    "Links to advanced topics: Denormalization in data warehousing (star schemas, snowflake schemas)"
  ],
  
  objectives: [
    "Understand normalization and its role in design",
    "Learn normal forms: 1NF, 2NF, 3NF, BCNF, 4NF",
    "Transform tables to higher normal forms",
    "Use normalization alongside ER modeling",
    "Know when to denormalize for performance"
  ],
  
  keyConcepts: [
    "1NF: No repeating groups, atomic values",
    "2NF: 1NF + no partial dependencies (non-key attributes fully dependent on entire primary key)",
    "3NF: 2NF + no transitive dependencies (no non-key attribute dependent on another non-key)",
    "BCNF (Boyce-Codd): Stronger version of 3NF",
    "4NF: Handles multi-valued dependencies",
    "Normalization addresses insertion, update, and deletion anomalies",
    "Denormalization trades controlled redundancy for query performance (common in data warehouses)"
  ],
  
  additionalKeyPoints: [
    "Conversion Process to 1NF: 1) Eliminate repeating groups, 2) Identify primary key (often composite), 3) Map all functional dependencies",
    "Data Anomalies addressed by normalization: Insertion, Update, and Deletion anomalies",
    "Final Normalized Example (Figure 6.6): The book shows a complete normalized set for a construction company with PROJECT, JOB, ASSIGNMENT, and EMPLOYEE tables",
    "Important Trade-off Reminder: 'The highest level of normalization is not always the most desirable'",
    "When to Denormalize: For performance in read-heavy systems (e.g., data warehouses). Controlled redundancy can dramatically improve query speed"
  ],
  
  content: "The highest level of normalization is not always the most desirable. For most business applications, 3NF is sufficient. Combine normalization with ER modeling for robust designs. Normalization and ER modeling are used together for robust designs.",
  
  exercises: [
    {
      q: "Normalize the following table to 3NF: StudentID, StudentName, CourseCode, CourseName, Instructor, Grade",
      a: [
        "Step 1 - 1NF: Already satisfied (atomic values, no repeating groups)",
        "Step 2 - Identify functional dependencies: StudentID → StudentName, CourseCode → (CourseName, Instructor), (StudentID, CourseCode) → Grade",
        "Step 3 - 2NF: Remove partial dependencies → Student(StudentID, StudentName) and Enrollment(StudentID, CourseCode, Grade)",
        "Step 4 - 3NF: Remove transitive dependency CourseCode → CourseName, Instructor → Course(CourseCode, CourseName, Instructor)",
        "Final tables: Student(StudentID, StudentName), Course(CourseCode, CourseName, Instructor), Enrollment(StudentID, CourseCode, Grade)"
      ]
    },
    {
      q: "What types of anomalies (insertion, update, deletion) could occur in an unnormalized Student-Course table? Give examples.",
      a: [
        "Insertion anomaly: Cannot add a new course without a student enrolled (e.g., cannot record 'CS101 exists' until someone registers)",
        "Update anomaly: Changing an instructor's name requires updating every row where that course appears (risk of inconsistency)",
        "Deletion anomaly: Deleting the last enrolled student for a course loses all course information (e.g., remove Alice, lose CS101 data entirely)",
        "Solution: Normalize into separate Student, Course, and Enrollment tables to eliminate these anomalies"
      ]
    },
    {
      q: "In a high-traffic e-commerce website, would you denormalize the Order and Product tables? Explain reasoning and trade-offs.",
      a: [
        "Potentially yes, but with careful consideration of specific use cases",
        "Trade-off 1: READ performance improves (fewer joins, faster queries) at cost of WRITE complexity",
        "Trade-off 2: Storage increases due to redundant data (e.g., product name stored in each OrderLine)",
        "Trade-off 3: Update anomalies - changing a product's name requires updating all historical orders (or keeping old name)",
        "Recommended approach: Keep normalized for OLTP (order processing), denormalize for OLAP (reporting/analytics)",
        "Strategy: Use materialized views or ETL to reporting tables rather than denormalizing source tables"
      ]
    },
    {
      q: "Explain the data anomalies addressed by normalization. When might you choose to denormalize?",
      a: [
        "Insertion anomaly: Cannot add data without other related data present",
        "Update anomaly: Same data duplicated across multiple rows, requiring multiple updates",
        "Deletion anomaly: Deleting one piece of data accidentally loses other unrelated data",
        "When to denormalize: Read-heavy systems (data warehouses, reporting databases), Performance-critical applications with complex joins, Aggregation-heavy queries (sum, count, average on large datasets)"
      ]
    },
    {
      q: "What is the difference between a partial dependency and a transitive dependency?",
      a: [
        "Partial dependency: A non-key attribute depends on only part of a composite primary key (e.g., StudentName depends on StudentID, not CourseCode in a composite key)",
        "Example: In (StudentID, CourseCode) → StudentName, this is partial because StudentName only needs StudentID",
        "Transitive dependency: A non-key attribute depends on another non-key attribute (not directly on the primary key)",
        "Example: StudentID → DeptID, DeptID → DeptHead (DeptHead depends on DeptID, which depends on StudentID)",
        "2NF eliminates partial dependencies; 3NF eliminates transitive dependencies"
      ]
    },
    {
      q: "Take a denormalized table with repeating groups for projects and employees and normalize it to 3NF. Show each step.",
      a: [
        "Original: Employee(EmpID, Name, Project1, Project2, Project3) with repeating groups",
        "1NF: Create separate rows for each project → EmployeeProject(EmpID, ProjectID, Name, ProjectName)",
        "2NF: Remove partial dependency (Name depends only on EmpID, not ProjectID) → Employee(EmpID, Name) and Assignment(EmpID, ProjectID)",
        "3NF: Remove transitive dependency (ProjectName depends on ProjectID) → Project(ProjectID, ProjectName) and Assignment(EmpID, ProjectID)",
        "Final: Employee(EmpID, Name), Project(ProjectID, ProjectName), Assignment(EmpID, ProjectID, Hours, Role)"
      ]
    }
  ]
};