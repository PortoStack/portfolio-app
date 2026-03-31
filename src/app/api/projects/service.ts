import { CreateProjectSchemaType, ProjectSchemaType } from "@/schema/project";
import { PrismaClient } from "@prisma/client";
import { uuidv7 } from "uuidv7";

export class ProjectService {
  constructor(private db: PrismaClient) {}

  public getAll = async () => {
    const projects = await this.db.projects.findMany({
      include: {
        project_technologies: {
          include: {
            technologies: true,
          },
        },
      },
    });

    return projects.map(
      ({ project_technologies, image_url, demo_url, ...reset }) => ({
        ...reset,
        imageUrl: image_url,
        demoUrl: demo_url,
        technologies: project_technologies.map((pt) => ({
          tech: pt.technologies.tech,
          icon: pt.technologies.icon,
        })),
      }),
    ) as ProjectSchemaType[];
  };

  public create = async (payload: CreateProjectSchemaType) =>
    await this.db.projects.create({
      data: {
        id: uuidv7(),
        title: payload.title,
        description: payload.description,
        status: payload.status,
        github: payload.github,
        demo_url: payload.demoUrl,
        project_technologies: {
          create: payload.technologies.map((tech) => ({
            technologies: {
              connect: { id: tech.id },
            },
          })),
        },
      },
      include: {
        project_technologies: {
          include: {
            technologies: true,
          },
        },
      },
    });
}
