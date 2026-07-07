import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';
const events = [
  ['Town Hall Meeting', 'Community dialogue on education, enterprise, and public service.', 'Upcoming'],
  ['Youth Empowerment Session', 'Skills and mentorship gathering for young people.', 'Upcoming'],
  ['Foundation Outreach', 'Community support visit for families and local groups.', 'Past'],
];

export default function EventsPage() {
  return <main className="page-enter min-h-screen bg-white text-[#1E2A24]"><SiteHeader />
    <section className="section-rise relative py-24 text-white"><img src="/campaign-realistic/hero-townhall.webp" alt="Events" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-black/55" /><div className="relative mx-auto max-w-4xl px-5 text-center"><h1 className="text-5xl font-black">Events</h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80">Upcoming and past political, community, foundation, and civic engagement events.</p></div></section>
    <section className="py-16"><div className="stagger-list mx-auto grid max-w-5xl gap-5 px-5">{events.map(([title, body, status]) => <article key={title} className="flex flex-col justify-between gap-5 rounded-xl bg-[#F5F1E8] p-7 md:flex-row md:items-center"><div><p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: green }}>{status}</p><h2 className="mt-2 text-2xl font-black">{title}</h2><p className="mt-2 text-sm leading-7 text-gray-600">{body}</p></div><button className="rounded-md px-6 py-3 text-sm font-bold text-white" style={{ backgroundColor: green }}>Register Interest</button></article>)}</div></section>
    <SiteFooter /></main>;
}
