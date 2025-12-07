import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/utils/image";
import { NextRequest, NextResponse } from "next/server";
import { uuidv7 } from "uuidv7";

export const GET = async () => {
  try {
    const data = await prisma.certifications.findMany({
      select: {
        id: true,
        title: true,
        issuer: true,
        date: true,
        link: true,
        image: true,
      },
    });

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const issuer = formData.get("issuer") as string;
    const date = formData.get("date") as string;
    const link = formData.get("link") as string;
    const file = formData.get("image") as File;

    const imageUrl = await uploadImage(file, "cert");

    await prisma.certifications.create({
      data: {
        id: uuidv7(),
        title,
        issuer,
        date,
        link,
        image: imageUrl,
      },
    });

    return NextResponse.json(
      { message: "Created Certification Success" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
  }
};
