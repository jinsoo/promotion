'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowDown, Activity, Award, Settings, TrendingUp, Mic2, Share2, Users, GraduationCap, Briefcase, Trophy, Quote, Phone } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Professional Communication Solution
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            조직의 DNA를 분석하고,
            <br />
            <span className="gradient-text">비즈니스의 격을 설계합니다.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            대한민국 최고의 스피치·미디어 컨설팅,
            <br className="hidden md:block" />
            전문 연사 섭외 및 교육 기획 전문 기업{' '}
            <strong className="text-slate-900 border-b-2 border-indigo-100">
              와이 커뮤니케이션
            </strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              프로젝트 문의하기
            </button>
            <a
              href="tel:01076526842"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-5 h-5 text-indigo-600" />
              010-7652-6842
            </a>
            <Link
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              핵심 서비스 보기
              <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-wider text-sm">
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
                <span className="font-bold text-indigo-600 px-1 border-b-2 border-indigo-100">
                  맞춤형 큐레이션
                </span>
                으로, 품격 있는 아나운서·MC 섭외 및 전략적 교육 컨설팅 서비스를
                제공하는{' '}
                <span className="font-bold text-slate-900">
                  국내 정상급 커뮤니케이션 솔루션 기업
                </span>
                입니다.
              </p>
              <div className="p-8 bg-indigo-50/50 rounded-2xl border border-indigo-100/50 text-indigo-900/80 italic">
                검증된 방송 실전 데이터와 탄탄한 레퍼런스를 보유한 와이
                커뮤니케이션은 앞으로도 뜨거운 열정을 다해{' '}
                <span className="font-bold text-indigo-600">
                  &apos;비즈니스의 격을 높이는 커뮤니케이션 콘텐츠 창출 기업&apos;
                </span>
                으로서 고객사 여러분께 깊은 신뢰와 압도적인 만족감을 선사하겠습니다.
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
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
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
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
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
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

      {/* CEO Section */}
      <section id="ceo" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-wider text-sm">
              CEO MESSAGE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">인사말</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* CEO Image */}
            <div className="w-full md:w-1/3 shrink-0">
              <div className="sticky top-24">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <Image
                    src="/images/ohsh1.jpg"
                    alt="와이 커뮤니케이션 대표 오수화"
                    width={400}
                    height={533}
                    className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">오수화</h3>
                  <p className="text-indigo-600 font-medium italic mb-4">
                    &quot;언어의 품격으로 브랜드의 가치를 완성하는 스피커&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* CEO Message */}
            <div className="w-full md:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 mb-10">
                <Quote className="w-10 h-10 text-indigo-100 mb-6" />
                <h4 className="text-xl md:text-2xl font-bold leading-snug mb-8 text-slate-800">
                  &quot;차가운 마이크에 진심의 온기를,
                  <br /> 브랜드의 언어에 전략적 가치를 더합니다.&quot;
                </h4>
                <div className="prose prose-slate text-slate-600 leading-relaxed text-sm md:text-base space-y-4">
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
                  <p className="font-bold text-slate-900 mt-8">
                    와이 커뮤니케이션 대표 오수화
                  </p>
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-8">
                <div>
                  <h5 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                    <GraduationCap className="w-5 h-5" /> 학력 및 주요 자격
                  </h5>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 숙명여자대학교 TESOL 대학원 석사 과정</li>
                    <li>• 숙명여자대학교 영어영문학 학사</li>
                    <li>• 국가공인 CS리더스관리사 및 국제영어교사자격증 보유</li>
                    <li>• 방송커뮤니케이션강사 1급, 이미지메이킹강사 1급 등</li>
                  </ul>
                </div>

                <div>
                  <h5 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                    <Briefcase className="w-5 h-5" /> 주요 경력
                  </h5>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>
                      •{' '}
                      <span className="font-bold text-slate-800">현(現):</span>{' '}
                      와이 커뮤니케이션 대표
                    </li>
                    <li>
                      •{' '}
                      <span className="font-bold text-slate-800">현(現):</span>{' '}
                      한국산업기술원 지방자치연구소 특임교수
                    </li>
                    <li>
                      •{' '}
                      <span className="font-bold text-slate-800">전(前):</span>{' '}
                      한국경제TV 아나운서
                    </li>
                    <li>
                      • 쇼호스트 (W쇼핑, 홈앤쇼핑, CJ온스타일 등 1,000회 이상 진행)
                    </li>
                    <li>• US ARMY 근무 경력 및 다수의 영어 MC 진행</li>
                  </ul>
                </div>

                <div>
                  <h5 className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                    <Trophy className="w-5 h-5" /> 주요 수상이력
                  </h5>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 2022년 한국방송진행자협회 쇼호스트상 수상</li>
                    <li>
                      • 2022년 미스 인터네셔널 &quot;진(眞)&quot; 수상 (슈퍼퀸 미인대회
                      대상)
                    </li>
                    <li>• 2022년 국방부 봉사대상 및 한미친선 증진 감사장</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-wider text-sm">
              CORE SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">핵심 서비스 분야</h2>
            <p className="text-slate-500 mt-4">
              검증된 데이터와 실전 노하우를 바탕으로 최상의 솔루션을 제안합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
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

            {/* Service 2 (New - AI Education) */}
            <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
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

            {/* Service 3 (Renumbered) */}
            <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
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

            {/* Service 4 (Renumbered) */}
            <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
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

            {/* Service 5 (Renumbered) */}
            <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
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

      {/* Portfolio Section */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio_bg.jpg"
            alt="Portfolio Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-left md:text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-900/50 rounded-full border border-indigo-500/30">
            Professional Performance
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Y 커뮤니케이션의
            <br />
            현장을 확인하세요
          </h2>
          <p className="text-lg text-slate-200 mb-10 max-w-xl leading-relaxed md:mx-auto">
            포트폴리오에서 공식행사MC, 쇼호스트, 입찰PT, 기업교육 등
            <br className="hidden md:block" />
            다양한 현장을 확인할 수 있습니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-start md:justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/25"
            >
              <Briefcase className="w-5 h-5" />
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Announcer Section */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/announcer_bg.jpg"
            alt="Announcer Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-left md:text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-900/50 rounded-full border border-indigo-500/30">
            Professional Network
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            최고의 방송 전문가들과
            <br />
            함께합니다
          </h2>
          <p className="text-lg text-slate-200 mb-10 max-w-xl leading-relaxed md:mx-auto">
            와이 커뮤니케이션은 검증된 아나운서, 쇼호스트, MC 등
            <br className="hidden md:block" />
            국내 정상급 방송 전문가들과 파트너십을 맺고 있습니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-start md:justify-center">
            <Link
              href="/announcer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/25"
            >
              <Users className="w-5 h-5" />
              아나운서 프로필 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-wider text-sm">
              CLIENT LIST
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">협업 파트너사</h2>
            <p className="text-slate-500 mt-4">
              신뢰와 실력으로 함께하는 동반자들입니다.
            </p>
          </div>

          <div className="space-y-12">
            {/* Public / Government */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                공공 / 지방자치
              </h3>
              <div className="flex flex-wrap gap-3">
                {['지방자치인재개발원', '서울특별시청', '경기도청', '강원도특별자치도교육청'].map(
                  (partner) => (
                    <span
                      key={partner}
                      className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-slate-600 text-sm shadow-sm"
                    >
                      {partner}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Corporate */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                기업 / 브랜드
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'SAMSUNG',
                  'LG전자',
                  '현대백화점',
                  '교보생명',
                  '애터미',
                  'Market Kurly',
                  'Coway',
                ].map((partner) => (
                  <span
                    key={partner}
                    className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-slate-600 text-sm shadow-sm font-medium"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Global / IT */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                글로벌 / IT
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Microsoft Research Asia', 'HP', 'Symantec', 'FireEye'].map(
                  (partner) => (
                    <span
                      key={partner}
                      className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-slate-600 text-sm shadow-sm font-medium"
                    >
                      {partner}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
