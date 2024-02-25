import { useEffect, useState } from "react";
import axiosSecure from "../../../../api";
import useTraceLangName from "../../../../hooks/useTraceLangName";

const lang = [
    {
        name: 'Jan',
        target: 4000,
        source: 2400,
    },
    {
        name: 'Feb',
        target: 3000,
        source: 1398,
    },
    {
        name: 'Mar',
        target: 9800,
        source: 2000,
    },
    {
        name: 'Apr',
        target: 3908,
        source: 2780,
    },
    {
        name: 'May',
        target: 4800,
        source: 1890,
    },
];

const TopLanguages = () => {
    const [topLang, setTopLang] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/top-five-lang`)
            .then((res) => {
                setTopLang(res.data);
            });
    }, []);

    const traceLangName = useTraceLangName();

    return (
        <div>
            <div className="font-bold mb-4">TopLanguages</div>
            <div className="flex flex-col ml-4 font-medium text-gray-600 tracking-wider">
                {
                    topLang.map((lang, idx) => {
                        const sourceLang = lang.langPair.slice(0, 2);
                        const targetLang = lang.langPair.slice(3, 5);

                        return (
                            <p key={idx}>{traceLangName(sourceLang) + " - " + traceLangName(targetLang)}</p>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default TopLanguages