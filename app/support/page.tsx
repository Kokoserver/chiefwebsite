import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';

export default function SupportPage() {
  return <main className="page-enter min-h-screen bg-white text-[#1E2A24]"><SiteHeader />
    <section className="section-rise bg-[#F5F1E8] py-20"><div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2"><div><p className="mb-4 text-xs font-black uppercase tracking-[0.25em]" style={{ color: green }}>Support / Volunteer</p><h1 className="text-5xl font-black leading-tight">Join the work of service and transformation.</h1><p className="mt-6 text-sm leading-7 text-gray-600">Register as a supporter, volunteer for outreach, receive campaign updates, or indicate how you want to contribute.</p><img src="/campaign-realistic/volunteer.webp" alt="Volunteer support" className="mt-8 h-72 w-full rounded-2xl object-cover shadow-xl" /></div><form className="rounded-2xl bg-white p-6 shadow-sm"><div className="grid gap-4"><input placeholder="Full name" className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" /><input placeholder="Email address" type="email" className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" /><input placeholder="Phone / WhatsApp" className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" /><select className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" defaultValue=""><option value="" disabled>How do you want to help?</option><option>Volunteer</option><option>Supporter updates</option><option>Community outreach</option><option>Media and digital</option></select><textarea rows={5} placeholder="Message" className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" /><button className="rounded-md px-6 py-3 text-sm font-bold text-white" style={{ backgroundColor: green }}>Submit Registration</button></div></form></div></section>
    <SiteFooter /></main>;
}
