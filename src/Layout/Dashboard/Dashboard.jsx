import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";


const Dashboard = () => {
    const [isSideOpen, setIsSideOpen] = useState(true);
    return (
        <div className="w-full flex min-h-screen bg-[#eef1f8]">
            <div className="z-10">
                <Sidebar setIsSideOpen={setIsSideOpen}></Sidebar>
            </div>
            <div className={`w-full transition-all duration-700 ease-in-out ${isSideOpen ? "mr-16 lg:mr-32 xl:mr-72" : "mr-16"}`}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;