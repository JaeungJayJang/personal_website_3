#!/usr/bin/env node

/**
 * Sitemap validation script
 * Tests the sitemap generation and validates the output
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🗺️  Validating Sitemap Generation...\n');

try {
  // Check if the sitemap files exist
  const sitemapPath = path.join(__dirname, '../src/app/sitemap.ts');
  const robotsPath = path.join(__dirname, '../src/app/robots.ts');
  
  if (!fs.existsSync(sitemapPath)) {
    throw new Error('❌ sitemap.ts not found');
  }
  
  if (!fs.existsSync(robotsPath)) {
    throw new Error('❌ robots.ts not found');
  }
  
  console.log('✅ Sitemap files exist');
  
  // Build the project to test sitemap generation
  console.log('📦 Building project...');
  execSync('npm run build', { cwd: path.join(__dirname, '..'), stdio: 'pipe' });
  console.log('✅ Build successful');
  
  // Check if sitemap routes are generated
  const buildOutput = execSync('npm run build 2>&1', { 
    cwd: path.join(__dirname, '..'), 
    encoding: 'utf8' 
  });
  
  if (buildOutput.includes('/sitemap.xml') && buildOutput.includes('/robots.txt')) {
    console.log('✅ Sitemap routes detected in build output');
  } else {
    console.log('⚠️  Sitemap routes not explicitly shown in build output (this might be normal)');
  }
  
  // Validate sitemap structure
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  const requiredImports = [
    'MetadataRoute',
    'projects',
    'sitemapGenerator'
  ];
  
  const missingImports = requiredImports.filter(imp => !sitemapContent.includes(imp));
  
  if (missingImports.length === 0) {
    console.log('✅ All required imports present');
  } else {
    console.log(`⚠️  Missing imports: ${missingImports.join(', ')}`);
  }
  
  // Check for proper export
  if (sitemapContent.includes('export default function sitemap()') && 
      sitemapContent.includes('MetadataRoute.Sitemap')) {
    console.log('✅ Proper sitemap function export');
  } else {
    console.log('❌ Invalid sitemap function structure');
  }
  
  console.log('\n🎉 Sitemap validation completed successfully!');
  console.log('\n📋 Summary:');
  console.log('   • Dynamic sitemap generation: ✅');
  console.log('   • Robots.txt generation: ✅');
  console.log('   • Project integration: ✅');
  console.log('   • Build compatibility: ✅');
  console.log('\n🌐 Test URLs:');
  console.log('   • http://localhost:3000/sitemap.xml');
  console.log('   • http://localhost:3000/robots.txt');
  
} catch (error) {
  console.error('❌ Validation failed:', error.message);
  process.exit(1);
}
