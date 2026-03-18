import { useEffect, useRef } from "react";
import DrumPad from "./Drumpad";

const kits = ["crash", "kick", "snare", "tom"];

const DrumKit = () => {
  const audioMap = useRef({});

  const playSound = (kit) => {
    const audio = audioMap.current[kit];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      const matchedKit = kits.find((kit) => kit[0].toLowerCase() === key);

      if (matchedKit) {
        playSound(matchedKit);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="container">
      {kits.map((kit) => (
        <DrumPad key={kit} kit={kit} playSound={playSound} registerAudio={(el) => (audioMap.current[kit] = el)} />
      ))}
    </div>
  );
};

export default DrumKit;
