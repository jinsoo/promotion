'use client';

import { TrendingUp, Activity, Mic2, Share2, Users } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: '세일즈 강사 양성과정',
    desc: '쇼호스트의 실전 화법을 이식하여 현장을 장악하는 전문가를 양성합니다. 제품 특징점 분석부터 1:1 피드백까지 밀착 교육합니다.',
    points: ['제품 USP 분석 및 소구점 도출', '1,000회 이상 생방송 실무 데이터 기반'],
  },
  {
    icon: Activity,
    title: 'AI 교육',
    desc: "조직의 DNA를 분석하여 실무에 즉시 투입 가능한 '생성형 AI 워크플로우'를 디자인합니다.",
    points: [
      '데이터 기반 AI 세일즈 큐레이션 & 설득 전략',
      'AI SNS 퍼스널 브랜딩: 알고리즘을 장악하는 콘텐츠 설계',
    ],
  },
  {
    icon: Mic2,
    title: '의원 및 공직자 스피치 특강',
    desc: '신뢰감을 주는 목소리와 정교한 논리로 의정 활동의 격을 높입니다. 지방의회 의원 대상 스피치 및 이미지 브랜딩에 특화되어 있습니다.',
    points: ['정책 전달력 및 이미지 컨설팅', '부산, 수원, 강남구 등 주요 의회 교육 레퍼런스'],
  },
  {
    icon: Share2,
    title: 'SNS 활용 및 디지털 브랜딩',
    desc: '인플루언서, 아나운서, 유튜버의 노하우를 담은 퍼스널 브랜딩 전략을 제안합니다. 타겟 심리를 움직이는 콘텐츠 소통법을 공유합니다.',
    points: ['팔로워 데이터 기반 소통법', '디지털 시대의 새로운 영향력 구축'],
  },
  {
    icon: Users,
    title: '전문 연사 매칭 및 행사 진행',
    desc: '국제회의, 런칭쇼, 시상식 등의 품격을 높이는 아나운서 및 MC를 섭외합니다. 기획부터 현장 컨트롤까지 완벽한 매니지먼트를 보장합니다.',
    points: ['국방부, 서울시, 대기업 진행 레퍼런스', '최적의 연사 큐레이션 및 완벽한 운영'],
  },
];

export function Services() {
  return (
    <section
      className="py-40"
      style={{ backgroundColor: 'var(--color-primary-dark)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-6">
          <div>
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-gold)' }}
            >
              EDUCATION CURRICULUM
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 text-white"
              style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.03em' }}
            >
              교육 커리큘럼
            </h2>
          </div>
          <p className="text-white/70 max-w-md lg:text-right">
            가장 까다로운 과제들을 해결하기 위해 설계된 Y Communication만의 전문적인
            서비스 영역입니다.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]"
          style={{
            backgroundColor: 'var(--color-charcoal)',
            border: '2px solid var(--color-gold)',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-12 lg:p-16 flex flex-col justify-between transition-all duration-400 overflow-hidden"
              style={{ backgroundColor: '#222' }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)';
                const line = e.currentTarget.querySelector('.gold-line') as HTMLElement;
                if (line) line.style.transform = 'scaleX(1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#222';
                const line = e.currentTarget.querySelector('.gold-line') as HTMLElement;
                if (line) line.style.transform = 'scaleX(0)';
              }}
            >
              {/* Gold Line Animation */}
              <div
                className="gold-line absolute bottom-0 left-0 w-full h-[3px] origin-left transition-transform duration-400"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  transform: 'scaleX(0)',
                }}
              />

              <div>
                {/* Icon */}
                <div
                  className="w-16 h-16 mb-10 relative"
                  style={{
                    background: `linear-gradient(135deg, var(--color-gold), transparent)`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-8 h-[3px]"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                  />
                  <service.icon className="absolute bottom-3 right-3 w-6 h-6 text-white" />
                </div>

                <h3
                  className="text-xl lg:text-2xl font-bold mb-6 text-white"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {service.title}
                </h3>

                <p className="text-white/70 mb-8 leading-relaxed">{service.desc}</p>

                <ul className="space-y-2 text-sm text-white/60 mb-8">
                  {service.points.map((point, i) => (
                    <li key={i}>✓ {point}</li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-all duration-300"
                style={{ color: 'var(--color-gold)' }}
              >
                Explore Capability
                <span className="transition-all duration-300 group-hover:ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
