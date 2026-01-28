import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity/client';
import { groq } from 'next-sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ycom.live';

  // 1. Static routes
  const staticRoutes = [
    '',
    '/announcer',
    '/portfolio',
    '/portfolio/events',
    '/portfolio/business',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Announcer dynamic routes
  const announcerIds = await client.fetch<string[]>(
    groq`*[_type == "announcer"]._id`
  );
  
  const announcerRoutes = announcerIds.map((id) => ({
    url: `${baseUrl}/announcer/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...announcerRoutes];
}
