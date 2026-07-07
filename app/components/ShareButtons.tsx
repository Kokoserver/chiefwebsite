'use client';

import { useState } from 'react';

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  const shareButtons = [
    {
      label: 'Share on X',
      icon: '𝕏',
      onClick: () =>
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent('Support Dr. Achebe for Senate 2026! ' + window.location.href)}`,
          '_blank'
        ),
    },
    {
      label: 'Share on Facebook',
      icon: 'f',
      onClick: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
          '_blank'
        ),
    },
    {
      label: copied ? 'Link Copied!' : 'Copy Link',
      icon: '🔗',
      onClick: copyLink,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
      {shareButtons.map((btn) => (
        <button
          key={btn.label}
          onClick={btn.onClick}
          className="flex-1 flex flex-col items-center gap-3 py-6 px-4 rounded-2xl font-bold transition hover:scale-105 hover:shadow-xl"
          style={{ backgroundColor: 'var(--reformer-blue)', color: 'white' }}
        >
          <span className="text-3xl">{btn.icon}</span>
          <span className="text-sm">{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
