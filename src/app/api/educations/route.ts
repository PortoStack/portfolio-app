import { prisma } from "@/lib/prisma";
import { EducationService } from "./service";
import { EducationController } from "./controller";

const serivce = new EducationService(prisma);
const controller = new EducationController(serivce);

export const GET = controller.getAll;
export const POST = controller.create;

export const dynamic = "force-dynamic";
