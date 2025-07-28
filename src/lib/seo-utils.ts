/**
 * Utility functions for SEO and sitemap-related operations
 */

import { projects, Project } from '@/data/projects';
import { siteConfig } from '@/data/site-config';

export interface SEOData {
  title: string;
  description: string;
  url: string;
  lastModified: Date;
  priority: number;
}

/**
 * Get SEO data for a specific project
 */
export function getProjectSEOData(projectTitle: string): SEOData | null {
  const project = projects.find(p => p.title === projectTitle);
  
  if (!project) return null;
  
  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.shortDesc,
    url: project.demoUrl || `${siteConfig.website}#projects`,
    lastModified: new Date(),
    priority: project.featured ? 0.8 : 0.6,
  };
}

/**
 * Get all featured projects for sitemap
 */
export function getFeaturedProjectsForSitemap(): Project[] {
  return projects.filter(project => project.featured && project.hasDemo && project.demoUrl);
}

/**
 * Generate structured data for rich snippets
 */
export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "jobTitle": "Software Engineer",
    "description": siteConfig.description,
    "url": siteConfig.website,
    "email": siteConfig.email,
    "sameAs": [
      siteConfig.github,
      siteConfig.linkedin,
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.location,
    },
  };
}

/**
 * Generate structured data for projects
 */
export function generateProjectStructuredData(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "creator": {
      "@type": "Person",
      "name": siteConfig.name,
    },
    "url": project.demoUrl,
    "dateCreated": project.period,
    "programmingLanguage": project.technologies,
  };
}

/**
 * Validate if URL is internal to the site
 */
export function isInternalUrl(url: string): boolean {
  return url.startsWith(siteConfig.website) || url.startsWith('/') || url.startsWith('#');
}

/**
 * Get canonical URL for a path
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = siteConfig.website.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}
