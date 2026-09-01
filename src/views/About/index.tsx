import { AsciiImage } from '../../components/AsciiImage'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Bio } from './Bio'
import { Experience } from './Experience'
import { Training } from './Training'
import { Residencies } from './Residencies'
import { Research } from './Research'

export function About() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-20 lg:gap-30">
      <Helmet>
        <title>About | Ramses Salas</title>
      </Helmet>
      <div className="absolute top-0 right-0 max-h-full max-w-full flex-1">
        <AsciiImage
          src="/about-background.webp"
          cellSize={10}
          exposure={2}
          spacing={0}
          sampleColor
        />
      </div>
      <div className="text-l relative z-10 mt-150 flex w-full flex-col-reverse gap-10 lg:mt-0 lg:flex-row">
        <div className="flex flex-1 flex-col gap-10 text-xl lg:text-base">
          <div className="flex flex-col gap-4 lg:mt-40 lg:gap-3">
            <p className="font-syne max-w-2xl text-2xl lg:text-3xl">
              I&apos;m Ramses Salas, a freelance Creative Technologist based in
              Berlin.
            </p>
            <p className="max-w-xl">
              I work across art, technology, and experimentation, collaborating
              with artists and creative teams on projects that use technology as
              a medium for creative expression.
            </p>
          </div>
        </div>
      </div>
      <Bio />
      <div className="border-texture flex w-full flex-col divide-y divide-white/10 px-4 lg:px-6">
        <Training />
        <Experience />
        <Research />
        <Residencies />
      </div>
      <div className="mt-4 mb-16 flex items-end justify-end text-right">
        <Link to="/events">
          <div className="font-syne text-stroke-gray-100 text-stroke-1 mb-1 text-5xl text-transparent">
            Events
          </div>
          <div className="text-l opacity-50">See Upcoming & Past Events</div>
        </Link>
      </div>
    </div>
  )
}
