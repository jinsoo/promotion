'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Mail, Instagram, Linkedin } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { href: '/#about', label: '소개', labelEn: 'About' },
    { href: '/#ceo', label: 'CEO', labelEn: 'CEO' },
    { href: '/class', label: '교육커리큘럼', labelEn: 'Curriculum' },
    { href: '/portfolio/events', label: '포트폴리오', labelEn: 'Portfolio' },
    { href: '/announcer', label: '아나운서', labelEn: 'Announcer' },
    { href: '/#partners', label: '파트너사', labelEn: 'Partners' },
    { href: '/#contact', label: '문의하기', labelEn: 'Contact' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-40 top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
            Y <span className="text-sky-600">Communication</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-sky-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-600 hover:text-sky-600 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-50 transform transition-transform duration-500 md:hidden flex flex-col pt-24 px-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute top-4 right-6 flex items-center gap-4">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Close Menu
          </span>
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-500 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex flex-col space-y-8 text-3xl font-black text-slate-900">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`group flex items-center justify-between ${
                index === navLinks.length - 1 ? 'text-sky-600' : ''
              }`}
            >
              <span>{link.labelEn}</span>
              {index === navLinks.length - 1 ? (
                <Mail className="w-6 h-6" />
              ) : (
                <ChevronRight className="w-6 h-6 text-sky-200 group-hover:text-sky-600 transition-colors" />
              )}
            </Link>
          ))}
        </div>

        <div className="mt-auto pb-12 text-slate-400">
          <div className="flex gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <Linkedin className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs font-medium tracking-tight">
            &copy; 2026 Y Communication. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
