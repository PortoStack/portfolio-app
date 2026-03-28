import { z } from "zod";

export const baseSkillSchema = z.object({
  id: z.string(),
  category: z.string().min(1, "Category is required"),
  technologies: z.array(
    z.object({
      tech: z.string(),
      icon: z.string(),
    }),
  ),
});

export type SkillSchemaType = z.infer<typeof baseSkillSchema>;
