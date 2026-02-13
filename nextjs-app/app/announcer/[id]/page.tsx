import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity/client';
import { announcerByIdQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import { personJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonLd';

// 동적 메타데이터 — 각 아나운서별 고유 title, description, OG 이미지
export async function generateMetadata({
  params,
}: AnnouncerProfilePageProps): Promise<Metadata> {
  const { id } = await params;
  const announcer = await client.fetch(announcerByIdQuery, { id });

  if (!announcer) {
    return { title: '아나운서를 찾을 수 없습니다' };
  }

  const photoUrl = announcer.photo
    ? urlFor(announcer.photo).width(1200).height(630).url()
    : undefined;

  return {
    title: `${announcer.name} — ${announcer.title || '아나운서'}`,
    description: `${announcer.name} 프로필. ${announcer.title || '아나운서'}. 학력, 경력, 포트폴리오 정보를 확인하세요. 와이 커뮤니케이션 소속.`,
    openGraph: {
      title: `${announcer.name} | 와이 커뮤니케이션 아나운서`,
      description: `${announcer.name} — ${announcer.title || '아나운서'}. 프로필 및 포트폴리오.`,
      url: `https://ycom.live/announcer/${id}`,
      ...(photoUrl && {
        images: [{ url: photoUrl, width: 1200, height: 630, alt: announcer.name }],
      }),
    },
    alternates: {
      canonical: `https://ycom.live/announcer/${id}`,
    },
  };
}

interface AnnouncerProfilePageProps {
  params: Promise<{ id: string }>;
}

// Check design type from environment variable
const designType = process.env.NEXT_PUBLIC_DESIGN_TYPE || 'default';

// Design-specific styles
const designStyles = {
  default: {
    container: 'pt-24 pb-16 bg-white',
    backLink: 'text-slate-500 hover:text-indigo-600',
    photoGlow: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    tag: 'bg-indigo-100 text-indigo-700',
    name: 'text-slate-900',
    title: 'text-indigo-600',
    affiliation: 'text-slate-500',
    sectionTitle: 'text-indigo-600',
    listText: 'text-slate-600',
    portfolioTitle: 'text-slate-900',
  },
  modern: {
    container: 'pt-24 pb-16 bg-slate-900',
    backLink: 'text-white/60 hover:text-amber-500',
    photoGlow: 'bg-gradient-to-r from-amber-500 to-amber-700',
    tag: 'bg-amber-900/50 text-amber-400',
    name: 'text-white',
    title: 'text-amber-500',
    affiliation: 'text-white/60',
    sectionTitle: 'text-amber-500',
    listText: 'text-white/70',
    portfolioTitle: 'text-white',
  },
  business: {
    container: 'pt-24 pb-16 bg-[#1a1a1a]',
    backLink: 'text-white/60 hover:text-[#c9a962]',
    photoGlow: 'bg-gradient-to-r from-[#c9a962] to-[#a08040]',
    tag: 'bg-[#c9a962]/20 text-[#c9a962]',
    name: 'text-white',
    title: 'text-[#c9a962]',
    affiliation: 'text-white/60',
    sectionTitle: 'text-[#c9a962]',
    listText: 'text-white/70',
    portfolioTitle: 'text-white',
  },
};

export default async function AnnouncerProfilePage({ params }: AnnouncerProfilePageProps) {
  const { id } = await params;
  const announcer = await client.fetch(announcerByIdQuery, { id });
  const styles = designStyles[designType as keyof typeof designStyles] || designStyles.default;

  if (!announcer) {
    notFound();
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      announcer: '아나운서',
      mc: 'MC',
      instructor: '강사',
      foreigner: '외국인',
    };
    return labels[category] || category;
  };

  return (
    <div className={styles.container}>
      {/* Person JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            personJsonLd({
              name: announcer.name,
              title: announcer.title,
              affiliation: announcer.affiliation,
              photoUrl: announcer.photo ? urlFor(announcer.photo).width(800).url() : undefined,
              education: announcer.education,
              career: announcer.career,
              id: announcer._id,
            })
          ),
        }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: '홈', url: 'https://ycom.live' },
              { name: '아나운서', url: 'https://ycom.live/announcer' },
              { name: announcer.name, url: `https://ycom.live/announcer/${announcer._id}` },
            ])
          ),
        }}
      />
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/announcer"
            className={`inline-flex items-center gap-2 ${styles.backLink} transition-colors text-sm`}
          >
            <ChevronLeft className="w-4 h-4" />
            아나운서 목록
          </Link>
        </div>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          {/* Photo */}
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative group">
              <div className={`absolute -inset-1 ${styles.photoGlow} rounded-2xl blur opacity-25`}></div>
              <div className="relative w-full aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden bg-slate-100">
                {announcer.photo ? (
                  <Image
                    src={urlFor(announcer.photo).url()}
                    alt={announcer.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    No Photo
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {announcer.category && announcer.category.map((cat: string) => (
                  <span
                    key={cat}
                    className={`px-3 py-1 ${styles.tag} rounded-full text-sm font-medium`}
                  >
                    {getCategoryLabel(cat)}
                  </span>
                ))}
              </div>
              <h1 className={`text-4xl font-bold ${styles.name} mb-2`}>
                {announcer.name}
              </h1>
              <p className={`text-xl ${styles.title} font-medium mb-1`}>
                {announcer.title}
              </p>
              <p className={styles.affiliation}>{announcer.affiliation}</p>
            </div>

            {/* Details */}
            <div className="space-y-8">
              {/* Education */}
              {announcer.education && announcer.education.length > 0 && (
                <div>
                  <h3 className={`flex items-center gap-2 ${styles.sectionTitle} font-bold mb-4`}>
                    <GraduationCap className="w-5 h-5" /> 학력 및 자격
                  </h3>
                  <ul className={`space-y-2 ${styles.listText} text-sm`}>
                    {announcer.education.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Career */}
              {announcer.career && announcer.career.length > 0 && (
                <div>
                  <h3 className={`flex items-center gap-2 ${styles.sectionTitle} font-bold mb-4`}>
                    <Briefcase className="w-5 h-5" /> 경력
                  </h3>
                  <ul className={`space-y-2 ${styles.listText} text-sm`}>
                    {announcer.career.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Awards */}
              {announcer.awards && announcer.awards.length > 0 && (
                <div>
                  <h3 className={`flex items-center gap-2 ${styles.sectionTitle} font-bold mb-4`}>
                    <Trophy className="w-5 h-5" /> 수상
                  </h3>
                  <ul className={`space-y-2 ${styles.listText} text-sm`}>
                    {announcer.awards.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Portfolio Images */}
        {announcer.portfolioImages && announcer.portfolioImages.length > 0 && (
          <div>
            <h2 className={`text-2xl font-bold ${styles.portfolioTitle} mb-6`}>포트폴리오</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {announcer.portfolioImages.map((img: any, idx: number) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-xl overflow-hidden group"
                >
                  <Image
                    src={urlFor(img).url()}
                    alt={`${announcer.name} 포트폴리오 ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
