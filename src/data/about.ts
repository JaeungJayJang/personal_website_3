import { Code, LucideIcon, Database, Cloud, Workflow } from "lucide-react";

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
    color: "from-blue-500 to-purple-500",
    iconColor: "text-blue-400"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Experienced in AWS cloud services, HPC clusters, and hybrid architectures with 40% cost optimization achievements.",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400"
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Proficient in Next.js, FastAPI, React, and Python for building workflow management platforms and analysis tools.",
    color: "from-pink-500 to-orange-500",
    iconColor: "text-pink-400"
  },
  {
    icon: Database,
    title: "Data Platform Design",
    description: "Co-authored patents and designed scalable data management platforms, integrating LDAP authentication and centralized databases.",
    color: "from-orange-500 to-cyan-500",
    iconColor: "text-orange-400"
  },
];

export const aboutContent = {
  title: "About Me",
  subtitle: "I'm a software engineer specializing in bioinformatics workflows, cloud architecture, and full-stack development. I build scalable solutions that accelerate scientific research and optimize computational resources.",
  journeyTitle: "My Journey",
  journeyParagraphs: [
    "At BioNTech, a large company with great resources and a startup mindset, I engineer scalable cloud-based bioinformatics workflows using Nextflow, cutting analysis runtime from overnight to hours. I collaborate with cross-site teams to design centralized internal databases that facilitate data accessibility and support organizational goals.",
    "Working closely with scientists and researchers, I've become adaptable and attentive to their needs, helping bridge the gap between technology and science. I support CI/CD pipeline best practices, version control, and documentation standards to ensure reproducible workflows and seamless team collaboration.",
    "My time at BlueSphere Bio gave me the opportunity to develop a Nextflow-driven workflow management platform using Next.js and FastAPI, co-author patent filings, and achieve a 40% reduction in AWS costs through optimization. I transformed hybrid server architectures by integrating Slurm HPC clusters with LDAP authentication, significantly boosting research throughput."
  ],
  personalInfo: {
    currentFocus: {
      title: "Current Focus",
      description: "Bioinformatics workflows, cloud-based pipelines, and scalable data management platforms"
    },
    location: {
      title: "Location",
      description: "Virginia, United States"
    },
    interests: {
      title: "Interests",
      description: "Bioinformatics, Cloud Computing, Workflow Automation, Research Technology"
    }
  }
};
