import { prisma } from "@/lib/prisma";
import { handleApiError } from "@/utils/error-handler";
import { NextRequest, NextResponse } from "next/server";
import { uuidv7 } from "uuidv7";

export const GET = async () => {
  try {
    const users = await prisma.users.findMany();

    if (!users.length) {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return handleApiError(err);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const title = formData.get("title") as string;
    const bio = formData.get("bio") as string;

    await prisma.users.create({
      data: {
        id: uuidv7(),
        name,
        title,
        bio,
      },
    });

    return NextResponse.json(
      { message: "Created User Success" },
      { status: 201 }
    );
  } catch (err) {
    return handleApiError(err);
  }
};
