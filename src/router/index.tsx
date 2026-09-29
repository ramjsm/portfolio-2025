import { Routes, Route } from 'react-router-dom'
import { Home } from '../views/Home'
import { Project } from '../views/Project'
import { About } from '../views/About'
import { Events } from '../views/Events'
import { Archive } from '../views/Archive'
import { Devblog } from '../views/Devblog'
import { Article } from '../views/Devblog/Article'

// One route table for every language: the router is mounted with the locale's
// basename (`/es` for Spanish, see main.tsx), so these paths match under
// both `/about` and `/es/about`.
export default function Router() {
  return (
    <Routes>
      <Route path="/project/:slug" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/devblog" element={<Devblog />} />
      <Route path="/devblog/:slug" element={<Article />} />
      <Route index element={<Home />} />
    </Routes>
  )
}
