"use client";

import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import { skills, aboutContent } from "@/data/about";

export function AboutSection() {

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
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
            <Star className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-1">
              {aboutContent.title}
            </h2>
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {aboutContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {aboutContent.journeyTitle}
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {aboutContent.journeyParagraphs.map((paragraph, index) => {
                  if (typeof paragraph === 'string') {
                    return <p key={index}>{paragraph}</p>;
                  }
                  
                  let text = paragraph.text;
                  const parts = [];
                  let lastIndex = 0;
                  
                  paragraph.highlights.forEach((highlight) => {
                    const wordIndex = text.indexOf(highlight.word, lastIndex);
                    if (wordIndex !== -1) {
                      // Add text before the highlight
                      if (wordIndex > lastIndex) {
                        parts.push(text.substring(lastIndex, wordIndex));
                      }
                      // Add the highlighted word
                      parts.push(
                        <span key={`${index}-${wordIndex}`} className={highlight.className}>
                          {highlight.word}
                        </span>
                      );
                      lastIndex = wordIndex + highlight.word.length;
                    }
                  });
                  
                  // Add remaining text
                  if (lastIndex < text.length) {
                    parts.push(text.substring(lastIndex));
                  }
                  
                  return (
                    <p key={index}>
                      {parts}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-background/80 to-muted/20 border border-border/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <div className="space-y-8">
                <div className="relative">
                  <h4 className="font-semibold text-lg mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {aboutContent.personalInfo.currentFocus.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {aboutContent.personalInfo.currentFocus.description}
                  </p>
                </div>
                <div className="relative">
                  <h4 className="font-semibold text-lg mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {aboutContent.personalInfo.location.title}
                  </h4>
                  <p className="text-muted-foreground">{aboutContent.personalInfo.location.description}</p>
                </div>
                <div className="relative">
                  <h4 className="font-semibold text-lg mb-3 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                    {aboutContent.personalInfo.interests.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {aboutContent.personalInfo.interests.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-r ${skill.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <skill.icon className={`w-7 h-7 text-white`} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
                </div>
                <h3 className="font-semibold text-lg mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
