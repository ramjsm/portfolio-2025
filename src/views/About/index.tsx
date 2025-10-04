import { Image } from '../../components/Image'
import { Helmet } from 'react-helmet'

export function About() {
  return (
    <div className="text-l flex min-h-screen w-full flex-col-reverse gap-10 lg:flex-row">
      <Helmet>
        <title>About | Ramses Salas</title>
      </Helmet>
      <div className="flex flex-1 flex-col gap-10 text-xl lg:text-base">
        <div className="flex flex-col gap-4 lg:mt-40 lg:gap-2">
          <p>
            I'm Ramses Salas, a freelance Creative Technologist based in Berlin.
          </p>
          <p>
            In a world where technology often pulls us away from the present, my
            work seeks to bring us back. I see creativity as a way to heal,
            connect, and question the systems we move through. Using interactive
            and generative systems, and through collaboration, I explore how
            technology can hold emotion, mirror awareness, and remind us what it
            means to be human.
          </p>
          <p>
            My practice is rooted in presence, in finding life within the
            digital and intimacy within the mechanical. I use technology not as
            an escape but as a way to redefine my reality.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-ark-es-dense text-4xl">Participations</p>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="https://www.instagram.com/p/C_lHBO1t_Yd/?hl=en"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2025 / Myths of Tomorrow at Hotel Continental - Award project
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/p/C_lHBO1t_Yd/?hl=en"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2024 / Acid Reflux - Series Parties
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/raw_skpz/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2023 / RAW SKPZ Open Studios
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/stories/highlights/18053552674947801/?hl=en"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2023 / Paula Fraile Open Studios
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/p/CvuVcOmM4dp/?img_index=3"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2023 / Synthara at Conscious Madness Festival
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/p/CW565AIM1VW/?hl=en"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2020 / As Below So Above at Willow Gallery
              </a>
            </li>
            <li>
              <a
                href="https://somos-arts.org/un_real-desires-group-exhibition/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2019 / Juliette Un_Real Desires at SomoS Art House Berlin
              </a>
            </li>
            <li>
              <a
                href="https://actividadesculturales.unileon.es/123"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2018 / Tracking - INJUVE (Universidad de León).
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/auladelasartes.uc3m/videos/el-pasado-viernes-nuestro-compa%C3%B1ero-alfredo-miralles-benito-present%C3%B3-la-pieza-so/1657182337638908/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                2017 / Tracking - Festival Internacional Danzamos (Centro
                Cultural Conde Duque).
              </a>
            </li>
          </ul>
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
  )
}
