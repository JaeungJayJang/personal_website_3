import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${siteConfig.website}/sitemap.xml`,
  };
}
