import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

// Dummy data for business portfolio
const dummyBusiness = [
  {
    id: '1',
    title: '세일즈 강사 양성과정',
    description: '쇼호스트의 실전 화법을 이식하여 현장을 장악하는 전문가를 양성합니다. 제품 특징점 분석부터 1:1 피드백까지 밀착 교육합니다.',
    category: '교육',
    image: 'https://source.unsplash.com/800x600/?sales,training',
  },
  {
    id: '2',
    title: '의정 스피치 컨설팅',
    description: '신뢰감을 주는 목소리와 정교한 논리로 의정 활동의 격을 높입니다. 지방의회 의원 대상 스피치 및 이미지 브랜딩에 특화되어 있습니다.',
    category: '컨설팅',
    image: 'https://source.unsplash.com/800x600/?speech,politics',
  },
  {
    id: '3',
    title: 'SNS 브랜딩 전략',
    description: '인플루언서, 아나운서, 유튜버의 노하우를 담은 퍼스널 브랜딩 전략을 제안합니다. 타겟 심리를 움직이는 콘텐츠 소통법을 공유합니다.',
    category: '브랜딩',
    image: 'https://source.unsplash.com/800x600/?social,media',
  },
  {
    id: '4',
    title: '전문 연사 매칭',
    description: '국제회의, 런칭쇼, 시상식 등의 품격을 높이는 아나운서 및 MC를 섭외합니다. 기획부터 현장 컨트롤까지 완벽한 매니지먼트를 보장합니다.',
    category: '매칭',
    image: 'https://source.unsplash.com/800x600/?conference,speaker',
  },
];

export default function BusinessPage() {
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
          {dummyBusiness.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
