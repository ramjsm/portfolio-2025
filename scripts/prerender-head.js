/**
 * Post-build step: emits one `index.html` per route and locale, each a copy of
 * the built SPA shell with its own <html lang>, <title>, description,
 * canonical, OG/Twitter tags, JSON-LD description and hreflang alternates.
 *
 * The app itself stays client-rendered (`createRoot`); this only makes the
 * static HTML that crawlers and link previews fetch carry the right metadata.
 *
 * Metadata comes from the `seo` frontmatter of the MDX files in `content/`.
 * Project routes are discovered from `content/projects/*`; the page routes
 * are listed below and must match `src/router/index.tsx`.
 *
 * The locale list and URL scheme mirror `src/i18n/locales.ts`
 * (default locale at `/x`, others at `/<locale>/x`).
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

const SITE_URL = 'https://ramsessalas.com'
const DIST = 'dist'
const CONTENT = 'content'
const LOCALES = ['en', 'es']
const DEFAULT_LOCALE = 'en'

/** Page routes backed by `content/pages/<page>/<locale>.mdx`. */
const PAGES = [
  { route: '/', page: 'home' },
  { route: '/about', page: 'about' },
  { route: '/archive', page: 'archive' },
  { route: '/events', page: 'events' },
]

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const exists = (file) =>
  fs.access(file).then(
    () => true,
    () => false
  )

/** `/about` -> `/about` (en) or `/es/about` (es); `/` -> `/` or `/es/`. */
function localizedRoute(route, locale) {
  if (locale === DEFAULT_LOCALE) return route
  return route === '/' ? `/${locale}/` : `/${locale}${route}`
}

async function readSeo(directory, locale) {
  const file = path.join(directory, `${locale}.mdx`)
  if (!(await exists(file))) return undefined
  const { seo } = matter(await fs.readFile(file, 'utf8')).data
  if (!seo?.title || !seo?.description) {
    throw new Error(`${file}: frontmatter needs seo.title and seo.description`)
  }
  return seo
}

/** Every route with the locales that actually have content for it. */
async function collectRoutes() {
  const entries = PAGES.map(({ route, page }) => ({
    route,
    directory: path.join(CONTENT, 'pages', page),
  }))

  const projectsDir = path.join(CONTENT, 'projects')
  for (const dirent of await fs.readdir(projectsDir, { withFileTypes: true })) {
    if (!dirent.isDirectory()) continue
    entries.push({
      route: `/project/${dirent.name}`,
      directory: path.join(projectsDir, dirent.name),
    })
  }

  const routes = []
  for (const { route, directory } of entries) {
    const seoByLocale = {}
    for (const locale of LOCALES) {
      const seo = await readSeo(directory, locale)
      if (seo) seoByLocale[locale] = seo
    }
    if (!seoByLocale[DEFAULT_LOCALE]) {
      throw new Error(`${directory}: missing ${DEFAULT_LOCALE}.mdx`)
    }
    routes.push({ route, seoByLocale })
  }
  return routes
}

/** Replaces the first match of `pattern`, failing loudly if the template drifted. */
function replaceOnce(html, pattern, replacer, label) {
  if (!pattern.test(html)) {
    throw new Error(`dist/index.html: could not find ${label} to rewrite`)
  }
  return html.replace(pattern, replacer)
}

function setMetaContent(html, attribute, key, value) {
  const pattern = new RegExp(
    `(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*(")`
  )
  return replaceOnce(
    html,
    pattern,
    (_, open, close) => `${open}${escapeHtml(value)}${close}`,
    `<meta ${attribute}="${key}">`
  )
}

function renderHead(template, { locale, seo, homeSeo, canonical, alternates }) {
  let html = template

  html = replaceOnce(
    html,
    /(<html\b[^>]*\blang=")[^"]*(")/,
    (_, open, close) => `${open}${locale}${close}`,
    '<html lang>'
  )
  html = replaceOnce(
    html,
    /<title>[\s\S]*?<\/title>/,
    () => `<title>${escapeHtml(seo.title)}</title>`,
    '<title>'
  )
  html = setMetaContent(html, 'name', 'description', seo.description)
  html = replaceOnce(
    html,
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    (_, open, close) => `${open}${canonical}${close}`,
    'canonical link'
  )
  html = setMetaContent(html, 'property', 'og:title', seo.title)
  html = setMetaContent(html, 'property', 'og:description', seo.description)
  html = setMetaContent(html, 'property', 'og:url', canonical)
  html = setMetaContent(html, 'name', 'twitter:title', seo.title)
  html = setMetaContent(html, 'name', 'twitter:description', seo.description)
  html = setMetaContent(html, 'property', 'twitter:url', canonical)

  // JSON-LD: the Person description is the site-wide bio, so it follows the
  // home page copy for the locale on every route.
  html = replaceOnce(
    html,
    /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
    (_, open, json, close) => {
      const data = JSON.parse(json)
      for (const node of data['@graph'] ?? []) {
        if (node['@type'] === 'Person') node.description = homeSeo.description
        if (node['@type'] === 'WebSite') node.inLanguage = locale
      }
      const serialized = JSON.stringify(data, null, 2).replace(/</g, '\\u003c')
      return `${open}\n      ${serialized}\n      ${close}`
    },
    'JSON-LD script'
  )

  const links = [
    ...alternates.map(
      ({ hreflang, href }) =>
        `<link rel="alternate" hreflang="${hreflang}" href="${href}">`
    ),
  ].join('\n      ')
  html = replaceOnce(
    html,
    /<\/head>/,
    () => `      ${links}\n  </head>`,
    '</head>'
  )

  return html
}

async function main() {
  const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8')
  const routes = await collectRoutes()
  const homeRoute = routes.find(({ route }) => route === '/')
  let count = 0

  for (const { route, seoByLocale } of routes) {
    const locales = LOCALES.filter((locale) => seoByLocale[locale])
    const urlFor = (locale) => `${SITE_URL}${localizedRoute(route, locale)}`
    const alternates = [
      ...locales.map((locale) => ({ hreflang: locale, href: urlFor(locale) })),
      { hreflang: 'x-default', href: urlFor(DEFAULT_LOCALE) },
    ]

    for (const locale of locales) {
      const homeSeo =
        homeRoute.seoByLocale[locale] ?? homeRoute.seoByLocale[DEFAULT_LOCALE]
      const html = renderHead(template, {
        locale,
        seo: seoByLocale[locale],
        homeSeo,
        canonical: urlFor(locale),
        alternates,
      })

      const outDir = path.join(DIST, localizedRoute(route, locale))
      await fs.mkdir(outDir, { recursive: true })
      await fs.writeFile(path.join(outDir, 'index.html'), html)
      count += 1
    }
  }

  console.log(`Prerendered head for ${count} pages (${routes.length} routes).`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
