import { useElementScroll } from "framer-motion";
import LanguageChart from "./LanguageChart"
import MonthlyUsersChart from "./MonthlyUsersChart"
import TopLanguages from "./TopLanguages"
import StatCard from "./statCard"

import { FaUsers } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { useEffect, useState } from "react";
import axiosSecure from "../../../../api";


const AdminUserStats = () => {

    const [stats, setStats] = useState({});

    useEffect(() => {
        axiosSecure.get('/dashboard-stat')
            .then(res => {
                setStats(res.data);
            })
    }, []);

    return (
        <div className="ml-2 mr-16 md:mx-8">
            <div className="container mx-auto mt-20 pl-4">
                <h1 className="font-bold text-4xl tracking-widest mb-2 text-gray-800">DASHBOARD</h1>
                <p className="font-medium tracking-widest text-gray-600">Welcome to your dashboard</p>
            </div>
            {/* wrapper */}
            <div className="flex flex-col">
                <div className="flex justify-center gap-2 md:gap-10 px-2 md:px-16 container mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mr-32 my-10 md:py-12 py-4 rounded-lg flex-wrap">
                    <StatCard icon={FaUsers} title="Total Users" stats={stats.userCount} />
                    <StatCard icon={FaUserClock} title="Recent Users" stats={stats.recentUsers} />
                    <StatCard icon={IoMdMail} title="Emails" stats={stats.emailCount} />
                    <StatCard icon={MdFeedback} title="Feedback" stats={stats.feedbackCount} />
                </div>
                <div className="container mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mr-32 mb-10 py-4 md:py-8 px-4 md:px-8 rounded-lg">
                    <div className="mb-4 md:mb-8">
                        <h1 className="font-bold text-white text-2xl tracking-wider">Most Used Languages</h1>
                    </div>
                    <div className="grid lg:grid-cols-10 grid-col-2 gap-8">
                        <div className="xl:col-span-8 lg:col-span-7 h-[400px] bg-blue-50 my-4 rounded-lg p-2 md:p-8">
                            <LanguageChart />
                        </div>
                        <div className="xl:col-span-2 lg:col-span-3 w-[250px] h-[400px] bg-blue-50 my-4 rounded-lg p-8">
                            <TopLanguages />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mr-32 mb-10 py-4 md:py-8 px-4 md:px-8 rounded-lg">
                    <div className="mb-4 md:mb-8">
                        <h1 className="font-bold text-white text-2xl tracking-wider">Monthly Users</h1>
                    </div>
                    <div className="h-[400px] bg-orange-50 my-4 rounded-lg p-2 md:p-8 md:mx-10 mx-0">
                        <MonthlyUsersChart />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AdminUserStats