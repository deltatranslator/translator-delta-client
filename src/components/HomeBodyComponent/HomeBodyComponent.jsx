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
    const [openHistory, setOpenHistory] = useState(false)
    // console.log(openHistory);

    // console.log('hitting save click', display, saveOpen);

    return (
        <div className="w-full flex flex-col md:flex-row ">
            <div className="flex-grow">
                <TranslatorComponent />
                <SavedHistory setSaveOpen={setSaveOpen} display={display} saveOpen={saveOpen} setOpenHistory={setOpenHistory} openHistory={openHistory} />
            </div>

            <div className={`md:w-1/5 m-2 ${(!display && !saveOpen) || (!display && saveOpen) || openHistory ? 'hidden' : ''}`}>
                <History setOpenHistory={setOpenHistory} openHistory={openHistory} />
            </div>
            <div className={`md:w-1/5 m-2 ${(!display && !saveOpen) || (!saveOpen && display) ? 'hidden' : ''}`}>
                <SavedComponent setOpenHistory={setOpenHistory} />
            </div>
        </div>
    );
};

export default HomeBodyComponent;