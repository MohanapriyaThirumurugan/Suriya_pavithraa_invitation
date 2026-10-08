import { useEffect, useState } from "react";
import { WEDDING } from "./data.js";
const calc = () => {
  const ms = Math.max(0, new Date(WEDDING.target) - new Date());
  return { d: Math.floor(ms / 864e5), h: Math.floor(ms / 36e5) % 24, m: Math.floor(ms / 6e4) % 60, s: Math.floor(ms / 1e3) % 60 };
};
export default function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return (
    <div className="count">
      {[["Days", t.d], ["Hours", t.h], ["Minutes", t.m], ["Seconds", t.s]].map(([l, v]) => (
        <div key={l}><b>{String(v).padStart(2, "0")}</b><span>{l}</span></div>
      ))}
    </div>
  );
}
