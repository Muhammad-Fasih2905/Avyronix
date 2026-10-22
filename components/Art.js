import { useId } from "react";

const D = "svgd", B = "svgb";
const Svg = ({ children, id, c1 = "#7d1128", c2 = "#0a0a0b" }) => (
  <svg viewBox="0 0 640 400" className="artsvg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={c1} /><stop offset="1" stopColor={c2} /></linearGradient>
      <radialGradient id={`${id}glow`} cx=".25" cy=".15" r=".8"><stop offset="0" stopColor="#fff" stopOpacity=".22" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
      <filter id={`${id}sh`} x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#000" floodOpacity=".5" /></filter>
    </defs>
    <rect width="640" height="400" fill={`url(#${id}bg)`} />
    <rect width="640" height="400" fill={`url(#${id}glow)`} />
    {children}
  </svg>
);
const Bars = ({ x, y, ws, fill, h = 6, gap = 11, r = 3 }) => ws.map((w, i) => <rect key={i} x={x} y={y + i * gap} width={w} height={h} rx={r} fill={fill} />);

/* ---------- Website mockup ---------- */
function WebArt({ p, id }) {
  const t = p.theme, s = p.shot, v = s.variant || 0;
  const faint = (a) => `${t.fg}${a}`;
  return (
    <Svg id={id} c1={t.accent} c2="#0a0a0b">
      <g filter={`url(#${id}sh)`}>
        <clipPath id={`${id}clip`}><rect x="70" y="34" width="500" height="340" rx="14" /></clipPath>
        <rect x="70" y="34" width="500" height="340" rx="14" fill={t.bg} />
        <g clipPath={`url(#${id}clip)`}>
          <rect x="70" y="34" width="500" height="28" fill="#1b1b1f" />
          {[88, 102, 116].map((x, i) => <circle key={x} cx={x} cy="48" r="4.5" fill={["#ff5f57", "#febc2e", "#28c840"][i]} />)}
          <rect x="150" y="40" width="270" height="16" rx="8" fill="#2c2c32" />
          <text x="164" y="52" fontSize="9" fill="#a9a9b3" className={B}>{s.domain}</text>
          <circle cx="94" cy="86" r="8" fill={t.accent} />
          <text x="108" y="90" fontSize="12" fontWeight="700" fill={t.fg} className={D}>{p.name.split(" ")[0]}</text>
          {[300, 346, 392, 438].map((x) => <rect key={x} x={x} y="83" width="32" height="5" rx="2.5" fill={faint("66")} />)}
          <rect x="492" y="77" width="64" height="20" rx="10" fill={t.accent} />
          <text x="508" y="91" fontSize="9" fontWeight="700" fill={t.on || (v === 99 ? "#000" : "#fff")} className={B}>{s.cta}</text>
          <text x="92" y="150" fontSize="23" fontWeight="800" fill={t.fg} className={D}>{s.l1}</text>
          <text x="92" y="177" fontSize="23" fontWeight="800" fill={t.accent} className={D}>{s.l2}</text>
          <Bars x={92} y={194} ws={[190, 150]} fill={faint("40")} />
          <rect x="92" y="226" width="96" height="26" rx="13" fill={t.accent} />
          <text x="112" y="243" fontSize="10" fontWeight="700" fill={t.on || "#fff"} className={B}>{s.cta}</text>
          <rect x="198" y="226" width="86" height="26" rx="13" fill="none" stroke={faint("55")} />
          {v === 0 && (<g><circle cx="460" cy="176" r="66" fill={t.accent} opacity=".9" /><circle cx="500" cy="136" r="26" fill={t.fg} opacity=".18" /><circle cx="424" cy="212" r="18" fill={t.fg} opacity=".25" /></g>)}
          {v === 1 && (<g>{[0, 1, 2].map((i) => <rect key={i} x={380 + i * 30} y={122 + i * 16} width="130" height="92" rx="14" fill={i === 2 ? t.accent : faint(i ? "26" : "14")} stroke={faint("22")} transform={`rotate(${-6 + i * 5} ${445 + i * 30} ${168 + i * 16})`} />)}</g>)}
          {v === 2 && (<g><rect x="372" y="112" width="190" height="124" rx="16" fill={t.accent} opacity=".92" /><circle cx="520" cy="146" r="16" fill="#fff" opacity=".75" /><path d="M372 236 L430 170 L470 210 L505 176 L562 236Z" fill="#000" opacity=".28" /></g>)}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={92 + i * 160} y="276" width="148" height="86" rx="12" fill={faint("0d")} stroke={faint("1c")} />
              <circle cx={110 + i * 160} cy="296" r="9" fill={t.accent} opacity=".85" />
              <Bars x={126 + i * 160} y={292} ws={[70, 44]} fill={faint("55")} h={5} gap={10} />
              <Bars x={104 + i * 160} y={318} ws={[120, 96, 70]} fill={faint("2a")} h={5} gap={10} />
            </g>
          ))}
        </g>
      </g>
    </Svg>
  );
}

