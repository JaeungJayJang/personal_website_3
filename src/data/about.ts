import { Code, LucideIcon, Database, Cloud, Workflow } from "lucide-react";
import { themeGradients, themeText } from "./app-themes";

export interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}

export const skills: Skill[] = [
  {
    icon: Workflow,
    title: "Bioinformatics Workflows",
    description: "Expert in Nextflow for building scalable, cloud-based bioinformatics pipelines that cut analysis runtime from overnight to hours.",
    color: themeGradients.cool,
    iconColor: themeText.primary
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Experienced in AWS cloud services, HPC clusters, and hybrid architectures.",
    color: themeGradients.secondary,
    iconColor: themeText.secondary
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Proficient in Next.js, FastAPI, React, and Python for building workflow management platforms and analysis tools.",
    color: themeGradients.accent,
    iconColor: themeText.accent
  },
  {
    icon: Database,
    title: "Data Platform Design",
    description: "Designed scalable data management platforms, integrating LDAP authentication and centralized databases.",
    color: themeGradients.warm,
    iconColor: themeText.warning
  },
];

export const aboutContent = {
  title: "About Me",
  subtitle: "I'm a software engineer passionate about building robust, scalable, and user-friendly software solutions. I specialize in cloud architecture, full-stack development, and workflow automation to empower teams and accelerate innovation.",
  journeyTitle: "My Journey",
  journeyParagraphs: [
    {
      text: "At BioNTech, I contributed to developing scalable cloud-based systems and managing internal platforms to streamline research and business operations. I enjoyed collaborating with cross-functional teams and making complex processes more efficient and accessible.",
      highlights: [{ word: "BioNTech", className: `${themeText.primary} font-semibold` }]
    },
    {
      text: "Working closely with scientists and researchers, I've become adaptable and attentive to their needs, helping bridge the gap between technology and science. I support CI/CD pipeline best practices, version control, and documentation standards to ensure reproducible workflows and seamless team collaboration.",
      highlights: []
    },
    {
      text: "My time at BlueSphere Bio gave me the opportunity to thrive in a dynamic, fast-paced environment and tackle new technical challenges. I'm enthusiastic about technology, always eager to learn, and approach every project with curiosity and humility.",
      highlights: [{ word: "BlueSphere Bio", className: `${themeText.secondary} font-semibold` }]
    }
  ],
  personalInfo: {
    currentFocus: {
      title: "Current Focus",
      description: "Cloud-native applications, scalable web platforms, and workflow automation"
    },
    location: {
      title: "Location",
      description: "Virginia, United States"
    },
    interests: {
      title: "Interests",
      description: "Software Architecture, Cloud Computing, Full-Stack Development, Automation"
    }
  }
};
