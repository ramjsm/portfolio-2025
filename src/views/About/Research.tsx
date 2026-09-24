import { IndexList, type IndexListItem } from '../../components/IndexList'
import { formatPublicationDate, publicationsList } from '../../config/about'

export function Research() {
  const items: IndexListItem[] = publicationsList.map((publication) => ({
    slug: publication.slug,
    meta: formatPublicationDate(publication.date),
    label: publication.title,
    tag: publication.link ? 'pdf' : undefined,
    link: publication.link,
  }))

  return (
    <IndexList
      id="papers"
      title="Academic Research"
      command={'> ls -la ./papers --sort=date'}
      count={`total ${items.length} entries`}
      cursorText="READ"
      items={items}
    />
  )
}
