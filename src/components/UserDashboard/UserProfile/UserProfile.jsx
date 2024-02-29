import Lottie from "lottie-react";
import userAnimation from "../../../assets/userProfile.json";
import useUser from "../../../hooks/useUser";
import { FaChevronRight } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import Occupation from "./Occupation";
import { Link } from "react-router-dom";
import ContactInfo from "../Modals/ContactInfo";

const UserProfile = () => {
  const { isUser } = useUser();
  // console.log(isUser?.role);
  const { user } = useAuth();

  return (
    <>
      <section className="dark:bg-slate-800 w-full bg-[#EEF1F9] py-8">
        {/* Personal Info */}
        <section className="space-y-2 text-start px-2 ">
          <h3 className=" text-4xl font-medium text-slate-900 dark:text-slate-50">
            Personal info
          </h3>
          <p className="text-start font-medium text-slate-600 dark:text-slate-50">
            Info about you and your preferences across Delta services
          </p>
        </section>
        <section className="md:flex flex-grow-0 items-center">
          <div className="overflow-hidden md:order-last">
            <Lottie className="w-full lg:w-80 md:w-64" animationData={userAnimation} />
          </div>
          <div className="space-y-2 flex-1">
            <h2 className="text-2xl text-start px-1 font-medium text-slate-900 dark:text-slate-50">
              Your profile info in Delta services
            </h2>
            <p className="text-start px-2 text-slate-700 dark:text-slate-50 md:w-10/12 w-full">
              Personal info and options to manage it. You can make some of this
              info, like your contact details, visible to others so they can
              reach you easily. You can also see a summary of your profiles.
            </p>
          </div>
        </section>
        {/* Basic info */}
        <section className="text-start px-2 rounded-md border shadow-md md:p-5 p-2 md:ml-10 md:w-10/12 w-full mt-8 md:mt-0">
          <div className="items-center justify-between">
            <div className=" flex justify-end">
              <div className="avatar">
                <div className="w-40 mask mask-squircle">
                  <img
                    src={(isUser && isUser?.photo) || user?.photoURL}
                    alt="Profile Picture"
                  />
                </div>
              </div>
            </div>
            <div className=" space-y-12 w-full">
              <div>
                <h3 className=" text-3xl text-slate-900 dark:text-slate-50 font-medium">
                  Basic info
                </h3>
                <p className=" text-slate-700 dark:text-slate-50 text-sm">
                  Some info may be visible to other people using Google
                  services.
                </p>
              </div>
              <div className="text-sm flex items-center md:gap-40 text-slate-900 dark:text-slate-50">
                <p>Profile Picture</p>
                <p>A profile picture helps personaliZe your account</p>
              </div>
            </div>
          </div>
          <div>
            <hr className="mt-5 mb-5" />
            <div className=" flex items-center justify-between text-slate-900 dark:text-slate-50">
              <div className=" flex items-center text-sm md:gap-[213px] gap-[50px]">
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
            <div className=" flex items-center justify-between text-slate-900 dark:text-slate-50">
              <div className=" flex items-center text-sm gap-[33px] md:gap-[193px]">
                <p>Birthday</p>
                <p>January 26, 2000</p>
              </div>
              <div>
                <FaChevronRight className=" text-2xl" />
              </div>
            </div>
            <hr className="mt-5 mb-5" />
            <div className=" flex items-center justify-between text-slate-900 dark:text-slate-50">
              <div className=" flex items-center text-sm gap-[40px] md:gap-[200px]">
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
        <ContactInfo />
        {/* Addresses Info */}
        <section className="text-start px-2 rounded-md border md:p-5 p-2 md:ml-10 mt-10 md:w-10/12 w-full shadow-md">
          <div>
            <h2 className="text-3xl font-medium text-slate-900 dark:text-slate-50">
              Addresses
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-50 mt-2">
              Your home and work addresses are used to personalize your
              experiences across Delta products, and for more relevant ads.
            </p>
            <p className=" text-sm text-slate-700 dark:text-slate-50 font-bold mt-5">
              You can also add addresses to your Google Profile. You can choose
              if others see your profile addresses.
            </p>
          </div>
          <div className=" flex items-center justify-between text-slate-900 dark:text-slate-50">
            <div className=" flex items-center text-sm gap-[50px] md:gap-[208px] mt-10">
              <p>Home</p>
              <p>(23.759356800000003, 90.3591746)</p>
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
          <hr className="mt-5 mb-5" />
          <div className="flex items-center justify-between text-slate-900 dark:text-slate-50">
            <div className="flex items-center text-sm gap-[50px] md:gap-[208px]">
              <p>Work</p>
              <p>Student</p>
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
          <hr className="mt-5 mb-5" />
          <div className="flex items-center justify-between text-slate-900 dark:text-slate-50">
            <div className="flex items-center text-sm gap-[50px] md:gap-[155px]">
              <p>Other Address</p>
              <p>None</p>
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
        </section>
        {/* Your occupation */}
        <section className="rounded-md border shadow-md md:p-5 p1 md:ml-10 mt-10 md:w-10/12 w-full">
          <div>
            <Occupation />
          </div>
        </section>
      </section>
      {/* Footer section */}
      <section className=" py-8 flex items-center justify-center">
        <div>
          <Link className=" text-blue-400 text-xl font-medium underline" to="/">
            Go to Delta Translate!
          </Link>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
