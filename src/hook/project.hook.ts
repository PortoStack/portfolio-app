import { getProjects } from "@/services/project.service";
import useSWR from "swr";

export const useProject = () => {
  const {
    data: projects,
    error,
    isLoading,
  } = useSWR("/api/projects", getProjects);
  return { projects, error, isLoading };
};
