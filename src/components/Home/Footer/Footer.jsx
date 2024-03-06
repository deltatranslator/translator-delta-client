import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      {/* <footer className="footer footer-center p-10 bg-gray-500 dark:bg-slate-900  text-white rounded-t"> */}
      <footer className="footer footer-center p-10 bg-[#303179]  text-white rounded-t dark:bg-slate-800">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <NavLink to="https:/facebook.com">
              <FaFacebook className="w-6 h-6 dark:text-sky-600" />
            </NavLink>
            <NavLink to="https:/instagram.com">
              <FaInstagram className="w-6 h-6 dark:text-orange-700" />
            </NavLink>
            <NavLink to="https:/discord.com">
              <MdOutlineConnectWithoutContact className="w-6 h-6 dark:text-[#99aab5]" />
            </NavLink>
            <NavLink to="https:/youtube.com">
              <FaYoutube className="w-6 h-6 dark:text-red-700" />
            </NavLink>

            <NavLink to="https://github.com/deltatranslator">
              <BsGithub className="w-6 h-6 " />
            </NavLink>
          </div>
        </nav>
        <nav className="grid grid-flow-col gap-4">
          <NavLink>About us</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink to="/ourTeam">Our Team</NavLink>
          <NavLink>Home</NavLink>
        </nav>

        {/* <aside>
          <p >Copyright © 2024 - All right reserved by Delta Coders</p>
        </aside> */}
      </footer>
      <aside className="text-center bg-gray-600 text-white py-4 dark:bg-slate-900">
        <p>Copyright © 2024 - All right reserved by Delta Coders</p>
      </aside>
    </div>
  );
};

export default Footer;
