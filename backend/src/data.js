export const portfolioData = {
  hero: {
    name: "Abhishek Santhakumar",
    title: "Software Engineer",
    tagline: "Full-Stack Developer & ML Enthusiast",
    bio: "Full-stack Software Engineer with 4+ years of experience building scalable web applications and cloud-integrated services across React.js, Angular, Java Spring Boot, Python/Django, and Node.js stacks. Skilled in designing RESTful APIs, microservices, and CI/CD pipelines, with hands-on experience applying AI/ML to production systems including automated code review tools and predictive infrastructure monitoring. Holds an M.S. in Computer Science from SUNY Albany, combining strong CS fundamentals with real-world delivery experience across startups and enterprise R&D environments.",
    location: "Albany, NY",
    email: "abhishek.santha1802@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhishek-santhakumar",
    resumeUrl: "",
  },

  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "HTML", "CSS"],
    },
    {
      category: "Frontend & Frameworks",
      items: ["React.js", "Flutter", "Dart", "Angular"],
    },
    {
      category: "Backend & Databases",
      items: ["Express.js", "Node.js", "MongoDB", "MySQL", "Oracle"],
    },
    {
      category: "ML & Data",
      items: ["TensorFlow", "Keras", "PyTorch", "NetworkX", "Power BI", "NLP"],
    },
    {
      category: "Testing & Automation",
      items: ["Selenium WebDriver", "TestNG", "Postman", "Docker"],
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "GitHub", "GitHub Apps/API", "JIRA", "AWS", "Microsoft Azure", "Android Studio", "Docker", "Railway", "Vercel", "ngrok", "FastAPI", "Uvicorn"],
    },
  ],

projects: [
  {
    id: 1,
    title: "AI Code Review System",
    description:
      "An AI-powered GitHub App that automatically analyzes pull requests, identifies code-quality and security issues, and provides actionable developer feedback using Claude Sonnet.",
    bullets: [
      "Built and deployed a production GitHub App that automatically reviews pull requests using Claude Sonnet and posts AI-generated code-quality and security feedback.",
      "Engineered FastAPI REST APIs and GitHub webhook integrations with HMAC-SHA256 signature verification for secure pull request event processing.",
      "Implemented an automated review pipeline for fetching pull request diffs, constructing AI prompts, parsing structured responses, and posting inline review comments through the GitHub API.",
      "Developed SQLite-backed idempotency and background processing to prevent duplicate reviews and reliably handle webhook retries.",
    ],
    stack: ["Python", "FastAPI", "Claude API", "GitHub Apps", "SQLite", "Railway"],
    type: "AI & Developer Tools",
    github: "https://github.com/AbhishekSanthkumar/AI-Code-Review",
  },

  {
    id: 2,
    title: "Online Exam Monitoring System",
    description:
      "An AI-powered online examination platform that combines React.js, Flask, and computer vision to monitor remote assessments and detect potentially suspicious activities in real time.",
    bullets: [
      "Developed a full-stack online examination platform using React.js and Flask for conducting and monitoring remote assessments.",
      "Integrated YOLOv5-based computer vision models to detect suspicious activities and objects during examinations.",
      "Implemented real-time monitoring workflows with automated alerts to flag potentially irregular examination behavior.",
      "Designed REST APIs between the React.js frontend and Flask backend to manage exams, monitoring data, and system events.",
    ],
    stack: ["React.js", "Flask", "Python", "YOLOv5", "Computer Vision"],
    type: "AI & Computer Vision",
    github: "#",
  },

  {
    id: 3,
    title: "Neural Networks from Scratch",
    description:
      "Implemented a neural network from scratch using Python and NumPy to understand and demonstrate the fundamental mathematical concepts behind deep-learning algorithms.",
    bullets: [
      "Implemented a multi-layer neural network from scratch using Python and NumPy without relying on high-level machine learning frameworks.",
      "Developed forward propagation, backpropagation, activation functions, loss calculations, and gradient-based optimization algorithms.",
      "Implemented parameter initialization and iterative weight updates to train the network on classification tasks.",
      "Analyzed model predictions and training behavior to develop a deeper understanding of neural-network optimization and learning.",
    ],
    stack: ["Python", "NumPy", "Machine Learning", "Neural Networks"],
    type: "Machine Learning",
    github: "#",
  },

  {
    id: 4,
    title: "Lung Cancer Detection Using CNN",
    description:
      "A deep-learning computer vision system that uses convolutional neural networks to classify medical images and identify patterns associated with potentially cancerous lung tissue.",
    bullets: [
      "Developed a convolutional neural network using TensorFlow and Keras for automated lung cancer image classification.",
      "Implemented image preprocessing and normalization pipelines to prepare medical imaging data for model training.",
      "Designed and trained CNN architectures with convolutional, pooling, and fully connected layers for image classification.",
      "Evaluated model performance using validation metrics and analyzed classification results to assess model effectiveness.",
    ],
    stack: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision"],
    type: "AI & Computer Vision",
    github: "#",
  },

  {
    id: 5,
    title: "Truth Social Analysis",
    description:
      "A natural language processing and data-analysis project that processes Truth Social content to identify textual patterns, sentiment, trends, and characteristics of user-generated content.",
    bullets: [
      "Developed a Python-based data analysis pipeline to collect, process, and analyze social-media content from Truth Social.",
      "Applied natural language processing techniques to clean and transform user-generated textual data for analysis.",
      "Performed sentiment and trend analysis to identify patterns and themes across social-media posts.",
      "Used data-analysis and machine-learning techniques to extract meaningful insights from large collections of textual content.",
    ],
    stack: ["Python", "NLP", "Machine Learning", "Data Analysis"],
    type: "NLP & Data Analysis",
    github: "#",
  },

  {
    id: 6,
    title: "Knowledge Things - Cooperative Quiz Game",
    description:
      "A multiplayer cooperative quiz game developed as a master's capstone project, enabling players to collaborate in real time while solving knowledge-based challenges.",
    bullets: [
      "Developed a multiplayer cooperative quiz game using Java and JavaFX with interactive gameplay and real-time player participation.",
      "Implemented core game logic including question management, scoring, player interactions, and collaborative gameplay mechanics.",
      "Applied object-oriented design principles to structure game components and maintain modular, reusable code.",
      "Integrated networking and database functionality to support multiplayer sessions, persistent data, and game-state management.",
    ],
    stack: ["Java", "JavaFX", "Networking", "Database", "OOP"],
    type: "Full Stack & Software Engineering",
    github: "#",
  },
],
  
