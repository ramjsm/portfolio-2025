import { useTranslation } from 'react-i18next'
import { IndexList, type IndexListItem } from '../../components/IndexList'
import { formatPublicationDate, publicationsList } from '../../config/about'
import { intlLocale } from '../../i18n/locales'
import { useLocale } from '../../i18n/useLocale'

export function Research() {
  const { t } = useTranslation()
  const locale = useLocale()
  const items: IndexListItem[] = publicationsList.map((publication) => ({
    slug: publication.slug,
    meta: formatPublicationDate(publication.date, intlLocale(locale)),
    label: publication.title,
    tag: publication.link ? 'pdf' : undefined,
    link: publication.link,
  }))

  return (
    <IndexList
      id="papers"
      label={t('about.sections.papers.label')}
      title={t('about.sections.papers.title')}
      command={'> ls -la ./papers --sort=date'}
      count={t('about.total', { n: items.length })}
      cursorText="READ"
      items={items}
    />
  )
}
