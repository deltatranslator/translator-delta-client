import SourceLangComponent from "./SourceLangComponent";
import TargetLangComponent from "./TargetLangComponent";

const TranslatorComponent = () => {
    return (
        <div>
            <div className="container mx-auto bg-yellow-100 flex flex-col lg:flex-row justify-center p-4 gap-4">
                <SourceLangComponent />
                <TargetLangComponent />
            </div>
        </div>
    );
};

export default TranslatorComponent;