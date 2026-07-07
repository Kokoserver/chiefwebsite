'use client';

import { useEffect, useState } from 'react';

export default function FundraisingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-2 flex items-center gap-4"
      style={{
        backgroundColor: 'var(--commander-gold)',
        animation: 'slideDown 0.3s ease forwards',
      }}
    >
      <span className="text-sm font-semibold hidden sm:block" style={{ color: 'var(--commander-dark)' }}>
        2026 Senate Campaign
      </span>
      <div className="flex-1 h-2 rounded-full bg-white/30 overflow-hidden max-w-xs">
        <div
          className="h-full rounded-full"
          style={{ width: '84.7%', backgroundColor: 'var(--commander-dark)' }}
        />
      </div>
      <span className="text-xs font-medium whitespace-nowrap" style={{ color: 'var(--commander-dark)' }}>
        $847K of $1M goal
      </span>
      <a
        href="#donate"
        className="px-4 py-1 rounded-full text-sm font-bold transition hover:opacity-80"
        style={{ backgroundColor: 'var(--commander-dark)', color: 'var(--commander-gold)' }}
      >
        Donate
      </a>
    </div>
  );
}
