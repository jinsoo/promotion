'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export function Portfolio() {
  return (
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
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-900/50 rounded-full border border-sky-500/30">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-all duration-300 shadow-lg shadow-sky-600/25"
          >
            <Briefcase className="w-5 h-5" />
            포트폴리오 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
