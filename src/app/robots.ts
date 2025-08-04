import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.website;
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',      // API routes should not be crawled
          '/_next/',    // Next.js internal files
          '/admin/',    // In case admin is added later
          '/*.json',    // JSON files
          '/private/',  // Any private directories
        ],
        crawlDelay: 1, // Be respectful to crawlers
      },
      {
        userAgent: 'GPTBot', // OpenAI's crawler
        disallow: '/',       // Opt out of AI training by default
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl bot
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
