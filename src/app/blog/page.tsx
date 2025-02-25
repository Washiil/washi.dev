import { getAllBlogs } from '@/lib/blog';
import Link from 'next/link';
import LaserBorderLeft from '../components/LaserBorderLeft';

export default async function BlogIndex() {
  const blogs = await getAllBlogs();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="space-y-8">
        {blogs.map((blog) => (
          // Add animation for the blog posts
          <article
            key={blog.slug}
            className="font-mono transition-all duration-700 hover:translate-x-10"
          >
            <LaserBorderLeft>
              <Link href={`/blog/${blog.slug}`}>
                <h2 className="text-2xl font-semibold hover:text-purple-600 hover:underline">
                  {blog.title}
                </h2>
              </Link>
              <div className="text-gray-500">
                <span>{blog.date}</span> • <span>{blog.author}</span>
              </div>
              {blog.tags.length > 0 && (
                <div className="my-2 flex gap-2">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="rounded px-2 py-1 text-sm outline outline-1">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-2">{blog.description}</p>
            </LaserBorderLeft>
          </article>
        ))}
      </div>
    </div>
  );
}
