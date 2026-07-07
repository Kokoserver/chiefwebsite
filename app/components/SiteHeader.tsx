import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { siteConfig } from '../config/site';

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
  return (
    <header className="sticky top-0 z-50 bg-[#F5F1E8]/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="/" className="shrink-0">
          <BrandLogo />
        </Link>
        <nav className="hidden items-center gap-6 text-xs font-semibold text-gray-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gray-950">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/support" className="rounded-md px-5 py-3 text-xs font-bold text-white" style={{ backgroundColor: green }}>
          Support / Volunteer
        </Link>
      </div>
    </header>
  );
}
