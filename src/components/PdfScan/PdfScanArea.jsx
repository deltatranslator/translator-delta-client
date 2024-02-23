import SwipeArrow from "../TranslatorComponent/SwipeArrow";
import SourcePdfComponent from "./SourcePdfComponents";
import FileUpload from "./FileUpload"
import TargetPdfComponent from "./TargetPdfComponents";


const PdfScanArea = () => {

  return (
    <div>
      <div className="container dark:text-white mx-auto flex flex-col lg:flex-row justify-center p-4 gap-4 my-12">
        <SourcePdfComponent />
        {/* <FileUpload/> */}
        <SwipeArrow />
        <TargetPdfComponent />
      </div>
    </div>
  );
};

export default PdfScanArea;
