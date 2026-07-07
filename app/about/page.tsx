import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';
const gold = '#C6A24A';

const values = [
  ['Opportunity', 'Create access for people who need one practical opening to move forward.'],
  ['Dignity', 'Treat every intervention as a way to restore confidence, not just provide relief.'],
  ['Continuity', 'Build institutions and programmes that last beyond a single event.'],
  ['Accountability', 'Tie every promise to clear action, visible impact, and responsible stewardship.'],
];

export default function AboutPage() {
  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]">
      <SiteHeader />
      <section className="section-rise bg-[#F5F1E8] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em]" style={{ color: green }}>About CHIEF</p>
            <h1 className="text-3xl font-black sm:text-4xl md:text-5xl leading-tight">A life built around enterprise, service, and community impact.</h1>
            <p className="mt-6 text-sm leading-7 text-gray-600">
              CHIEF Alex Achebe represents a generation of leaders who believe business success must create opportunity, dignity, and lasting transformation for people.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              His work connects private enterprise, philanthropy, mentorship, and public responsibility into one practical mission: help people stand stronger.
            </p>
          </div>
          <div className="image-lift overflow-hidden rounded-2xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campaign-realistic/portrait-statesman.webp" alt="CHIEF portrait" className="h-80 w-full object-cover object-top sm:h-96 md:h-[520px]" />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 h-1 w-10 rounded-full" style={{ backgroundColor: gold }} />
            <h2 className="text-3xl font-black">What defines the work</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">The foundation-style platform is organised around values that can be seen in business decisions, community visits, youth support, and long-term philanthropy.</p>
          </div>
          <div className="stagger-list grid gap-6 md:grid-cols-4">
            {values.map(([title, body]) => (
              <div key={title} className="rounded-xl bg-[#F5F1E8] p-7">
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 text-white" style={{ backgroundColor: green }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
          {['Business builder', 'Community advocate', 'Foundation leader'].map((item) => (
            <div key={item} className="rounded-xl bg-white/10 p-7">
              <h3 className="font-black">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">A distinct expression of the same commitment to sustainable impact.</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
