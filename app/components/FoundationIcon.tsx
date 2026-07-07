const green = '#164A37';

export const foundationServices = [
  {
    icon: 'hospitality',
    title: 'Hospitality',
    body: 'Delivering quality accommodation and hospitality experiences with service standards that reflect dignity and care.',
  },
  {
    icon: 'property',
    title: 'Property Management',
    body: 'Managing residential and commercial properties with discipline, accountability, and long-term value creation.',
  },
  {
    icon: 'briefcase',
    title: 'Entrepreneurship',
    body: 'Creating opportunities for aspiring business leaders through mentorship, enterprise support, and practical exposure.',
  },
  {
    icon: 'digital',
    title: 'Digital Empowerment',
    body: 'Supporting individuals with relevant skills, tools, and confidence for the modern economy.',
  },
  {
    icon: 'education',
    title: 'Education',
    body: 'Investing in learning, personal development, scholarships, and access to opportunity.',
  },
  {
    icon: 'community',
    title: 'Community Development',
    body: 'Supporting initiatives that strengthen families, local institutions, and underserved communities.',
  },
];

export default function FoundationIcon({ name, size = 28 }: { name: string; size?: number }) {
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: green,
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (name === 'hospitality') {
    return (
      <svg {...shared}>
        <path d="M20.8 5.8a5.1 5.1 0 0 0-7.2 0L12 7.4l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 21l8.8-8a5.1 5.1 0 0 0 0-7.2Z" />
      </svg>
    );
  }

  if (name === 'property') {
    return (
      <svg {...shared}>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    );
  }

  if (name === 'briefcase') {
    return (
      <svg {...shared}>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18M12 11v2" />
      </svg>
    );
  }

  if (name === 'digital') {
    return (
      <svg {...shared}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21M12 3C9.6 5.6 8.4 8.6 8.4 12S9.6 18.4 12 21" />
      </svg>
    );
  }

  if (name === 'education') {
    return (
      <svg {...shared}>
        <path d="M3 9l9-4 9 4-9 4-9-4Z" />
        <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4M21 9v5" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M5 19l14-14M14 5h5v5" />
      <path d="M6 14l4 4 8-8" />
      <path d="M4 20h6" />
    </svg>
  );
}
