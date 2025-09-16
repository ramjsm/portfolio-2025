import type { InfoSection } from '../config/projects'

type InfoProps = InfoSection & {
  children?: React.ReactNode
}

export function Info({ header, list, children }: InfoProps) {
  return (
    <div className="mb-2 flex flex-col gap-3">
      <h3 className="info font-pp-neue-montreal text-xl lowercase lg:text-base">
        <div className="border-texture inline px-3 py-1">{`/${header}`}</div>
      </h3>
      {list && (
        <ul className="mb-1 flex flex-col gap-1 lg:mb-2">
          {list.map((listItem, index) => (
            <li key={index} className="info text-base lg:text-sm">
              {listItem}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  )
}
