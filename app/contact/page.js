import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/data";

export const metadata = { title: "Contact", description: "Contact Avyronix by phone or WhatsApp to discuss your project." };

export default function Contact({ searchParams }) {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you need" lead="Choose the services you want, describe the project, and we will reply on WhatsApp. Prefer to talk? Call us." />
      <section className="section">
        <div className="contact-grid">
          <div className="contact-info">
            <a className="info-card" href={`tel:${PHONE_TEL}`}><Icon name="phone" size={22} /><span><b>Call</b>{PHONE_DISPLAY}</span></a>
            <a className="info-card" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={22} /><span><b>WhatsApp</b>Message us directly</span></a>
            <div className="info-card"><Icon name="pin" size={22} /><span><b>Office</b>West Virginia, USA</span></div>
            <div className="info-card"><Icon name="users" size={22} /><span><b>Clients in</b>Germany, UK, Malaysia, USA, Canada, UAE</span></div>
          </div>
          <ContactForm preset={searchParams?.service} />
        </div>
      </section>
    </>
  );
}
