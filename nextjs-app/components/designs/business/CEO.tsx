'use client';

import Image from 'next/image';
import { Quote, GraduationCap, Briefcase, Trophy } from 'lucide-react';

export function CEO() {
  return (
    <section 
      id="ceo" 
      className="py-32"
      style={{ backgroundColor: 'var(--color-business-primary)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* CEO Image */}
          <div className="w-full md:w-1/3 shrink-0">
            <div className="sticky top-24">
              <div 
                className="relative pl-8 pt-8 border-l border-t"
                style={{ borderColor: 'var(--color-business-secondary)' }}
              >
                <div 
                    className="absolute top-0 right-0 w-24 h-24 border-r border-t"
                    style={{ borderColor: 'var(--color-business-secondary)' }}
                ></div>
                <Image
                  src="/images/ohsh1.png"
                  alt="와이 커뮤니케이션 대표 오수화"
                  width={400}
                  height={533}
                  className="relative w-full aspect-[3/4] object-cover grayscale md:grayscale-0 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-white mb-2">오수화</h3>
                <p 
                    className="font-medium italic text-lg"
                    style={{ color: 'var(--color-business-secondary)' }}
                >
                  CEO / Representative
                </p>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="w-full md:w-2/3 text-white">
            <div className="mb-16">
              <Quote className="w-12 h-12 mb-6 text-slate-700" />
              <h4 className="text-2xl md:text-4xl font-bold leading-tight mb-10">
                &quot;차가운 마이크에 진심의 온기를,
                <br /> 
                <span style={{ color: 'var(--color-business-secondary)' }}>브랜드의 언어에 전략적 가치</span>를 더합니다.&quot;
              </h4>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
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
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-12 border-t border-slate-800">
              <div>
                <h5 className="flex items-center gap-3 font-bold mb-6 text-lg">
                  <GraduationCap className="w-6 h-6" style={{ color: 'var(--color-business-secondary)' }} /> 
                  학력 및 주요 자격
                </h5>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li>• 숙명여자대학교 TESOL 대학원 석사 과정</li>
                  <li>• 숙명여자대학교 영어영문학 학사</li>
                  <li>• 국가공인 CS리더스관리사 및 국제영어교사자격증 보유</li>
                  <li>• 방송커뮤니케이션강사 1급, 이미지메이킹강사 1급 등</li>
                </ul>
              </div>

              <div>
                <h5 className="flex items-center gap-3 font-bold mb-6 text-lg">
                  <Briefcase className="w-6 h-6" style={{ color: 'var(--color-business-secondary)' }} /> 
                  주요 경력
                </h5>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li>
                    • <span className="text-white font-bold">현(現):</span> 와이 커뮤니케이션 대표
                  </li>
                  <li>
                    • <span className="text-white font-bold">현(現):</span> 한국산업기술원 지방자치연구소 특임교수
                  </li>
                  <li>
                    • <span className="text-white font-bold">전(前):</span> 한국경제TV 아나운서
                  </li>
                  <li>
                    • 쇼호스트 (W쇼핑, 홈앤쇼핑, CJ온스타일 등 1,000회 이상 진행)
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h5 className="flex items-center gap-3 font-bold mb-6 text-lg">
                  <Trophy className="w-6 h-6" style={{ color: 'var(--color-business-secondary)' }} /> 
                  주요 수상이력
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-slate-800 bg-white/5">
                        <p className="text-slate-300 text-sm">• 2022년 한국방송진행자협회 쇼호스트상 수상</p>
                    </div>
                    <div className="p-4 border border-slate-800 bg-white/5">
                        <p className="text-slate-300 text-sm">• 2022년 미스 인터네셔널 &quot;진(眞)&quot; 수상</p>
                    </div>
                    <div className="p-4 border border-slate-800 bg-white/5 md:col-span-2">
                        <p className="text-slate-300 text-sm">• 2022년 국방부 봉사대상 및 한미친선 증진 감사장</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
