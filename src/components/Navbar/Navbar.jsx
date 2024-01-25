import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, userLogOut } = useAuth()
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
      <li className="text-base dark:text-slate-50 text-[#303179] hover:text-[#ed7966] mr-8">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ed7966]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-base dark:text-slate-50 text-[#303179] hover:text-[#ed7966] mr-8">
        <NavLink
          to="/reviews"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ed7966]" : ""
          }
        >
          Reviews
        </NavLink>
      </li>
      <li className="text-base dark:text-slate-50 text-[#303179] hover:text-[#ed7966] mr-8">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ed7966]" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="bg-[#303179] dark:bg-slate-900 dark:text-black flex justify-center items-center py-2">
        <span className="text-sm text-white text-center mx-auto">
          Most trending smart language translator
        </span>
      </div>
      <div className="px-1 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5 bg-white dark:bg-slate-800">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost text-[#ed7966] lg:hidden"
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
                className="bg-[#ed7966] text-white dropdown-content hover:text-white mt-3 z-[1] p-2 w-52"
              >
                {links}
              </ul>
            </div>

            <span className=" dark:text-slate-50">Delta Language Logo</span>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1 hover:text-white">{links}</ul>
          </div>
          <div className="navbar-end">
            <div className="mr-3 md:mr-8 mt-1">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                {/* Add onClick for theme switch */}
                <input type="checkbox" onClick={handleSwitch} />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-5 md:w-8 h-5 md:h-8 text-[#ed7966]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-5 md:w-8 h-5 md:h-8 text-[#ed7966]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <div className="mr-3 md:mr-8">
              {
                user ? <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="user photo" /> : <FaUserCircle className="text-[#ed7966] text-lg md:text-3xl"></FaUserCircle>
              }

            </div>
            <div className="inline-flex rounded-full shadow">
              {
                user ? <button className="inline-flex items-center px-4 py-2 text-base text-white bg-[#ed7966] border border-transparent rounded-full cursor-pointer font-base hover:bg-white hover:text-black" onClick={userLogOut}>Logout</button> :

                  <Link
                    to="/signUp"
                    className="inline-flex items-center px-4 py-2 text-base text-white bg-[#ed7966] border border-transparent rounded-full cursor-pointer font-base hover:bg-white hover:text-black"
                  >
                    Register
                  </Link>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
