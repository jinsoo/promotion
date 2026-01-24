'use client';

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity/image';

interface Announcer {
  _id: string;
  name: string;
  title: string;
  category: string[];
  affiliation: string;
  photo: any;
}

// Design-specific styles
const designStyles = {
  default: {
    container: 'pt-24 pb-16 bg-white',
    label: 'text-indigo-600',
    title: 'text-slate-900',
    subtitle: 'text-slate-500',
    card: 'bg-white border-slate-200 hover:shadow-indigo-500/10',
    cardName: 'text-slate-900',
    cardTitle: 'text-indigo-600',
    cardAffiliation: 'text-slate-500',
    tag: 'bg-slate-100 text-slate-500',
    emptyText: 'text-slate-500',
  },
  modern: {
    container: 'pt-24 pb-16 bg-slate-900',
    label: 'text-amber-500',
    title: 'text-white',
    subtitle: 'text-white/60',
    card: 'bg-slate-800 border-slate-700 hover:shadow-amber-500/10 hover:border-amber-500/50',
    cardName: 'text-white',
    cardTitle: 'text-amber-500',
    cardAffiliation: 'text-white/60',
    tag: 'bg-slate-700 text-white/70',
    emptyText: 'text-white/60',
  },
  business: {
    container: 'pt-24 pb-16 bg-[#1a1a1a]',
    label: 'text-[#c9a962]',
    title: 'text-white',
    subtitle: 'text-white/60',
    card: 'bg-[#222] border-[#c9a962]/20 hover:shadow-[#c9a962]/10 hover:border-[#c9a962]',
    cardName: 'text-white',
    cardTitle: 'text-[#c9a962]',
    cardAffiliation: 'text-white/60',
    tag: 'bg-[#2d3436] text-white/70',
    emptyText: 'text-white/60',
  },
};

interface AnnouncerClientProps {
  announcers: Announcer[];
  designType?: string;
}

export default function AnnouncerClient({ announcers, designType = 'default' }: AnnouncerClientProps) {
  const styles = designStyles[designType as keyof typeof designStyles] || designStyles.default;

  const getCategoryLabel = (categories: string[]) => {
    if (!categories) return '';
    const labels: Record<string, string> = {
      announcer: '아나운서',
      mc: 'MC',
      instructor: '강사',
      foreigner: '외국인',
    };
    return categories.map((c) => labels[c] || c).join(', ');
  };

  return (
    <div className={styles.container}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className={`${styles.label} font-bold tracking-wider text-sm`}>
            ANNOUNCER PROFILES
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold mt-2 ${styles.title}`}>아나운서 프로필</h1>
          <p className={`${styles.subtitle} mt-4`}>
            와이 커뮤니케이션과 함께하는 방송 전문가들
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {announcers.map((announcer) => (
            <Link
              key={announcer._id}
              href={`/announcer/${announcer._id}`}
              className="group"
            >
              <div className={`rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${styles.card}`}>
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  {announcer.photo ? (
                    <Image
                      src={urlFor(announcer.photo).url()}
                      alt={announcer.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                      No Photo
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className={`font-bold mb-1 ${styles.cardName}`}>
                    {announcer.name}
                  </h3>
                  <p className={`text-sm mb-1 ${styles.cardTitle}`}>{announcer.title}</p>
                  <p className={`text-xs ${styles.cardAffiliation}`}>{announcer.affiliation}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {announcer.category && announcer.category.map((cat) => (
                      <span
                        key={cat}
                        className={`px-2 py-0.5 rounded text-xs ${styles.tag}`}
                      >
                        {getCategoryLabel([cat])}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {announcers.length === 0 && (
          <div className="text-center py-16">
            <p className={styles.emptyText}>등록된 프로필이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
