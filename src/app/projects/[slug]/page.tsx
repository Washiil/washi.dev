import { getProjectBySlug, getAllProjectSlugs } from '@/lib/project';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const blogId = (await params).slug;
    const [, content] = await getProjectBySlug(blogId);

    return (
      <article className="prose prose-lg max-w-none font-mono text-white">
        {content.content}
      </article>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
}
