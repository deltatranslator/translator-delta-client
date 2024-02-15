import Lottie from "lottie-react";
import userAnimation from "../../../assets/userProfile.json";
import useUser from "../../../hooks/useUser";
import { FaChevronRight } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { MdVerified } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import Occupation from "./Occupation";

const UserProfile = () => {
  const { isUser } = useUser();
  // console.log(isUser);
  const { user } = useAuth();

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
        <section className="md:flex flex-grow-0 items-center ml-10 w-10/12">
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
        {/* Basic info */}
        <section className="rounded-md border p-5 ml-10 w-10/12">
          <div className=" md:flex flex-grow-0 items-center justify-between">
            <div className=" space-y-12">
              <div>
                <h3 className=" text-3xl text-slate-50 font-medium">
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
                    : "Not Available"}
                </p>
              </div>
              <div>
                <FaChevronRight className=" text-2xl" />
              </div>
            </div>
            <hr className="mt-5 mb-5" />
            <div className=" flex items-center justify-between text-slate-50">
              <div className=" flex items-center text-sm gap-[193px]">
                <p>Birthday</p>
                <p>January 26, 2000</p>
              </div>
              <div>
                <FaChevronRight className=" text-2xl" />
              </div>
            </div>
            <hr className="mt-5 mb-5" />
            <div className=" flex items-center justify-between text-slate-50">
              <div className=" flex items-center text-sm gap-[200px]">
                <p>Gender</p>
                <p>
                  {isUser && isUser.gender
                    ? isUser.gender
                    : user && user.gender
                    ? user.gender
                    : "Not Available"}
                </p>
              </div>
              <div>
                <FaChevronRight className=" text-2xl" />
              </div>
            </div>
          </div>
        </section>
        {/* Contact Info */}
        <section className="rounded-md border p-5 ml-10 mt-10 w-10/12">
          <div>
            <h2 className=" text-3xl font-medium text-slate-50">
              Contact Info
            </h2>
          </div>
          <div className=" flex items-center justify-between text-slate-50">
            <div className=" flex items-center text-sm gap-[213px] mt-10">
              <p>Email</p>
              <div className="flex gap-2 items-center">
                <p>
                  {isUser && isUser.email
                    ? isUser.email
                    : user && user.email
                    ? user.email
                    : "Email Not Available"}
                </p>
                <p>
                  {user?.emailVerified == true ? (
                    <div
                      className="tooltip tooltip-success"
                      data-tip="Verified"
                    >
                      <MdVerified className=" text-green-500 text-2xl" />
                    </div>
                  ) : (
                    <div
                      data-tip="Non Verified"
                      className="tooltip tooltip-error"
                    >
                      <GiCrossMark className=" text-red-600 text-2xl" />
                    </div>
                  )}
                </p>
              </div>
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
          <hr className="mt-5 mb-5" />
          <div className="flex items-center justify-between text-slate-50">
            <div className="flex items-center text-sm gap-[208px]">
              <p>Phone</p>
              <p>01770064053</p>
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
        </section>
        {/* Addresses Info */}
        <section className="rounded-md border p-5 ml-10 mt-10 w-10/12">
          <div>
            <h2 className=" text-3xl font-medium text-slate-50">Addresses</h2>
            <p className=" text-sm text-slate-200 mt-2">
              Your home and work addresses are used to personalize your
              experiences across Delta products, and for more relevant ads.
            </p>
            <p className=" text-sm text-slate-50 font-bold mt-5">
              You can also add addresses to your Google Profile. You can choose
              if others see your profile addresses.
            </p>
          </div>
          <div className=" flex items-center justify-between text-slate-50">
            <div className=" flex items-center text-sm gap-[208px] mt-10">
              <p>Home</p>
              <p>(23.759356800000003, 90.3591746)</p>
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
          <hr className="mt-5 mb-5" />
          <div className="flex items-center justify-between text-slate-50">
            <div className="flex items-center text-sm gap-[208px]">
              <p>Work</p>
              <p>Student</p>
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
          <hr className="mt-5 mb-5" />
          <div className="flex items-center justify-between text-slate-50">
            <div className="flex items-center text-sm gap-[155px]">
              <p>Other Address</p>
              <p>None</p>
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
        </section>
        {/* Your occupation */}
        <section className="rounded-md border p-5 ml-10 mt-10 w-10/12">
          <div>
            <Occupation />
          </div>
        </section>
      </section>
    </>
  );
};

export default UserProfile;
