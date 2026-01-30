'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronRight } from 'lucide-react';

// 카테고리 데이터 (이미지 카드용)
const categories = [
  {
    id: 'sales',
    badge: '교육',
    title: '세일즈 강사 양성과정',
    description: '쇼호스트의 실전 화법을 이식하여 현장을 장악하는 전문가를 양성합니다. 제품 특징점 분석부터 1:1 피드백까지 밀착 교육합니다.',
    image: '/images/class/sales.jpg',
    englishTitle: 'Sales Master Class',
    fullTitle: '세일즈 마스터 클래스',
    tagline: '20년 이상 경력 전문 쇼호스트가 직접 교육하는 세일즈 마스터 클래스',
  },
  {
    id: 'political',
    badge: '컨설팅',
    title: '의정 스피치 컨설팅',
    description: '신뢰감을 주는 목소리와 정교한 논리로 의정 활동의 격을 높입니다. 지방의회 의원 대상 스피치 및 이미지 브랜딩에 특화되어 있습니다.',
    image: '/images/class/speech.jpg',
    englishTitle: 'Political Leadership',
    fullTitle: '의정 및 공직자 스피치',
    tagline: '현직 아나운서와 함께하는 신뢰의 언어로 정책의 가치를 증명하는 리더십 과정',
  },
  {
    id: 'digital',
    badge: '브랜딩',
    title: 'SNS 브랜딩 전략',
    description: '인플루언서, 아나운서, 유튜버의 노하우를 담은 퍼스널 브랜딩 전략을 제안합니다. 타겟 심리를 움직이는 콘텐츠 소통법을 공유합니다.',
    image: '/images/class/branding.jpg',
    englishTitle: 'Digital Branding',
    fullTitle: 'AI 기반 SNS 퍼스널 브랜딩',
    tagline: '유튜버, 인플루언서가 직접 컨설팅하는 생성형 AI 활용 과정',
  },
  {
    id: 'moderator',
    badge: '매칭',
    title: '전문 연사 매칭',
    description: '국제회의, 런칭쇼, 시상식 등의 품격을 높이는 아나운서 및 MC를 섭외합니다. 기획부터 현장 컨트롤까지 완벽한 매니지먼트를 보장합니다.',
    image: '/images/class/mc.jpg',
    englishTitle: 'Professional Moderator',
    fullTitle: '전문 연사 매칭 및 행사 매니지먼트',
    tagline: '행사의 격을 결정하는 완벽한 흐름과 전문가 큐레이션 서비스',
  },
];

