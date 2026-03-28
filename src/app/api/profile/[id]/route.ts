import prisma from "@/lib/prisma";
import { handleApiError } from "@/utils/error-handler";
import { deleteFileResume, uploadFileResume } from "@/utils/resume-config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  ctx: RouteContext<"/api/profile/[id]">,
) => {
  try {
    const { id } = await ctx.params;

    if (!id)
      return NextResponse.json(
        { message: "No profile id found" },
        { status: 404 },
      );

    const profile = await prisma.profiles.findFirst({ where: { id } });

    return NextResponse.json(profile, { status: 200 });
  } catch (err) {
    return handleApiError(err);
  }
};

export const PATCH = async (
  req: NextRequest,
  ctx: RouteContext<"/api/profile/[id]">,
) => {
  try {
    const { id } = await ctx.params;
    const formData = await req.formData();

    if (!id)
      return NextResponse.json({ message: "Id not found" }, { status: 400 });

    const name = formData.get("name") as string;
    const title = formData.get("title") as string;
    const bio = formData.get("bio") as string;
    const contactEmail = formData.get("contactEmail") as string;
    const newResumeFile = formData.get("resume") as File | null;

    const oldProfile = await prisma.profiles.findUnique({
      where: { id },
    });

    const oldResumeUrl = oldProfile?.resume_url;

    let finalResumeUrl = oldResumeUrl || "";

    if (newResumeFile && newResumeFile.size > 0) {
      if (oldResumeUrl) {
        await deleteFileResume(oldResumeUrl);
      }

      finalResumeUrl = await uploadFileResume(newResumeFile);
    }

    await prisma.profiles.update({
      where: { id },
      data: {
        name,
        title,
        bio,
        contact_email: contactEmail,
        resume_url: finalResumeUrl,
      },
    });

    return NextResponse.json(
      { message: "Updated profile Success" },
      { status: 201 },
    );
  } catch (err) {
    return handleApiError(err);
  }
};
