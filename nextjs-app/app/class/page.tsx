import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { businessQuery } from '@/lib/sanity/queries';
import ClassClient from '@/components/class/ClassClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: '교육 · 사업 실적',
  description:
    '와이 커뮤니케이션의 스피치 교육, 미디어 트레이닝, 보이스 트레이닝 등 전문 교육 프로그램 및 사업 실적.',
  openGraph: {
    title: '교육 · 사업 실적 | 와이 커뮤니케이션',
    description:
      '전국 스피치 교육, 미디어 트레이닝, 보이스 트레이닝 프로그램.',
    url: 'https://ycom.live/class',
  },
  alternates: {
    canonical: 'https://ycom.live/class',
  },
};

export default async function ClassPage() {
  const businessItems = await client.fetch(businessQuery);

  return <ClassClient businessItems={businessItems} />;
}

