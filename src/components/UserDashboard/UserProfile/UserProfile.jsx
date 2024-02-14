import Lottie from "lottie-react";
import userAnimation from "../../../assets/userProfile.json";
import useUser from "../../../hooks/useUser";
import { FaChevronRight } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
  const [isUser] = useUser();
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <section className=" py-20">
        {/* Personal Info */}
        <section className=" text-center space-y-2">
          <h3 className=" text-4xl font-medium text-slate-50">Personal info</h3>
          <p className=" font-medium text-slate-300">
            Info about you and your preferences across Delta services
          </p>
        </section>
        <section className="md:flex flex-grow-0 items-center ml-10">
          <div className="space-y-2 flex-1">
            <h2 className="text-2xl font-medium text-slate-50">
              Your profile info in Delta services
            </h2>
            <p className=" text-slate-200 w-10/12">
              Personal info and options to manage it. You can make some of this
              info, like your contact details, visible to others so they can
              reach you easily. You can also see a summary of your profiles.
            </p>
          </div>
          <div className="overflow-hidden">
            <Lottie className="w-full md:w-80" animationData={userAnimation} />
          </div>
        </section>
        <section className=" rounded-md border p-5 ml-10">
          <div className=" md:flex flex-grow-0 items-center justify-between">
            <div className=" space-y-12">
              <div>
                <h3 className=" text-2xl text-slate-50 font-medium">
                  Basic info
                </h3>
                <p className=" text-slate-50 text-sm">
                  Some info may be visible to other people using Google
                  services.
                </p>
              </div>
              <div className=" text-sm flex items-center gap-40 text-slate-50">
                <p>Profile Picture</p>
                <p>A profile picture helps personaliZe your account</p>
              </div>
            </div>
            <div>
              <div className="avatar">
                <div className="w-40 mask mask-squircle">
                  <img
                    src={(isUser && isUser?.photo) || user?.photoURL}
                    alt="Profile Picture"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr className="mt-5 mb-5" />
            <div className=" flex items-center justify-between text-slate-50">
              <div className=" flex items-center text-sm gap-[213px]">
                <p>Name</p>
                <p>
                  {isUser && isUser.name
                    ? isUser.name
                    : user && user.displayName
                    ? user.displayName
                    : "Name Not Available"}
                </p>
              </div>
              <div>
                <FaChevronRight className=" text-2xl" />
              </div>
            </div>
            <hr className="mt-5 mb-5" />
            <div className=" flex items-center justify-between text-slate-50">
              <div className=" flex items-center text-sm gap-[213px]">
                <p>Email</p>
                <p>
                  {isUser && isUser.email
                    ? isUser.email
                    : user && user.email
                    ? user.email
                    : "Email Not Available"}
                </p>
              </div>
              <div>
                <FaChevronRight className=" text-2xl" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default UserProfile;
