/* eslint-disable react/no-unescaped-entities */
// import "../SignUp/signUp.css";
// import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import loginAnime from "../../assets/Animation - 1705578701251.json";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import axios from "axios";
const Login = () => {
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // SweetAlert Code
  // const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top",
  //     iconColor: "green",
  //     customClass: {
  //         popup: "colored-toast",
  //     },
  //     showConfirmButton: false,
  //     timer: 1500,
  //     timerProgressBar: true,
  // });

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
      <div className="dark:border-2 rounded-3xl dark:border-[#ed7966] p-[100px]">
        <div className="hero-content flex flex-col md:flex-row-reverse w-full lg:gap-10">
          <div className="text-center md:w-full lg:text-left max-w-96 lg:max-w-lg px-3 py-2">
            <Lottie animationData={loginAnime}></Lottie>
          </div>
          <div className="card flex-shrink-0 w-96 lg:w-[450px]">
            <div className="text-left ml-10 text-[#ed7966] text-2xl md:text-4xl font-bold">
              Login to your account
            </div>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#ed7966] font-semibold">
                    Email Address
                  </span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="  Email"
                  className="input input-bordered border-[#ed7966]  "
                  required
                />
                {errors.name && (
                  <span className="text-red-700 font-bold">
                    Email is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#ed7966] font-semibold">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                  })}
                  type="password"
                  name="password"
                  placeholder="  Password"
                  className="input input-bordered border-[#ed7966] "
                />
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
                  className="btn bg-[#ed7966] hover:bg-[#303179] text-white font-semibold"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-center">
              <small className="text-[#303179] dark:text-white">
                Don't Have an account?{" "}
                <Link to="/signUp">
                  <span className="font-bold dark:text-[#ed7966]">
                    {" "}
                    Sign Up
                  </span>
                </Link>
              </small>
            </p>
            {/* social login  */}
            <SocialLogin />
          </div>
        </div>
        <div>
          <div className="flex justify-center ">
            <Link
              className=" w-36 text-center btn border border-[#ed7966] text-[#ed7966] my-4 btn-outline max-w-sm ml-10 hover:bg-[#303179]"
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
