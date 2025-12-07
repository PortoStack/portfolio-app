import { getSkills } from "@/services/skill.service";
import useSWR from "swr";

export const useSkill = () => {
  const { data: skills, error, isLoading } = useSWR("/api/skills", getSkills);
  return { skills, error, isLoading };
};
