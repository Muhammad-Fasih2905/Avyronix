import { Counter, Reveal } from "./Extras";

const STATS = [
  { n: 5700, s: "", l: "projects delivered in 2023" },
  { n: 6, s: "", l: "countries with active clients" },
  { n: 30, s: "", l: "cities served" },
  { n: 11, s: "", l: "services under one roof" },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Avyronix in numbers">
      {STATS.map((x, i) => (
        <Reveal key={x.l} delay={i * 0.08} className="stat">
          <strong><Counter to={x.n} suffix={x.s} /></strong>
          <span>{x.l}</span>
        </Reveal>
      ))}
    </section>
  );
}
