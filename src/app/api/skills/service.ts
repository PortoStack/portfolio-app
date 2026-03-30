import { CreateSkillSchameType, SkillSchemaType } from "@/schema/skill";
import { PrismaClient } from "@prisma/client";
import { uuidv7 } from "uuidv7";

export class SkillService {
  constructor(private db: PrismaClient) {}

  public getAll = async () => {
    const skills = await this.db.skills.findMany({
      include: {
        skill_technologies: {
          include: {
            technologies: true,
          },
        },
      },
    });

    return skills.map((skill) => ({
      id: skill.id,
      category: skill.category,
      technologies: skill.skill_technologies.map((st) => ({
        tech: st.technologies.tech,
        icon: st.technologies.icon,
      })),
    })) as SkillSchemaType[];
  };

  public create = async (payload: CreateSkillSchameType) =>
    await this.db.skills.create({
      data: {
        id: uuidv7(),
        category: payload.category,
        skill_technologies: {
          create: payload.technologies.map((technology) => ({
            technologies: {
              connectOrCreate: {
                where: { tech: technology.tech },
                create: {
                  id: uuidv7(),
                  tech: technology.tech,
                  icon: technology.icon,
                },
              },
            },
          })),
        },
      },
    });
}
