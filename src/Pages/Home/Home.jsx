import Footer from "../../components/Home/Footer/Footer";
import SavedHistory from "../../components/SavedHistory/SavedHistory";
import TranslatorComponent from "../../components/TranslatorComponent/TranslatorComponent";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Home</h1>
      <TranslatorComponent />
      <SavedHistory />
      <Footer />
    </div>
  );
};

export default Home;
