import { useSelector } from "react-redux";
import History from "../History/History";
import SavedHistory from "../SavedHistory/SavedHistory";
import TranslatorComponent from "../TranslatorComponent/TranslatorComponent";


const HomeBodyComponent = () => {
    const display = useSelector(state => {
        return state.translationHistory.show;
    })

    return (
        <div className="w-full flex flex-col md:flex-row ">
            <div className="flex-grow">
                <TranslatorComponent />
                <SavedHistory />
            </div>
            <div className={`md:w-1/5 m-2 ${!display ? 'hidden' : ''}`}>
                <History />
            </div>
        </div>
    );
};

export default HomeBodyComponent;