import { ProjectSchemaType } from "@/schema/project";
import { $Enums } from "@prisma/client";
import BrandIcon from "./BrandIcon";
import Link from "next/link";
import { siGithub } from "simple-icons";

export default function ProjectCard({
  project,
}: {
  project: ProjectSchemaType;
}) {
  const statusColor = (status: $Enums.project_status) => {
    const colors: Record<string, string> = {
      completed:
        "bg-green-400/20 text-green-400 border-1 border-green-400 cursor-pointer",
      in_progress:
        "bg-orange-400/20 text-orange-400 border-1 border-orange-400 cursor-not-allowed",
      draft:
        "bg-gray-400/20 text-gray-400 border-1 border-gray-400 cursor-not-allowed",
      archived:
        "bg-red-400/20 text-red-400 border-1 border-red-400 cursor-not-allowed",
    };

    return colors[status] as string;
  };

  const statusText = (status: string) => {
    const txts: Record<string, string> = {
      completed: "Demo",
      in_progress: "In Progress",
      draft: "Draft",
      archived: "Archived",
    };

    return txts[status] as string;
  };

  return (
    <div
      key={project.id}
      className="grid gap-4 w-full border-b-2 border-white p-4 group hover:bg-primary/10 hover:border-primary transition-colors duration-300"
    >
      <h2 className="text-3xl group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: project.description }} />
      <div className="flex justify-between w-full">
        <div className="flex gap-4">
          {project.technologies.map((technology) => (
            <div key={technology.tech}>
              <BrandIcon
                className="w-8 h-8 fill-white"
                iconKey={technology.icon}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={project.github}
            target="__blank"
            className="bg-surface px-2 py-0.5 rounded-lg flex gap-2 items-center"
          >
            <div
              className="w-4 h-4 fill-white"
              dangerouslySetInnerHTML={{ __html: siGithub.svg }}
            />
            Github
          </Link>
          <Link
            href={project.demoUrl}
            target="__blank"
            className={`${statusColor(project.status)} px-2 py-0.5 rounded-lg`}
            aria-disabled={project.status !== "completed"}
            tabIndex={project.status !== "completed" ? -1 : undefined}
          >
            {statusText(project.status)}
          </Link>
        </div>
      </div>
    </div>
  );
}
