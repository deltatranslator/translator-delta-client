import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
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
        <FaVolumeUp
          size={20}
          style={{ color: isSpeaking ? "green" : "gray" }}
        />
      </button>
    </div>
  );
};

export default TextToSpeak;
