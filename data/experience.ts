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
      dates: "Oct 2025 – Present",
      bullets: [
        "Designed and implemented dynamic financial and operational dashboards using Next.js, reducing manual reporting time by 30%.",
        "Partnered with executive leadership to define UI and data requirements, improving decision-making efficiency by 15%.",
        "Built automation workflows integrating QuickBooks, Power BI, and Google Sheets, minimizing human errors by 40%.",
        "Architected internal software solutions including an intelligent chatbot to automate inquiries and improve team workflows.",
      ],
    },
    {
      company: "ALSTOM",
      role: "Application Engineer",
      location: "Bangalore, India",
      dates: "Sep 2022 – Jun 2024",
      bullets: [
        "Developed and maintained real-time front-end applications in C# (.NET), improving responsiveness by 20%.",
        "Designed interfaces for railway monitoring systems, reducing operator training time by 15%.",
        "Configured and optimized databases, improving data retrieval efficiency by 30%.",
        "Led troubleshooting and optimization efforts, reducing downtime by 25% through proactive maintenance.",
      ],
    },
    {
      company: "WIPRO",
      role: "Product Engineer",
      location: "Bangalore, India",
      dates: "Aug 2021 – Sep 2022",
      bullets: [
        "Built full-stack features using Node.js and React for secure, scalable systems supporting 5,000+ daily transactions.",
        "Optimized end-to-end processing flows, reducing processing time by 18%.",
        "Worked with cross-functional teams to meet security standards and reduce vulnerabilities by 20%.",
      ],
    },
  ];
  