import { useEffect, useRef, useState } from "react";
import useRecentLang from "../../hooks/useRecentLang";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import countries from "../../data/countries";

import { useSelector, useDispatch } from "react-redux";
import { targetLang } from "../../redux/slices/translation/translationSlice";
import useTraceLangCodeName from "../../hooks/useTraceLangCodeName";
import TextToSpeak from "../TextToSpeak/TextToSpeak";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

const TargetLangComponent = () => {
  const [recentLang, setRecentLang] = useRecentLang("recentTargetLang");
  const [langs, setLangs] = useState(countries);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const traceName = useTraceLangCodeName();

  const translation = useSelector((state) => {
    return state.translation.translatedText;
  });

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", closeDropdown);

    return () => {
      document.removeEventListener("mouseup", closeDropdown);
    };
  }, []);

  const handleRecentLang = (lang) => {
    const recentLangArray = [];
    const recentLang = JSON.parse(localStorage.getItem("recentTargetLang"));

    if (!recentLang) {
      if (recentLang.length > 2) {
        recentLang.pop();
      }
      recentLangArray.unshift(lang);
      localStorage.setItem("recentTargetLang", JSON.stringify(recentLangArray));
      setRecentLang(recentLangArray);
    } else {
      const doesExist = recentLang.find((storageLang) => storageLang === lang);

      if (!doesExist) {
        if (recentLang.length > 2) {
          recentLang.pop();
        }
        recentLangArray.push(...recentLang);
        recentLangArray.unshift(lang);
        localStorage.setItem(
          "recentTargetLang",
          JSON.stringify(recentLangArray)
        );
        setRecentLang(recentLangArray);
      }
    }
  };

  const filteredLang = langs.filter((item) => {
    return item.code.toLowerCase().includes(query.toLowerCase());
  });

  const handleTargetSelection = () => {
    const sourceLangCode = traceName(
      selectedLanguage || recentLang[activeIndex]
    );
    dispatch(targetLang(sourceLangCode));
  };

  useEffect(() => {
    handleTargetSelection();
  }, [selectedLanguage, recentLang, activeIndex]);
  // copy - to clipboard
  const handleCopyBtn = () => {
    {
      translation.length > 0 && toast.success("Copied");
    }
  };
  return (
    <div className="w-full lg:w-1/2 relative">
      <div className="flex items-center dark:text-white px-2 ml-2 lg:ml-6 font-medium text-gray-700">
        {recentLang.slice(0, 3).map((lang, idx) => (
          <div
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              setSelectedLanguage(lang);
            }}
            className={`px-2 py-3 hover:bg-blue-100 rounded-sm cursor-pointer border-b-2 transition-all duration-300 cubic-bezier(.68,-0.55,.27,1.55) ${
              activeIndex === idx
                ? "border-b-2 border-blue-400"
                : "border-b-2 border-transparent"
            }`}
          >
            {lang}
          </div>
        ))}
        <div
          onClick={handleDropdown}
          className="flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full"
        >
          {!dropdownOpen ? <SlArrowDown size={16} /> : <SlArrowUp size={16} />}
        </div>
      </div>
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="z-10 absolute right-0 lg:-left-[500px] xl:-left-[750px] bg-white border border-gray-300 shadow-md rounded-md p-3"
        >
          {/* Search field */}
          <div className="h-12 border-b-2 mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              name="search"
              className="w-full h-full p-2 focus:outline-none placeholder:text-lg"
              placeholder="Search"
            />
          </div>
          <div className="grid md:grid-cols-4 dark:bg-slate-800 lg:grid-cols-6 xl:grid-cols-8 lg:grid-rows-5">
            {/* Dropdown options */}
            {!query
              ? langs.map((lang, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveIndex(0);
                      setDropdownOpen(false);
                      handleRecentLang(lang.name);
                      setSelectedLanguage(lang.name);
                    }}
                    className={`px-2 py-2 cursor-pointer dark:text-slate-50 dark:hover:bg-slate-600 hover:bg-blue-100 ${
                      activeIndex === idx ? "text-blue-500" : "text-gray-800"
                    }`}
                  >
                    {lang.name}
                  </div>
                ))
              : filteredLang.map((lang, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveIndex(0);
                      setDropdownOpen(false);
                      handleRecentLang(lang.name);
                      setSelectedLanguage(lang.name);
                    }}
                    className={`px-2 py-2 cursor-pointer hover:bg-blue-100 ${
                      activeIndex === idx ? "text-blue-500" : "text-gray-800"
                    }`}
                  >
                    {lang.name}
                  </div>
                ))}
          </div>
        </div>
      )}
      <div
        className={`w-full text-2xl dark:bg-slate-400 dark:text-slate-100 dark:border-none font-medium text-gray-600 border-[1px] bg-gray-50 shadow-sm rounded-lg p-4 h-72
        }`}
        name=""
        id=""
      >
        {translation}
      </div>
      <div className=" flex justify-end -mt-[46px] px-10">
        <button className="mr-10 -mt-2 flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
          <CopyToClipboard text={translation}>
            <FaCopy
              className="text-[23px] hover:text-[#ed7966]"
              onClick={handleCopyBtn}
            />
          </CopyToClipboard>
        </button>
        <div>
          <TextToSpeak inputText={translation} />
        </div>
      </div>
    </div>
  );
};

export default TargetLangComponent;
