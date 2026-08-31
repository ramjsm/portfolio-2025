import { IndexList, type IndexListItem } from '../../components/IndexList'
import { experienceList, formatPeriod } from '../../config/about'
import { handleScrambleHover } from '../../utils/scrambleText'

export function Experience() {
  const items: IndexListItem[] = experienceList.map((entry) => ({
    slug: entry.slug,
    meta: formatPeriod(entry),
    label: entry.role,
    tag: entry.organization,
  }))

  return (
    <IndexList
      id="experience"
      title="Experience"
      command={'> ls -la ./cv --filter=experience --sort=date'}
      count={`total ${items.length} entries`}
      items={items}
      defaultOpen
      footer={
        <a
          href="https://www.linkedin.com/in/ramsessalas/"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-text="OPEN"
          onMouseEnter={handleScrambleHover}
          className="font-pp-neue-montreal text-xs tracking-wide text-gray-500 uppercase transition-colors duration-300 hover:text-white"
        >
          <span data-scramble="See full CV on LinkedIn →">
            See full CV on LinkedIn →
          </span>
        </a>
      }
    />
  )
}