/* ---------- Mobile mockup ---------- */
function Phone({ x, y, t, s, screen, name, rot = 0, id }) {
  const on = t.on || "#fff";
  const gid = `${id}p${x}`;
  return (
    <g transform={`rotate(${rot} ${x + 85} ${y + 160})`} filter={`url(#${id}sh)`}>
      <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={t.accent} /><stop offset="1" stopColor={t.accent} stopOpacity=".6" /></linearGradient></defs>
      <rect x={x} y={y} width="170" height="320" rx="28" fill="#08080a" stroke="#4a4a52" strokeWidth="3" />
      <rect x={x + 8} y={y + 8} width="154" height="304" rx="21" fill={t.bg} />
      <rect x={x + 60} y={y + 14} width="50" height="13" rx="6.5" fill="#000" />
      <text x={x + 22} y={y + 24} fontSize="8" fontWeight="700" fill={t.fg} className={B}>9:41</text>
      <text x={x + 20} y={y + 54} fontSize="13" fontWeight="800" fill={t.fg} className={D}>{name}</text>
      {screen === "home" ? (
        <g>
          <rect x={x + 18} y={y + 66} width="134" height="100" rx="15" fill={`url(#${gid})`} />
          <text x={x + 30} y={y + 98} fontSize="14" fontWeight="800" fill={on} className={D}>{s.l1}</text>
          <text x={x + 30} y={y + 115} fontSize="14" fontWeight="800" fill={on} opacity=".85" className={D}>{s.l2}</text>
          <rect x={x + 30} y={y + 130} width="62" height="20" rx="10" fill={on} />
          <text x={x + 40} y={y + 143.5} fontSize="8.5" fontWeight="700" fill={t.accent === on ? t.bg : t.accent} className={B}>{s.cta}</text>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <circle cx={x + 30} cy={y + 190 + i * 25} r="10" fill={t.accent} opacity={0.9 - i * 0.2} />
              <rect x={x + 48} y={y + 184 + i * 25} width={86 - i * 12} height="6" rx="3" fill={t.fg} opacity=".5" />
              <rect x={x + 48} y={y + 196 + i * 25} width={56 - i * 6} height="5" rx="2.5" fill={t.fg} opacity=".22" />
            </g>
          ))}
        </g>
      ) : (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={x + 18} y={y + 68 + i * 49} width="134" height="42" rx="12" fill={t.fg} opacity=".07" />
              <rect x={x + 26} y={y + 76 + i * 49} width="26" height="26" rx="8" fill={t.accent} opacity={1 - i * 0.18} />
              <rect x={x + 60} y={y + 79 + i * 49} width={70 - i * 6} height="6" rx="3" fill={t.fg} opacity=".55" />
              <rect x={x + 60} y={y + 91 + i * 49} width={44} height="5" rx="2.5" fill={t.fg} opacity=".25" />
            </g>
          ))}
        </g>
      )}
      <rect x={x + 8} y={y + 270} width="154" height="42" rx="0" fill={t.fg} opacity=".06" />
      {[0, 1, 2, 3].map((i) => <circle key={i} cx={x + 32 + i * 35} cy={y + 291} r="5" fill={i === 0 ? t.accent : t.fg} opacity={i === 0 ? 1 : 0.35} />)}
    </g>
  );
}
function MobileArt({ p, id }) {
  const t = p.theme, s = p.shot;
  return (
    <Svg id={id} c1={t.accent} c2="#0a0a0b">
      <circle cx="320" cy="200" r="150" fill="#fff" opacity=".06" />
      <Phone id={id} x={168} y={58} t={t} s={s} screen="list" name={p.name.split(" ")[0]} rot={-7} />
      <Phone id={id} x={302} y={40} t={t} s={s} screen="home" name={p.name.split(" ")[0]} rot={4} />
    </Svg>
  );
}

