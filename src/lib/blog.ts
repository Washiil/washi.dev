import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { BlogPost } from '@/types/blog'

const rootDirectory = path.join(process.cwd(), 'content/blogs')

export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  
  const { data, content } = matter(fileContent)
  const { frontmatter, content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  })

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    author: data.author,
    date: data.date,
    tags: data.tags || [],
    published: data.published,
    content: compiledContent
  }
}

export async function getAllBlogSlugs() {
  const files = fs.readdirSync(rootDirectory)
  return files.map(file => ({
    params: {
      slug: file.replace(/\.mdx$/, '')
    }
  }))
}

export async function getAllBlogs(includeUnpublished = false): Promise<Omit<BlogPost, 'content'>[]> {
  const files = fs.readdirSync(rootDirectory)
  const blogs = await Promise.all(
    files.map(async (file) => {
      const blog = await getBlogBySlug(file)
      return {
        slug: blog.slug,
        title: blog.title,
        description: blog.description,
        author: blog.author,
        date: blog.date,
        tags: blog.tags,
        published: blog.published
      }
    })
  )
  
  return blogs
    .filter(blog => includeUnpublished || blog.published)
    .sort((a, b) => {
      const dateA = new Date(a.date.split('-').reverse().join('-'))
      const dateB = new Date(b.date.split('-').reverse().join('-'))
      return dateB.getTime() - dateA.getTime()
    })
}