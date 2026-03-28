import prisma from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  ctx: RouteContext<"/api/projects/[id]">
) => {
  try {
    const { id } = await ctx.params;

    if (!id)
      return NextResponse.json({ message: "Id not found" }, { status: 400 });

    const project = await prisma.projects.findFirst({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        github: true,
        link: true,
        status: true,
        project_technologies: true,
      },
    });

    if (!project)
      return NextResponse.json(
        { message: "Project not found" },
        { status: 400 }
      );

    return NextResponse.json({ project });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: `Internal Server error: ${err}` },
      { status: 500 }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  ctx: RouteContext<"/api/projects/[id]">
) => {
  try {
    const { id } = await ctx.params;
    const formData = await req.formData();

    if (!id)
      return NextResponse.json({ message: "Id not found" }, { status: 400 });

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const github = formData.get("github") as string;
    const link = formData.get("link") as string;
    const status = formData.get("status") as $Enums.project_status;

    const projectTechnologies = JSON.parse(
      formData.get("projectTechnologies") as string
    );

    await prisma.projects.update({
      where: { id },
      data: {
        title,
        description,
        github,
        link,
        status,
        project_technologies: projectTechnologies,
      }
    });

    return NextResponse.json({ message: "Updated project successful!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: `Internal Server error: ${err}` },
      { status: 500 }
    );
  }
};
