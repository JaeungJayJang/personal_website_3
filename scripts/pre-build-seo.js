#!/usr/bin/env node

/**
 * Pre-build validation script
 * Ensures sitemap and robots.txt are properly configured before building
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Pre-build SEO validation...\n');

const requiredFiles = [
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'src/data/projects.ts',
  'src/data/experiences.ts',
  'src/data/contact.ts',
  'src/data/site-config.ts',
  'src/lib/sitemap-generator.ts'
];

let allFilesExist = true;

for (const file of requiredFiles) {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing required file: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`✅ ${file}`);
  }
}

if (!allFilesExist) {
  console.error('\n❌ Pre-build validation failed. Missing required files.');
  process.exit(1);
}

// Check that sitemap imports all necessary data sources
const sitemapContent = fs.readFileSync(path.join(__dirname, '..', 'src/app/sitemap.ts'), 'utf8');
const requiredImports = ['projects', 'experiences', 'contactInfo', 'sitemapGenerator'];

const missingImports = requiredImports.filter(imp => !sitemapContent.includes(imp));
if (missingImports.length > 0) {
  console.error(`❌ Sitemap missing imports: ${missingImports.join(', ')}`);
  process.exit(1);
}

console.log('\n✅ Pre-build SEO validation passed!');
console.log('🚀 Ready to build with automatic sitemap and robots.txt generation.');
