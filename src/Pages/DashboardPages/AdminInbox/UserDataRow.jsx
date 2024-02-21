import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../Api";

const UserDataRow = ({ user, refetch, serialNo }) => {
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/inbox/${user._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <>
      <tr className="border-b transition text-base duration-300 ease-in-out hover:bg-[#303179] hover:text-white dark:border-neutral-500 dark:hover:bg-neutral-600">
        <td className="whitespace-nowrap px-6 py-6 font-semibold">
          {serialNo}
        </td>
        <td className="whitespace-nowrap px-6 py-6">{user.name}</td>
        <Link to={`/admin-dashboard/inboxDetails/${user._id}`}>
          <td className="whitespace-nowrap px-6 py-8">
            {user.message.split(" ").slice(0, 10).join(" ")}
          </td>
        </Link>
        <td className="whitespace-nowrap px-6 py-6">
          <button onClick={() => handleDelete(user)}>
            <MdDelete
              title="Delete Message"
              className="text-red-600 text-3xl"
            />
          </button>
        </td>
        <td className="whitespace-nowrap pr-6 py-6">{user.date}</td>
      </tr>
    </>
  );
};

export default UserDataRow;
