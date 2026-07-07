import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import { getNewsPost, newsPosts } from '../posts';

const green = '#164A37';

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    return { title: 'News Not Found' };
  }

  return {
    title: `${post.title} — News & Press Releases`,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) notFound();

  const relatedPosts = newsPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main className="page-enter min-h-screen bg-white text-[#1E2A24]">
      <SiteHeader />
      <article>
        <section className="section-rise bg-[#F5F1E8] py-16">
          <div className="mx-auto max-w-4xl px-5">
            <Link href="/news" className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: green }}>← Back to News</Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{post.category} · {post.date}</p>
            <h1 className="mt-4 text-5xl font-black leading-tight">{post.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">{post.excerpt}</p>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-5xl px-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/campaign-realistic/${post.image}.webp`} alt={post.title} className="h-[460px] w-full rounded-2xl object-cover shadow-xl" />
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-[1fr_0.35fr]">
            <div className="space-y-6 text-sm leading-8 text-gray-700">
              {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <aside className="rounded-2xl bg-[#F5F1E8] p-6 self-start">
              <h2 className="font-black">Press Contact</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">For media enquiries, interview requests, or official statements, contact the campaign office.</p>
              <Link href="/contact" className="mt-5 inline-block rounded-md px-5 py-3 text-xs font-bold text-white" style={{ backgroundColor: green }}>Contact Office</Link>
            </aside>
          </div>
        </section>
      </article>

      <section className="bg-[#F5F1E8] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-black">More Updates</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedPosts.map((item) => (
              <Link href={`/news/${item.slug}`} key={item.slug} className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{item.category}</p>
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
