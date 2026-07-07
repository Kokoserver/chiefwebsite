import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';
const gold = '#C6A24A';

const timeline = [
  ['Early lesson', 'A teacher’s kindness helped him complete a critical academic step and shaped his belief in giving people a chance.'],
  ['Enterprise', 'Built and supported businesses designed to create jobs, strengthen families, and develop local capacity.'],
  ['Foundation', 'Expanded giving into structured programmes for education, youth, vulnerable families, and community development.'],
  ['Public role', 'Continues to use influence, access, and credibility to advocate for practical social improvement.'],
];

export default function BiographyPage() {
  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]">
      <SiteHeader />
      <section className="section-rise bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-4 h-1 w-10 rounded-full" style={{ backgroundColor: gold }} />
            <h1 className="text-5xl font-black leading-tight">Every legacy begins with one act of kindness.</h1>
            <p className="mt-6 text-sm leading-7 text-gray-600">
              Long before becoming a respected business leader and philanthropist, CHIEF Alex Achebe experienced the power of support when a teacher helped him complete his examinations.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              That defining act shaped a lifelong commitment to education, opportunity, mentorship, and service for families and communities.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campaign-realistic/press.webp" alt="Biography leadership moment" className="image-lift h-80 w-full rounded-xl object-cover shadow-xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campaign-realistic/about-market.webp" alt="Community biography moment" className="image-lift h-80 w-full rounded-xl object-cover shadow-xl" />
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-3xl font-black">A journey of responsibility</h2>
          <div className="stagger-list mt-10 grid gap-5 md:grid-cols-2">
            {timeline.map(([title, body]) => (
              <div key={title} className="rounded-xl bg-white p-7 shadow-sm">
                <h3 className="font-black" style={{ color: green }}>{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 text-white" style={{ backgroundColor: green }}>
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-black">A biography shaped by gratitude and responsibility.</h2>
          <p className="mt-5 text-sm leading-7 text-white/75">His story continues through businesses, foundations, and community initiatives designed to make opportunity more accessible.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
