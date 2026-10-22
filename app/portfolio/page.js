import PageHero from "@/components/PageHero";
import PortfolioView from "@/components/PortfolioView";

export const metadata = { title: "Portfolio", description: "Websites, mobile apps and sample projects across all Avyronix services." };

export default function PortfolioPage({ searchParams }) {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Work across every service" lead="Live websites and published apps for clients in the UAE, USA and Italy, plus samples for our creative, AI, e-commerce and care services." />
      <section className="section tight"><PortfolioView initial={searchParams?.cat || "all"} /></section>
    </>
  );
}
