'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { urlFor } from '@/lib/sanity/image';

interface Event {
  _id: string;
  title: string;
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
    card: 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg',
    cardTitle: 'text-slate-800',
  },
  modern: {
    container: 'pt-24 pb-16 bg-slate-900',
    breadcrumb: 'text-slate-400 hover:text-amber-500',
    label: 'text-amber-500',
    title: 'text-white',
    subtitle: 'text-white/60',
    card: 'bg-slate-800 border-slate-700 hover:border-amber-500/50 hover:shadow-lg',
    cardTitle: 'text-white/90',
  },
  business: {
    container: 'pt-24 pb-16 bg-[#1a1a1a]',
    breadcrumb: 'text-white/40 hover:text-[#c9a962]',
    label: 'text-[#c9a962]',
    title: 'text-white',
    subtitle: 'text-white/60',
    card: 'bg-[#222] border-[#c9a962]/20 hover:border-[#c9a962] hover:shadow-lg',
    cardTitle: 'text-white/80',
  },
};

export default function EventsClient({ events }: { events: Event[] }) {
  const styles = designStyles[designType as keyof typeof designStyles] || designStyles.default;

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
        <div className="text-center mb-12">
          <span className={`${styles.label} font-bold tracking-wider text-sm`}>
            EVENTS
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold mt-2 ${styles.title}`}>행사 포트폴리오</h1>
          <p className={`${styles.subtitle} mt-4`}>
            공식행사MC, 쇼호스트, 입찰PT, 기업교육 등 다양한 현장
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {events.map((event) => (
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
