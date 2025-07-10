import { Code, Brain, Rocket, Users, LucideIcon } from "lucide-react";

export interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}

export const skills: Skill[] = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Experienced in modern web technologies including React, Node.js, and Python.",
    color: "from-blue-500 to-purple-500",
    iconColor: "text-blue-400"
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Skilled at analyzing complex problems and implementing effective software solutions.",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400"
  },
  {
    icon: Rocket,
    title: "Software Engineering",
    description: "Building scalable applications with focus on performance and maintainability.",
    color: "from-pink-500 to-orange-500",
    iconColor: "text-pink-400"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in cross-functional teams and agile development environments.",
    color: "from-orange-500 to-cyan-500",
    iconColor: "text-orange-400"
  },
];

export const aboutContent = {
  title: "About Me",
  subtitle: "I'm a software engineer with a passion for building innovative solutions and solving complex problems through technology and data-driven approaches.",
  journeyTitle: "My Journey",
  journeyParagraphs: [
    "At BioNTech, a large company with great resources and a startup mindset, I focused on building scalable cloud-based pipelines and managing internal databases to help scientists accelerate their research. I enjoyed collaborating with cross-site teams and making complex processes more efficient and accessible.",
    "Working closely with scientists and researchers, I've become adaptable and attentive to the needs of others, helping bridge the gap between technology and science through teamwork and communication.",
    "My time at BlueSphere Bio gave me the opportunity to thrive in a dynamic, fast-paced environment and tackle new technical challenges. I'm enthusiastic about technology, always eager to learn, and approach every project with curiosity and humility."
  ],
  personalInfo: {
    currentFocus: {
      title: "Current Focus",
      description: "Software engineering, full-stack development, and building innovative solutions"
    },
    location: {
      title: "Location",
      description: "Virginia, United States"
    },
    interests: {
      title: "Interests",
      description: "Web Development, Data Analysis, Cloud Computing, Open Source"
    }
  }
};
