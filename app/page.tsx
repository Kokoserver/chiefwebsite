import FoundationIcon, { foundationServices } from './components/FoundationIcon';
import JourneyCarousel from './components/JourneyCarousel';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

const green = '#164A37';
const gold = '#C6A24A';
const ink = '#1E2A24';

const metrics = [
  { value: '40+', label: 'Years of leadership', tone: 'green' },
  { value: '55+', label: 'Leaders supported', tone: 'gold' },
  { value: '2', label: 'Countries of operation', tone: 'green' },
  { value: '6', label: 'Hospitality projects', tone: 'gold' },
  { value: '100%', label: 'Community centered', tone: 'green' },
  { value: '1', label: 'Foundation mission', tone: 'gold' },
];

const testimonials = [
  {
    quote: 'Jasper Lee drives technological advancements and creative solutions.',
    name: 'Maria Gonzalez',
  },
  {
    quote: 'Nina Wong inspires teams through mentorship and visionary leadership.',
    name: 'Kevin Brown',
  },
  {
    quote: 'Samantha Cruz fosters collaboration and innovation in all projects.',
    name: 'Tommy Johnson',
  },
  {
    quote: 'Samantha Cruz fosters collaboration and innovation in all projects.',
    name: 'Tommy Johnson',
  },
  {
    quote: 'Samantha Cruz fosters collaboration and innovation in all projects.',
    name: 'Tommy Johnson',
  },
  {
    quote: 'Samantha Cruz fosters collaboration and innovation in all projects.',
    name: 'Tommy Johnson',
  },
];

const partners = [
  { src: '/logos/unicef_logo.png.png', alt: 'UNICEF' },
  { src: '/logos/bank_of_america_logo.png.png', alt: 'Bank of America' },
  { src: '/logos/guaranty_trust_bank_logo.png.png', alt: 'Guaranty Trust Bank' },
  { src: '/logos/access_bank_logo.png.png', alt: 'Access Bank' },
  { src: '/logos/dangote_group_logo.png.png', alt: 'Dangote Group' },
  { src: '/logos/deepalaya_ngo_id4zTykPUQ.jpeg.png', alt: 'Deepalaya NGO' },
];

const galleryStrip = [
  { image: 'community-project', alt: 'Community project commissioning', position: 'object-center' },
  { image: 'business-forum', alt: 'Business leadership roundtable', position: 'object-center' },
  { image: 'volunteer', alt: 'Foundation volunteers registering community members', position: 'object-center' },
];

function PersonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6 20c.8-3.6 3-5.4 6-5.4s5.2 1.8 6 5.4" />
    </svg>
  );
}

