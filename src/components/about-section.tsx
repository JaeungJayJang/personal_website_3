"use client";

import { motion } from "framer-motion";
import { Code, Brain, Rocket, Users } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in modern web technologies including React, Node.js, and Python.",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Skilled at analyzing complex problems and implementing effective software solutions.",
    },
    {
      icon: Rocket,
      title: "Software Engineering",
      description: "Building scalable applications with focus on performance and maintainability.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively in cross-functional teams and agile development environments.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a software engineer with a passion for building innovative solutions and 
            solving complex problems through technology and data-driven approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in software engineering has been driven by a passion for solving complex 
                problems and creating meaningful impact through technology. With experience at leading 
                companies like BioNTech and BlueSphere Bio, I've had the opportunity to work on 
                challenging projects that require both technical expertise and attention to detail.
              </p>
              <p>
                I specialize in full-stack development, data analysis, and building scalable software 
                solutions. My technical expertise spans modern web frameworks, backend systems, 
                databases, and cloud technologies. I enjoy working on projects that combine technical 
                complexity with real-world impact.
              </p>
              <p>
                I'm passionate about continuous learning and staying current with emerging technologies. 
                I believe in writing clean, maintainable code and collaborating effectively with teams 
                to deliver high-quality software solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Current Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Software engineering, full-stack development, and building innovative solutions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">Virginia, United States</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interests</h4>
                  <p className="text-sm text-muted-foreground">
                    Web Development, Data Analysis, Cloud Computing, Open Source
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
