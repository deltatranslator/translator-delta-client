import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import useRecentLang from "../../hooks/useRecentLang";

const SourceLangComponent = () => {
    const [recentLang, setRecentLang] = useRecentLang();
    const langs = [
        "English",
        "Spanish",
        "French",
        "German",
        "Chinese (Simplified)",
        "Chinese (Traditional)",
        "Japanese",
        "Korean",
        "Arabic",
        "Russian",
        "Portuguese",
        "Italian",
        "Dutch",
        "Turkish",
        "Swedish",
        "Danish",
        "Norwegian",
        "Finnish",
        "Polish",
        "Czech",
        "Hungarian",
        "Romanian",
        "Greek",
        "Bulgarian",
        "Serbian",
        "Croatian",
        "Slovenian",
        "Slovak",
        "Lithuanian",
        "Latvian",
        "Estonian",
        "Maltese",
        "Irish",
        "Welsh",
        "Scottish Gaelic",
        "Basque",
        "Catalan",
        "Galician",
        "Portuguese (Brazil)",
        "Spanish (Latin America)",
        "Italian (Switzerland)",
        "Romansh",
        "Albanian",
        "Macedonian",
        "Montenegrin",
        "Bosnian",
        "Kosovo Albanian",
        "Azeri",
        "Uzbek",
        "Kazakh",
        "Kyrgyz",
        "Tajik",
        "Turkmen",
        "Uighur",
        "Mongolian",
        "Tibetan",
        "Nepali",
        "Bhutanese",
        "Rohingya",
        "Burmese",
        "Karen",
        "Shan",
        "Lao",
        "Khmer",
        "Thai",
        "Vietnamese",
        "Hmong",
        "Malay",
        "Indonesian",
        "Tagalog",
        "Cebuano",
        "Ilocano",
        "Waray",
        "Hiligaynon",
        "Kapampangan",
        "Bikol",
        "Pangasinan",
        "Maranao",
        "Maguindanao",
        "Tausug",
        "Chavacano",
        "Ibanag",
        "Yakan",
        "Surigaonon",
        "Butuanon",
        "Maay",
        "Zamboangueño",
        "Sama",
        "Tausug",
        "Meranao",
        "Iranun",
        "Bajau",
        "Cuyonon",
        "Agutaynen",
        "Ibaloi",
        "Kankanaey",
        "Ifugao",
        "Ilonggo",
        "Kapampangan",
        "Waray"
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [query, setQuery] = useState("");

    const hangleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mouseup', closeDropdown);

        return () => {
            document.removeEventListener('mouseup', closeDropdown);
        }
    }, []);

    const handleRecentLang = (lang) => {
        const recentLangArray = [];
        const recentLang = JSON.parse(localStorage.getItem('recentLang'));

        if (!recentLang) {
            if (recentLang.length > 2) {
                recentLang.pop();
            }
            recentLangArray.unshift(lang);
            localStorage.setItem('recentLang', JSON.stringify(recentLangArray));
            setRecentLang(recentLangArray);
        } else {
            const doesExist = recentLang.find(storageLang => storageLang === lang);

            if (!doesExist) {
                console.log(recentLang.length);
                if (recentLang.length > 2) {
                    recentLang.pop();
                }
                recentLangArray.push(...recentLang);
                recentLangArray.unshift(lang);
                localStorage.setItem('recentLang', JSON.stringify(recentLangArray));
                setRecentLang(recentLangArray);
            }
        }
    }

    const filteredLang = langs.filter(item => {
        return item.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div className="w-full lg:w-1/2">
            <div className="flex items-center px-2 font-medium text-gray-700 ml-2">
                {recentLang.slice(0, 3).map((lang, idx) => <div key={idx} onClick={() => setActiveIndex(idx)}
                    className={`px-2 py-3 hover:bg-blue-100 rounded-sm cursor-pointer border-b-2 transition-all duration-300 cubic-bezier(.68,-0.55,.27,1.55) ${activeIndex === idx ? 'border-b-2 border-blue-400' : 'border-b-2 border-transparent'
                        }`}>{lang}</div>)}
                <div onClick={hangleDropdown} className="flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
                    {!dropdownOpen
                        ? <SlArrowDown size={16} />
                        : <SlArrowUp size={16} />
                    }
                </div>
            </div>
            {dropdownOpen && (
                <div ref={dropdownRef} className='z-10 absolute bg-white border border-gray-300 shadow-md rounded-md p-3'>
                    {/* Search field */}
                    <div className="h-12 border-b-2 mb-4">
                        <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="search" className="w-full h-full p-2 focus:outline-none placeholder:text-lg" placeholder="Search" />
                    </div>
                    <div className='grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 lg:grid-rows-5'>
                        {/* Dropdown options */}
                        {!query
                            ? langs.map((lang, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        setActiveIndex(idx); setDropdownOpen(false);
                                        handleRecentLang(lang);
                                    }}
                                    className={`px-2 py-2 cursor-pointer hover:bg-blue-100 ${activeIndex === idx ? 'text-blue-500' : 'text-gray-800'}`}
                                >
                                    {lang}
                                </div>
                            ))
                            : filteredLang.map((lang, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => { setActiveIndex(idx); setDropdownOpen(false); }}
                                    className={`px-2 py-2 cursor-pointer hover:bg-blue-100 ${activeIndex === idx ? 'text-blue-500' : 'text-gray-800'}`}
                                >
                                    {lang}
                                </div>
                            ))}
                    </div>
                </div>
            )}
            <textarea className="w-full h-64 text-lg font-medium text-gray-800 border-[1px] focus:outline-none focus:border-[1px] focus:border-gray-300 border-gray-300 shadow-sm rounded-lg p-4 resize-none" name="" id=""></textarea>
        </div>
    );
};

export default SourceLangComponent;