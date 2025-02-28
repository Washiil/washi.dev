'use client';

import Link from 'next/link';
import { ProjectMetadata } from '@/types/project';

interface ProjectCardProps {
  project: ProjectMetadata;
  featured: boolean;
}

const ProjectCard = ({ project, featured }: ProjectCardProps) => {
  return (
    <div className="intersect-full group relative flex h-full w-full flex-col rounded-md p-4 transition-all duration-700 intersect:translate-x-2 sm:intersect:-translate-x-0 md:hover:translate-x-5">
      {/* Intersect Javascript Dependency*/}
      <script defer src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js" />

      <div className="intersect-full absolute bottom-0 left-0 h-0 w-[1px] bg-gradient-to-t from-transparent via-purple-600 to-transparent intersect:animate-[draw-up_0.3s_forwards_0.1s] sm:intersect:animate-none md:group-hover:animate-[draw-up_0.3s_forwards_0.1s]" />

      <Link href={`/projects/${project.slug}`} className="h-full w-full">
        <div>
          <h3
            className={`font-mono transition-all duration-700 ${featured ? 'text-4xl' : 'text-xl'} font-bold opacity-50 md:group-hover:text-purple-600 md:group-hover:opacity-100`}
          >
            {project.title}
          </h3>

          <div className="my-1 h-[1px] bg-gradient-to-r from-transparent via-zinc-300/75 to-transparent transition-all duration-700" />

          <p className="text-lg">{project.description}</p>

          <br />
          {project.tags.length > 0 && (
            <div className="my-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded px-2 py-1 font-mono text-sm outline outline-1">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Add more content here, and ensure it also fills the space if needed */}
      </Link>

      <style jsx>{`
        @keyframes draw-up {
          0% {
            height: 0%;
            bottom: 0;
          }
          100% {
            height: 100%;
            bottom: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
