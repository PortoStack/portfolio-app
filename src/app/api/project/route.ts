import { prisma } from "@/lib/prisma";
import { ProjectService } from "./service";
import { ProjectController } from "./controller";

const service = new ProjectService(prisma);
const controller = new ProjectController(service);

export const GET = controller.getAll;