/* ---------- AI dashboard ---------- */
function AiArt({ id }) {
  return (
    <Svg id={id} c1="#8a1530" c2="#0a0a0b">
      <g filter={`url(#${id}sh)`}>
        <rect x="46" y="38" width="548" height="324" rx="16" fill="#121215" stroke="#2c2c33" />
        <rect x="46" y="38" width="548" height="30" rx="16" fill="#1a1a1f" />
        {[64, 78, 92].map((x, i) => <circle key={x} cx={x} cy="53" r="4.5" fill={["#ff5f57", "#febc2e", "#28c840"][i]} />)}
        <text x="118" y="57" fontSize="10" fill="#9a9aa5" className={B}>Support assistant · Live</text>
        <rect x="58" y="80" width="196" height="270" rx="12" fill="#18181d" />
        <rect x="70" y="94" width="120" height="30" rx="10" fill="#26262d" />
        <Bars x={80} y={103} ws={[96, 60]} fill="#8d8d99" h={5} gap={9} />
        <rect x="112" y="136" width="130" height="38" rx="10" fill="#a3173a" />
        <Bars x={122} y={147} ws={[104, 70]} fill="#ffd6de" h={5} gap={9} />
        <rect x="70" y="188" width="150" height="46" rx="10" fill="#26262d" />
        <Bars x={80} y={199} ws={[126, 110, 70]} fill="#8d8d99" h={5} gap={9} />
        <rect x="70" y="248" width="46" height="22" rx="11" fill="#26262d" />
        {[84, 93, 102].map((x, i) => <circle key={x} cx={x} cy="259" r="2.6" fill="#ff5b7a" opacity={1 - i * 0.28} />)}
        <rect x="68" y="316" width="176" height="26" rx="13" fill="#0c0c0f" stroke="#33333b" />
        <text x="82" y="333" fontSize="9" fill="#777784" className={B}>Type a message…</text>
        <circle cx="228" cy="329" r="9" fill="#a3173a" />
        {[["94%", "Resolved"], ["1.2s", "Reply time"], ["24/7", "Coverage"]].map(([a, b], i) => (
          <g key={a}>
            <rect x={268 + i * 108} y="80" width="100" height="56" rx="12" fill="#18181d" />
            <text x={280 + i * 108} y="107" fontSize="19" fontWeight="800" fill="#f2eeef" className={D}>{a}</text>
            <text x={280 + i * 108} y="124" fontSize="9" fill="#8d8d99" className={B}>{b}</text>
          </g>
        ))}
        <rect x="268" y="148" width="208" height="202" rx="12" fill="#18181d" />
        <text x="282" y="170" fontSize="10" fontWeight="700" fill="#cfc9cc" className={B}>Conversations this week</text>
        <defs><linearGradient id={`${id}ar`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff5b7a" stopOpacity=".5" /><stop offset="1" stopColor="#ff5b7a" stopOpacity="0" /></linearGradient></defs>
        <path d="M282 320 L318 290 L354 300 L390 250 L426 262 L462 206 L462 330 L282 330Z" fill={`url(#${id}ar)`} />
        <polyline points="282,320 318,290 354,300 390,250 426,262 462,206" fill="none" stroke="#ff5b7a" strokeWidth="2.5" strokeLinejoin="round" />
        {[[282, 320], [318, 290], [354, 300], [390, 250], [426, 262], [462, 206]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="3.5" fill="#fff" />)}
        <rect x="488" y="148" width="94" height="202" rx="12" fill="#18181d" />
        <circle cx="535" cy="214" r="30" fill="none" stroke="#2c2c33" strokeWidth="12" />
        <circle cx="535" cy="214" r="30" fill="none" stroke="#a3173a" strokeWidth="12" strokeDasharray="120 190" transform="rotate(-90 535 214)" />
        <circle cx="535" cy="214" r="30" fill="none" stroke="#c9c3c6" strokeWidth="12" strokeDasharray="40 190" strokeDashoffset="-120" transform="rotate(-90 535 214)" />
        <Bars x={500} y={274} ws={[60, 48, 54]} fill="#6f6f7b" h={5} gap={14} />
      </g>
    </Svg>
  );
}

/* ---------- Online store ---------- */
function ShopArt({ id }) {
  const items = [
    <g key="b"><rect x="-22" y="-8" width="44" height="40" rx="6" fill="#7d1128" /><path d="M-12 -8 q12 -26 24 0" fill="none" stroke="#3a3a40" strokeWidth="4" /></g>,
    <g key="o"><rect x="-13" y="-14" width="26" height="46" rx="7" fill="#2a2a30" /><rect x="-7" y="-26" width="14" height="14" rx="3" fill="#a3173a" /></g>,
    <g key="s"><path d="M-26 22 q0 -22 14 -26 l14 12 q14 2 22 14z" fill="#c9c3c6" /><rect x="-26" y="22" width="52" height="7" rx="3" fill="#2a2a30" /></g>,
    <g key="w"><rect x="-8" y="-30" width="16" height="64" rx="5" fill="#3a3a40" /><circle r="19" fill="#d9335a" /><circle r="14" fill="#18181d" /><path d="M0 0 v-9 M0 0 l6 3" stroke="#fff" strokeWidth="2" /></g>,
  ];
  return (
    <Svg id={id} c1="#7d1128" c2="#0a0a0b">
      <g filter={`url(#${id}sh)`}>
        <clipPath id={`${id}c`}><rect x="62" y="30" width="516" height="344" rx="14" /></clipPath>
        <rect x="62" y="30" width="516" height="344" rx="14" fill="#f7f3f2" />
        <g clipPath={`url(#${id}c)`}>
          <rect x="62" y="30" width="516" height="26" fill="#1b1b1f" />
          {[78, 92, 106].map((x, i) => <circle key={x} cx={x} cy="43" r="4.5" fill={["#ff5f57", "#febc2e", "#28c840"][i]} />)}
          <text x="84" y="88" fontSize="14" fontWeight="800" fill="#161618" className={D}>MAISON</text>
          {[190, 240, 290, 340].map((x) => <rect key={x} x={x} y="80" width="34" height="5" rx="2.5" fill="#9a9298" />)}
          <circle cx="520" cy="84" r="9" fill="none" stroke="#161618" strokeWidth="2" /><circle cx="552" cy="84" r="9" fill="#7d1128" />
          <text x="549" y="88" fontSize="9" fontWeight="700" fill="#fff" className={B}>2</text>
          <rect x="80" y="104" width="480" height="104" rx="14" fill="#7d1128" />
          <circle cx="500" cy="170" r="70" fill="#a3173a" opacity=".7" /><circle cx="530" cy="130" r="30" fill="#ff5b7a" opacity=".35" />
          <text x="102" y="146" fontSize="22" fontWeight="800" fill="#fff" className={D}>New season</text>
          <text x="102" y="168" fontSize="22" fontWeight="800" fill="#ffd6de" className={D}>arrivals</text>
          <rect x="102" y="180" width="82" height="20" rx="10" fill="#fff" />
          <text x="116" y="194" fontSize="9" fontWeight="700" fill="#7d1128" className={B}>Shop now</text>
          {items.map((it, i) => (
            <g key={i}>
              <rect x={80 + i * 122} y="226" width="114" height="116" rx="12" fill="#ebe5e3" />
              <g transform={`translate(${137 + i * 122} 276)`}>{it}</g>
              <rect x={90 + i * 122} y="350" width="50" height="5" rx="2.5" fill="#6d666a" />
              <text x={90 + i * 122} y="366" fontSize="10" fontWeight="800" fill="#161618" className={B}>{["$48", "$32", "$96", "$120"][i]}</text>
            </g>
          ))}
        </g>
      </g>
    </Svg>
  );
}

/* ---------- Brand identity board ---------- */
function BrandArt({ id }) {
  return (
    <Svg id={id} c1="#6b0f22" c2="#0a0a0b">
      <g filter={`url(#${id}sh)`}>
        <rect x="52" y="36" width="200" height="328" rx="10" fill="#7d1128" />
        <circle cx="152" cy="140" r="52" fill="#f4eeec" />
        <path d="M112 142 q10 -20 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#7d1128" strokeWidth="6" strokeLinecap="round" />
        <text x="152" y="232" textAnchor="middle" fontSize="23" fontWeight="800" fill="#f4eeec" className={D}>HARBOR</text>
        <text x="152" y="258" textAnchor="middle" fontSize="23" fontWeight="800" fill="#f4eeec" className={D}>ROAST</text>
        <rect x="92" y="278" width="120" height="3" fill="#f4eeec" opacity=".5" />
        <text x="152" y="304" textAnchor="middle" fontSize="9" fill="#f4eeec" opacity=".8" className={B}>Small batch · Slow mornings</text>
        <rect x="268" y="36" width="150" height="150" rx="10" fill="#f4eeec" />
        <circle cx="343" cy="92" r="30" fill="#7d1128" />
        <path d="M322 94 q6 -12 12 0 t12 0 t12 0" fill="none" stroke="#f4eeec" strokeWidth="4" strokeLinecap="round" />
        <text x="343" y="152" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1b1b1f" className={D}>HARBOR ROAST</text>
        <rect x="434" y="36" width="154" height="70" rx="10" fill="#1c1c1f" />
        {["#7d1128", "#d9335a", "#c9c3c6", "#2a2a30", "#f4eeec"].map((c, i) => <circle key={c} cx={456 + i * 28} cy="71" r="11" fill={c} />)}
        <rect x="434" y="116" width="154" height="70" rx="10" fill="#f4eeec" />
        <text x="452" y="162" fontSize="38" fontWeight="800" fill="#1b1b1f" className={D}>Aa</text>
        <Bars x={512} y={134} ws={[60, 44, 52]} fill="#1b1b1f" h={5} gap={12} />
        <g transform="rotate(-5 340 270)">
          <rect x="270" y="212" width="170" height="100" rx="8" fill="#161618" stroke="#33333a" />
          <circle cx="294" cy="238" r="9" fill="#d9335a" />
          <text x="288" y="268" fontSize="11" fontWeight="800" fill="#f2eeef" className={D}>Maya Collins</text>
          <text x="288" y="282" fontSize="8" fill="#9a9aa5" className={B}>Head Roaster</text>
          <Bars x={288} y={292} ws={[80, 60]} fill="#4a4a52" h={4} gap={8} />
        </g>
        <g transform="rotate(4 520 270)">
          <rect x="446" y="214" width="130" height="100" rx="8" fill="#f4eeec" />
          <rect x="460" y="228" width="40" height="40" rx="6" fill="#7d1128" />
          <Bars x={460} y={280} ws={[90, 70]} fill="#7d1128" h={5} gap={10} />
        </g>
        <text x="270" y="346" fontSize="10" fill="#cfc9cc" className={B}>Logo · Palette · Type · Print</text>
      </g>
    </Svg>
  );
}

/* ---------- Video editor ---------- */
function VideoArt({ id }) {
  return (
    <Svg id={id} c1="#7d1128" c2="#0a0a0b">
      <g filter={`url(#${id}sh)`}>
        <rect x="42" y="30" width="556" height="340" rx="14" fill="#101013" stroke="#2c2c33" />
        <defs><linearGradient id={`${id}sky`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff8a6b" /><stop offset=".6" stopColor="#a3173a" /><stop offset="1" stopColor="#3a0a18" /></linearGradient></defs>
        <clipPath id={`${id}pv`}><rect x="56" y="44" width="352" height="198" rx="8" /></clipPath>
        <g clipPath={`url(#${id}pv)`}>
          <rect x="56" y="44" width="352" height="198" fill={`url(#${id}sky)`} />
          <circle cx="300" cy="130" r="34" fill="#ffd9a8" />
          <path d="M56 242 L56 190 L130 150 L200 196 L270 160 L340 200 L408 170 L408 242Z" fill="#1a0b12" />
          <path d="M56 242 L56 214 L150 190 L240 220 L330 198 L408 222 L408 242Z" fill="#0c0508" />
          <text x="76" y="84" fontSize="20" fontWeight="800" fill="#fff" className={D}>Meet the new</text>
          <text x="76" y="108" fontSize="20" fontWeight="800" fill="#fff" className={D}>standard.</text>
        </g>
        <circle cx="232" cy="143" r="22" fill="#000" opacity=".5" /><path d="M225 132 L245 143 L225 154Z" fill="#fff" />
        <rect x="422" y="44" width="162" height="198" rx="8" fill="#18181d" />
        <Bars x={436} y={60} ws={[90, 120, 70, 110]} fill="#4a4a52" h={5} gap={18} />
        {[0, 1, 2].map((i) => <rect key={i} x={436} y={140 + i * 28} width="134" height="6" rx="3" fill="#2c2c33" />)}
        {[110, 80, 120].map((w, i) => <rect key={i} x={436} y={140 + i * 28} width={w} height="6" rx="3" fill="#d9335a" />)}
        <rect x="56" y="254" width="528" height="104" rx="8" fill="#18181d" />
        {Array.from({ length: 22 }).map((_, i) => <rect key={i} x={72 + i * 23} y="262" width="1.5" height={i % 4 ? 5 : 9} fill="#6f6f7b" />)}
        {[[72, 120, "#a3173a"], [196, 90, "#d9335a"], [292, 150, "#7d1128"], [446, 110, "#a3173a"]].map(([x, w, c], i) => <rect key={i} x={x} y="282" width={w} height="22" rx="4" fill={c} />)}
        {[[72, 80, "#c9c3c6"], [158, 140, "#8d8791"], [304, 200, "#c9c3c6"]].map(([x, w, c], i) => <rect key={i} x={x} y="310" width={w} height="16" rx="4" fill={c} opacity=".85" />)}
        {Array.from({ length: 56 }).map((_, i) => <rect key={i} x={72 + i * 9} y={339 - ((i * 7) % 11)} width="4" height={4 + ((i * 7) % 11) * 2} rx="2" fill="#ff5b7a" opacity=".75" />)}
        <line x1="268" y1="258" x2="268" y2="354" stroke="#fff" strokeWidth="2" /><path d="M260 254 h16 l-8 10z" fill="#fff" />
      </g>
    </Svg>
  );
}

/* ---------- Social content calendar ---------- */
function SocialArt({ id }) {
  const cols = ["#a3173a", "#c9c3c6", "#2a2a30", "#d9335a", "#7d1128", "#8d8791"];
  const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Svg id={id} c1="#7d1128" c2="#0a0a0b">
      <g filter={`url(#${id}sh)`}>
        <rect x="46" y="34" width="296" height="332" rx="14" fill="#141417" stroke="#2c2c33" />
        <text x="64" y="62" fontSize="13" fontWeight="800" fill="#f2eeef" className={D}>Content calendar</text>
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <text key={i} x={70 + i * 38} y="86" fontSize="9" fill="#8d8d99" className={B}>{d}</text>)}
        {Array.from({ length: 28 }).map((_, i) => {
          const r = Math.floor(i / 7), c = i % 7, on = [1, 3, 4, 8, 10, 12, 15, 17, 19, 22, 24, 26].includes(i);
          return (
            <g key={i}>
              <rect x={58 + c * 38} y={96 + r * 64} width="34" height="58" rx="8" fill="#1d1d22" />
              {on && <rect x={62 + c * 38} y={118 + r * 64} width="26" height="14" rx="4" fill={cols[(i * 3) % 6]} />}
              {on && <rect x={62 + c * 38} y={136 + r * 64} width="16" height="4" rx="2" fill="#6f6f7b" />}
              <text x={63 + c * 38} y={110 + r * 64} fontSize="8" fill="#6f6f7b" className={B}>{i + 1}</text>
            </g>
          );
        })}
        <rect x="358" y="34" width="236" height="332" rx="14" fill="#141417" stroke="#2c2c33" />
        <circle cx="388" cy="68" r="14" fill="#a3173a" />
        <text x="410" y="66" fontSize="11" fontWeight="800" fill="#f2eeef" className={D}>yourbrand</text>
        <text x="410" y="80" fontSize="8" fill="#8d8d99" className={B}>Posts · Reach · Engagement</text>
        {posts.map((i) => {
          const x = 372 + (i % 3) * 72, y = 100 + Math.floor(i / 3) * 72;
          return (
            <g key={i}>
              <rect x={x} y={y} width="68" height="68" rx="8" fill={cols[i % 6]} />
              {i % 3 === 0 && <circle cx={x + 34} cy={y + 34} r="16" fill="#fff" opacity=".25" />}
              {i % 3 === 1 && <path d={`M${x + 12} ${y + 56} L${x + 34} ${y + 16} L${x + 56} ${y + 56}Z`} fill="#fff" opacity=".22" />}
              {i % 3 === 2 && <rect x={x + 16} y={y + 16} width="36" height="36" rx="6" fill="#fff" opacity=".22" />}
            </g>
          );
        })}
        <path d="M376 336 q6 -8 12 0 q6 8 12 0 q-12 14 -24 0z" fill="#ff5b7a" />
        <rect x="410" y="330" width="60" height="5" rx="2.5" fill="#4a4a52" />
      </g>
    </Svg>
  );
}

