'use client';

import { useRef, useState } from 'react';

const testimonials = [
  {
    quote: "Emeka Achebe built the secondary school my children attend in Awka. He doesn't just make promises — he shows up and follows through. That is what Anambra needs in Abuja.",
    name: 'Adaeze Okonkwo',
    city: 'Awka, Anambra',
    role: 'Market Trader & PTA Chairwoman',
    avatar: '/campaign-realistic/about-market.webp',
  },
  {
    quote: "As an Nnewi auto parts dealer, I have seen politicians come and go. Senator Achebe is different — he sat down with us at Nnewi Chamber of Commerce and actually listened. That meeting produced the Anambra Industrial Support Fund.",
    name: 'Chukwudi Ezeobele',
    city: 'Nnewi, Anambra',
    role: 'Auto Parts Dealer & Chamber Member',
    avatar: '/campaign-realistic/business-forum.webp',
  },
  {
    quote: "When the 2022 flood destroyed our farmland in Oguta, his foundation sent relief within 48 hours — not politicians, his personal team. That kind of speed is rare. He has earned my vote.",
    name: 'Ifeanyi Okeke',
    city: 'Oguta, Imo State',
    role: 'Cassava Farmer & Community Leader',
    avatar: '/campaign-realistic/community-project.webp',
  },
  {
    quote: "Anambra women are tired of politicians who forget us after election day. Senator Achebe attended our Eke Awka market association meeting himself. Not his aide — him. That respect means everything.",
    name: 'Ngozi Anyanwu',
    city: 'Awka, Anambra',
    role: 'Market Women Association President',
    avatar: '/campaign-realistic/volunteer.webp',
  },
  {
    quote: "I was part of his Igbo Youth Tech Empowerment programme. Got my first laptop, six months of coding training, and an internship in Lagos. Now I run my own startup. Senator Achebe changed my life completely.",
    name: 'Precious Eze',
    city: 'Enugu',
    role: 'Software Developer & Entrepreneur',
    avatar: '/campaign-realistic/youth-summit.webp',
  },
];

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: 'prev' | 'next') => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    const newIndex =
      dir === 'next'
        ? Math.min(activeIndex + 1, testimonials.length - 1)
        : Math.max(activeIndex - 1, 0);
    container.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-full px-4 md:px-16"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <div
                className="text-5xl leading-none mb-4 select-none"
                style={{ color: 'var(--builder-orange)' }}
              >
                "
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-bold" style={{ color: 'var(--builder-green)' }}>
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8 items-center">
        <button
          onClick={() => scroll('prev')}
          disabled={activeIndex === 0}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold transition hover:bg-gray-100 disabled:opacity-30 text-xl"
          style={{ color: 'var(--builder-green)' }}
          aria-label="Previous"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full transition"
              style={{
                backgroundColor: i === activeIndex ? 'var(--builder-orange)' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => scroll('next')}
          disabled={activeIndex === testimonials.length - 1}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold transition hover:bg-gray-100 disabled:opacity-30 text-xl"
          style={{ color: 'var(--builder-green)' }}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
