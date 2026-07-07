import JourneyCarousel from '../components/JourneyCarousel';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';

const impactAreas = [
  ['Education support', 'Scholarship-minded interventions, school support, mentorship, and learning access.'],
  ['Youth development', 'Skills, exposure, confidence, and pathways for young people to participate in the modern economy.'],
  ['Community welfare', 'Practical support for vulnerable families, widows, children, and underserved groups.'],
  ['Institution building', 'Programmes designed to last beyond a single donation or public appearance.'],
];

export default function PublicServicePage() {
  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]">
      <SiteHeader />
      <section className="section-rise relative py-24 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/campaign-realistic/rally.webp" alt="Public service" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-white/70">Public Service</p>
          <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">Leadership measured by impact.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80">Public service is expressed through advocacy, philanthropy, education support, healthcare access, and direct community development.</p>
        </div>
      </section>
      <JourneyCarousel />
      <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black" style={{ color: green }}>Community Impact</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">Every initiative is designed to make practical support visible, measurable, and sustainable.</p>
          </div>
          <div className="stagger-list mt-10 grid gap-6 md:grid-cols-4">
            {impactAreas.map(([title, body]) => (
              <div key={title} className="rounded-xl bg-white p-7 shadow-sm">
                <h3 className="font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
