import { $Enums } from "@/generated/prisma";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  github: string;
  link: string;
  status: $Enums.project_status;
  technologies: string[];
};
