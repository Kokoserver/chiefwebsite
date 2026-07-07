'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

const green = '#164A37';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/manifesto', label: 'Agenda' },
  { href: '/news', label: 'News' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F1E8]/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:py-5">
        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <BrandLogo />
        </Link>
        <nav className="hidden items-center gap-6 text-xs font-semibold text-gray-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gray-950">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/support" className="hidden rounded-md px-5 py-3 text-xs font-bold text-white sm:inline-block" style={{ backgroundColor: green }}>
            Support / Volunteer
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-0.5 w-6 rounded-full bg-[#1E2A24] transition duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 rounded-full bg-[#1E2A24] transition duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 rounded-full bg-[#1E2A24] transition duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-black/5 px-5 pb-6 pt-1 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-black/5 py-3.5 text-sm font-semibold text-gray-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/support"
            onClick={() => setMenuOpen(false)}
            className="mt-5 block rounded-md px-5 py-3.5 text-center text-sm font-bold text-white"
            style={{ backgroundColor: green }}
          >
            Support / Volunteer
          </Link>
        </nav>
      )}
    </header>
  );
}
