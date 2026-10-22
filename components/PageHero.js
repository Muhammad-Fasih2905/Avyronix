export default function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="pagehero" id="top">
      <div className="pagehero-in">
        {eyebrow && <p className="pill">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
