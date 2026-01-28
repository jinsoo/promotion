import { client } from '@/lib/sanity/client';
import { groq } from 'next-sanity';

export async function GET() {
  const baseUrl = 'https://ycom.live';
  
  // Fetch latest events and announcers for the feed
  const data = await client.fetch(groq`
    {
      "events": *[_type == "event"] | order(date desc)[0...10] {
        _id,
        _createdAt,
        title,
        description
      },
      "announcers": *[_type == "announcer"] | order(_createdAt desc)[0...10] {
        _id,
        _createdAt,
        name,
        title
      }
    }
  `);

  const items = [
    ...data.events.map((e: any) => `
      <item>
        <title><![CDATA[${e.title}]]></title>
        <link>${baseUrl}/portfolio/events</link>
        <description><![CDATA[${e.description}]]></description>
        <pubDate>${new Date(e._createdAt).toUTCString()}</pubDate>
        <guid isPermaLink="false">${e._id}</guid>
      </item>
    `),
    ...data.announcers.map((a: any) => `
      <item>
        <title><![CDATA[${a.name} - ${a.title}]]></title>
        <link>${baseUrl}/announcer/${a._id}</link>
        <description><![CDATA[와이 커뮤니케이션 소속 아나운서 ${a.name} 프로필]]></description>
        <pubDate>${new Date(a._createdAt).toUTCString()}</pubDate>
        <guid isPermaLink="false">${a._id}</guid>
      </item>
    `)
  ].join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>와이 커뮤니케이션 (Y Communication)</title>
    <link>${baseUrl}</link>
    <description>대한민국 최고의 스피치·미디어 컨설팅 전문 기업</description>
    <language>ko-kr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}
