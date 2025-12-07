import { getCertifications } from "@/services/certification.service";
import useSWR from "swr";

export const useCertifition = () => {
  const { data: certifications, isLoading, error } = useSWR("/api/certifications", getCertifications);
  return { certifications, isLoading, error };
}