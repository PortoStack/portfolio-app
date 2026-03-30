import {
  CreateProfileSchemaType,
  ProfileSchemaType,
  UpdateProfileSchemaType,
} from "@/schema/profile";
import { deleteFileResume, uploadFileResume } from "@/utils/resume-config";
import { PrismaClient } from "@prisma/client";
import { uuidv7 } from "uuidv7";

export class ProfileService {
  constructor(private db: PrismaClient) {}

  // Get all Profiles
  public getAll = async () => {
    const profiles = await this.db.profiles.findMany();

    if (!profiles) throw new Error("Not found Profile");

    return profiles.map((item) => ({
      id: item.id,
      name: item.name,
      title: item.title,
      bio: item.bio,
      resumeUrl: item.resume_url,
      contactEmail: item.contact_email,
    })) as ProfileSchemaType[];
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

  // Update Profile
  public update = async (id: string, payload: UpdateProfileSchemaType) => {
    const { name, title, bio, contactEmail, resumeFile } = payload;
    let resumeUrl = null;

    if (resumeFile) {
      try {
        const oldProffile = await this.db.profiles.findFirst({ where: { id } });
        if (oldProffile?.resume_url) {
          await deleteFileResume(oldProffile.resume_url);
        }

        resumeUrl = await uploadFileResume(resumeFile);
      } catch (error) {
        throw new Error("Failed to upload resume");
      }
    }

    return await this.db.profiles.update({
      where: { id },
      data: {
        name,
        title,
        bio,
        contact_email: contactEmail,
        resume_url: resumeUrl,
      },
    });
  };
}
