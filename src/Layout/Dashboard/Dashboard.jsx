import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Dashboard = () => {
    return (
        <div className="w-full flex h-screen">
            <div>
                <Sidebar></Sidebar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;