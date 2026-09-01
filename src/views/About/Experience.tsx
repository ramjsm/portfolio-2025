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
    />
  )
}
