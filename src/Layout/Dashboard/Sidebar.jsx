import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser, AiOutlineBarChart } from "react-icons/ai";
import { RiFeedbackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import UserMenus from "../../components/UserDashboard/UserMenus/UserMenus";
import useUser from "../../hooks/useUser";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  // const [isAdmin] = useAdmin();
  const isAdmin = true;

  const { isUser } = useUser();
  console.log(isUser.role);
  const adminMenus = [
    { name: "All Users", link: "/admin-dashboard", icon: AiOutlineUser },
    { name: "Statistics", link: "statistics", icon: AiOutlineBarChart },
    { name: "Feedback", link: "user-feedback", icon: RiFeedbackLine },
  ];

  console.log(isUser);

  return (
    <>
      {isUser?.role == "admin" ? (
        <section className="flex gap-6 fixed right-0">
          <div
            className={`bg-gray-50 dark:bg-[#ba721b] dark:text-white min-h-screen ${open ? "w-72 px-4" : "w-16 px-3"
              } duration-700 text-black`}
          >
            <div
              className={`py-6 flex ${open ? "justify-between" : "justify-center"
                }`}
            >
              <Link className="h-[40px] flex items-start" to="/">
                <img
                  className={`${!open && "hidden"} w-[40px] md:w-[40px]`}
                  src="/public/Delta-removebg-preview.png"
                  alt=""
                />
                <div className={`font-medium ${!open && "hidden"}`}>
                  Delta Translator
                </div>
              </Link>
              <HiMenuAlt3
                size={26}
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
              ></HiMenuAlt3>
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
              {isAdmin &&
                adminMenus?.map((menu, i) => (
                  <Link
                    className={`${menu?.margin ? "mt-5" : menu?.marginBot ? "mb-5" : ""
                      } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#eec38e] rounded-md`}
                    to={menu?.link}
                    key={i}
                  >
                    <div>{React.createElement(menu?.icon, { size: "24" })}</div>
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                    >
                      {menu?.name}
                    </h2>
                    <h2
                      className={`${open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ) : (
        <UserMenus />
      )}
    </>
  );
};

export default Sidebar;
