import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';
const pillars = [
  ['Vision', 'To build a society where leadership creates opportunity, protects dignity, and turns public trust into measurable development.'],
  ['Mission', 'To connect enterprise, public service, and philanthropy in ways that strengthen families, empower young people, and improve communities.'],
  ['Method', 'Work through practical programmes, partnerships, transparent advocacy, and consistent community presence.'],
];

export default function VisionMissionPage() {
  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]"><SiteHeader />
      <section className="section-rise bg-[#F5F1E8] py-20"><div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div><p className="mb-4 text-xs font-black uppercase tracking-[0.25em]" style={{ color: green }}>Vision & Mission</p><h1 className="text-5xl font-black leading-tight">A public-service vision rooted in practical transformation.</h1><p className="mt-6 text-sm leading-7 text-gray-600">CHIEF’s vision and mission combine political responsibility, social investment, and community-first leadership.</p></div>
        <img src="/campaign-realistic/youth-summit.webp" alt="Youth and mission" className="image-lift h-[460px] w-full rounded-2xl object-cover shadow-xl" />
      </div></section>
      <section className="py-20"><div className="stagger-list mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">{pillars.map(([title, body]) => <div key={title} className="rounded-xl bg-[#F5F1E8] p-8"><h2 className="text-2xl font-black">{title}</h2><p className="mt-4 text-sm leading-7 text-gray-600">{body}</p></div>)}</div></section>
      <SiteFooter /></main>
  );
}
