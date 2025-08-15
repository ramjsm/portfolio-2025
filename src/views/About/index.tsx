import { Image } from '../../components/Image'

export function About() {
  return (
    <div className="text-l flex min-h-screen w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row">
      <div className="flex flex-1 flex-col gap-20 text-xl lg:text-base">
        <div className="flex flex-col gap-4 lg:mt-40 lg:gap-2">
          <p>
            Hi, I’m Ramses Salas, a Freelance Creative Technologist based in
            Berlin. I work with code, motion, and interactivity to create
            digital experiences that feel alive and invite people to engage.
          </p>
          <p>
            During my time at{' '}
            <a href="https://www.uc3m.es/inicio">
              Carlos III University of Madrid
            </a>{' '}
            studying Computer Science, I took a course called{' '}
            <i>Dance & Robotics</i> instructed by{' '}
            <a
              href="https://www.researchgate.net/profile/Javier-Gorostiza-2"
              className="underline"
            >
              Javier Gorostiza
            </a>{' '}
            and{' '}
            <a
              href="https://www.instagram.com/alfredomiralles"
              className="underline"
            >
              Alfredo Miralles
            </a>
            . It was the first time I saw technology used not just for utility,
            but in a way that connected with something human in me. That
            experience made me pause and ask how I wanted to use the tools I was
            learning. I began to see technology not just as a set of tools, but
            as a medium that could speak to people on an emotional level.
          </p>
          <p>
            Soon after, I joined the Dance and Technology Laboratory,
            collaborating with Alfredo on experiments that brought technology
            into scenic performance. Later, under Javier’s mentorship, I
            developed my graduation project, exploring motion tracking to create
            live visualizations for the stage. Each step felt like discovering a
            new way to translate thought and feeling into something others could
            experience.
          </p>
          <p>
            Since then, I’ve collaborated with artists, exploring how technology
            and creativity can come together to express ideas, emotions, and
            imagined worlds. In a time when technology often pulls us away from
            the present moment, I try to use it to slow down, notice, and
            connect. My practice is an invitation to a world where technology
            brings us closer to ourselves and to the world around us.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-ark-es-dense text-4xl">Collaborations</p>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="https://www.instagram.com/p/C_lHBO1t_Yd/?hl=en">
                2024 / Acid Reflux - Series Parties
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/raw_skpz/">
                2023 / RAW SKPZ Open Studios
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/stories/highlights/18053552674947801/?hl=en">
                2023 / Paula Fraile Open Studios
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p/CvuVcOmM4dp/?img_index=3">
                2023 / Synthara at Conscious Madness Festival
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p/CW565AIM1VW/?hl=en">
                2020 / As Below So Above at Willow Gallery
              </a>
            </li>
            <li>
              <a href="https://somos-arts.org/un_real-desires-group-exhibition/">
                2019 / Juliette Un_Real Desires at SomoS Art House Berlin
              </a>
            </li>
            <li>
              <a href="https://actividadesculturales.unileon.es/123">
                2018 / Tracking - INJUVE (Universidad de León).
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/auladelasartes.uc3m/videos/el-pasado-viernes-nuestro-compa%C3%B1ero-alfredo-miralles-benito-present%C3%B3-la-pieza-so/1657182337638908/">
                2017 / Tracking - Festival Internacional Danzamos (Centro
                Cultural Conde Duque).
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/about.webp"
          thresholdWhite={0.35}
          thresholdGray={0.4}
          disableDialog
        />
      </div>
    </div>
  )
}