export default function LegacyFoundationVariation() {
  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]">
      <SiteHeader />

      <section id="home" className="section-rise bg-[#F5F1E8] py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1fr_0.88fr]">
          <div>
            <h1 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl" style={{ color: ink }}>
              Building Businesses.<br />Empowering Communities.<br />Leaving a Legacy.
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-gray-600">
              Hon. CHIEF Alex Achebe reflects a significant business leader, philanthropist, mentor, and public servant whose life&rsquo;s work has been dedicated to creating opportunities for people and strengthening communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/biography" className="rounded-md px-6 py-3 text-sm font-bold text-white" style={{ backgroundColor: green }}>Explore My Story</a>
              <a href="/community-projects" className="rounded-md bg-white px-6 py-3 text-sm font-bold shadow-sm" style={{ color: green }}>Community Impact</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campaign-realistic/portrait-statesman.webp" alt="CHIEF portrait" className="h-72 w-full object-cover object-top sm:h-96 md:h-[460px]" />
          </div>
        </div>
      </section>

      <section id="impact" className="relative overflow-hidden py-16 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/campaign-realistic/community-project.webp" alt="Community project" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
          <h2 className="text-3xl font-black leading-tight md:text-4xl">Leadership<br className="hidden md:block" /> Measured by Impacts</h2>
          <div>
            <p className="text-sm leading-7 text-white/80">
              From business development to philanthropy, every effort is rooted in improving lives through education, healthcare, youth empowerment, and community support.
            </p>
            <a href="/achievements" className="mt-6 inline-block rounded-md bg-white px-5 py-3 text-xs font-bold" style={{ color: green }}>Explore My Impact</a>
          </div>
        </div>
      </section>

      <section id="metrics" className="bg-white py-12">
        <div className="stagger-list mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 md:gap-5 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg px-4 py-6 text-center text-white shadow-sm md:px-8 md:py-7" style={{ backgroundColor: metric.tone === 'green' ? green : gold }}>
              <p className="text-3xl font-black md:text-4xl">{metric.value}</p>
              <p className="mt-2 text-xs font-semibold text-white/85">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="legacy" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_0.65fr_0.65fr]">
          <div>
            <p className="mb-4 h-1 w-10 rounded-full" style={{ backgroundColor: gold }} />
            <h2 className="text-3xl font-black leading-tight md:text-4xl">Every legacy begins with<br className="hidden md:block" /> one act of kindness</h2>
            <p className="mt-6 text-sm leading-7 text-gray-600">
              Long before he became a respected business leader, philanthropy, and public service, Hon. CHIEF Alex Achebe represented a defining moment that shaped the course of his life.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              As a secondary school student, financial hardship almost prevented him from completing his examinations. A teacher quietly paid his exam fees.
            </p>
              <a href="/biography" className="mt-7 inline-block rounded-md px-5 py-3 text-xs font-bold text-white" style={{ backgroundColor: green }}>More About Me</a>
          </div>
          <div className="overflow-hidden rounded-xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campaign-realistic/press.webp" alt="Leadership moment" className="h-80 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campaign-realistic/about-market.webp" alt="Public service moment" className="h-80 w-full object-cover" />
          </div>
        </div>
      </section>

      <JourneyCarousel />

      <section id="leadership" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <div className="overflow-hidden rounded-xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campaign-realistic/portrait-statesman.webp" alt="Business leadership portrait" className="h-80 w-full object-cover object-top sm:h-96 md:h-[520px]" />
          </div>
          <div>
            <h2 className="text-3xl font-black">Business Leadership</h2>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              CHIEF Alex Achebe successfully balances public service with private-sector leadership, building organizations that create jobs, strengthen communities, and fund humanitarian work.
            </p>
            <div className="stagger-list mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {foundationServices.map((service) => (
                <div key={service.title}>
                  <div className="mb-3 flex h-9 w-9 items-center justify-start">
                    <FoundationIcon name={service.icon} />
                  </div>
                  <h3 className="text-sm font-black">{service.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-gray-500">{service.body}</p>
                </div>
              ))}
            </div>
            <a href="/leadership" className="mt-8 inline-block rounded-md px-5 py-3 text-xs font-bold text-white" style={{ backgroundColor: green }}>View All Leadership</a>
          </div>
        </div>
      </section>

      <section className="relative py-20 text-center text-white md:py-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/campaign-realistic/rally.webp" alt="Compassion in action" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">Compassion in Action</h2>
          <p className="mt-5 text-sm leading-7 text-white/80">
            Through the Achebe Hope Foundation, CHIEF Alex Achebe supports vulnerable families, students, widows, and young people with practical interventions.
          </p>
          <a href="/support" className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-bold" style={{ color: green }}>Explore Achebe Hope Foundation</a>
        </div>
      </section>

      <section id="gallery" className="bg-white py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-black">Leadership Beyond Business</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            CHIEF Alex Achebe&rsquo;s leadership creates a meaningful life that reaches beyond boardrooms and business success.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-2 overflow-hidden md:flex-row">
          {galleryStrip.map((item) => (
            <div key={item.image} className="h-72 flex-1 overflow-hidden md:h-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/campaign-realistic/${item.image}.webp`}
                alt={item.alt}
                className={`block h-full w-full object-cover ${item.position}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: green }}>
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-3xl font-black text-white">What People Say</h2>
          <div className="stagger-list grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={`${testimonial.name}-${testimonial.quote}`} className="rounded-lg bg-white p-6 shadow-sm">
                <p className="text-sm leading-6 text-gray-600">“{testimonial.quote}”</p>
                <div className="mt-5 flex items-center gap-2">
                  <PersonIcon />
                  <p className="text-xs font-black text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5">
          {partners.map((partner) => (
            <div key={partner.src} className="flex h-10 items-center justify-center opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={partner.src} alt={partner.alt} className="max-h-8 max-w-32 object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="h-64 overflow-hidden sm:h-80 md:h-[430px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/campaign-realistic/community-project.webp" alt="Children supported by foundation" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-8 py-16 text-white md:px-16" style={{ backgroundColor: green }}>
          <div>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">The greatest legacy is the lives<br className="hidden md:block" /> we help transform</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
              Whether through business, philanthropy, mentorship, or public service, meaningful change begins when opportunity reaches those who need it most.
            </p>
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-[#F5F1E8] py-16 text-center">
        <h2 className="text-2xl font-black">Join Our Newsletter</h2>
        <p className="mt-2 text-sm text-gray-500">Be the first to know about new updates.</p>
        <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 px-5 sm:flex-row">
          <input type="email" placeholder="Name" className="flex-1 rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none" />
          <input type="email" placeholder="Email address" className="flex-1 rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none" />
          <button type="submit" className="rounded-md px-6 py-3 text-sm font-bold text-white" style={{ backgroundColor: green }}>Subscribe</button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
