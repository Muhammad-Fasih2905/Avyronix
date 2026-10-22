import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { GROUPS, SERVICES } from "@/lib/data";

export const metadata = { title: "Services", description: "All Avyronix services: software, apps, websites, AI, e-commerce, design, marketing, storyboards, air duct cleaning, pet accessories and veterinary care." };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What we do" title="Eleven services, three kinds of work" lead="Digital products, creative work, and hands-on care for homes and pets. Choose one service or combine several." />
      {GROUPS.map((g) => (
        <section key={g.id} className="section" id={g.id}>
          <h2 className="section-title">{g.title}</h2>
          <p className="section-lead">{g.blurb}</p>
          <ServiceGrid items={SERVICES.filter((s) => s.group === g.id)} />
        </section>
      ))}
    </>
  );
}
