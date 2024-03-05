import { FaCopy, FaRegStopCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { IoMicOutline } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
const SpeechToText = ({
  listening,
  startListening,
  stopListening,
  resetTranscript,
  divRef,
  inputText,
}) => {
  const handleCopyBtn = () => {
    {
      inputText && toast.success("Copied");
    }
  };
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
                ? "animate-ping bg-[#00ABE4] opacity-90 rounded-full transition-1s"
                : ""
            }
            size={26}
          />
        </div>
        <div
          className={
            !listening
              ? "hidden"
              : "absolute left-[3.9rem] bottom-[10px] flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full"
          }
        >
          <FaRegStopCircle
            onClick={() => {
              stopListening();
            }}
            className="text-[26px] text-red-600"
          />
        </div>
        {/* Character Count */}
        <div className="absolute right-[3rem] bottom-[3rem] flex justify-center items-center py-5 ">
          <span
            className={
              inputText.length > 499 ? "text-red-500" : "text-gray-500"
            }
          >
            {inputText.length}/ 500
          </span>
        </div>
        {/* copy button */}
        <div className="absolute right-[8rem] bottom-[.7rem] flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
          <CopyToClipboard text={inputText}>
            <FaCopy
              className="text-[23px] hover:text-[#00ABE4]"
              onClick={handleCopyBtn}
            />
          </CopyToClipboard>
        </div>
        <div className="absolute right-[3rem] bottom-[10px] flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
          <GrPowerReset className="text-[23px]" onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
