import { useTranslation } from 'react-i18next'
import { IndexList, type IndexListItem } from '../../components/IndexList'
import { residenciesList, formatPeriod } from '../../config/about'

export function Residencies() {
  const { t } = useTranslation()
  const items: IndexListItem[] = residenciesList.map((entry) => ({
    slug: entry.slug,
    meta: formatPeriod(entry),
    label: entry.role,
    tag: entry.organization,
  }))

  return (
    <IndexList
      id="residencies"
      label={t('about.sections.residencies.label')}
      title={t('about.sections.residencies.title')}
      command={'> ls -la ./cv --filter=residencies --sort=date'}
      count={t('about.total', { n: items.length })}
      items={items}
    />
  )
}
