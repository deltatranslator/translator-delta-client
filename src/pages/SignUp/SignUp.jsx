/* eslint-disable react/no-unescaped-entities */
import "./signUp.css";
import { GoUpload } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnime from '../../assets/Animation - 1705578701251.json'
import { Link } from "react-router-dom";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.password;
    const image = data.image[0];
    console.log(name, email, image);
    reset();
  };

  return (
    <div className="sign-back hero min-h-screen ">
      <div className="hero-content flex flex-col md:flex-row-reverse w-full lg:gap-10">
        <div className="text-center md:w-full lg:text-left max-w-lg">
          <Lottie animationData={loginAnime}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-96">
          <div className='text-left ml-10 text-[#ed7966] text-2xl md:text-4xl font-bold'>

            Sign Up
          </div>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ed7966] font-semibold">Name</span>
              </label>
              <input {...register("name", { required: true })} type="text" placeholder="email" className="input input-bordered border-[#ed7966]  " required />
            </div>
            {errors.name && <span className='text-red-700 font-bold'>Name is required</span>}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ed7966] font-semibold">Email Address</span>
              </label>
              <input  {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered border-[#ed7966]  " required />
              {errors.name && <span className='text-red-700 font-bold'>Email is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ed7966] font-semibold">Password</span>
              </label>
              <input  {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/
              })} type="password" name="password" placeholder="password" className="input input-bordered border-[#ed7966] " />
              {errors.name && <span className='text-red-700 font-bold'>Password is required</span>}
              {errors.password?.type === 'minLength' && <p className='text-red-600'> Password must be 8 character</p>
              }
              {errors.password?.type === 'maxLength' && <p className='text-red-600'> Password must be less than 20 character</p>
              }
              {errors.password?.type === 'pattern' && <p className='text-red-600'> Password must have one uppercase , one lowercase and one number</p>
              }
            </div>
            <div className='mt-7'>
              <label htmlFor='image' className='file-label  mb-2 text-sm text-white rounded-xl '>
                <div className="flex justify-center items-center mx-auto">
                  <GoUpload className="text-2xl font-bold" />
                  <p>Upload Profile</p>
                </div>

              </label>
              <input
                {...register("image", { required: true })}
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />

            </div>
            {errors.image && <span className='text-red-700 font-bold'>image is required</span>}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#ed7966] hover:bg-yellow-800 text-white font-semibold">Sign UP</button>
            </div>
          </form>


          <p className='text-center'><small className='text-[#ed7966]'>Don't Have an account? <Link to="/login"><span className='font-bold'>Login</span></Link></small></p>
          {/* social login  */}
          <button className="btn border border-[#ed7966] text-[#ed7966] my-4 btn-outline w-56 ml-10">
            <FcGoogle className="text-3xl"></FcGoogle>
            Google
          </button>
        </div>
      </div >
    </div >
  );
};

export default SignUp;
