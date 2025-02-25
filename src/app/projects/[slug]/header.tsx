import { ProjectMetadata } from "@/types/project";

interface ProjectHeaderProps {
    project: ProjectMetadata;
  }

export const Header = ({project}: ProjectHeaderProps) => {
    return (
        <header className=" text-white pb-28">
            <div className="flex flex-col items-center justify-center text-center">
                <p className="text-4xl lg:text-6xl p-10 font-bold font-mono">{project.title}</p>
                <p className="text-base md:text-xl max-w-xl">{project.description}</p>
            </div>
        </header>
    )
}