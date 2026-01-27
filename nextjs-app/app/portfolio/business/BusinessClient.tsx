'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { urlFor } from '@/lib/sanity/image';

interface BusinessItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  images: any[];
}

const designType = process.env.NEXT_PUBLIC_DESIGN_TYPE || 'default';

const designStyles = {
  default: {
    container: 'pt-24 pb-16 bg-white',
    breadcrumb: 'text-slate-500 hover:text-indigo-600',
    label: 'text-indigo-600',
    title: 'text-slate-900',
    subtitle: 'text-slate-500',
    card: 'bg-white border-slate-200 hover:shadow-indigo-500/10',
    badge: 'bg-white/90 text-indigo-600',
  },
  modern: {
    container: 'pt-24 pb-16 bg-slate-900',
    breadcrumb: 'text-slate-400 hover:text-amber-500',
    label: 'text-amber-500',
    title: 'text-white',
    subtitle: 'text-white/60',
    card: 'bg-slate-800 border-slate-700 hover:shadow-amber-500/10',
    badge: 'bg-amber-500/90 text-white',
  },
  business: {
    container: 'pt-24 pb-16 bg-[#1a1a1a]',
    breadcrumb: 'text-white/40 hover:text-[#c9a962]',
    label: 'text-[#c9a962]',
    title: 'text-white',
    subtitle: 'text-white/60',
    card: 'bg-[#222] border-[#c9a962]/20 hover:border-[#c9a962] hover:shadow-[#c9a962]/10',
    badge: 'bg-black/80 text-[#c9a962] border border-[#c9a962]/30',
  },
};

export default function BusinessClient({ businessItems }: { businessItems: BusinessItem[] }) {
  const styles = designStyles[designType as keyof typeof designStyles] || designStyles.default;

  return (
    <div className={styles.container}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className={`inline-flex items-center gap-2 transition-colors text-sm ${styles.breadcrumb}`}
          >
            <ChevronLeft className="w-4 h-4" />
            포트폴리오
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className={`${styles.label} font-bold tracking-wider text-sm`}>
            BUSINESS
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold mt-2 ${styles.title}`}>사업 포트폴리오</h1>
          <p className={`${styles.subtitle} mt-4`}>
            와이 커뮤니케이션의 주요 사업 영역
          </p>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessItems.map((item) => (
            <div
              key={item._id}
              className={`group rounded-3xl border overflow-hidden transition-all duration-300 ${styles.card}`}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                {item.images && item.images.length > 0 ? (
                  <Image
                    src={urlFor(item.images[0]).url()}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                   <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                      이미지 준비중
                   </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium ${styles.badge}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${styles.title}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${styles.subtitle}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
