'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Calendar, MapPin, FileText, Mic2, Eye, ChevronLeft } from 'lucide-react';
import { urlFor } from '@/lib/sanity/image';

interface Event {
  _id: string;
  title: string;
  date: string;
  views: number;
  schedule: string;
  location: string;
  description: string;
  host: string;
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
    tableHeader: 'bg-slate-100 text-slate-600',
    card: 'bg-white border-slate-200 hover:border-indigo-300',
    detailIcon: 'text-indigo-500',
    detailLabel: 'text-slate-400',
    detailValue: 'text-slate-700',
  },
  modern: {
    container: 'pt-24 pb-16 bg-slate-900',
    breadcrumb: 'text-slate-400 hover:text-amber-500',
    label: 'text-amber-500',
    title: 'text-white',
    subtitle: 'text-white/60',
    tableHeader: 'bg-slate-800 text-white/70',
    card: 'bg-slate-800 border-slate-700 hover:border-amber-500/50',
    detailIcon: 'text-amber-500',
    detailLabel: 'text-slate-500',
    detailValue: 'text-white/90',
  },
  business: {
    container: 'pt-24 pb-16 bg-[#1a1a1a]',
    breadcrumb: 'text-white/40 hover:text-[#c9a962]',
    label: 'text-[#c9a962]',
    title: 'text-white',
    subtitle: 'text-white/60',
    tableHeader: 'bg-[#2d3436] text-white/80',
    card: 'bg-[#222] border-[#c9a962]/20 hover:border-[#c9a962]',
    detailIcon: 'text-[#c9a962]',
    detailLabel: 'text-white/40',
    detailValue: 'text-white/80',
  },
};

export default function EventsClient({ events }: { events: Event[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const styles = designStyles[designType as keyof typeof designStyles] || designStyles.default;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

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
            EVENTS
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold mt-2 ${styles.title}`}>행사 포트폴리오</h1>
          <p className={`${styles.subtitle} mt-4`}>
            공식행사MC, 쇼호스트, 입찰PT, 기업교육 등 다양한 현장
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {/* Table Header (Desktop) */}
          <div className={`hidden md:grid grid-cols-12 gap-4 px-6 py-3 rounded-xl text-sm font-medium ${styles.tableHeader}`}>
            <div className="col-span-7">행사 내용</div>
            <div className="col-span-3 text-center">날짜</div>
            <div className="col-span-2 text-center">View</div>
          </div>

          {/* Event Items */}
          {events.map((event) => (
            <div
              key={event._id}
              className={`border rounded-2xl overflow-hidden transition-colors ${styles.card}`}
            >
              {/* Event Row */}
              <button
                onClick={() => toggleExpand(event._id)}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <div className="md:col-span-7 flex items-center gap-3">
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${
                      expandedId === event._id ? 'rotate-180' : ''
                    }`}
                  />
                  <span className={`font-medium ${styles.title}`}>{event.title}</span>
                </div>
                <div className={`${styles.subtitle} text-sm md:text-center md:col-span-3`}>
                  <span className="md:hidden text-slate-400 mr-2">날짜:</span>
                  {formatDate(event.date)}
                </div>
                <div className={`${styles.subtitle} text-sm md:text-center md:col-span-2 flex items-center md:justify-center gap-1`}>
                  <Eye className="w-4 h-4" />
                  {event.views || 0}
                </div>
              </button>

              {/* Expanded Details */}
              {expandedId === event._id && (
                <div className="px-6 pb-6 border-t border-white/5 animate-in slide-in-from-top-2 duration-200">
                  <div className="pt-6 space-y-6">
                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Calendar className={`w-5 h-5 mt-0.5 ${styles.detailIcon}`} />
                        <div>
                          <span className={`text-xs block ${styles.detailLabel}`}>일정</span>
                          <span className={styles.detailValue}>{event.schedule}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className={`w-5 h-5 mt-0.5 ${styles.detailIcon}`} />
                        <div>
                          <span className={`text-xs block ${styles.detailLabel}`}>장소</span>
                          <span className={styles.detailValue}>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 md:col-span-2">
                        <FileText className={`w-5 h-5 mt-0.5 ${styles.detailIcon}`} />
                        <div>
                          <span className={`text-xs block ${styles.detailLabel}`}>내용</span>
                          <span className={styles.detailValue}>{event.description}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mic2 className={`w-5 h-5 mt-0.5 ${styles.detailIcon}`} />
                        <div>
                          <span className={`text-xs block ${styles.detailLabel}`}>진행</span>
                          <span className={styles.detailValue}>{event.host || '-'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Images Gallery */}
                    {event.images && event.images.length > 0 && (
                      <div>
                        <span className={`text-xs block mb-3 ${styles.detailLabel}`}>사진</span>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {event.images.map((img, idx) => (
                            <div
                              key={idx}
                              className="relative aspect-video rounded-xl overflow-hidden group"
                            >
                              <Image
                                src={urlFor(img).url()}
                                alt={`${event.title} 사진 ${idx + 1}`}
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
