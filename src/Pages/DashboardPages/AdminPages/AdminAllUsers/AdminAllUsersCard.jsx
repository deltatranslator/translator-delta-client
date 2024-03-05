import { IoSettingsSharp } from "react-icons/io5";

import { useState } from "react";
import AdminUserActionModal from "../../../../components/Modals/AdminUserActionModal/AdminUserActionModal";

const AdminAllUsersCard = ({ user, idx, refresh, setRefresh }) => {
  const { role, name, email, photo } = user || {};
  const [isOpen, setIsOpen] = useState();
  const [isLg, setIsLg] = useState(true);

  const handleMakeAdmin = (e, id) => {
    const updateInfo = {
      role: "admin",
    };

    // axiosSecure.patch(`/users/change-role/${id}`, updateInfo)
    //     .diven(res => {
    //         if (res.data.modifiedCount > 0) {
    //             setRefresh(!refresh);
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: 'divis user is now an admin.',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         }
    //     })
  };

  return (
    <div className="flex w-full justify-between font-bold text-sm border-[1px] border-[#303179] border-opacity-20 pl-4 py-2 rounded-lg cursor-pointer hover:scale-x-105 hover:scale-y-110 hover:bg-[#ed7966] hover:border-[#ed7966] hover:text-white transition-all duration-300 hover:shadow-2xl">
      <div className="w-3/12 lg:w-1/12 md:w-1/12 flex items-center">
        <label>
          <h2>{idx}</h2>
        </label>
      </div>
      <div className="w-1/12 lg:w-2/12 md:w-3/12 md:flex items-center hidden">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={photo} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
      <div className="w-6/12 lg:w-3/12 md:w-4/12 flex items-center">
        <div className="w-full">
          <div className="font-semibold">{name}</div>
        </div>
      </div>
      <div className="w-1/12 lg:w-3/12 md:w-1/12 hidden lg:flex  items-center">
        <span className="font-semibold">{email}</span>
      </div>
      <div className="w-1/12 lg:w-2/12 md:w-2/12 md:flex hidden items-center">
        <div className="font-semibold">{role || "user"}</div>
      </div>
      <div className="w-3/12 lg:w-1/12 md:w-2/12 flex items-center">
        <button onClick={() => setIsOpen(true)} className="">
          <IoSettingsSharp size={18} />
        </button>
        <AdminUserActionModal
          user={user}
          open={isOpen}
          close={() => setIsOpen(false)}
        ></AdminUserActionModal>
      </div>
    </div>
  );
};

export default AdminAllUsersCard;
