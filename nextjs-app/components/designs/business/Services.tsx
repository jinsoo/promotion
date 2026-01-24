'use client';

import { TrendingUp, Activity, Mic2, Share2, Users } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: '세일즈 강사 양성과정',
    desc: '쇼호스트의 실전 화법을 이식하여 현장을 장악하는 전문가를 양성합니다.',
    points: ['제품 USP 분석 및 소구점 도출', '1,000회 이상 생방송 실무 데이터 기반'],
  },
  {
    icon: Activity,
    title: 'AI 교육',
    desc: "조직의 DNA를 분석하여 실무에 즉시 투입 가능한 '생성형 AI 워크플로우'를 디자인합니다.",
    points: [
      '데이터 기반 AI 세일즈 큐레이션 & 설득 전략',
      'AI SNS 퍼스널 브랜딩',
    ],
  },
  {
    icon: Mic2,
    title: '의원 및 공직자 스피치 특강',
    desc: '신뢰감을 주는 목소리와 정교한 논리로 의정 활동의 격을 높입니다.',
    points: ['정책 전달력 및 이미지 컨설팅', '부산, 수원, 강남구 등 주요 의회 레퍼런스'],
  },
  {
    icon: Share2,
    title: 'SNS 활용 및 디지털 브랜딩',
    desc: '인플루언서, 아나운서, 유튜버의 노하우를 담은 퍼스널 브랜딩 전략을 제안합니다.',
    points: ['팔로워 데이터 기반 소통법', '디지털 시대의 새로운 영향력 구축'],
  },
  {
    icon: Users,
    title: '전문 연사 매칭 및 행사 진행',
    desc: '국제회의, 런칭쇼, 시상식 등의 품격을 높이는 아나운서 및 MC를 섭외합니다.',
    points: ['국방부, 서울시, 대기업 진행 레퍼런스', '최적의 연사 큐레이션 및 완벽한 운영'],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-40"
      style={{ backgroundColor: 'var(--color-business-primary)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 gap-6 text-center lg:text-left">
          <div className="w-full lg:w-auto">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-business-secondary)' }}
            >
              CORE SERVICES
            </span>
            <h2
              className="text-2xl md:text-3xl lg:text-5xl font-black mt-4 text-white"
              style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.03em' }}
            >
              핵심 서비스 분야
            </h2>
          </div>
          <p className="text-white/60 max-w-md lg:text-right mx-auto lg:mx-0">
            가장 까다로운 과제들을 해결하기 위해 설계된 Y Communication만의 전문적인
            서비스 영역입니다.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]"
          style={{
            backgroundColor: 'var(--color-business-secondary)',
            border: '1px solid var(--color-business-secondary)',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-12 flex flex-col justify-between transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: 'var(--color-business-accent)' }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#222';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-business-accent)';
              }}
            >
              <div>
                {/* Icon */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 mb-8 lg:mb-10 relative">
                  <service.icon 
                    className="service-icon w-8 h-8 lg:w-10 lg:h-10 transition-colors duration-300" 
                    style={{ color: 'var(--color-business-secondary)' }}
                  />
                  <div 
                    className="absolute -bottom-2 left-0 w-8 h-[2px]"
                    style={{ backgroundColor: 'var(--color-business-secondary)' }}
                  />
                </div>

                <h3
                  className="text-lg lg:text-2xl font-bold mb-4 lg:mb-6 text-white transition-colors duration-300"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {service.title}
                </h3>

                <p className="text-white/60 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base transition-colors duration-300">
                  {service.desc}
                </p>

                <ul className="space-y-2 text-xs lg:text-sm text-white/50 mb-6 lg:mb-8">
                  {service.points.map((point, i) => (
                    <li key={i}>✓ {point}</li>
                  ))}
                </ul>
              </div>

              <div
                className="flex items-center gap-2 font-bold text-xs lg:text-sm uppercase tracking-widest transition-all duration-300 group-hover:translate-x-2"
                style={{ color: 'var(--color-business-secondary)' }}
              >
                Explore Capability &rarr;
              </div>
            </div>
          ))}
          
          {/* Empty Grid Item for layout balance */}
          <div 
            className="hidden lg:flex p-12 items-center justify-center"
            style={{ backgroundColor: 'var(--color-business-accent)' }}
          >
             <div className="text-center opacity-30">
                <div 
                  className="w-16 h-16 border-2 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ borderColor: 'var(--color-business-secondary)' }}
                >
                    <span className="text-2xl text-white">+</span>
                </div>
                <p className="text-white text-sm">More capabilities<br/>coming soon</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
