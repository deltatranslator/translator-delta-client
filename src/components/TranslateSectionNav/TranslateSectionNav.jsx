import { NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { BsFiletypePdf } from "react-icons/bs";
const TranslateSectionNav = () => {
  return (
    <div className="flex px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5 dark:bg-slate-800 gap-8">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border rounded-lg" : ""
        }
      >
        <div className="w-32 md:w-60 flex px-6 py-3 items-center text-white  gap-2 bg-[#00ABE4] rounded-lg hover:bg-white hover:text-[#213d5e] hover:border hover:border-[#213d5e]">
          <TfiWorld className="text-xl md:text-3xl font-semibold" />
          <div className="flex flex-col items-start">
            <h3 className="text-base font-bold">Translate Text</h3>
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
        <div className="w-32 md:w-60 flex px-6 py-3 items-center text-white  gap-2 bg-[#00ABE4] rounded-lg hover:bg-white hover:text-[#213d5e] hover:border hover:border-[#213d5e]">
          <BsFiletypePdf className="text-xl md:text-3xl  font-semibold" />
          <div className="flex flex-col items-start">
            <h3 className="text-base  font-bold">Translate Files</h3>
            <p className="text-[12px] ">pdf. docs.</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default TranslateSectionNav;
