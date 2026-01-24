'use client';

import { useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';

export function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer
        id="contact"
        className="py-24"
        style={{ backgroundColor: 'var(--color-primary-dark)' }}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto text-center">
          {/* Footer Logo */}
          <div
            className="text-3xl font-black mb-8 inline-block"
            style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.05em' }}
          >
            <span className="text-white">Y </span>
            <span style={{ color: 'var(--color-gold)' }}>Communication</span>
          </div>

          <p className="text-white/60 mb-12 max-w-xl mx-auto">
            의회, 공공기관, 대기업을 위한 최상의 전략적 커뮤니케이션 솔루션을 제공합니다.
            <br />
            비즈니스의 격을 높이는 파트너가 되겠습니다.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
            <a
              href="tel:01076526842"
              className="px-8 py-4 font-bold uppercase tracking-wider border-2 transition-all duration-300"
              style={{
                borderColor: 'var(--color-gold)',
                color: 'var(--color-gold)',
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
              📞 010-7652-6842
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300"
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
              📧 프로젝트 문의하기
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-12">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: 'var(--color-charcoal)' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                  const icon = e.currentTarget.querySelector('svg');
                  if (icon) (icon as SVGElement).style.color = 'var(--color-primary-dark)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-charcoal)';
                  const icon = e.currentTarget.querySelector('svg');
                  if (icon) (icon as SVGElement).style.color = 'var(--color-gold)';
                }}
              >
                <Icon className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div
            className="pt-8 text-sm"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            © 2026 Y Communication. All Rights Reserved.
            <br />
            <span style={{ color: 'var(--color-gold)' }}>
              The Standard of Business Class.
            </span>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        designType="modern"
      />
    </>
  );
}
