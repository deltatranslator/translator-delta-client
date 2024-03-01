import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";
import toast from "react-hot-toast";
import './social.css'
const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      console.log(result.user.email);
      axiosSecure.patch(`/monthly-user-count/${result.user?.email}`)
        .then(res => res.data)
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
      };
      axiosSecure.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
        toast.success("Successfully logged in");
      });
    });
  };
  return (
    <div>
      <div>
        {/* <div className="divider"></div> */}
        <button
          onClick={handleGoogleSignIn}
          className="btn social-login border border-[#ed7966] text-[#ed7966] my-4 btn-outline w-[300px] lg:w-[380px]  hover:bg-[#303179]"
        >
          <FcGoogle className="text-3xl"></FcGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
