import FAQSection from "../../components/FAQSection/FAQSection";
import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SavedHistory from "../../components/SavedHistory/SavedHistory";
import TranslatorComponent from "../../components/TranslatorComponent/TranslatorComponent";

const Home = () => {
  return (
    <div className=" dark:bg-black dark:text-white">
      <Navbar />
      <TranslatorComponent />
      <SavedHistory />
      <FAQSection></FAQSection>
      <Footer />
    </div>
  );
};

export default Home;
