'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ContactModal } from '@/components/contact/ContactModal';

export function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <footer 
        className="py-16 lg:py-24 text-white"
        style={{ backgroundColor: 'var(--color-business-primary)' }}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-20 pb-12 lg:pb-20 border-b border-white/10">
            <div className="text-center lg:text-left w-full lg:w-auto">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 lg:mb-6" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    Let&apos;s Work Together.
                </h2>
                <p className="text-white/60 text-base lg:text-lg">
                    새로운 프로젝트에 대해 이야기 나누는 것을 좋아합니다. <br className="hidden md:block"/>
                    브랜드의 가치를 높이는 여정을 함께하세요.
                </p>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row gap-4 lg:gap-6 w-full lg:w-auto">
                <a 
                    href="tel:01076526842"
                    className="group px-6 lg:px-8 py-4 bg-white/5 border border-white/10 hover:border-[var(--color-business-secondary)] transition-all duration-300"
                >
                    <span className="block text-xs uppercase tracking-widest text-white/40 mb-1 group-hover:text-[var(--color-business-secondary)]">Call Us</span>
                    <span className="text-base lg:text-lg font-bold">010-7652-6842</span>
                </a>
                <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="group px-6 lg:px-8 py-4 bg-white/5 border border-white/10 hover:border-[var(--color-business-secondary)] transition-all duration-300 text-left"
                >
                    <span className="block text-xs uppercase tracking-widest text-white/40 mb-1 group-hover:text-[var(--color-business-secondary)]">Email Inquiry</span>
                    <span className="text-base lg:text-lg font-bold">info@ycom.live</span>
                </button>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left">
            <div>
                <Link href="/" className="text-xl lg:text-2xl font-black tracking-tighter text-white block mb-4 lg:mb-6">
                    Y<span style={{ color: 'var(--color-business-secondary)' }}> Communication</span>
                </Link>
                <div className="text-white/40 text-xs lg:text-sm leading-relaxed">
                    <p>Business License: 123-45-67890</p>
                    <p>Address: Seoul, Republic of Korea</p>
                    <p>CEO: Suhwa Oh</p>
                </div>
            </div>
            
            <div className="md:text-right">
                <div className="flex gap-4 lg:gap-6 mb-4 lg:mb-6 justify-center md:justify-end">
                    {['Instagram', 'LinkedIn', 'Blog'].map(social => (
                        <a key={social} href="#" className="text-white/40 hover:text-white transition-colors text-xs lg:text-sm uppercase tracking-wider">
                            {social}
                        </a>
                    ))}
                </div>
                <p className="text-white/20 text-xs">
                    &copy; {new Date().getFullYear()} Y Communication. All rights reserved.
                </p>
            </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        designType="business"
      />
    </footer>
  );
}
