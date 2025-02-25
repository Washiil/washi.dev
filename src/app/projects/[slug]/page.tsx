import { getProjectBySlug, getAllProjectSlugs } from '@/lib/project';
import { notFound } from 'next/navigation';
import { Header } from './header';
import './mdx.css';

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs;
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const blogId = (await params).slug;
    const [metadata, content] = await getProjectBySlug(blogId);

    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Header project={metadata} />
        <div className="my-14 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />
        <article className="mdx-content flex max-w-[54rem] flex-col items-center justify-center font-mono backdrop-blur-xl">
          {content.content}
        </article>
      </div>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
}
