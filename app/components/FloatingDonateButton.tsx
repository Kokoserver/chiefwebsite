'use client';

import { useEffect, useState } from 'react';

export default function FloatingDonateButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#donate"
      className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm shadow-xl transition hover:scale-110"
      style={{
        backgroundColor: 'var(--reformer-yellow)',
        color: 'var(--reformer-blue)',
        animation: 'shapeFadeIn 0.3s ease forwards',
      }}
      aria-label="Donate"
    >
      $
    </a>
  );
}
