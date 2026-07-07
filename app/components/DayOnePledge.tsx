'use client';

import { useState } from 'react';

const pledges = [
  {
    pledge: 'Table a bill to reform the NEDC funding formula — ending Southeast exclusion',
    detail: 'The Niger Delta Development Commission has excluded Southeast states for decades despite oil infrastructure running through our land. Day One: a bold bill to correct this injustice and redirect ₦500B in unclaimed funds to the Southeast.',
  },
  {
    pledge: 'Sponsor the Anambra Community Police Empowerment Act',
    detail: 'State police is long overdue. This bill will give Anambra State the legal authority and ₦15B federal startup funding to build a community police force trained, equipped, and accountable to the people of Anambra.',
  },
  {
    pledge: 'Open free Senate liaison offices in Awka, Onitsha, and Nnewi',
    detail: 'Senators should be accessible — not hidden in Abuja. By Week 2, three fully-staffed constituency offices open across Anambra South, with dedicated officers to receive complaints, petitions, and project reports every working day.',
  },
  {
    pledge: 'File an emergency motion on Enugu-Onitsha expressway federal funding release',
    detail: 'Over ₦120B has been allocated but not disbursed for this critical road. This motion will compel the FMWH to release funds within 90 days or face a Senate Accounts Committee investigation — publicly broadcast.',
  },
  {
    pledge: 'Launch the ₦2B Senator Achebe Women Entrepreneurs Fund',
    detail: 'In partnership with Bank of Industry, this fund will provide zero-interest loans of ₦500K–₦5M to Anambra women in manufacturing, trade, and agriculture. Applications open within 60 days of taking office.',
  },
  {
    pledge: 'Host the inaugural Anambra Economic Investment Summit in the Senate',
    detail: 'Bringing 100 domestic and international investors to a Senate-convened summit focused solely on Anambra opportunities — power, tech, agriculture, logistics — with binding MOUs before guests leave Abuja.',
  },
];

export default function DayOnePledge() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggle = (i: number) => {
    setExpanded((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {pledges.map((item, i) => {
        const isOpen = expanded.includes(i);
        return (
          <div
            key={i}
            className="rounded-xl overflow-hidden transition"
            style={{
              border: isOpen ? '2px solid var(--reformer-yellow)' : '2px solid transparent',
              backgroundColor: isOpen ? 'rgba(240,180,28,0.07)' : 'white',
            }}
          >
            <button
              className="w-full flex items-start gap-4 p-5 text-left transition hover:bg-yellow-50"
              onClick={() => toggle(i)}
            >
              <span
                className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                style={{ backgroundColor: 'var(--reformer-yellow)', color: 'var(--reformer-blue)' }}
              >
                ✓
              </span>
              <span className="font-semibold leading-snug" style={{ color: 'var(--reformer-blue)' }}>
                {item.pledge}
              </span>
              <span
                className="ml-auto text-lg leading-none flex-shrink-0"
                style={{ color: 'var(--reformer-yellow)' }}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-400"
              style={{ maxHeight: isOpen ? '220px' : '0px' }}
            >
              <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed pl-[3.75rem]">
                {item.detail}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
