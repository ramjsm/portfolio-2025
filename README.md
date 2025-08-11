# Portfolio 2025

A high-performance portfolio website built with React, Three.js, GSAP animations, and Static Site Generation capabilities for optimal SEO and loading performance.

## ✨ Features

- **Static Site Generation (SSG)** - Pre-rendered HTML for all routes for better SEO and faster loading
- **React 19** with TypeScript support
- **Three.js & React Three Fiber** for stunning 3D graphics
- **GSAP animations** with scroll triggers and advanced effects
- **TailwindCSS** for modern styling
- **Responsive design** optimized for all devices
- **Dynamic project routing** with pre-rendered static pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
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
# Regular build (SPA)
pnpm build

# Static Site Generation build (recommended)
pnpm build:ssg
```

### Preview

```bash
# Preview regular build
pnpm preview

# Preview SSG build
pnpm preview:ssg
```

### Code Quality

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

## 🏗️ Static Site Generation (SSG)

This portfolio implements a custom SSG solution that pre-renders all pages at build time for optimal performance and SEO.

### Pre-rendered Routes

The following routes are automatically generated as static HTML:

- `/` - Home page
- `/about` - About page
- Project pages:
  - `/project/the-magic-box`
  - `/project/juliette`
  - `/project/synthara`
  - `/project/as-below-so-above`
  - `/project/invocation`
  - `/project/soberania-creativa`
  - `/project/irmajoanne`

### How SSG Works

1. **Client Build**: Creates the standard React bundle
2. **Server Build**: Creates a server-side rendering bundle
3. **Pre-rendering**: Each route is rendered to static HTML using the server bundle
4. **Hydration**: The client bundle takes over for interactivity

### Adding New Routes

To add new routes to SSG:

1. Add the route to your React Router configuration
2. Update the `routes` array in `scripts/ssg-build.js`
3. Run `pnpm build:ssg`

## 🚢 Deployment

### Static Hosting (Recommended)

Since this is a static site, you can deploy to any static hosting provider:

#### Netlify

```bash
# Build command
pnpm build:ssg

# Publish directory
dist/client
```

#### Vercel

```bash
# Build command
pnpm build:ssg

# Output directory
dist/client
```

#### GitHub Pages

1. Run `pnpm build:ssg`
2. Deploy the `dist/client` folder to your `gh-pages` branch

## 🎯 Performance Benefits

With SSG enabled, your portfolio gets:

- **Faster First Contentful Paint (FCP)** - HTML is ready immediately
- **Better SEO** - Search engines can crawl pre-rendered content
- **Improved Lighthouse scores** - Static content loads faster
- **Better social media sharing** - Meta tags are pre-rendered
- **Reduced server load** - Static files can be served from CDN

## 🔧 Technical Details

### SSR-Safe Components

Components that use browser-specific APIs are wrapped with `SSRSafe` to prevent server-side rendering errors:

```tsx
import { SSRSafe } from './components/SSRSafe'

function MyComponent() {
  return (
    <SSRSafe fallback={<div>Loading...</div>}>
      <BrowserSpecificComponent />
    </SSRSafe>
  )
}
```

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
