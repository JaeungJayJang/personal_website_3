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
      "Introduced real-time monitoring tools that gave teams greater visibility into their research progress",
      "Strengthened infrastructure by transforming servers into a cluster environment, improving performance and reliability",
      "Created internal platforms that allowed scientists to explore and analyze data independently, reducing turnaround times",
      "Helped the company scale sustainably by cutting cloud costs while maintaining high system availability"
    ],
    technologies: ["Next.js", "FastAPI", "React", "Python", "Nextflow", "Slurm", "LDAP", "AWS", "HPC", "MongoDB"],
    isActive: false,
    gradient: themeGradients.cool,
    accentColor: themeText.primary,
    companyUrl: "https://bluespherebio.com"
  }
];
