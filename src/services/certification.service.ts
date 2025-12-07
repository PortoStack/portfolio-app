import { BASE_URL } from "@/constants/app.config";
import axios from "axios";

export const getCertifications = async () => {
  try {
    const certs = await axios.get(`${BASE_URL}/api/certifications`);
    return certs.data;
  } catch (err) {
    console.error(err);
  }
}