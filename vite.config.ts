import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        // SSG entries will be added programmatically
      },
    },
  },
  ssr: {
    noExternal: [
      '@14islands/r3f-scroll-rig',
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      'gsap',
    ],
  },
})
