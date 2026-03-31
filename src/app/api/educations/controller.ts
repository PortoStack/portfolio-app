import { handleApiError } from "@/utils/error-handler";
import { EducationService } from "./service";
import { NextRequest, NextResponse } from "next/server";
import { CreateEducationSchemaType } from "@/schema/education";

export class EducationController {
  constructor(private service: EducationService) {}

  public getAll = async () => {
    try {
      const educations = await this.service.getAll();
      return NextResponse.json(educations, { status: 200 });
    } catch (err) {
      handleApiError(err);
    }
  };

  public create = async (req: NextRequest) => {
    try {
      const formData = await req.formData();

      const payload: CreateEducationSchemaType = {
        degree: formData.get("degree") as string,
        school: formData.get("school") as string,
        startedAt: new Date(formData.get("startedAt") as string),
        endedAt: new Date(formData.get("endedAt") as string),
        details: formData.get("details") as string,
      };

      const newEducation = this.service.create(payload);
      return NextResponse.json(
        { message: "Created deucation success" },
        { status: 201 },
      );
    } catch (err) {
      handleApiError(err);
    }
  };
}
