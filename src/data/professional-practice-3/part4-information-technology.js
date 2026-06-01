// professional-practice-3/part4-information-technology.js

export const part4 = {
  id: "ethics-pt-4",
  title: "Part 4",
  subtitle: "Ethics in Information Technology",
  badge: "IT Ethics",
  
  contextAndPrerequisites: [
    "Prerequisite: Parts 1-3 (Introduction, ethical philosophy, business ethics)",
    "This part answers: 'What specific ethical challenges arise from information technology?'",
    "Connects to: Part 5 (professionalism for IT workers as a solution to these challenges)"
  ],
  
  realWorldAnalogy: "IT ethics is like building a bridge while also being responsible for who crosses it and what they carry. IT professionals don't just build systems — they create the infrastructure for modern life. A bridge builder has ethical duties about safety, but IT workers have additional duties about privacy, security, data integrity, and access. And unlike physical bridges, IT systems can affect billions of people simultaneously without their knowledge.",
  
  commonMisconceptions: [
    "MISCONCEPTION: IT ethics is just about not hacking or stealing data → TRUTH: IT ethics covers complex issues like algorithmic bias, surveillance capitalism, AI accountability, and the digital divide",
    "MISCONCEPTION: Users are always the ones committing ethical violations → TRUTH: IT professionals have ethical responsibilities for system design that can enable or prevent user misconduct",
    "MISCONCEPTION: Following the law is sufficient for ethical IT practice → TRUTH: Laws lag behind technology — something can be legal but unethical (e.g., dark patterns, manipulative design)"
  ],
  
  examTips: [
    "Exam favorites: Identify ethical issues in IT scenarios (data breaches, software piracy, inappropriate use, information sharing)",
    "Understand the relationship between IT workers and clients, suppliers, users, and society",
    "Know the common ethical issues for IT users: software piracy, inappropriate use, inappropriate sharing of information",
    "Be ready to discuss conflict of interest, misrepresentation, and breach of contract in IT consulting contexts"
  ],
  
  keyTakeaway: "The growth of the Internet, ability to capture vast amounts of personal data, and greater reliance on information systems have increased the risk that IT will be used unethically. The general public needs to develop a better understanding of ethics as it applies to IT — currently too much emphasis is placed on technical issues.",
  
  furtherConnections: [
    "Links to Part 3: Business ethics concepts (conflict of interest, misrepresentation) apply to IT consulting",
    "Links to Part 5: Professional codes of ethics (ACM, IEEE-CS, AITP, IITPSA) provide guidance for IT workers",
    "Links to database chapters: Data privacy, security, access control are IT ethics issues"
  ],
  
  objectives: [
    "Identify ethical challenges specific to information technology",
    "Understand relationships between IT workers and clients, suppliers, users, and society",
    "Recognize common ethical issues: trade secrets, whistleblowing, conflict of interest, breach of contract",
    "Analyze ethical problems in IT project management (scope creep, poor communication, legacy systems)",
    "Understand IT user ethical issues: software piracy, inappropriate use, inappropriate sharing"
  ],
  
  keyConcepts: [
    "Trade Secret: Information generally unknown to public that company keeps confidential, has economic value, required effort to develop — includes software code, hardware designs, algorithms, formulae, manufacturing processes",
    
    "Whistleblowing: Effort by employee to attract attention to negligent, illegal, unethical, abusive, or dangerous acts that threaten public interest — risks retaliation and firing",
    
    "Conflict of Interest: Conflict between IT worker's (or firm's) self-interest and client's interest — e.g., consultants recommending own products to remedy detected problems",
    
    "Breach of Contract: One party fails to meet terms of contract — IT project disputes often involve fraud, fraudulent misrepresentation, and/or breach of contract",
    
    "Common Problems in IT Projects:",
    "• Scope creep: Changes to project scope causing cost overruns, missed deadlines",
    "• Poor communication: Miscommunication leading to system not meeting expectations",
    "• Obsolete solution: Competitor releases more advanced features during development",
    "• Legacy systems: Customer fails to reveal integration requirements upfront",
    
    "Bribery vs Gifts: Bribery = providing money/property/favors to obtain business advantage (illegal for both offerer and recipient). Accepting invitations to expensive dinners or golf fees may be perceived as bribery by auditors",
    
    "IT User Ethical Issues:",
    "• Software piracy: Copying software without license (Android app piracy exceeds 90% for some games)",
    "• Inappropriate use: Surfing non-work websites, viewing porn (1 in 5 men admit to viewing porn at work), playing games",
    "• Inappropriate sharing: Private data (employee salary, health records, customer info) and confidential information (sales plans, R&D, strategies)"
  ],
  
  additionalKeyPoints: [
    "The importance of ethics and human values has been underemphasized amidst IT breakthroughs, with a range of consequences.",
    
    "Public concern examples about ethical IT use: fake news, revenge porn, online shaming, user privacy violations, election interference.",
    
    "IT has a profound effect on society — IT professionals and end users need to recognize this when implementing technology and formulating policies.",
    
    "Trade secrets examples: Zillow vs Move ($130 million settlement over alleged trade secret theft by former employee who copied documents before resigning).",
    
    "Whistleblowing example: Oracle employee accused management of pressuring her to add millions in accruals for cloud revenue — Oracle shares dropped 4% following lawsuit announcement.",
    
    "Misrepresentation example: Affinity Gaming vs Trustwave — Trustwave claimed to contain data breach but missed key details, resulting in second breach; Affinity sued for 'woefully inadequate' investigation.",
    
    "Distinguishing bribes from gifts: Context matters — expensive dinners, golf tournament fees, 'free' consulting, and over-generous gifts may appear innocent but can be perceived as bribery.",
    
    "IT workers have a duty to understand user's needs and capabilities, deliver products that best meet those needs, and establish environment supporting ethical behaviors.",
    
    "Society expects professionals to provide significant benefits and not cause harm — professional standards protect the public."
  ],
  
  content: "The growth of the Internet and social networks, the ability to capture and analyze vast amounts of personal data, and greater reliance on information systems have increased the risk that information technology will be used unethically. The importance of ethics and human values has been underemphasized amidst IT breakthroughs. IT has a profound effect on society, and IT professionals need to recognize this when implementing technology and formulating policies.",
  
  exercises: [
    {
      q: "Define trade secret and provide three examples from the IT industry. What legal protections exist for trade secrets?",
      a: [
        "Trade secret: Information generally unknown to public that company keeps confidential, has economic value, required effort/cost to develop, has some degree of uniqueness or novelty",
        "IT industry examples: Source code for proprietary software, hardware design specifications, algorithms (e.g., Google's PageRank), manufacturing processes (e.g., Intel chip production), user interface designs, business plans",
        "Legal protections: Confidentiality agreements (employees sign promising not to reveal), non-disclosure agreements (NDAs), trade secret laws allowing lawsuits for misappropriation",
        "Example: Zillow vs Move — $130 million settlement for alleged trade secret theft",
        "Challenge: Trade secrets can be reverse-engineered (unlike patents which have legal protection but require disclosure)"
      ]
    },
    {
      q: "What is the difference between bribery and an acceptable gift in IT vendor relationships? Provide examples.",
      a: [
        "Bribery: Providing money, property, or favors to obtain business advantage — illegal for both offerer and recipient",
        "Kickback/payoff: Type of bribery where supplier gives money to employee to get business",
        "Distinguishing factors: Value of gift, intent, timing, transparency, company policy",
        "Likely bribery: Cash payments, expensive vacations, significant equity stakes, payment for 'consulting' that never occurs",
        "Potentially acceptable: Company-branded merchandise (pens, mugs), modest meals, educational materials",
        "Gray area requiring judgment: Expensive dinners, golf tournament fees, tickets to events — may appear innocent but could be perceived as bribery by auditors",
        "Best practice: Know company policy, disclose all gifts, refuse anything that could create obligation, check if supplier has relationship with employer"
      ]
    },
    {
      q: "A software consultant discovers the client's existing system is inadequate and recommends their own company's upgrade package. Is this a conflict of interest? How should it be handled ethically?",
      a: [
        "Yes — this creates a conflict of interest between consultant's self-interest (selling own product) and client's best interest (finding best solution)",
        "Conflict of interest undermines objectivity of IT worker",
        "Ethical handling: Disclose the conflict to client upfront, explain that recommendation involves consultant's own product",
        "Provide alternatives: Give client information about competing solutions, not just own product",
        "Consider third-party evaluation: Offer client option to get independent assessment",
        "Document all recommendations: Show reasoning based on client needs, not just availability of own product",
        "Best practice: Separate consulting from sales functions, or have different teams handle assessment vs implementation"
      ]
    },
    {
      q: "List and explain four common causes of problems in IT projects that can lead to ethical disputes between clients and vendors.",
      a: [
        "1. Scope creep: Changes to project scope or requirements during development → cost overruns, missed deadlines, system failing to meet expectations. Ethical issue: Who pays for changes? Was scope realistic originally?",
        "2. Poor communication: Miscommunication or lack of communication between customer and vendor → system performance doesn't meet expectations. Ethical issue: Did vendor hide limitations? Did customer fail to provide requirements?",
        "3. Delivery of obsolete solution: Vendor delivers system meeting original requirements, but competitor released more advanced features during development. Ethical issue: Should vendor have warned about upcoming technologies?",
        "4. Legacy systems: Customer fails to reveal information about legacy systems that must connect with new hardware/software → implementation becomes extremely difficult. Ethical issue: Customer may deliberately hide problems or genuinely not know"
      ]
    },
    {
      q: "A company discovers employees are using work computers to access pornographic websites and share offensive jokes via email. What are the legal and ethical risks? How should management respond?",
      a: [
        "Legal risks: Sexual harassment lawsuits, hostile work environment claims, potential liability for illegal content (e.g., child pornography)",
        "Ethical risks: Violation of trust, wasted productivity, damage to company reputation",
        "Statistics: 1 in 5 men admit to viewing porn at work; 30% of mobile workers view porn on work phones",
        "Typical consequences: Organizations fire frequent pornography offenders, take disciplinary action against less egregious offenders",
        "Management response: Establish clear Acceptable Use Policy (AUP), require employees to sign, implement firewall blocking objectionable sites, provide ethics training, enforce consistently",
        "Balance: Respect employee privacy while protecting organization from legal liability"
      ]
    },
    {
      q: "What is the software piracy rate for Android vs iOS apps? Why is there a difference, and what ethical responsibilities do IT professionals have?",
      a: [
        "Android piracy rate exceeds 90% for some popular games (e.g., Monument Valley)",
        "iOS piracy rate approximately 60% for same game",
        "Reasons for difference: Android allows side-loading apps (installing from outside Google Play), iOS has stricter control (jailbreaking required), Android market fragmentation, easier file access on Android",
        "IT professional responsibilities: Not participating in piracy (even for personal use), educating users about consequences, implementing license compliance systems, reporting violations",
        "Ethical issue: Some argue 'try before buy' justifies piracy; counter: developers deserve payment for work",
        "Impact: High piracy rates discourage development for affected platforms, especially for smaller developers"
      ]
    }
  ]
};