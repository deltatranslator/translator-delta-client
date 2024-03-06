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
import axiosSecure from "../../../api";
import toast from "react-hot-toast";
import IsModal from "../../../hooks/IsModal";

const UserProfile = () => {
  const { open } = useContext(OpenContext);
  const { isUser, refetch } = useUser();
  const { user } = useAuth();

  const handelAddressUpdate = (e) => {
    e.preventDefault();
    const address = e.target.address.value;
    const updateUser = { address };
    try {
      axiosSecure
        .put(`/users/address/${isUser._id}`, updateUser)
        .then(() => {
          refetch();
          toast.success("Updated Done!");
        })
        .catch(() => {
          toast.error("Updated Failed!");
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handelWorkUpdate = (e) => {
    e.preventDefault();
    const work = e.target.work.value;
    const updateUser = { work };
    try {
      axiosSecure
        .put(`/users/work/${isUser._id}`, updateUser)
        .then(() => {
          refetch();
          toast.success("Updated Done!");
        })
        .catch(() => {
          toast.error("Updated Failed!");
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handelHomeUpdate = (e) => {
    e.preventDefault();
    const home = e.target.home.value;
    const updateUser = { home };
    try {
      axiosSecure
        .put(`/users/home/${isUser._id}`, updateUser)
        .then(() => {
          refetch();
          toast.success("Updated Done!");
        })
        .catch(() => {
          toast.error("Updated Failed!");
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handelGenderDate = (e) => {
    e.preventDefault();
    const gender = e.target.gender.value;
    const updateUser = { gender };
    try {
      axiosSecure
        .put(`/users/gender/${isUser._id}`, updateUser)
        .then(() => {
          refetch();
          toast.success("Updated Done!");
        })
        .catch(() => {
          toast.error("Updated Failed!");
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handelBirthDate = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const updateUser = { date };
    try {
      axiosSecure
        .put(`/users/birthday/${isUser._id}`, updateUser)
        .then(() => {
          refetch();
          toast.success("Updated Done!");
        })
        .catch(() => {
          toast.error("Updated Failed!");
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handelName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const updateUser = { name };
    try {
      axiosSecure
        .put(`/users/${isUser._id}`, updateUser)
        .then(() => {
          refetch();
          toast.success("Updated Done!");
        })
        .catch(() => {
          toast.error("Updated Failed!");
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <section className="dark:bg-slate-900 w-full bg-[#E9F1FA]  py-8 font-delta-v2">
        {/* Personal Info */}
        <section
          className={`${
            !open ? "w-[95%]" : "w-[80%]"
          } space-y-2 text-center md:px-20`}
        >
          <h3 className=" text-4xl font-medium text-slate-900 dark:text-slate-50">
            Personal info
          </h3>
          <p className="text-center font-medium text-slate-600 dark:text-slate-50">
            Info about you and your preferences across Delta services
          </p>
        </section>
        <section
          className={`md:flex flex-grow-0 ml-[10px] items-center mt-0 md:mt-8 ${
            !open ? "w-[95%] mx-auto" : "lg:w-[79%] mx-auto md:w-[64%]"
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
          className={`text-start p-1 md:ml-5 ${
            !open
              ? "w-[95%] mt-0 ml-[7px]"
              : "lg:w-[82%] md:w-[64%] mx-auto md:mt-5"
          } rounded-md border shadow-md md:p-5  md:mt-0 dark:bg-[#213d5e] bg-slate-100`}
        >
          <div className="items-center justify-between">
            <div className=" flex justify-start">
              <div className="avatar">
                <div className="w-40 mask mask-squircle ">
                  <img
                    src={(isUser && isUser?.photo) || user?.photoURL}
                    alt="Profile Picture"
                  />
                </div>
              </div>
            </div>
            <div className=" space-y-12 w-full mt-5">
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
            <hr className="mt-5" />
            <section>
              <div
                onClick={() => document.getElementById("nameModal").showModal()}
                className="flex items-center justify-between text-slate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-[#24ABE1] p-5 rounded-md hover:shadow-xl hover:cursor-pointer"
              >
                <div className=" md:flex items-center text-sm md:gap-[80px] lg:gap-[213px] gap-[50px]">
                  <p>Name</p>
                  <p className="text-xl md:text-sm">
                    {isUser && isUser.name.slice(0, 10)
                      ? isUser.name.slice(0, 10)
                      : user && user.displayName.slice(0, 10)
                      ? user.displayName.slice(0, 10)
                      : "Not Available"}
                  </p>
                  <IsModal
                    title="Changes to your name will be reflected across your
                Delta Account."
                    label="Name:"
                    modalId="nameModal"
                    onSubmit={handelName}
                    type="name"
                    id="name"
                    name="name"
                    defaultValue={isUser ? isUser.name : "Set Your Name"}
                  />
                </div>
                <div>
                  <FaChevronRight className=" text-2xl" />
                </div>
              </div>
            </section>
            <hr />
            <div
              onClick={() =>
                document.getElementById("birthdayModal").showModal()
              }
              className="flex items-center justify-between text-slate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-[#24ABE1] p-5 rounded-md hover:shadow-xl hover:cursor-pointer"
            >
              <div className=" md:flex items-center text-sm md:gap-[70px] lg:gap-[195px] gap-[50px]">
                <p>Birthday</p>
                <p className="text-xl md:text-sm">
                  {isUser ? isUser.date : "Set Your Birthday"}
                </p>
                <IsModal
                  title="Your birthday may be used for account security and
              personalization across Delta services."
                  modalId="birthdayModal"
                  onSubmit={handelBirthDate}
                  defaultValue={isUser ? isUser.date : "None"}
                  label="Birthday:"
                  type="date"
                  id="date"
                  name="date"
                />
              </div>
              <div>
                <FaChevronRight className=" text-2xl" />
              </div>
            </div>
            <hr />
            <div
              onClick={() => document.getElementById("genderModal").showModal()}
              className=" flex items-center justify-between text-sate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-[#24ABE1] p-5 rounded-md hover:shadow-xl hover:cursor-pointer"
            >
              <div className=" md:flex items-center text-sm md:gap-[80px] lg:gap-[205px] gap-[50px]">
                <p>Gender</p>
                <p className="text-xl md:text-sm">
                  {isUser && isUser.gender
                    ? isUser.gender.toUpperCase()
                    : user && user.gender
                    ? user.gender
                    : "Not Available"}
                </p>
              </div>
              <div>
                <FaChevronRight className="text-2xl" />
              </div>
              <dialog id="genderModal" className="modal">
                <div className="modal-box bg-none bg-transparent rounded-3xl">
                  <form method="dialog">
                    <button className="btn shadow-2xl bg-[#213E5E] hover:bg-red-500 hover:text-black btn-sm btn-circle btn-ghost text-red-500 text-xl font-bold absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <section className=" bg-[#E9F1FA] dark:bg-[#213E5E] rounded-md">
                    <div className="bg-[#1F9DE1] p-2">
                      <h2 className="text-start text-[#E9F1FA] text-xl font-medium py-2">
                        Your gender may be used for personalization across
                        Google services.
                      </h2>
                    </div>
                    <div className=" py-5 px-3">
                      <form
                        onSubmit={handelGenderDate}
                        className="items-center gap-3"
                      >
                        <div className="relative w-full py-6 px-5">
                          <label className="label text-xl font-medium">
                            Gender:
                          </label>
                          <select
                            name="gender"
                            id="gender"
                            className="appearance-none dark:text-white w-full border-b-2 border-b-slate-500 border-slate-50 focus:border-blue-500 bg-transparent text-gray-700 py-2 px-4 focus:outline-none focus:ring-0"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="thirdGender">Third Gender</option>
                            <option value="twoSpirit">Two-spirit</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-end gap-3 text-center py-5 px-5">
                          <div className="">
                            <form method="dialog">
                              <button className="w-full border-none text-xl text-[#213E5E] hover:shadow-2xl hover:shadow-red-500 bg-red-200 hover:bg-red-700 hover:text-white rounded-full px-8 py-2">
                                Cancel
                              </button>
                            </form>
                          </div>
                          <div className="">
                            <button
                              type="submit"
                              className=" bg-[#1F9DE1] text-xl hover:shadow-2xl  w-full hover:shadow-[#1F9DE1] text-white border-none hover:bg-green-600 rounded-full px-8 py-2"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </dialog>
            </div>
          </div>
        </section>
        {/* Contact Info */}
        <ContactInfo open={open} />
        {/* Addresses Info */}
        <section
          className={`text-start p-1 md:ml-5 ${
            !open
              ? "w-[95%] mt-0 ml-[7px]"
              : "lg:w-[82%] md:w-[64%] mx-auto md:mt-5"
          } rounded-md border shadow-md md:p-5 dark:bg-[#213d5e] bg-slate-100 mt-8`}
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
          <div
            onClick={() => document.getElementById("homeModal").showModal()}
            className="flex pb-5 items-center justify-between text-slate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-[#24ABE1] p-5 rounded-md hover:shadow-xl hover:cursor-pointer"
          >
            <div className="md:flex items-center text-sm gap-[50px] md:gap-[80px] lg:gap-[208px] mt-0 md;mt-10">
              <p>Home</p>
              <p className="text-xl md:text-sm">
                {isUser ? isUser?.home : "None"}
              </p>
              <IsModal
                title="Changes to your Home Ip will be reflected across your
                Delta Account."
                modalId="homeModal"
                label="Home Ip:"
                onSubmit={handelHomeUpdate}
                type="text"
                id="home"
                name="home"
                defaultValue={isUser ? isUser.home : "Set Your Home Ip"}
              />
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
          <hr />
          <div
            onClick={() => document.getElementById("workModal").showModal()}
            className="flex items-center justify-between text-slate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-[#24ABE1] p-5 rounded-md hover:shadow-xl hover:cursor-pointer"
          >
            <div className="md:flex items-center text-sm gap-[50px] md:gap-[80px] lg:gap-[208px]">
              <p>Work</p>
              <p className="text-xl md:text-sm">
                {isUser ? isUser.work : "Set Your work"}
              </p>
              <IsModal
                title="Changes to your work will be reflected across your
                Delta Account."
                modalId="workModal"
                label="Work:"
                onSubmit={handelWorkUpdate}
                type="text"
                id="work"
                name="work"
                defaultValue={isUser ? isUser.work : "Set Your work Ip"}
              />
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
          <hr />
          <div
            onClick={() => document.getElementById("addressModal").showModal()}
            className="flex items-center justify-between text-slate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-[#24ABE1] p-5 rounded-md hover:shadow-xl hover:cursor-pointer"
          >
            <div className="md:flex items-center text-sm gap-[50px] md:gap-[30px] lg:gap-[155px]">
              <p>Other Address</p>
              <p className="text-xl md:text-sm">
                {isUser ? isUser.address : "Set your address"}
              </p>
              <IsModal
                title="Changes to your address will be reflected across your
                Delta Account."
                modalId="addressModal"
                label="Other Address:"
                onSubmit={handelAddressUpdate}
                type="text"
                id="address"
                name="address"
                defaultValue={isUser ? isUser.address : "Set your address"}
              />
            </div>
            <div>
              <FaChevronRight className=" text-2xl" />
            </div>
          </div>
        </section>
        {/* Your occupation */}
        <section
          className={`text-start p-1 md:ml-5 ${
            !open
              ? "w-[95%] mt-0 ml-[7px]"
              : "lg:w-[82%] md:w-[64%] mx-auto md:mt-5"
          } rounded-md border shadow-md md:p-5  dark:bg-[#213d5e] bg-slate-100 mt-8`}
        >
          <div>
            <Occupation />
          </div>
        </section>
      </section>
      {/* Footer section */}
      <section className=" py-8 flex items-center justify-center dark:bg-slate-900">
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
