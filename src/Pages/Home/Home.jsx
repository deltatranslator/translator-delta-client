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
      <Footer />
    </div>
  );
};

export default Home;