experience: [
  {
    id: 1,
    role: "Product Engineer, Full Stack Developer",
    type: "Full-time",
    company: "SageOx",
    period: "Aug 2025 – Present",
    bullets: [
      "Owned end-to-end delivery of full-stack features across web, desktop, and cloud layers, covering architecture, API design, UI implementation, and deployment.",
      "Built and maintained services that connected distributed data sources into a unified context layer, enabling downstream tools to access and operate on shared application context.",
      "Designed and shipped CLI and developer-tooling features integrated with cloud backends, supporting real-time synchronization across multiple developer sessions and machines.",
      "Collaborated directly with founders and engineering leadership to translate ambiguous product requirements into scalable, production-ready features in a fast-paced startup environment.",
    ],
  },

  {
    id: 2,
    role: "Full Stack Developer",
    type: "Full-time",
    company: "L&T Technology Services",
    period: "Jun 2023 – Jul 2024",
    bullets: [
      "Designed, developed, and maintained full-stack web applications using React.js on the frontend and Java Spring Boot on the backend for enterprise engineering clients.",
      "Built and integrated RESTful APIs and microservices to enable reliable communication between frontend applications and backend services.",
      "Collaborated with cross-functional engineering teams to translate client requirements into technical specifications and production-ready software solutions.",
      "Developed responsive and maintainable UI components using HTML, CSS, JavaScript, and React.js, improving application usability and performance.",
    ],
  },

  {
    id: 3,
    role: "Full Stack Developer",
    type: "Full-time",
    company: "Thinq24 Innovations Pvt Ltd",
    period: "Jan 2022 – Jun 2023",
    bullets: [
      "Designed and developed scalable backend modules using Python and Django, building reusable components for client-facing production applications.",
      "Built and maintained RESTful APIs using Django REST Framework to enable reliable integration between backend services and frontend applications.",
      "Integrated frontend interfaces with backend services using JavaScript frameworks and Django, delivering responsive and data-driven user experiences.",
      "Worked with PostgreSQL and MySQL databases using Django ORM to design data models, optimize queries, and support application performance and scalability.",
    ],
  },
],

  education: [
    {
      degree: "Master of Science, Computer Science",
      school: "State University of New York, Albany",
      period: "Aug 2024 – May 2026",
      note: "Dean's Merit Scholarship"
    },
  ],
};
