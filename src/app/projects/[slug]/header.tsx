import { ProjectMetadata } from '@/types/project';
import Link from 'next/link';

interface ProjectHeaderProps {
  project: ProjectMetadata;
}

export const Header = ({ project }: ProjectHeaderProps) => {
  return (
    <header className="pb-28 text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="p-10 font-mono text-4xl font-bold lg:text-6xl">{project.title}</p>
        <p className="max-w-2xl text-base md:text-xl">{project.description}</p>
        <div className="flex flex-row space-x-10 p-5">
          <Link
            className="font-mono text-xl text-black transition-all duration-700 hover:-translate-y-1 hover:scale-110"
            href={`https://github.com/${project.repository}`}
          >
            <div className="rounded-xl border bg-white px-4 py-2">GitHub</div>
          </Link>
          {project.url != null ? (
            <Link
              className="font-mono text-xl text-black transition-all duration-700 hover:-translate-y-1 hover:scale-110"
              href={project.url}
            >
              <div className="rounded-xl border bg-white px-4 py-2">Website</div>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  );
};
