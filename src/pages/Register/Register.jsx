import { useState } from "react";
import authImage from "../../assets/auth.jpg";

import { useNavigate } from "react-router-dom";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import SocialLogin from "../shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { creatUser, userUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    //get input field value
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log(name, email, photo, password);

    // password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 character's");
      return;
    }

    // creat a user
    creatUser(email, password)
      .then(() => {
        userUpdateProfile(name, photo).then(() => {
          toast.success("User created successfully");
          navigate("/");
        });
      })
      .catch(() => {
        toast.error("Email already in use");
      });
  };

  return (
    <div className=" min-h-screen">
      <h1 className="text-2xl md:text-5xl font-semibold text-center mt-10 md:mt-24">
        Please Register Here!
      </h1>

      <div className="hero-content flex-col  md:flex-row mx-auto ">
        <div className="hidden md:block w-full md:w-[720px]">
          <img src={authImage} alt="Login" className="w-full" />
        </div>
        <div className="card w-full py-4 max-w-md shadow-md bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="input input-bordered focus:outline-none focus:border-[#00B499]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered focus:outline-none focus:border-[#00B499]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="file"
                placeholder="image url"
                name="photo"
                className="input p-2 input-bordered focus:outline-none focus:border-[#00B499]"
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
                className=" absolute top-[50px] left-[290px] lg:top-[50px] lg:left-[355px] text-xl"
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
              <button className="btn  bg-[#00B499] hover:bg-[#23e5c8] text-white">
                Register
              </button>
            </div>
          </form>
          <SocialLogin
            linkTo={"/login"}
            title={"Have an account? Please"}
            subTitle={"Log In"}
          ></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
