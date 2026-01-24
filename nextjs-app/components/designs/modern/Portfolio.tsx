'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Users } from 'lucide-react';

export function Portfolio() {
  return (
    <>
      {/* Portfolio Section */}
      <section
        className="relative py-40 overflow-hidden"
        style={{ backgroundColor: 'var(--color-charcoal)' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio_bg.jpg"
            alt="Portfolio Background"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(26, 26, 26, 0.95), rgba(26, 26, 26, 0.6))',
            }}
          />
        </div>

        <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto">
          <div className="max-w-2xl">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-gold)' }}
            >
              Professional Performance
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 mb-8 text-white leading-tight"
              style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.03em' }}
            >
              Y 커뮤니케이션의
              <br />
              현장을 확인하세요
            </h2>

            <div
              className="w-20 h-[3px] mb-8"
              style={{ backgroundColor: 'var(--color-gold)' }}
            />

            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              포트폴리오에서 공식행사MC, 쇼호스트, 입찰PT, 기업교육 등 다양한 현장을
              확인할 수 있습니다.
            </p>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-wider transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-primary-dark)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold)';
              }}
            >
              <Briefcase className="w-5 h-5" />
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Announcer Section */}
      <section
        className="relative py-40 overflow-hidden"
        style={{ backgroundColor: 'var(--color-primary-dark)' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/announcer_bg.jpg"
            alt="Announcer Background"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to left, rgba(26, 26, 26, 0.95), rgba(26, 26, 26, 0.6))',
            }}
          />
        </div>

        <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto">
          <div className="max-w-2xl ml-auto text-right">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-gold)' }}
            >
              Professional Network
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 mb-8 text-white leading-tight"
              style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.03em' }}
            >
              최고의 방송 전문가들과
              <br />
              함께합니다
            </h2>

            <div
              className="w-20 h-[3px] mb-8 ml-auto"
              style={{ backgroundColor: 'var(--color-gold)' }}
            />

            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              와이 커뮤니케이션은 검증된 아나운서, 쇼호스트, MC 등 국내 정상급 방송
              전문가들과 파트너십을 맺고 있습니다.
            </p>

            <Link
              href="/announcer"
              className="inline-flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-wider transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-primary-dark)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold)';
              }}
            >
              <Users className="w-5 h-5" />
              아나운서 프로필 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
