'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, Instagram, Linkedin } from 'lucide-react';

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
    { href: '/#about', label: 'Expertise' },
    { href: '/#ceo', label: 'Leadership' },
    { href: '/#services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/announcer', label: 'Network' },
    { href: '/#partners', label: 'Clients' },
    { href: '/#contact', label: 'Contact', isGold: true },
  ];

  return (
    <>
      {/* Navigation - Transparent, absolute positioning */}
      <nav
        className="fixed w-full z-40 top-0 py-6 transition-all duration-300"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: 'transparent',
        }}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white"
            style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '-0.05em' }}
          >
            Y <span style={{ color: 'var(--color-gold)' }}>Communication</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm font-semibold uppercase tracking-wider transition-colors"
                  style={{ color: link.isGold ? 'var(--color-gold)' : 'white' }}
                  onMouseOver={(e) => {
                    if (!link.isGold) {
                      const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                      if (underline) underline.style.width = '100%';
                    }
                  }}
                  onMouseOut={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '0';
                  }}
                >
                  {link.label}
                  <span
                    className="nav-underline absolute left-0 bottom-[-5px] h-[2px] transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-gold)',
                      width: '0',
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
            style={{ color: 'var(--color-gold)' }}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transform transition-transform duration-500 flex flex-col pt-24 px-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--color-primary-dark)' }}
      >
        <div className="absolute top-6 right-6 flex items-center gap-4">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: 'var(--color-gold)' }}
          >
            Close
          </span>
          <button
            onClick={toggleMenu}
            className="p-2 transition-colors"
            style={{
              backgroundColor: 'var(--color-charcoal)',
              color: 'var(--color-gold)',
            }}
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex flex-col space-y-8 text-3xl font-black text-white">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="group flex items-center justify-between"
              style={{ color: link.isGold ? 'var(--color-gold)' : 'white' }}
            >
              <span>{link.label}</span>
              {link.isGold ? (
                <Mail className="w-6 h-6" />
              ) : (
                <span
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-gold)' }}
                >
                  →
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-auto pb-12" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <div className="flex gap-4 mb-6">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-charcoal)' }}
            >
              <Instagram className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
            </div>
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-charcoal)' }}
            >
              <Linkedin className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
            </div>
          </div>
          <p className="text-xs font-medium tracking-tight">
            © 2026 Y Communication. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
