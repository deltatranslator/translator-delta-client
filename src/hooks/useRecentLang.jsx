import { useEffect, useState } from "react";

const useRecentLang = (localLang) => {
  const [recentLang, setRecentLang] = useState([]);
  const defaultLang = ["English", "Spanish", "German"];
  // console.log(localLang);
  useEffect(() => {
    const recentLangArray = JSON.parse(localStorage.getItem(localLang));
    if (recentLangArray) {
      if (recentLangArray.length > 2) {
        setRecentLang(recentLangArray);
      } else {
        setRecentLang(recentLangArray);
      }
    } else {
      localStorage.setItem(localLang, JSON.stringify(defaultLang));
      setRecentLang(defaultLang);
    }
  }, []);
  return [recentLang, setRecentLang];
};

export default useRecentLang;
