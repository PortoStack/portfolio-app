import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { uuidv7 } from "uuidv7";

export const GET = async () => {
  try {
    const education = await prisma.education.findMany();

    return NextResponse.json(education);
  } catch (err) {
    console.error(err);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const degree = formData.get("degree") as string;
    const school = formData.get("school") as string;
    const period = formData.get("period") as string;
    const details = formData.get("details") as string;

    await prisma.education.create({
      data: {
        id: uuidv7(),
        degree,
        school,
        period,
        details,
      },
    });

    return NextResponse.json(
      { message: "Created Education Success" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
  }
};
