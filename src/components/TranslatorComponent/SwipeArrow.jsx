import { GoArrowSwitch } from "react-icons/go";
import {
  targetLang,
  sourceLangInfo,
  setTranslatedText,
} from "../../redux/slices/translation/translationSlice";
import { useEffect, useState } from "react";

const SwipeArrow = ({ setSwapState }) => {
  // Retrieve arrays from localStorage
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const storedArray1 =
      JSON.parse(localStorage.getItem("recentSourceLang")) || [];
    const storedArray2 =
      JSON.parse(localStorage.getItem("recentTargetLang")) || [];
    setArray1(storedArray1);
    setArray2(storedArray2);
  });

  const swapLanguage = () => {
    // const sourceLang = JSON.parse(localStorage.getItem("recentSourceLang")) || "recentSourceLang";
    // const targetLang = JSON.parse(localStorage.getItem("recentTargetLang")) || "recentTargetLang";

    // const temp = JSON.stringify(sourceLang);
    // localStorage.setItem('recentSourceLang', JSON.stringify(targetLang));
    // localStorage.setItem('recentTargetLang', temp);
    // Force render
    // window.location.reload(true);

    // Function to swap arrays and update display
    const temp = array1;
    setArray1(array2);
    setArray2(temp);
    localStorage.setItem("recentSourceLang", JSON.stringify(array2));
    localStorage.setItem("recentTargetLang", JSON.stringify(temp));
    setIsSwapped(!isSwapped);

    setSwapState((prevState) => !prevState);
  };
  return (
    <div className="mb-5 lg:mb-0 lg:mt-2 flex justify-center">
      <div
        onClick={swapLanguage}
        className="absolute flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full"
      >
        <GoArrowSwitch size={20} className="transform rotate-90 lg:rotate-0" />
      </div>
    </div>
  );
};

export default SwipeArrow;
