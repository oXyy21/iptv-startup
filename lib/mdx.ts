import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export type PostMeta = {
  title: string
  date?: string
  description?: string
  [key: string]: any
}

export type Post = {
  content: string
  meta: PostMeta
}

// Get raw MDX content and frontmatter
export function getPostBySlug(type: string, slug: string): Post | null {
  try {
    const mdxPath = path.join(root, 'content', type, `${slug}.mdx`)
    const fileContent = fs.readFileSync(mdxPath, 'utf8')
    const { data, content } = matter(fileContent)
    return { meta: data as PostMeta, content }
  } catch (error) {
    return null
  }
}

// Get all slugs for a specific content type
export function getAllPostSlugs(type: string): string[] {
  try {
    const dirPath = path.join(root, 'content', type)
    if (!fs.existsSync(dirPath)) return []
    const files = fs.readdirSync(dirPath)
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''))
  } catch (error) {
    return []
  }
}
