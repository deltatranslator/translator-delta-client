import { MdVerified } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";
import useProfile from "../../../hooks/useProfile";
import toast from "react-hot-toast";
import axiosSecure from "../../../api";
import IsModal from "../../../hooks/IsModal";

const ContactInfo = ({ open }) => {
  const { isUser } = useUser();
  const { user } = useAuth();
  const { isProfile, refetch } = useProfile();

  const handelMailUpdate = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const updateUser = { email };
    try {
      axiosSecure
        .put(`/users/mail/${isUser._id}`, updateUser)
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
    <div>
      <section
        className={`bg-slate-100 dark:bg-[#213d5e] md:ml-5 ml-[10px] ${
          !open ? "w-[97%]" : "lg:w-[82%] md:w-[79%]"
        } text-start rounded-md border md:p-5 p-2 mt-10 w-full shadow-md`}
      >
        <div>
          <h2 className="text-3xl font-medium text-slate-900 dark:text-slate-50">
            Contact Info
          </h2>
        </div>
        <div
          onClick={() => document.getElementById("emailModal").showModal()}
          className="flex items-center justify-between text-slate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-[#24ABE1] p-5 rounded-md hover:shadow-xl hover:cursor-pointer"
        >
          <div className="flex items-center text-sm gap-[20px] md:gap-[213px] mt-10">
            <p>Email</p>
            <div className="flex md:gap-2 items-center">
              <p>{user && user.email ? user.email : "Email Not Available"}</p>
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
          <div className=" mt-10">
            <FaChevronRight className="text-2xl" />
          </div>
          <IsModal
            title="Changes to your name will be reflected across your
                Delta Account."
            modalId="emailModal"
            onSubmit={handelMailUpdate}
            type="email"
            id="email"
            name="email"
            defaultValue={user ? user.email : "Set Your Email"}
          />
        </div>
        <hr className="mt-5 mb-5" />
        <div
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="flex items-center justify-between text-slate-900 dark:text-slate-50"
          role="button"
        >
          <div className="flex items-center text-sm md:gap-[208px] gap-[50px]">
            <p>Phone</p>
            <p>{isProfile ? <p>{isProfile?.number}</p> : <p>None</p>}</p>
          </div>
          <div>
            <FaChevronRight className=" text-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
