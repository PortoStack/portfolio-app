import useSWR from "swr";
import { getExperience } from "@/services/experience.service";

export const useExperience = () => {
  const {
    data: experiences,
    isLoading,
    error,
  } = useSWR("/api/experience", getExperience);
  return { experiences, isLoading, error };
};
