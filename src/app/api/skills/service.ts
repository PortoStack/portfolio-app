import { PrismaClient } from "@prisma/client";

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
        icon: st.technologies.icon_url,
      })),
    }));
  };
}
