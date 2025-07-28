import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better sitemap generation
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Ensure proper trailing slash handling for SEO
  trailingSlash: false,
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
