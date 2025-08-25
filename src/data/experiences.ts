import { themeGradients, themeText } from "./app-themes";

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
    company: "BioNTech US, BioNTech SE",
    position: "Software Engineer II",
    period: "Jun 2023 - Present",
    location: "Gaithersburg, MD",
    description: [
      "Improved scientific workflows to boost accuracy, speed, and reliability of research across global teams",
      "Built a genetic classification pipeline that cut analysis time from several days to just hours, helping more than 50 researchers accelerate discovery",
      "Developed a shared data platform that made complex datasets easier to access, strengthening collaboration across multiple sites",
      "Created tools that reduced manual work for scientists and enhanced the overall research process"
    ],
    technologies: ["Nextflow", "Python", "AWS", "Docker", "Git", "CI/CD"],
    isActive: true,
    gradient: themeGradients.secondary,
    accentColor: themeText.secondary,
    companyUrl: "https://biontech.de"
  },
  {
    company: "BlueSphere Bio",
    position: "Bioinformatics Software Engineer",
    period: "Nov 2020 - Jun 2023",
    location: "Pittsburgh, PA",
    description: [
      "Developed Nextflow-driven workflow management platform using Next.js and FastAPI, delivering real-time progress monitoring, user-specific permissions, and intermediate result access for enhanced operational transparency",
      "Developed a React + FastAPI-based TCR analysis platform with user-friendly web interface, enabling bench scientists to independently analyze data and automate processes",
      "Transformed hybrid server architecture by integrating Slurm HPC clusters and centralized user authentication via LDAP, resulting in optimized computational resource allocation",
      "Achieved a 40% reduction in expected AWS costs by optimizing S3 and Storage Gateway usage, maintaining high system availability without compromising performance",
      "Co-authored two patent filings, contributing to proprietary datasets and designing a scalable data management platform that boosted research throughput"
    ],
    technologies: ["Next.js", "FastAPI", "React", "Python", "Nextflow", "Slurm", "LDAP", "AWS", "HPC", "MongoDB"],
    isActive: false,
    gradient: themeGradients.cool,
    accentColor: themeText.primary,
    companyUrl: "https://bluespherebio.com"
  }
];