/* ---------- Storyboard ---------- */
function StoryArt({ id }) {
  const ink = "#26262b";
  const scenes = [
    <g key="1"><circle cx="110" cy="30" r="9" fill="none" stroke={ink} strokeWidth="2" /><path d="M0 70 q40 -34 80 0 t80 0" fill="none" stroke={ink} strokeWidth="2" /></g>,
    <g key="2"><circle cx="50" cy="40" r="9" fill="none" stroke={ink} strokeWidth="2" /><path d="M50 49 v24 M36 58 h28 M50 73 l-10 16 M50 73 l10 16" stroke={ink} strokeWidth="2" fill="none" /><rect x="84" y="14" width="62" height="28" rx="10" fill="none" stroke={ink} strokeWidth="2" /></g>,
    <g key="3"><circle cx="75" cy="52" r="32" fill="none" stroke={ink} strokeWidth="2" /><circle cx="64" cy="46" r="3.5" fill={ink} /><circle cx="86" cy="46" r="3.5" fill={ink} /><path d="M62 62 q13 10 26 0" fill="none" stroke={ink} strokeWidth="2" /></g>,
    <g key="4"><path d="M8 88 V50 h22 V30 h24 V60 h20 V40 h26 V88Z" fill="none" stroke={ink} strokeWidth="2" /><path d="M30 42 h6 M30 52 h6 M84 50 h6" stroke={ink} strokeWidth="2" /></g>,
    <g key="5"><rect x="36" y="48" width="64" height="24" rx="8" fill="none" stroke={ink} strokeWidth="2" /><circle cx="52" cy="76" r="7" fill="none" stroke={ink} strokeWidth="2" /><circle cx="86" cy="76" r="7" fill="none" stroke={ink} strokeWidth="2" /><path d="M6 54 h22 M10 64 h18 M110 60 l24 0 M126 52 l8 8 -8 8" stroke="#a3173a" strokeWidth="2.5" fill="none" /></g>,
    <g key="6"><circle cx="75" cy="46" r="24" fill="#a3173a" /><path d="M64 48 q5 -9 11 0 t11 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><rect x="40" y="78" width="70" height="6" rx="3" fill={ink} /></g>,
  ];
  return (
    <Svg id={id} c1="#5c0d1d" c2="#0a0a0b">
      <g filter={`url(#${id}sh)`}>
        <rect x="42" y="30" width="556" height="340" rx="10" fill="#efe9e6" />
        <text x="62" y="58" fontSize="13" fontWeight="800" fill="#1b1b1f" className={D}>Explainer film · Storyboard</text>
        <text x="520" y="58" fontSize="9" fill="#6d666a" className={B}>Page 1 of 1</text>
        {scenes.map((s, i) => {
          const x = 62 + (i % 3) * 178, y = 72 + Math.floor(i / 3) * 148;
          return (
            <g key={i}>
              <rect x={x} y={y} width="160" height="96" fill="#fff" stroke="#26262b" strokeWidth="1.6" />
              <g transform={`translate(${x + 4} ${y + 4})`}>{s}</g>
              <rect x={x} y={y} width="30" height="14" fill="#26262b" />
              <text x={x + 6} y={y + 10.5} fontSize="8" fontWeight="700" fill="#fff" className={B}>{`SC ${i + 1}`}</text>
              <Bars x={x} y={y + 106} ws={[150, 110]} fill="#9a9298" h={4} gap={9} />
            </g>
          );
        })}
      </g>
    </Svg>
  );
}

