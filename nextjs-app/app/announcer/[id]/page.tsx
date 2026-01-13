import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { notFound } from 'next/navigation';

// Dummy announcer data (will be replaced with Sanity)
const dummyAnnouncers: Record<string, {
  id: string;
  name: string;
  title: string;
  category: string[];
  affiliation: string;
  photo: string;
  education: string[];
  career: string[];
  awards: string[];
  portfolioImages: string[];
}> = {
  '1': {
    id: '1',
    name: '오수화',
    title: '대표',
    category: ['announcer', 'mc', 'instructor'],
    affiliation: '와이 커뮤니케이션',
    photo: '/images/ohsh1.jpg',
    education: [
      '숙명여자대학교 TESOL 대학원 석사 과정',
      '숙명여자대학교 영어영문학 학사',
      '국가공인 CS리더스관리사 보유',
      '국제영어교사자격증 보유',
    ],
    career: [
      '현(現) 와이 커뮤니케이션 대표',
      '현(現) 한국산업기술원 지방자치연구소 특임교수',
      '전(前) 한국경제TV 아나운서',
      '쇼호스트 (W쇼핑, 홈앤쇼핑, CJ온스타일 등 1,000회 이상 진행)',
      'US ARMY 근무 경력 및 다수의 영어 MC 진행',
    ],
    awards: [
      '2022년 한국방송진행자협회 쇼호스트상 수상',
      '2022년 미스 인터네셔널 "진(眞)" 수상 (슈퍼퀸 미인대회 대상)',
      '2022년 국방부 봉사대상 및 한미친선 증진 감사장',
    ],
    portfolioImages: [
      'https://source.unsplash.com/800x600/?announcer',
      'https://source.unsplash.com/800x600/?presenter',
      'https://source.unsplash.com/800x600/?speaker',
    ],
  },
  '2': {
    id: '2',
    name: '김아나',
    title: '아나운서',
    category: ['announcer'],
    affiliation: 'MBC',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    education: ['이화여자대학교 언론정보학 학사'],
    career: ['현(現) MBC 아나운서', '뉴스데스크 진행', '라디오 시사 프로그램 진행'],
    awards: ['2021년 한국아나운서대상 수상'],
    portfolioImages: [
      'https://source.unsplash.com/800x600/?news',
      'https://source.unsplash.com/800x600/?broadcast',
    ],
  },
};

interface AnnouncerProfilePageProps {
  params: Promise<{ id: string }>;
}

export default async function AnnouncerProfilePage({ params }: AnnouncerProfilePageProps) {
  const { id } = await params;
  const announcer = dummyAnnouncers[id];

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
              <Image
                src={announcer.photo}
                alt={announcer.name}
                width={400}
                height={533}
                className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {announcer.category.map((cat) => (
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
              <div>
                <h3 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                  <GraduationCap className="w-5 h-5" /> 학력 및 자격
                </h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  {announcer.education.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Career */}
              <div>
                <h3 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                  <Briefcase className="w-5 h-5" /> 경력
                </h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  {announcer.career.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              {announcer.awards.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                    <Trophy className="w-5 h-5" /> 수상
                  </h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {announcer.awards.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Portfolio Images */}
        {announcer.portfolioImages.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">포트폴리오</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {announcer.portfolioImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
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
