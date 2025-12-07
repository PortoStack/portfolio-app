import { BASE_URL } from "@/constants/app.config";
import { ExpType } from "@/types/experience";
import axios from "axios";

export const getExperience = async () => {
  try {
    const experience = await axios.get<ExpType[]>(`${BASE_URL}/api/experience`);
    return experience.data;
  } catch (err) {
    console.error(err);
  }
}