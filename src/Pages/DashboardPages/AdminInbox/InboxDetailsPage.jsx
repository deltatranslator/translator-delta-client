import { useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
const InboxDetailsPage = () => {
  const loadDetails = useLoaderData();
  const { name, email, message, date, subject } = loadDetails;
  const { user } = useAuth();
  return (
    <div className="w-[800px] mx-auto py-40 ">
      <a
        href="#"
        className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-left items-center gap-5">
          <div className="">
            {user ? (
              <img
                className="w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt="user photo"
              />
            ) : (
              <FaUserCircle className="text-[#ed7966] text-lg md:text-3xl"></FaUserCircle>
            )}
          </div>
          <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
            {name}
          </h5>
        </div>
        <h5 className=" text-base tracking-tight text-gray-500 dark:text-white">
          {email}
        </h5>
        <h5 className=" text-base tracking-tight text-gray-500 dark:text-white mb-8">
          Date: {date}
        </h5>
        <h5 className=" text-base font-bold tracking-tight text-gray-500 dark:text-white mb-8">
          Subject: {subject}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 my-12">
          {message}
        </p>
      </a>
    </div>
  );
};

export default InboxDetailsPage;
