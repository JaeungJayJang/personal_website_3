/**
 * Complete Application Theme System Documentation
 * 
 * This system provides centralized theme management for your entire application.
 * All colors, gradients, and design tokens are now managed from a single source.
 */

// Note: themes and ThemeNames are imported for documentation reference in examples below
import { themes, type ThemeNames } from './app-themes';

export const themeSystemDocs = {
  
  // === QUICK START ===
  quickStart: {
    description: "How to change your app's theme in 30 seconds",
    steps: [
      "1. Open src/data/app-themes.ts",
      "2. Find the line: export const currentTheme = themes.cyberpunk;",
      "3. Change 'cyberpunk' to any of: ocean, sunset, forest, monochrome",
      "4. Save the file - your entire app will update immediately!"
    ],
    availableThemes: [
      "cyberpunk - Cyan/Purple/Pink (current default)",
      "ocean - Blue/Teal variations", 
      "sunset - Orange/Red/Pink warm tones",
      "forest - Green/Emerald/Teal nature vibes",
      "monochrome - Uses your existing light/dark theme colors"
    ],
    exampleThemes: Object.keys(themes) as ThemeNames[]
  },

  // === WHAT'S BEEN UPDATED ===
  updatedFiles: {
    core: [
      "src/data/app-themes.ts - Central theme configuration",
      "src/hooks/use-theme.ts - Theme management hook",
      "src/app/globals.css - CSS custom properties for 404 page"
    ],
    data: [
      "src/data/about.ts - Skills and highlights now use theme",
      "src/data/experiences.ts - Experience gradients use theme",
      "src/data/contact.ts - Contact info colors use theme",
      "src/data/error-themes.ts - 404 page now inherits from main theme"
    ],
    components: [
      "src/components/logo.tsx - Logo gradients use theme",
      "src/app/not-found.tsx - Error page uses theme system"
    ]
  },

  // === USAGE EXAMPLES ===
  usageExamples: {
    inDataFiles: `
// In data files (like about.ts, experiences.ts)
import { themeGradients, themeText } from "./app-themes";

export const myData = {
  gradient: themeGradients.primary,    // Main brand gradient
  textColor: themeText.primary,        // Primary accent text
  buttonGradient: themeGradients.cool, // Cool tone gradient
};`,

    inComponents: `
// In React components
import { useTheme } from "@/hooks/use-theme";

export function MyComponent() {
  const { gradients, text, effects } = useTheme();
  
  return (
    <div className={\`\${gradients.primary} \${text.primary}\`}>
      <h1 className={\`\${gradients.rainbow} bg-clip-text text-transparent\`}>
        Title with theme colors
      </h1>
    </div>
  );
}`,

    staticAccess: `
// For static access without hooks
import { themeGradients, themeText } from "@/data/app-themes";

const buttonClass = \`\${themeGradients.primary} \${themeText.primary}\`;`
  },

  // === CUSTOMIZATION GUIDE ===
  customization: {
    createNewTheme: `
// To create a completely new theme:
// 1. Add your theme to the themes object in app-themes.ts:

newTheme: {
  name: "My Custom Theme",
  primary: "120 100% 50%",        // HSL values for green
  secondary: "240 100% 50%",      // HSL values for blue
  accent: "300 100% 50%",         // HSL values for magenta
  // ... etc
} as ColorPalette & { name: string },

// 2. Update the currentTheme export:
export const currentTheme = themes.newTheme;`,

    modifyExistingTheme: `
// To modify an existing theme:
// Simply edit the color values in the theme object.
// For example, to make cyberpunk more purple:

cyberpunk: {
  name: "Cyberpunk",
  primary: "270 100% 60%",      // Changed from cyan to purple
  secondary: "262 83% 58%",     // Keep purple
  accent: "330 81% 60%",        // Keep pink
  // ... rest of the theme
}`,

    cssCustomProperties: `
// To add CSS custom properties for more control:
// Add to globals.css in both :root and .dark sections:

:root {
  --my-custom-primary: 196 100% 50%;
  --my-custom-secondary: 262 83% 58%;
}

.dark {
  --my-custom-primary: 196 100% 60%;
  --my-custom-secondary: 262 83% 68%;
}

// Then use in your theme:
primary: "var(--my-custom-primary)",`
  },

  // === THEME SWITCHING ===
  themeSwitching: {
    dynamicSwitching: `
// To add theme switching in your UI:
import { useTheme } from "@/hooks/use-theme";

export function ThemeSwitcher() {
  const { themeName, switchTheme, availableThemes } = useTheme();
  
  return (
    <select value={themeName} onChange={(e) => switchTheme(e.target.value)}>
      {availableThemes.map(theme => (
        <option key={theme} value={theme}>{theme}</option>
      ))}
    </select>
  );
}`,

    persistence: "Themes are automatically saved to localStorage and restored on page reload."
  },

  // === THEME STRUCTURE ===
  themeStructure: {
    colors: {
      primary: "Main brand color (HSL format)",
      secondary: "Secondary brand color", 
      accent: "Accent color for highlights",
      warning: "Warning/alert color",
      success: "Success state color",
      error: "Error state color"
    },
    gradients: {
      primary: "Main brand gradient",
      secondary: "Secondary gradient",
      accent: "Accent gradient", 
      warm: "Warm tone gradient",
      cool: "Cool tone gradient",
      rainbow: "Multi-color gradient"
    },
    text: {
      primary: "Primary text accent",
      secondary: "Secondary text accent",
      accent: "Accent text color",
      warning: "Warning text",
      success: "Success text",
      error: "Error text"
    },
    effects: {
      glow: "Array of glow effect classes",
      blur: "Array of blur background classes", 
      ambient: "Ambient background effects"
    }
  },

  // === BEST PRACTICES ===
  bestPractices: [
    "Always use theme variables instead of hardcoded colors",
    "Import theme utilities at the top of your files",
    "Use meaningful names when accessing theme properties",
    "Test your themes in both light and dark modes",
    "Keep accessibility in mind - ensure good contrast ratios",
    "Use HSL color format for better theme variations",
    "Leverage CSS custom properties for complex animations"
  ],

  // === MIGRATION FROM OLD SYSTEM ===
  migration: {
    replacements: {
      "from-cyan-400 to-purple-400": "themeGradients.primary",
      "from-purple-400 to-pink-400": "themeGradients.secondary", 
      "from-pink-400 to-orange-400": "themeGradients.accent",
      "text-cyan-400": "themeText.primary",
      "text-purple-400": "themeText.secondary",
      "text-pink-400": "themeText.accent",
      "text-orange-400": "themeText.warning"
    },
    automatedReplacement: "Search and replace the old color classes with theme variables for consistency."
  }
};

export default themeSystemDocs;
