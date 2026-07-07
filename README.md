# Chief Alex Achebe — Campaign Website

The official campaign and public-service website for **Chief Alex Achebe** and the **Achebe Hope Foundation**. The site presents Dr. Achebe's vision, leadership record, and community work, and gives supporters clear paths to get involved — volunteering, attending events, and donating.

Built with [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com), and TypeScript.

## Site sections

- **Home** (`/`) — hero, policy pillars, fundraising progress, testimonials, and calls to action
- **The candidate** — `/about`, `/biography`, `/achievements`, `/leadership`, `/public-service`
- **The platform** — `/manifesto`, `/vision-mission`
- **Community work** — `/community-projects` (Achebe Hope Foundation initiatives)
- **News** — `/news` listing with dynamic article pages at `/news/[slug]`
- **Get involved** — `/support` (donate/volunteer), `/events`, `/gallery`, `/contact`

## Getting started

Install dependencies and run the dev server (this project uses [pnpm](https://pnpm.io)):

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # run eslint
```

## Project structure

```
app/
  layout.tsx          # root layout, fonts, metadata
  page.tsx            # homepage
  globals.css         # Tailwind + global styles
  config/site.ts      # site-wide names/branding
  components/         # shared UI (navbar, footers, carousels, counters, forms…)
  <route>/page.tsx    # one folder per site section
  news/posts.ts       # news article data
public/
  campaign-realistic/ # campaign photography (webp)
  logos/              # partner/sponsor logos
```

Site-wide branding (candidate name, foundation name) lives in `app/config/site.ts`. News articles are plain data in `app/news/posts.ts` — add an entry there and the listing and article page pick it up automatically.
