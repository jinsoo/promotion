'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users } from 'lucide-react';

export function Announcer() {
  return (
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
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-900/50 rounded-full border border-sky-500/30">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-all duration-300 shadow-lg shadow-sky-600/25"
          >
            <Users className="w-5 h-5" />
            아나운서 프로필 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
