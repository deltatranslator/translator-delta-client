import {  NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { BsFiletypePdf } from "react-icons/bs";
const TranslateSectionNav = () => {
    return (
        <div className="flex gap-4 max-w-[1510px] mx-auto mt-10 px-5">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border  rounded-lg border-[#ed7966]" : ""
            }>
                <div className="w-32 md:w-48  flex px-3 py-2 items-center gap-2">
                    <TfiWorld className="text-xl md:text-3xl text-[#ed7966] font-semibold" />
                    <div className="flex flex-col items-start">
                        <h3 className="text-xs text-[#ed7966] font-bold">Translate Text</h3>
                        <p className="text-[12px] text-neutral-500">93 Languages</p>
                    </div>
                </div>
            </NavLink  >
            <NavLink to="/pdfScan" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border  rounded-lg border-[#ed7966]" : ""
            }>
                <div className="w-32 md:w-48 flex px-3 py-2 items-center gap-2">
                    <BsFiletypePdf className="text-xl md:text-3xl text-[#ed7966] font-semibold" />
                    <div className="flex flex-col items-start">
                        <h3 className="text-xs text-[#ed7966] font-bold">Translate Files</h3>
                        <p className="text-[12px] text-neutral-500">pdf. docs.</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default TranslateSectionNav;