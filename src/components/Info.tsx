import { useTranslation } from 'react-i18next'
import type { InfoSection } from '../config/projects'
import { InlineMarkdown } from './InlineMarkdown'

type InfoProps = InfoSection & {
  children?: React.ReactNode
}

export function Info({ header, list, children }: InfoProps) {
  const { t } = useTranslation()
  // `header` is a label key (e.g. "tools") looked up in the i18n resources.
  // A header without an entry renders as written, for one-off labels.
  const label = t(`info.${header.toLowerCase()}`, { defaultValue: header })

  return (
    <div className="mb-2 flex flex-col gap-3">
      <h3 className="info font-pp-neue-montreal text-xl lowercase lg:text-base">
        <div className="border-texture inline px-3 py-1">{`/${label}`}</div>
      </h3>
      <ul className="mb-1 flex flex-col gap-1 lg:mb-2">
        {list.map((listItem, index) => (
          <li key={index} className="info text-base lg:text-sm">
            <InlineMarkdown>{listItem}</InlineMarkdown>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}
