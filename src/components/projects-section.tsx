"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, Database, Globe, Gamepad2, Cpu, Palette, Filter } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Developer's Blog",
      description: "A personal blog to document technical projects using Next.js (frontend) and FastAPI (backend), with secure cloud deployment on AWS. Integrated Blocknote.js for rich text editing, Auth.js for authentication, and MongoDB with Beanie ODM.",
      shortDesc: "Full-stack blog platform with rich text editing and cloud deployment",
      technologies: ["Next.js", "FastAPI", "MongoDB", "Blocknote.js", "Auth.js", "AWS", "Beanie ODM"],
      features: [
        "Rich text editing with Blocknote.js",
        "Secure authentication with Auth.js",
        "Cloud deployment on AWS",
        "MongoDB with Beanie ODM for data management"
      ],
      icon: Globe,
      category: "Web Development",
      period: "Jul 2024 – Present",
      hasGithub: false,
      hasDemo: true,
      featured: true,
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "jang.jaeung.com",
      description: "Portfolio site to showcase design aesthetic and technical skills using Next.js, Tailwind CSS, and Spline. Features a clean and responsive layout, deployed on GitHub Pages via GitHub Actions.",
      shortDesc: "Portfolio website with 3D animations and modern design",
      technologies: ["Next.js", "Tailwind CSS", "Spline", "GitHub Actions", "GitHub Pages"],
      features: [
        "Clean and responsive layout",
        "Spline 3D animations",
        "Automated deployment with GitHub Actions",
        "Optimized for performance and design"
      ],
      icon: Palette,
      category: "Portfolio",
      period: "Jul 2024 – Present",
      hasGithub: true,
      hasDemo: true,
      featured: false,
      gradient: "from-emerald-500/20 to-teal-500/20",
      accentColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10"
    },
    {
      title: "Custom Keyboard",
      description: "Custom firmware using QMK for my first split keyboard! Hardware project featuring custom key mapping and personalized configuration.",
      shortDesc: "QMK firmware for custom split keyboard design",
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
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "ESP32 Tyranitar",
      description: "3D pokemon, Tyranitar, powered with ESP32 and micropython. Interactive IoT project combining 3D printing with microcontroller programming.",
      shortDesc: "3D printed Pokemon with ESP32 microcontroller",
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
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Catch a Cat",
      description: "Mobile game to catch as many coins as possible without getting caught by the dog, built with Flutter and Flame engine for cross-platform gameplay.",
      shortDesc: "Cross-platform mobile game built with Flutter",
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
      gradient: "from-cyan-500/20 to-blue-500/20",
      accentColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10"
    }
  ];

  const categories = ["All", "Web Development", "Portfolio", "Hardware", "IoT", "Mobile Game"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: -30,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my side projects spanning web development, hardware, IoT, 
            and mobile game development. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-background/50 backdrop-blur-sm border border-border hover:bg-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Project */}
        {featuredProject && activeFilter === "All" && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`relative bg-gradient-to-br ${featuredProject.gradient} backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${featuredProject.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm`}>
                        <featuredProject.icon className={`w-8 h-8 ${featuredProject.accentColor}`} />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium rounded-full border border-border/50">
                          ⭐ Featured Project
                        </span>
                        {featuredProject.period && (
                          <p className="text-sm text-muted-foreground mt-1">{featuredProject.period}</p>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-background/50 backdrop-blur-sm text-sm rounded-full border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {featuredProject.technologies.length > 6 && (
                        <span className="px-3 py-1 bg-background/50 backdrop-blur-sm text-sm rounded-full border border-border/50">
                          +{featuredProject.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4">
                      {featuredProject.hasGithub && (
                        <motion.button
                          className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                          View Code
                        </motion.button>
                      )}
                      {featuredProject.hasDemo && (
                        <motion.button
                          className="bg-background/50 backdrop-blur-sm border border-border/50 px-6 py-3 rounded-xl font-medium hover:bg-accent transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </motion.button>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-background/20 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                      <h4 className="font-semibold mb-4 text-lg">Key Features</h4>
                      <div className="space-y-3">
                        {featuredProject.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-2 h-2 ${featuredProject.bgColor} rounded-full mt-2 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {regularProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${index}`}
                variants={itemVariants}
                className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -8, rotateY: 5 }}
                style={{ 
                  height: index % 3 === 0 ? 'auto' : index % 2 === 0 ? '400px' : '380px' 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${project.bgColor} w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                      <project.icon className={`w-6 h-6 ${project.accentColor}`} />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs bg-background/50 backdrop-blur-sm text-muted-foreground px-2 py-1 rounded-full border border-border/50">
                        {project.category}
                      </span>
                      {project.period && (
                        <span className="text-xs text-muted-foreground">
                          {project.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                    {project.shortDesc || project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-background/30 backdrop-blur-sm text-xs rounded border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-background/30 backdrop-blur-sm text-xs rounded border border-border/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.hasGithub && (
                      <motion.button
                        className="flex-1 bg-primary text-primary-foreground py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.button>
                    )}
                    {project.hasDemo && (
                      <motion.button
                        className={`${project.hasGithub ? 'flex-1' : 'w-full'} bg-background/30 backdrop-blur-sm border border-border/50 py-2 px-3 rounded-lg text-sm font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.button>
                    )}
                    {!project.hasGithub && !project.hasDemo && (
                      <div className="w-full py-2 px-3 rounded-lg text-sm text-muted-foreground text-center bg-background/20 backdrop-blur-sm border border-dashed border-border/50">
                        Hardware/Personal Project
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. Check out my GitHub profile for the complete collection of projects, contributions, and experiments.
            </p>
            <motion.a
              href="https://github.com/JaeungJayJang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              Explore GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
