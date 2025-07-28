import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';

export interface SitemapConfig {
  url: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private baseUrl: string;
  private currentDate: Date;

  constructor() {
    this.baseUrl = siteConfig.website;
    this.currentDate = new Date();
  }

  createRoute(
    path: string, 
    options: Partial<SitemapConfig> = {}
  ): MetadataRoute.Sitemap[0] {
    return {
      url: path.startsWith('http') ? path : `${this.baseUrl}${path}`,
      lastModified: options.lastModified || this.currentDate,
      changeFrequency: options.changeFrequency || 'monthly',
      priority: options.priority || 0.5,
    };
  }

  createMainRoute(): MetadataRoute.Sitemap[0] {
    return this.createRoute('', {
      changeFrequency: 'weekly',
      priority: 1.0,
    });
  }

  createSectionRoute(section: string, priority = 0.8): MetadataRoute.Sitemap[0] {
    return this.createRoute(`#${section}`, {
      changeFrequency: 'monthly',
      priority,
    });
  }

  createExternalRoute(url: string, priority = 0.7): MetadataRoute.Sitemap[0] {
    return this.createRoute(url, {
      changeFrequency: 'monthly',
      priority,
    });
  }
}

export const sitemapGenerator = new SitemapGenerator();
