import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const [metadata, content] = await getBlogBySlug(params.slug)
    
    if (!metadata.published) {
      notFound()
    }
    
    return (
      <article className="font-mono text-white">
        {content.content}
      </article>
    )
  } catch (error) {
    notFound()
  }
}
