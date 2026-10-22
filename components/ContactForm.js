"use client";
import { useState } from "react";
import { WHATSAPP, SERVICES } from "@/lib/data";

export default function ContactForm({ preset }) {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [picked, setPicked] = useState(preset ? [preset] : []);
  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  const send = (e) => {
    e.preventDefault();
    const svc = picked.length ? ` I'm interested in: ${picked.join(", ")}.` : "";
    const text = `Hi Avyronix, I'm ${name || "a new client"}.${svc} ${msg}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };
  return (
    <form onSubmit={send} className="form">
      <fieldset>
        <legend>Services you need</legend>
        <div className="chips">
          {SERVICES.map((s) => (
            <button type="button" key={s.slug} aria-pressed={picked.includes(s.name)} className={picked.includes(s.name) ? "chip on" : "chip"} onClick={() => toggle(s.name)}>{s.name}</button>
          ))}
        </div>
      </fieldset>
      <label>Your name<input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
      <label>Project details<textarea rows={5} required value={msg} onChange={(e) => setMsg(e.target.value)} /></label>
      <button className="btn" type="submit">Send on WhatsApp</button>
    </form>
  );
}
