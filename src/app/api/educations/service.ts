import {
  CreateEducationSchemaType,
  EducationSchemaType,
} from "@/schema/education";
import { PrismaClient } from "@prisma/client";
import { uuidv7 } from "uuidv7";

export class EducationService {
  constructor(private db: PrismaClient) {}

  public getAll = async () => {
    const educations = await this.db.educations.findMany({
      orderBy: {
        started_at: "desc",
      },
    });

    return educations.map(({ started_at, ended_at, ...reset }) => ({
      ...reset,
      startedAt: started_at,
      endedAt: ended_at,
    })) as EducationSchemaType[];
  };

  public create = async (payload: CreateEducationSchemaType) =>
    await this.db.educations.create({
      data: {
        id: uuidv7(),
        degree: payload.degree,
        school: payload.school,
        started_at: payload.startedAt,
        ended_at: payload.endedAt,
        details: payload.details,
      },
    });
}
