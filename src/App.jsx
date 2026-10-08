import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "./Envelope.jsx";
import Invitation from "./Invitation.jsx";
import Petals from "./Petals.jsx";

export default function App() {
  const audioRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.6;
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };
  const toggleMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {});
    else { a.pause(); setPlaying(false); }
  };

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" loop preload="auto" />
      <Petals />
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div key="env" exit={{ opacity: 0, scale: 1.12, filter: "blur(6px)" }} transition={{ duration: 0.9, ease: "easeInOut" }}>
            <Envelope onTap={startMusic} onDone={() => setOpened(true)} />
          </motion.div>
        ) : (
          <motion.div key="inv" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: "easeOut" }}>
            <Invitation />
          </motion.div>
        )}
      </AnimatePresence>
      {opened && (
        <motion.button className="music" onClick={toggleMusic} aria-label={playing ? "Pause music" : "Play music"}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
          <span className={playing ? "bars on" : "bars"}><i /><i /><i /><i /></span>
        </motion.button>
      )}
    </>
  );
}
