import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";




import { NavLink } from "react-router-dom";

function App() {

  return (
    <>
     
     <footer className="footer footer-center p-10 bg-gray-500  text-white rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
            <NavLink to="https:/facebook.com"><FaFacebook className="w-6 h-6" /></NavLink>
            <NavLink to="https:/instagram.com"><FaInstagram className="w-6 h-6" /></NavLink>
            <NavLink to="https:/discord.com"><MdOutlineConnectWithoutContact className="w-6 h-6"/></NavLink>
            <NavLink to="https:/youtube.com">< FaYoutube className="w-6 h-6"/></NavLink>

            <NavLink to="https://github.com/deltatranslator">< BsGithub className="w-6 h-6"/></NavLink>
          </div>
        </nav> 
        <aside>
          <p >Copyright © 2024 - All right reserved by Delta Coders</p>
        </aside>
      </footer>    
    </>
  )
}

export default App
