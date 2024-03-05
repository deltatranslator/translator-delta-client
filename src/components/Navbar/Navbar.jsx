import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Typewriter } from "react-simple-typewriter";
import useUser from "../../hooks/useUser";
import { MdDarkMode } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";
const Navbar = () => {
  const { user, userLogOut } = useAuth();
  const { isUser } = useUser();
  console.log("_________________", isUser?.role);
  //react dar mode implement
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = (
    <>
      <li className="text-base font-semibold  dark:text-slate-50 text-[#213d5e] hover:text-[#00ABE4] mr-12">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#00ABE4]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-base font-semibold  dark:text-slate-50 text-[#213d5e] hover:text-[#00ABE4] mr-12">
        <a
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#00ABE4]" : ""
          }
          href="#contact"
        >
          Contact
        </a>
      </li>
      <li className="text-base font-semibold  dark:text-slate-50 text-[#213d5e] hover:text-[#00ABE4] mr-10">
        <NavLink
          to={isUser?.role === "admin" ? "/admin-dashboard" : "/user-dashboard"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#00ABE4]" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-base font-medium dark:text-slate-50 text-[#303179] hover:text-[#ed7966] mr-8">
        <NavLink
          to="/ourTeam"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ed7966]" : ""
          }
        >
          Our Team
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" shadow-sm shadow-slate-300 dark:shadow-slate-950">
      <div className="bg-[#00ABE4] dark:bg-slate-900 dark:text-black flex justify-center items-center py-2">
        <div
          className="text-white text-center mx-auto font-medium"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <Typewriter
            words={["Most trending smart language translator"]}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
      <div className="px-1 py-5 md:px-10 md:py-5 lg:px-32 lg:py-5 bg-[#E9F1FA] dark:bg-slate-800">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost text-[#00ABE4] lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="bg-[#00ABE4] text-white dropdown-content  z-[1] p-4 w-40 rounded-md"
              >
                {links}
              </ul>
            </div>

            <Link to="/">
              {theme === "dark" ? (
                <img
                  className="w-[60px] md:w-[150px]"
                  src="https://i.ibb.co/LY5trSk/Delta-logo-dark-removebg-preview-1.png"
                  alt=""
                />
              ) : (
                <img
                  className="w-[60px] md:w-[150px]"
                  src="https://i.ibb.co/3YmSnBB/Delta-new-logo-2-0.png"
                  alt=""
                />
              )}
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1 hover:text-white">{links}</ul>
          </div>
          <div className="navbar-end items-center">
            <div className="mr-6 md:mr-8 mt-1">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                {/* Add onClick for theme switch */}
                <input type="checkbox" onClick={handleSwitch} />

                {/* sun icon */}
                <IoSunnySharp className="swap-on fill-current w-5 md:w-8 h-5 md:h-8 text-yellow-500" />
                {/* <svg
                  className="swap-on fill-current w-5 md:w-8 h-5 md:h-8 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg> */}

                {/* moon icon */}
                <MdDarkMode className="swap-off fill-current w-6 h-6 md:w-8 md:h-8 text-[#213d5e]" />
                {/* <svg
                  className="swap-off fill-current w-6 h-6 md:w-8 md:h-8 text-[#213d5e]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg> */}
              </label>
            </div>
            <div className="mr-6 md:mr-8">
              {user ? (
                <img
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                  src={user?.photoURL}
                  alt="user photo"
                />
              ) : (
                <FaUserCircle className=" text-lg md:text-3xl"></FaUserCircle>
              )}
            </div>
            <div className="inline-flex rounded-full shadow">
              {user ? (
                <button
                  className="inline-flex items-center px-2 py-2 md:px-4 md:py-3 text-xs font-semibold md:text-base text-[#213d5e] bg-white border shadow-xl border-transparent rounded-md md:rounded-full cursor-pointer font-base hover:bg-[#00ABE4] hover:text-white"
                  onClick={userLogOut}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-3 text-base font-semibold text-[#213d5e] bg-white border border-transparent shadow-xl rounded-full cursor-pointer font-base hover:bg-[#00ABE4] hover:text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#00ABE4] to-transparent opacity-70 dark:opacity-100" />
    </div>
  );
};

export default Navbar;
