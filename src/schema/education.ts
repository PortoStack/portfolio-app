import { z } from "zod";

const commonFields = {
  degree: z.string(),
  school: z.string(),
  startedAt: z.date(),
  endedAt: z.date(),
  detail: z.string().optional(),
};

export const baseEducationSchema = z.object({
  id: z.string(),
  ...commonFields,
});

export const createEducationSchema = z.object({
  ...commonFields,
});

export const updateEducationSchema = z
  .object({
    ...commonFields,
  })
  .partial();

export type EducationSchemaType = z.infer<typeof baseEducationSchema>;
export type CreateEducationSchemaType = z.infer<typeof createEducationSchema>;
export type UpdateEducationSchemaType = z.infer<typeof updateEducationSchema>;
