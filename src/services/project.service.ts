import { BASE_URL } from "@/constants/app.config";
import { ProjectType } from "@/types/project";
import axios from "axios";

export const getProjects = async () => {
  const projects = await axios.get<ProjectType[]>(`${BASE_URL}/api/projects`);
  return projects.data;
}