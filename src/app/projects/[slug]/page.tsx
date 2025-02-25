import { getProjectBySlug, getAllProjectSlugs } from '@/lib/project';
import { notFound } from 'next/navigation';
import { Header } from './header';
import "./mdx.css"

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs;
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const blogId = (await params).slug;
    const [metadata, content] = await getProjectBySlug(blogId);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Header project={metadata} />
        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent my-14'/>
        <article className="flex flex-col font-mono mdx-content backdrop-blur-xl max-w-[54rem] items-center justify-center">
          {content.content}
        </article>
      </div>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
}
