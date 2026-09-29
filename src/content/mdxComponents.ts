import type { MDXComponents } from 'mdx/types'
import { Image } from '../components/Image'
import { Video } from '../components/Video'
import { MarkdownLink } from '../components/InlineMarkdown'
import {
  Col,
  Credits,
  Gallery,
  Intro,
  ListItem,
  Row,
  Section,
} from './mdxLayout'

/** Components available to every `.mdx` document without imports. */
export const mdxComponents: MDXComponents = {
  Section,
  Intro,
  Gallery,
  Credits,
  Row,
  Col,
  Image,
  Video,
  a: MarkdownLink,
  li: ListItem,
}
