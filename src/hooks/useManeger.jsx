import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useManeger = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isManeger, isPending: isManegerLoading } = useQuery({
    queryKey: [user?.email, "isManeger"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/maneger/${user.email}`);
      console.log(res.data);
      return res.data?.maneger;
    },
  });
  // console.log(isManeger);
  return [isManeger, isManegerLoading];
};

export default useManeger;
