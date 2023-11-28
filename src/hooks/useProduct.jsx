import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProduct = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: product = [] } = useQuery({
    queryKey: ["product", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/products?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(product);
  return [product, refetch];
};

export default useProduct;
