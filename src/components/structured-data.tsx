import { generatePersonStructuredData } from '@/lib/seo-utils';

export function StructuredData() {
  const structuredData = generatePersonStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
