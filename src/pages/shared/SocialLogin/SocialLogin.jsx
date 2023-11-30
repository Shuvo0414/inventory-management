import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosClient from "../../../hooks/useAxiosClient";

const SocialLogin = ({ subTitle, title, linkTo }) => {
  const { gooleSignIn, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosClient = useAxiosClient();

  const handleLogin = () => {
    gooleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: "user",
        };

        console.log(result.user.email);
        axiosClient
          .put(`/users/${result.user?.email}`, userInfo)
          .then((res) => {
            console.log(res.data);
            toast.success("User login successfully");
            navigate(location?.state ? location.state : "/");
          });
      })
      .catch(() => {
        toast.error("Invailed User");
      });
  };
  return (
    <>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div
        onClick={handleLogin}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
      >
        <FcGoogle size={32} />

        <p>Continue with Google</p>
      </div>
      <p className="px-6 text-sm text-center text-gray-400">
        {title}
        <Link
          to={linkTo || "/signup"}
          className=" ml-2 hover:underline hover:text-[#00B499] text-gray-600"
        >
          {subTitle}
        </Link>
      </p>
    </>
  );
};

export default SocialLogin;
