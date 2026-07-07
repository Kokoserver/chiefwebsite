'use client';

import { useEffect, useRef, createElement } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  threshold?: number;
  delay?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  className = '',
  stagger = false,
  threshold = 0.15,
  delay,
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = delay;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const baseClass = stagger ? 'reveal-stagger' : 'reveal';
  const combined = [baseClass, className].filter(Boolean).join(' ');

  return createElement(as, { ref, className: combined }, children);
}
