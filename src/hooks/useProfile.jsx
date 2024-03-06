import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosSecure from "../api";

const useProfile = () => {
  const { user, loading } = useAuth();
  //   console.log(user);

  const { data: isProfile, refetch } = useQuery({
    queryKey: ["isProfile"],
    enabled: user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/profile/api/${user?.email}`);
      return res.data;
    },
  });
  return { isProfile, refetch };
};

export default useProfile;
