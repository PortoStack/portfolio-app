import prisma from "@/lib/prisma";
import { ProfileService } from "../service";
import { ProfileController } from "../controller";
import { NextRequest } from "next/server";

const service = new ProfileService(prisma);
const controller = new ProfileController(service);

export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => controller.update(req, { params });

export const dynamic = "force-dynamic";
