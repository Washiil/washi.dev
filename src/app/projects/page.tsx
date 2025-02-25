// Will most likely be using MDX with some sort of content based
// management system to format and display the MDX files and then
// use these files to diaply here so that I can reduce overhead.

import { getAllProjects } from '@/lib/project';
import { ProjectMetadata } from '@/types/project';
import ProjectCard from '../components/ProjectCard';

export default async function Projects() {
  // Going to add a top section with "featured" projects as specified in the metadata of the mdx files
  // Add some lovely animations similar to the blog elements

  const projects: ProjectMetadata[] = await getAllProjects();
  const featuredProject: ProjectMetadata = projects[0];
  const slightFeature1: ProjectMetadata = projects[1];
  const slightFeature2: ProjectMetadata = projects[2];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="w-full text-center">
        <h1 className="font-mono text-4xl font-bold">Featured Projects</h1>
      </div>
      {/* Top Priority layout aka featured projects*/}
      <div className="grid grid-cols-1 lg:grid-cols-9">
        <div className="col-span-1 h-full w-full p-3 lg:col-span-5">
          <ProjectCard project={featuredProject} featured={true} />
        </div>
        <div className="col-span-2 grid grid-rows-1 lg:col-span-4 lg:grid-rows-2">
          <div className="p-3">
            <ProjectCard project={slightFeature1} featured={false} />
          </div>
          <div className="p-3">
            <ProjectCard project={slightFeature2} featured={false} />
          </div>
        </div>
      </div>

      <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-zinc-300/75 to-transparent" />

      {/* Other Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.slice(3).map((project) => (
          // Add animation for the blog posts
          <div key={project.slug} className="p-3">
            <ProjectCard project={project} featured={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
