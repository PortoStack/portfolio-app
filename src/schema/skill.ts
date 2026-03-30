import { z } from "zod";

const commonFields = {
  category: z.string().min(1, "Category is required"),
  technologies: z.array(
    z.object({
      tech: z.string(),
      icon: z.string(),
    }),
  ),
};

export const baseSkillSchema = z.object({
  id: z.string(),
  ...commonFields,
});

export const createSkillSchema = z.object({ ...commonFields });

export type SkillSchemaType = z.infer<typeof baseSkillSchema>;

export type CreateSkillSchameType = z.infer<typeof createSkillSchema>;
