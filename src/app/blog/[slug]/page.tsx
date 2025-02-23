import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs
}


type BlogPostProps = Promise<{ blogId: string }>

export default async function BlogPost({ params }: { params: Promise<{slug: string}>}) {
  try {
    const blogId = (await params).slug;
    const [metadata, content] = await getBlogBySlug(blogId)
    
    if (!metadata.published) {
      notFound()
    }
    
    return (
      <article className="font-mono text-white prose prose-lg max-w-none">
        {content.content}
      </article>
    )
  } catch (error) {
    console.log(error)
    notFound()
  }
}
