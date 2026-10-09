import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mandala, Lantern, Garland, Diya } from "./Ornaments.jsx";

const fade = (d) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: d },
});

export default function Envelope({ onTap, onDone }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const go = () => {
    if (open) return;
    setOpen(true);
    onTap();
    timer.current = setTimeout(onDone, 3200);
  };

  return (
    <main className="env-screen">
      <Mandala />

      <div className="glitter" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <i
            key={i}
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${(i % 8) * 0.45}s`,
            }}
          />
        ))}
      </div>

      <Garland />
      <Garland flip />
      <div className="lanterns">
        <div className="swing"><Lantern h={74} /></div>
        <div className="swing d2"><Lantern h={100} /></div>
        <div className="swing d3"><Lantern h={74} /></div>
      </div>

      {/* invitation line */}
      <motion.p className="wi" {...fade(0.5)}>
        Together with our families we invite you to celebrate
      </motion.p>

      {/* names: Surya / & / Pavithraa */}
      <motion.h1 className="gold-names script" {...fade(0.8)}>
        <span className="n1">Surya</span>
        <span className="amp">&amp;</span>
        <span className="n2">Pavithraa</span>
      </motion.h1>

      <motion.p className="dt" {...fade(1.1)}>
      1st November 2026, Sunday 
      </motion.p>

      {/* envelope */}
      <motion.div
        className="env"
        initial={{ opacity: 0, y: 50, rotate: -3 }}
        animate={{ opacity: 1, y: open ? 44 : 0, rotate: 0 }}
        transition={open ? { duration: 1, delay: 0.5, ease: "easeInOut" } : { duration: 1.1, delay: 1.3 }}
      >
        <div className="env-back" />

        <motion.div
          className="env-card"
          animate={open ? { y: -86, zIndex: 5 } : { y: 0, zIndex: 1 }}
          transition={{
            y: { delay: open ? 0.9 : 0, duration: 1.1, ease: "easeInOut" },
            zIndex: { delay: open ? 1.45 : 0, duration: 0 },
          }}
        >
          <p className="tamil">Wedding Invitation</p>
          <p className="script cn">Surya &amp; Pavithraa</p>
          <p className="cd">01 · 11 · 2026</p>
        </motion.div>

        <svg className="env-front" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0L158 112L0 200Z" fill="#f3e4c8" stroke="#d9bf8f" strokeWidth="1.2" />
          <path d="M300 0L142 112L300 200Z" fill="#efdebf" stroke="#d9bf8f" strokeWidth="1.2" />
          <path d="M0 200L150 98L300 200Z" fill="#f8eddb" stroke="#d9bf8f" strokeWidth="1.2" />
        </svg>

        <motion.div
          className="flap"
          animate={open ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 3 }}
          transition={{
            rotateX: { duration: 0.9, ease: "easeInOut" },
            zIndex: { delay: open ? 0.45 : 0, duration: 0 },
          }}
        >
          <svg className="face" viewBox="0 0 300 104" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f8eddb" />
                <stop offset="1" stopColor="#ecd9b8" />
              </linearGradient>
            </defs>
            <path d="M0 0H300L150 104Z" fill="url(#flapGrad)" stroke="#d9bf8f" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
          <svg className="face back" viewBox="0 0 300 104" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 0H300L150 104Z" fill="#cfb185" stroke="#d9bf8f" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <motion.button
          type="button"
          className="seal"
          onClick={go}
          aria-label="Open the invitation"
          animate={open ? { scale: 0, opacity: 0, rotate: 90 } : { scale: [1, 1.07, 1] }}
          transition={open ? { duration: 0.45 } : { repeat: Infinity, duration: 2.2 }}
        >
          <span className="script">S&amp;P</span>
        </motion.button>
      </motion.div>

      <motion.button
        type="button"
        className="tap"
        onClick={go}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ delay: open ? 0 : 2.2 }}
      >
        <span className="shine">Open the beginning of our love story</span>
      </motion.button>

      <div className="diyas"><Diya /><Diya /></div>
    </main>
  );
}