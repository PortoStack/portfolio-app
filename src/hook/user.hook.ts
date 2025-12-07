import { getUser } from "@/services/user.service"
import useSWR from "swr"

export const useUser = () => {
  const { data: user, isLoading, error } = useSWR("/api/users", getUser);
  return { user, isLoading, error };
}