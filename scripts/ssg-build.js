import { build } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import fs from 'fs/promises'
import path from 'path'

// Define all routes to pre-render
const routes = [
  '/',
  '/about',
  '/project/the-magic-box',
  '/project/juliette',
  '/project/synthara',
  '/project/as-below-so-above',
  '/project/invocation',
  '/project/soberania-creativa',
  '/project/irmajoanne',
]

async function buildSSG() {
  console.log('🚀 Starting SSG build...')

  console.log('📦 Building client bundle...')
  await build({
    build: {
      outDir: 'dist/client',
      rollupOptions: {
        input: 'index.html',
      },
    },
  })

  console.log('🖥️  Building server bundle...')
  await build({
    build: {
      ssr: true,
      outDir: 'dist/server',
      rollupOptions: {
        input: 'src/entry-server.tsx',
        output: {
          format: 'es',
        },
      },
    },
  })

  console.log('📄 Pre-rendering routes...')

  // Import the render function from the built server bundle
  const { render } = await import('../dist/server/entry-server.js')

  // Read the template HTML
  const template = await fs.readFile('dist/client/index.html', 'utf-8')

  // Pre-render each route
  for (const route of routes) {
    console.log(`   Rendering: ${route}`)

    try {
      const { html } = render(route)
      const finalHtml = template.replace('<!--ssr-outlet-->', html)

      // Create the directory structure for the route
      const routePath = route === '/' ? '/index' : route
      const filePath = path.join('dist/client', routePath)
      const htmlPath = path.join(filePath, 'index.html')

      if (route !== '/') {
        await fs.mkdir(path.dirname(htmlPath), { recursive: true })
      }

      await fs.writeFile(
        route === '/' ? 'dist/client/index.html' : htmlPath,
        finalHtml
      )
    } catch (error) {
      console.error(`❌ Error rendering ${route}:`, error)
    }
  }

  console.log('✅ SSG build completed!')
}

buildSSG().catch(console.error)
