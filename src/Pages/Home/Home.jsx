import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SavedHistory from "../../components/SavedHistory/SavedHistory";
import TranslatorComponent from "../../components/TranslatorComponent/TranslatorComponent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TranslatorComponent />
      <SavedHistory />
      <Footer />
    </div>
  );
};

export default Home;
