import { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const FAQSection = ({ reference }) => {
  const [questionOpen1, setQuestionOpen1] = useState(false);
  const [questionOpen2, setQuestionOpen2] = useState(false);
  const [questionOpen3, setQuestionOpen3] = useState(false);
  const [questionOpen4, setQuestionOpen4] = useState(false);

  const handleArrow1 = () => {
    setQuestionOpen1(!questionOpen1);
  };

  const handleArrow2 = () => {
    setQuestionOpen2(!questionOpen2);
  };

  const handleArrow3 = () => {
    setQuestionOpen3(!questionOpen3);
  };
  const handleArrow4 = () => {
    setQuestionOpen4(!questionOpen4);
  };

  return (
    // <motion.div
    //   drag
    //   dragConstraints={reference}
    //   dragElastic
    //   whileDrag={{ scale: 1.2 }}
    //   whileTap={{ scale: 0.9 }}
    //   className="container mx-auto rounded-md  mb-20 space-y-5 p-5"
    // >
    // px-1 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5 bg-white dark:bg-slate-800
    <div className="flex flex-col px-1 py-5 md:px-10 md:py-5 lg:px-36 lg:py-12 lg:flex-row gap-10 bg-white dark:bg-slate-800">
      <div className="flex-1 shadow-2xl p-5 md:p-10 py-10 md:py-16 rounded-xl">
        <h1 className="text-center text-2xl lg:text-3xl mb-5">
          What you can do with Delta Translator.
        </h1>

        {/* Delta translator benefit */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
            <p>Translate longer texts</p>
          </div>

          <div className="flex items-center  gap-2">
            <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
            <p>Use a translator without ads</p>
          </div>
          <div className="flex items-center  gap-2">
            <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
            <p>Translate text in 20 languages</p>
          </div>
          <div className="flex items-center  gap-2">
            <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
            <p>Enjoy completely free translation</p>
          </div>
          <div className="flex items-center  gap-2">
            <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
            <p>Translate online—without downloading an app</p>
          </div>
          <div className="flex items-center  gap-2">
            <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
            <p>Translate between languages on a mobile-friendly platform</p>
          </div>
        </div>
      </div>
      {/* <div className="divider divider-accent lg:divider-horizontal"></div> */}

      <div className="space-y-2 flex-1 shadow-2xl p-5  md:p-10 py-10 md:py-16 rounded-xl">
        <h1 className="text-center text-3xl mb-5">FAQs</h1>

        <div className="border rounded-lg border-black flex justify-between p-2 items-center">
          <div className="space-y-2">
            <p> Can I use Delta Translator for Free?</p>
            {questionOpen1 && (
              <p>
                yes, When you use Delta Translator you can enjoy 100% free
                translation online with no ads.
              </p>
            )}
          </div>
          <div onClick={handleArrow1}>
            {!questionOpen1 ? (
              <IoIosArrowDown></IoIosArrowDown>
            ) : (
              <IoIosArrowUp></IoIosArrowUp>
            )}
          </div>
        </div>

        <div className="border rounded-lg border-black flex justify-between p-2 items-center">
          <div className="space-y-2">
            <p> How many Languages does Delta Translator Support?</p>
            {questionOpen2 && (
              <p>
                Delta Translator let you translate 500 characters at a time, but
                you can always delete a text and type in something else. Stay
                tuned - soon you will be able to upload an entire pdf or paper
                for translation.
              </p>
            )}
          </div>
          <div onClick={handleArrow2}>
            {!questionOpen2 ? (
              <IoIosArrowDown></IoIosArrowDown>
            ) : (
              <IoIosArrowUp></IoIosArrowUp>
            )}
          </div>
        </div>
        <div className="border rounded-lg border-black flex justify-between p-2 items-center">
          <div className="space-y-2">
            <p>How many characters can translate at once?</p>
            {questionOpen3 && (
              <p>
                Currently, It lets you translate text into 10 languages, with
                more to come.
              </p>
            )}
          </div>
          <div onClick={handleArrow3}>
            {!questionOpen3 ? (
              <IoIosArrowDown></IoIosArrowDown>
            ) : (
              <IoIosArrowUp></IoIosArrowUp>
            )}
          </div>
        </div>
        <div className="border rounded-lg border-black flex justify-between p-2 items-center">
          <div className="space-y-2">
            <p>How accurate is this translator?</p>
            {questionOpen4 && <p>yes</p>}
          </div>
          <div onClick={handleArrow4}>
            {!questionOpen4 ? (
              <IoIosArrowDown></IoIosArrowDown>
            ) : (
              <IoIosArrowUp></IoIosArrowUp>
            )}
          </div>
        </div>
      </div>
    </div>
    // </motion.div>
  );
};

export default FAQSection;
