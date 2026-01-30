'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, GraduationCap, Briefcase, Trophy, Loader2 } from 'lucide-react';
import { urlFor } from '@/lib/sanity/image';

// 리스트용 기본 정보
interface AnnouncerBasic {
  _id: string;
  name: string;
  title: string;
  category: string[];
  affiliation: string;
  photo: any;
  priority?: number;
}

// 모달용 상세 정보
interface AnnouncerDetail extends AnnouncerBasic {
  education?: string[];
  career?: string[];
  awards?: string[];
  portfolioImages?: any[];
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
    // Modal styles
    modalBg: 'bg-white',
    modalName: 'text-slate-900',
    modalTitle: 'text-indigo-600',
    modalAffiliation: 'text-slate-500',
    modalTag: 'bg-indigo-100 text-indigo-700',
    modalSectionTitle: 'text-indigo-600',
    modalListText: 'text-slate-600',
    modalCloseBtn: 'text-slate-400 hover:text-slate-600',
    loadingText: 'text-slate-500',
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
    // Modal styles
    modalBg: 'bg-slate-800',
    modalName: 'text-white',
    modalTitle: 'text-amber-500',
    modalAffiliation: 'text-white/60',
    modalTag: 'bg-amber-900/50 text-amber-400',
    modalSectionTitle: 'text-amber-500',
    modalListText: 'text-white/70',
    modalCloseBtn: 'text-white/50 hover:text-white',
    loadingText: 'text-white/60',
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
    // Modal styles
    modalBg: 'bg-[#1a1a1a]',
    modalName: 'text-white',
    modalTitle: 'text-[#c9a962]',
    modalAffiliation: 'text-white/60',
    modalTag: 'bg-[#c9a962]/20 text-[#c9a962]',
    modalSectionTitle: 'text-[#c9a962]',
    modalListText: 'text-white/70',
    modalCloseBtn: 'text-white/50 hover:text-white',
    loadingText: 'text-white/60',
  },
};

interface AnnouncerClientProps {
  announcers: AnnouncerBasic[];
  designType?: string;
}

export default function AnnouncerClient({ announcers, designType = 'default' }: AnnouncerClientProps) {
  const [selectedAnnouncer, setSelectedAnnouncer] = useState<AnnouncerDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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

  // 중요도(priority) 기준 오름차순 정렬 (0이 최상단, 기본값 100)
  const sortedAnnouncers = [...announcers].sort((a, b) => {
    return (a.priority ?? 100) - (b.priority ?? 100);
  });

  const handleAnnouncerClick = async (announcer: AnnouncerBasic) => {
    // 모달 먼저 열고 로딩 상태로
    setSelectedAnnouncer(announcer as AnnouncerDetail);
    setIsLoading(true);
    document.body.style.overflow = 'hidden';

    try {
      // API 라우트를 통해 상세 정보 fetch
      const response = await fetch(`/api/announcer/${announcer._id}`);
      if (response.ok) {
        const detail = await response.json();
        setSelectedAnnouncer(detail);
      }
    } catch (error) {
      console.error('Failed to fetch announcer details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedAnnouncer(null);
    setIsLoading(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
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
            {sortedAnnouncers.map((announcer) => (
              <div
                key={announcer._id}
                onClick={() => handleAnnouncerClick(announcer)}
                className="group cursor-pointer"
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
              </div>
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

      {/* Announcer Detail Modal */}
      {selectedAnnouncer && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center pt-4 md:pt-0 px-4"
          onClick={handleCloseModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className={`relative w-full max-w-4xl max-h-[92vh] md:max-h-[85vh] overflow-hidden rounded-2xl ${styles.modalBg}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center z-10 bg-black/30 rounded-full transition-colors ${styles.modalCloseBtn}`}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[92vh] md:max-h-[85vh]">
              <div className="p-6 md:p-10">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-8">
                  {/* Photo */}
                  <div className="w-full md:w-1/3 shrink-0">
                    <div className="relative w-full aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden bg-slate-100">
                      {selectedAnnouncer.photo ? (
                        <Image
                          src={urlFor(selectedAnnouncer.photo).url()}
                          alt={selectedAnnouncer.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-slate-400">
                          No Photo
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-full md:w-2/3">
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedAnnouncer.category && selectedAnnouncer.category.map((cat: string) => (
                          <span
                            key={cat}
                            className={`px-3 py-1 ${styles.modalTag} rounded-full text-sm font-medium`}
                          >
                            {getCategoryLabel([cat])}
                          </span>
                        ))}
                      </div>
                      <h2 className={`text-3xl md:text-4xl font-bold ${styles.modalName} mb-2`}>
                        {selectedAnnouncer.name}
                      </h2>
                      <p className={`text-lg md:text-xl ${styles.modalTitle} font-medium mb-1`}>
                        {selectedAnnouncer.title}
                      </p>
                      <p className={styles.modalAffiliation}>{selectedAnnouncer.affiliation}</p>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                      <div className={`flex items-center gap-2 ${styles.loadingText}`}>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">상세 정보 불러오는 중...</span>
                      </div>
                    )}

                    {/* Details (only show when loaded) */}
                    {!isLoading && (
                      <div className="space-y-6">
                        {/* Education */}
                        {selectedAnnouncer.education && selectedAnnouncer.education.length > 0 && (
                          <div>
                            <h3 className={`flex items-center gap-2 ${styles.modalSectionTitle} font-bold mb-3 text-sm`}>
                              <GraduationCap className="w-4 h-4" /> 학력 및 자격
                            </h3>
                            <ul className={`space-y-1.5 ${styles.modalListText} text-sm`}>
                              {selectedAnnouncer.education.map((item: string, idx: number) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Career */}
                        {selectedAnnouncer.career && selectedAnnouncer.career.length > 0 && (
                          <div>
                            <h3 className={`flex items-center gap-2 ${styles.modalSectionTitle} font-bold mb-3 text-sm`}>
                              <Briefcase className="w-4 h-4" /> 경력
                            </h3>
                            <ul className={`space-y-1.5 ${styles.modalListText} text-sm`}>
                              {selectedAnnouncer.career.map((item: string, idx: number) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Awards */}
                        {selectedAnnouncer.awards && selectedAnnouncer.awards.length > 0 && (
                          <div>
                            <h3 className={`flex items-center gap-2 ${styles.modalSectionTitle} font-bold mb-3 text-sm`}>
                              <Trophy className="w-4 h-4" /> 수상
                            </h3>
                            <ul className={`space-y-1.5 ${styles.modalListText} text-sm`}>
                              {selectedAnnouncer.awards.map((item: string, idx: number) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Portfolio Images (only show when loaded) */}
                {!isLoading && selectedAnnouncer.portfolioImages && selectedAnnouncer.portfolioImages.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h2 className={`text-xl font-bold ${styles.modalName} mb-6`}>포트폴리오</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedAnnouncer.portfolioImages.map((img: any, idx: number) => (
                        <div
                          key={idx}
                          className="relative aspect-video rounded-xl overflow-hidden group"
                        >
                          <Image
                            src={urlFor(img).url()}
                            alt={`${selectedAnnouncer.name} 포트폴리오 ${idx + 1}`}
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
          </div>
        </div>
      )}
    </>
  );
}
