'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Mail } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const navLinks = [
    { href: '/#about', label: '소개' },
    { href: '/#ceo', label: 'CEO 인사말' },
    { href: '/#Curriculum', label: '교육커리큘럼' },
    { href: '/portfolio/events', label: '포트폴리오' },
    { href: '/announcer', label: '아나운서' },
    { href: '/#partners', label: '파트너사' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg' : 'py-8 bg-transparent'
        }`}
        style={{ borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white">
            Y<span style={{ color: 'var(--color-business-secondary)' }}> Communication</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-sm font-medium text-white/80">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors uppercase tracking-wider text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-300 hover:bg-white hover:text-black"
                style={{ 
                    color: 'var(--color-business-secondary)',
                    borderColor: 'var(--color-business-secondary)'
                }}
            >
                문의하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#1a1a1a] transform transition-transform duration-500 md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex justify-end">
          <button onClick={toggleMenu} className="text-white p-2">
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="text-2xl font-bold text-white uppercase tracking-widest hover:text-[var(--color-business-secondary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
                toggleMenu();
                setIsContactModalOpen(true);
            }}
            className="mt-8 px-8 py-4 text-sm font-bold uppercase tracking-widest border transition-all duration-300"
            style={{ 
                color: 'var(--color-business-secondary)',
                borderColor: 'var(--color-business-secondary)'
            }}
          >
            문의하기
          </button>
        </div>
      </div>
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        designType="business"
      />
    </>
  );
}
