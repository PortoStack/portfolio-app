import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uuidv7 } from "uuidv7";

export const GET = async () => {
  try {
    const data = await prisma.skills.findMany({
      select: {
        id: true,
        skill_labels: true,
        category: true,
      },
    });

    const skills = data.map(({ skill_labels, ...reset }) => ({
      ...reset,
      skillLabels: skill_labels.map((skill) => skill.name),
    }));

    return NextResponse.json(skills);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: `Internal Server error: ${err}` },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const category = formData.get("category") as string;
    const skillLabels = JSON.parse(formData.get("skillLabels") as string);

    const skillId = uuidv7();

    await prisma.$transaction([
      prisma.skills.create({
        data: {
          id: skillId,
          category,
        },
      }),
      prisma.skill_labels.createMany({
        data: skillLabels.map((name: string) => ({
          id: uuidv7(),
          skill_id: skillId,
          name,
        })),
      }),
    ]);

    return NextResponse.json(
      { message: "Created Skill Success" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: `Internal Server error: ${err}` },
      { status: 500 }
    );
  }
};
