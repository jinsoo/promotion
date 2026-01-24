'use client';

import { Activity, Award, Settings } from 'lucide-react';

export function Intro() {
  return (
    <section
      className="py-40"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image with Gold Border Overlay */}
          <div className="relative h-[400px] lg:h-[600px]">
            <div
              className="absolute -top-10 -left-10 w-[60%] h-[60%] border-[3px] z-0"
              style={{ borderColor: 'var(--color-gold)' }}
            />
            <img
              src="/images/ohsh1.png"
              alt="와이 커뮤니케이션"
              className="w-full h-full object-cover relative z-10"
              style={{ borderRadius: 0 }}
            />
          </div>

          {/* Text Content */}
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-[3.5rem] font-black leading-[1.2] mb-8"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                letterSpacing: '-0.03em',
                color: 'var(--color-primary-dark)',
              }}
            >
              비즈니스의 격을
              <br />
              높이는 파트너
            </h2>

            {/* Gold Divider */}
            <div
              className="w-20 h-[3px] mb-8"
              style={{ backgroundColor: 'var(--color-gold)' }}
            />

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--color-charcoal)' }}
            >
              와이 커뮤니케이션(Y Communication)은 고객사의 브랜드 가치와 대중의
              니즈를 정교하게 분석한{' '}
              <span
                className="font-bold px-1"
                style={{
                  color: 'var(--color-gold)',
                  borderBottom: '2px solid var(--color-gold)',
                }}
              >
                맞춤형 큐레이션
              </span>
              으로, 품격 있는 아나운서·MC 섭외 및 전략적 교육 컨설팅 서비스를
              제공하는{' '}
              <span className="font-bold" style={{ color: 'var(--color-primary-dark)' }}>
                국내 정상급 커뮤니케이션 솔루션 기업
              </span>
              입니다.
            </p>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'var(--color-charcoal)' }}
            >
              검증된 방송 실전 데이터와 탄탄한 레퍼런스를 보유한 와이
              커뮤니케이션은 앞으로도 뜨거운 열정을 다해{' '}
              <span className="font-bold" style={{ color: 'var(--color-gold)' }}>
                &apos;비즈니스의 격을 높이는 커뮤니케이션 콘텐츠 창출 기업&apos;
              </span>
              으로서 고객사 여러분께 깊은 신뢰와 압도적인 만족감을 선사하겠습니다.
            </p>

            <button
              className="px-10 py-4 text-base font-bold uppercase tracking-wider border-2 transition-all duration-300"
              style={{
                borderColor: 'var(--color-primary-dark)',
                color: 'var(--color-primary-dark)',
                backgroundColor: 'transparent',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-primary-dark)';
              }}
            >
              More about us
            </button>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Activity,
              title: '진단 기반 교육',
              desc: '단순 강의 매칭이 아닌 조직 문제 분석을 통한 맞춤형 커리큘럼 설계',
            },
            {
              icon: Award,
              title: '검증된 전문가',
              desc: '아나운서 및 쇼호스트 실무 경력을 보유한 최정상급 전문 인력',
            },
            {
              icon: Settings,
              title: '원스톱 매니지먼트',
              desc: '기획부터 연사 섭외, 현장 컨트롤까지 밀착 관리 시스템',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-10 border-2 transition-all duration-300"
              style={{
                backgroundColor: 'white',
                borderColor: 'transparent',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--color-gold)' }}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-charcoal)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
