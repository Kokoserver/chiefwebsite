'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  variant: 'commander' | 'builder' | 'reformer';
}

export default function Navbar({ variant }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const colorMap = {
    commander: {
      bg: 'bg-green-950',
      text: 'text-white',
      accent: 'bg-amber-600 text-green-950 hover:bg-amber-500',
      border: 'border-amber-600',
    },
    builder: {
      bg: 'bg-green-900',
      text: 'text-white',
      accent: 'bg-orange-700 text-white hover:bg-orange-600',
      border: 'border-orange-700',
    },
    reformer: {
      bg: 'bg-slate-900',
      text: 'text-white',
      accent: 'bg-yellow-500 text-slate-900 hover:bg-yellow-400',
      border: 'border-yellow-500',
    },
  };

  const colors = colorMap[variant];

  return (
    <nav className={`${colors.bg} ${colors.text} sticky top-0 z-50 shadow-md`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Sen. Emeka Achebe
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:opacity-80 transition">
            Home
          </Link>
          <Link href="#about" className="hover:opacity-80 transition">
            About
          </Link>
          <Link href="#vision" className="hover:opacity-80 transition">
            Vision
          </Link>
          <Link href="#events" className="hover:opacity-80 transition">
            Events
          </Link>
          <Link href="#get-involved" className="hover:opacity-80 transition">
            Get Involved
          </Link>
          <Link href="#contact" className="hover:opacity-80 transition">
            Contact
          </Link>
          <button className={`px-6 py-2 rounded-full font-semibold ${colors.accent}`}>
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden flex flex-col gap-4 px-6 py-4 border-t ${colors.border}`}>
          <Link href="/" className="hover:opacity-80 transition">
            Home
          </Link>
          <Link href="#about" className="hover:opacity-80 transition">
            About
          </Link>
          <Link href="#vision" className="hover:opacity-80 transition">
            Vision
          </Link>
          <Link href="#events" className="hover:opacity-80 transition">
            Events
          </Link>
          <Link href="#get-involved" className="hover:opacity-80 transition">
            Get Involved
          </Link>
          <Link href="#contact" className="hover:opacity-80 transition">
            Contact
          </Link>
          <button className={`px-6 py-2 rounded-full font-semibold ${colors.accent}`}>
            Donate
          </button>
        </div>
      )}
    </nav>
  );
}
