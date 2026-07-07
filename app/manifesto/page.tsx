import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';
const agenda = ['Education and skills access', 'Youth employment and entrepreneurship', 'Community healthcare support', 'Transparent public advocacy', 'Infrastructure-focused partnerships', 'Women and family welfare'];

export default function ManifestoPage() {
  return <main className="page-enter min-h-screen bg-white text-[#1E2A24]"><SiteHeader />
    <section className="section-rise bg-[#F5F1E8] py-20"><div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2"><div><p className="mb-4 text-xs font-black uppercase tracking-[0.25em]" style={{ color: green }}>Manifesto / Agenda</p><h1 className="text-3xl font-black sm:text-4xl md:text-5xl leading-tight">A practical agenda for people-centered development.</h1><p className="mt-6 text-sm leading-7 text-gray-600">The agenda presents public plans, policy direction, and campaign commitments in clear language for citizens and supporters.</p></div><img src="/campaign-realistic/business-forum.webp" alt="Manifesto agenda" className="image-lift h-72 w-full rounded-2xl object-cover shadow-xl sm:h-80 md:h-[440px]" /></div></section>
    <section className="py-20"><div className="stagger-list mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">{agenda.map(item => <div key={item} className="rounded-xl bg-[#F5F1E8] p-7"><h2 className="font-black" style={{ color: green }}>{item}</h2><p className="mt-3 text-sm leading-7 text-gray-600">A focused policy direction designed for measurable public benefit and accountable execution.</p></div>)}</div></section>
    <SiteFooter /></main>;
}