/* ---------- Air duct before / after ---------- */
function DuctArt({ id }) {
  return (
    <Svg id={id} c1="#6b0f22" c2="#0a0a0b">
      <defs>
        <linearGradient id={`${id}m`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e4e1e3" /><stop offset=".5" stopColor="#9a969b" /><stop offset="1" stopColor="#55525a" /></linearGradient>
        <linearGradient id={`${id}in`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a2a30" /><stop offset="1" stopColor="#0d0d10" /></linearGradient>
        <clipPath id={`${id}d`}><rect x="40" y="120" width="560" height="160" rx="20" /></clipPath>
      </defs>
      <g filter={`url(#${id}sh)`}>
        <rect x="40" y="120" width="560" height="160" rx="20" fill={`url(#${id}m)`} />
        <rect x="52" y="132" width="536" height="136" rx="14" fill={`url(#${id}in)`} />
        <g clipPath={`url(#${id}d)`}>
          <rect x="52" y="132" width="268" height="136" fill="#4a3f38" opacity=".85" />
          {[[80, 220, 26], [120, 244, 18], [170, 200, 30], [210, 238, 22], [250, 210, 28], [290, 246, 20], [100, 160, 20], [200, 150, 24], [280, 168, 18], [140, 190, 14]].map(([x, y, r], i) => <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.6} fill={i % 2 ? "#6b5a4d" : "#33291f"} opacity=".9" />)}
          {Array.from({ length: 26 }).map((_, i) => <circle key={i} cx={60 + ((i * 53) % 250)} cy={140 + ((i * 37) % 120)} r={1.6 + (i % 3)} fill="#a8927d" opacity=".7" />)}
          {[0, 1, 2, 3].map((i) => <path key={i} d={`M${340 + i * 56} 168 h34 M${340 + i * 56} 200 h34 M${340 + i * 56} 232 h34`} stroke="#ff5b7a" strokeWidth="3" strokeLinecap="round" opacity=".85" />)}
          <rect x="320" y="132" width="268" height="136" fill="#fff" opacity=".05" />
          <line x1="320" y1="120" x2="320" y2="280" stroke="#fff" strokeWidth="3" strokeDasharray="6 6" />
        </g>
      </g>
      <rect x="150" y="76" width="92" height="26" rx="13" fill="#2a2a30" /><text x="196" y="93" textAnchor="middle" fontSize="11" fontWeight="700" fill="#e0d4cb" className={B}>Before</text>
      <rect x="400" y="76" width="92" height="26" rx="13" fill="#a3173a" /><text x="446" y="93" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" className={B}>After</text>
      <g transform="translate(470 312)">
        <rect width="112" height="50" rx="8" fill="#d8d4d6" /><rect x="6" y="6" width="100" height="38" rx="4" fill="#9a969b" />
        {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="12" y={11 + i * 7} width="88" height="3.5" rx="1.7" fill="#2a2a30" />)}
      </g>
      <text x="62" y="338" fontSize="13" fontWeight="800" fill="#f2eeef" className={D}>Duct cleaning, end to end</text>
      <text x="62" y="356" fontSize="10" fill="#cfc9cc" className={B}>Inspect · Clean · Verify airflow</text>
    </Svg>
  );
}

