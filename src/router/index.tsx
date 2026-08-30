import { Routes, Route } from 'react-router-dom'
import { Home } from '../views/Home'
import { Project } from '../views/Project'
import { About } from '../views/About'
import { Events } from '../views/Events'
import { Archive } from '../views/Archive'

export default function Router() {
  return (
    <Routes>
      <Route path="/project/:slug" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/archive" element={<Archive />} />
      <Route index element={<Home />} />
    </Routes>
  )
}
