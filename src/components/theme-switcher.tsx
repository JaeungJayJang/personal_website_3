"use client";

import { useState } from "react";
import { Palette, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

interface ThemeSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeSwitcher({ className = "", showLabel = true }: ThemeSwitcherProps) {
  const { themeName, switchTheme, availableThemes, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: string) => {
    switchTheme(newTheme as any);
    setIsOpen(false);
  };

  const themeDisplayNames = {
    cyberpunk: "Cyberpunk",
    ocean: "Ocean", 
    sunset: "Sunset",
    forest: "Forest",
    monochrome: "Monochrome"
  };

  const themeColors = {
    cyberpunk: "from-cyan-400 to-purple-400",
    ocean: "from-blue-400 to-teal-400",
    sunset: "from-orange-400 to-pink-400", 
    forest: "from-emerald-400 to-green-400",
    monochrome: "from-gray-400 to-gray-600"
  };

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg
          bg-background/80 backdrop-blur-md border border-border/50
          hover:bg-accent/50 transition-all duration-200
          ${theme.interactive.focus}
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Palette className="w-4 h-4" />
        {showLabel && (
          <>
            <span className="text-sm font-medium">
              {themeDisplayNames[themeName as keyof typeof themeDisplayNames]}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-full left-0 mt-2 w-48 z-50
              bg-background/95 backdrop-blur-md border border-border/50 rounded-lg
              shadow-lg shadow-background/20
            "
          >
            <div className="p-2">
              {availableThemes.map((theme) => (
                <motion.button
                  key={theme}
                  onClick={() => handleThemeChange(theme)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-md
                    text-left transition-all duration-200
                    hover:bg-accent/50 
                    ${themeName === theme ? 'bg-accent/30' : ''}
                  `}
                  whileHover={{ x: 4 }}
                >
                  <div 
                    className={`
                      w-4 h-4 rounded-full bg-gradient-to-r
                      ${themeColors[theme as keyof typeof themeColors]}
                    `}
                  />
                  <span className="text-sm font-medium">
                    {themeDisplayNames[theme as keyof typeof themeDisplayNames]}
                  </span>
                  {themeName === theme && (
                    <motion.div
                      layoutId="active-theme"
                      className="ml-auto w-2 h-2 bg-current rounded-full opacity-60"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            <div className="border-t border-border/30 p-2">
              <div className="text-xs text-muted-foreground px-3 py-1">
                Theme persists across sessions
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

/**
 * Simple inline theme switcher for quick testing
 * Add this anywhere in your app to test themes
 */
export function QuickThemeSwitcher() {
  const { themeName, switchTheme, availableThemes } = useTheme();
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <select 
        value={themeName} 
        onChange={(e) => switchTheme(e.target.value as any)}
        className="
          px-3 py-1 text-sm rounded border border-border
          bg-background/90 backdrop-blur-sm
        "
      >
        {availableThemes.map(theme => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
