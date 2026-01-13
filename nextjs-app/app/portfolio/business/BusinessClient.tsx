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

export default function BusinessClient({ businessItems }: { businessItems: BusinessItem[] }) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            포트폴리오
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-bold tracking-wider text-sm">
            BUSINESS
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">사업 포트폴리오</h1>
          <p className="text-slate-500 mt-4">
            와이 커뮤니케이션의 주요 사업 영역
          </p>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessItems.map((item) => (
            <div
              key={item._id}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
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
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-indigo-600">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
