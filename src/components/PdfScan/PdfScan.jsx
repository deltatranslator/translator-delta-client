import Footer from "../Home/Footer/Footer";
import FeedbackButton from "../Modals/FeedbackModal/FeedbackButton";
import Navbar from "../Navbar/Navbar";
import TranslateSectionNav from "../TranslateSectionNav/TranslateSectionNav";
import PdfScanArea from "./PdfScanArea";

const PdfScan = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="max-w-[1500px] mx-auto flex items-center justify-between mt-12">
        <TranslateSectionNav />
        <FeedbackButton />
      </div>

      <div className="max-w-[1550px] mx-auto my-8 md:my-14 xl:my-16">

        <PdfScanArea />
      </div>

      <Footer />
    </div>
  );
};

export default PdfScan;
