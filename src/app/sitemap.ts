import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { sitemapGenerator } from '@/lib/sitemap-generator';

export default function sitemap(): MetadataRoute.Sitemap {
  // Main page
  const mainRoute = sitemapGenerator.createMainRoute();

  // Section routes (anchor links on the main page)
  const sectionRoutes = [
    sitemapGenerator.createSectionRoute('about', 0.8),
    sitemapGenerator.createSectionRoute('experience', 0.8),
    sitemapGenerator.createSectionRoute('projects', 0.9),
    sitemapGenerator.createSectionRoute('contact', 0.7),
  ];

  // Generate project-specific routes for featured projects with demos
  const projectRoutes = projects
    .filter(project => project.featured && project.hasDemo && project.demoUrl)
    .map(project => sitemapGenerator.createExternalRoute(project.demoUrl!, 0.7));

  // GitHub profile and LinkedIn (external but important for SEO)
  const externalRoutes: MetadataRoute.Sitemap = [
    // We could add these but they're external, so commenting out for now
    // sitemapGenerator.createExternalRoute('https://github.com/JaeungJayJang', 0.6),
    // sitemapGenerator.createExternalRoute('https://linkedin.com/in/jaeung-jang', 0.6),
  ];

  return [mainRoute, ...sectionRoutes, ...projectRoutes, ...externalRoutes];
}
