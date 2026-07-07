'use client';

import { useState } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Power & Energy Reform',
    description:
      'Anambra cannot develop in darkness. We will sponsor a Senate bill to reform the DISCO franchise model, enforce penalty clauses on Enugu DisCo, and unlock federal funding for three new substations across Anambra South — delivering at least 18 hours of daily power within 36 months.',
  },
  {
    number: '02',
    title: 'Security & Peace',
    description:
      'Every Anambra person deserves safety. Our plan integrates community intelligence networks, state police autonomy legislation, and ₦10B in dedicated federal security infrastructure to end kidnapping and restore peace across the Southeast.',
  },
  {
    number: '03',
    title: 'Education & Skills',
    description:
      'End the ASUU strikes cycle permanently. We will co-sponsor the Tertiary Education Stability Act, build 60 modern secondary schools across Anambra South, and establish a full-tuition Senate scholarship for every indigene admitted to a federal university.',
  },
  {
    number: '04',
    title: 'Roads & Infrastructure',
    description:
      'The Onitsha-Owerri Road, Enugu-Onitsha Expressway, and Awka-Ekwulobia corridor cannot wait another decade. We will secure and directly supervise federal allocation releases — with a published progress tracker updated monthly for every constituent to see.',
  },
];

export default function PolicyPillars() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pillars.map((pillar, i) => (
        <div
          key={i}
          className="bg-white border border-gray-100 rounded-lg p-8 cursor-pointer transition hover:shadow-lg"
          onClick={() => setActive(active === i ? null : i)}
        >
          <div
            className="leading-none mb-2 select-none"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: '6rem',
              fontWeight: 100,
              color: 'var(--commander-gold)',
              opacity: 0.55,
              lineHeight: 1,
            }}
          >
            {pillar.number}
          </div>
          <h3
            className="text-xl font-bold mb-3"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: 'var(--commander-dark)',
            }}
          >
            {pillar.title}
          </h3>
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: active === i ? '220px' : '0px' }}
          >
            <p className="text-gray-600 text-sm leading-relaxed pb-2">{pillar.description}</p>
          </div>
          <div
            className="text-xs font-semibold tracking-widest uppercase mt-2 transition"
            style={{ color: 'var(--commander-gold)' }}
          >
            {active === i ? '▲ Close' : '▼ Read Policy'}
          </div>
        </div>
      ))}
    </div>
  );
}
