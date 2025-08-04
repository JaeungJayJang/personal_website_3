// Central Theme System for the entire application
// This file defines all colors, gradients, and design tokens used across the app

export interface ColorPalette {
  // Core Brand Colors (these drive the entire theme)
  primary: string;     // Main brand color
  secondary: string;   // Secondary brand color  
  accent: string;      // Accent color for highlights
  warning: string;     // Warning/alert color
  success: string;     // Success state color
  error: string;       // Error state color
  
  // Gradient Combinations
  gradients: {
    primary: string;      // Main brand gradient
    secondary: string;    // Secondary gradient
    accent: string;       // Accent gradient
    warm: string;         // Warm tone gradient
    cool: string;         // Cool tone gradient
    rainbow: string;      // Multi-color gradient
  };

  // Text Colors
  text: {
    primary: string;      // Primary text accent
    secondary: string;    // Secondary text accent
    accent: string;       // Accent text color
    warning: string;      // Warning text
    success: string;      // Success text
    error: string;        // Error text
  };

  // Interactive States
  interactive: {
    hover: {
      primary: string;
      secondary: string;
      accent: string;
    };
    focus: string;
    active: string;
  };

  // Background Effects
  effects: {
    glow: string[];       // Array of glow effect classes
    blur: string[];       // Array of blur background classes
    ambient: string[];    // Ambient background effects
  };
}

