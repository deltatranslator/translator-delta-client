import { useState } from "react";
import { FaVolumeUp, FaRegStopCircle } from "react-icons/fa";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeak = ({ inputText }) => {
  const { speak, cancel } = useSpeechSynthesis();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleButtonClick = () => {
    if (isSpeaking) {
      cancel();
    } else {
      speak({ text: inputText });
    }
    setIsSpeaking(!isSpeaking);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isSpeaking ? <FaRegStopCircle size={16} /> : <FaVolumeUp size={16} />}
      </button>
    </div>
  );
};

export default TextToSpeak;
