import { prisma } from "@/lib/prisma";
import { handleApiError } from "@/utils/error-handler";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await context.params;
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const title = formData.get("title") as string;
    const bio = formData.get("bio") as string;

    await prisma.users.update({
      data: {
        name,
        title,
        bio,
      },
      where: { id },
    });

    return NextResponse.json(
      { message: "Updated user success." },
      { status: 201 }
    );
  } catch (err) {
    return handleApiError(err);
  }
};
