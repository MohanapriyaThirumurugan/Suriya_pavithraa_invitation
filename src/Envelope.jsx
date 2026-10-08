import { useState } from "react";
import { motion } from "framer-motion";
import { Mandala, Lantern, Garland, Diya } from "./Ornaments.jsx";

const fade = (d) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d } });

export default function Envelope({ onTap, onDone }) {
  const [open, setOpen] = useState(false);
  const go = () => {
    if (open) return;
    setOpen(true);
    onTap();
    setTimeout(onDone, 3200);
  };
  return (
    <main className="env-screen">
      <Mandala />
      <div className="glitter" aria-hidden="true">{Array.from({ length: 24 }, (_, i) => <i key={i} style={{ left: `${(i * 41) % 100}%`, top: `${(i * 29) % 100}%`, animationDelay: `${(i % 8) * 0.45}s` }} />)}</div>
      <Garland /><Garland flip />
      <div className="lanterns"><div className="swing"><Lantern h={74} /></div><div className="swing d2"><Lantern h={100} /></div><div className="swing d3"><Lantern h={74} /></div></div>

      <motion.p className="wi" {...fade(0.5)}>Wedding Invitation</motion.p>
      <motion.h1 className="gold-names script" {...fade(0.8)}>Surya <span>&amp;</span> Pavithraa</motion.h1>
      <motion.p className="dt" {...fade(1.1)}>Sunday · 1st November 2026 · Chennai</motion.p>

      <motion.div className="env" initial={{ opacity: 0, y: 50, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1.1, delay: 1.3 }}>
        <div className="env-back" />
        <motion.div className="env-card" animate={open ? { y: -92 } : { y: 0 }} transition={{ delay: open ? 0.9 : 0, duration: 1.1, ease: "easeInOut" }}>
          <p className="tamil">Wedding Invitation</p>
          <p className="script cn">Surya &amp; Pavithraa</p>
          <p className="cd">01 · 11 · 2026</p>
        </motion.div>
        <svg className="env-front" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0L150 112L0 200Z" fill="#f9dfe4" stroke="#d6a84e" strokeWidth="2" />
          <path d="M300 0L150 112L300 200Z" fill="#f6d3db" stroke="#d6a84e" strokeWidth="2" />
          <path d="M0 200L150 112L300 200Z" fill="#fbe7ea" stroke="#d6a84e" strokeWidth="2" />
        </svg>
        <motion.div className="flap" animate={open ? { rotateX: 180, zIndex: 1 } : { rotateX: 0 }} transition={{ duration: 0.9, ease: "easeInOut" }}>
          <svg className="face" viewBox="0 0 300 112" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0H300L150 112Z" fill="url(#fl)" stroke="#d6a84e" strokeWidth="2.5" /><defs><linearGradient id="fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4b8c6" /><stop offset="1" stop-color="#fbdce3" /></linearGradient></defs></svg>
          <svg className="face back" viewBox="0 0 300 112" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0H300L150 112Z" fill="#c9456f" stroke="#d6a84e" strokeWidth="2.5" /></svg>
        </motion.div>
        <motion.button className="seal" onClick={go} aria-label="Open the invitation"
          animate={open ? { scale: 0, opacity: 0, rotate: 90 } : { scale: [1, 1.07, 1] }}
          transition={open ? { duration: 0.45 } : { repeat: Infinity, duration: 2.2 }}>
          <span className="script">S&amp;P</span>
        </motion.button>
      </motion.div>

      <motion.button className="tap" onClick={go} initial={{ opacity: 0 }} animate={{ opacity: open ? 0 : 1 }} transition={{ delay: open ? 0 : 2.2 }}>
        <span className="shine">Tap the seal to open</span>
      </motion.button>
      <div className="diyas"><Diya /><Diya /></div>
    </main>
  );
}
