import { BASE_URL } from "@/constants/app";
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_URL,
});
