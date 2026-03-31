import { $Enums } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { ProjectService } from "./service";
import { handleApiError } from "@/utils/error-handler";
import { CreateProjectSchemaType } from "@/schema/project";

export class ProjectController {
  constructor(private service: ProjectService) {}

  public getAll = async () => {
    try {
      const projects = await this.service.getAll();
      return NextResponse.json(projects, { status: 200 });
    } catch (err) {
      handleApiError(err);
    }
  };

  public create = async (req: NextRequest) => {
    try {
      const formData = await req.formData();

      const rawTechnologies = formData.get("technologies") as string;

      const payload: CreateProjectSchemaType = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        status: formData.get("status") as $Enums.project_status,
        github: formData.get("github") as string,
        demoUrl: formData.get("demoUrl") as string,
        technologies: JSON.parse(rawTechnologies || "[]"),
      };

      const newProject = await this.service.create(payload);
      return NextResponse.json(
        { message: "Created project success" },
        { status: 201 },
      );
    } catch (err) {
      handleApiError(err);
    }
  };
}
