import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../Api";

const UserDataRow = ({ inboxUser, refetch, serialNo }) => {
  const handleDelete = (inboxUser) => {
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
        const res = await axiosSecure.delete(`/inbox/${inboxUser._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${inboxUser.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <>
      <tr className="border-b transition text-base duration-300 ease-in-out hover:bg-[#ed7966] hover:text-white dark:border-neutral-500 dark:hover:bg-neutral-600">
        <td className="whitespace-nowrap px-6 py-6 font-semibold">
          {serialNo}
        </td>
        <td className="whitespace-nowrap px-6 py-6">{inboxUser.name}</td>
        <Link to={`/admin-dashboard/inboxDetails/${inboxUser._id}`}>
          <td className="whitespace-nowrap px-6 py-8">
            {/* {inboxUser.message.split(" ").slice(0, 10).join(" ")} */}
            {inboxUser.message.length > 70
              ? `${inboxUser.message.substring(0, 67)}...`
              : inboxUser.message}
          </td>
        </Link>
        <td className="whitespace-nowrap px-6 py-6">
          <button onClick={() => handleDelete(inboxUser)}>
            <MdDelete
              title="Delete Message"
              className="text-red-600 text-3xl"
            />
          </button>
        </td>
        <td className="whitespace-nowrap pr-6 py-6">{inboxUser.date}</td>
      </tr>
    </>
  );
};

export default UserDataRow;
