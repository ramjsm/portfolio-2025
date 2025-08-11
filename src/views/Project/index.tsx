import { useParams } from 'react-router'
import { ProjectTemplate } from '../../components/ProjectTemplate'

export function Project() {
  const { slug } = useParams<{ slug: string }>()
  return <ProjectTemplate key={slug} />
}
