import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { newsPosts } from './posts';

export default function NewsPage() {
  return <main className="page-enter min-h-screen bg-white text-[#1E2A24]"><SiteHeader />
    <section className="section-rise bg-[#F5F1E8] py-20 text-center"><div className="mx-auto max-w-3xl px-5"><h1 className="text-5xl font-black">News & Press Releases</h1><p className="mt-5 text-sm leading-7 text-gray-600">Official news, media updates, public statements, and campaign communication.</p></div></section>
    <section className="py-14"><div className="stagger-list mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">{newsPosts.map((post) => <Link href={`/news/${post.slug}`} key={post.slug} className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><article><img src={`/campaign-realistic/${post.image}.webp`} alt={post.title} className="h-56 w-full object-cover" /><div className="p-6"><p className="text-xs font-bold text-gray-400">{post.category}</p><h2 className="mt-2 text-xl font-black">{post.title}</h2><p className="mt-3 text-sm leading-7 text-gray-600">{post.excerpt}</p><p className="mt-5 text-xs font-black text-[#164A37]">Read More →</p></div></article></Link>)}</div></section>
    <SiteFooter /></main>;
}
