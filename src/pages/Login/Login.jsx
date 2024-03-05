/* eslint-disable react/no-unescaped-entities */
import './login.css'
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMailLock } from 'react-icons/md';
import { GoPasskeyFill } from 'react-icons/go';
const Login = () => {
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // password toggle function

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // handle OnSubmit
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);

    userLogin(email, password)
      .then(() => {
        toast.success("User Login Successfully");

        axios.patch(`/monthly-user-count/${email}`).then((res) => res.data);
        reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="hero sign-back min-h-screen  dark:bg-black">
      <div className="md:none lg:block dark:border-2 rounded-3xl dark:border-[#213d5e] lg:p-[100px]">
        <div className=" px-5 flex flex-col items-center justify-center md:flex-row-reverse w-full lg:gap-10">
          <div className="card flex-shrink-0 w-80 md:w-96 lg:w-[450px] py-7 bg-[#213d5e] bg-opacity-10 backdrop-blur-md shadow-black shadow-2xl">
            <div className="login-text text-center my-2 md:my-5 lg:my-8 text-[#213d5e] text-2xl md:text-4xl font-bold">
              Login to your account
            </div>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

              <div className="form-control flex flex-row my-3">
                <div className="px-3 py-2 rounded-l-lg bg-[#213d5e]  shadow-[#213d5e] shadow-lg">
                  <MdOutlineMailLock className="text-white " size={24} />
                </div>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="  example@gmail.com"
                  className="input w-full rounded-l-none input-bordered border-[#213d5e] shadow-[#213d5e] shadow-lg "
                  required
                />
                {errors.name && (
                  <span className="text-red-700 font-bold">
                    Email is required
                  </span>
                )}
              </div>

              <div className="form-control flex flex-row my-3">
                <div className="px-3 py-2 rounded-l-lg bg-[#213d5e]  shadow-[#213d5e] shadow-lg">
                  <GoPasskeyFill className="text-white " size={24} />
                </div>
                <div className="flex flex-row items-center w-full">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                      pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                    })}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="  password"
                    className="input rounded-l-none w-full input-bordered border-[#213d5e] shadow-[#213d5e] shadow-lg"
                  />
                  {/* Text changes based on visibility */}
                  <button onClick={togglePasswordVisibility} className="relative -ml-7 md:-ml-10 ">
                    {showPassword ? <FaEyeSlash className="text-[#213d5e]" size={20} /> : <FaEye className="text-[#213d5e]" size={20} />}
                  </button>
                </div>

                {errors.name && (
                  <span className="text-red-700 font-bold">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600"> Password must be 8 character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    {" "}
                    Password must be less than 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    {" "}
                    Password must have one uppercase , one lowercase and one
                    number
                  </p>
                )}
              </div>

              {errors.image && (
                <span className="text-red-700 font-bold">
                  image is required
                </span>
              )}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn login-btn shadow-[#213d5e] shadow-2xl border-[#213d5e] bg-[#213d5e] hover:bg-[#303179] text-white font-semibold"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="md:text-center account-comment my-4">
              <small className="text-neutral-700  dark:text-white">
                Don't Have an account?{" "}
                <Link to="/signUp">
                  <span className="font-extrabold dark:text-[#213d5e]">
                    {" "}
                    Sign Up
                  </span>
                </Link>
              </small>
            </p>
            {/* social login  */}
            <div className="ml-10 social-login">
              <SocialLogin />
            </div>
            <div className="flex justify-center home-btn ">
              <Link
                className="text-sm font-semibold flex flex-row gap-2 items-center"
                to="/"
              >
                <p>Go to</p>
                <span className="underline font-extrabold text-base text-[#213d5e]">Home</span>
              </Link>
            </div>

          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Login;
