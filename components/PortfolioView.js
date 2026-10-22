"use client";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import { CATEGORIES, PROJECTS, countFor } from "@/lib/projects";

export default function PortfolioView({ initial = "all" }) {
  const [cat, setCat] = useState(CATEGORIES.some((c) => c.id === initial) ? initial : "all");
  const items = PROJECTS.filter((p) => cat === "all" || p.cats.includes(cat));
  const current = CATEGORIES.find((c) => c.id === cat);
  const onlySamples = items.length > 0 && items.every((p) => p.sample);
  return (
    <div className="pview">
      <div className="filter" aria-label="Portfolio categories">
        <div className="filter-list" role="tablist">
          {CATEGORIES.map((c) => (
            <button key={c.id} role="tab" aria-selected={cat === c.id} className={cat === c.id ? "fbtn on" : "fbtn"} onClick={() => setCat(c.id)}>
              <span>{c.label}</span><small>{countFor(c.id)}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="pview-main">
        <div className="pview-head">
          <h2>{current.label}</h2>
          <p>{items.length} {items.length === 1 ? "project" : "projects"}</p>
        </div>
        {onlySamples && <p className="notice">These are illustrative samples prepared by Avyronix to show our style and approach for this service.</p>}
        <ProjectGrid items={items} />
      </div>
    </div>
  );
}
