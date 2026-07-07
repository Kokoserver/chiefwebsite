'use client';

import { useState } from 'react';

const skills = [
  'Phone Banking',
  'Ward Canvassing',
  'Social Media',
  'Market Outreach',
  'Event Coordination',
  'Igbo Language Support',
];

export default function VolunteerForm() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (skill: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(skill) ? next.delete(skill) : next.add(skill);
      return next;
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-white mb-2">Daalu! Thank You!</h3>
        <p className="text-white opacity-80">
          Welcome to the movement. Our ward coordinator will reach out within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {skills.map((skill) => {
          const isChecked = checked.has(skill);
          return (
            <label
              key={skill}
              className="flex items-center gap-3 cursor-pointer p-3 rounded-lg transition"
              style={{ backgroundColor: isChecked ? 'rgba(184,77,26,0.18)' : 'rgba(255,255,255,0.06)' }}
              onClick={() => toggle(skill)}
            >
              <div
                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition border-2"
                style={{
                  borderColor: isChecked ? 'var(--builder-orange)' : 'rgba(255,255,255,0.4)',
                  backgroundColor: isChecked ? 'var(--builder-orange)' : 'transparent',
                }}
              >
                {isChecked && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className="text-white text-sm">{skill}</span>
            </label>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Your Full Name"
          required
          className="px-5 py-3 rounded-full text-gray-900 focus:outline-none w-full"
        />
        <input
          type="tel"
          placeholder="Phone Number (WhatsApp)"
          required
          className="px-5 py-3 rounded-full text-gray-900 focus:outline-none w-full"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your LGA / Ward (e.g. Awka South, Ward 3)"
          className="w-full px-5 py-3 rounded-full text-gray-900 focus:outline-none"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-10 py-3 rounded-full font-bold text-white transition hover:opacity-80"
          style={{ backgroundColor: 'var(--builder-orange)' }}
        >
          Ọ dị mma — Count Me In!
        </button>
      </div>
    </form>
  );
}
