/* eslint-disable react/no-unescaped-entities */
import "./signUp.css";
import { GoUpload } from "react-icons/go";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnime from "../../assets/Animation - 1705578701251.json";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import axiosSecure from "../../api";
// import { imageUpload } from "../../api/utils";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const { createUser, userProfileUpdate } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = { image: data.image[0] };
    console.log(name, email, password, image);
    // const formData = new FormData()
    // formData.append('image', imageFile)
    const imageFile = { image: data.image[0] };

    try {
      // upload image
      console.log(imageFile);
      const res = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data);

      const photo_url = res.data.data.display_url;
      createUser(email, password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        userProfileUpdate(name, photo_url).then(() => {
          const userInfo = {
            name: name,
            email: email,
            photo: photo_url,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedID) {
              console.log("user info saved in database");
            }
          });
          toast.success("Successfully signed up");
          reset();
          navigate("/");
        });
      });

      // if (res.data.success) {
      //   //now send the menu item data to the server with image url
      // User Registration
      //  save username and & photo
      // save user in database
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="hero sign-back min-h-screen  ">
      <div className="">
        <div className="hero-content flex flex-col md:flex-row-reverse w-full lg:gap-10">
          <div className="text-center md:w-full lg:text-left max-w-96 lg:max-w-lg px-3 py-2">
            <Lottie animationData={loginAnime}></Lottie>
          </div>
          <div className="card flex-shrink-0 w-96 lg:w-[450px]">
            <div className="text-left ml-10 text-[#ed7966] text-2xl md:text-4xl font-bold">
              Create Your Account
            </div>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#ed7966] font-semibold">
                    Name
                  </span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="  Name"
                  className="input input-bordered border-[#ed7966]  "
                  required
                />
              </div>
              {errors.name && (
                <span className="text-red-700 font-bold">Name is required</span>
              )}
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
              <div className="mt-7">
                <label
                  htmlFor="image"
                  className="file-label  mb-2 text-sm text-white rounded-xl "
                >
                  <div className="flex justify-center items-center mx-auto">
                    <GoUpload className="text-2xl font-bold" />
                    <p>Upload Profile</p>
                  </div>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
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
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-center">
              <small className="text-[#303179]">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="font-bold">Login</span>
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

export default SignUp;
