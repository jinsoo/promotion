import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { announcersQuery } from '@/lib/sanity/queries';
import AnnouncerClient from './AnnouncerClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: '전문 아나운서 · MC 프로필',
  description:
    '와이 커뮤니케이션 소속 전문 아나운서, MC, 강사 프로필. 전국 행사MC, 아나운서 섭외를 위한 인재 정보를 확인하세요.',
  openGraph: {
    title: '전문 아나운서 · MC 프로필 | 와이 커뮤니케이션',
    description:
      '전국 행사MC, 아나운서 섭외. 와이 커뮤니케이션 소속 전문 아나운서 프로필.',
    url: 'https://ycom.live/announcer',
  },
  alternates: {
    canonical: 'https://ycom.live/announcer',
  },
};

// Check design type from environment variable
const designType = process.env.NEXT_PUBLIC_DESIGN_TYPE || 'default';

export default async function AnnouncerPage() {
  const announcers = await client.fetch(announcersQuery);

  return <AnnouncerClient announcers={announcers} designType={designType} />;
}

