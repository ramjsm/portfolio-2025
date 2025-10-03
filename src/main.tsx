import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppPreloader } from './components/AppPreloader'

const container = document.getElementById('root')!

// Check if the page was pre-rendered (SSG)
if (container.innerHTML.trim()) {
  // Hydrate the pre-rendered content
  hydrateRoot(
    container,
    <StrictMode>
      <AppPreloader>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppPreloader>
    </StrictMode>
  )
} else {
  // Regular client-side rendering for development
  createRoot(container).render(
    <StrictMode>
      <AppPreloader>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppPreloader>
    </StrictMode>
  )
}
