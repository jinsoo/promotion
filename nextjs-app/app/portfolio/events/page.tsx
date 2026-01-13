'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Calendar, MapPin, FileText, Mic2, Eye, ChevronLeft } from 'lucide-react';

// Dummy data for events (will be replaced with Sanity data)
const dummyEvents = [
  {
    id: '1',
    title: '삼성전자 갤럭시 S25 런칭쇼 MC',
    date: '2026-01-10',
    views: 245,
    schedule: '2026년 1월 10일 14:00~17:00',
    location: '서울 강남구 코엑스 컨퍼런스홀',
    description: '삼성전자 갤럭시 S25 시리즈 공식 런칭 행사 MC 진행. 신제품 소개 및 체험존 안내, VIP 고객 응대 등 전반적인 행사 진행을 담당했습니다.',
    host: '오수화 대표',
    images: [
      'https://source.unsplash.com/800x600/?conference,samsung',
      'https://source.unsplash.com/800x600/?presentation',
      'https://source.unsplash.com/800x600/?event,corporate',
    ],
  },
  {
    id: '2',
    title: 'LG전자 2026 신년 기자간담회',
    date: '2026-01-05',
    views: 189,
    schedule: '2026년 1월 5일 10:00~12:00',
    location: '서울 여의도 LG트윈타워',
    description: 'LG전자 2026년 비전 발표 및 신제품 로드맵 공개 행사. 국내외 기자단 대상 프레젠테이션 MC 진행.',
    host: '오수화 대표',
    images: [
      'https://source.unsplash.com/800x600/?press,conference',
      'https://source.unsplash.com/800x600/?business,meeting',
    ],
  },
  {
    id: '3',
    title: '부산시의회 의정 스피치 특강',
    date: '2025-12-20',
    views: 156,
    schedule: '2025년 12월 20일 14:00~17:00',
    location: '부산광역시의회 대회의실',
    description: '부산시의회 의원 30명 대상 의정 스피치 및 이미지 브랜딩 특강. 정책 전달력 향상을 위한 실전 훈련 진행.',
    host: '오수화 대표',
    images: [
      'https://source.unsplash.com/800x600/?speech,government',
      'https://source.unsplash.com/800x600/?training,lecture',
    ],
  },
  {
    id: '4',
    title: '마켓컬리 파트너사 교육 세미나',
    date: '2025-12-15',
    views: 132,
    schedule: '2025년 12월 15일 09:00~18:00',
    location: '서울 성수동 마켓컬리 본사',
    description: '마켓컬리 입점 파트너사 대상 상품 소개 기법 및 라이브커머스 진행 교육. 쇼호스트 실전 화법 전수.',
    host: '오수화 대표',
    images: [
      'https://source.unsplash.com/800x600/?ecommerce,training',
      'https://source.unsplash.com/800x600/?workshop',
    ],
  },
];

export default function EventsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

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
            EVENTS
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">행사 포트폴리오</h1>
          <p className="text-slate-500 mt-4">
            공식행사MC, 쇼호스트, 입찰PT, 기업교육 등 다양한 현장
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-100 rounded-xl text-sm font-medium text-slate-600">
            <div className="col-span-7">행사 내용</div>
            <div className="col-span-3 text-center">날짜</div>
            <div className="col-span-2 text-center">View</div>
          </div>

          {/* Event Items */}
          {dummyEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 transition-colors"
            >
              {/* Event Row */}
              <button
                onClick={() => toggleExpand(event.id)}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="md:col-span-7 flex items-center gap-3">
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${
                      expandedId === event.id ? 'rotate-180' : ''
                    }`}
                  />
                  <span className="font-medium text-slate-900">{event.title}</span>
                </div>
                <div className="md:col-span-3 text-slate-500 text-sm md:text-center">
                  <span className="md:hidden text-slate-400 mr-2">날짜:</span>
                  {formatDate(event.date)}
                </div>
                <div className="md:col-span-2 text-slate-500 text-sm md:text-center flex items-center md:justify-center gap-1">
                  <Eye className="w-4 h-4" />
                  {event.views}
                </div>
              </button>

              {/* Expanded Details */}
              {expandedId === event.id && (
                <div className="px-6 pb-6 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                  <div className="pt-6 space-y-6">
                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-xs text-slate-400 block">일정</span>
                          <span className="text-slate-700">{event.schedule}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-xs text-slate-400 block">장소</span>
                          <span className="text-slate-700">{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 md:col-span-2">
                        <FileText className="w-5 h-5 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-xs text-slate-400 block">내용</span>
                          <span className="text-slate-700">{event.description}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mic2 className="w-5 h-5 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="text-xs text-slate-400 block">진행</span>
                          <span className="text-slate-700">{event.host}</span>
                        </div>
                      </div>
                    </div>

                    {/* Images Gallery */}
                    <div>
                      <span className="text-xs text-slate-400 block mb-3">사진</span>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {event.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-video rounded-xl overflow-hidden group"
                          >
                            <Image
                              src={img}
                              alt={`${event.title} 사진 ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
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
