import { ProjectMetadata } from "@/types/project";
import Link from "next/link";

interface ProjectHeaderProps {
    project: ProjectMetadata;
  }

export const Header = ({project}: ProjectHeaderProps) => {
    return (
        <header className=" text-white pb-28">
            <div className="flex flex-col items-center justify-center text-center">
                <p className="text-4xl lg:text-6xl p-10 font-bold font-mono">{project.title}</p>
                <p className="text-base md:text-xl max-w-2xl">{project.description}</p>
                <div className="flex flex-row p-5 space-x-10">
                    <Link className="font-mono text-black transition-all duration-700 text-xl hover:scale-110 hover:-translate-y-1" href={`https://github.com/${project.repository}`}>
                        <div className="border px-4 py-2 rounded-xl bg-white">GitHub</div>
                    </Link>
                    {project.url != null ? 
                        <Link className="font-mono text-black transition-all duration-700 text-xl hover:scale-110 hover:-translate-y-1" href={project.url}>
                            <div className="border px-4 py-2 rounded-xl bg-white">Website</div>
                        </Link>
                        : ''
                    }
                </div>
            </div>
        </header>
    )
}