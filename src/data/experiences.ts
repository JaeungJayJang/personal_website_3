export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  isActive: boolean;
  gradient: string;
  accentColor: string;
  companyUrl?: string;
}

export const experiences: Experience[] = [
  {
    company: "BlueSphere Bio",
    position: "Software Developer",
    period: "2022 - 2023",
    location: "Pittsburgh, PA",
    description: [
      "Designed and implemented software solutions for biotech applications",
      "Built web applications for data management and analysis",
      "Developed APIs and database systems for laboratory operations",
      "Contributed to improving operational efficiency through technology"
    ],
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Python"],
    isActive: false,
    gradient: "from-blue-500 to-purple-500",
    accentColor: "text-blue-400",
    companyUrl: "https://bluespherebio.com"
  },
  {
    company: "BioNTech",
    position: "Software Engineer",
    period: "2023 - Present",
    location: "Gaithersburg, MD",
    description: [
      "Develop and maintain software systems for pharmaceutical research and development",
      "Build data analysis tools and pipelines for processing research data",
      "Collaborate with cross-functional teams to support drug discovery initiatives",
      "Implement solutions to improve research workflow efficiency"
    ],
    technologies: ["Python", "JavaScript", "SQL", "AWS", "Docker", "React"],
    isActive: true,
    gradient: "from-purple-500 to-pink-500",
    accentColor: "text-purple-400",
    companyUrl: "https://biontech.de"
  }
];
