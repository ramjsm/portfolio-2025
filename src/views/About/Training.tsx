import { useTranslation } from 'react-i18next'
import { IndexList, type IndexListItem } from '../../components/IndexList'
import { trainingList, formatPeriod } from '../../config/about'

export function Training() {
  const { t } = useTranslation()
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
      label={t('about.sections.training.label')}
      title={t('about.sections.training.title')}
      command={'> ls -la ./cv --filter=training --sort=date'}
      count={t('about.total', { n: items.length })}
      items={items}
      defaultOpen
    />
  )
}
