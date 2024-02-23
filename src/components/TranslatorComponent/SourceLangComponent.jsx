import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import useRecentLang from "../../hooks/useRecentLang";
import useDebounce from "../../hooks/useDebounce";
import countries from "../../data/countries";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useDispatch, useSelector } from "react-redux";
import {
  setTranslatedText,
  sourceLangInfo,
  targetLang,
} from "../../redux/slices/translation/translationSlice";
import useTraceLangCodeName from "../../hooks/useTraceLangCodeName";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";
import SpeechToText from "../SpeechToText/SpeechToText";
import TextToSpeak from "../TextToSpeak/TextToSpeak";

import { reloadHistory } from "../../redux/slices/translationHistory/translationHistorySlice";

const SourceLangComponent = ({swapState}) => {
  console.log(swapState)
  const { user } = useAuth();
  const [recentLang, setRecentLang] = useRecentLang("recentSourceLang");
  const [langs, setLangs] = useState(countries);
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [query, setQuery] = useState("");
  const [sourceLangCode, setSourceLangCode] = useState("");
  const [userPromt, setUserPromt] = useState("");
  // const inputDivRef = useRef();
  const [tempFlag, setTempFlag] = useState(false);

  const [content, setContent] = useState('');
  const [speechText, setSpeechText] = useState(false)


  /********Speech To Text Function Start**********/
  const divRef = useRef(null);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  /********Speech To Text Function End**********/

  const dispatch = useDispatch();
  const targetLangCode = useSelector((state) => {
    return state.translation.targetLang;
  });

  // const textTranslated = useSelector((state)=>{
  //   return state.translation.translatedText
  // })

  // console.log(textTranslated)



  const translation = useSelector((state) => {
    return state.translation;
  });

  const translatedResult = translation?.translatedText
  console.log(translatedResult)
  const traceName = useTraceLangCodeName();

  console.log("recent:", targetLangCode);

  useEffect(() => {
    // axios.get(`https://libretranslate.com/languages`)
    //     .then((response) => {
    //         setLangs(response.data)
    //     })
  }, []);

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
    const recentLang = JSON.parse(localStorage.getItem("recentSourceLang"));

    if (!recentLang) {
      if (recentLang.length > 2) {
        recentLang.pop();
      }
      recentLangArray.unshift(lang);
      localStorage.setItem("recentSourceLang", JSON.stringify(recentLangArray));
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
          "recentSourceLang",
          JSON.stringify(recentLangArray)
        );
        setRecentLang(recentLangArray);
      }
    }
  };

  const filteredLang = langs.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  // const handleTextInput = (e) => {
  //   const inputText = e.target.value;
  //   console.log(inputText);
  //   // speech to text
  // };

  const startListening = () => {
    const sourceLangCode = traceName(
      selectedLanguage || recentLang[activeIndex]
    );
    SpeechRecognition.startListening({
      continuous: true,
      language: sourceLangCode,
    });
  };

  const stopListening = () => SpeechRecognition.stopListening();

  const handleTranslate = async () => {
    // const inputText = e.target.value;
    // setInputText(inputText);
    const sourceLangCodeTemp = traceName(
      selectedLanguage || recentLang[activeIndex]
    );
    setSourceLangCode(sourceLangCodeTemp);

    const sourceLangData = {
      sourceLang: sourceLangCode,
      sourceText: inputText,
      translatedDate: Date.now(),
    };
    console.log(sourceLangData.sourceText)
    dispatch(sourceLangInfo(sourceLangData));

    let translatedResult;

    if (inputText && !tempFlag) {
      axios
        .post(
          `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${sourceLangCode}|${targetLangCode}`
        )
        .then((res) => {
          translatedResult = res.data.responseData.translatedText || "";
          dispatch(setTranslatedText(translatedResult));
        });
    } else {
      setTempFlag(false);
      setInputText("");
      dispatch(setTranslatedText(""));
    }
    if (translatedResult) {
      dispatch(setTranslatedText(translatedResult));
    }
    const translateHistoryData = {
      userEmail: user?.email,
      translationHistory: [translation],
    };
    console.log(translateHistoryData.translationHistory);
    if (translation.sourceText !== "" && translation.translatedText !== "") {
      axiosSecure
        .put(`/translation-history/${user.email}`, translateHistoryData)
        .then((res) => {
          dispatch(reloadHistory());
        });
    }
  };

  const debounce = useDebounce(setInputText);

  useEffect(() => {
    handleTranslate();
  }, [inputText, selectedLanguage, recentLang, activeIndex, targetLangCode]);

  useEffect(() => {
    debounce(transcript);
    setInputText(transcript)
  }, [transcript]);

  // handle source language change
  // const clearDivText = () => {
  //   // Set the innerHTML of the div to an empty string
  //   inputDivRef.current.innerHTML = "";
  // };
  console.log(inputText)

  useEffect(() => {
    const sourceLangCodeTemp = traceName(
      selectedLanguage || recentLang[activeIndex]
    );
    setSourceLangCode(sourceLangCodeTemp);

    axios
      .post(
        `https://api.mymemory.translated.net/get?q='Write your text here.'&langpair=en|${sourceLangCode}`
      )
      .then((res) => {
        const promt = res.data.responseData.translatedText || "";
        setUserPromt(promt);
        // console.log(promt);
      });
    // setInputText("");
    // clearDivText();
    const sourceLangData = {
      sourceLang: sourceLangCode,
      sourceText: inputText,
      translatedDate: Date.now(),
    };
    dispatch(sourceLangInfo(sourceLangData));
    dispatch(setTranslatedText(""));
  }, [selectedLanguage]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // const handleInput = (e) =>{
  //   debounce(e.currentTarget.textContent)
  //   setInputText(e.currentTarget.textContent)
  // }

  // const handleOutput = () =>{
  //   debounce(translatedResult)
  //   setInputText(translatedResult)
  // }
  // const handleSpeechClick = () =>{
  //   setSpeechText(prevState => !prevState);

  //   console.log('Clicked done', speechText)
  // }

  useEffect(() => {
    // Update content based on swapState
    setContent(swapState ? translatedResult : inputText);
  }, [swapState]);

  return (
    <div className="w-full lg:w-1/2 dark:text-white">
      <div className="flex items-center dark:text-white px-2 ml-2 font-medium text-gray-700">
        {recentLang.slice(0, 3).map((lang, idx) => (
          <div
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              setSelectedLanguage(lang);
              setTempFlag(true);
            }}
            className={`px-2 py-3 hover:bg-blue-100 rounded-sm cursor-pointer border-b-2 transition-all duration-300 cubic-bezier(.68,-0.55,.27,1.55) ${activeIndex === idx
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
          className="z-10 absolute bg-white border border-gray-300 shadow-md rounded-md p-3"
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
          <div className="grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 lg:grid-rows-5">
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
                    setTempFlag(true);
                  }}
                  className={`px-2 py-3 hover:bg-blue-100 rounded-sm cursor-pointer border-b-2 transition-all duration-300 cubic-bezier(.68,-0.55,.27,1.55) ${activeIndex === idx
                      ? "border-b-2 border-blue-400"
                      : "border-b-2 border-transparent"
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
                    setSelectedLanguage(lang.name);
                    setTempFlag(true);
                    handleRecentLang(lang.name);
                  }}
                  className={`px-2 py-2 cursor-pointer hover:bg-blue-100 ${activeIndex === idx ? "text-blue-500" : "text-gray-800"
                    }`}
                >
                  {lang.name}
                </div>
              ))}
          </div>
        </div>
      )}

      <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
        <div
          ref={divRef}


          onInput={(e)=>{ debounce(e.currentTarget.textContent)
            // // setInputText(e.currentTarget.textContent)
          }}
        

          // {swapState ? (
          //   {
          //     onInput: (e) => {
          //       setInputText(newData);
          //       debounce(newData);
          //     }
          //   }
          // ) : null}
          // {swapState ? { name: "yourNewName" } : null}



           // onKeyDown={(e) => {
          //   if (inputText.length >= 500 && e.key !== "Backspace") {
          //     e.preventDefault();
          //   }
          // }}
          
        
         
          contentEditable={true}
          className={`w-full dark:bg-slate-200 dark:text-slate-700 dark:border-none text-lg font-medium text-gray-800 border-[1px] focus:outline-none focus:border-[1px] focus:border-gray-300 border-gray-300 shadow-sm rounded-lg p-4 h-[480px] resize-none`}
          name=""
          id=""
        >

          {content}
          {/* {transcript} */}
        </div>

        {/* --------------------Button: speech stop reset-------------------------- */}
        <div ><SpeechToText listening={listening}
          startListening={startListening}
          stopListening={stopListening}
          resetTranscript={resetTranscript}
          divRef={divRef}
          inputText={inputText}
         ></SpeechToText>
         </div>
        {/* --------------------Button: speech stop reset-------------------------- */}
        <div className="relative left-[7rem] bottom-[3rem] flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
          <TextToSpeak className="text-[26px]" inputText={inputText} />
        </div>
      </div>
    </div>
  );
};

export default SourceLangComponent;
