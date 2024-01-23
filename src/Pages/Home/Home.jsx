import FAQSection from "../../components/FAQSection/FAQSection";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SavedHistory from "../../components/SavedHistory/SavedHistory";
import TranslatorComponent from "../../components/TranslatorComponent/TranslatorComponent";

const Home = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-white">
      <Navbar />
      <TranslatorComponent />
      <SavedHistory />
      <FAQSection/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
