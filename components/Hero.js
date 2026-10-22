"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GROUPS } from "@/lib/data";
import HeroVisual from "./HeroVisual";
import "./Hero.css";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const line = { hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } } };
const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

export default function Hero() {
  return (
    <section id="top" className="hx">
      <div className="hx-bg" aria-hidden="true">
        <div className="hx-aurora a1" /><div className="hx-aurora a2" /><div className="hx-grid" />
      </div>
      <div className="hx-in">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
          <motion.p variants={fade} className="pill">Software · AI · Creative · Care</motion.p>
          <h1 className="hero-title">
            {["Build it.", "Design it.", "Care for it."].map((t) => (
              <span className="mask" key={t}><motion.span variants={line}>{t}</motion.span></span>
            ))}
          </h1>
          <motion.p variants={fade} className="hero-sub">
            Avyronix completed 5,700 projects in 2023, from custom software and mobile apps to marketing, air duct cleaning and veterinary care, for clients in six countries.
          </motion.p>
          <motion.div variants={fade} className="hero-cta">
            <Link className="btn" href="/portfolio">View our work</Link>
            <Link className="btn btn-ghost" href="/services">Explore services</Link>
          </motion.div>
          <motion.ul variants={fade} className="legend">
            {GROUPS.map((g) => <li key={g.id} style={{ "--c": g.color }}><i />{g.title}</li>)}
          </motion.ul>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}