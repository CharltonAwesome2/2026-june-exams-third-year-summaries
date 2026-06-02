// welcome.js

export const dddWelcome = {
  id: "ddd-welcome",
  title: "Application Development Practice",
  subtitle: "Domain-Driven Design — Architecture, Patterns, and Testing",
  badge: "Third Year",
  description: "A comprehensive guide to Domain-Driven Design (DDD) architecture, covering layered architecture, domain objects (entities, value objects, factories), application layer (commands, queries, handlers, services), infrastructure (Spring Boot, JPA, repositories), and testing patterns. Based on practical implementations from multiple DDD projects.",
  
  overallRecommendations: [
    "Learning Path: Follow the chapter order — each chapter builds on previous concepts",
    "Core Skill: Understanding the responsibility of each layer is more important than memorizing code",
    "Common Pitfall: Putting business logic in services instead of domain objects",
    "Exam Focus: Be able to explain WHY each layer exists, not just WHAT it does",
    "Practical Tip: Start with domain objects (entities, value objects), then add factories, then services"
  ],
  
  studyTips: [
    "Draw the flow: For each use case (create order, add to cart), trace the flow through all layers",
    "Code Reading: Study the example code blocks until you can explain each line's purpose",
    "Layer Test: Given a responsibility, identify which layer it belongs to",
    "Annotation Drill: Memorize the most common Spring annotations and their purposes",
    "Build Your Own: After studying, try to implement a small DDD project (library system, gym membership)"
  ],
  
  chapters: [
    "ddd-flow-layers",
    "ddd-domain-objects",
    "ddd-application-layer",
    "ddd-infrastructure-spring",
    "ddd-testing"
  ],
  
  chapterNames: {
    "ddd-flow-layers": "DDD Flow & Layered Architecture",
    "ddd-domain-objects": "Domain Objects (Entities, Value Objects, Factories)",
    "ddd-application-layer": "Application Layer (Commands, Queries, Handlers, Services)",
    "ddd-infrastructure-spring": "Infrastructure & Spring Boot",
    "ddd-testing": "Testing DDD Applications"
  }
};