import { MdVerified } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";
// import useProfile from "../../../hooks/useProfile";
import toast from "react-hot-toast";
import axiosSecure from "../../../api";
import IsModal from "../../../hooks/IsModal";

const ContactInfo = ({ open }) => {
  const { isUser, refetch } = useUser();
  const { user, userLogOut } = useAuth();
  // const { isProfile } = useProfile();

  const handelNumberUpdate = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const updateUser = { number };
    try {
      axiosSecure
        .put(`/users/number/${isUser._id}`, updateUser)
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

  const handelMailUpdate = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const updateUser = { email };
    try {
      axiosSecure
        .put(`/users/mail/${isUser._id}`, updateUser)
        .then((res) => {
          if (res.acknowledged) {
            userLogOut();
          }
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
    <div className="mt-10">
      <section
       className={`text-start p-1 md:ml-5 ${
        !open
          ? "w-[95%] mt-0 ml-[7px]"
          : "lg:w-[82%] md:w-[64%] mx-auto md:mt-5"
      } rounded-md border shadow-md md:p-5  md:mt-0 dark:bg-[#213d5e] bg-slate-100`}
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
          <div className="md:flex items-center text-sm gap-[20px] md:gap-[70px] lg:gap-[213px]">
            <p>Email</p>
            <div className="flex md:gap-2 items-center">
              <p className="text-xl md:text-sm">
                {user && user.email ? user.email : "Email Not Available"}
              </p>
              <p className="text-xl md:text-sm">
                {user?.emailVerified == true ? (
                  <p className="tooltip tooltip-success" data-tip="Verified">
                    <MdVerified className=" text-green-500 text-2xl" />
                  </p>
                ) : (
                  <p data-tip="Non Verified" className="tooltip tooltip-error">
                    <GiCrossMark className=" text-red-600 text-2xl" />
                  </p>
                )}
              </p>
              <IsModal
                title="Changes to your Email will be reflected across your
                Delta Account."
                modalId="emailModal"
                onSubmit={handelMailUpdate}
                label="Email:"
                type="email"
                id="email"
                name="email"
                defaultValue={user ? user.email : "Set Your Email"}
              />
            </div>
          </div>
          <div className=" mt-4 md:mt-0">
            <FaChevronRight className="text-2xl" />
          </div>
        </div>
        <hr />
        <div
          onClick={() => document.getElementById("numberModal").showModal()}
          className="flex items-center justify-between text-slate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-[#24ABE1] p-5 rounded-md hover:shadow-xl hover:cursor-pointer"
        >
          <div className="md:flex items-center text-sm md:gap-[70px] lg:gap-[208px] gap-[50px]">
            <p>Phone</p>
            <p className="text-xl md:text-sm">
              {isUser ? <p>{isUser?.number}</p> : <p>None</p>}
            </p>
            <IsModal
              title="Changes to your Number will be reflected across your
                Delta Account."
              modalId="numberModal"
              onSubmit={handelNumberUpdate}
              type="number"
              id="number"
              label="Number:"
              name="number"
              defaultValue={isUser ? isUser.number : "Set Your Number"}
            />
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
