import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Dashboard = () => {
    return (
        <div className="w-full flex min-h-screen bg-[#eef1f8]">
            <div>
                
                <Sidebar></Sidebar>
            </div>
            <div className="w-full mr-48">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;