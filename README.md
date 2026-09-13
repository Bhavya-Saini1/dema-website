# DEMA Website

Official site for the Digital Enterprise Management Association (DEMA) at the University of Toronto Mississauga.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Project layout

| Path | Purpose |
|------|---------|
| `app/` | Routes and pages |
| `components/` | Shared UI (layout, home sections) |
| `lib/` | Content and config (team, events, articles, membership) |
| `public/` | Static assets (logo, event photos, article images) |

Event details, team roster, article copy, and form links live in `lib/` so they can be updated without hunting through components.

## Brand

- **Red:** `#DF3D2C` (hover `#B5301F`)
- **Navy:** `#1A3A5C`
- **Fonts:** Manrope for UI copy; IBM Plex Mono for dates, labels, and nav
- **UI:** Sharp corners, solid borders, no soft drop shadows; roomy section spacing (`py-16` / `py-24`)
- **Copy:** Direct and factual. Prefer concrete club details over marketing filler.

## Deploy

The site is set up for [Vercel](https://vercel.com). Connect the GitHub repo, leave the Next.js defaults, and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

That value drives canonical URLs, Open Graph links, `robots.txt`, and the sitemap. Until a custom domain is attached, the fallback is `https://dema-website.vercel.app`.

## License

See [LICENSE](LICENSE).
