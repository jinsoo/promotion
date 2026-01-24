'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center py-20 lg:py-0"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(45, 52, 54, 0.9)), url('/images/hero_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="max-w-[900px] mx-auto lg:mx-0 lg:ml-[5%] text-center lg:text-left">
            {/* Gold Divider */}
            <div
              className="w-16 lg:w-20 h-[3px] mb-6 lg:mb-8 mx-auto lg:mx-0"
              style={{ backgroundColor: 'var(--color-business-secondary)' }}
            />

            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.2] mb-6 text-white"
              style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.03em' }}
            >
              <span className="block">조직의 DNA를 분석하고,</span>
              <span className="block" style={{ color: 'var(--color-business-secondary)' }}>비즈니스의 격을</span>
              <span className="block">설계합니다.</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/70 mb-10 lg:mb-12 max-w-[600px] leading-relaxed mx-auto lg:mx-0">
              대한민국 최고의 스피치·미디어 컨설팅,
              <br className="hidden md:block" />
              전문 연사 섭외 및 교육 기획 전문 기업{' '}
              <strong className="text-white">와이 커뮤니케이션</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 lg:px-10 py-4 text-sm lg:text-base font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--color-business-secondary)',
                  color: 'var(--color-business-primary)',
                  border: 'none',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-business-secondary-dark)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-business-secondary)';
                }}
              >
                <Mail className="w-5 h-5" />
                프로젝트 문의하기
              </button>

              <a
                href="tel:01076526842"
                className="px-8 lg:px-10 py-4 text-sm lg:text-base font-bold uppercase tracking-wider border-2 transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  borderColor: 'var(--color-business-secondary)',
                  color: 'var(--color-business-secondary)',
                  backgroundColor: 'transparent',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-business-secondary)';
                  e.currentTarget.style.color = 'var(--color-business-primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-business-secondary)';
                }}
              >
                <Phone className="w-5 h-5" />
                010-7652-6842
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        designType="business"
      />
    </>
  );
}
