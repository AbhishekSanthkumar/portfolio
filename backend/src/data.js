export const portfolioData = {
  hero: {
    name: "Abhishek Santhakumar",
    title: "Software Engineer",
    tagline: "Full-Stack Developer & ML Enthusiast",
    bio: "I'm a passionate and self-driven Software Developer pursuing my MS in Computer Science at the University at Albany (SUNY). I build full-stack applications and ML systems turning complex problems into clean, reliable software.",
    location: "Albany, NY",
    email: "abhishek.santha1802@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhishek-santhakumar",
    resumeUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:e52e91c0-22f8-4890-acd9-339cd0118596",
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
        "Improved model accuracy by 15–25% via hyperparameter tuning (learning rate, batch size) and regularization (L1/L2, dropout, early stopping).",
        "Built evaluation pipelines using precision, recall, F1-score, and confusion matrices to ensure generalization.",
        "Reduced overfitting via cross-validation and learning curve analysis.",
      ],
      stack: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
      type: "ML / AI",
      github: "#",
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description:
        "A scalable full-stack e-commerce platform with secure authentication, product management, and order processing — built to handle real concurrent traffic.",
      bullets: [
        "Designed secure RESTful APIs for auth, product management, and order processing.",
        "Structured backend services for concurrent requests, improving responsiveness and scalability.",
        "Optimized frontend with reusable React components and efficient state management.",
      ],
      stack: ["React.js", "TypeScript", "Express", "MongoDB", "Node.js"],
      type: "Full Stack",
      github: "#",
    },
    {
      id: 3,
      title: "Social Media Analytics Dashboard",
      description:
        "An analytics dashboard that processes large-scale social media datasets, performs sentiment analysis, and surfaces actionable trends through interactive visualizations.",
      bullets: [
        "Processed large-scale social media datasets and ran sentiment analysis using NLP.",
        "Created interactive Power BI dashboards to identify trends, user behavior, and viral patterns.",
        "Tracked engagement metrics to support data-driven decisions.",
      ],
      stack: ["Python", "Power BI", "NLP", "Pandas"],
      type: "Data & Visualization",
      github: "#",
    },
    {
      id: 4,
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
        "Automated 180+ test cases for Intel's DTAF networking framework, enabling end-to-end validation.",
        "Developed Selenium automation components using POM, TestNG, and Data-Driven approaches.",
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
      note: "Dean's Merit Scholarship",
      cgpa: "3.25/4"
    },
    {
      degree: "Bachelor of Engineering, Computer Science",
      school: "Rajalakshmi Institute of Technology",
      period: "Aug 2019 – May 2023",
      cgpa: "8.09/10"
    },
  ],
};
