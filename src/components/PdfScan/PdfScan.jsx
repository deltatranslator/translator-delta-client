import Footer from "../Home/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TranslateSectionNav from "../TranslateSectionNav/TranslateSectionNav";
import PdfScanArea from "./PdfScanArea";

const PdfScan = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <TranslateSectionNav/>
            <PdfScanArea/>
            <Footer/>

        </div>
    );
};

export default PdfScan;