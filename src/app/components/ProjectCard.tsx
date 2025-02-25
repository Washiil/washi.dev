'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ProjectMetadata } from '@/types/project';

interface ProjectCardProps {
    project: ProjectMetadata,
    featured: boolean
}

const ProjectCard = ({ project, featured }: ProjectCardProps) => {
    return (
        <div className='group transition-all duration-700 hover:translate-x-5 h-full w-full p-4 rounded-md flex flex-col'>
            <div className="absolute bottom-0 left-0 h-0 w-[1px] bg-gradient-to-t from-transparent via-purple-600 to-transparent group-hover:animate-[draw-up_0.3s_forwards_0.1s]" />
            <Link href={`/projects/${project.slug}`}>
                <div>
                    <h3 className={`transition-all duration-700 ${featured ? 'text-4xl' : 'text-xl'} font-bold group-hover:text-purple-600 opacity-50 group-hover:opacity-100`}>{project.title}</h3>
                    <div className='transition-all duration-700 my-1 h-[1px] bg-gradient-to-r from-transparent via-zinc-300/75 to-transparent'/>
                    <p>{project.description}</p>
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
