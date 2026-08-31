import { IndexList, type IndexListItem } from '../../components/IndexList'
import { residenciesList, formatPeriod } from '../../config/about'

export function Residencies() {
  const items: IndexListItem[] = residenciesList.map((entry) => ({
    slug: entry.slug,
    meta: formatPeriod(entry),
    label: entry.role,
    tag: entry.organization,
  }))

  return (
    <IndexList
      id="residencies"
      title="Residencies"
      command={'> ls -la ./cv --filter=residencies --sort=date'}
      count={`total ${items.length} entries`}
      items={items}
    />
  )
}
