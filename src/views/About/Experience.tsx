import { useTranslation } from 'react-i18next'
import { IndexList, type IndexListItem } from '../../components/IndexList'
import { experienceList, formatPeriod } from '../../config/about'

export function Experience() {
  const { t } = useTranslation()
  const items: IndexListItem[] = experienceList.map((entry) => ({
    slug: entry.slug,
    meta: formatPeriod(entry),
    label: entry.role,
    tag: entry.organization,
  }))

  return (
    <IndexList
      id="experience"
      label={t('about.sections.experience.label')}
      title={t('about.sections.experience.title')}
      command={'> ls -la ./cv --filter=experience --sort=date'}
      count={t('about.total', { n: items.length })}
      items={items}
    />
  )
}
