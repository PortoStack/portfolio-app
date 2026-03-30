import { z } from "zod";

const commonFields = {
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  bio: z.string(),
  contactEmail: z.string(),
};

export const baseProfileSchema = z.object({
  id: z.string(),
  ...commonFields,
  resumeUrl: z.string().optional(),
});

export const createProfileSchema = z.object({
  ...commonFields,
  resumeFile: z.instanceof(File).optional(),
});

export const updateProfileSchema = z
  .object({ ...commonFields, resumeFile: z.instanceof(File).optional() })
  .partial();

// type of profile
export type ProfileSchemaType = z.infer<typeof baseProfileSchema>;

export type CreateProfileSchemaType = z.infer<typeof createProfileSchema>;

export type UpdateProfileSchemaType = z.infer<typeof updateProfileSchema>;
