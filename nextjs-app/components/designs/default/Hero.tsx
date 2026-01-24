'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowDown, Phone } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-sky-600 uppercase bg-sky-50 rounded-full">
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
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-sky-500/20 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              프로젝트 문의하기
            </button>
            <a
              href="tel:01076526842"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-5 h-5 text-sky-600" />
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

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
