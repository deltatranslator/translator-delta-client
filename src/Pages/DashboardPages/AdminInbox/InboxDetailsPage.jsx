import { useLoaderData } from "react-router-dom";

const InboxDetailsPage = () => {
  const loadDetails = useLoaderData();
  const { name, email, message } = loadDetails;
  console.log("from load details-----------", loadDetails);
  return (
    <div className="w-[800px] mx-auto py-40">
      <a
        href="#"
        className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
          {name}
        </h5>
        <h5 className=" text-base tracking-tight text-gray-500 dark:text-white">
          {email}
        </h5>
        <h5 className=" text-base tracking-tight text-gray-500 dark:text-white mb-8">
          Date: 12-12-2024
        </h5>
        <h5 className=" text-base font-bold tracking-tight text-gray-500 dark:text-white mb-8">
          Subject:
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 my-12">
          {message}
        </p>
      </a>
    </div>
  );
};

export default InboxDetailsPage;
