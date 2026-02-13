import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { eventsQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import EventsClient from './EventsClient';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: '행사 포트폴리오',
  description:
    '와이 커뮤니케이션이 진행한 기업 행사, 컨퍼런스, 세미나 등 MC 진행 포트폴리오.',
  openGraph: {
    title: '행사 포트폴리오 | 와이 커뮤니케이션',
    description:
      '전국 기업 행사, 컨퍼런스, 세미나 MC 진행 실적.',
    url: 'https://ycom.live/portfolio/events',
  },
  alternates: {
    canonical: 'https://ycom.live/portfolio/events',
  },
};

export default async function EventsPage() {
  try {
    const events = await client.fetch(eventsQuery);
    return <EventsClient events={events} />;
  } catch (error) {
    console.error('Error fetching events:', error);
    return <EventsClient events={[]} />;
  }
}

