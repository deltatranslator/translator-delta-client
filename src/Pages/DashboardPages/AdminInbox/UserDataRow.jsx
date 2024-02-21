import { Link } from "react-router-dom";

const UserDataRow = ({ user, refetch, serialNo }) => {
  return (
    <>
      <tr className="border-b transition duration-300 ease-in-out hover:bg-[#303179] hover:text-white dark:border-neutral-500 dark:hover:bg-neutral-600">
        <td className="whitespace-nowrap px-6 py-6 font-semibold">
          {serialNo}
        </td>
        <td className="whitespace-nowrap px-6 py-6">{user.name}</td>
        <Link to={`/admin-dashboard/inboxDetails/${user._id}`}>
          <td className="whitespace-nowrap pl-6 pr-4 py-6">
            {user.message.split(" ").slice(0, 12).join(" ")}
          </td>
        </Link>
        <td className="whitespace-nowrap pr-6 py-6">{user.date}</td>
      </tr>
    </>
  );
};

export default UserDataRow;
