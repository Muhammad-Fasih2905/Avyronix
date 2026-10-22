const TECH = ["Next.js", "React", "React Native", "Python", "Flask", "Django", "Firebase", "OHIF / DICOM", "AI services", "E-commerce", "iOS", "Android", "Arabic / English i18n"];

export default function Marquee() {
  const row = [...TECH, ...TECH];
  return (
    <div className="marquee" aria-label="Technologies we work with">
      <div className="marquee-track">
        {row.map((t, i) => <span key={i} aria-hidden={i >= TECH.length}>{t}</span>)}
      </div>
    </div>
  );
}
