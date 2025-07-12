import { Globe, Palette, Code, Cpu, Gamepad2, LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  shortDesc: string;
  technologies: string[];
  features: string[];
  icon: LucideIcon;
  category: string;
  period?: string;
  hasGithub: boolean;
  hasDemo: boolean;
  featured: boolean;
  gradient: string;
  accentColor: string;
  bgColor: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "jang.jaeung.com V3",
    description: "Modern professional portfolio built with Next.js 15, TypeScript, and Tailwind CSS 4.0. Features smooth Framer Motion animations, dynamic theme switching, server-side contact API, and AI-enhanced development workflow with Claude Sonnet 4.",
    shortDesc: "Professional portfolio showcasing modern web development with AI-enhanced workflow",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS 4.0", "Framer Motion", "Vercel Analytics", "Nodemailer"],
    features: [
      "Next.js App Router with Server Components",
      "Dynamic dark/light theme with system detection",
      "Smooth animations with Framer Motion",
      "Server-side contact form with email API",
      "SEO optimized with Open Graph meta tags",
      "AI-enhanced development with Claude Sonnet 4",
      "Vercel deployment with custom domain",
      "TypeScript for full type safety"
    ],
    icon: Code,
    category: "Web Development",
    period: "Jul 2025",
    hasGithub: true,
    hasDemo: true,
    featured: true,
    gradient: "from-violet-500/60 to-indigo-500/60",
    accentColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
    githubUrl: "https://github.com/JaeungJayJang/personal_website_3",
    demoUrl: "https://jang.jaeung.com"
  },
  {
    title: "Developer's Blog",
    description: "A personal blog to document technical projects using Next.js (frontend) and FastAPI (backend). Integrated Blocknote.js for rich text editing, Auth.js for authentication, and MongoDB with Beanie ODM.",
    shortDesc: "Full-stack blog platform with rich text editing and cloud deployment",
    technologies: ["Next.js", "FastAPI", "MongoDB", "Blocknote.js", "Auth.js", "Beanie ODM"],
    features: [
      "Rich text editing with Blocknote.js",
      "Secure authentication with Auth.js",
      "Cloud deployment on AWS",
      "MongoDB with Beanie ODM for data management"
    ],
    icon: Globe,
    category: "Web Development",
    period: "Jul 2024 - Present",
    hasGithub: false, // disable until they are back online again
    hasDemo: false,  // disable until they are back online again
    featured: true,
    gradient: "from-blue-500/60 to-purple-500/60",
    accentColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    demoUrl: "https://blog.jaeung.dev" // Add your actual demo URL
  },
  {
    title: "jang.jaeung.com V2",
    description: "Portfolio site to showcase design aesthetic and technical skills using Next.js, Tailwind CSS, and Spline. Features a clean and responsive layout, deployed on GitHub Pages via GitHub Actions.",
    shortDesc: "Portfolio website showcasing 3D animations designed with Spline and built with Next.js",
    technologies: ["Next.js", "Tailwind CSS", "Spline"],
    features: [
      "Clean and responsive layout",
      "Spline 3D animations",
      "Automated deployment with GitHub Actions",
      "Optimized for performance and design"
    ],
    icon: Palette,
    category: "Web Development",
    period: "Jul 2024 - Present",
    hasGithub: true,
    hasDemo: true,
    featured: false,
    gradient: "from-emerald-500/60 to-teal-500/60",
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    githubUrl: "https://github.com/JaeungJayJang/personal_website",
    demoUrl: "https://jang2.jaeung.com"
  },
  {
    title: "Custom Keyboard",
    description: "Custom firmware using QMK for my first split keyboard! Hardware project featuring custom key mapping and personalized configuration.",
    shortDesc: "Sofle split keyboard with QMK firmware",
    technologies: ["Pro Micro", "QMK", "C"],
    features: [
      "Custom split keyboard design",
      "QMK firmware programming",
      "Hardware assembly and configuration",
      "Personalized key mapping"
    ],
    icon: Code,
    category: "Hardware",
    hasGithub: false,
    hasDemo: false,
    featured: false,
    gradient: "from-orange-500/60 to-red-500/60",
    accentColor: "text-orange-400",
    bgColor: "bg-orange-500/10"
  },
  {
    title: "ESP32 Tyranitar",
    description: "3D pokemon, Tyranitar, powered with ESP32 and micropython. Interactive IoT project combining 3D printing with microcontroller programming.",
    shortDesc: "3D printed Pokemon with ESP32 microcontroller for interactive features",
    technologies: ["ESP32", "MicroPython", "3D Printing"],
    features: [
      "3D printed Pokemon model",
      "ESP32 microcontroller integration",
      "MicroPython programming",
      "Interactive hardware project"
    ],
    icon: Cpu,
    category: "IoT",
    hasGithub: false,
    hasDemo: false,
    featured: false,
    gradient: "from-purple-500/60 to-pink-500/60",
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    title: "JK Guest House",
    description: "Professional website for a Korean guesthouse business featuring property showcase, room gallery, and booking information. Built as a client project with responsive design and optimized performance.",
    shortDesc: "Business website for guesthouse accommodation with Korean content and responsive design",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    features: [
      "Responsive design with Korean content",
      "Property gallery and room showcase",
      "Contact and booking information",
      "Optimized for business needs"
    ],
    icon: Globe,
    category: "Web Development",
    period: "2024",
    hasGithub: false,
    hasDemo: true,
    featured: false,
    gradient: "from-green-500/60 to-emerald-500/60",
    accentColor: "text-green-400",
    bgColor: "bg-green-500/10",
    demoUrl: "https://www.jkguesthouse.com"
  },
  {
    title: "Catch a Cat",
    description: "Mobile game to catch as many coins as possible without getting caught by the dog, built with Flutter and Flame engine for cross-platform gameplay.",
    shortDesc: "Cross-platform mobile game built with Flutter and Flame engine",
    technologies: ["Flutter", "Dart", "Flame Engine"],
    features: [
      "Cross-platform mobile game",
      "Game physics and collision detection",
      "Sprite animations and graphics",
      "Score tracking and gameplay mechanics"
    ],
    icon: Gamepad2,
    category: "Mobile Game",
    hasGithub: false,
    hasDemo: false,
    featured: false,
    gradient: "from-cyan-500/60 to-blue-500/60",
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10"
  }
];

export const projectCategories = ["All", "Web Development", "Hardware", "IoT", "Mobile Game"];
