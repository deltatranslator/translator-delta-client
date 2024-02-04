import { useSelector } from "react-redux";
import History from "../History/History";
import SavedHistory from "../SavedHistory/SavedHistory";
import TranslatorComponent from "../TranslatorComponent/TranslatorComponent";
import { useState } from "react";
import SavedComponent from "../SavedComponent/SavedComponent";


const HomeBodyComponent = () => {
    const display = useSelector(state => {
        return state.translationHistory.show;
    })
    const [saveOpen, setSaveOpen] = useState(false)

    console.log('hitting save click', display, saveOpen);

    return (
        <div className="w-full flex flex-col md:flex-row ">
            <div className="flex-grow">
                <TranslatorComponent />
                <SavedHistory setSaveOpen={setSaveOpen} display={display} saveOpen={saveOpen} />
            </div>
            <div className={`md:w-1/5 m-2 ${(!display && !saveOpen) || (!display && saveOpen) ? 'hidden' : ''}`}>
                <History />
            </div>
            <div className={`md:w-1/5 m-2 ${(!display && !saveOpen) || (!saveOpen && display) ? 'hidden' : ''}`}>
                <SavedComponent />
            </div>
        </div>
    );
};

export default HomeBodyComponent;