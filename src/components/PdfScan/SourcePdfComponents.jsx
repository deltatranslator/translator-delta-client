import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import useRecentLang from "../../hooks/useRecentLang";
import useDebounce from "../../hooks/useDebounce";
import countries from "../../data/countries";
import "regenerator-runtime/runtime";
import { MdGTranslate } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {
    setTranslatedText,
    sourceLangInfo,

} from "../../redux/slices/translation/translationSlice";
import useTraceLangCodeName from "../../hooks/useTraceLangCodeName";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";


import { reloadHistory } from "../../redux/slices/translationHistory/translationHistorySlice";


const SourcePdfComponent = () => {
    const { user } = useAuth();
    const [recentLang, setRecentLang] = useRecentLang("recentSourceLang");
    const [langs, setLangs] = useState(countries);
    const [inputText, setInputText] = useState("");
    // const [resultText, setResultText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [query, setQuery] = useState("");
    const [sourceLangCode, setSourceLangCode] = useState("");
    const [userPromt, setUserPromt] = useState("");


    const [tempFlag, setTempFlag] = useState(false);


    const divRef = useRef(null);
    const dispatch = useDispatch();
    const targetLangCode = useSelector((state) => {
        return state.translation.targetLang;
    });
    const translation = useSelector((state) => {
        return state.translation;
    });
    const traceName = useTraceLangCodeName();

    useEffect(() => {

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



    const handleTranslate = async () => {
        // const inputText = 
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

        // console.log(translateHistoryData.translationHistory);

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

    //   useEffect(() => {
    //     debounce(transcript);
    //   }, [transcript]);

    // handle source language change
    // const clearDivText = () => {
    //   // Set the innerHTML of the div to an empty string
    //   inputDivRef.current.innerHTML = "";
    // };

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

    //   if (!browserSupportsSpeechRecognition) {
    //     return <span>Browser doesn't support speech recognition.</span>;
    //   }

    // pdf file upload 
    // const [file, setFile] = useState("")

    // pdf text extract section 


    pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";



    // Get references to various elements

    let pdfInput = document.querySelector(".selectPdf"); // Reference to the PDF file input field
    //  let afterUpload = document.querySelector(".afterUpload"); // Reference to the result section
    let select = document.querySelector(".selectPage"); // Reference to the page selection dropdown

    let pdfText = document.querySelector(".pdfText"); // Reference to the text area for displaying extracted text

    const [text, setText] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        const passwordStr = event.target.password.value;
        const password = parseFloat(passwordStr)
        console.log(password);

        let file = pdfInput.files[0];
        // let file = event?.target?.pdf?.files[0]; // Get the selected PDF file
        console.log(file);
        if (file != undefined && file.type == "application/pdf") {
            let fr = new FileReader() // Create a new FileReader object
            fr.readAsDataURL(file); // Read the file as data URL
            console.log(fr);
            fr.onload = () => {
                let res = fr.result; // Get the result of file reading
                if (password == "") {
                    extractText(res, false); // Extract text without password
                } else {
                    extractText(res, password); // Extract text with password
                }

            }
        } else {
            // alert("Select a valid PDF file");
        }
    }
    const allText = []

    const extractText = async (url, pass) => {
        try {
            // console.log(url);
            let pdf;
            if (pass) {
                console.log(pass);
                pdf = await pdfjs.getDocument({ url: url, password: pass }).promise; // Get the PDF document with password

                console.log(pdf);
            } else {
                pdf = await pdfjs.getDocument(url).promise; // Get the PDF document without password
                console.log(pdf);
            }


            let pages = pdf.numPages; // Get the total number of pages in the PDF
            for (let i = 1; i <= pages; i++) {
                let page = await pdf.getPage(i); // Get the page object for each page
                let txt = await page.getTextContent(); // Get the text content of the page
                let text = txt.items.map((s) => s.str).join(""); // Concatenate the text items into a single string
                allText.push(text); // Add the extracted text to the array
            }
            allText.map((e, i) => {
                select.innerHTML += `<option value="${i + 1}">${i + 1}</option>`; // Add options for each page in the page selection dropdown
            });
            console.log(select);
            afterProcess(); // Display the result section
        } catch (err) {
            // alert(err.message);
            console.log(err.message);
        }
    }
    // set text on content 
    const afterProcess = () => {
        pdfText.value = allText[select.value - 1]; // Display the extracted text for the selected 
        console.log(pdfText?.value);
        const content = pdfText?.value;
        setInputText(content)
        // pdfText.value(content)
    }

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
                            ? "border-b-2 border-[#ed7966]"
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
                    className="z-10 absolute bg-white border border-gray-300  shadow-md rounded-md p-3"
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

            <div >
                <div
                    ref={divRef}
                    type="file"
                    onInput={(e) => debounce(e.currentTarget.textContent)}
                    contentEditable={true}
                    className={`w-full dark:bg-slate-200 dark:text-slate-700 dark:border-none h-64 text-lg font-medium text-gray-800 border-[1px] focus:outline-none focus:border-[1px] focus:border-gray-300 border-gray-300 shadow-sm rounded-lg p-4 resize-none`}
                    name=""
                    id=""
                >
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="mt-7 ">
                            <h2 className="my-5 text-neutral-400">Upload your pdf file</h2>

                            <form onSubmit={handleSubmit} className="flex justify-center flex-col" action="
                            ">
                                <label
                                    htmlFor="image"
                                    className=" mb-[1px] text-sm text-[#ed7966] rounded-xl "
                                >
                                    <div className="flex justify-center items-center mx-auto outline px-3 py-2 rounded-xl">

                                        {
                                            text ?

                                                <p>{text.slice(0, 20)}</p>
                                                :
                                                <p>Browse your file</p>
                                        }
                                    </div>
                                </label>
                                <input
                                    className="selectPdf"
                                    type="file"
                                    id="image"
                                    name="pdf"
                                    accept="application/pdf"
                                    onChange={(e) => setText(e?.target?.files[0]?.name)}

                                />

                                {/* input pdf password  */}

                                <input style={{ display: "none" }} className="outline  outline-[2px] outline-[#ed7966] rounded-lg my-3 px-2" placeholder="  password if require" type="password" name="password" id="" />


                                <button type="submit" className="my-2 text-sm bg-[#ed7966] hover:bg-[#303179] text-white rounded-lg px-2 py-2">
                                    <div className=" flex justify-center items-center gap-2">
                                        <MdGTranslate size={22} />
                                        Translate
                                    </div>

                                </button>

                            </form>
                            <div className="afterUpload hidden">
                                <span>Select Page</span>
                                <select className="selectPage" onChange={afterProcess}></select>
                                <textarea className="pdfText w-96 h-52"></textarea>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default SourcePdfComponent;