/* ---------- Pet accessories ---------- */
function PetArt({ id }) {
  return (
    <Svg id={id} c1="#7d1128" c2="#0a0a0b">
      <circle cx="320" cy="214" r="170" fill="#fff" opacity=".07" />
      <g filter={`url(#${id}sh)`}>
        <ellipse cx="190" cy="290" rx="130" ry="58" fill="#2a2a30" />
        <ellipse cx="190" cy="284" rx="100" ry="38" fill="#c9c3c6" opacity=".9" />
        <ellipse cx="190" cy="282" rx="70" ry="24" fill="#8d8791" />
        <ellipse cx="190" cy="246" rx="34" ry="16" fill="#a3173a" opacity="0" />
        <path d="M350 258 h120 l-14 70 h-92z" fill="#b6b1b4" />
        <ellipse cx="410" cy="258" rx="60" ry="14" fill="#6d6870" />
        <ellipse cx="410" cy="258" rx="50" ry="9" fill="#3a3a40" />
        <circle cx="410" cy="303" r="9" fill="#7d1128" /><circle cx="394" cy="292" r="4" fill="#7d1128" /><circle cx="426" cy="292" r="4" fill="#7d1128" /><circle cx="404" cy="285" r="3.4" fill="#7d1128" /><circle cx="418" cy="285" r="3.4" fill="#7d1128" />
        <ellipse cx="420" cy="140" rx="82" ry="34" fill="none" stroke="#a3173a" strokeWidth="18" />
        <ellipse cx="420" cy="140" rx="82" ry="34" fill="none" stroke="#d9335a" strokeWidth="3" strokeDasharray="3 9" />
        <rect x="396" y="168" width="48" height="16" rx="3" fill="#c9c3c6" />
        <circle cx="420" cy="204" r="18" fill="#e0b25a" /><text x="420" y="209" textAnchor="middle" fontSize="12" fontWeight="800" fill="#4a3a14" className={D}>R</text>
        <path d="M110 120 q30 -70 90 -34 t40 66 q-30 18 -40 -8 t-60 -6" fill="none" stroke="#c9c3c6" strokeWidth="9" strokeLinecap="round" />
        <circle cx="110" cy="120" r="12" fill="none" stroke="#c9c3c6" strokeWidth="6" />
        <g transform="rotate(-24 540 150)"><rect x="500" y="144" width="80" height="14" rx="7" fill="#f4eeec" /><circle cx="500" cy="144" r="11" fill="#f4eeec" /><circle cx="500" cy="158" r="11" fill="#f4eeec" /><circle cx="580" cy="144" r="11" fill="#f4eeec" /><circle cx="580" cy="158" r="11" fill="#f4eeec" /></g>
      </g>
      {[["Collar", 372, 108], ["Bowl", 398, 352], ["Bed", 150, 358]].map(([t, x, y]) => <g key={t}><rect x={x} y={y - 14} width="52" height="20" rx="10" fill="#0a0a0b" opacity=".7" /><text x={x + 26} y={y} textAnchor="middle" fontSize="10" fontWeight="700" fill="#f2eeef" className={B}>{t}</text></g>)}
    </Svg>
  );
}

