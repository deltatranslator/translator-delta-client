import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UserDataRow from "./UserDataRow";
import Loader from "../../../components/Loader/Loader";

const AdminInbox = () => {
  const { loading } = useContext(AuthContext);
  let serialNo = 1;
  const {
    data: inboxUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["inboxUsers"],
    enabled: !loading,
    queryFn: async () => await axiosSecure.get("/inbox"),
  });
  if (isLoading) return <Loader />;
  console.log("---------------", inboxUsers, isLoading);
  return (
    <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-16 ">
      <h1 className="text-4xl text-white text-center pb-5 md:pb-10">
        Admin <span className="text-[#00ABE4]">Inbox</span>
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden border bg-[#E9F1FA] border-gray-300 text-black shadow-lg backdrop-blur-sm bg-opacity-80">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className=" pl-6 pr-4 py-4">
                      Message
                    </th>
                    <th scope="col" className="pr-6 py-4">
                      Delete
                    </th>
                    <th scope="col" className="pr-6 py-4">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inboxUsers?.data.map((inboxUser) => (
                    <UserDataRow
                      key={inboxUser._id}
                      inboxUser={inboxUser}
                      refetch={refetch}
                      serialNo={serialNo++}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInbox;
