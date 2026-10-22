"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import { COUNTRIES } from "@/lib/data";
import "./Presence.css";

const CODES = { Germany: "DE", "United Kingdom": "GB", Malaysia: "MY", "United States": "US", Canada: "CA", "United Arab Emirates": "AE" };
const N = COUNTRIES.length;
const STEP = 360 / N;

export default function Presence() {
  const [i, setI] = useState(3);
  const [angle, setAngle] = useState(-3 * STEP);
  const c = COUNTRIES[i];

  const go = (j) => {
    const d = ((j - i + N + N / 2) % N) - N / 2; // shortest way round
    setAngle((a) => a - d * STEP);
    setI(j);
  };

  return (
    <section id="presence" className="section presence">
      <h2 className="section-title">Clients in six countries</h2>
      <p className="section-lead">Thirty cities across Europe, Asia and North America.</p>
      <div className="presence-grid">
        <div>
          <div className="pr-visual">
            <div className="pr-glow" />
            <div className="pr-floor" />
            <div className="pr-float">
              <div className="pr-stage" style={{ transform: `rotateX(-8deg) rotateY(${angle}deg)` }}>
                {COUNTRIES.map((x, k) => {
                  const on = k === i;
                  return (
                    <button key={x.name} className={on ? "pr-card on" : "pr-card"}
                      style={{ transform: `rotateY(${k * STEP}deg) translateZ(var(--r))` }}
                      onClick={() => go(k)} aria-pressed={on} aria-label={`${x.name}, ${x.cities.length} cities`}>
                      <span className="pr-top"><span className="pr-code">{CODES[x.name]}</span>{on && <i className="pr-ping" />}</span>
                      <span>
                        <span className="pr-name">{x.name}</span>
                        <span className="pr-meta"><Icon name="pin" size={14} /> {x.cities.length} cities</span>
                        <span className="pr-dots">{x.cities.map((city) => <em key={city} />)}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pr-nav">
            <button onClick={() => go((i + N - 1) % N)} aria-label="Previous country"><span style={{ display: "inline-flex", transform: "rotate(180deg)" }}><Icon name="arrow" size={20} /></span></button>
            <span className="pr-count">{i + 1} / {N}</span>
            <button onClick={() => go((i + 1) % N)} aria-label="Next country"><Icon name="arrow" size={20} /></button>
          </div>
        </div>

        <div>
          <div className="chips" role="tablist" aria-label="Countries">
            {COUNTRIES.map((x, idx) => (
              <button key={x.name} role="tab" aria-selected={idx === i}
                className={idx === i ? "chip on" : "chip"} onClick={() => go(idx)}>
                <span className="code" aria-hidden="true">{CODES[x.name]}</span> {x.name}
              </button>
            ))}
          </div>
          <div className="cities" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.ul key={c.name} initial="hidden" animate="show" exit={{ opacity: 0 }}
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}>
                {c.cities.map((city) => (
                  <motion.li key={city} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>{city}</motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}