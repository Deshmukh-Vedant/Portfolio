export const personalData = {
  name: "Vedant Deshmukh",
  initials: "VD",
  role: "Aspiring Software Developer | Full Stack Web Developer",
  status: "Final-Year B.Tech Computer Engineering Student",
  greeting: "Hello, I'm Vedant",
  tagline: "Aspiring Software Developer | Full Stack Web Developer | Problem Solver",
  bio: "I am a final-year B.Tech Computer Engineering student passionate about software development, problem-solving, and building practical technology solutions. I enjoy developing web applications, exploring new technologies, and creating projects that solve real-world problems. I am continuously improving my technical skills and looking forward to opportunities where I can contribute, learn, and grow as a software developer.",
  
  // Replace these placeholders with your actual personal links and info
  contact: {
    email: "vedant.deshmukh@example.com", // [REPLACE WITH YOUR ACTUAL EMAIL]
    linkedin: "https://linkedin.com/in/vedant-deshmukh", // [REPLACE WITH YOUR LINKEDIN URL]
    github: "https://github.com/vedant-deshmukh", // [REPLACE WITH YOUR GITHUB URL]
    location: "Maharashtra, India", // [REPLACE WITH YOUR LOCATION]
  },

  badges: [
    { title: "Problem Solver", icon: "Brain" },
    { title: "Quick Learner", icon: "Zap" },
    { title: "Team Player", icon: "Users" }
  ],

  resumeUrl: "/resume.pdf", // Place your resume.pdf in the /public folder
};

export const skillsData = [
  {
    category: "Programming",
    icon: "Code2",
    skills: ["Java", "JavaScript", "SQL"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "React", "Bootstrap", "Tailwind CSS", "EJS"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "Authentication"]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Postman", "VS Code", "MySQL Workbench"]
  }
];

export const projectsData = [
  {
    id: "attrition-prediction",
    title: "Employee Attrition Prediction & HR Meeting Scheduling",
    category: "Machine Learning & Automation",
    description: "A machine learning-based system that predicts employee attrition using employee-related data and supports HR intervention through meeting scheduling automation.",
    details: [
      "Trained a predictive model utilizing Gradient Boosting on the IBM HR Analytics dataset.",
      "Binary classification output distinguishing between 'Stayed' and 'Left' employee classes.",
      "Integrated automated intervention pipeline leveraging n8n workflows with Google Calendar & Google Meet for HR check-ins.",
      "Includes structured modular preprocessing pipeline with planned feature expansion for advanced HR analytics dashboards."
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Gradient Boosting",
      "IBM HR Analytics Dataset",
      "n8n",
      "Google Calendar",
      "Google Meet"
    ],
    github: "https://github.com/your-username/employee-attrition-prediction", // [REPLACE WITH GITHUB URL]
    liveDemo: null, // [REPLACE WITH LIVE DEMO URL IF DEPLOYED]
    image: "/projects/attrition.svg",
    badge: "ML + Workflow Automation"
  },
  {
    id: "medical-report-explainer",
    title: "AI Medical Report Explainer",
    category: "AI & Full Stack",
    description: "A web application that helps users understand medical reports by providing simplified explanations in English and Marathi.",
    details: [
      "Secure medical report document upload and text processing engine.",
      "Automated extraction and simplification of complex medical lab terminology via Gemini API.",
      "Bilingual comprehension support with accurate breakdowns in both English and Marathi.",
      "Clean, intuitive, and accessible user interface tailored for non-specialist users."
    ],
    disclaimer: "This application provides informational explanations and is not a substitute for professional medical advice.",
    technologies: [
      "Python",
      "FastAPI",
      "HTML",
      "CSS",
      "JavaScript",
      "Gemini API"
    ],
    github: "https://github.com/your-username/ai-medical-report-explainer", // [REPLACE WITH GITHUB URL]
    liveDemo: null, // [REPLACE WITH LIVE DEMO URL IF DEPLOYED]
    image: "/projects/medical-explainer.svg",
    badge: "Generative AI"
  },
  {
    id: "photography-portfolio",
    title: "Photography Portfolio Website",
    category: "Web Design & Development",
    description: "A responsive photography website designed to showcase photography, creative work, and visual storytelling.",
    details: [
      "Responsive masonry and grid visual showcase tailored for high-resolution visual assets.",
      "Fluid navigation with animated modal lightbox previews and seamless mobile responsiveness.",
      "Built with performant React components styled with modern utility-first Tailwind CSS.",
      "Modular schema architecture prepared for MongoDB media catalog management."
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB"
    ],
    github: "https://github.com/your-username/photography-portfolio", // [REPLACE WITH GITHUB URL]
    liveDemo: null, // [REPLACE WITH LIVE DEMO URL IF DEPLOYED]
    image: "/projects/photography.svg",
    badge: "Creative Frontend"
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "[Your College / University Name]", // [REPLACE WITH YOUR ACTUAL COLLEGE NAME]
    status: "Final Year Student",
    graduation: "Expected [Graduation Year, e.g. 2025]", // [REPLACE WITH YOUR GRADUATION YEAR]
    description: "Rigorous coursework in Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, Operating Systems, and Software Engineering."
  }
];

