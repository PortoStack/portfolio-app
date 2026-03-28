import { api } from "@/lib/api";
import { SkillSchemaType } from "@/schema/skill";
import { useQuery } from "@tanstack/react-query";

export const useSkill = () =>
  useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data } = await api.get<SkillSchemaType[]>("/api/skills");
      return data;
    },
    staleTime: 1000 * 60 * 60,
  });
