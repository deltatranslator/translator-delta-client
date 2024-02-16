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
            <div className="container mx-auto mb-28 mt-28 px-8">
                <div className="text-4xl font-bold tracking-widest ml-8 mb-10">
                    Users
                </div>
                <div className="p-8 bg-orange-50 rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>No.</label>
                                    </th>
                                    <th>User&apos;s Profile</th>
                                    <th>User&apos;s Name</th>
                                    <th>User&apos;s Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* rows */}
                            <tbody>
                                {currentUsers?.map((user, idx) => (
                                    <AdminAllUsersCard
                                        key={user._id}
                                        idx={idx + 1}
                                        user={user}
                                    ></AdminAllUsersCard>
                                ))}
                            </tbody>
                        </table>
                        {/* Pagination */}
                        <ul className="pagination flex">
                            <li
                                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                            >
                                <button onClick={prevPage} className="page-link btn btn-ghost">
                                    Previous
                                </button>
                            </li>
                            {Array.from({
                                length: Math.ceil(users.length / usersPerPage),
                            }).map((_, index) => (
                                <li
                                    key={index}
                                    className={`page-item ${currentPage === index + 1
                                            ? "active border-2 border-orange-200 rounded-lg"
                                            : ""
                                        }`}
                                >
                                    <button
                                        onClick={() => paginate(index + 1)}
                                        className="page-link btn btn-ghost"
                                    >
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
