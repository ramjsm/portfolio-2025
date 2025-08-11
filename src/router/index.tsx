import { Routes, Route } from 'react-router'
import { Home } from '../views/Home'
import { Project } from '../views/Project'
import { About } from '../views/About'

export default function Router() {
  return (
    <Routes>
      <Route path="/project/:slug" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route index element={<Home />} />
    </Routes>
  )
}
