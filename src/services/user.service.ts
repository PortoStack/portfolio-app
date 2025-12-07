import { BASE_URL } from "@/constants/app.config";
import { UserType } from "@/types/user";
import axios from "axios";

export const getUser = async () => {
  try {
    const users = await axios.get<UserType[]>(`${BASE_URL}/api/user`);
    return users.data[0];
  } catch (err) {
    console.error(err);
  }
}