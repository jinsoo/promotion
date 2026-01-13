import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity/client';
import { announcerByIdQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';

interface AnnouncerProfilePageProps {
  params: Promise<{ id: string }>;
}

export default async function AnnouncerProfilePage({ params }: AnnouncerProfilePageProps) {
  const { id } = await params;
  const announcer = await client.fetch(announcerByIdQuery, { id });

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
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/announcer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm"
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
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25"></div>
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
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {getCategoryLabel(cat)}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                {announcer.name}
              </h1>
              <p className="text-xl text-indigo-600 font-medium mb-1">
                {announcer.title}
              </p>
              <p className="text-slate-500">{announcer.affiliation}</p>
            </div>

            {/* Details */}
            <div className="space-y-8">
              {/* Education */}
              {announcer.education && announcer.education.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                    <GraduationCap className="w-5 h-5" /> 학력 및 자격
                  </h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {announcer.education.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Career */}
              {announcer.career && announcer.career.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                    <Briefcase className="w-5 h-5" /> 경력
                  </h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {announcer.career.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Awards */}
              {announcer.awards && announcer.awards.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                    <Trophy className="w-5 h-5" /> 수상
                  </h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6">포트폴리오</h2>
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
