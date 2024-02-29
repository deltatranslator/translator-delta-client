import { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQSection = () => {
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
    <div className="flex flex-col shadow-md rounded-md container mx-auto bg-gray-100 py-5 dark:bg-slate-800">
      <div className="md:w-1/2 mx-auto space-y-4 text-center">
        <h1 className="text-[#303179] font-bold text-2xl">
          Why Choose Delta Translator!
        </h1>
        <p className="text-ellipsis">
          The online Translation Platform is a web-based application designed to
          provide users with a seamless and efficient solution for translating
          text content from one language to another. Making information and
          communication accessible to a global audience.
        </p>
      </div>
      <div className="flex flex-col px-1 py-5 md:px-10 md:py-5 lg:px-36  lg:flex-row lg:gap-1 ">
        <div className="flex-1 p-5 md:p-10 py-10 md:py-16 rounded-xl">
          <h1 className="text-center font-medium text-[#303179] text-2xl lg:text-3xl mb-5">
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
              <p>Translate text in 93 languages</p>
            </div>
            <div className="flex items-center  gap-2">
              <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
              <p>Enjoy completely free translation</p>
            </div>
            <div className="flex items-center  gap-2">
              <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
              <p>Translate online without downloading an app</p>
            </div>
            <div className="flex items-center  gap-2">
              <IoCheckmarkDoneSharp className="size-5 text-[#ed7966]"></IoCheckmarkDoneSharp>
              <p>Translate between languages on a mobile-friendly platform</p>
            </div>
          </div>
        </div>
        {/* <div className="divider divider-accent lg:divider-horizontal"></div> */}

        <div className="space-y-2 flex-1 p-5 rounded-xl">
          <h1 className="text-center text-[#303179] font-medium text-3xl mb-5">
            FAQs
          </h1>

          <div className="px-2 py-4 shadow-md rounded-md bg-white dark:text-black">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p> Can I use Delta Translator for Free?</p>
                <div onClick={handleArrow1}>
                  {!questionOpen1 ? (
                    <IoIosArrowDown></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp></IoIosArrowUp>
                  )}
                </div>
              </div>
              {questionOpen1 && (
                <p className="text-[#303179] font-medium">
                  Yes, When you use Delta Translator you can enjoy 100% free
                  translation online with no ads.
                </p>
              )}
            </div>
          </div>
          <div className="px-2 py-4 shadow-md rounded-md bg-white dark:text-black">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
              <p> How many Languages does Delta Translator Support?</p>
                <div onClick={handleArrow1}>
                  {!questionOpen1 ? (
                    <IoIosArrowDown></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp></IoIosArrowUp>
                  )}
                </div>
              </div>
              {questionOpen1 && (
                <p className="text-[#303179] font-medium">
                Delta Translator let you translate 500 characters at a time,
                but you can always delete a text and type in something else.
                Stay tuned - soon you will be able to upload an entire pdf or
                paper for translation.
              </p>
              )}
            </div>
          </div>
          <div className="px-2 py-4 shadow-md rounded-md bg-white dark:text-black">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p>How many characters can translate at once?</p>
                <div onClick={handleArrow1}>
                  {!questionOpen1 ? (
                    <IoIosArrowDown></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp></IoIosArrowUp>
                  )}
                </div>
              </div>
              {questionOpen1 && (
                <p>
                  Currently, It lets you translate text into 93 languages, with
                  more to come.
                </p>
              )}
            </div>
          </div>
          <div className="px-2 py-4 shadow-md rounded-md bg-white dark:text-black">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p>How accurate is this translator?</p>
                <div onClick={handleArrow1}>
                  {!questionOpen1 ? (
                    <IoIosArrowDown></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp></IoIosArrowUp>
                  )}
                </div>
              </div>
              {questionOpen1 && <p>yes</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
