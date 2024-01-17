import { useEffect, useState } from "react";

const useRecentLang = () => {
    const [recentLang, setRecentLang] = useState(['English', 'Spanish', 'German']);
    useEffect(() => {
        const recentLangArray = JSON.parse(localStorage.getItem('recentLang'));
        if (!recentLangArray) {
            if (recentLangArray.length > 2) {
                setRecentLang(recentLangArray);
            } else {
                setRecentLang(recentLangArray);
            }
        }
    }, []);
    return [recentLang, setRecentLang];
};

export default useRecentLang;