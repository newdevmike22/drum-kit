import { useState } from "react";

const DrumPad = ({ kit, playSound, registerAudio }) => {
  const [isActive, setIsActive] = useState(false);

  const handlePlay = () => {
    playSound(kit);

    setIsActive(true);
    setTimeout(() => setIsActive(false), 100);
  };

  return (
    <>
      <button
        className="btn"
        onClick={handlePlay}
        style={{
          backgroundImage: `url(images/${kit}.png)`,
          transform: isActive ? "scale(.9)" : "scale(1)",
          transition: "transform 0.1s ease",
        }}
      >
        {kit}
      </button>

      <audio ref={registerAudio} src={`sounds/${kit}.mp3`} />
    </>
  );
};

export default DrumPad;
