'use client';

import Link from 'next/link';
import { Activity, Award, Settings } from 'lucide-react';

export function Intro() {
  return (
    <section 
      id="about" 
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-business-primary)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column: Title & Decor */}
          <div className="w-full lg:w-1/3 lg:pt-12 text-center lg:text-left">
            <div 
              className="w-12 h-[2px] mb-8 mx-auto lg:mx-0"
              style={{ backgroundColor: 'var(--color-business-secondary)' }}
            />
            <span 
              className="text-sm font-bold tracking-widest uppercase block mb-4"
              style={{ color: 'var(--color-business-secondary)' }}
            >
              ABOUT US
            </span>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 lg:mb-8 text-white"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              대한민국 최고의
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              스피치·미디어
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              컨설팅 파트너
            </h2>
            <p className="text-white/60 leading-relaxed text-base lg:text-lg">
              와이 커뮤니케이션은 고객사의 브랜드 가치와 대중의 니즈를 정교하게 분석한 
              맞춤형 큐레이션으로 최상의 솔루션을 제공합니다.
            </p>
          </div>

          {/* Right Column: Values */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              {/* Value 1 - 교육커리큘럼 */}
              <Link 
                href="#curriculum"
                className="block p-5 lg:p-6 rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                style={{ 
                  backgroundColor: 'var(--color-business-accent)',
                  borderTop: '2px solid var(--color-business-secondary)'
                }}
              >
                  <Activity 
                    className="w-6 h-6 mb-3" 
                    style={{ color: 'var(--color-business-secondary)' }}
                  />
                  <h3 className="text-lg font-bold mb-2 text-white">
                    진단 기반 교육
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    단순 강의 매칭이 아닌 조직 문제 분석을 통한 맞춤형 커리큘럼 설계
                  </p>
              </Link>

              {/* Value 2 - 아나운서 */}
              <Link 
                href="#announcer"
                className="block p-5 lg:p-6 rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                style={{ 
                  backgroundColor: '#222',
                  borderTop: '2px solid var(--color-business-secondary)'
                }}
              >
                  <Award 
                    className="w-6 h-6 mb-3" 
                    style={{ color: 'var(--color-business-secondary)' }}
                  />
                  <h3 className="text-lg font-bold mb-2 text-white">
                    검증된 전문가
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    아나운서 및 쇼호스트 실무 경력을 보유한 최정상급 전문 인력
                  </p>
              </Link>

              {/* Value 3 - 포트폴리오 */}
              <Link 
                href="#portfolio"
                className="block p-5 lg:p-6 rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                style={{ 
                  backgroundColor: 'var(--color-business-accent)',
                  borderTop: '2px solid var(--color-business-secondary)'
                }}
              >
                  <Settings 
                    className="w-6 h-6 mb-3" 
                    style={{ color: 'var(--color-business-secondary)' }}
                  />
                  <h3 className="text-lg font-bold mb-2 text-white">
                    원스톱 매니지먼트
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    기획부터 연사 섭외, 현장 컨트롤까지 밀착 관리 시스템
                  </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
