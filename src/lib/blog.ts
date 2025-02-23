import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc'
import { BlogPostMetadata } from '@/types/blog'
import React from 'react'
import type { MDXComponents } from 'mdx/types'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'


const rootDirectory = path.join(process.cwd(), 'content/blogs')

export async function getBlogBySlug(slug: string): Promise<[BlogPostMetadata, CompileMDXResult]> {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  
  const { data, content } = matter(fileContent)

  const compiledContent: CompileMDXResult = await compileMDX({
    source: content,
    options: { 
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          remarkGfm,  // Add this for basic markdown support
        ],
        rehypePlugins: [
          rehypeSlug,  // Add this for heading IDs
        ],
      }
    },
  });
  
  const metadata: BlogPostMetadata = {
      slug: realSlug,
      title: data.title,
      description: data.description,
      author: data.author,
      date: data.date,
      tags: data.tags || [],
      published: data.published,
  };

  return [metadata, compiledContent]
}

export async function getAllBlogSlugs() {
  const files = fs.readdirSync(rootDirectory)
  return files.map(file => ({
    params: {
      slug: file.replace(/\.mdx$/, '')
    }
  }))
}

export async function getAllBlogs(includeUnpublished = false): Promise<Omit<BlogPostMetadata, 'content'>[]> {
  const files = fs.readdirSync(rootDirectory)
  const blogs = await Promise.all(
    files.map(async (file) => {
      const [metadata, content] = await getBlogBySlug(file)
      return metadata;
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