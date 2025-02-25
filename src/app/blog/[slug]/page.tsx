import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import './mdx.css';
import { Header } from './header';

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const blogId = (await params).slug;
    const [metadata, content] = await getBlogBySlug(blogId);

    if (!metadata.published) {
      notFound();
    }

    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Header blog={metadata} />
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
