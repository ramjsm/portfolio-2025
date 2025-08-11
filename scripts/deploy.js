#!/usr/bin/env node

import { execSync } from 'child_process'
import { existsSync, rmSync } from 'fs'

console.log('🚀 Starting deployment process...')

// Clean previous builds
if (existsSync('dist')) {
  console.log('🧹 Cleaning previous build...')
  rmSync('dist', { recursive: true, force: true })
}

// Build the SSG version
console.log('📦 Building static site...')
execSync('pnpm build:ssg', { stdio: 'inherit' })

console.log('✅ Build completed! Your static site is ready in dist/client/')
console.log('')
console.log('📋 Next steps:')
console.log('  1. Upload the contents of dist/client/ to your hosting provider')
console.log('  2. Configure your server for SPA routing (see README.md)')
console.log(
  '  3. For Netlify/Vercel: use "dist/client" as your publish directory'
)
console.log('')
console.log('🌟 Your portfolio is now optimized with SSG!')
