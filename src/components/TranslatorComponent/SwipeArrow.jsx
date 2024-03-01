import { GoArrowSwitch } from "react-icons/go";
import { targetLang,sourceLangInfo, setTranslatedText } from "../../redux/slices/translation/translationSlice";
import { useEffect, useState } from "react";

const SwipeArrow = ({setSwapState}) => {
    // const [localhost1, setLocalhost1] = useState(() => {
    //     const storedValue = localStorage.getItem('recentSourceLang');
    //     return storedValue ? JSON.parse(storedValue) : 'recentSourceLang';
    //   });
    
    //   const [localhost2, setLocalhost2] = useState(() => {
    //     const storedValue = localStorage.getItem('recentTargetLang');
    //     return storedValue ? JSON.parse(storedValue) : 'recentTargetLang';
    //   });

    //   useEffect(() => {
    //     const handleStorageChange = (e) => {
    //       if (e.key === 'recentSourceLang') {
    //         setLocalhost1(JSON.parse(e.newValue));
    //       } else if (e.key === 'recentTargetLang') {
    //         setLocalhost2(JSON.parse(e.newValue));
    //       }
    //     };
    
    //     window.addEventListener('storage', handleStorageChange);
    
    //     return () => {
    //       window.removeEventListener('storage', handleStorageChange);
    //     };
    //   }, []);

    //   useEffect(() => {
    //     localStorage.setItem('recentSourceLang', JSON.stringify(localhost1));
    //     localStorage.setItem('recentTargetLang', JSON.stringify(localhost2));
    //   }, [localhost1, localhost2]);

    const swapLanguage = () =>{
        const sourceLang = JSON.parse(localStorage.getItem("recentSourceLang")) || "recentSourceLang";
        const targetLang = JSON.parse(localStorage.getItem("recentTargetLang")) || "recentTargetLang";

        const temp = JSON.stringify(sourceLang);
        localStorage.setItem('recentSourceLang', JSON.stringify(targetLang));
        localStorage.setItem('recentTargetLang', temp);
        // Force render
        // window.location.reload(true);


          

        //   const temp = localhost1;
        //   setLocalhost1(localhost2);
        //   setLocalhost2(temp);

        // localStorage.setItem('recentSourceLang', JSON.stringify(localhost2));
        // localStorage.setItem('recentTargetLang', JSON.stringify(temp));
    
        setSwapState(prevState => !prevState);
    }
    return (
        <div className="mb-5 lg:mb-0 lg:mt-2 flex justify-center">
            <div onClick={swapLanguage} className="absolute flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
                <GoArrowSwitch size={20} className="transform rotate-90 lg:rotate-0" />
            </div>
        </div>
    );
};

export default SwipeArrow;