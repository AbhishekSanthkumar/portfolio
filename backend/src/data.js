export const portfolioData = {
  hero: {
    name: "Abhishek Santhakumar",
    title: "Software Engineer",
    tagline: "Full-Stack Developer & ML Enthusiast",
    bio: "I'm a passionate and self-driven Software Developer pursuing my MS in Computer Science at the University at Albany (SUNY). I build full-stack applications and ML systems turning complex problems into clean, reliable software.",
    location: "Albany, NY",
    email: "abhishek.santha1802@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhishek-santhakumar",
    resumeUrl: "https://docs.google.com/document/d/1sQ3yNJRMV3H3Jk3AlU1JSyNb5lpyOK4RRBLZR8MAsWc/edit?usp=sharing",
  },

  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "HTML", "CSS"],
    },
    {
      category: "Frontend & Frameworks",
      items: ["React.js", "Flutter", "Dart"],
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
      items: ["Git", "GitHub", "JIRA", "AWS", "Microsoft Azure", "Android Studio"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Neural Networks for Classification",
      description:
        "Designed and trained multi-layer neural networks for classification tasks across structured and unstructured datasets, achieving 15–25% performance gains through rigorous tuning.",
      bullets: [
        "Modeled multi-layer neural networks using Python and TensorFlow/Keras for classification across structured and unstructured datasets.",
        "Improved model performance by ~15–25% through hyperparameter tuning (learning rate, batch size) and regularization techniques (L1/L2, dropout, early stopping).",
        "Engineered robust evaluation pipelines using precision, recall, F1-score, and confusion matrices to ensure model generalization.",
        "Reduced overfitting and improved validation stability by implementing cross-validation and learning curve analysis"],
      stack: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
      type: "AI",
      github: "#",
    },
    {
      id: 2,
      title: "Graph Neural Network — Social Network Analysis",
      description:
        "Applied graph-based ML to analyze large-scale social networks, implementing link prediction and community detection algorithms on sparse graph data.",
      bullets: [
        "Implemented link prediction algorithms: Jaccard Index, Adamic/Adar, and Degree Product.",
        "Performed community detection using label propagation on real-world social graphs.",
        "Analyzed homophily patterns to understand user clustering behavior.",
      ],
      stack: ["Python", "NetworkX", "Graph ML", "NumPy"],
      type: "ML / Graph",
      github: "#",
    },
    {
      id: 3,
      title: "AI Code Review System:",
      description:
        "An AI-powered GitHub App that automatically reviews pull requests, flags security vulnerabilities, suggests architectural improvements, and posts inline comments all within seconds of a PR being opened.",
      bullets: [
        "Built and deployed a production GitHub App on Railway that auto-reviews PRs via Claude Sonnet detecting SQL injection, hardcoded credentials, shell injections, and architectural/quality issues within seconds.",
        "Smart filters skip lock files, minified assets, and draft/bot PRs, with failure comments guaranteeing developer feedback.",
        "Engineered the full backend stack: FastAPI + Uvicorn webhook server with HMAC-SHA256 verification, SQLite-backed idempotency, and background queuing for duplicate-free retry handling.",
        "Multi-stage pipeline (github_client.py → reviewer.py → comment_poster.py) covering JWT/RSA auth, paginated diff fetching, prompt construction, JSON parsing, and exact diff-line inline comments; base64-encoded secrets managed via Railway.",
      ],
      stack: ["Python", "FastAPI", "Claude API", "GitHub Apps", "Railway"],
      type: "AI & Developer Tools",
      github: "https://github.com/AbhishekSanthkumar/AI-Code-Review",
    },
    {
      id: 4,
      title: "AI-Powered Real-Time Monitoring System",
      description:
        "A real-time system monitoring platform that uses machine learning and AI to predict infrastructure failures before they happen. Instead of alerting after problems occur, this system analyzes patterns in metrics and forecasts issues hours in advance with human-readable explanations powered by Claude AI.",
      bullets: [
        "Built a predictive infrastructure monitoring platform that forecasts system failures hours before they occur instead of alerting after the fact using ML anomaly detection and time series forecasting on live metrics.",
        "Implemented Isolation Forest (Scikit-learn) for real-time anomaly detection across CPU, memory, DB connections, and latency metrics stored as Redis sorted sets with O(log n) range queries and automatic 24h TTL cleanup",
        "Engineered linear regression forecasting with R² confidence scoring to predict metric breach times; system correctly identified simulated DB connection exhaustion (168 → 305 connections) 1 hour in advance with 99% confidence.",
        "Integrated Claude Sonnet to correlate anomalies and forecasts across hosts, generating specific on-call alerts: 'db-01 connections will breach threshold in 1 hour check SHOW PROCESSLIST and prepare failover to db-02.'", 
      ],
      stack: ["Python", "FastAPI", "Redis", "Scikit-learn", "Claude API", "React", "Recharts"],
      type: "AI",
      github: "https://github.com/AbhishekSanthkumar/Ai-Monitoring",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Research Assistant",
      type: "Part-time",
      company: "University at Albany",
      period: "Feb 2026 – Present",
      bullets: [
        "Built evaluation frameworks in Python to analyze academic datasets, improving reproducibility.",
        "Developed custom neural network architectures and training pipelines in PyTorch using DataLoader, autograd, and distributed training.",
        "Collaborated with faculty to refine evaluation methodologies and support data-driven research.",
        "Documented workflows and experimental procedures for academic reporting.",
      ],
    },
    {
      id: 2,
      role: "Associate Engineer",
      type: "Full-time",
      company: "L&T Technology Services",
      period: "Jul 2023 – Jun 2024",
      bullets: [
        "Developed Selenium automation components using POM, TestNG, and Data-Driven approaches.",
        "Updated Requirement Traceability Matrix (RTM) and ensured alignment between requirements",
        "Created and maintained Docker Compose files to containerize test environments.",
        "Used JIRA for defect tracking and Git for collaborative version control.",
      ],
    },
    {
      id: 3,
      role: "Android App Developer",
      type: "Intern",
      company: "Thinq24 Innovations Pvt Ltd",
      period: "Dec 2022 – Jan 2023",
      bullets: [
        "Developed cross-platform mobile apps using Flutter and Dart.",
        "Designed responsive adaptive UIs ensuring smooth navigation across screen sizes.",
        "Implemented RESTful API consumption for real-time data exchange.",
        "Diagnosed and fixed complex app issues using Android Studio profiling tools.",
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
    {
      degree: "Bachelor of Engineering, Computer Science",
      school: "Rajalakshmi Institute of Technology",
      period: "Aug 2019 – May 2023"
    },
  ],
};
