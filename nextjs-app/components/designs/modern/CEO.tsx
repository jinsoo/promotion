'use client';

import Image from 'next/image';
import { GraduationCap, Briefcase, Trophy, Quote } from 'lucide-react';

export function CEO() {
  return (
    <section
      className="py-40"
      style={{ backgroundColor: 'var(--color-primary-dark)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: 'var(--color-gold)' }}
          >
            CEO MESSAGE
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 text-white"
            style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.03em' }}
          >
            인사말
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* CEO Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative">
                <div
                  className="absolute -top-6 -left-6 w-[70%] h-[70%] border-[3px] z-0"
                  style={{ borderColor: 'var(--color-gold)' }}
                />
                <Image
                  src="/images/ohsh1.png"
                  alt="와이 커뮤니케이션 대표 오수화"
                  width={400}
                  height={533}
                  className="relative w-full aspect-[3/4] object-cover z-10"
                  style={{ borderRadius: 0 }}
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white">오수화</h3>
                <p
                  className="text-lg italic mt-2"
                  style={{ color: 'var(--color-gold)' }}
                >
                  &quot;언어의 품격으로 브랜드의 가치를 완성하는 스피커&quot;
                </p>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="lg:col-span-2">
            <div
              className="p-10 lg:p-12 mb-12"
              style={{ backgroundColor: 'var(--color-charcoal)' }}
            >
              <Quote className="w-12 h-12 mb-6" style={{ color: 'var(--color-gold)', opacity: 0.5 }} />
              <h4
                className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-8 text-white"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                &quot;차가운 마이크에 진심의 온기를,
                <br /> 브랜드의 언어에 전략적 가치를 더합니다.&quot;
              </h4>
              <div className="text-white/80 leading-relaxed space-y-4">
                <p>안녕하십니까, 와이 커뮤니케이션 대표 오수화입니다.</p>
                <p>
                  저희는 단순한 메시지 전달을 넘어, 현장의 공기를 바꾸고 브랜드의
                  가치를 완성하는 전문 파트너 그룹입니다.
                </p>
                <p>
                  아나운서의 날카로운 분석력, 쇼호스트의 생생한 소통 능력, 그리고
                  특임교수의 전문성을 바탕으로 각 분야의 정점에서 최상의 솔루션을
                  제안합니다.
                </p>
                <p className="font-bold text-white mt-8">
                  와이 커뮤니케이션 대표 오수화
                </p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5
                  className="flex items-center gap-2 font-bold mb-6"
                  style={{ color: 'var(--color-gold)' }}
                >
                  <GraduationCap className="w-5 h-5" /> 학력 및 주요 자격
                </h5>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• 숙명여자대학교 TESOL 대학원 석사 과정</li>
                  <li>• 숙명여자대학교 영어영문학 학사</li>
                  <li>• 국가공인 CS리더스관리사 및 국제영어교사자격증 보유</li>
                  <li>• 방송커뮤니케이션강사 1급, 이미지메이킹강사 1급 등</li>
                </ul>
              </div>

              <div>
                <h5
                  className="flex items-center gap-2 font-bold mb-6"
                  style={{ color: 'var(--color-gold)' }}
                >
                  <Briefcase className="w-5 h-5" /> 주요 경력
                </h5>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>
                    • <span className="font-bold text-white">현(現):</span> 와이
                    커뮤니케이션 대표
                  </li>
                  <li>
                    • <span className="font-bold text-white">현(現):</span> 한국산업기술원
                    지방자치연구소 특임교수
                  </li>
                  <li>
                    • <span className="font-bold text-white">전(前):</span> 한국경제TV
                    아나운서
                  </li>
                  <li>• 쇼호스트 (W쇼핑, 홈앤쇼핑, CJ온스타일 등 1,000회 이상 진행)</li>
                </ul>
              </div>

              <div>
                <h5
                  className="flex items-center gap-2 font-bold mb-6"
                  style={{ color: 'var(--color-gold)' }}
                >
                  <Trophy className="w-5 h-5" /> 주요 수상이력
                </h5>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• 2022년 한국방송진행자협회 쇼호스트상 수상</li>
                  <li>
                    • 2022년 미스 인터네셔널 &quot;진(眞)&quot; 수상 (슈퍼퀸 미인대회 대상)
                  </li>
                  <li>• 2022년 국방부 봉사대상 및 한미친선 증진 감사장</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
