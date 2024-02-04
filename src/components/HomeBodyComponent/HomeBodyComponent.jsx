import { useSelector } from "react-redux";
import History from "../History/History";
import SavedHistory from "../SavedHistory/SavedHistory";
import TranslatorComponent from "../TranslatorComponent/TranslatorComponent";
import { useState } from "react";


const HomeBodyComponent = () => {
    const display = useSelector(state => {
        return state.translationHistory.show;
    })
const [saveOpen, setSaveOpen] = useState(false)

console.log("hello",saveOpen);
    return (
        <div className="w-full flex flex-col md:flex-row ">
            <div className="flex-grow">
                <TranslatorComponent />
                <SavedHistory setSaveOpen={setSaveOpen} />
            </div>
            <div className={`md:w-1/5 m-2 ${(!display && saveOpen) || (!display && !saveOpen)  ? '' : 'hidden'}`}>
                <History />
            </div>
            <div className={`md:w-1/5 m-2 ${(display && !saveOpen) || (!display && !saveOpen)  ? '' : 'hidden'}`}>
           <History/>
            </div>
        </div>
    );
};

export default HomeBodyComponent;