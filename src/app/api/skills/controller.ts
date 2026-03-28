import { handleApiError } from "@/utils/error-handler";
import { SkillService } from "./service";
import { NextResponse } from "next/server";

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
}
