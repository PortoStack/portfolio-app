import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.experience.findMany();

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: `Internal Server error: ${err}` }, { status: 500 });
  }
}