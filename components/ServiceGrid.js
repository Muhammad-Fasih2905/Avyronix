"use client";
import Link from "next/link";
import Icon from "./Icon";
import { GROUPS } from "@/lib/data";
import { Reveal } from "./Extras";

const SPAN = { "software-development": 2, "ai-services": 2, "animal-care-veterinary": 4 };
const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

export default function ServiceGrid({ items, bento = false }) {
  return (
    <div className={bento ? "sgrid bento" : "sgrid"}>
      {items.map((s, i) => {
        const g = GROUPS.find((x) => x.id === s.group);
        return (
          <Reveal key={s.slug} delay={(i % 4) * 0.06} className={`scell ${bento ? "span" + (SPAN[s.slug] || 1) : ""}`}>
            <Link href={`/services/${s.slug}`} className="scard" style={{ "--c": g.color }} onMouseMove={spot}>
              <span className="sico"><Icon name={s.icon} size={26} stroke={1.6} /></span>
              <span className="sgroup">{g.title}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="slink">Learn more <Icon name="arrow" size={16} /></span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
