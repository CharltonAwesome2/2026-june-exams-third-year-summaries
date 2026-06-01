// chapter5.js

export const chapter5 = {
  id: "its-ch-5",
  title: "Chapter 5",
  subtitle: "Advanced Data Modeling (EER)",
  badge: "EER",
  
  contextAndPrerequisites: [
    "Prerequisite: Chapter 4 (basic ER modeling)",
    "This chapter answers: 'What if entities have subtypes? How do I handle inheritance?'",
    "Connects to: Object-oriented design concepts, inheritance hierarchies"
  ],
  
  realWorldAnalogy: "Think of a 'Vehicle' supertype. Not all vehicles are the same — cars have doors, trucks have cargo capacity, motorcycles have engine CC. Instead of putting all attributes in one table with many nulls, EER lets you create subtypes that share common attributes but have their own special ones. Like class inheritance in programming.",
  
  commonMisconceptions: [
    "MISCONCEPTION: Subtypes are always mutually exclusive → TRUTH: Disjoint subtypes are exclusive (EMPLOYEE is either PILOT or MECHANIC, not both). Overlapping subtypes allow multiple (a PERSON can be both STUDENT and EMPLOYEE)",
    "MISCONCEPTION: Natural keys are always better than surrogate keys → TRUTH: Surrogate keys are often better because they never change. Natural keys (like SSN) can have privacy or change issues",
    "MISCONCEPTION: Total specialization means every subtype must exist → TRUTH: Total means every supertype instance MUST be in a subtype. Partial allows some instances not in any subtype"
  ],
  
  examTips: [
    "Exam favorites: Design supertype/subtype hierarchies from descriptions",
    "Understand subtype discriminator (how the DBMS knows which subtype a row belongs to)",
    "Know the characteristics of a good primary key (unique, non-null, stable, simple)",
    "Be able to compare natural vs surrogate keys with pros/cons"
  ],
  
  keyTakeaway: "EER modeling handles real-world complexity that basic ER can't. Master supertype/subtype patterns — they're the difference between a rigid database and a flexible, maintainable one.",
  
  furtherConnections: [
    "Links to Chapter 4: EER is an extension of ER (adds supertype/subtype)",
    "Links to Chapter 6: Subtypes affect normalization (they help eliminate nulls)",
    "Links to OOP: Subtypes are similar to inheritance in object-oriented programming"
  ],
  
  objectives: [
    "Learn the Extended Entity Relationship (EER) model",
    "Use entity clusters for complex representations",
    "Select good primary keys",
    "Handle special modeling cases flexibly"
  ],
  
  keyConcepts: [
    "Supertype: Generic entity with common attributes (e.g., EMPLOYEE)",
    "Subtype: Specialized entities with unique attributes (e.g., PILOT, MECHANIC) - helps avoid nulls",
    "Subtype discriminator: Attribute that determines which subtype a record belongs to",
    "Entity clusters group related entities and relationships for simpler high-level views",
    "Primary keys should be unique, non-null, stable, simple, preferably single-attribute",
    "Natural vs. surrogate keys - surrogate keys often preferred for stability"
  ],
  
  additionalKeyPoints: [
    "Subtype Discriminator: An attribute in the supertype (e.g., Employee Type) that determines which subtype a record belongs to",
    "Entity Integrity & Primary Keys: Primary keys are the most important characteristic of an entity. They guarantee entity integrity and work with foreign keys to implement relationships. Selection criteria: Unique, non-null, stable, simple, and preferably single-attribute when possible",
    "Best Practice: Use surrogate keys (system-generated) in many modern designs for stability"
  ],
  
  content: "The EER model adds semantic richness to basic ER, particularly for inheritance relationships. Use surrogate keys in many modern designs for stability. This chapter prepares for more complex real-world scenarios including multi-valued attributes, composite attributes, derived attributes, and recursive relationships.",
  
  exercises: [
    {
      q: "Design an EER diagram for a Vehicle supertype with subtypes: Car, Truck, and Motorcycle.",
      a: [
        "Supertype VEHICLE: VIN (PK), Make, Model, Year, Color, PurchaseDate",
        "Subtype CAR: NumDoors (2/4), FuelType (Petrol/Diesel/Electric), IsConvertible (Y/N), DriveType (FWD/RWD/AWD)",
        "Subtype TRUCK: CargoCapacity_kg, NumAxles (2/3/4), HasTrailerHitch (Y/N), CabType (Regular/Crew)",
        "Subtype MOTORCYCLE: EngineCC, HasSidecar (Y/N), Type (Sport/Cruiser/Adventure), ABS (Y/N)",
        "Relationship: Total specialization (every vehicle belongs to exactly one subtype)",
        "Subtype discriminator: VehicleType attribute in VEHICLE supertype"
      ]
    },
    {
      q: "What are the characteristics of a good primary key?",
      a: [
        "Unique: No two rows can have the same value",
        "Non-null: Every row must have a value (no NULLs allowed)",
        "Stable: Value should never change over time",
        "Simple: Prefer single-attribute over composite keys when possible",
        "Meaningless: Surrogate keys often preferred over meaningful natural keys for stability",
        "Examples of good keys: Auto-incremented ID, ISBN (for books), SA ID Number"
      ]
    },
    {
      q: "Evaluate these potential primary keys: South African ID Number, Student Email, Product Name, Auto-incremented Order Number.",
      a: [
        "SA ID Number: Good (unique, stable, simple) - but only works for SA citizens, international students need alternative",
        "Student Email: Acceptable (unique, meaningful) - but can change (marriage, graduation, provider switch)",
        "Product Name: Poor (not unique - 'iPhone' appears many times, can change with rebranding)",
        "Auto-incremented Order Number: Excellent (simple, guaranteed unique, stable, efficient) - ideal surrogate key",
        "Best practice: Use meaningful natural keys for lookup tables (e.g., Country Code), surrogate keys for transactional tables"
      ]
    },
    {
      q: "Convert a flat EMPLOYEE table with many nulls (license, rating fields) into supertype/subtype model.",
      a: [
        "Supertype EMPLOYEE: EmpID (PK), Name, HireDate, Department, EmployeeType (discriminator)",
        "Subtype PILOT: LicenseNumber, LicenseType, FlightHours, MedicalCertDate, Rating",
        "Subtype MECHANIC: Certification, Specialization, YearsExperience, ToolsCertified",
        "Subtype ADMIN: OfficeLocation, SecurityClearance, ComputerAccess",
        "Benefits: Eliminates nulls (pilots have license info, mechanics don't), clearer business rules, easier to add new employee types"
      ]
    },
    {
      q: "Explain how you would use an entity cluster to simplify a complex ERD involving Employee, Department, Project, Assignment, and Skill.",
      a: [
        "Cluster 1: EMPLOYEE CLUSTER - groups Employee + Skill (competencies and certifications)",
        "Cluster 2: DEPARTMENT CLUSTER - groups Department + Project (organizational operations)",
        "Cluster 3: ASSIGNMENT - associative entity linking Employee and Project (hours, role, start/end dates)",
        "Benefits: Reduces visible complexity on high-level diagram from 5+ entities to 3 clusters",
        "Preserves relationships between clusters (Employee works on Project via Assignment)",
        "Can be 'exploded' to show details when deeper analysis is needed"
      ]
    },
    {
      q: "Explain the difference between total and partial specialization, and disjoint vs overlapping subtypes.",
      a: [
        "Total specialization: Every supertype instance MUST belong to a subtype (double line from supertype to subtypes). Example: Every VEHICLE is exactly one of Car/Truck/Motorcycle",
        "Partial specialization: Some supertype instances may not belong to any subtype (single line). Example: Some EMPLOYEES are not PILOT or MECHANIC",
        "Disjoint subtypes: An instance can belong to at most one subtype (letter 'd' or 'g' in notation). Example: VEHICLE can't be both Car AND Truck",
        "Overlapping subtypes: An instance can belong to multiple subtypes (no 'd' or 'g'). Example: A PERSON can be both STUDENT and EMPLOYEE"
      ]
    }
  ]
};