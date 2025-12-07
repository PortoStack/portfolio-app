import { BASE_URL } from "@/constants/app.config";
import { EducationType } from "@/types/education";
import axios from "axios";

export const getEducations = async () => {
  try {
    const educations = await axios.get<EducationType[]>(`${BASE_URL}/api/education`);
    return educations.data;
  } catch (err) {
    console.error(err);
  }
}