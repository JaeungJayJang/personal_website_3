"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Clock, AlertTriangle } from "lucide-react";
import { Logo } from "@/components/logo";
import { themeGradients, themeText, themeEffects } from "@/data/app-themes";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Ensure we're on the client side to prevent hydration mismatch
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient]);

  // Separate effect for navigation to avoid setState during render
  useEffect(() => {
    if (countdown === 0 && isClient) {
      router.push('/');
    }
  }, [countdown, router, isClient]);

  const handleGoHome = () => {
    router.push('/');
  };

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
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeEffects.ambient[0]} flex items-center justify-center relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-20 left-20 w-40 h-40 ${themeEffects.glow[0]} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 right-20 w-32 h-32 ${themeEffects.glow[1]} rounded-full blur-3xl animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/4 w-28 h-28 ${themeEffects.glow[2]} rounded-full blur-3xl animate-pulse delay-2000`} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <Logo size="lg" showFullName/>
          </motion.div>

          {/* 404 Number */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className={`text-8xl sm:text-9xl font-bold ${themeGradients.rainbow} bg-clip-text text-transparent`}>
              404
            </h1>
            <div className={`absolute -top-4 -right-4 w-8 h-8 ${themeGradients.accent} rounded-full animate-pulse opacity-60`} />
          </motion.div>

          {/* Error Message */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className={`w-6 h-6 ${themeText.warning}`} />
              <h2 className={`text-2xl sm:text-3xl font-bold ${themeGradients.secondary} bg-clip-text text-transparent`}>
                Page Not Found
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </motion.div>

          {/* Auto-redirect Info */}
          <motion.div 
            variants={itemVariants}
            className="bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className={`w-5 h-5 ${themeText.primary}`} />
              <p className="text-muted-foreground">
                Redirecting to home page in{" "}
                <span className={`font-bold ${themeText.primary} text-xl`}>
                  {isClient ? countdown : 10}
                </span>{" "}
                second{(isClient ? countdown : 10) !== 1 ? 's' : ''}
              </p>
            </div>
            
            {/* Countdown Progress Bar */}
            <div className="w-full bg-muted/30 rounded-full h-2 mb-4">
              <motion.div
                className={`${themeGradients.primary} h-2 rounded-full`}
                initial={{ width: "100%" }}
                animate={isClient ? { width: "0%" } : { width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
              />
            </div>
            
            <p className="text-sm text-muted-foreground">
              Or click the button below to go immediately
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleGoHome}
              className={`${themeGradients.primary} text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-3`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Go Home
            </motion.button>
            
            <motion.button
              onClick={() => window.history.back()}
              className="bg-background/50 backdrop-blur-md border border-border/50 text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent transition-all duration-300 inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </motion.div>

          {/* Fun Message */}
          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-sm text-muted-foreground italic">
              "Every 404 is just a 200 waiting to happen." - Anonymous Developer
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
