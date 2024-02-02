import { FaRegStopCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { IoMicOutline } from "react-icons/io5";

const SpeechToText = ({
  listening,
  startListening,
  stopListening,
  resetTranscript,
  divRef,
}) => {
  const handleReset = () => {
    divRef.current.textContent = "";
    resetTranscript();
  };
  return (
    <div>
      <div className="relative flex justify-center items-center gap-10">
        <div className="absolute flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full bottom-3 left-5">
          <IoMicOutline
            onClick={() => {
              startListening();
            }}
            className={
              listening
                ? "animate-ping bg-[#ed7966] opacity-90 rounded-full transition-1s"
                : ""
            }
            size={26}
          />
        </div>
        <div
          className={
            !listening
              ? "hidden"
              : "absolute left-[5rem] bottom-[1.2rem] hover:bg-gray-200 cursor-pointer rounded-full"
          }
        >
          <FaRegStopCircle
            onClick={() => {
              stopListening();
            }}
            className="text-[26px] text-red-600"
          />
        </div>
        <div className="absolute right-[3rem] bottom-[1.2rem] hover:bg-gray-200 cursor-pointer rounded-full">
          <GrPowerReset className="text-[23px]" onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