// 과목 데이터
const coursesData: Record<string, Course[]> = {
  sales: [
    {
      id: 'sales-1',
      title: 'MBTI 및 DISC 분석 기반 초개인화 고객 설득 대화법',
      content: [
        '고객의 MBTI 및 DISC 성향별 구매 심리 트리거 및 거절 유형 분석',
        "성향별 맞춤형 오프닝 멘트 및 신뢰 형성을 위한 '라포(Rapport)' 빌딩 기술",
        '고객의 성향에 따라 클로징 타이밍을 포착하는 초개인화 커뮤니케이션 스크립트 설계',
      ],
      effects: [
        '고객에 대한 직관적인 파악 능력을 향상시켜 상담 성공률 30% 이상 증가',
        '고객별 맞춤 대응을 통해 상담 시 발생하는 감정 소모 최소화 및 업무 효율 증대',
        "'심리적 공감'을 통한 고관여 충성 고객 확보",
      ],
    },
    {
      id: 'sales-2',
      title: '생성형 AI를 활용한 세일즈 데이터 분석 및 맞춤형 큐레이션',
      content: [
        '챗GPT 및 생성형 AI를 활용한 시장 트렌드 및 타겟 고객의 페르소나 자동 분석',
        'AI 툴을 활용하여 고객의 니즈에 최적화된 맞춤형 제안서 및 세일즈 레터 자동 생성',
        '실시간 고객 상담 데이터를 분석하여 최적의 답변을 추천하는 AI 워크플로우 구축',
      ],
      effects: [
        '제안서 및 자료 작성 시간을 획기적으로 단축하여 현장 영업 활동 시간 확보',
        '데이터에 기반한 정교한 큐레이션으로 고객의 제안 수락 확률 극대화',
        '최신 IT 트렌드를 선도하는 스마트 세일즈맨으로서의 브랜드 이미지 구축',
      ],
    },
    {
      id: 'sales-3',
      title: '청중을 압도하는 사내 강사 강의 설계 및 고몰입 교수법',
      content: [
        "'기-승-전-결' 구조의 전략적 강의 커리큘럼 설계",
        '쇼호스트의 전달력을 이식한 보이스 디자인 및 비언어적 커뮤니케이션 실습',
        '참여형 액션 러닝 기법 및 돌발 상황 대응 솔루션',
      ],
      effects: [
        '사내 지식 전수의 효율성을 높여 조직 전반의 직무 역량 강화',
        '명확한 메시지 전달을 통해 강의 만족도 및 사내 강사로서의 위상 제고',
        '퍼포먼스 중심의 교육 환경 조성',
      ],
    },
    {
      id: 'sales-4',
      title: '브랜드 가치를 완성하는 프리미엄 비즈니스 매너 및 고객 응대',
      content: [
        '기업의 품격을 결정하는 상황별(의전, 회의, 식사 등) 비즈니스 에티켓 큐레이션',
        '까다로운 고객(VVIP)을 대응하는 품격 있는 언어 선택과 감정 관리 기술',
        '글로벌 비즈니스 환경에서 갖춰야 할 문화적 소양 및 비즈니스 매너 실습',
      ],
      effects: [
        '품격 있는 매너를 통해 기업 및 브랜드에 대한 대외적 신뢰도 및 가치 상승',
        '비즈니스 파트너와의 관계에서 우위를 점할 수 있는 전문가적 아우라 형성',
        '매너 기반의 원활한 소통으로 불필요한 갈등 예방 및 파트너십 강화',
      ],
    },
  ],
  political: [
    {
      id: 'political-1',
      title: '성향 분석을 통한 유권자 밀착형 소통 및 정책 설득 전략',
      content: [
        'MBTI 및 사회적 성향 데이터를 기반으로 한 세대별 공감 포인트 분석',
        'DISC 유형별 소통 방식을 적용하여 민원인 및 지역 주민과 신뢰를 쌓는 대화 기술',
        '다양한 성향의 청중이 모인 현장에서 갈등을 중재하고 합의를 이끌어내는 리더의 화법',
      ],
      effects: [
        '유권자와의 정서적 유대감을 강화하여 지역 사회 내 강력한 지지 기반 확보',
        '정책 추진 시 발생하는 반대 여론을 효과적으로 설득하고 소통하는 역량 함양',
        "'소통하는 리더'로서의 긍정적 이미지 구축",
      ],
    },
    {
      id: 'political-2',
      title: '데이터와 논리로 압도하는 전략적 의정 활동 스피치',
      content: [
        '정책의 핵심을 명확하게 전달하는 3분 스피치 구조화 및 임팩트 있는 메시지 설계',
        '데이터와 통계 자료를 시각적으로 구현하여 설득력을 높이는 프리젠테이션 기법',
        '의정 질의 및 토론 시 논리적 허점을 방어하고 역공하는 전략적 대화 기술',
      ],
      effects: [
        '의정 활동 결과물에 대한 대중적 이해도를 높여 정책의 실효성 증명',
        '논리적이고 명쾌한 스피치를 통해 동료 의원 및 행정부와의 협상력 증대',
        '실력 있는 정치인으로서의 정체성을 강화하여 향후 정치적 입지 확보',
      ],
    },
    {
      id: 'political-3',
      title: '언론 대응 및 미디어 리스크 관리를 위한 실전 미디어 트레이닝',
      content: [
        '취재 기자의 의도를 파악하고 핵심 메시지(Key Message)를 전달하는 인터뷰 스킬',
        '위기 상황 시 리스크를 최소화하는 입장 표명 및 사과문 작성 전략',
        '돌발 질문에도 흔들리지 않는 침착함과 답변의 일관성을 유지하는 훈련',
      ],
      effects: [
        '언론 노출 시 의도치 않은 논란을 예방하고 긍정적인 언론 보도 유도',
        '위기 발생 시 신속하고 적절한 대응으로 정치적 타격을 최소화',
        '미디어 친화적인 리더로서 대중 인지도와 신뢰도 동시 상승',
      ],
    },
    {
      id: 'political-4',
      title: '유권자의 신뢰를 장악하는 AI 기반 SNS 소통 및 브랜딩 전략',
      content: [
        '생성형 AI를 활용한 지역 현안 분석 및 유권자 맞춤형 SNS 콘텐츠 자동 기획',
        '의정 활동 사진과 영상을 AI로 편집하여 세련된 숏폼 콘텐츠(릴스, 쇼츠) 제작',
        'SNS 댓글 및 민원을 AI로 분석하여 유권자의 여론 변화를 실시간으로 모니터링',
      ],
      effects: [
        '유권자와의 실시간 디지털 소통 채널을 활성화하여 친근한 이미지 구축',
        '적은 인력으로도 고퀄리티의 SNS 브랜딩을 유지하여 디지털 영향력 확보',
        '2030 청년 유권자층을 겨냥한 트렌디한 의정 홍보로 지지층 외연 확장',
      ],
    },
  ],
  digital: [
    {
      id: 'digital-1',
      title: 'AI 인스타그램 브랜딩: 알고리즘을 타는 비주얼 콘텐츠 설계',
      content: [
        'AI 이미지 생성 도구를 활용한 차별화된 퍼스널 아이덴티티 시각화',
        'AI 숏폼 편집 툴을 활용하여 시선을 사로잡는 릴스 영상 자동 제작 및 큐레이션',
        '인스타그램 알고리즘 분석 AI를 활용한 업로드 시간 및 해시태그 최적화 전략',
      ],
      effects: [
        '시각적으로 압도적인 피드 구성을 통해 팔로워 유입 및 도달률 급증',
        '영상 제작에 투입되는 비용과 시간을 90% 이상 절감하면서도 전문성 유지',
        '알고리즘의 선택을 받는 콘텐츠 제작으로 퍼스널 브랜드의 확산 가속화',
      ],
    },
    {
      id: 'digital-2',
      title: 'AI 블로그 마케팅: 검색 상위를 점유하는 전략적 텍스트 설계',
      content: [
        '챗GPT 기반의 키워드 분석 및 검색 상위 노출(SEO)을 위한 논리적 글쓰기 구조화',
        '나만의 고유한 톤앤매너를 유지하면서 전문 지식을 담아내는 AI 글쓰기 워크플로우',
        'AI를 활용한 이웃 소통 및 자동 댓글 분석을 통한 블로그 지수 상승 전략',
      ],
      effects: [
        '특정 분야의 전문가로서의 정보 권위를 확보하여 검색 상위 점유율 확대',
        '매일 포스팅해야 하는 부담을 덜어주어 지속 가능한 블로그 운영 환경 구축',
        '블로그를 통한 직접적인 비즈니스 문의 및 강의·섭외 기회 창출',
      ],
    },
    {
      id: 'digital-3',
      title: 'AI 유튜브 브랜딩: 기획부터 편집까지 원스톱 영상 퍼포먼스 가이드',
      content: [
        'AI 기반의 시장 분석을 통한 채널 컨셉 도출 및 조회수 보장형 스크립트 작성',
        'AI 아바타 및 배경 생성 기술을 활용하여 얼굴 노출 부담 없이 전문 영상 제작',
        'AI를 활용한 자동 자막 생성, 썸네일 디자인 및 채널 분석 기반 성장 전략 수립',
      ],
      effects: [
        '영상 제작 장벽을 낮춰 누구나 전문가급 유튜브 채널 운영 가능',
        '시청 지속 시간을 높이는 정교한 스크립트로 채널의 질적 성장과 수익화 실현',
        '유튜브 플랫폼을 통해 전 세계로 퍼스널 브랜드의 영향력을 확장',
      ],
    },
  ],
  moderator: [
    {
      id: 'moderator-1',
      title: '투자 유치와 사업 성공을 위한 원스톱 IR 피칭 코칭',
      content: [
        '투자자의 시선을 사로잡는 핵심 정보 구조화 및 비전 중심의 스토리텔링 설계',
        '수치와 데이터를 신뢰감 있게 전달하는 프레젠테이션 디자인 및 시각화 기법',
        '질의응답 시 예상 질문 리스트 분석 및 투자자의 의도를 간파하는 전략적 답변법',
      ],
      effects: [
        '발표자의 자신감을 높여 실제 투자 유치 및 사업 파트너십 성공률 극대화',
        '기업의 핵심 가치를 명확하게 전달하여 시장 내 브랜드 인지도 제고',
        '투자자 앞에서 당당하고 신뢰감 있는 경영자로서의 아우라 완성',
      ],
    },
    {
      id: 'moderator-2',
      title: '조직의 창의적 해법을 이끌어내는 전문 퍼실리테이터 양성',
      content: [
        '구성원들의 적극적 참여를 유도하는 아이스브레이킹 및 토론 환경 설계 기술',
        '상충하는 의견을 조율하고 합의점을 도출하는 중재 및 리프레이밍(Reframing) 기법',
        '도출된 아이디어를 실행 가능한 전략으로 구체화하는 액션 플랜 수립 실습',
      ],
      effects: [
        '수평적이고 창의적인 회의 문화 정착을 통한 조직 내 업무 몰입도 향상',
        '갈등 상황을 생산적인 에너지로 전환하여 팀 시너지 및 결속력 강화',
        '구성원들이 스스로 결론을 도출하게 함으로써 결과에 대한 책임감과 실행력 확보',
      ],
    },
    {
      id: 'moderator-3',
      title: '품격 있는 국제회의 및 대규모 행사를 위한 전문 모더레이터 교육',
      content: [
        '행사의 공식적인 격식을 지키는 아나운서식 표준 발음 및 정제된 언어 습득',
        '돌발 상황(기술적 문제, 시간 지연 등)에 유연하게 대처하는 현장 컨트롤 능력',
        '대담 및 패널 토론 진행 시 연사들의 전문성을 끌어내는 질문 설계 기술',
      ],
      effects: [
        '행사의 안정적이고 매끄러운 진행을 통해 주최 측의 전문 브랜드 가치 상승',
        '참석자들에게 높은 몰입감과 신뢰감을 제공하여 행사의 전반적인 만족도 제고',
        '국제적 수준의 세련된 행사 운영으로 글로벌 비즈니스 기회 확대',
      ],
    },
  ],
};

