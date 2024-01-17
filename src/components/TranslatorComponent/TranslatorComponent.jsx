import SourceLangComponent from "./SourceLangComponent";
import SwipArrow from "./SwipArrow";
import TargetLangComponent from "./TargetLangComponent";

const TranslatorComponent = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center p-4 gap-4">
                <SourceLangComponent />
                <SwipArrow />
                <TargetLangComponent />
            </div>
        </div>
    );
};

export default TranslatorComponent;