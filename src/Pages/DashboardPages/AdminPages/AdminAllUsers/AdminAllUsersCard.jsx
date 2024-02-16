import { MdOutlineUpdate } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import AdminUserActionModal from "../../../../components/Modals/AdminUserActionModal/AdminUserActionModal";

const AdminAllUsersCard = ({ user, idx, refresh, setRefresh }) => {
    const { _id, role, name, email, photo } = user || {};
    const [isOpen, setIsOpen] = useState();

    const handleMakeAdmin = (e, id) => {
        const updateInfo = {
            role: "admin",
        };

        // axiosSecure.patch(`/users/change-role/${id}`, updateInfo)
        //     .then(res => {
        //         if (res.data.modifiedCount > 0) {
        //             setRefresh(!refresh);
        //             Swal.fire({
        //                 position: 'top-end',
        //                 icon: 'success',
        //                 title: 'This user is now an admin.',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //         }
        //     })
    };

    return (
        <tr>
            <th>
                <label>
                    <h2>{idx}</h2>
                </label>
            </th>
            <td>
                <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src={photo} className="w-full h-full object-cover" alt="" />
                </div>
            </td>
            <td>
                <div>
                    <div className="font-semibold">{name}</div>
                </div>
            </td>
            <td>
                <span className="font-semibold">{email}</span>
            </td>
            <td>
                <div className="font-semibold">{role || 'user'}</div>
            </td>
            <td>
                <button onClick={() => setIsOpen(true)} className="text-gray-700">
                    <IoSettingsSharp size={18} />
                </button>
                <AdminUserActionModal user={user} open={isOpen} close={() => setIsOpen(false)}></AdminUserActionModal>
            </td>
        </tr>
    );
};

export default AdminAllUsersCard;
