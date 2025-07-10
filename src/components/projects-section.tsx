"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, Filter, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { projects, projectCategories } from "@/data/projects";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

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
        duration: 0.6,
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
    <section id="projects" className="relative py-24 bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-40 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-background/50 backdrop-blur-md border border-border/50 hover:bg-accent hover:border-primary/30'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
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
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
              <div className="relative p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                        <featuredProject.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30 text-sm font-medium rounded-full backdrop-blur-sm">
                          ⭐ Featured Project
                        </span>
                        {featuredProject.period && (
                          <p className="text-sm text-muted-foreground mt-2">{featuredProject.period}</p>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {featuredProject.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {featuredProject.technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-background/50 backdrop-blur-sm text-sm rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {featuredProject.technologies.length > 6 && (
                        <span className="px-4 py-2 bg-muted text-sm rounded-xl">
                          +{featuredProject.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4">
                      {featuredProject.hasGithub && (
                        <motion.button
                          className="flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-accent transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                          Code
                        </motion.button>
                      )}
                      {featuredProject.hasDemo && (
                        <motion.button
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </motion.button>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-background/80 to-muted/20 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                      <h4 className="text-lg font-semibold mb-4 text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {featuredProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {regularProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:border-primary/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-r ${project.gradient} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gradient bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-background/50 backdrop-blur-sm text-xs rounded-lg border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-muted text-xs rounded-lg">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.hasGithub && (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-accent transition-colors text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.button>
                    )}
                    {project.hasDemo && (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Want to see more projects or discuss a collaboration? Let's connect!
          </p>
          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star className="w-5 h-5" />
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
