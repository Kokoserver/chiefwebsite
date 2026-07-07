import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const projects = [
  ['Education Support', 'School support, learning materials, mentoring, and academic opportunity.','community-project'],
  ['Youth Empowerment', 'Skills exposure, civic education, and practical development pathways.','youth-summit'],
  ['Community Outreach', 'Direct support for families, widows, vulnerable groups, and grassroots institutions.','volunteer'],
  ['Enterprise Support', 'Business conversations, mentorship, and local economic development.','business-forum'],
];

export default function CommunityProjectsPage() {
  return <main className="page-enter min-h-screen bg-white text-[#1E2A24]"><SiteHeader />
    <section className="section-rise bg-[#F5F1E8] py-20 text-center"><div className="mx-auto max-w-3xl px-5"><h1 className="text-3xl font-black sm:text-4xl md:text-5xl">Community Projects</h1><p className="mt-5 text-sm leading-7 text-gray-600">A showcase of community work, development projects, and human-impact programmes.</p></div></section>
    <section className="py-14"><div className="stagger-list mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">{projects.map(([title, body, image]) => <article key={title} className="overflow-hidden rounded-2xl bg-white shadow-sm"><img src={`/campaign-realistic/${image}.webp`} alt={title} className="h-72 w-full object-cover" /><div className="p-7"><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 text-sm leading-7 text-gray-600">{body}</p></div></article>)}</div></section>
    <SiteFooter /></main>;
}
