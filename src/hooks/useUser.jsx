import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosSecure from "../Api";

const useUser = () => {
  const { user, loading } = useAuth();
  //   console.log(user);

  const { data: isUser, refetch } = useQuery({
    queryKey: ["isUser"],
    enabled: user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/api/${user?.email}`);
      return res.data;
    },
  });
  return { isUser, refetch };
};

export default useUser;
