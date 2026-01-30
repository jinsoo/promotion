'use client';

import Link from 'next/link';
import { Users } from 'lucide-react';

export function Announcer() {
  return (
    <section id="announcer" className="relative py-40 flex items-center overflow-hidden">
      {/* Background Image with Parallax-like fixed attachment */}
      <div 
        className="absolute inset-0 z-0"
        style={{
            backgroundImage: `url('/images/announcer_bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark Overlay with Gradient (Left to Right for Announcer) */}
      <div 
        className="absolute inset-0 z-10"
        style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(26,26,26,0.8) 100%)'
        }}
      />

      <div className="relative z-20 w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="order-2 md:order-1">
            <Link
                href="/announcer"
                className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-none hover:bg-white hover:text-black"
            >
                <span className="w-full h-full flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span>VIEW PROFILES</span>
                </span>
            </Link>
        </div>

        <div className="order-1 md:order-2 max-w-2xl text-white text-left md:text-right">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest uppercase border border-white/20 rounded-full">
            Professional Network
          </div>
          <h2 
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            최고의 방송 전문가들과
            <br />
            함께합니다
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed">
            와이 커뮤니케이션은 검증된 아나운서, 쇼호스트, MC 등
            국내 정상급 방송 전문가들과 파트너십을 맺고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
