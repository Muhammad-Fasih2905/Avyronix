import Link from "next/link";
import Icon from "./Icon";
import { NAV, SERVICES, COUNTRIES, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div>
          <p className="pill">Let's work together</p>
          <h2>Have a project in mind? Let's build it.</h2>
          <p>Tell us what you need and we will get back to you quickly.</p>
        </div>
        <div className="footer-cta-actions">
          <Link href="/contact" className="btn">Start a project <Icon name="arrow" size={18} /></Link>
          <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost"><Icon name="phone" size={18} /> {PHONE_DISPLAY}</a>
        </div>
      </div>

      <div className="footer-grid">
        <div className="f-brand">
          <Link href="/" className="logo"><span className="logo-mark" aria-hidden="true" />Avyronix</Link>
          <p>Software, AI, creative work, air duct cleaning, pet products and veterinary care from one team. 5,700 projects delivered in 2023.</p>
          <div className="f-cards">
            <a href={`tel:${PHONE_TEL}`}><Icon name="phone" size={18} /><span><small>Call us</small>{PHONE_DISPLAY}</span></a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={18} /><span><small>WhatsApp</small>Message us</span></a>
            <div><Icon name="pin" size={18} /><span><small>Office</small>West Virginia, USA</span></div>
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <ul>{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>{NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
          <h3 className="mt">We work in</h3>
          <ul>{COUNTRIES.map((c) => <li key={c.name}><span aria-hidden="true">{c.flag}</span> {c.name}</li>)}</ul>
        </div>
      </div>

      <div className="footer-mark" aria-hidden="true">AVYRONIX</div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Avyronix. All rights reserved.</p>
      </div>
    </footer>
  );
}
