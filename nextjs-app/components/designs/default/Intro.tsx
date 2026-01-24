'use client';

import { Activity, Award, Settings } from 'lucide-react';

export function Intro() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold tracking-wider text-sm">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            대한민국 최고의 스피치·미디어 컨설팅 파트너
          </h2>
        </div>

        <div className="space-y-12">
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="mb-8 text-lg font-medium text-slate-800 leading-snug">
              와이 커뮤니케이션(Y Communication)은 고객사의 브랜드 가치와 대중의
              니즈를 정교하게 분석한{' '}
              <span className="font-bold text-sky-600 px-1 border-b-2 border-sky-100">
                맞춤형 큐레이션
              </span>
              으로, 품격 있는 아나운서·MC 섭외 및 전략적 교육 컨설팅 서비스를
              제공하는{' '}
              <span className="font-bold text-slate-900">
                국내 정상급 커뮤니케이션 솔루션 기업
              </span>
              입니다.
            </p>
            <div className="p-8 bg-sky-50/50 rounded-2xl border border-sky-100/50 text-sky-900/80 italic">
              검증된 방송 실전 데이터와 탄탄한 레퍼런스를 보유한 와이
              커뮤니케이션은 앞으로도 뜨거운 열정을 다해{' '}
              <span className="font-bold text-sky-600">
                &apos;비즈니스의 격을 높이는 커뮤니케이션 콘텐츠 창출 기업&apos;
              </span>
              으로서 고객사 여러분께 깊은 신뢰와 압도적인 만족감을 선사하겠습니다.
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-sky-200">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                진단 기반 교육
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                단순 강의 매칭이 아닌 조직 문제 분석을 통한 맞춤형 커리큘럼 설계
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-sky-200">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                검증된 전문가
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                아나운서 및 쇼호스트 실무 경력을 보유한 최정상급 전문 인력
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-sky-200">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                원스톱 매니지먼트
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                기획부터 연사 섭외, 현장 컨트롤까지 밀착 관리 시스템
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
