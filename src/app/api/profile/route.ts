import { prisma } from "@/lib/prisma";
import { ProfileService } from "@/app/api/profile/service";
import { ProfileController } from "./controller";

const service = new ProfileService(prisma);
const controller = new ProfileController(service);

export const GET = controller.getAll;
export const POST = controller.create;

export const dynamic = "force-dynamic";
