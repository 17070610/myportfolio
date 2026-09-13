# Portfolio — Schimea Niyitwumva

Personal portfolio site. Next.js App Router, TypeScript, Tailwind CSS v4.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |

## Structure

```
src/content/site.ts        All site copy and project data
src/app/page.tsx           Home page
src/app/projects/[slug]/   Project case studies
src/components/            Header, Footer, ProjectCard, CopyEmail
public/projects/           Project screenshots
```

## Editing content

All copy lives in `src/content/site.ts` — there is no text hard-coded in
components. The Mwalimu Online domain is a single constant near the top of that
file, ready for the planned `.cloud` → `.rw` migration.

## Notes

- The site is served with `noindex, nofollow` and a `robots.txt` that disallows
  crawlers.
- Styling uses CSS custom properties defined in `src/app/globals.css`. The dark
  palette is a plain `:root` rule inside a media query rather than a nested
  `@theme` block, because Tailwind v4 hoists `@theme` out of media queries.
