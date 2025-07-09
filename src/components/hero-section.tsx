"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function HeroSection() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/JaeungJayJang",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/jaeung-jang",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:jaeung.jang@gmail.com",
      icon: Mail,
    },
  ];

  const highlights = [
    { number: "2+", label: "Years Experience" },
    { number: "5+", label: "Projects Built" },
    { number: "2", label: "Companies" },
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Minimalist background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Simple geometric accent */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-border/20 rounded-full" />
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-primary/5 rounded-lg rotate-12" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Hello, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Jaeung Jang
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
                Software Engineer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I build robust software solutions and work with cutting-edge technologies 
                at leading biotech companies. Currently focused on creating impactful 
                applications that solve real-world problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.button>
                
                <motion.button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Info */}
          <motion.div
            variants={itemVariants}
            className="lg:justify-self-end"
          >
            <div className="bg-card border border-border rounded-2xl p-8 space-y-8 max-w-md">
              
              {/* Quick Stats */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Stats</h3>
                <div className="grid grid-cols-3 gap-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="text-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-primary">{item.number}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Status */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Currently</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Software Engineer at BioNTech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Based in Virginia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Open to opportunities</span>
                  </div>
                </div>
              </div>

              {/* Latest Work */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Latest</h3>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Developer's Blog</div>
                  <div className="text-xs text-muted-foreground">
                    Building a technical blog with Next.js and FastAPI
                  </div>
                  <div className="flex gap-1">
                    <span className="text-xs bg-muted px-2 py-1 rounded">Next.js</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">FastAPI</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
