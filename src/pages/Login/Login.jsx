/* eslint-disable react/no-unescaped-entities */
// import "../SignUp/signUp.css";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import loginAnime from '../../assets/Animation - 1705578701251.json'
const Login = () => {
    const { userLogin } = useAuth()
    const navigate = useNavigate()
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
                toast.success({
                    icon: "success",
                    title: "User Login Successfully.",
                });
                reset();
                navigate("/")

            })
            .catch((err) => {
                console.log(err.message);
                toast.error({
                    icon: "error",
                    title: err.message,
                });
            })
    }

    return (
        <div className="sign-back hero min-h-screen ">
            <div className="hero-content flex flex-col md:flex-row-reverse w-full lg:gap-10">
                <div className="text-center md:w-full lg:text-left max-w-96 lg:max-w-lg px-3 py-2">
                    <Lottie animationData={loginAnime}></Lottie>
                </div>
                <div className="card flex-shrink-0 w-96">
                    <div className='text-left ml-10 text-[#ed7966] text-2xl md:text-4xl font-bold'>

                        Log In
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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

                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#ed7966] hover:bg-yellow-800 text-white font-semibold">Sign UP</button>
                        </div>
                    </form>


                    <p className='text-center'><small className='text-[#ed7966]'>Don't Have an account? <Link to="/signUp"><span className='font-bold'>Sign UP</span></Link></small></p>
                    {/* social login  */}
                    <button className="btn border border-yellow-600 text-yellow-600 my-4 btn-outline w-56 hover:bg-[#ed7966] ml-10">
                        <FcGoogle className="text-3xl"></FcGoogle>
                        Google
                    </button>
                </div>
            </div >
        </div >
    );
}

export default Login;
