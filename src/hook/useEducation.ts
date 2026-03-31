import { api } from "@/lib/api";
import { EducationSchemaType } from "@/schema/education";
import { useQuery } from "@tanstack/react-query";

export const useEducation = () =>
  useQuery({
    queryKey: ["educations"],
    queryFn: async () => {
      const { data } = await api.get<EducationSchemaType[]>("/api/educations");
      return data;
    },
    staleTime: 1000 * 60 * 60,
  });
