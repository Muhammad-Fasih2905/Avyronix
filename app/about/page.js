import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import Presence from "@/components/Presence";
import Process from "@/components/Process";
import { Reveal } from "@/components/Extras";

export const metadata = { title: "About", description: "About Avyronix: one team for software, AI, creative work and care, serving clients in six countries." };

const VALUES = [
  ["One team", "Developers, designers, marketers and care specialists work together, so you manage one relationship, not five."],
  ["Clear scope", "You know what you are getting, when, and for how much before work begins."],
  ["Built to last", "We build products and services meant to keep working long after launch, and we stay available to support them."],
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Avyronix" title="One company for building, designing and caring" lead="Avyronix brings software, AI, creative production, air duct cleaning, pet products and veterinary care together under one roof. In 2023 we completed 5,700 projects for clients in Germany, the United Kingdom, Malaysia, the United States, Canada and the United Arab Emirates." />
      <Stats />
      <section className="section alt">
        <Reveal><h2 className="section-title">What we believe</h2></Reveal>
        <div className="values">
          {VALUES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}><div className="value"><h3>{t}</h3><p>{d}</p></div></Reveal>
          ))}
        </div>
      </section>
      <Process />
      <Presence />
    </>
  );
}
