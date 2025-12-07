import { getEducations } from "@/services/education.service";
import useSWR from "swr";

export const useEducation = () => {
  const {
    data: educations,
    isLoading,
    error,
  } = useSWR("api/education", getEducations);
  return { educations, isLoading, error };
};
