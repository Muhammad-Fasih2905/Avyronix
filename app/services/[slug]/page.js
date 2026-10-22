import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectArt from "@/components/Art";
import Icon from "@/components/Icon";
import { SERVICES, GROUPS } from "@/lib/data";
import { PROJECTS } from "@/lib/projects";

export function generateStaticParams() { return SERVICES.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  return s ? { title: s.name, description: s.long } : {};
}

export default function ServicePage({ params }) {
  const i = SERVICES.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const s = SERVICES[i];
  const g = GROUPS.find((x) => x.id === s.group);
  const related = PROJECTS.filter((p) => p.cats.some((c) => s.cats.includes(c)));
  const lead = related[0];
  const next = SERVICES[(i + 1) % SERVICES.length];
  return (
    <>
      <PageHero eyebrow={g.title} title={s.name} lead={s.long}>
        <div className="hero-cta">
          <Link href={`/contact?service=${encodeURIComponent(s.name)}`} className="btn">Request this service</Link>
          <Link href={`/portfolio?cat=${s.cats[0]}`} className="btn btn-ghost">See related work</Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="detail">
          <div>
            <h2 className="section-title">What is included</h2>
            <ul className="checks">
              {s.bullets.map((b) => <li key={b}><Icon name="check" size={18} /> {b}</li>)}
            </ul>
          </div>
          {lead && <div className="detail-art"><ProjectArt p={lead} /></div>}
        </div>
      </section>
      <section className="section alt">
        <h2 className="section-title">Related work</h2>
        <p className="section-lead">{related.every((p) => p.sample) ? "Illustrative samples prepared by Avyronix for this service." : "Projects we have delivered for this service."}</p>
        <ProjectGrid items={related} />
      </section>
      <section className="section next">
        <p className="section-lead">Next service</p>
        <Link href={`/services/${next.slug}`} className="next-link">{next.name} <Icon name="arrow" size={26} /></Link>
      </section>
    </>
  );
}
