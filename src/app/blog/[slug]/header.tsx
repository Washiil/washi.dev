import { BlogPostMetadata } from '@/types/blog';

interface BlogHeaderProps {
  blog: BlogPostMetadata;
}

export const Header = ({ blog }: BlogHeaderProps) => {
  return (
    <header className="pb-4 text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="p-10 font-mono text-4xl font-bold lg:text-6xl">{blog.title}</p>
      </div>
    </header>
  );
};