// Theme Definitions
export const themes = {
  // Default Cyberpunk Theme (current)
  cyberpunk: {
    name: "Cyberpunk",
    primary: "196 100% 50%",      // cyan-500
    secondary: "262 83% 58%",     // purple-500  
    accent: "330 81% 60%",        // pink-500
    warning: "39 100% 57%",       // orange-400
    success: "142 71% 45%",       // green-600
    error: "0 84% 60%",           // red-500

    gradients: {
      primary: "bg-gradient-to-r from-[hsl(196_100%_50%)] to-[hsl(262_83%_58%)]",
      secondary: "bg-gradient-to-r from-[hsl(262_83%_58%)] to-[hsl(330_81%_60%)]", 
      accent: "bg-gradient-to-r from-[hsl(330_81%_60%)] to-[hsl(39_100%_57%)]",
      warm: "bg-gradient-to-r from-[hsl(39_100%_57%)] to-[hsl(0_84%_60%)]",
      cool: "bg-gradient-to-r from-[hsl(196_100%_50%)] to-[hsl(220_91%_65%)]",
      rainbow: "bg-gradient-to-r from-[hsl(196_100%_50%)] via-[hsl(262_83%_58%)] to-[hsl(330_81%_60%)]",
    },

    text: {
      primary: "text-[hsl(196_100%_60%)]",    // cyan-400
      secondary: "text-[hsl(262_83%_68%)]",   // purple-400  
      accent: "text-[hsl(330_81%_70%)]",      // pink-400
      warning: "text-[hsl(39_100%_67%)]",     // orange-400
      success: "text-[hsl(142_71%_55%)]",     // green-400
      error: "text-[hsl(0_84%_70%)]",         // red-400
    },

    interactive: {
      hover: {
        primary: "hover:text-[hsl(196_100%_60%)]",
        secondary: "hover:text-[hsl(262_83%_68%)]", 
        accent: "hover:text-[hsl(330_81%_70%)]",
      },
      focus: "focus:ring-[hsl(196_100%_50%)]",
      active: "active:scale-95",
    },

    effects: {
      glow: [
        "bg-gradient-to-r from-[hsl(196_100%_50%/0.1)] to-[hsl(262_83%_58%/0.1)]",
        "bg-gradient-to-r from-[hsl(262_83%_58%/0.1)] to-[hsl(330_81%_60%/0.1)]",
        "bg-gradient-to-r from-[hsl(330_81%_60%/0.05)] to-[hsl(39_100%_57%/0.05)]",
      ],
      blur: [
        "bg-gradient-to-r from-[hsl(196_100%_50%/0.1)] to-[hsl(262_83%_58%/0.1)]",
        "bg-gradient-to-r from-[hsl(262_83%_58%/0.1)] to-[hsl(330_81%_60%/0.1)]",
        "bg-gradient-to-r from-[hsl(330_81%_60%/0.05)] to-[hsl(39_100%_57%/0.05)]",
      ],
      ambient: [
        "from-background via-[hsl(196_100%_50%/0.05)] to-background",
        "from-background via-[hsl(262_83%_58%/0.05)] to-background", 
        "from-background via-[hsl(330_81%_60%/0.03)] to-background",
      ]
    }
  } as ColorPalette & { name: string },

  // Ocean Theme
  ocean: {
    name: "Ocean",
    primary: "198 93% 60%",       // sky-400
    secondary: "180 83% 55%",     // cyan-600
    accent: "174 72% 56%",        // teal-500
    warning: "45 93% 58%",        // amber-400
    success: "160 84% 39%",       // emerald-600
    error: "0 84% 60%",           // red-500

    gradients: {
      primary: "bg-gradient-to-r from-blue-400 to-cyan-500",
      secondary: "bg-gradient-to-r from-cyan-500 to-teal-500",
      accent: "bg-gradient-to-r from-teal-500 to-blue-600",
      warm: "bg-gradient-to-r from-amber-400 to-orange-500",
      cool: "bg-gradient-to-r from-blue-500 to-indigo-600",
      rainbow: "bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400",
    },

    text: {
      primary: "text-blue-400",
      secondary: "text-cyan-400",
      accent: "text-teal-400", 
      warning: "text-amber-400",
      success: "text-emerald-400",
      error: "text-red-400",
    },

    interactive: {
      hover: {
        primary: "hover:text-blue-400",
        secondary: "hover:text-cyan-400",
        accent: "hover:text-teal-400",
      },
      focus: "focus:ring-blue-500",
      active: "active:scale-95",
    },

    effects: {
      glow: [
        "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
        "bg-gradient-to-r from-cyan-500/10 to-teal-500/10",
        "bg-gradient-to-r from-teal-500/5 to-blue-500/5",
      ],
      blur: [
        "bg-gradient-to-r from-blue-400/10 to-cyan-400/10",
        "bg-gradient-to-r from-cyan-400/10 to-teal-400/10",
        "bg-gradient-to-r from-teal-400/5 to-blue-400/5",
      ],
      ambient: [
        "from-background via-blue-50/10 to-background dark:via-blue-950/10",
        "from-background via-cyan-50/10 to-background dark:via-cyan-950/10",
        "from-background via-teal-50/5 to-background dark:via-teal-950/5",
      ]
    }
  } as ColorPalette & { name: string },

  // Sunset Theme  
  sunset: {
    name: "Sunset",
    primary: "24 95% 53%",        // orange-500
    secondary: "346 87% 43%",     // rose-600
    accent: "330 81% 60%",        // pink-500
    warning: "45 93% 58%",        // amber-400
    success: "142 71% 45%",       // green-600
    error: "0 84% 60%",           // red-500

    gradients: {
      primary: "bg-gradient-to-r from-orange-400 to-red-500",
      secondary: "bg-gradient-to-r from-red-500 to-pink-500",
      accent: "bg-gradient-to-r from-pink-500 to-rose-600",
      warm: "bg-gradient-to-r from-yellow-400 to-orange-500",
      cool: "bg-gradient-to-r from-purple-500 to-pink-600",
      rainbow: "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500",
    },

    text: {
      primary: "text-orange-400",
      secondary: "text-red-400",
      accent: "text-pink-400",
      warning: "text-amber-400", 
      success: "text-green-400",
      error: "text-red-500",
    },

    interactive: {
      hover: {
        primary: "hover:text-orange-400",
        secondary: "hover:text-red-400",
        accent: "hover:text-pink-400",
      },
      focus: "focus:ring-orange-500",
      active: "active:scale-95",
    },

    effects: {
      glow: [
        "bg-gradient-to-r from-orange-500/10 to-red-500/10",
        "bg-gradient-to-r from-red-500/10 to-pink-500/10",
        "bg-gradient-to-r from-pink-500/5 to-orange-500/5",
      ],
      blur: [
        "bg-gradient-to-r from-orange-400/10 to-red-400/10",
        "bg-gradient-to-r from-red-400/10 to-pink-400/10", 
        "bg-gradient-to-r from-pink-400/5 to-orange-400/5",
      ],
      ambient: [
        "from-background via-orange-50/10 to-background dark:via-orange-950/10",
        "from-background via-red-50/10 to-background dark:via-red-950/10",
        "from-background via-pink-50/5 to-background dark:via-pink-950/5",
      ]
    }
  } as ColorPalette & { name: string },

  // Forest Theme
  forest: {
    name: "Forest", 
    primary: "160 84% 39%",       // emerald-600
    secondary: "142 71% 45%",     // green-600
    accent: "174 72% 56%",        // teal-500
    warning: "45 93% 58%",        // amber-400
    success: "160 84% 39%",       // emerald-600
    error: "0 84% 60%",           // red-500

    gradients: {
      primary: "bg-gradient-to-r from-emerald-400 to-green-500",
      secondary: "bg-gradient-to-r from-green-500 to-teal-500",
      accent: "bg-gradient-to-r from-teal-500 to-emerald-600",
      warm: "bg-gradient-to-r from-lime-400 to-green-500",
      cool: "bg-gradient-to-r from-teal-500 to-cyan-600", 
      rainbow: "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400",
    },

    text: {
      primary: "text-emerald-400",
      secondary: "text-green-400", 
      accent: "text-teal-400",
      warning: "text-amber-400",
      success: "text-emerald-500",
      error: "text-red-400",
    },

    interactive: {
      hover: {
        primary: "hover:text-emerald-400",
        secondary: "hover:text-green-400",
        accent: "hover:text-teal-400",
      },
      focus: "focus:ring-emerald-500",
      active: "active:scale-95",
    },

    effects: {
      glow: [
        "bg-gradient-to-r from-emerald-500/10 to-green-500/10",
        "bg-gradient-to-r from-green-500/10 to-teal-500/10", 
        "bg-gradient-to-r from-teal-500/5 to-emerald-500/5",
      ],
      blur: [
        "bg-gradient-to-r from-emerald-400/10 to-green-400/10",
        "bg-gradient-to-r from-green-400/10 to-teal-400/10",
        "bg-gradient-to-r from-teal-400/5 to-emerald-400/5",
      ],
      ambient: [
        "from-background via-emerald-50/10 to-background dark:via-emerald-950/10",
        "from-background via-green-50/10 to-background dark:via-green-950/10",
        "from-background via-teal-50/5 to-background dark:via-teal-950/5",
      ]
    }
  } as ColorPalette & { name: string },

  // Monochrome Theme
  monochrome: {
    name: "Monochrome",
    primary: "210 40% 15%",         // slate-800 equivalent 
    secondary: "210 40% 35%",       // slate-600 equivalent
    accent: "210 40% 50%",          // slate-500 equivalent
    warning: "210 40% 35%",         // slate-600 equivalent
    success: "210 40% 15%",         // slate-800 equivalent
    error: "210 40% 15%",           // slate-800 equivalent

    gradients: {
      primary: "bg-gradient-to-r from-slate-800 to-slate-600",
      secondary: "bg-gradient-to-r from-slate-600 to-slate-500",
      accent: "bg-gradient-to-r from-slate-500 to-slate-700",
      warm: "bg-gradient-to-r from-slate-700 to-slate-600",
      cool: "bg-gradient-to-r from-slate-800 to-slate-500",
      rainbow: "bg-gradient-to-r from-slate-800 via-slate-600 to-slate-500",
    },

    text: {
      primary: "text-slate-700 dark:text-slate-300",
      secondary: "text-slate-600 dark:text-slate-400", 
      accent: "text-slate-500 dark:text-slate-400",
      warning: "text-slate-600 dark:text-slate-400",
      success: "text-slate-700 dark:text-slate-300",
      error: "text-slate-800 dark:text-slate-200",
    },

    interactive: {
      hover: {
        primary: "hover:text-slate-700 hover:dark:text-slate-300",
        secondary: "hover:text-slate-600 hover:dark:text-slate-400",
        accent: "hover:text-slate-500 hover:dark:text-slate-400",
      },
      focus: "focus:ring-slate-500",
      active: "active:scale-95",
    },

    effects: {
      glow: [
        "bg-gradient-to-r from-slate-800/10 to-slate-600/10",
        "bg-gradient-to-r from-slate-600/10 to-slate-500/10",
        "bg-gradient-to-r from-slate-500/5 to-slate-700/5",
      ],
      blur: [
        "bg-gradient-to-r from-slate-700/10 to-slate-500/10",
        "bg-gradient-to-r from-slate-600/10 to-slate-400/10",
        "bg-gradient-to-r from-slate-500/5 to-slate-600/5",
      ],
      ambient: [
        "from-background via-slate-100/10 to-background dark:via-slate-900/10",
        "from-background via-slate-200/10 to-background dark:via-slate-800/10",
        "from-background via-slate-300/5 to-background dark:via-slate-700/5",
      ]
    }
  } as ColorPalette & { name: string },
} as const;

// Current active theme - change this to switch themes globally
export const currentTheme = themes.monochrome;

// Theme selector type
export type ThemeNames = keyof typeof themes;

// Helper function to get theme by name
export function getTheme(themeName: ThemeNames): ColorPalette & { name: string } {
  return themes[themeName];
}

// For backward compatibility and static usage - these update when you change currentTheme above
export const themeColors = currentTheme;
export const themeGradients = currentTheme.gradients;
export const themeText = currentTheme.text;
export const themeInteractive = currentTheme.interactive;
export const themeEffects = currentTheme.effects;
