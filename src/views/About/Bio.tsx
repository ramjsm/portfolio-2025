import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { handleScrambleHover } from '../../utils/scrambleText'

interface BioBlock {
  /** Rail label, rendered as `/label` in the boxed mono style. */
  label: string
  paragraphs: string[]
  /** Optional CTA rendered below the paragraphs. */
  link?: { label: string; to: string }
}

const blocks: BioBlock[] = [
  {
    label: 'practice',
    paragraphs: [
      'My interest in interactive systems began while studying Computer Science and Engineering at the Universidad Carlos III de Madrid. Through my thesis, I became a member of the Dance and Technology Laboratory, where I started exploring the relationship between computation, movement, and artistic expression.',
      'From 2015 to 2017, I worked as a researcher in the Natural Computing Department at the Polytechnic University of Madrid, focusing on genetic algorithms, evolutionary systems, and computational models inspired by natural processes.',
      'Since then, I have continued working across artistic and technical projects, alongside professional work in software development. Creative Technology has remained part of my work since 2018, and in 2024 I began dedicating myself fully to the practice.',
    ],
    link: { label: 'View full archive →', to: '/archive' },
  },
  {
    label: 'exploration',
    paragraphs: [
      'I am currently exploring questions of consciousness, language, and human experience, with a growing interest in ritual, embodiment, and the ways technology might intersect with these areas.',
    ],
  },
]

export function Bio() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.bio-block', {
        y: '10%',
        autoAlpha: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#bio',
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      id="bio"
      className="flex w-full flex-col gap-14 lg:gap-20"
    >
      {blocks.map((block) => (
        <div
          key={block.label}
          className="bio-block flex flex-col gap-5 lg:flex-row lg:gap-10"
        >
          <h2 className="font-pp-neue-montreal shrink-0 text-xl lowercase lg:w-1/7 lg:text-base">
            <span className="border-texture inline-block px-3 py-1">
              {`/${block.label}`}
            </span>
          </h2>
          <div className="flex flex-1 flex-col gap-4 text-xl lg:max-w-[55ch] lg:gap-3 lg:text-base">
            {block.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {block.link && (
              <Link
                to={block.link.to}
                data-cursor-text="ARCHIVE"
                onMouseEnter={handleScrambleHover}
                className="font-pp-neue-montreal text-xs tracking-wide text-gray-500 uppercase transition-colors duration-300 hover:text-white"
              >
                <span data-scramble={block.link.label}>{block.link.label}</span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
