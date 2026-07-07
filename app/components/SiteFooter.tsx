import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { siteConfig } from '../config/site';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/biography', label: 'Biography' },
  { href: '/vision-mission', label: 'Vision and Mission' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/community-projects', label: 'Community Projects' },
  { href: '/manifesto', label: 'Manifesto / Agenda' },
  { href: '/news', label: 'News and Press Releases' },
  { href: '/events', label: 'Events' },
  { href: '/public-service', label: 'Public Service' },
  { href: '/support', label: 'Support / Volunteer' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 text-sm text-gray-500 md:grid-cols-4">
        <div>
          <div className="mb-5">
            <BrandLogo />
          </div>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gray-900">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-black text-gray-900">Organization</h3>
          <p>Achebe Group</p>
          <p>{siteConfig.foundationName}</p>
        </div>
        <div>
          <h3 className="mb-5 font-black text-gray-900">Contact</h3>
          <p>+234 800 000 0000</p>
          <p>support@chiefachebe.com</p>
          <p>Nigeria</p>
        </div>
        <div>
          <h3 className="mb-5 font-black text-gray-900">Quote</h3>
          <p>“Leadership without compassion is nothing more than ambition without purpose.”</p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-black/10 px-5 pt-8 text-xs text-gray-400">
        <p>All Rights Reserved © 2026 {siteConfig.foundationName}</p>
        <div className="flex gap-3"><span>in</span><span>ig</span><span>fb</span></div>
      </div>
    </footer>
  );
}
