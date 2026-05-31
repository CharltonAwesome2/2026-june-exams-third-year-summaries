export const itsWelcome = {
  id: "its-welcome",
  title: "ITS Information Systems 3",
  subtitle: "Database Systems - Design, Implementation, and Management (10th Edition)",
  badge: "Third Year",
  description: "Comprehensive exam summaries for Database Systems, Chapters 1-6, covering the database approach, data models, relational model, ER modeling, EER, and normalization.",
  
  overallRecommendations: [
    "Learning Path: Follow this order strictly — Chapters 1→2→4→3→5→6 work very well together",
    "Core Skill: Master ER/EER modeling + Normalization — these two are the heart of good database design",
    "Common Pitfall: Students often rush to tables/SQL without spending enough time on conceptual modeling and business rules",
    "Tools: Learn to use diagramming tools (Lucidchart, draw.io, or professional ones like ER/Studio) that support Crow's Foot notation",
    "Real-World Note: In practice, you'll often do iterative refinement between ER diagrams and normalization"
  ],
  
  studyTips: [
    "Active Recall: After reading each chapter, close the summary and try to list the key concepts from memory",
    "Practice Drawing: ER diagrams are a skill — practice on different scenarios (library, hospital, gym, car rental)",
    "Normalization Drills: Take any table and practice normalizing it to 3NF — this is the most common exam question format",
    "Connect the Dots: Don't study chapters in isolation. Ask: 'How does normalization relate to ER modeling?'",
    "Teach Someone: Best way to know if you understand — explain it to a classmate or even just out loud to yourself"
  ],
  
  chapters: ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5", "chapter6"],
  chapterNames: {
    chapter1: "The Database Approach",
    chapter2: "Data Models",
    chapter3: "The Relational Database Model",
    chapter4: "Entity Relationship (ER) Modeling",
    chapter5: "Advanced Data Modeling (EER)",
    chapter6: "Normalization of Database Tables"
  }
};