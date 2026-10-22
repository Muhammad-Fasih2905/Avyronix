import { Reveal } from "./Extras";

const STEPS = [
  ["Discover", "We listen first: your goals, users, budget and deadline. You get a clear scope and a fixed plan."],
  ["Design", "Wireframes, visuals and storyboards you can react to before any code is written."],
  ["Build", "Short build cycles with working previews, so you see progress every week."],
  ["Launch and support", "We launch, monitor and keep improving, with support from the same team that built it."],
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <Reveal>
        <h2 className="section-title">How a project runs</h2>
        <p className="section-lead">The same four steps whether we are building an app, a campaign or a cleaning schedule.</p>
      </Reveal>
      <ol className="steps">
        {STEPS.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.1}>
            <li>
              <span className="stepn" aria-hidden="true">{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
