# Portfolio 2025

The source code of my personal portfolio website, [ramsessalas.com](https://ramsessalas.com). I'm a Creative Technologist based in Berlin, and this site is where I show my work: interactive installations, web projects, events and the story behind them. It's built with React, Three.js and GSAP, and it's available in English and Spanish.

## ✨ Features

- **English and Spanish** - `/es/*` mirrors every route; prose and project layout are written in MDX
- **Per-route static HTML** - each route and locale gets its own `index.html` with the right title, description, canonical URL, Open Graph tags and `hreflang` alternates
- **React 19** with TypeScript support
- **Three.js & React Three Fiber** for the 3D graphics
- **GSAP animations** with scroll triggers and advanced effects
- **TailwindCSS** for styling
- **Responsive design** optimized for all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone git@github.com:ramjsm/portfolio-2025.git
cd portfolio-2025

# Install dependencies
pnpm install
```

## 📦 Scripts

### Development

```bash
# Start development server
pnpm dev
```

### Building

```bash
# Production build: bundles the app, then writes the per-route HTML files
pnpm build

# Type-check (not part of the build)
pnpm typecheck
```

### Preview

```bash
# Preview the production build
pnpm preview
```

`vite preview` falls back to the root `index.html` for paths without a trailing slash, so it doesn't show the per-route HTML files. Check those in `dist/` directly, or on a deploy preview.

### Code Quality

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

## 🌍 Languages and content

English lives at the bare path (`/about`), Spanish under `/es` (`/es/about`). The language is read once from the URL when the page loads (`src/i18n/initialLocale.ts`), and the router is mounted with a matching basename (`main.tsx`). So links are written without any prefix: `<Link to="/about">` renders `/es/about` on Spanish pages and `/about` on English ones, and `navigate()` behaves the same way.

Changing language is a full page load to the same page in the other language. The `EN / ES` switcher (`LanguageSwitcher`, in the menu and the footer) does this with plain links. Visitors are never redirected automatically. Instead, `LanguageBanner` shows a small dismissible "Ver esta página en español" message on English pages when the browser's language list prefers Spanish. It appears after the intro animation and isn't part of the prerendered HTML. Using the switcher or closing the banner remembers the choice in `localStorage`.

### Content files

My copy lives in `content/`, outside `src/`:

- `content/projects/<slug>/{en,es}.mdx` - one document per project and locale
- `content/pages/{home,about}/{en,es}.mdx` - page-level metadata
- `src/i18n/resources/{en,es}.json` - shared UI labels, such as the info column headers

Each document starts with frontmatter (`title`, `info`, `seo.title`, `seo.description`) followed by MDX. A project document has three regions that the page template places in different spots:

```mdx
<Intro>

Paragraphs shown next to the info column.

</Intro>

<Gallery>
  <Image src="/projects/x/a.webp" thresholdWhite={0.3} thresholdGray={0.3} />
</Gallery>

<Credits>

- One credit per list item

</Credits>
```

`Intro`, `Gallery`, `Credits`, `Row`, `Col`, `Image` and `Video` are available without imports (`src/content/mdxComponents.ts`). Links in project content always open in a new tab.

If a locale has no file for a project, the English document is used.

### UI strings

Text that isn't page copy (menu, footer, section headings, buttons, `total N entries` captions) lives in `src/i18n/resources/{en,es}.json` and is read with `t('some.key')` from `react-i18next`. Both files must have the same keys. Terminal-style commands such as `> ls -la ./work` stay in English on purpose. Month names in event and publication dates follow the language.

### Info labels

In a project's `info` frontmatter, `header` is a key (`team`, `tools`, `type`, `links`, `client`, `tech`), not display text. The text shown comes from `src/i18n/resources/<locale>.json` under `info`, so renaming a label for every project is a one-line change in that file. A header with no entry there is shown as written, which works for a one-off label.

### Migration status

Only `juliette` has been moved to MDX so far. The other projects still keep their copy and gallery in `src/config/projects/*.tsx` and `src/views/Project/content/*.tsx`, and `ProjectTemplate` renders either shape.

### Adding a project or page

1. Add `content/projects/<slug>/en.mdx` (and `es.mdx`). The prerender script discovers project routes from this folder.
2. Add the asset record (thumbnail, hero, date, category) in `src/config/projects/`.
3. A new top-level page needs a route in `src/router/index.tsx` and an entry in the `PAGES` list in `scripts/prerender-head.js`.

## 🏗️ Per-route static HTML

The app is client-rendered. After `vite build`, `scripts/prerender-head.js` copies the built `dist/index.html` once per route and locale, rewriting only the head:

- `<html lang>`, `<title>`, description and canonical URL
- Open Graph and Twitter tags
- the JSON-LD description
- `hreflang` alternates (`en`, `es`, `x-default`)

Values come from the `seo` frontmatter of the MDX files. The script fails the build if the template is missing a tag it needs to rewrite. Body content is still rendered in the browser.

At runtime, `useDocumentHead` keeps the title, description and canonical URL in sync during client-side navigation.

## 🚢 Deployment

The site deploys as static files from `dist/`. Netlify's `/* -> /index.html` rewrite stays as the SPA fallback; it doesn't override the per-route files.

#### Netlify

```bash
# Build command
pnpm build

# Publish directory
dist
```

#### Vercel

```bash
# Build command
pnpm build

# Output directory
dist
```

#### GitHub Pages

1. Run `pnpm build`
2. Deploy the `dist` folder to your `gh-pages` branch

## 🔧 Technical Details

### SSR-Safe Components

Some components are still wrapped with `SSRSafe`, a leftover from the earlier server-rendered build. It's harmless and can be simplified.

### GSAP Initialization

GSAP plugins are conditionally registered only on the client side:

```tsx
// Only register GSAP plugins on client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin)
}
```

---

Built with ❤️ by Ramses Salas
