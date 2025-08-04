# Brand Assets

This folder contains the custom favicon assets and documentation for Jaeung Jang's portfolio website.

## Logo Design

The logo is now a fully text-based "JJ" monogram representing Jaeung Jang, implemented as a React component with:
- **Gradient colors**: Cyan (#06b6d4) to Purple (#8b5cf6) to Pink (#ec4899)
- **Typography**: System fonts for maximum compatibility and readability
- **Design elements**: Minimalist text with a subtle accent dot for visual interest
- **Symbolism**: Clean typography reflects professionalism, while the gradient represents innovation and creativity

## Files

### Favicon Files
- `favicon.svg` - Clean text-based favicon with gradient background
- `favicon-48x48.svg` - High-resolution favicon for larger displays
- `apple-touch-icon.svg` - Apple touch icon (180x180px) for iOS devices

### Configuration Files
- `manifest.json` - PWA manifest for app-like experience

### Documentation Files
- `Main_page.png` - Portfolio website screenshot for README
- `README.md` - This documentation file

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

- Text-based logo design implemented as React component for maximum legibility at all sizes
- Favicon assets in SVG format with system fonts for consistent rendering
- Gradient effects applied via CSS for modern appearance
- Logo component uses responsive sizing classes (sm, md, lg)
- All assets are optimized for web performance
- Accent dot provides subtle visual interest without overwhelming the design
- PWA manifest enables app-like experience on mobile devices
