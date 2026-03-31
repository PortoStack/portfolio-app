import { api } from "@/lib/api";
import { ProjectSchemaType } from "@/schema/project";
import { useQuery } from "@tanstack/react-query";

export const useProject = () =>
  useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await api.get<ProjectSchemaType[]>("/api/projects");
      return data;
    },
    staleTime: 1000 * 60 * 60,
  });
