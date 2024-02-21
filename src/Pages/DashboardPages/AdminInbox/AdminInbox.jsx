import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../Api";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UserDataRow from "./userDataRow";
import Loader from "../../../components/Loader/Loader";

const AdminInbox = () => {
  const { loading } = useContext(AuthContext);
  let serialNo = 1;
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => await axiosSecure.get("/inbox"),
  });
  if (isLoading) return <Loader />;
  console.log("---------------", users, isLoading);
  return (
    <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-16">
      <h1 className="text-4xl text-center pb-5 md:pb-10">Admin Inbox</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
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
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.data.map((user) => (
                    <UserDataRow
                      key={user._id}
                      user={user}
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
