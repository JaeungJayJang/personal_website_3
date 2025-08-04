import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experiences';
import { contactInfo } from '@/data/contact';
import { sitemapGenerator } from '@/lib/sitemap-generator';

export default function sitemap(): MetadataRoute.Sitemap {
  // Main page - highest priority, updated weekly
  const mainRoute = sitemapGenerator.createMainRoute();

  // Section routes (anchor links on the main page)
  const sectionRoutes = [
    sitemapGenerator.createSectionRoute('about', 0.9, 'monthly'),
    sitemapGenerator.createSectionRoute('experience', 0.8, 'monthly'), 
    sitemapGenerator.createSectionRoute('projects', 0.95, 'weekly'), // Projects updated most frequently
    sitemapGenerator.createSectionRoute('contact', 0.7, 'yearly'),
  ];

  // Use the dynamic route generator for cleaner code
  const featuredProjectRoutes = sitemapGenerator.createDynamicRoutes(
    projects.filter(project => project.featured && project.hasDemo),
    project => project.demoUrl || null,
    0.8 // Higher priority for featured projects
  );

  const githubProjectRoutes = sitemapGenerator.createDynamicRoutes(
    projects.filter(project => project.hasGithub),
    project => project.githubUrl || null,
    0.6 // Code repositories change frequently
  );

  // Professional profile routes (your own profiles only)
  const professionalRoutes = sitemapGenerator.createDynamicRoutes(
    contactInfo.filter(contact => 
      contact.href?.startsWith('http') && 
      (contact.href.includes('linkedin.com') || contact.href.includes('github.com'))
    ),
    contact => contact.href || null,
    0.7
  );

  // Skip company routes - these are external sites not directly related to your content
  // const companyRoutes = sitemapGenerator.createDynamicRoutes(
  //   experiences.filter(exp => exp.isActive),
  //   exp => exp.companyUrl || null,
  //   0.6
  // );

  const allRoutes = [
    mainRoute, 
    ...sectionRoutes, 
    ...featuredProjectRoutes,
    ...githubProjectRoutes,
    ...professionalRoutes,
    // ...companyRoutes  // Removed to follow SEO best practices
  ];

  // Optional: Log SEO info in development
  if (process.env.NODE_ENV === 'development') {
    const seoInfo = sitemapGenerator.generateSeoInfo(allRoutes);
    console.log('📊 Sitemap Generated:', seoInfo);
  }

  return allRoutes;
}
