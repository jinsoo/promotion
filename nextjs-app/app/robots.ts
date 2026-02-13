import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/studio/',
      },
      {
        userAgent: 'Yeti',
        allow: '/',
      },
    ],
    sitemap: 'https://ycom.live/sitemap.xml',
  };
}
