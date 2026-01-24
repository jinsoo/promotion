'use client';

import { TrendingUp, Activity, Mic2, Share2, Users } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold tracking-wider text-sm">
            CORE SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">핵심 서비스 분야</h2>
          <p className="text-slate-500 mt-4">
            검증된 데이터와 실전 노하우를 바탕으로 최상의 솔루션을 제안합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-sky-500 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-white text-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              ① 세일즈 강사 양성과정
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              쇼호스트의 실전 화법을 이식하여 현장을 장악하는 전문가를 양성합니다.
              제품 특징점 분석부터 1:1 피드백까지 밀착 교육합니다.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li className="flex items-center gap-2">
                ✓ 제품 USP 분석 및 소구점 도출
              </li>
              <li className="flex items-center gap-2">
                ✓ 1,000회 이상 생방송 실무 데이터 기반
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-sky-500 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-white text-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              ② AI 교육
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              조직의 DNA를 분석하여 실무에 즉시 투입 가능한 &apos;생성형 AI 워크플로우&apos;를 디자인합니다.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li className="flex items-center gap-2">
                ✓ 데이터 기반 AI 세일즈 큐레이션 & 설득 전략
              </li>
              <li className="flex items-center gap-2">
                ✓ AI SNS 퍼스널 브랜딩: 알고리즘을 장악하는 콘텐츠 설계
              </li>
              <li className="flex items-center gap-2">
                ✓ 유튜브 & 폼 마케팅의 미래, AI 비디오 퍼포먼스 가이드
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-sky-500 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-white text-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Mic2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              ③ 의원 및 공위 공직자 스피치 특강
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              신뢰감을 주는 목소리와 정교한 논리로 의정 활동의 격을 높입니다.
              지방의회 의원 대상 스피치 및 이미지 브랜딩에 특화되어 있습니다.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li className="flex items-center gap-2">
                ✓ 정책 전달력 및 이미지 컨설팅
              </li>
              <li className="flex items-center gap-2">
                ✓ 부산, 수원, 강남구 등 주요 의회 교육 레퍼런스
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-sky-500 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-white text-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Share2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              ④ SNS 활용 및 디지털 브랜딩
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              인플루언서, 아나운서, 유튜버의 노하우를 담은 퍼스널 브랜딩 전략을
              제안합니다. 타겟 심리를 움직이는 콘텐츠 소통법을 공유합니다.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li className="flex items-center gap-2">
                ✓ 팔로워 데이터 기반 소통법
              </li>
              <li className="flex items-center gap-2">
                ✓ 디지털 시대의 새로운 영향력 구축
              </li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-sky-500 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-white text-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              ⑤ 전문 연사 매칭 및 행사 진행
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              국제회의, 런칭쇼, 시상식 등의 품격을 높이는 아나운서 및 MC를
              섭외합니다. 기획부터 현장 컨트롤까지 완벽한 매니지먼트를 보장합니다.
            </p>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li className="flex items-center gap-2">
                ✓ 국방부, 서울시, 대기업 진행 레퍼런스
              </li>
              <li className="flex items-center gap-2">
                ✓ 최적의 연사 큐레이션 및 완벽한 운영
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
