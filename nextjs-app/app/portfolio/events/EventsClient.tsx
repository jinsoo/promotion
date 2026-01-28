'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { urlFor } from '@/lib/sanity/image';

interface Event {
  _id: string;
  title: string;
  category?: string;
  images: any[];
}

const designType = process.env.NEXT_PUBLIC_DESIGN_TYPE || 'default';

const categories = [
  { value: 'all', label: '전체' },
  { value: 'official-mc', label: '공식 행사 MC' },
  { value: 'showhost-live', label: '쇼호스트 / 라이브' },
  { value: 'video-ad', label: '영상 / 광고' },
  { value: 'corporate-training', label: '기업 교육' },
  { value: 'speech-consulting', label: '스피치 컨설팅' },
];

const designStyles = {
  default: {
    container: 'pt-24 pb-16 bg-white',
    breadcrumb: 'text-slate-500 hover:text-indigo-600',
    label: 'text-indigo-600',
    title: 'text-slate-900',
    subtitle: 'text-slate-500',
    card: 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg',
    cardTitle: 'text-slate-800',
    tab: 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50',
    tabActive: 'bg-indigo-600 text-white',
  },
  modern: {
    container: 'pt-24 pb-16 bg-slate-900',
    breadcrumb: 'text-slate-400 hover:text-amber-500',
    label: 'text-amber-500',
    title: 'text-white',
    subtitle: 'text-white/60',
    card: 'bg-slate-800 border-slate-700 hover:border-amber-500/50 hover:shadow-lg',
    cardTitle: 'text-white/90',
    tab: 'text-white/60 hover:text-amber-500 hover:bg-white/5',
    tabActive: 'bg-amber-500 text-slate-900',
  },
  business: {
    container: 'pt-24 pb-16 bg-[#1a1a1a]',
    breadcrumb: 'text-white/40 hover:text-[#c9a962]',
    label: 'text-[#c9a962]',
    title: 'text-white',
    subtitle: 'text-white/60',
    card: 'bg-[#222] border-[#c9a962]/20 hover:border-[#c9a962] hover:shadow-lg',
    cardTitle: 'text-white/80',
    tab: 'text-white/60 hover:text-[#c9a962] hover:bg-white/5',
    tabActive: 'bg-[#c9a962] text-[#1a1a1a]',
  },
};

export default function EventsClient({ events }: { events: Event[] }) {
  const styles = designStyles[designType as keyof typeof designStyles] || designStyles.default;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(e => e.category === selectedCategory);

  return (
    <div className={styles.container}>
      <div className="max-w-6xl mx-auto px-6">
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
        <div className="text-center mb-8">
          <span className={`${styles.label} font-bold tracking-wider text-sm`}>
            EVENTS
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold mt-2 ${styles.title}`}>행사 포트폴리오</h1>
          <p className={`${styles.subtitle} mt-4`}>
            공식행사MC, 쇼호스트, 입찰PT, 기업교육 등 다양한 현장
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.value
                  ? styles.tabActive
                  : styles.tab
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredEvents.map((event) => (
            <div
              key={event._id}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${styles.card}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-slate-100">
                {event.images && event.images.length > 0 ? (
                  <Image
                    src={urlFor(event.images[0]).url()}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    No Image
                  </div>
                )}
              </div>
              
              {/* Title */}
              <div className="p-3 md:p-4">
                <h3 className={`text-sm md:text-base font-medium line-clamp-2 ${styles.cardTitle}`}>
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

