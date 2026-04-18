import { Image } from '../../components/Image'
import { Helmet } from 'react-helmet'
import { PastEvents } from './PastEvents'

export function About() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-30">
      <Helmet>
        <title>About | Ramses Salas</title>
      </Helmet>
      <div className="text-l flex w-full flex-col-reverse gap-10 lg:flex-row">
        <div className="flex flex-1 flex-col gap-10 text-xl lg:text-base">
          <div className="flex flex-col gap-4 lg:mt-40 lg:gap-2">
            <p>
              I'm Ramses Salas, a freelance Creative Technologist based in
              Berlin.
            </p>
            <p>
              In a world where technology often pulls us away from the present,
              my work seeks to bring us back. I see creativity as a way to heal,
              connect, and question the systems we move through. Using
              interactive and generative systems, and through collaboration, I
              explore how technology can hold emotion, mirror awareness, and
              remind us what it means to be human.
            </p>
            <p>
              My practice is rooted in presence, in finding life within the
              digital and intimacy within the mechanical. I use technology not
              as an escape but as a way to redefine my reality.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/Ramses Salas Creative Technologist.webp"
            thresholdWhite={0.35}
            thresholdGray={0.4}
            disableDialog
          />
        </div>
      </div>
      <PastEvents />
    </div>
  )
}
