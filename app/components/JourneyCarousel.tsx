'use client';

import { useState } from 'react';

const green = '#164A37';

const journey = [
  {
    year: '2021',
    title: 'Public Service',
    body: 'Continuing to contribute to society through leadership, advocacy, and community development.',
    image: '/campaign-realistic/rally.webp',
  },
  {
    year: '2022',
    title: 'Business Growth',
    body: 'Building businesses that create jobs, develop talent, and strengthen local economic opportunity.',
    image: '/campaign-realistic/business-forum.webp',
  },
  {
    year: '2023',
    title: 'Foundation Work',
    body: 'Scaling education, healthcare, and youth development interventions through structured community support.',
    image: '/campaign-realistic/community-project.webp',
  },
  {
    year: '2024',
    title: 'Community Impact',
    body: 'Expanding direct support to families, schools, volunteers, and underserved communities.',
    image: '/campaign-realistic/volunteer.webp',
  },
  {
    year: '2025',
    title: 'Legacy Building',
    body: 'Uniting business leadership with long-term public good and measurable transformation.',
    image: '/campaign-realistic/youth-summit.webp',
  },
];

export default function JourneyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'previous' | 'next'>('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const active = journey[activeIndex];

  const changeSlide = (nextIndex: number, nextDirection: 'previous' | 'next') => {
    if (nextIndex === activeIndex || isAnimating) return;

    setDirection(nextDirection);
    setIsAnimating(true);

    window.setTimeout(() => {
      setActiveIndex(nextIndex);
      window.setTimeout(() => setIsAnimating(false), 30);
    }, 180);
  };

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === journey.length - 1;

  const move = (direction: 'previous' | 'next') => {
    const nextIndex = direction === 'previous' ? activeIndex - 1 : activeIndex + 1;
    if (nextIndex < 0 || nextIndex >= journey.length) return;

    changeSlide(nextIndex, direction);
  };

  return (
    <section id="public-service" className="py-20 text-white" style={{ backgroundColor: green }}>
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-3xl font-black md:text-4xl">A Journey Shaped by Purpose</h2>

        <div className="mt-8 grid grid-cols-5 items-center text-xs font-bold text-white/55 md:mt-12 md:text-sm">
          {journey.map((item, index) => (
            <button
              key={item.year}
              type="button"
              onClick={() => changeSlide(index, index > activeIndex ? 'next' : 'previous')}
              className="group relative flex items-center justify-center gap-1.5 py-2 transition hover:text-white md:gap-3"
              aria-current={index === activeIndex ? 'step' : undefined}
            >
              <span className="h-px flex-1 border-t border-dashed border-white/25" />
              <span className={`transition duration-300 ${index === activeIndex ? 'text-white' : ''}`}>{item.year}</span>
              <span
                className={`absolute left-[calc(50%-1.25rem)] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white transition duration-300 ${
                  index === activeIndex ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-8 md:mt-16 md:grid-cols-[48px_0.85fr_1.35fr_48px]">
          <button
            type="button"
            aria-label="Previous milestone"
            onClick={() => move('previous')}
            disabled={atStart}
            className="hidden h-10 w-10 items-center justify-center text-4xl font-light text-white/80 transition hover:text-white disabled:cursor-default disabled:text-white/25 md:flex"
          >
            ‹
          </button>

          <div
            className={`md:pl-8 transition-all duration-300 ease-out ${
              isAnimating
                ? direction === 'next' ? '-translate-x-4 opacity-0' : 'translate-x-4 opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <p className="mb-3 text-xs font-bold tracking-[0.22em] text-white/45">{active.year}</p>
            <h3 className="text-xl font-black">{active.title}</h3>
            <p className="mt-4 max-w-sm text-base leading-7 text-white/80">{active.body}</p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.image}
              alt={active.title}
              className={`h-64 w-full object-cover transition-all duration-300 ease-out md:h-72 ${
                isAnimating
                  ? direction === 'next' ? 'translate-x-6 scale-105 opacity-0' : '-translate-x-6 scale-105 opacity-0'
                  : 'translate-x-0 scale-100 opacity-100'
              }`}
            />
          </div>

          <button
            type="button"
            aria-label="Next milestone"
            onClick={() => move('next')}
            disabled={atEnd}
            className="hidden h-10 w-10 items-center justify-center text-4xl font-light text-white/80 transition hover:text-white disabled:cursor-default disabled:text-white/25 md:flex"
          >
            ›
          </button>

          <div className="flex justify-center gap-4 md:hidden">
            <button type="button" onClick={() => move('previous')} disabled={atStart} className="text-4xl text-white/80 disabled:text-white/25" aria-label="Previous milestone">‹</button>
            <button type="button" onClick={() => move('next')} disabled={atEnd} className="text-4xl text-white/80 disabled:text-white/25" aria-label="Next milestone">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
