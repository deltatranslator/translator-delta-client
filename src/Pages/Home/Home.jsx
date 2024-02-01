import FAQSection from "../../components/FAQSection/FAQSection";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Home/Footer/Footer";
import HomeBodyComponent from "../../components/HomeBodyComponent/HomeBodyComponent";
import Navbar from "../../components/Navbar/Navbar";
import { useRef } from "react";
import TranslateSectionNav from "../../components/TranslateSectionNav/TranslateSectionNav";



const Home = () => {

  const ref = useRef()

  return (
    <div className=" dark:bg-slate-900 dark:text-white">
      <Navbar />
      <TranslateSectionNav />
      <HomeBodyComponent />
      <div ref={ref}>
        <FAQSection reference={ref} />
      </div>
      <Contact />
      <Footer />
    </div >
  );
};

export default Home;
