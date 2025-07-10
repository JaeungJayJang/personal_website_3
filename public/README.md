# Brand Assets

This folder contains the custom logo and favicon assets for Jaeung Jang's portfolio website.

## Logo Design

The logo features a clean, text-based "JJ" monogram representing Jaeung Jang, designed with:
- **Gradient colors**: Cyan (#06b6d4) to Purple (#8b5cf6) to Pink (#ec4899)
- **Typography**: System fonts for maximum compatibility and readability
- **Design elements**: Minimalist text with a subtle accent dot for visual interest
- **Symbolism**: Clean typography reflects professionalism, while the gradient represents innovation and creativity

## Files

### Logo Files
- `logo.svg` - Compact text-based logo for general use
- `logo-full.svg` - Full logo with name and title
- `logo.tsx` - React component for easy integration

### Favicon Files
- `favicon.svg` - Clean text-based favicon with gradient background
- `favicon-48x48.svg` - High-resolution favicon for larger displays
- `apple-touch-icon.svg` - Apple touch icon (180x180px) for iOS devices

### Configuration Files
- `manifest.json` - PWA manifest for app-like experience

## Usage

### In React Components
```jsx
import { Logo } from "@/components/logo";

// Basic JJ monogram
<Logo size="md" />

// Full name version
<Logo showFullName={true} size="lg" />

// Small version
<Logo size="sm" />
```

### In HTML
```html
<!-- Favicon -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.svg">

<!-- Logo -->
<img src="/logo.svg" alt="Jaeung Jang Logo" width="60" height="32">
```

## Brand Guidelines

- **Primary colors**: Use the cyan-to-purple-to-pink gradient for consistency
- **Typography**: System fonts (system-ui, -apple-system, sans-serif)
- **Sizes**: 
  - `sm`: Small text (text-lg)
  - `md`: Medium text (text-xl) 
  - `lg`: Large text (text-2xl)
- **Background**: Works on both light and dark backgrounds
- **Spacing**: Maintain adequate whitespace around the logo
- **Alignment**: Center-align when used as a standalone element

## Technical Notes

- Text-based design for maximum legibility at all sizes
- SVG format with system fonts for consistent rendering
- Gradient effects applied via CSS/SVG for modern appearance
- Logo component uses responsive sizing classes
- All assets are optimized for web performance
- Accent dot provides subtle visual interest without overwhelming the design
