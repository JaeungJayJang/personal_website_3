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
    position: "Software Engineer",
    period: "Jun 2023 - Present",
    location: "Gaithersburg, MD",
    description: [
      "Engineer scalable cloud-based bioinformatics workflows using Nextflow, cutting analysis runtime from overnight to hours and automating processes to accelerate research timelines",
      "Collaborate with cross-site teams to design and implement components of a centralized internal database, supporting organizational goals and data accessibility",
      "Support CI/CD pipeline best practices, version control, and documentation standards to ensure reproducible workflows and seamless team collaboration"
    ],
    technologies: ["Nextflow", "Python", "AWS", "Docker", "Git", "CI/CD"],
    isActive: true,
    gradient: "from-purple-500 to-pink-500",
    accentColor: "text-purple-400",
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
    gradient: "from-blue-500 to-purple-500",
    accentColor: "text-blue-400",
    companyUrl: "https://bluespherebio.com"
  }
];
