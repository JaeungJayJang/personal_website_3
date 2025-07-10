"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Building, Code, Briefcase } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "BlueSphere Bio",
      position: "Software Developer",
      period: "2022 - 2023",
      location: "Pittsburgh, PA",
      description: [
        "Designed and implemented software solutions for biotech applications",
        "Built web applications for data management and analysis",
        "Developed APIs and database systems for laboratory operations",
        "Contributed to improving operational efficiency through technology"
      ],
      technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Python"],
      type: "biotech",
      icon: <Code className="w-5 h-5" />
    },
    {
      company: "BioNTech",
      position: "Software Engineer",
      period: "2023 - Present",
      location: "Gaithersburg, MD",
      description: [
        "Develop and maintain software systems for pharmaceutical research and development",
        "Build data analysis tools and pipelines for processing research data",
        "Collaborate with cross-functional teams to support drug discovery initiatives",
        "Implement solutions to improve research workflow efficiency"
      ],
      technologies: ["Python", "JavaScript", "SQL", "AWS", "Docker", "React"],
      type: "pharma",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
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
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software engineering, building innovative solutions for biotech and healthcare.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 rounded-full" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-16 last:mb-0"
            >
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center">
                {index % 2 === 0 ? (
                  // Left side
                  <>
                    <div className="w-1/2 pr-8">
                      <ExperienceCard exp={exp} index={index} />
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg border-4 border-background relative z-10">
                      {exp.icon}
                    </div>
                    <div className="w-1/2 pl-8" />
                  </>
                ) : (
                  // Right side
                  <>
                    <div className="w-1/2 pr-8" />
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg border-4 border-background relative z-10">
                      {exp.icon}
                    </div>
                    <div className="w-1/2 pl-8">
                      <ExperienceCard exp={exp} index={index} />
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                <ExperienceCard exp={exp} index={index} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Ready for New Challenges</h3>
            <p className="text-muted-foreground mb-6">
              I'm passionate about creating innovative solutions that make a difference. 
              Let's discuss how I can contribute to your team's success.
            </p>
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium hover:from-primary/90 hover:to-accent/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: any; index: number }) {
  return (
    <motion.div
      className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 group"
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/30">
            <Building className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {exp.position}
            </h3>
            <h4 className="text-primary font-semibold">{exp.company}</h4>
          </div>
        </div>
        
        {/* Mobile icon */}
        <div className="lg:hidden w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
          {exp.icon}
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="font-medium">{exp.period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-medium">{exp.location}</span>
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-3 mb-6">
        {exp.description.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mt-2 flex-shrink-0" />
            <span className="text-muted-foreground leading-relaxed text-sm">{item}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="pt-4 border-t border-border/30">
        <h5 className="font-semibold text-sm mb-3 text-muted-foreground">Technologies</h5>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech: string, i: number) => (
            <motion.span
              key={i}
              className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-medium text-xs rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
