import { IndexList, type IndexListItem } from '../../components/IndexList'
import { trainingList, formatPeriod } from '../../config/about'

export function Training() {
  const items: IndexListItem[] = trainingList.map((entry) => ({
    slug: entry.slug,
    meta: formatPeriod(entry),
    label: entry.role,
    tag: entry.organization,
    link: entry.link,
    subLinks: entry.subLinks,
  }))

  return (
    <IndexList
      id="training"
      title="Education & Training"
      command={'> ls -la ./cv --filter=training --sort=date'}
      count={`total ${items.length} entries`}
      items={items}
      defaultOpen
    />
  )
}
