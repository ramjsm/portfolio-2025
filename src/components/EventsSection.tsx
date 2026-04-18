import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { formatEventDate, getEventDates, type Event } from '../config/events'

interface EventsSectionProps {
  /** Unique id used for anchors and GSAP targets to avoid collisions between sections. */
  id: string
  events: Event[]
  heading: {
    /** Optional solid top layer, e.g. "EVENTS". Omit to render only the stroked layer. */
    front?: string
    /** The stroked background word, e.g. "UPCOMING" / "PAST". */
    back: string
  }
  headingAlign?: 'left' | 'right'
}

export function EventsSection({
  id,
  events,
  heading,
  headingAlign = 'left',
}: EventsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.events-heading', {
        y: '-20%',
        autoAlpha: 0,
        stagger: 0.25,
        scrollTrigger: {
          trigger: `#${id}-header`,
        },
      })

      gsap.from('.event-row', {
        y: '20%',
        autoAlpha: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: `#${id}-list`,
        },
      })
    },
    { scope: containerRef }
  )

  const alignClass =
    headingAlign === 'right' ? 'right-0 text-right' : 'left-0 text-left'

  const rowClassName =
    'group relative flex flex-col gap-2 py-6 transition-colors duration-500 ease-out hover:text-white lg:col-span-full lg:grid lg:grid-cols-subgrid lg:items-center lg:gap-6 lg:py-8 lg:text-[#909090]'

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-center"
    >
      <a id={id} className="absolute -top-30 left-0"></a>

      <div
        id={`${id}-header`}
        className={`relative mb-10 w-full ${
          heading.front ? 'h-[12vw] lg:h-36' : 'h-[8vw] lg:h-20'
        }`}
      >
        <div
          className={`absolute ${heading.front ? 'top-[40%]' : 'top-0'} ${alignClass}`}
        >
          <div className="events-heading font-syne text-stroke-gray-300 text-stroke-1 text-[6vw]/[6.2vw] text-transparent lg:text-6xl">
            {heading.back}
          </div>
        </div>
        {heading.front && (
          <div className={`absolute top-0 ${alignClass}`}>
            <div className="events-heading font-syne text-[6vw]/[6.2vw] lg:text-6xl">
              {heading.front}
            </div>
          </div>
        )}
      </div>

      <ul
        id={`${id}-list`}
        className="flex w-full flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto]"
      >
        {events.map((event) => {
          const rowContent = (
            <>
              <span
                aria-hidden
                className="pointer-events-none absolute -top-[2px] left-0 h-[2px] w-0 bg-white opacity-70 transition-[width] duration-700 ease-out group-hover:w-full"
              />

              <div className="flex flex-col transition-transform duration-500 ease-out group-hover:translate-x-1">
                {getEventDates(event.date).map((d) => (
                  <time
                    key={d}
                    dateTime={d}
                    className="font-pp-neue-montreal text-sm uppercase lg:text-base"
                  >
                    {formatEventDate(d)}
                  </time>
                ))}
                {event.time && (
                  <span className="font-pp-neue-montreal text-xs uppercase opacity-70 lg:text-sm">
                    {event.time}
                  </span>
                )}
              </div>

              <h3 className="font-syne text-lg leading-tight lg:text-2xl">
                <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {event.title}
                </span>
              </h3>

              <span className="font-pp-neue-montreal text-sm uppercase transition-transform duration-500 ease-out group-hover:translate-x-1 lg:text-base">
                {event.venue ?? ''}
              </span>

              <span className="font-pp-neue-montreal text-sm uppercase transition-transform duration-500 ease-out group-hover:translate-x-1 lg:text-base">
                {event.location ?? ''}
              </span>

              <span
                aria-hidden
                className="font-syne hidden text-lg leading-tight lg:inline-flex lg:items-center lg:justify-end lg:text-2xl"
              >
                {event.link && (
                  <span className="inline-block -translate-x-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                )}
              </span>
            </>
          )

          return (
            <li
              key={event.slug}
              className="border-texture-top event-row lg:col-span-full lg:grid lg:grid-cols-subgrid"
            >
              {event.link ? (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-text="OPEN"
                  className={rowClassName}
                >
                  {rowContent}
                </a>
              ) : (
                <div className={rowClassName}>{rowContent}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
