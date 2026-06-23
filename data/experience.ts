export type ExperienceItem = {
    company: string;
    role: string;
    location: string;
    dates: string;
    bullets: string[];
  };
  
  export const experience: ExperienceItem[] = [
    {
      company: "Room 35",
      role: "Technology and Systems Intern",
      location: "Kalamazoo, USA",
      dates: "Oct 2025 – Apr 2026",
      bullets: [
        "Developed and deployed AI-powered applications and automation solutions to streamline workflows, improve information accessibility, and enhance operational efficiency.",
        "Built automated data pipelines and reporting workflows, improving data accuracy by 40% and reducing manual reporting efforts by 30%.",
        "Led the end-to-end delivery of internal software solutions from prototyping through deployment and continuous improvement.",
        "Built automated integrations between internal business applications and deployed containerized solutions using Docker to improve operational efficiency.",
        "Collaborated directly with stakeholders to gather requirements, validate solutions, and drive iterative product improvements."
      ],
    },
    {
      company: "ALSTOM",
      role: "Application Engineer",
      location: "Bengaluru, India",
      dates: "Sep 2022 – Jun 2024",
      bullets: [
        "Developed and maintained high-concurrency, real-time data processing applications for mission-critical railway monitoring systems.",
        "Improved system responsiveness by 20% and data retrieval efficiency by 30% through performance optimization and efficient data handling.",
        "Diagnosed complex system bottlenecks and resolved runtime issues using log analysis, debugging, and proactive performance monitoring to maintain high system availability.",
        "Collaborated with cross-functional teams to integrate monitoring interfaces, backend services, and real-time data systems."
      ],
    },
    {
      company: "WIPRO",
      role: "Product Engineer",
      location: "Bengaluru, India",
      dates: "Aug 2021 – Sep 2022",
      bullets: [
        "Developed and maintained Node.js microservices and REST APIs for secure payment platforms handling 5,000+ daily transactions.",
        "Improved system scalability and performance by 18% through optimized application design and efficient data handling.",
        "Developed responsive React.js user interfaces and reusable frontend components, improving usability, maintainability, and overall user experience across payment platform workflows.",
        "Contributed to production issue investigation and resolution through debugging, testing, and system analysis.",
        "Participated in Agile Scrum processes using Jira, Git, and Jenkins-based CI/CD workflows for code reviews, testing, build validation, and release activities."
      ],
    },
  ];
  