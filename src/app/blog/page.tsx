import { getAllBlogs } from '@/lib/blog'
import Link from 'next/link'

export default async function BlogIndex() {
  const blogs = await getAllBlogs()
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {blogs.map((blog) => (
          <article key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-blue-600">
                {blog.title}
              </h2>
            </Link>
            <div className="text-gray-500">
              <span>{blog.date}</span> • <span>{blog.author}</span>
            </div>
            {blog.tags.length > 0 && (
              <div className="flex gap-2 my-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="mt-2">{blog.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
