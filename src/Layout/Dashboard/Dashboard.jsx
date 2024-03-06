import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const location = useLocation();
  console.log("--------->>>>", location);
  const isDetailsPage = location.pathname.includes("/inboxDetails");
  const isInboxPage = location.pathname.includes("/inbox");

  // Define the background image URL based on the condition
  let backgroundImage = "";

  if (isInboxPage) {
    backgroundImage = "url('https://i.ibb.co/LkFYxJs/884.jpg')";
  } else if (isDetailsPage) {
    backgroundImage = "url('https://i.ibb.co/9rWHf8s/blur-bg.png')";
  }
  return (
    <div className="w-full flex min-h-screen bg-[#eef1f8]">
      <div className="z-10">
        <Sidebar setIsSideOpen={setIsSideOpen}></Sidebar>
      </div>
      <div
        id="dashboard"
        style={{
          backgroundImage: backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "300%",
        }}
        className={`w-full transition-all duration-700 ease-in-out ${
          isSideOpen ? "mr-16 lg:mr-32 xl:mr-72" : "mr-16"
        }`}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
