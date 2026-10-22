"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ProjectArt from "./Art";
import { CATEGORIES } from "@/lib/projects";

const kindLabel = (p) => (p.sample ? "Sample" : p.own ? "Our product" : p.art === "mobile" ? "Mobile app" : "Website");

function Card({ p, onOpen }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
  };
  return (
    <button ref={ref} className="pcard" onMouseMove={move} onMouseLeave={() => (ref.current.style.transform = "")}
      onClick={() => onOpen(p)} aria-label={`${p.name}, ${p.sector}. Open details`}>
      <div className="pthumb"><ProjectArt p={p} /><span className={`badge ${p.sample ? "badge-sample" : ""}`}>{kindLabel(p)}</span></div>
      <div className="pinfo">
        <p className="pmeta">{p.sector} · {p.location}</p>
        <h3>{p.name}</h3>
        <ul className="tags">{p.stack.slice(0, 3).map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    </button>
  );
}

function Modal({ p, onClose }) {
  const btn = useRef(null);
  useEffect(() => {
    btn.current?.focus();
    const key = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="dialog" role="dialog" aria-modal="true" aria-label={p.name}
        initial={{ y: 40, opacity: 0, scale: 0.97 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()}>
        <button ref={btn} className="close" onClick={onClose} aria-label="Close details">×</button>
        <div className="dthumb"><ProjectArt p={p} /></div>
        <div className="dbody">
          <p className="pmeta">{kindLabel(p)} · {p.sector} · {p.location}</p>
          <h3>{p.name}</h3>
          <p>{p.summary}</p>
          {p.note && <p className="note">{p.note}</p>}
          <ul className="tags">
            {p.stack.map((s) => <li key={s}>{s}</li>)}
            {p.backend && <li className="be">Backend: {p.backend}</li>}
          </ul>
          <div className="dlinks">
            {(p.links || []).map((l, i) => (
              <a key={l.href} className={i === 0 ? "btn" : "btn btn-ghost"} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            ))}
            {p.sample && <Link className="btn" href="/contact">Request something similar</Link>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectGrid({ items, empty = "No projects in this category yet." }) {
  const [open, setOpen] = useState(null);
  return (
    <>
      {items.length === 0 && <p className="empty">{empty}</p>}
      <motion.ul layout className="pgrid">
        <AnimatePresence mode="popLayout">
          {items.map((p) => (
            <motion.li key={p.slug} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
              <Card p={p} onOpen={setOpen} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </>
  );
}