interface Course {
  id: string;
  title: string;
  content: string[];
  effects: string[];
}

interface Category {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  englishTitle: string;
  fullTitle: string;
  tagline: string;
}

export function Curriculum() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedCourse(null);
  };

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleBackToCategory = () => {
    setSelectedCourse(null);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    setSelectedCourse(null);
  };

  return (
    <>
      <section
        id="curriculum"
        className="py-16 md:py-24 lg:py-40"
        style={{ backgroundColor: 'var(--color-business-primary)' }}
      >
        <div className="w-[92%] md:w-[90%] max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span
              className="text-xs md:text-sm font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-business-secondary)' }}
            >
              EDUCATION CURRICULUM
            </span>
            <h2
              className="text-2xl md:text-3xl lg:text-5xl font-black mt-3 md:mt-4 text-white"
              style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.03em' }}
            >
              교육 커리큘럼
            </h2>
            <p className="text-white/60 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
              가장 까다로운 과제들을 해결하기 위해 설계된 Y Communication만의 전문적인 교육 과정입니다.
            </p>
          </div>

          {/* Category Cards Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 border border-white/10 hover:border-[#c9a962]/50"
                style={{ backgroundColor: 'var(--color-business-accent)' }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4">
                    <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#c9a962] uppercase bg-black/70 px-2 md:px-3 py-1 md:py-1.5 rounded border border-[#c9a962]/30">
                      {category.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3
                    className="text-base md:text-xl font-bold text-white group-hover:text-[#c9a962] transition-colors mb-2 md:mb-3"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Modal (Course List) */}
      {selectedCategory && !selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center pt-4 md:pt-0"
          onClick={handleCloseModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative w-full md:w-[90%] md:max-w-2xl max-h-[92vh] md:max-h-[80vh] overflow-hidden rounded-b-2xl md:rounded-2xl"
            style={{ backgroundColor: '#1a1a1a' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 md:top-4 right-3 md:right-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors z-10 bg-black/30 rounded-full"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Modal Header */}
            <div className="p-5 md:p-8 border-b border-white/10">
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#c9a962] uppercase">
                {selectedCategory.englishTitle}
              </span>
              <h3
                className="text-lg md:text-2xl font-bold text-white mt-1 md:mt-2 pr-8"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                {selectedCategory.fullTitle}
              </h3>
              <p className="text-white/50 text-xs md:text-sm mt-2">
                {selectedCategory.tagline}
              </p>
            </div>

            {/* Course List */}
            <div className="overflow-y-auto max-h-[calc(85vh-180px)] md:max-h-[calc(80vh-200px)]">
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                {coursesData[selectedCategory.id]?.map((course, index) => (
                  <div
                    key={course.id}
                    onClick={() => handleCourseClick(course)}
                    className="group cursor-pointer p-4 md:p-5 rounded-xl border border-white/10 hover:border-[#c9a962]/50 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <span
                        className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base font-bold border border-[#c9a962]/50 rounded"
                        style={{ color: 'var(--color-business-secondary)' }}
                      >
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4
                          className="text-sm md:text-base font-bold text-white group-hover:text-[#c9a962] transition-colors leading-snug"
                          style={{ fontFamily: "'Noto Serif KR', serif" }}
                        >
                          {course.title}
                        </h4>
                        <p className="text-white/40 text-xs md:text-sm mt-1.5 md:mt-2 line-clamp-1">
                          {course.content[0]}
                        </p>
                      </div>
                      <ChevronRight className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 text-[#c9a962] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center pt-4 md:pt-0"
          onClick={handleCloseModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative w-full md:w-[90%] md:max-w-2xl max-h-[92vh] md:max-h-[85vh] overflow-hidden rounded-b-2xl md:rounded-2xl"
            style={{ backgroundColor: '#1a1a1a' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 md:top-4 right-3 md:right-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors z-10 bg-black/30 rounded-full"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Modal Header */}
            <div className="p-5 md:p-8 border-b border-white/10">
              {selectedCategory && (
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#c9a962] uppercase">
                  {selectedCategory.englishTitle}
                </span>
              )}
              <h3
                className="text-base md:text-xl font-bold text-white mt-1 md:mt-2 pr-8 leading-snug"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                {selectedCourse.title}
              </h3>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[calc(90vh-200px)] md:max-h-[calc(85vh-220px)]">
              <div className="p-5 md:p-8 space-y-6 md:space-y-8">
                {/* 주요 교육 내용 */}
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-[#c9a962] uppercase tracking-wider mb-3 md:mb-4">
                    주요 교육 내용
                  </h4>
                  <ul className="space-y-2.5 md:space-y-3">
                    {selectedCourse.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 md:gap-3 text-white/70">
                        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[9px] md:text-[10px] font-bold bg-[#c9a962]/20 text-[#c9a962] rounded mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-xs md:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 기대 효과 */}
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-[#c9a962] uppercase tracking-wider mb-3 md:mb-4">
                    교육 기대 효과
                  </h4>
                  <ul className="space-y-2.5 md:space-y-3">
                    {selectedCourse.effects.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 md:gap-3 text-white/70">
                        <span className="text-[#c9a962] mt-0.5 text-sm md:text-base">✓</span>
                        <span className="text-xs md:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:p-6 border-t border-white/10">
              <div className="flex gap-3">
                <button
                  onClick={handleBackToCategory}
                  className="flex-1 py-3 md:py-4 border border-[#c9a962]/50 text-[#c9a962] font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-[#c9a962]/10 transition-colors rounded-lg md:rounded-none"
                >
                  목록으로
                </button>
                <button
                  onClick={handleCloseModal}
                  className="flex-1 py-3 md:py-4 bg-[#c9a962] text-black font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-[#b8994f] transition-colors rounded-lg md:rounded-none"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
