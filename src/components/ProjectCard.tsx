import { $Enums } from "@prisma/client";

export default function ProjectCard({}: {
  project: {
    id: string;
    title: string;
    description: string;
    status: $Enums.project_status;
    demo_url: string;
    github: string;
  } & {
    technology: Array<{ tech: string; icon: string }>;
  };
}) {
  return <div>ProjectCard</div>;
}
