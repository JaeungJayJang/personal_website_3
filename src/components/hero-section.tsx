"use client";

import { motion, useAnimation } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Code, Coffee, Zap, Cpu, Database, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "whoami",
    "cat skills.txt",
    "ls -la projects/",
    "git status",
    "npm run build"
  ];

  const responses = [
    "jaeung@dev:~$ Software Engineer & Problem Solver",
    "jaeung@dev:~$ Next.js, Python, AWS, IoT, Game Dev",
    "jaeung@dev:~$ blog/ keyboard/ esp32-tyranitar/ catch-a-cat/",
    "jaeung@dev:~$ On branch main - Always shipping ✨",
    "jaeung@dev:~$ Building the future, one commit at a time"
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/JaeungJayJang",
      icon: Github,
      color: "hover:text-purple-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/jaeung-jang",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:wodndckato@gmail.com",
      icon: Mail,
      color: "hover:text-green-400",
    },
  ];

  const techStack = [
    { icon: Code, name: "Full Stack", color: "text-blue-400" },
    { icon: Database, name: "Databases", color: "text-green-400" },
    { icon: Globe, name: "Web Dev", color: "text-purple-400" },
    { icon: Cpu, name: "IoT/Hardware", color: "text-orange-400" },
  ];

const floatingElements = [
    { text: "const geek = true;", x: "10%", y: "20%", delay: 0.3 },
    { text: "npm install coffee", x: "80%", y: "30%", delay: 2.7 },
    { text: "git commit -m 'magic'", x: "15%", y: "70%", delay: 1.1 },
    { text: "while(true) { code(); }", x: "85%", y: "80%", delay: 3.4 },
    { text: "sudo apt install curiosity", x: "70%", y: "15%", delay: 0.6 },
    { text: "<NextJS />", x: "60%", y: "60%", delay: 2.2 },
    { text: "def solve(): return '🚀'", x: "30%", y: "50%", delay: 1.8 },
    { text: "aws deploy --prod", x: "55%", y: "10%", delay: 4.1 },
    { text: "print('Hello, World!')", x: "40%", y: "80%", delay: 0.9 },
    { text: "SELECT * FROM ideas;", x: "20%", y: "35%", delay: 3.0 },
    { text: "public static void main", x: "75%", y: "55%", delay: 1.5 },
    { text: "let wizard = '🧙‍♂️';", x: "65%", y: "75%", delay: 2.9 },
    { text: "#include <innovation.h>", x: "35%", y: "15%", delay: 0.4 },
    { text: "echo 'Stay curious!'", x: "50%", y: "90%", delay: 3.7 },
];

  // Typewriter effect
  useEffect(() => {
    const currentText = `$ ${commands[currentCommand]}`;
    const response = responses[currentCommand];
    
    if (isTyping) {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < currentText.length) {
          setDisplayedText(currentText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setDisplayedText(currentText + "\n" + response);
            setTimeout(() => {
              setIsTyping(false);
              setTimeout(() => {
                setCurrentCommand((prev) => (prev + 1) % commands.length);
                setIsTyping(true);
                setDisplayedText("");
              }, 2000);
            }, 1000);
          }, 500);
        }
      }, 100);
      
      return () => clearInterval(typeInterval);
    }
  }, [currentCommand, isTyping]);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Matrix-style grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'matrix-scroll 20s linear infinite'
          }} />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-500/30 rounded-lg"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 180],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-orange-500/40 rotate-45"
          animate={{ 
            rotate: [45, 405, 45],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Floating code snippets */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-bold font-mono text-green-400/40 pointer-events-none select-none"
            style={{ left: element.x, top: element.y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 0.9, 0],
              y: [-20, -40, -60],
            }}
            transition={{
              duration: 8,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            {element.text}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-8 h-8 text-green-400" />
                <span className="text-green-400 font-mono text-sm">dev@jaeung-terminal:~$</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">I'm a</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Software Engineer
                </span>
                <br />
                <span className="text-foreground">& Problem</span>
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Solver</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-mono">
                <span className="text-green-400">{">"}</span> Building digital experiences with passion for{" "}
                <span className="text-cyan-400 font-semibold">clean code</span>,{" "}
                <span className="text-purple-400 font-semibold">innovative solutions</span>, and{" "}
                <span className="text-pink-400 font-semibold">coffee-driven development</span> ☕
              </p>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-3"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 10,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                    initial={{ opacity: 0, rotateX: -30 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
                    rotateX: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Explore My Code
                  </span>
                </motion.button>
                
                <motion.button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-background/80 backdrop-blur-sm border-2 border-purple-500/50 text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(168, 85, 247, 0.8)",
                    rotateX: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Let's Connect
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-8">
                <span className="text-muted-foreground font-mono text-sm">find_me_at:</span>
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${link.color} transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotateY: 15,
                      filter: "drop-shadow(0 0 8px currentColor)"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Terminal */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* 3D Terminal Container */}
              <motion.div
                className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden w-full max-w-md"
                initial={{ rotateY: -20, rotateX: 10 }}
                animate={{ rotateY: 0, rotateX: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ 
                  rotateY: 2, 
                  rotateX: -2,
                  scale: 1.02
                }}
              >
                {/* Terminal Header */}
                <div className="bg-gray-800/90 px-6 py-4 border-b border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300 text-sm font-mono truncate">jaeung@dev-machine</span>
                    </div>
                    <Terminal className="w-5 h-5 text-green-400 flex-shrink-0" />
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 h-[300px] font-mono text-sm overflow-y-auto overflow-x-hidden">
                  <div className="space-y-4">
                    <div className="text-green-400">
                      Welcome to Jaeung's Dev Environment v2.0.1
                    </div>
                    <div className="text-gray-300">
                      Last login: {new Date().toLocaleDateString()} from localhost
                    </div>
                    <div className="border-t border-gray-700/50 pt-4">
                      <div className="text-cyan-400 whitespace-pre-wrap break-words leading-relaxed min-h-[60px]">
                        {displayedText}
                        {isTyping && (
                          <motion.span
                            className="inline-block w-2 h-5 bg-green-400 ml-1 align-text-bottom"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="pt-4 space-y-2 mt-auto">
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                          <span className="text-gray-400 truncate">Status: Currently coding</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <Coffee className="w-3 h-3 text-amber-500 flex-shrink-0" />
                          <span className="text-gray-400 truncate">Coffee level: Maximum</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-3 h-3 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-400 truncate">Mode: Full-stack wizard</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements around terminal */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-500 w-8 h-8 rounded-full"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-orange-500 w-6 h-6 rounded-lg"
                animate={{ 
                  rotateZ: [0, 180, 360],
                  y: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes matrix-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </section>
  );
}
