import { MdVerified } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";
import ReactiveButton from "reactive-button";
import { useState } from "react";
import axiosSecure from "../../../api";
import useProfile from "../../../hooks/useProfile";

const ContactInfo = () => {
  const [state, setState] = useState("idle");

  const { isUser } = useUser();
  const { user } = useAuth();
  const { isProfile } = useProfile();
  console.log("isProfile:", isProfile);

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  const handelSave = async (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const email = user.email;
    const userNumber = { number, email };
    await axiosSecure
      .post("/profile", userNumber)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="rounded-md border md:p-5 p-1 md:ml-10 mt-10 md:w-10/12 w-full shadow-md">
        <div>
          <h2 className=" text-3xl font-medium text-slate-900 dark:text-slate-50">
            Contact Info
          </h2>
        </div>
        <div className="flex items-center justify-between text-slate-900 dark:text-slate-50">
          <div className="flex items-center text-sm gap-[20px] md:gap-[213px] mt-10">
            <p>Email</p>
            <div className="flex md:gap-2 items-center">
              <p>
                {isUser && isUser.email
                  ? isUser.email
                  : user && user.email
                  ? user.email
                  : "Email Not Available"}
              </p>
              <p>
                {user?.emailVerified == true ? (
                  <div className="tooltip tooltip-success" data-tip="Verified">
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
            <FaChevronRight className="text-2xl" />
          </div>
        </div>
        <hr className="mt-5 mb-5" />
        <div
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="flex items-center justify-between text-slate-900 dark:text-slate-50"
          role="button"
        >
          <div className="flex items-center text-sm md:gap-[208px] gap-[50px]">
            <p>Phone</p>
            <p>01770064053</p>
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
                This phone number has been added to your Delta Account
              </h2>
              <div className=" py-5 px-3">
                <form onSubmit={handelSave}>
                  <div className="relative">
                    <input
                      type="number"
                      name="number"
                      id="number"
                      className="appearance-none border-b-2 border-slate-50 focus:border-blue-500 bg-transparent text-gray-700 py-2 px-4 focus:outline-none focus:ring-0"
                      placeholder="Enter a number"
                    />
                  </div>
                  <div className=" flex items-center justify-end">
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
      </section>
    </div>
  );
};

export default ContactInfo;
