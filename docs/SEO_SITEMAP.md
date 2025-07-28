# SEO and Sitemap Implementation

This project includes a comprehensive SEO setup with dynamic sitemap generation for better search engine visibility.

## Features

### 🗺️ Dynamic Sitemap Generation
- **File**: `src/app/sitemap.ts`
- **URL**: `/sitemap.xml`
- Automatically generates sitemap entries for:
  - Main page with highest priority (1.0)
  - Section anchors (#about, #experience, #projects, #contact)
  - Featured projects with live demos
  - Proper change frequencies and priorities

### 🤖 Robots.txt
- **File**: `src/app/robots.ts`
- **URL**: `/robots.txt`
- Allows all crawlers for main content
- Disallows API routes (`/api/`)
- References the sitemap location

### 📊 Structured Data (JSON-LD)
- **Component**: `src/components/structured-data.tsx`
- **Utility**: `src/lib/seo-utils.ts`
- Generates structured data for:
  - Person schema for the portfolio owner
  - Project/CreativeWork schemas for featured projects
  - Enhanced rich snippets in search results

### 🛠️ SEO Utilities
- **File**: `src/lib/seo-utils.ts`
- Helper functions for:
  - Generating project-specific SEO data
  - Creating structured data schemas
  - URL validation and canonicalization
  - Featured project filtering

### ⚙️ Sitemap Generator Utility
- **File**: `src/lib/sitemap-generator.ts`
- Modular utility class for:
  - Creating different types of sitemap entries
  - Consistent URL formatting
  - Configurable priorities and change frequencies
  - Easy extension for future routes

## Configuration

### Environment Variables
No additional environment variables are required for sitemap generation. The sitemap uses the `siteConfig.website` value from `src/data/site-config.ts`.

### Customization
To modify sitemap behavior:

1. **Add new routes**: Update `src/app/sitemap.ts`
2. **Change priorities**: Modify values in the sitemap generator calls
3. **Add structured data**: Extend functions in `src/lib/seo-utils.ts`
4. **Update robots.txt**: Modify `src/app/robots.ts`

## Testing

### Local Development
```bash
# Start the development server
npm run dev

# Test sitemap
curl http://localhost:3000/sitemap.xml

# Test robots.txt
curl http://localhost:3000/robots.txt
```

### Production Build
```bash
# Build the project
npm run build

# The sitemap is automatically generated during build
# Check the build output for confirmation
```

## SEO Best Practices Implemented

1. **Proper meta tags** in `layout.tsx` with Open Graph and Twitter Cards
2. **Canonical URLs** with metadataBase configuration
3. **Structured data** for rich snippets
4. **Clean URL structure** with proper trailing slash handling
5. **Sitemap priorities** based on content importance
6. **Change frequencies** matching content update patterns
7. **Robots.txt** with clear crawling directives

## Next.js Integration

This implementation uses Next.js 13+ App Router features:
- `MetadataRoute.Sitemap` type for type safety
- `MetadataRoute.Robots` for robots.txt generation
- Server-side generation at build time
- Automatic XML formatting and content-type headers

## Performance

- Sitemap generation is done at build time, not runtime
- Cached with proper HTTP headers (1-hour cache)
- Minimal impact on application bundle size
- Efficient filtering of featured projects only
