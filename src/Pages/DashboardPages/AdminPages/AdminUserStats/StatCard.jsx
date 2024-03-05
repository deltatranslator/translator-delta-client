import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const StatCard = ({ icon, title, stats }) => {
  // primary color: #ed7966
  // secondary color: #303179

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Tilt
      className="flex-1"
      options={defaultOptions}
      style={
        screenWidth > 700
          ? { height: 165, width: 250 }
          : { height: 100, width: 250 }
      }
    >
      <div className="w-full h-[90px] md:h-[130px] bg-blue-100 px-4 py-2 md:px-8 md:py-6 m-4 shadow-lg rounded-md hover:bg-[#ed7966] hover:text-white transition-all duration-300  backdrop-filter hover:backdrop-blur-sm">
        <div className="flex gap-10 md:gap-20 justify-between md:justify-start items-center">
          <div>
            <h3 className="font-bold text-2xl md:text-3xl mb-2">
              {stats || 0}
            </h3>
            <p className="ml-1 text-sm md:text-base tracking-wider">{title}</p>
          </div>
          <div className="flex justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-300">
            {/* <icon size={28} className="mx-1 shadow-lg" /> */}
            {React.createElement(icon, { size: "28" })}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default StatCard;
