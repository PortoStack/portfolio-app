"use server";

import { $Enums } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { uuidv7 } from "uuidv7";

export const GET = async () => {
  try {
    const data = await prisma.projects.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        github: true,
        link: true,
        status: true,
        project_technologies: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    const projects = data.map(({ project_technologies, ...reset }) => ({
      ...reset,
      technologies: project_technologies.map((technology) => technology.tech),
    }));

    return NextResponse.json(projects);
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

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const github = formData.get("github") as string;
    const link = formData.get("link") as string;
    const status = formData.get("status") as $Enums.project_status;

    const projectTechnologies = JSON.parse(
      formData.get("projectTechnologies") as string
    );

    const projectId = uuidv7();

    await prisma.$transaction([
      prisma.projects.create({
        data: {
          id: projectId,
          title,
          description,
          github,
          link,
          status,
        },
      }),

      prisma.project_technologies.createMany({
        data: projectTechnologies.map((tech: string) => ({
          id: uuidv7(),
          project_id: projectId,
          tech,
        })),
      }),
    ]);

    return NextResponse.json(
      { message: "Created Project Success" },
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
