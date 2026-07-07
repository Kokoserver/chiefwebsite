import { siteConfig } from '../config/site';

const green = '#164A37';
const gold = '#C6A24A';

export default function BrandLogo({ name = siteConfig.logoName }: { name?: string }) {
  const [firstWord, ...rest] = name.trim().split(/\s+/);
  const remainingName = rest.join(' ');

  return (
    <span className="inline-flex items-center gap-3" aria-label={name}>
      <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white shadow-sm" style={{ backgroundColor: green }}>
        {firstWord.slice(0, 1)}
      </span>
      <span className="leading-none">
        <span className="block text-[0.62rem] font-black uppercase tracking-[0.28em]" style={{ color: gold }}>
          {firstWord}
        </span>
        <span className="block text-lg font-black tracking-tight text-[#1E2A24]">
          {remainingName || firstWord}
        </span>
      </span>
    </span>
  );
}
