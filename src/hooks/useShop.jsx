import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useShop = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { data: shop = [] } = useQuery({
    queryKey: ["shop", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/shop?email=${user?.email}`);
      return res.data;
    },
  });

  return [shop];
};

export default useShop;
