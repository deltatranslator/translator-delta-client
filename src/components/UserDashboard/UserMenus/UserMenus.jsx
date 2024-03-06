import { Link } from "react-router-dom";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import React, { useContext } from "react";
import { OpenContext } from "../../../Context/useOpen";
const UserMenus = () => {
  const { open, setOpen } = useContext(OpenContext);

  const userMenus = [
    {
      name: "Profile",
      link: "/user-dashboard",
      icon: FaRegUserCircle,
    },
    {
      name: "Home",
      link: "/",
      icon: FaHome,
    },
  ];

  return (
    <section className="flex gap-6 fixed right-0">
      <div
        className={`bg-[#213d5e] text-white dark:text-white min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-700 text-black px-4`}
      >
        <div
          className={`py-6 flex ${open ? "justify-between" : "justify-center"}`}
        >
          <Link className="h-[40px] flex items-start" to="/">
            <img
              className={`w-[60px] md:w-[150px] ${!open && "hidden"}`}
              src="https://i.ibb.co/LY5trSk/Delta-logo-dark-removebg-preview-1.png"
              alt=""
            />
          </Link>
          <HiMenuAlt3
            size={26}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          ></HiMenuAlt3>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {userMenus?.map((menu, i) => (
            <Link
              className={`${
                menu?.margin ? "mt-5" : menu?.marginBot ? "mb-5" : ""
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#24ABE0] rounded-md`}
              to={menu?.link}
              key={i}
            >
              <div>{React.createElement(menu?.icon, { size: "24" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserMenus;
