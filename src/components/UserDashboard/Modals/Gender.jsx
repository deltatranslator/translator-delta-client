import { FaChevronRight } from "react-icons/fa";
import ReactiveButton from "reactive-button";
import axiosSecure from "../../../Api";
import toast from "react-hot-toast";
import useProfile from "../../../hooks/useProfile";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Gender = () => {
  const [state, setState] = useState("idle");
  const { isProfile, refetch } = useProfile();
  const { user } = useAuth();

  const handelSave = async (e) => {
    e.preventDefault();
    const email = user.email;
    const gender = e.target.gender.value;
    const userGender = { gender, email };
    await axiosSecure
      .post("/profile", userGender)
      .then((res) => {
        console.log("gender==", res.data);
        toast.success("Gender Added!");
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div>
      <div
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className=" flex items-center justify-between text-slate-900 dark:text-slate-50"
      >
        <div className=" flex items-center text-sm gap-[40px] md:gap-[200px]">
          <p>Gender</p>
          <p>{isProfile?.userGender ? isProfile?.userGender : "None"}</p>
        </div>
        <div>
          <FaChevronRight className=" text-2xl" />
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <section className="border rounded-md p-2">
            <h2 className=" font-medium text-slate-800 py-2">
              Update your Gender in Delta Account
            </h2>
            <div className=" py-5 px-3">
              <form onSubmit={handelSave}>
                <div className="relative w-full">
                  <select
                    name="gender"
                    id="gender"
                    className="appearance-none w-full border-b-2 border-b-slate-500 border-slate-50 focus:border-blue-500 bg-transparent text-gray-700 py-2 px-4 focus:outline-none focus:ring-0"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="thirdGender">Third Gender</option>
                    <option value="twoSpirit">Two-spirit</option>
                  </select>
                </div>
                <div className=" flex items-center justify-end mt-2">
                  <ReactiveButton
                    buttonState={state}
                    idleText="Submit"
                    loadingText="Loading"
                    successText="Saved"
                    type="submit"
                    onClick={onClickHandler}
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </dialog>
    </div>
  );
};

export default Gender;
