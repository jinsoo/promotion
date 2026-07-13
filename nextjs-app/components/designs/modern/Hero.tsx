'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(45, 52, 54, 0.9)), url('/images/portfolio_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="max-w-[800px] ml-[5%]">
            {/* Gold Divider */}
            <div
              className="w-20 h-[3px] mb-8"
              style={{ backgroundColor: 'var(--color-gold)' }}
            />

            <h1
              className="text-4xl md:text-6xl lg:text-[5rem] font-black leading-[1.1] mb-6 text-white"
              style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.03em' }}
            >
              조직의 DNA를 분석하고,
              <br />
              <span style={{ color: 'var(--color-gold)' }}>비즈니스의 격을</span>
              <br />
              설계합니다.
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-[600px] leading-relaxed">
              대한민국 최고의 스피치·미디어 컨설팅,
              전문 연사 섭외 및 교육 기획 전문 기업{' '}
              <strong className="text-white">와이 커뮤니케이션</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-10 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-primary-dark)',
                  border: 'none',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                }}
              >
                <Mail className="w-5 h-5" />
                프로젝트 문의하기
              </button>

              <a
                href="tel:01022826486"
                className="px-10 py-4 text-base font-bold uppercase tracking-wider border-2 transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  borderColor: 'var(--color-gold)',
                  color: 'var(--color-gold)',
                  backgroundColor: 'transparent',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                  e.currentTarget.style.color = 'var(--color-primary-dark)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-gold)';
                }}
              >
                <Phone className="w-5 h-5" />
                010 2282 6486
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        designType="modern"
      />
    </>
  );
}
