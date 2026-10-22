"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { NAV, SERVICES, GROUPS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/data";

export default function Shell({ children, footer }) {
  const [menu, setMenu] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const timer = useRef(null);

  useEffect(() => { setMenu(false); setMega(false); }, [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    const k = (e) => { if (e.key === "Escape") { setMenu(false); setMega(false); } };
    document.addEventListener("keydown", k);
    return () => { window.removeEventListener("scroll", on); document.removeEventListener("keydown", k); };
  }, []);
  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; }, [menu]);

  const active = (href) => (href === "/" ? path === "/" : path.startsWith(href));
  const openMega = () => { clearTimeout(timer.current); setMega(true); };
  const closeMega = () => { timer.current = setTimeout(() => setMega(false), 140); };

  return (
    <>
      <header className={scrolled ? "hdr scrolled" : "hdr"}>
        <div className="navbar">
          <Link href="/" className="logo"><span className="logo-mark" aria-hidden="true" />Avyronix</Link>

          <nav className="navpills" aria-label="Primary">
            {NAV.map((n) => {
              const on = active(n.href);
              if (n.href === "/services") {
                return (
                  <div key={n.href} className="has-mega" onMouseEnter={openMega} onMouseLeave={closeMega}>
                    <button className={on ? "pill-link on" : "pill-link"} aria-expanded={mega} aria-haspopup="true" onClick={() => setMega((m) => !m)}>
                      {on && <motion.span layoutId="navpill" className="pill-bg" />}
                      <span>Services</span>
                      <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true" className={mega ? "chev up" : "chev"}><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <div className={mega ? "mega open" : "mega"} onMouseEnter={openMega} onMouseLeave={closeMega}>
                      <div className="mega-in">
                        {GROUPS.map((g) => (
                          <div key={g.id} className="mega-col" style={{ "--c": g.color }}>
                            <p className="mega-title"><i />{g.title}</p>
                            <ul>
                              {SERVICES.filter((s) => s.group === g.id).map((s) => (
                                <li key={s.slug}>
                                  <Link href={`/services/${s.slug}`} onClick={() => setMega(false)}>
                                    <span className="mico"><Icon name={s.icon} size={18} /></span>
                                    <span><b>{s.name}</b><small>{s.desc}</small></span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link href="/services" className="mega-all" onClick={() => setMega(false)}>View all services <Icon name="arrow" size={16} /></Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link key={n.href} href={n.href} className={on ? "pill-link on" : "pill-link"} aria-current={on ? "page" : undefined}>
                  {on && <motion.span layoutId="navpill" className="pill-bg" />}
                  <span>{n.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="nav-actions">
            <Link href="/contact" className="btn btn-small cta">Start a project <Icon name="arrow" size={16} /></Link>
            <button className="menu-btn" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
              <span className={menu ? "x" : ""} /><span className={menu ? "x" : ""} /><span className={menu ? "x" : ""} />
            </button>
          </div>
        </div>
      </header>

      <div className={menu ? "mobile open" : "mobile"} aria-hidden={!menu}>
        <nav aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={active(n.href) ? "m-link on" : "m-link"} tabIndex={menu ? 0 : -1}>
              <Icon name={n.icon} size={22} /> {n.label}
            </Link>
          ))}
          <p className="side-label">Services</p>
          <ul className="m-services">
            {SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} tabIndex={menu ? 0 : -1}>{s.name}</Link></li>)}
          </ul>
        </nav>
        <div className="m-actions">
          <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost" tabIndex={menu ? 0 : -1}><Icon name="phone" size={18} /> {PHONE_DISPLAY}</a>
          <Link href="/contact" className="btn" tabIndex={menu ? 0 : -1}>Start a project</Link>
        </div>
      </div>

      <div id="content">{children}</div>
      {footer}
    </>
  );
}
