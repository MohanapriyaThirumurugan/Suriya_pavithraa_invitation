// Decorative SVGs: mandala, hanging lantern, flower garland, diya
export const Mandala = () => (
  <svg className="mandala" viewBox="0 0 400 400" aria-hidden="true">
    <g fill="none" stroke="#e8c27a" strokeWidth="1">
      {[190, 160, 125, 90].map((r) => <circle key={r} cx="200" cy="200" r={r} strokeDasharray={r % 2 ? "2 6" : "none"} />)}
      {Array.from({ length: 16 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
          <path d="M200 10 Q222 55 200 95 Q178 55 200 10Z" />
          <path d="M200 100 Q212 125 200 150 Q188 125 200 100Z" />
          <circle cx="200" cy="22" r="3" fill="#e8c27a" />
        </g>
      ))}
    </g>
  </svg>
);

export const Lantern = ({ h = 80 }) => (
  <svg viewBox="0 0 60 120" height={h} aria-hidden="true">
    <line x1="30" y1="0" x2="30" y2="26" stroke="#e8c27a" strokeWidth="1.5" />
    <path d="M22 28h16l4 8H18z" fill="#d9a441" />
    <path d="M18 36h24l4 46H14z" fill="url(#lg)" stroke="#e8c27a" strokeWidth="1.5" />
    <path d="M30 36v46M22 36l-4 46M38 36l4 46" stroke="#e8c27a" strokeWidth="1" opacity=".7" />
    <path d="M14 82h32l-4 8H18z" fill="#d9a441" />
    <circle cx="30" cy="96" r="3" fill="#e8c27a" />
    <path d="M30 99v14" stroke="#e8c27a" strokeWidth="1.5" />
    <circle cx="30" cy="116" r="3.5" fill="#e8c27a" />
    <ellipse cx="30" cy="60" rx="7" ry="12" fill="#ffd77a" opacity=".85" className="glow" />
    <defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a02050" /><stop offset="1" stop-color="#6c1236" /></linearGradient></defs>
  </svg>
);

export const Garland = ({ flip }) => (
  <svg className={`garland ${flip ? "flip" : ""}`} viewBox="0 0 160 200" aria-hidden="true">
    {[[0, 0], [22, 0], [44, 0], [66, 0], [88, 0], [110, 0], [132, 0]].map(([x], i) => (
      <g key={i} className="strand" style={{ animationDelay: `${i * 0.25}s` }}>
        <line x1={x + 11} y1="0" x2={x + 11} y2={30 + ((i * 37) % 70)} stroke="#e8c27a" strokeWidth="1" />
        {Array.from({ length: 3 + (i % 4) }, (_, j) => (
          <circle key={j} cx={x + 11} cy={14 + j * 17} r="7" fill={j % 2 ? "#f6a21e" : "#e3452f"} stroke="#fff3" />
        ))}
      </g>
    ))}
    <path d="M0 4 Q80 22 160 4" stroke="#6bb36a" strokeWidth="5" fill="none" />
  </svg>
);

export const Diya = () => (
  <svg viewBox="0 0 80 70" width="64" aria-hidden="true">
    <path className="flame" d="M40 4 Q52 22 40 36 Q28 22 40 4Z" fill="#ffb02e" />
    <path className="flame" d="M40 14 Q46 24 40 32 Q34 24 40 14Z" fill="#fff1a8" />
    <path d="M6 40h68q-4 24-34 26Q10 64 6 40Z" fill="#c9792b" stroke="#e8c27a" strokeWidth="2" />
    <path d="M14 48h52" stroke="#e8c27a" strokeWidth="1.5" strokeDasharray="3 4" />
  </svg>
);
