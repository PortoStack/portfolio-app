import { $Enums } from "@prisma/client";
import { z } from "zod";

const commonFields = {
  title: z.string(),
  description: z.string(),
  status: z.enum($Enums.project_status),
  github: z.string(),
  demoUrl: z.string(),
  technologies: z.array(
    z.object({
      tech: z.string(),
      icon: z.string(),
    }),
  ),
};

export const baseProjectSchema = z.object({
  id: z.string(),
  ...commonFields,
  imageUrl: z.string().optional(),
});

export const createProjectSchema = z.object({
  ...commonFields,
  technologies: z.array(
    z.object({
      id: z.string(),
      tech: z.string(),
      icon: z.string(),
    }),
  ),
  imageFile: z.instanceof(File).optional(),
});

export const updateProjectSchema = z
  .object({
    ...commonFields,
    imageFile: z.instanceof(File).optional(),
  })
  .partial();

export type ProjectSchemaType = z.infer<typeof baseProjectSchema>;
export type CreateProjectSchemaType = z.infer<typeof createProjectSchema>;
export type UpdateProjectSchema = z.infer<typeof updateProjectSchema>;
