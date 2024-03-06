import { NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { BsFiletypePdf } from "react-icons/bs";
const TranslateSectionNav = () => {
  return (
    <div className="w-full lg:w-1/2 container flex justify-evenly md:justify-normal px-8 py-5 md:py-10 dark:bg-slate-800 gap-8">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border text-white gap-2 bg-[#00ABE4]  rounded-lg  hover:text-white shadow-xl" : "border  gap-2 bg-white  rounded-lg hover:bg-[#213d5e] text-[#00ABE4] shadow-xl hover:text-white"
        }
      >
        <div className="w-full  md:w-60 flex px-3 md:px-6 py-3 items-center ">
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
          isPending ? "pending" : isActive ? "border text-white gap-2 bg-[#00ABE4]  rounded-lg  hover:text-white shadow-xl" : "border hover:text-white gap-2 bg-white  rounded-lg hover:bg-[#213d5e] text-[#00ABE4] shadow-xl"
        }
      >
        <div className="w-full md:w-60 flex px-3 md:px-6 py-3 items-center ">
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
