import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://assignment-12-server-side-brown.vercel.app",
});
const useAxiosClient = () => {
  return axiosClient;
};

export default useAxiosClient;
