import { useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/auth.jpg";

import { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setPassword] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    login(email, password)
      .then(() => {
        toast.success("User login successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        // console.error("Login error:", error);
        toast.error("Login failed.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>StockPilot | Login </title>
      </Helmet>
      <div className=" min-h-screen">
        <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 md:mt-24">
          Please Login Your Account
        </h1>
        <div className="hero-content flex-col md:flex-row mx-auto">
          <div className="card w-full max-w-md shadow-md bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="input input-bordered focus:outline-none focus:border-[#00B499]"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered focus:outline-none focus:border-[#00B499]"
                />
                <span
                  className=" absolute top-[50px] left-[290px] lg:top-[50px] lg:left-[360px] text-xl"
                  onClick={() => setPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye></AiOutlineEye>
                  )}
                </span>
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn text-white bg-[#00B499] hover:bg-[#23e5c8] w-full text-base ">
                  Login
                </button>
              </div>
            </form>
            <div className="mb-5">
              <SocialLogin
                subTitle={"Sign Up"}
                title={"Don't have an account yet?"}
              ></SocialLogin>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-[700px]">
            <img src={loginImage} alt="Login" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
