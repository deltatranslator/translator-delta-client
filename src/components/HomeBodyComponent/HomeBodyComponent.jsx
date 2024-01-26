import { useSelector } from "react-redux";
import History from "../History/History";
import SavedHistory from "../SavedHistory/SavedHistory";
import TranslatorComponent from "../TranslatorComponent/TranslatorComponent";


const HomeBodyComponent = () => {
    const display = useSelector(state => {
        return state.translationHistory.show;
    })

    return (
        <div className="w-full flex">
            <div className="flex-grow">
                <TranslatorComponent />
                <SavedHistory />
            </div>
            <div className={`w-1/5 m-2 ${!display ? 'hidden' : ''}`}>
                <History />
            </div>
        </div>
    );
};

export default HomeBodyComponent;