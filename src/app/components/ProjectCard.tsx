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
        <div className='group transition-all duration-700 hover:scale-[103%] h-full w-full p-4 rounded-md flex flex-col bg-gradient-radial from-zinc-600/10 to-zinc-800/55'>
            <Link href={"github.com/" + project.repository}>
                <div>
                    <h3 className={`${featured ? 'text-4xl' : 'text-xl'} font-semibold`}>{project.title}</h3>
                    <div className='my-1 h-[1px] bg-gradient-to-r from-transparent via-zinc-300/75 to-transparent'/>
                    <p>{project.description}</p>
                </div>
                {/* Add more content here, and ensure it also fills the space if needed */}
            </Link>
        </div>
    );
};

export default ProjectCard;
