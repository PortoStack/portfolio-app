import { handleApiError } from "@/utils/error-handler";
import { SkillService } from "./service";
import { NextRequest, NextResponse } from "next/server";
import { CreateSkillSchameType } from "@/schema/skill";

export class SkillController {
  constructor(private service: SkillService) {}

  public getAll = async () => {
    try {
      const skills = await this.service.getAll();

      return NextResponse.json(skills, { status: 200 });
    } catch (err) {
      handleApiError(err);
    }
  };

  public create = async (req: NextRequest) => {
    try {
      const formData = await req.formData();
      const rawTechnologies = formData.get("teachnologies") as string;

      const payload: CreateSkillSchameType = {
        category: formData.get("category") as string,
        technologies: JSON.parse(rawTechnologies || "[]"),
      };

      const newSkill = await this.service.create(payload);
      return NextResponse.json(
        { message: "Created skill Success" },
        { status: 201 },
      );
    } catch (err) {
      handleApiError(err);
    }
  };
}
