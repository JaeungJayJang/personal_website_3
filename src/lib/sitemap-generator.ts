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

  createSectionRoute(
    section: string, 
    priority = 0.8, 
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly'
  ): MetadataRoute.Sitemap[0] {
    return this.createRoute(`#${section}`, {
      changeFrequency,
      priority,
    });
  }

  createExternalRoute(
    url: string, 
    priority = 0.7,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly'
  ): MetadataRoute.Sitemap[0] {
    return this.createRoute(url, {
      changeFrequency,
      priority,
    });
  }

  // Generate automatic last modified date based on build time
  getLastModifiedDate(): Date {
    return new Date(); // This will be the build time
  }

  // Get total route count for reporting
  getRouteCount(sitemap: MetadataRoute.Sitemap): number {
    return sitemap.length;
  }

  // Automatically generate routes from data changes
  createDynamicRoutes<T>(data: T[], urlExtractor: (item: T) => string | null, priority = 0.7): MetadataRoute.Sitemap {
    return data
      .map(urlExtractor)
      .filter((url): url is string => url !== null)
      .map(url => this.createExternalRoute(url, priority));
  }

  // Generate meta information for SEO
  generateSeoInfo(sitemap: MetadataRoute.Sitemap): {
    totalRoutes: number;
    lastUpdated: string;
    highPriorityRoutes: number;
    externalRoutes: number;
  } {
    const now = new Date().toISOString();
    return {
      totalRoutes: sitemap.length,
      lastUpdated: now,
      highPriorityRoutes: sitemap.filter(route => route.priority && route.priority >= 0.8).length,
      externalRoutes: sitemap.filter(route => route.url.startsWith('http') && !route.url.includes(this.baseUrl)).length,
    };
  }
}

export const sitemapGenerator = new SitemapGenerator();
