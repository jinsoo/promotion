'use client';

import { useState } from 'react';
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

// Filter categories
const filters = [
  { value: 'all', label: '모두' },
  { value: 'announcer', label: '아나운서' },
  { value: 'mc', label: 'MC' },
  { value: 'instructor', label: '강사' },
  { value: 'foreigner', label: '외국인' },
];

export default function AnnouncerClient({ announcers }: { announcers: Announcer[] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAnnouncers =
    activeFilter === 'all'
      ? announcers
      : announcers.filter((a) => a.category && a.category.includes(activeFilter));

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
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-bold tracking-wider text-sm">
            ANNOUNCER PROFILES
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">아나운서 프로필</h1>
          <p className="text-slate-500 mt-4">
            와이 커뮤니케이션과 함께하는 방송 전문가들
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAnnouncers.map((announcer) => (
            <Link
              key={announcer._id}
              href={`/announcer/${announcer._id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
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
                  <h3 className="font-bold text-slate-900 mb-1">
                    {announcer.name}
                  </h3>
                  <p className="text-sm text-indigo-600 mb-1">{announcer.title}</p>
                  <p className="text-xs text-slate-500">{announcer.affiliation}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {announcer.category && announcer.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-500"
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
        {filteredAnnouncers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500">해당 카테고리의 프로필이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