export const experienceData = [
  {
    role: "Web Development Intern",
    organization: "Passion Software Solutions",
    duration: "[Internship Duration, e.g. June 2024 - August 2024]", // [REPLACE WITH ACTUAL DATES]
    certificate: "Certified by Passion Software Solutions: Web Development Intern",
    type: "Internship",
    description: "Worked on responsive frontend components, web application modules, and collaborated on real-world development tasks using modern web development workflows."
  }
];

export const certificationsData = [
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "[Completion Date Placeholder]", // [REPLACE WITH COMPLETION DATE]
    credentialUrl: "https://forage.com", // [REPLACE WITH CREDENTIAL LINK]
    description: "Practical simulation encompassing business analytics, data discovery, forensic technology, and communicating insights to technical stakeholders."
  },
  {
    title: "Certified by Passion Software Solutions: Web Development Intern",
    issuer: "Passion Software Solutions",
    date: "[Completion Date Placeholder]", // [REPLACE WITH COMPLETION DATE]
    credentialUrl: "#", // [REPLACE WITH CREDENTIAL LINK]
    description: "Official certificate of completion recognizing hands-on experience and contributions as a Web Development Intern."
  },
  {
    title: "Full Stack Web Development & Modern Technologies",
    issuer: "[Issuing Platform / Academy]", // [REPLACE WITH ISSUER]
    date: "[Completion Date Placeholder]", // [REPLACE WITH DATE]
    credentialUrl: "#", // [REPLACE WITH LINK]
    description: "Comprehensive development practice covering JavaScript ecosystem, React frontends, Node/Express backends, and relational/NoSQL databases."
  }
];

export const achievementsData = [
  {
    title: "Selected for QualityKiosk Technologies Interview Process",
    subtitle: "Candidate for Digital Quality Engineer Role",
    category: "Campus Recruitment",
    icon: "Target",
    description: "Successfully cleared rigorous preliminary evaluations and technical screening to be selected for the QualityKiosk Technologies interview process for the Digital Quality Engineer position."
  },
  {
    title: "Active Involvement in Google Developer Groups (GDG)",
    subtitle: "Community & Technical Engagement",
    category: "Community",
    icon: "Globe",
    description: "Actively participate in Google Developer Groups tech talks, workshops, and community events, keeping up-to-date with ecosystem developments in web and cloud tech."
  },
  {
    title: "Cognizant Technoverse Hackathon 2026 Participation",
    subtitle: "Hackathon Competitor",
    category: "Hackathons",
    icon: "Award",
    description: "Participated in the competitive Cognizant Technoverse Hackathon 2026, collaborating under time constraints to architect and prototype impactful technology solutions."
  }
];

