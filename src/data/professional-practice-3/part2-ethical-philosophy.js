// professional-practice-3/part2-ethical-philosophy.js

export const part2 = {
  id: "ethics-pt-2",
  title: "Part 2",
  subtitle: "Ethical Philosophy: A Brief Introduction to Morality",
  badge: "Philosophy",
  
  contextAndPrerequisites: [
    "Prerequisite: Part 1 (Introduction to Ethics — definitions of ethics, morality, law)",
    "This part answers: 'What are the theoretical frameworks for determining right and wrong?'",
    "Connects to: Parts 3-5 apply these frameworks to business, IT, and professional contexts"
  ],
  
  realWorldAnalogy: "Ethical frameworks are like different lenses on a camera. The Utilitarian lens shows consequences (what will happen), the Deontological lens shows duties (what must I do), and the Virtue lens shows character (what kind of person am I becoming). Each lens reveals something different. A good photographer chooses the right lens for the situation — sometimes you need multiple lenses to see the full picture.",
  
  commonMisconceptions: [
    "MISCONCEPTION: There's one 'right' ethical framework for all situations → TRUTH: Every dilemma can be dissected using more than one approach, and the best decision often integrates multiple frameworks",
    "MISCONCEPTION: Utilitarianism means the majority always wins → TRUTH: Classical utilitarianism considers intensity, duration, certainty, propinquity, fecundity, purity, and extent of consequences — not just counting heads",
    "MISCONCEPTION: Deontology is just about following rules blindly → TRUTH: Deontology focuses on duty and moral laws that rational beings would universally accept, not arbitrary rules"
  ],
  
  examTips: [
    "Exam favorites: Identify which ethical framework is being applied in a given scenario",
    "Be ready to analyze the same ethical dilemma using multiple approaches (Utilitarian, Deontological, Virtue, etc.) and compare outcomes",
    "Know the six ethical standards: Utilitarian (consequentialist), Deontological (duty-based), Human Rights, Fairness/Justice, Common Good, Virtue",
    "Understand distributed responsibility in software development and lack of moral accountability"
  ],
  
  keyTakeaway: "Ethics requires thinking about strengths and weaknesses of different moralities, understanding why we might endorse one and reject another, and searching for better systems. Every dilemma can be dissected using more than one approach, and outcomes vary depending on the road taken.",
  
  furtherConnections: [
    "Links to Part 3: Business ethics case studies (Enron, Steinhoff, Volkswagen) apply these frameworks",
    "Links to Part 4: IT ethics dilemmas (privacy, surveillance, software piracy) use these philosophical approaches",
    "Links to Part 5: Professional codes of ethics embody deontological and virtue ethics principles"
  ],
  
  objectives: [
    "Understand that moralities differ by time and place, and we must choose between them",
    "Learn the six ethical standards/frameworks for analyzing ethical dilemmas",
    "Understand distributed responsibility in software development contexts",
    "Apply multiple ethical frameworks to the same dilemma and compare outcomes",
    "Develop a sustainable ethical mindset through continual reexamination of standards"
  ],
  
  keyConcepts: [
    "Morality/Moral Code: Differ by time and place — what was acceptable in 8th Century BC Greece (lying not always wrong) differs from modern standards",
    
    "Six Ethical Standards/Approaches:",
    "1. Utilitarian Approach (Consequentialist): Focuses on outcomes and consequences — greatest good for greatest number; Jeremy Bentham's hedonic calculus considers intensity, duration, certainty, propinquity, fecundity, purity, extent",
    "2. Deontological Approach (Duty-Based): Focuses on moral duties and rules — some actions are inherently right/wrong regardless of consequences; associated with Immanuel Kant and categorical imperative",
    "3. Human Rights Approach: Focuses on protecting fundamental human rights and dignity",
    "4. Fairness/Justice Approach: Focuses on equitable distribution of benefits and burdens",
    "5. Common Good Approach: Focuses on what benefits the community as a whole",
    "6. Virtue Approach: Focuses on character and what a moral person would do (virtues vs vices)",
    
    "Distributed Responsibility: In software development, responsibility is spread across teams, leading to lack of accountability and diminished moral significance of individual work",
    
    "Ethical Mindset: Not a set method that consistently produces ethical decisions (that leads to complacency). Instead: open to fresh perspectives, asking pertinent questions, voicing convictions, continually reexamining ethical standards"
  ],
  
  additionalKeyPoints: [
    "Thinking about ethics means thinking about strengths and weaknesses of moralities, understanding why we endorse one and reject another, and searching for better systems or even 'the best' morality.",
    
    "Understanding different moralities is crucial in today's globalized world where cultural blending and conflicts are unprecedented.",
    
    "Extensive research reveals:",
    "• Ethical leaders create trust, high-quality relationships, higher job satisfaction, and lower counterproductive behavior",
    "• Unethical leaders encounter increased resistance, raise intentions to quit, and lower performance in peers",
    
    "Developing ethical decision-making skills positions students for future promotions to managerial roles.",
    
    "Three Criteria for Ethical Reasoning:",
    "1. Moral reasoning must be logical (factual evidence cited, premises lead to conclusion)",
    "2. Factual evidence cited must be accurate, relevant, and complete",
    "3. Ethical standards used must be consistent (applied to similar situations similarly)",
    
    "Sustaining an ethical mindset requires realizing there is NO set method that consistently produces highly ethical decisions — such methods lead to complacency and diminished ethical awareness.",
    
    "The answer lies in being open to fresh perspectives, asking pertinent questions, voicing convictions, and continually reexamining the soundness of our ethical standards."
  ],
  
  content: "Ethics requires thinking about strengths and weaknesses of different moralities, understanding why we endorse one and reject another, and searching for better systems. Every dilemma can be dissected using more than one approach, and outcomes vary depending on the road taken. Developing an ethical mindset is crucial for IT professionals facing distributed responsibility and complex technological consequences.",
  
  exercises: [
    {
      q: "List and describe the six ethical standards/approaches covered in this chapter.",
      a: [
        "1. Utilitarian (Consequentialist): Focuses on outcomes — greatest good for greatest number; uses hedonic calculus (intensity, duration, certainty, propinquity, fecundity, purity, extent)",
        "2. Deontological (Duty-Based): Focuses on moral duties and rules — some actions are inherently right/wrong regardless of consequences; associated with Kant and categorical imperative",
        "3. Human Rights: Focuses on protecting fundamental human rights and dignity of all individuals",
        "4. Fairness/Justice: Focuses on equitable distribution of benefits and burdens across society",
        "5. Common Good: Focuses on what benefits the community as a whole, not just individuals",
        "6. Virtue: Focuses on character and what a moral/virtuous person would do; emphasizes developing good habits (virtues) over following rules"
      ]
    },
    {
      q: "Explain the concept of 'distributed responsibility' in software development. Why does this create ethical challenges?",
      a: [
        "Distributed responsibility: In software development, responsibility is spread across multiple team members, departments, and organizations",
        "No single person has complete view of system or full accountability",
        "Lack of knowledge about long-term or broader societal consequences of technology",
        "Software developers lack feeling of accountability or view of moral significance of their work",
        "Example: No single Facebook engineer feels responsible for election interference or mental health impacts — responsibility is distributed across thousands",
        "Solution: Organizations need to create culture where all team members consider ethical implications, not just technical specifications"
      ]
    },
    {
      q: "A hospital must decide how to allocate a single remaining ventilator during a pandemic. Analyze using: (a) Utilitarian approach, (b) Fairness/Justice approach, (c) Human Rights approach.",
      a: [
        "(a) Utilitarian: Allocate to patient with highest chance of survival and most life years remaining (e.g., young healthy adult over elderly with comorbidities) — maximizes total good",
        "(b) Fairness/Justice: Use lottery system giving all medically eligible patients equal chance — focuses on equitable process rather than outcome",
        "(c) Human Rights: Focus on inherent dignity of each person — might prioritize those who haven't had equal access to healthcare previously, or use first-come first-served",
        "Different frameworks yield different answers — organization must choose transparent framework in advance"
      ]
    },
    {
      q: "A software company discovers their face recognition AI has racial bias (higher error rates for certain ethnicities). Using Deontological and Utilitarian approaches, analyze whether they should release it anyway.",
      a: [
        "Deontological Analysis:",
        "• Duty to not cause harm — releasing biased system could lead to wrongful arrests, discrimination",
        "• Duty to respect human dignity — biased treatment violates fundamental respect",
        "• Universal rule: 'Would it be acceptable for all companies to release known biased systems?' → No",
        "• Conclusion: Deontology says do NOT release until bias is fixed (duty to prevent harm)",
        "Utilitarian Analysis:",
        "• Benefits: Revenue from sales, improved efficiency for some users, continued development funding",
        "• Harms: Wrongful arrests of innocent people, reinforcement of systemic racism, legal liability",
        "• Intensity of harms (high for affected individuals) vs diffusion of benefits",
        "• Conclusion: Utilitarianism likely says do NOT release — harms likely outweigh benefits",
        "Both frameworks suggest not releasing biased system"
      ]
    },
    {
      q: "A software developer notices their code for a client could be easily exploited to access user data. The manager says 'not our problem — client approved the spec.' Using the Virtue approach, analyze the developer's ethical responsibility.",
      a: [
        "Virtue Approach focuses on character: What would a virtuous/moral person do?",
        "Relevant virtues: Honesty (not hiding known risks), Courage (speaking up despite pressure), Integrity (doing right even when inconvenient), Professionalism (maintaining standards)",
        "Relevant vices: Cowardice (fear of manager), Apathy (not caring about users), Dishonesty (pretending issue doesn't exist)",
        "Virtuous developer would: Document concern in writing, escalate to appropriate authority (security officer, ethics committee, or above manager), propose solution",
        "Virtual cycle: Taking stand builds courage for future situations",
        "Manager's 'not our problem' is virtue failure — professional virtue requires caring about end users, not just spec compliance"
      ]
    }
  ]
};