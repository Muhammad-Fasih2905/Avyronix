import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import ServiceGrid from "@/components/ServiceGrid";
import ProjectGrid from "@/components/ProjectGrid";
import Process from "@/components/Process";
import { Reveal } from "@/components/Extras";
import { SERVICES } from "@/lib/data";
import { PROJECTS, FEATURED_SLUGS } from "@/lib/projects";

export default function Home() {
  const featured = FEATURED_SLUGS.map((s) => PROJECTS.find((p) => p.slug === s));
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <section className="section">
        <Reveal>
          <h2 className="section-title">Everything you need, from one team</h2>
          <p className="section-lead">Eleven services in three groups: digital products, creative work, and hands-on care for homes and pets.</p>
        </Reveal>
        <ServiceGrid items={SERVICES} bento />
      </section>
      <section className="section alt">
        <Reveal className="head-row">
          <div>
            <h2 className="section-title">Work we are proud of</h2>
            <p className="section-lead">Live websites, published apps and sample projects across our services. Select any card for details.</p>
          </div>
          <Link href="/portfolio" className="btn btn-ghost">See full portfolio</Link>
        </Reveal>
        <ProjectGrid items={featured} />
      </section>
      <Process />
    </>
  );
}
