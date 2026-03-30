import { prisma } from "@/lib/prisma";
import { SkillController } from "./controller";
import { SkillService } from "./service";

const service = new SkillService(prisma);
const controller = new SkillController(service);

export const GET = controller.getAll;
export const POST = controller.create;

export const dynamic = "force-dynamic";
