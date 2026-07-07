import FoundationIcon, { foundationServices } from '../components/FoundationIcon';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';

const principles = [
  ['Build with discipline', 'Leadership begins with systems, standards, and consistency.'],
  ['Serve with empathy', 'Institutions should improve lives, not only produce numbers.'],
  ['Develop people', 'Every business platform should transfer skills and opportunity.'],
];

export default function LeadershipPage() {
  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]">
      <SiteHeader />
      <section className="section-rise py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <div className="image-lift overflow-hidden rounded-xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campaign-realistic/portrait-statesman.webp" alt="Business leadership portrait" className="h-80 w-full object-cover object-top sm:h-96 md:h-[560px]" />
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em]" style={{ color: green }}>Leadership</p>
            <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">Business Leadership</h1>
            <p className="mt-5 text-sm leading-7 text-gray-600">CHIEF Alex Achebe balances public service with private-sector leadership, building organizations that create jobs, strengthen communities, and fund humanitarian work.</p>
            <div className="stagger-list mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {foundationServices.map((service) => (
                <div key={service.title}>
                  <div className="mb-3"><FoundationIcon name={service.icon} /></div>
                  <h2 className="text-sm font-black">{service.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-gray-500">{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F1E8] py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
          {principles.map(([title, body]) => (
            <div key={title} className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
