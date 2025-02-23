import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = await getBlogBySlug(params.slug)
    
    if (!post.published) {
      notFound()
    }
    
    return (
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <div className="text-gray-500">
          <span>{post.date}</span> • <span>{post.author}</span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex gap-2 my-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-600 italic">{post.description}</p>
        {post.content}
      </article>
    )
  } catch (error) {
    notFound()
  }
}
