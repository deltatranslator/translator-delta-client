import { useEffect, useState } from "react";
import AdminAllUsersCard from "./AdminAllUsersCard";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../../../redux/slices/users/usersSlice";
import axiosSecure from "../../../../api";

const AdminAllUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const dispatch = useDispatch();
    const users = useSelector((state) => {
        return state.users.users;
    });

    useEffect(() => {
        axiosSecure.get("/users").then((res) => {
            const deltaUsers = res.data;
            dispatch(setUsers(deltaUsers));
        });
    }, [dispatch]);

    // console.log("meow", users);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(users.length / usersPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="container mx-auto mb-28 mt-20 px-8">
                <div className="ml-8 mb-10">
                    <h1 className="text-5xl font-bold tracking-widest mb-4">Users</h1>
                    <p className="text-lg font-medium tracking-wider text-gray-500">
                        {users.length} users found
                    </p>
                </div>
                <div className="p-8 bg-white rounded-3xl">
                    <div className="overflow-x-auto">
                        <div className="flex flex-col px-8">
                            {/* head */}
                            <div className="bg-[#f9f9f9] px-8 py-3 rounded-lg">
                                <div className="flex w-full justify-between font-bold text-sm">
                                    <p className="flex-1">
                                        <label>No.</label>
                                    </p>
                                    <p className="flex-1">User&apos;s Profile</p>
                                    <p className="flex-1">User&apos;s Name</p>
                                    <p className="flex-1">User&apos;s Email</p>
                                    <p className="flex-1">Role</p>
                                    <p className="flex-1">Action</p>
                                </div>
                            </div>
                            {/* rows */}
                            <div className="px-8 py-3 rounded-lg flex flex-col gap-4 mt-4">
                                {currentUsers?.map((user, idx) => (
                                    <AdminAllUsersCard
                                        key={user._id}
                                        idx={idx + (((currentPage - 1) * 10) + 1)}
                                        user={user}
                                    ></AdminAllUsersCard>
                                ))}
                            </div>
                        </div>
                        {/* Pagination */}
                        <ul className="pagination flex">
                            <li
                                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                            >
                                <button onClick={prevPage} className="page-link btn btn-ghost">
                                    Previous
                                </button>
                            </li>
                            {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active border-2 border-orange-200 rounded-lg' : ''}`}>
                                    <button onClick={() => paginate(index + 1)} className="page-link btn btn-ghost">
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li
                                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                            >
                                <button onClick={nextPage} className="page-link btn btn-ghost">
                                    Next
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminAllUsers;
