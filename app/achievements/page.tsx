import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';
const achievements = ['Business leadership across multiple sectors', 'Community development interventions', 'Youth mentorship and empowerment support', 'Education-focused giving and school support', 'Public advocacy and civic engagement', 'Foundation-led outreach for vulnerable families'];

export default function AchievementsPage() {
  return <main className="page-enter min-h-screen bg-white text-[#1E2A24]"><SiteHeader />
    <section className="section-rise relative py-24 text-white"><img src="/campaign-realistic/press.webp" alt="Achievements" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-black/55" /><div className="relative mx-auto max-w-4xl px-5 text-center"><p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-white/70">Achievements</p><h1 className="text-3xl font-black sm:text-4xl md:text-5xl">Milestones that reflect service and consistency.</h1><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80">A highlight of achievements, recognitions, and major milestones across enterprise, philanthropy, and public service.</p></div></section>
    <section className="py-20"><div className="stagger-list mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">{achievements.map((item, index) => <div key={item} className="rounded-xl bg-[#F5F1E8] p-7"><p className="text-3xl font-black" style={{ color: green }}>{String(index + 1).padStart(2, '0')}</p><h2 className="mt-4 font-black">{item}</h2><p className="mt-3 text-sm leading-7 text-gray-600">Documented impact area for campaign storytelling, public credibility, and legacy communication.</p></div>)}</div></section>
    <SiteFooter /></main>;
}
