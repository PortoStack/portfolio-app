import { CreateProfileSchemaType } from "@/schema/profile";
import { uploadFileResume } from "@/utils/resume-config";
import { PrismaClient, profiles } from "@prisma/client";
import { uuidv7 } from "uuidv7";

export class ProfileService {
  constructor(private db: PrismaClient) {}

  // Get all Profiles
  public getAll = async () => {
    const profiles = await this.db.profiles.findMany();

    if (!profiles) throw new Error("Not found Profile");

    return profiles.map((item) => this.transform(item));
  };

  // Create new Profile
  public create = async (payload: CreateProfileSchemaType) => {
    const { name, title, bio, contactEmail, resumeFile } = payload;
    let resumeUrl = null;

    if (resumeFile) {
      try {
        resumeUrl = await uploadFileResume(resumeFile);
      } catch (error) {
        throw new Error("Failed to upload resume");
      }
    }

    return await this.db.profiles.create({
      data: {
        id: uuidv7(),
        name,
        title,
        bio,
        contact_email: contactEmail,
        resume_url: resumeUrl,
      },
    });
  };

  // Transform data format in Profile
  private transform = (profile: profiles) => {
    const { resume_url, contact_email, created_at, ...rest } = profile;
    return {
      ...rest,
      resumeUrl: resume_url,
      contactEmail: contact_email,
      createdAt: created_at,
    };
  };
}
