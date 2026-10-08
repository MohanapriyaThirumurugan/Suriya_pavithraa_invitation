import { useMemo } from "react";
export default function Petals() {
  const petals = useMemo(() => Array.from({ length: 16 }, (_, i) => ({
    left: Math.random() * 100, delay: Math.random() * 12, dur: 10 + Math.random() * 10,
    size: 10 + Math.random() * 12, hue: i % 3,
  })), []);
  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p, i) => (
        <span key={i} className={`petal h${p.hue}`} style={{ left: `${p.left}%`, width: p.size, height: p.size * 1.3, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
      ))}
    </div>
  );
}
