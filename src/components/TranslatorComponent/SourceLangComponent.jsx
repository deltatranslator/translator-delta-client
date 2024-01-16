import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const SourceLangComponent = () => {
    const recentLang = [];
    const lang = ['Bengali', 'English', 'German', 'Dutch', 'Finish', 'French', 'Spanish', 'Arabic', 'Albanian', 'Russian', 'Serbian']
    const [activeIndex, setActiveIndex] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const hangleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);

        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        }
    }, []);

    return (
        <div className="w-full lg:w-1/2">
            <div className="flex items-center px-2 font-medium text-gray-700">
                {recentLang.map((lang, idx) => <div key={idx} onClick={() => setActiveIndex(idx)}
                    className={`px-2 py-2 hover:bg-blue-100 rounded-sm cursor-pointer border-b-2 transition-all duration-300 cubic-bezier(.68,-0.55,.27,1.55) ${activeIndex === idx ? 'border-b-2 border-blue-400' : 'border-b-2 border-transparent'
                        }`}>{lang}</div>)}
                <div onClick={hangleDropdown} className="flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
                    {!dropdownOpen
                        ? <SlArrowDown size={16} />
                        : <SlArrowUp size={16} />
                    }
                </div>
            </div>
            {dropdownOpen && (
                <div ref={dropdownRef} className="absolute bg-white border border-gray-300 shadow-md rounded-md">
                    {/* Dropdown options */}
                    {lang.map((lang, idx) => (
                        <div
                            key={idx}
                            onClick={() => { setActiveIndex(idx); setDropdownOpen(false); }}
                            className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${activeIndex === idx ? 'text-blue-500' : 'text-gray-800'}`}
                        >
                            {lang}
                        </div>
                    ))}
                </div>
            )}
            <textarea className="w-full h-64 text-lg font-medium text-gray-800 border-[1px] focus:outline-none focus:border-[1px] focus:border-gray-300 border-gray-300 shadow-sm rounded-lg p-4 resize-none" name="" id=""></textarea>
        </div>
    );
};

export default SourceLangComponent;