/* ---------- Veterinary care ---------- */
function VetArt({ id }) {
  return (
    <Svg id={id} c1="#7d1128" c2="#0a0a0b">
      <g filter={`url(#${id}sh)`}>
        <rect x="42" y="36" width="270" height="328" rx="18" fill="#18181d" stroke="#2c2c33" />
        <circle cx="177" cy="196" r="94" fill="#a3173a" opacity=".22" />
        <path d="M108 140 q-36 10 -26 78 q30 -10 38 -52z" fill="#5a4636" />
        <path d="M246 140 q36 10 26 78 q-30 -10 -38 -52z" fill="#5a4636" />
        <ellipse cx="177" cy="198" rx="70" ry="76" fill="#c9a37c" />
        <ellipse cx="177" cy="230" rx="38" ry="30" fill="#ead3b8" />
        <circle cx="152" cy="184" r="8" fill="#1b1b1f" /><circle cx="202" cy="184" r="8" fill="#1b1b1f" />
        <circle cx="154" cy="181" r="2.4" fill="#fff" /><circle cx="204" cy="181" r="2.4" fill="#fff" />
        <ellipse cx="177" cy="218" rx="15" ry="10" fill="#1b1b1f" />
        <path d="M177 228 v10 q-12 10 -20 2 M177 238 q12 10 20 2" fill="none" stroke="#1b1b1f" strokeWidth="3" strokeLinecap="round" />
        <path d="M118 296 q0 52 59 52 t59 -52" fill="none" stroke="#c9c3c6" strokeWidth="5" strokeLinecap="round" />
        <circle cx="118" cy="292" r="6" fill="#c9c3c6" /><circle cx="236" cy="292" r="6" fill="#c9c3c6" />
        <circle cx="177" cy="352" r="10" fill="#d9335a" />
        <rect x="60" y="52" width="86" height="24" rx="12" fill="#a3173a" /><text x="103" y="68" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" className={B}>Check-up</text>
        <rect x="328" y="36" width="270" height="140" rx="18" fill="#101013" stroke="#2c2c33" />
        <text x="346" y="62" fontSize="10" fontWeight="700" fill="#9a9aa5" className={B}>Heart rate · Live</text>
        <polyline points="346,128 380,128 392,128 402,92 414,156 428,110 438,128 480,128 492,128 502,92 514,156 528,110 538,128 580,128" fill="none" stroke="#ff5b7a" strokeWidth="2.6" strokeLinejoin="round" />
        {[0, 1, 2, 3].map((i) => <line key={i} x1="346" x2="580" y1={84 + i * 22} y2={84 + i * 22} stroke="#2c2c33" strokeWidth="1" />)}
        {[["Weight", "On track"], ["Vaccines", "Up to date"], ["Next visit", "In 6 months"]].map(([a, b], i) => (
          <g key={a}>
            <rect x="328" y={190 + i * 56} width="270" height="48" rx="12" fill="#18181d" />
            <circle cx="352" cy={214 + i * 56} r="11" fill="#a3173a" opacity=".85" /><path d={`M346 ${214 + i * 56} l4 4 8 -9`} fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
            <text x="374" y={209 + i * 56} fontSize="11" fontWeight="700" fill="#f2eeef" className={B}>{a}</text>
            <text x="374" y={225 + i * 56} fontSize="9" fill="#9a9aa5" className={B}>{b}</text>
          </g>
        ))}
      </g>
    </Svg>
  );
}

const MAP = { web: WebArt, mobile: MobileArt, ai: AiArt, shop: ShopArt, brand: BrandArt, video: VideoArt, social: SocialArt, story: StoryArt, duct: DuctArt, pet: PetArt, vet: VetArt };

export default function ProjectArt({ p }) {
  const id = useId().replace(/:/g, "");
  if (p.image) return <img className="artimg" src={p.image} alt={`${p.name} preview`} loading="lazy" />;
  const C = MAP[p.art] || WebArt;
  return <C p={p} id={id} />;
}
