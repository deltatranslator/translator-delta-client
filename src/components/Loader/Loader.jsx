import FadeLoader from "react-spinners/FadeLoader";

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <FadeLoader size={30} color="blue" />
    </div>
  );
};

export default Loader;
