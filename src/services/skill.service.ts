import { BASE_URL } from "@/constants/app.config";
import { SkillType } from "@/types/skill";
import axios from "axios";

export const getSkills = async () => {
  try {
    const skills = await axios.get<SkillType[]>(`${BASE_URL}/api/skills`);
    return skills.data;
  } catch (err) {
    console.error(err);
  }
}