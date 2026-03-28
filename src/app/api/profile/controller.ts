import { NextRequest, NextResponse } from "next/server";
import { ProfileService } from "./service";
import { handleApiError } from "@/utils/error-handler";

export class ProfileController {
  constructor(private service: ProfileService) {}

  public getAll = async () => {
    try {
      const profiles = await this.service.getAll();

      return NextResponse.json(profiles, { status: 200 });
    } catch (err) {
      return handleApiError(err);
    }
  };

  public create = async (req: NextRequest) => {
    try {
      const formData = await req.formData();

      const payload = {
        name: formData.get("name") as string,
        title: formData.get("title") as string,
        bio: formData.get("bio") as string,
        contactEmail: formData.get("contactEmail") as string,
        resumeFile: formData.get("resumeFile") as File | undefined,
      };

      const newProfile = await this.service.create(payload);
      return NextResponse.json(
        { message: "Created profile Success" },
        { status: 201 },
      );
    } catch (err) {
      return handleApiError(err);
    }
  };
}
