"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, ArrowRight, Briefcase, Star } from "lucide-react";
import { experiences } from "@/data/experiences";
import { themeGradients, themeText, themeEffects } from "@/data/app-themes";

export function ExperienceSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="experience" className={`relative py-24 bg-gradient-to-br ${themeEffects.ambient[1]} overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-20 right-20 w-32 h-32 ${themeEffects.glow[1]} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 left-20 w-40 h-40 ${themeEffects.glow[0]} rounded-full blur-3xl animate-pulse delay-1000`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className={`w-6 h-6 ${themeText.secondary}`} />
            <h2 className={`text-4xl sm:text-5xl font-bold ${themeGradients.accent} bg-clip-text text-transparent pb-1`}>
              Experience
            </h2>
            <Star className={`w-6 h-6 ${themeText.accent}`} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in software engineering, building solutions for biotech and healthcare.
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                {/* Status indicator */}
                {exp.isActive && (
                  <div className={`absolute top-6 right-6 flex items-center gap-2 px-4 py-2 ${themeGradients.warm} text-white text-sm font-medium rounded-full border border-green-500/50 shadow-lg backdrop-blur-sm`}>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Current
                  </div>
                )}

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="mb-4 sm:mb-0">
                    <h3 className={`text-2xl font-bold ${themeGradients.primary} bg-clip-text text-transparent mb-2`}>
                      {exp.position}
                    </h3>
                    <h4 className={`text-xl font-semibold mb-4 ${themeGradients.secondary} bg-clip-text text-transparent`}>
                      {exp.company}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className={`w-4 h-4 ${themeText.primary}`} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${themeText.accent}`} />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-muted-foreground">
                        <div className="relative flex-shrink-0 mt-1">
                          <ArrowRight className={`w-4 h-4 ${themeText.primary}`} />
                          <div className={`absolute -top-1 -right-1 w-2 h-2 ${themeGradients.accent} rounded-full animate-pulse opacity-60`} />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-background/80 to-muted/40 border border-border/50 text-foreground font-medium text-sm rounded-xl hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in working together? Let's discuss opportunities and build something amazing.
          </p>
          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className={`${themeGradients.primary} text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
