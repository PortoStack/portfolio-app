import { api } from "@/lib/api";
import { ProfileSchemaType } from "@/schema/profile";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await api.get<ProfileSchemaType[]>("/api/profile");
      return data[0];
    },
    staleTime: 1000 * 60 * 60,
  });
