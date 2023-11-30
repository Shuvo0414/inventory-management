import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://assignment-12-server-side-brown.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error track in the interceptors", error.response);
        if (error.response?.status === 401 || error.response?.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logOut, navigate]);

  return instance;
};

export default useAxiosSecure;
