// welcome.js

export const theoryWelcome = {
  id: "theory-welcome",
  title: "Application Development Theory",
  subtitle: "Software Engineering Processes, Design, Validation, Requirements, and Ethics",
  badge: "Third Year",

  description: "A comprehensive theoretical foundation for software engineering, covering software processes (waterfall, incremental, reuse-oriented), system concepts, software design and implementation, validation and testing, requirements engineering, and professional ethics. Based on standard software engineering curriculum.",

  overallRecommendations: [
    "Learning Path: Follow chapter order — concepts build progressively",
    "Core Skill: Understanding which process model fits which project context is an exam favorite",
    "Common Pitfall: Memorizing definitions without understanding when to apply each model",
    "Exam Focus: Be able to compare and contrast process models (waterfall vs incremental)",
    "Practical Connection: Relate theory to your DDD projects — how did your process work in practice?"
  ],

  studyTips: [
    "Process Model Comparison: Create a table comparing Waterfall, Incremental, and Reuse-oriented across criteria (flexibility, visibility, risk, speed)",
    "CMM Memorization: Use mnemonic 'IR-DMO' — Initial, Repeatable, Defined, Managed, Optimising",
    "Apply to Real Projects: For each DDD project you built, identify which process elements were present",
    "Testing Stages: Remember order — Component → System → Customer (CSC)",
    "Draw the Diagrams: Practice drawing Waterfall, Incremental, V-Model, and Process Improvement cycle diagrams"
  ],

  chapters: [
    "theory-ch2",
    "chapter3-what-is-a-system",
    "chapter4-software-design-impl",
    "chapter5-software-validation",
    "chapter6-requirements-engineering",
    "chapter8-ethics-engineering"
  ],

  chapterNames: {
    "theory-ch2": "Software Processes",
    "chapter3-what-is-a-system": "What is a System?",
    "chapter4-software-design-impl": "Software Design & Implementation",
    "chapter5-software-validation": "Software Validation",
    "chapter6-requirements-engineering": "Requirements Engineering",
    "chapter8-ethics-engineering": "Ethics in Engineering"
  }
};