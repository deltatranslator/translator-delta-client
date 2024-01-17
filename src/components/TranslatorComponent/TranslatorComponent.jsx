import SourceLangComponent from "./SourceLangComponent";
import SwipeArrow from "./SwipeArrow";
import TargetLangComponent from "./TargetLangComponent";

const TranslatorComponent = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center p-4 gap-4 my-12">
        <SourceLangComponent />
        <SwipeArrow />
        <TargetLangComponent />
      </div>
    </div>
  );
};

export default TranslatorComponent;
