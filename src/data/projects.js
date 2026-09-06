export const projects = [
  {
    id: "direct-bridge",
    title: "Direct Bridge",
    subtitle: "Student ↔ Skilled Labour Collaboration Platform",
    category: "AI • Web Development • UI/UX",
    filterCategories: ["All", "Web Development", "AI", "UI/UX"],
    featured: true,
    badge: "Featured Collaboration Platform",
    description:
      "An AI-powered collaborative platform designed to connect students with skilled workers for real-world prototype development and project collaboration.",
    overview:
      "Direct Bridge bridges the gap between students with theoretical concepts and skilled technical workers possessing hands-on practical fabrication expertise. It streamlines matchmaking, prototype development, and milestone-driven project workflows.",
    keyFeatures: [
      "Student and skilled-labour onboarding",
      "Skill-based profile discovery",
      "Project posting and specifications",
      "AI-assisted skill matching",
      "Collaboration workflow tracking",
      "Real-time communication channels",
      "Project-based connection management"
    ],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "AI"],
    contribution: {
      role: "Frontend / UI-UX Development",
      highlights: [
        "Designed the user interface and design system",
        "Created responsive, high-performance layouts",
        "Developed reusable modular frontend components",
        "Designed student and skilled-labour interaction flows",
        "Improved usability through ergonomic UX decisions",
        "Maintained visual consistency across all viewports"
      ],
      note: "Focused on frontend engineering and UI/UX design. Backend and AI model architectures were handled by collaborating team members."
    },
    githubUrl: null, // Placeholder - do not invent
    liveUrl: null,   // Placeholder
    accentColor: "#f24614",
    glowColor: "rgba(242, 70, 20, 0.25)"
  },
  {
    id: "insureflow-ai",
    title: "InsureFlow AI",
    altTitle: "ClaimGuard",
    subtitle: "AI Healthcare Insurance & Denial Prevention Platform",
    category: "AI • Healthcare • RCM • UI/UX",
    filterCategories: ["All", "AI", "UI/UX", "Web Development"],
    featured: true,
    badge: "AI Healthcare & RCM Platform",
    description:
      "An AI-driven healthcare insurance solution designed to analyze claims, identify potential denial risks, and support more efficient insurance claim processing and revenue-cycle workflows.",
    overview:
      "InsureFlow AI (ClaimGuard) empowers healthcare administrators and revenue-cycle managers to proactively spot high-risk claim denials prior to insurer submission, visualizing risk matrices and audit trails with clean dashboards.",
    keyFeatures: [
      "Automated claim analysis",
      "OCR and digital document extraction",
      "Denial-risk identification & severity scoring",
      "Flagged-case detection and review queues",
      "Comprehensive RCM dashboard",
      "Payment-query support and tracking",
      "Claim workflow visualization",
      "Analytics dashboard with actionable metrics"
    ],
    technologies: ["React.js", "Dashboard Analytics", "OCR", "AI", "UI/UX"],
    contribution: {
      role: "Frontend / UI-UX Development",
      highlights: [
        "Designed the intuitive dashboard interface and theme",
        "Created claim-management screens and inspection tables",
        "Designed visual analytics charts and KPI widgets",
        "Built responsive, accessible UI components",
        "Improved complex clinical information hierarchy",
        "Designed flagged-case interfaces for rapid auditor triage",
        "Designed denial-risk information views and risk indicators",
        "Created user-friendly end-to-end auditor workflows"
      ],
      note: "Designed and implemented the complete frontend interface and UX dashboards. Core AI/ML models developed by specialized team members."
    },
    githubUrl: null, // Placeholder - do not invent
    liveUrl: null,   // Placeholder
    accentColor: "#facf16",
    glowColor: "rgba(250, 207, 22, 0.25)"
  },
  {
    id: "career-adviser",
    title: "Career Adviser",
    subtitle: "Personalized Career Guidance Platform",
    category: "Web Development • Career Technology",
    filterCategories: ["All", "Web Development", "Career Technology"],
    featured: false,
    badge: "Web Application",
    description:
      "Career Adviser is a web-based project designed to help users explore career-related information and guidance through a digital platform.",
    overview:
      "A dedicated career discovery application that guides students and job seekers through career roadmaps, skill prerequisites, and educational avenues tailored to current tech industry requirements.",
    keyFeatures: [
      "Interactive career exploration modules",
      "Career pathways and required technical skills overview",
      "Clear, student-friendly navigation and digital guidance",
      "Responsive user interface optimized for desktop and mobile"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Development"],
    contribution: {
      role: "Full Frontend Implementation",
      highlights: [
        "Built interactive views for career pathways",
        "Engineered responsive layouts and user navigation",
        "Integrated structured guidance datasets",
        "Maintained repository and documentation on GitHub"
      ]
    },
    githubUrl: "https://github.com/KURUTHI062/Career-Adviser-",
    cloneUrl: "https://github.com/KURUTHI062/Career-Adviser-.git",
    liveUrl: null,
    accentColor: "#f24614",
    glowColor: "rgba(242, 70, 20, 0.2)"
  },
  {
    id: "examination-system",
    title: "Secure Online Examination Management System",
    subtitle: "Digital Examination & Assessment Workflow",
    category: "Web Development • Education Technology",
    filterCategories: ["All", "Web Development", "Education"],
    featured: false,
    badge: "EdTech System",
    description:
      "A web-based examination management system designed to support secure and organized online examination workflows.",
    overview:
      "Engineered to facilitate controlled online examinations, streamlining student verification, question delivery, test submission, and academic monitoring within a structured digital workflow.",
    keyFeatures: [
      "Online examination module",
      "Exam management and scheduling",
      "Student examination workflow",
      "Secure assessment process",
      "Digital examination management & records"
    ],
    technologies: ["Web Technologies", "JavaScript", "Database Management", "Education Tech"],
    contribution: {
      role: "System Development & Workflow Design",
      highlights: [
        "Implemented student examination interface",
        "Structured secure submission and timing validation",
        "Co-developed exam administration and test management views",
        "Ensured responsive compatibility for diverse campus devices"
      ]
    },
    githubUrl: "https://github.com/skyvlfuturesoft/skyvl_college_test.git",
    cloneUrl: "https://github.com/skyvlfuturesoft/skyvl_college_test.git",
    liveUrl: null,
    accentColor: "#facf16",
    glowColor: "rgba(250, 207, 22, 0.2)"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "React.js + Vite Developer Showcase",
    category: "Web Development • UI/UX",
    filterCategories: ["All", "Web Development", "UI/UX"],
    featured: false,
    badge: "Portfolio & Brand",
    description:
      "A responsive personal portfolio website developed using React.js and Vite to showcase projects, technical skills, education, certifications, and professional information.",
    overview:
      "A fast, modern developer showcase engineered with React.js, Vite, and Tailwind CSS. Built with the high-contrast Lato and charcoal/yellow editorial aesthetic, accessible UI tokens, smooth animations, and structured modular code.",
    keyFeatures: [
      "High-contrast editorial design with charcoal #272729, sunny yellow #facf16, and orange #f24614",
      "Trending-style category pill filter and dynamic modal detail views",
      "Responsive hamburger drawer and desktop sticky navbar with yellow CTA",
      "Structured education timeline and verifiable certificate cards with live viewer",
      "SEO optimized metadata, Open Graph cards, and clean Lato typography"
    ],
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript", "Lato Typography"],
    contribution: {
      role: "Sole Designer & Developer",
      highlights: [
        "Architected modular component hierarchy in React",
        "Crafted custom editorial design system with Lato typography",
        "Implemented accessible modal interactions and certificate previewers",
        "Wrote clean, extensible project data layers"
      ]
    },
    githubUrl: "https://github.com/KURUTHI062",
    liveUrl: "#",
    accentColor: "#facf16",
    glowColor: "rgba(250, 207, 22, 0.2)"
  }
];

export const projectFilterCategories = [
  "All",
  "Web Development",
  "AI",
  "UI/UX",
  "Education",
  "Career Technology"
];
