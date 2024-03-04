import Lottie from "lottie-react";
import userAnimation from "../../../assets/userProfile.json";
import useUser from "../../../hooks/useUser";
import { FaChevronRight } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import Occupation from "./Occupation";
import { Link } from "react-router-dom";
import ContactInfo from "../Modals/ContactInfo";
import { useContext } from "react";
import { OpenContext } from "../../../Context/useOpen";
import Gender from "../Modals/Gender";

const UserProfile = () => {
  const { open } = useContext(OpenContext);
  const { isUser } = useUser();
  const { user } = useAuth();

  return (
    <>
      <section className="dark:bg-slate-800 w-full bg-[#E9F1FA] py-8 font-delta-v2">
        {/* Personal Info */}
        <section
          className={` ${
            !open ? "w-[100%]" : "w-[90%]"
          } space-y-2 text-center md:px-8`}
        >
          <h3 className=" text-4xl font-medium text-slate-900 dark:text-slate-50">
            Personal info
          </h3>
          <p className="text-center font-medium text-slate-600 dark:text-slate-50">
            Info about you and your preferences across Delta services
          </p>
        </section>
        <section
          className={`md:flex flex-grow-0 ml-5 items-center mt-0 md:mt-8 ${
            !open ? "w-[100%]" : "lg:w-[89%] md:w-[85%]"
          }`}
        >
          <div className="overflow-hidden md:order-last">
            <Lottie
              className="w-full lg:w-80 md:w-64 "
              animationData={userAnimation}
            />
          </div>
          <div className="space-y-2 flex-1">
            <h2 className="text-2xl text-start font-medium text-slate-900 dark:text-slate-50">
              Your profile info in Delta services
            </h2>
            <p className="text-start text-slate-700 dark:text-slate-50 md:w-10/12 w-full">
              Personal info and options to manage it. You can make some of this
              info, like your contact details, visible to others so they can
              reach you easily. You can also see a summary of your profiles.
            </p>
          </div>
        </section>
        {/* Basic info */}
        <section
          className={`text-start md:ml-5 ml-[10px] ${
            !open ? "w-[100%] mt-0" : "lg:w-[86%] md:w-[79%] md:mt-5"
          } rounded-md border shadow-md md:p-5 p-2 md:mt-0 bg-slate-100`}
        >
          <div className="items-center justify-between">
            <div className=" flex justify-end">
              <div className="avatar">
                <div className="w-40 mask mask-squircle ">
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
                  {isUser && isUser.name.slice(0, 10)
                    ? isUser.name.slice(0, 10)
                    : user && user.displayName.slice(0, 10)
                    ? user.displayName.slice(0, 10)
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
            {/* <div className=" flex items-center justify-between text-slate-900 dark:text-slate-50">
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
            </div> */}
            <Gender />
          </div>
        </section>
        {/* Contact Info */}
        <ContactInfo open={open} />
        {/* Addresses Info */}
        <section
          className={`text-start md:ml-5 ml-[10px] ${
            !open ? "w-[100%]" : "lg:w-[86%] md:w-[79%]"
          } rounded-md border md:p-5 p-2 mt-10 w-full shadow-md bg-slate-100`}
        >
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
        <section
          className={`bg-slate-100 md:ml-5 ml-[10px] ${
            !open ? "w-[100%]" : "lg:w-[86%] md:w-[79%]"
          } rounded-md border shadow-md md:p-5 p-1 mt-10 w-full`}
        >
          <div className=" -z-10">
            <Occupation />
          </div>
        </section>
      </section>
      {/* Footer section */}
      <section className=" py-8 flex items-center justify-center">
        <div>
          <Link
            className="btn bg-[#24ABE5] border-none text-white hover:bg-slate-50 hover:text-slate-800 hover:shadow-lg hover:shadow-blue-500"
            to="/"
          >
            Go to Delta Translate!
          </Link>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
