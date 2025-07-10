"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Mail } from "lucide-react";
import { socialLinks } from "@/data/contact";
import { quickLinks, siteConfig } from "@/data/site-config";
import { Logo } from "@/components/logo";

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/10 to-background border-t border-border/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Logo showFullName={true} size="lg" />
                </motion.div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                {siteConfig.description}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className={`bg-gradient-to-r ${link.gradient} p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-6 text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-left group flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-6 text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </h4>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                    {siteConfig.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-2 align-middle">
                    <span className="w-2 h-2 bg-white rounded-full block" />
                  </span>
                  {siteConfig.location}
                </p>
                <p className="text-sm bg-gradient-to-r from-background/50 to-muted/30 border border-border/50 rounded-lg p-3 backdrop-blur-sm">
                  Open to new opportunities and collaborations
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Built with</span>
              <motion.div
                className="mx-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>using Next.js and Tailwind CSS</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
