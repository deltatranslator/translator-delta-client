import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { GoArrowSwitch } from "react-icons/go";

const PdfScanArea = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }


    return (
        <div className="max-w-[1500px] mx-auto h-[60vh] mt-10 px-2 py-1">
            <div className=" border-2 px-2 py-1">
                <div className="flex flex-row  justify-between items-center dark:text-white md:px-2 ml-2 font-medium text-gray-700">
                    <div className="flex items-center">
                        <div className="flex flex-row gap-2 md:gap-3">
                            <div className="w-10 md:w-12  border-b-2 text-sm md:text-base border-cyan-600">English</div>
                            <p className="text-sm md:text-base ">French</p>
                            <p className="text-sm md:text-base ">Hindi</p>
                        </div>
                        <div onClick={handleDropdown} className="flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
                            {!dropdownOpen
                                ? <SlArrowDown className="text-xs md:text-2xl" />
                                : <SlArrowUp className="text-xs md:text-2xl" />
                            }
                        </div>
                    </div>


                    <div className=" flex justify-center items-center">
                        <GoArrowSwitch className="text-lg md:text-2xl" />
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center gap-2 md:gap-3">
                            <p className="w-10 md:w-12 text-sm md:text-base  border-b-2 border-cyan-600">Bengali</p>
                            <p className="text-sm md:text-base ">French</p>
                            <p className="text-sm md:text-base ">Hindi</p>
                        </div>
                        <div onClick={handleDropdown} className="flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
                            {!dropdownOpen
                                ? <SlArrowDown className="text-xs md:text-2xl" />
                                : <SlArrowUp className="text-xs md:text-2xl" />
                            }
                        </div>
                    </div>


                </div>

            </div>
            <div className="h-[40vh] border-r-2 border-l-2 border-b-2 ">
                <div className="h-full flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <img src="https://static.deepl.com/img/icons/icon_pdf.svg" alt="" />
                            <img src="https://static.deepl.com/img/icons/icon_docx_v3.svg" alt="" />
                        </div>
                        <div className="my-5 px-5 md:px-2 text-[#ed7966] text-sm md:text-xl font-semibold">
                            Drag your PDF, Word <span className="text-[#303179]">(.docx)</span> , or PowerPoint <span className="text-[#303179]">(.pptx)</span> file here
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default PdfScanArea;