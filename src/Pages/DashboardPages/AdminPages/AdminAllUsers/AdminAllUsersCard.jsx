import { MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import { useEffect } from "react";

const AdminAllUsersCard = ({ user, idx, refresh, setRefresh }) => {
  const { _id, name, email, photo } = user || {};

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
        <div className="font-semibold">{"user"}</div>
      </td>
      <td>
        <button className="btn btn-ghost btn-sm border-2 border-orange-200">
          <MdOutlineUpdate />
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default AdminAllUsersCard;
