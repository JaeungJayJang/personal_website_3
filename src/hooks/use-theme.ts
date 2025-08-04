import { currentTheme, themes, type ThemeNames } from '@/data/app-themes';
import { useState, useEffect } from 'react';

/**
 * Hook for managing application themes
 * Provides easy access to current theme colors and switching functionality
 */
export function useTheme() {
  const [activeTheme, setActiveTheme] = useState(currentTheme);
  const [themeName, setThemeName] = useState<ThemeNames>('cyberpunk');

  // Function to switch themes
  const switchTheme = (newTheme: ThemeNames) => {
    setActiveTheme(themes[newTheme]);
    setThemeName(newTheme);
    
    // Optional: Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('app-theme', newTheme);
    }
  };

  // Load saved theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('app-theme') as ThemeNames;
      if (savedTheme && themes[savedTheme]) {
        switchTheme(savedTheme);
      }
    }
  }, []);

  return {
    theme: activeTheme,
    themeName,
    switchTheme,
    availableThemes: Object.keys(themes) as ThemeNames[],
    
    // Convenience getters for easy access
    gradients: activeTheme.gradients,
    text: activeTheme.text,
    interactive: activeTheme.interactive,
    effects: activeTheme.effects,
  };
}

/**
 * Utility function to get theme classes without React hook
 * Useful for static data files and non-component contexts
 */
export function getThemeClasses() {
  return {
    gradients: currentTheme.gradients,
    text: currentTheme.text,
    interactive: currentTheme.interactive,
    effects: currentTheme.effects,
  };
}
