import { NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { BsFiletypePdf } from "react-icons/bs";
const TranslateSectionNav = () => {
  return (
    <div className="w-full lg:w-1/2 container flex justify-evenly md:justify-normal px-5 dark:bg-slate-800 gap-8">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border rounded-lg" : ""
        }
      >
        <div className="w-full  md:w-60 flex px-3 md:px-6 py-3 items-center text-white  gap-2 bg-[#00ABE4] rounded-lg hover:bg-white hover:text-[#213d5e] hover:border hover:border-[#213d5e]">
          <TfiWorld className="text-xl md:text-3xl font-semibold" />
          <div className="flex flex-col items-start">
            <h3 className="text-xs md:text-base font-bold">Translate Text</h3>
            <p className="text-[12px]">93 Languages</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/pdfScan"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border  rounded-lg" : ""
        }
      >
        <div className="w-full md:w-60 flex px-3 md:px-6 py-3 items-center text-white  gap-2 bg-[#00ABE4] rounded-lg hover:bg-white hover:text-[#213d5e] hover:border hover:border-[#213d5e]">
          <BsFiletypePdf className="text-xl md:text-3xl  font-semibold" />
          <div className="flex flex-col items-start">
            <h3 className="text-xs md:text-base font-bold">Translate Files</h3>
            <p className="text-[12px] ">pdf. docs.</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default TranslateSectionNav;
