import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uuidv7 } from "uuidv7";
import { handleApiError } from "@/utils/error-handler";
import { SkillController } from "./controller";
import { SkillService } from "./service";

const service = new SkillService(prisma);
const controller = new SkillController(service);

export const GET = controller.getAll;

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const category = formData.get("category") as string;
    const rawTechnologies: { tech: string; icon_url?: string }[] = JSON.parse(
      formData.get("technologies") as string,
    );

    const skillId = uuidv7();

    const techOperations = await Promise.all(
      rawTechnologies.map(async (technology) => {
        return await prisma.technologies.upsert({
          where: { tech: technology.tech },
          update: { icon_url: technology.icon_url },
          create: {
            id: uuidv7(),
            tech: technology.tech,
            icon_url: technology.icon_url,
          },
        });
      }),
    );

    await prisma.$transaction([
      prisma.skills.create({
        data: {
          id: skillId,
          category,
        },
      }),

      prisma.skill_technologies.createMany({
        data: techOperations.map((tech) => ({
          skill_id: skillId,
          technology_id: tech.id,
        })),
        skipDuplicates: true,
      }),
    ]);

    return NextResponse.json(
      { message: "Created Skill Success" },
      { status: 201 },
    );
  } catch (err) {
    return handleApiError(err);
  }
};
