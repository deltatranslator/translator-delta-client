import '../SignUp/signUp.css'
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
const Login = () => {

    const {
        register, handleSubmit, reset, formState: { errors },
    } = useForm()
    const onSubmit = (data ) => {
        const email = data.email;
        const password = data.password
        console.log(email , password);
        reset()
    }

    return (
        <div className="signUp">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left text-yellow-500 ">
                        <h1 className="text-5xl font-bold ">Welcome Back!</h1>
                        <p className="py-6 text-white w-11/12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm lg:max-w-lg">
                        <h1 className="text-5xl font-bold text-yellow-600 ml-10">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-500 font-semibold">Email Address</span>
                                </label>
                                <input  {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered border-yellow-600  " required />
                                {errors.name && <span className='text-red-700 font-bold'>Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-500 font-semibold">Password</span>
                                </label>
                                <input  {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/
                                })} type="password" name="password" placeholder="password" className="input input-bordered border-yellow-600 " />
                                {errors.name && <span className='text-red-700 font-bold'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'> Password must be 8 character</p>
                                }
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'> Password must be less than 20 character</p>
                                }
                                {errors.password?.type === 'pattern' && <p className='text-red-600'> Password must have one uppercase , one lowercase and one number</p>
                                }
                            </div>
                        
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-yellow-600 hover:bg-yellow-800 text-white font-semibold">Sign UP</button>
                            </div>
                        </form>
                        <button className="btn border border-yellow-600 text-yellow-600 my-4 btn-outline w-56 ml-10">
                            <FcGoogle className="text-3xl"></FcGoogle>
                            Google
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;