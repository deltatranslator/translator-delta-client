import { useEffect, useState } from "react";
import axiosSecure from "../../../../api";
import UserFeedbackCard from "./UserFeedbackCard";


const AdminUserFeedback = () => {
    const [userFeedback, setUserFeedback] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;


    useEffect(() => {
        axiosSecure.get('/user-feedback')
            .then(res => {
                const feedback = res.data;
                setUserFeedback(feedback);
            })
    }, [])


    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userFeedback?.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(userFeedback.length / usersPerPage)) {
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
            <div className="container mx-auto mb-28 mt-20 md:mt-28 px-4 md:px-8">
                <div className="text-3xl md:text-4xl font-bold tracking-widest ml-8 mb-10">User Feedback</div>
                <div className="p-4 md:p-8 bg-orange-50 rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            Feedback List
                                        </label>
                                    </th>
                                </tr>
                            </thead>
                            {/* rows */}
                            <tbody>
                                {
                                    currentUsers?.map((feedback, idx) => <UserFeedbackCard key={feedback._id} idx={idx + 1} feedback={feedback}></UserFeedbackCard>)
                                }
                            </tbody>
                        </table>
                        {/* Pagination */}
                        <ul className="pagination flex">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button onClick={prevPage} className="page-link btn btn-ghost">
                                    Previous
                                </button>
                            </li>
                            {Array.from({ length: Math.ceil(userFeedback?.length / usersPerPage) }).map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active border-2 border-orange-200 rounded-lg' : ''}`}>
                                    <button onClick={() => paginate(index + 1)} className="page-link btn btn-ghost">
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
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

export default AdminUserFeedback;