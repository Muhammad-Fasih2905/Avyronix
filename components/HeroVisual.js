"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Icon from "./Icon";
import ProjectArt from "./Art";
import { GROUPS, SERVICES } from "@/lib/data";
import { PROJECTS } from "@/lib/projects";

const pick = (slug) => PROJECTS.find((p) => p.slug === slug);
const RINGS = [
  { g: "digital", size: 100, dur: 80, rev: false, off: 0.3 },
  { g: "creative", size: 76, dur: 60, rev: true, off: 1.1 },
  { g: "care", size: 52, dur: 46, rev: false, off: 0.6 },
];
const CARDS = [
  { cls: "k1", p: pick("nexamed") },
  { cls: "k2", p: pick("sample-ai-assistant") },
  { cls: "k3", p: pick("enjoy-by-enilive") },
];

export default function HeroVisual() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 16 }), sy = useSpring(my, { stiffness: 70, damping: 16 });
  const rotY = useTransform(sx, [-1, 1], [-14, 14]);
  const rotX = useTransform(sy, [-1, 1], [10, -10]);

  useEffect(() => {
    const f = (e) => { mx.set((e.clientX / window.innerWidth) * 2 - 1); my.set((e.clientY / window.innerHeight) * 2 - 1); };
    window.addEventListener("pointermove", f, { passive: true });
    return () => window.removeEventListener("pointermove", f);
  }, [mx, my]);

  return (
    <div className="hx-visual" aria-hidden="true">
      <div className="hx-orb" />
      <motion.div className="hx-stage" style={{ rotateX: rotX, rotateY: rotY }}>
        {RINGS.map((r) => {
          const g = GROUPS.find((x) => x.id === r.g);
          const list = SERVICES.filter((s) => s.group === r.g);
          const dir = r.rev ? "reverse" : "normal";
          const back = r.rev ? "normal" : "reverse";
          return (
            <div key={r.g} className="hx-ring" style={{ inset: `${(100 - r.size) / 2}%`, animationDuration: `${r.dur}s`, animationDirection: dir }}>
              {list.map((s, k) => {
                const a = (k / list.length) * Math.PI * 2 + r.off;
                return (
                  <span key={s.slug} className="hx-node" style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%`, "--c": g.color }}>
                    <span className="hx-node-in" data-label={s.name} style={{ animationDuration: `${r.dur}s`, animationDirection: back }}>
                      <Icon name={s.icon} size={20} />
                    </span>
                  </span>
                );
              })}
            </div>
          );
        })}

        {CARDS.map((c, i) => (
          <div key={c.cls} className={`hx-card ${c.cls}`}>
            <div className="hx-card-in" style={{ animationDelay: `${-i * 1.8}s` }}>
              <ProjectArt p={c.p} />
            </div>
          </div>
        ))}

        <div className="hx-chipw w1"><div className="hx-chip"><b>5,700</b><span>projects in 2023</span></div></div>
        <div className="hx-chipw w2"><div className="hx-chip"><b>6</b><span>countries</span></div></div>
        <div className="hx-chipw w3"><div className="hx-chip"><b>11</b><span>services</span></div></div>
      </motion.div>
    </div>
  );
}