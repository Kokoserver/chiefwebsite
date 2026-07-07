import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const green = '#164A37';

const images = [
  ['community-project', 'Community project commissioning', 'Foundation Work'],
  ['business-forum', 'Business leadership roundtable', 'Leadership'],
  ['volunteer', 'Foundation volunteers', 'Volunteer Support'],
  ['rally', 'Public service outreach', 'Public Service'],
  ['about-market', 'Community market visit', 'Community Visit'],
  ['youth-summit', 'Youth summit', 'Youth Empowerment'],
  ['press', 'Press briefing', 'Media'],
  ['donation', 'Support drive', 'Support'],
  ['office', 'Campaign office', 'Operations'],
];

export default function GalleryPage() {
  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]">
      <SiteHeader />
      <section className="section-rise bg-[#F5F1E8] py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.25em]" style={{ color: green }}>Gallery</p>
          <h1 className="text-5xl font-black">Moments of leadership, service, and impact.</h1>
          <p className="mt-5 text-sm leading-7 text-gray-600">Images from leadership, public service, community development, and foundation activities.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="stagger-list mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(([image, alt, tag]) => (
            <figure key={image} className="image-lift overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="h-80 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/campaign-realistic/${image}.webp`} alt={alt} className="h-full w-full object-cover" />
              </div>
              <figcaption className="flex items-center justify-between p-4 text-sm">
                <span className="font-black">{alt}</span>
                <span className="text-xs font-bold" style={{ color: green }}>{tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
