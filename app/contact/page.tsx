import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';

const contactReasons = [
  ['Partnerships', 'Discuss foundation, education, youth, or community development partnerships.'],
  ['Volunteer support', 'Join outreach, events, mentoring, logistics, or communications work.'],
  ['Media enquiries', 'Request statements, interviews, event information, or official updates.'],
];

export default function ContactPage() {
  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]">
      <SiteHeader />
      <section className="section-rise bg-[#F5F1E8] py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em]" style={{ color: green }}>Contact</p>
            <h1 className="text-5xl font-black leading-tight">Get in touch with the foundation.</h1>
            <p className="mt-6 text-sm leading-7 text-gray-600">For enquiries, partnerships, volunteer coordination, and community support requests, send a message or use the contact details below.</p>
            <div className="mt-8 space-y-3 text-sm text-gray-700">
              <p><strong>Phone:</strong> +234 800 000 0000</p>
              <p><strong>Email:</strong> support@chiefachebe.com</p>
              <p><strong>Location:</strong> Nigeria</p>
            </div>
            <div className="mt-8 grid gap-4">
              {contactReasons.map(([title, body]) => (
                <div key={title} className="rounded-xl bg-white p-5 shadow-sm">
                  <h2 className="font-black">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input type="text" placeholder="Full name" className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" />
              <input type="email" placeholder="Email address" className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" />
              <input type="tel" placeholder="Phone number" className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" />
              <select className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" defaultValue="">
                <option value="" disabled>Reason for contact</option>
                <option>Partnership</option>
                <option>Volunteer support</option>
                <option>Media enquiry</option>
                <option>Community request</option>
              </select>
              <textarea placeholder="Message" rows={6} className="rounded-md border border-black/10 px-4 py-3 text-sm outline-none" />
              <button type="submit" className="rounded-md px-6 py-3 text-sm font-bold text-white" style={{ backgroundColor: green }}>Send Message</button>
            </div>
          </form>
        </div>
      </section>
      <section id="newsletter" className="bg-white py-16 text-center">
        <h2 className="text-2xl font-black">Join Our Newsletter</h2>
        <p className="mt-2 text-sm text-gray-500">Be the first to know about new updates.</p>
        <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 px-5 sm:flex-row">
          <input type="text" placeholder="Name" className="flex-1 rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none" />
          <input type="email" placeholder="Email address" className="flex-1 rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none" />
          <button type="submit" className="rounded-md px-6 py-3 text-sm font-bold text-white" style={{ backgroundColor: green }}>Subscribe</button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
