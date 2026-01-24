'use client';

import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export function Portfolio() {
  return (
    <section className="relative py-40 flex items-center overflow-hidden">
      {/* Background Image with Parallax-like fixed attachment */}
      <div 
        className="absolute inset-0 z-0"
        style={{
            backgroundImage: `url('/images/portfolio_bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div 
        className="absolute inset-0 z-10"
        style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(26,26,26,0.8) 100%)'
        }}
      />

      <div className="relative z-20 w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest uppercase border border-white/20 rounded-full">
            Professional Performance
          </div>
          <h2 
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            Y 커뮤니케이션의
            <br />
            현장을 확인하세요
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed">
            포트폴리오에서 공식행사MC, 쇼호스트, 입찰PT, 기업교육 등
            다양한 현장을 확인할 수 있습니다.
          </p>
        </div>

        <div>
            <Link
                href="/portfolio"
                className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-none hover:bg-white hover:text-black"
            >
                <span className="w-full h-full flex items-center gap-3">
                    <Briefcase className="w-5 h-5" />
                    <span>VIEW PORTFOLIO</span>
                </span>
            </Link>
        </div>
      </div>
    </section>
  );
}
