import Footer from "../Home/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TranslateSectionNav from "../TranslateSectionNav/TranslateSectionNav";
import PdfScanArea from "./PdfScanArea";

const PdfScan = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <TranslateSectionNav />
      <div className="max-w-[1500px] mx-auto my-10 md:my-14 xl:my-16">
        <PdfScanArea />
      </div>

      <Footer />
    </div>
  );
};

export default PdfScan;
