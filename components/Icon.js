const P = {
  home: "M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  briefcase: "M3 8h18v12H3zM8 8V5h8v3M3 13h18",
  users: "M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 11a3 3 0 000-6M21 20c0-2.5-1.7-4.2-4-4.8",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  pin: "M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  up: "M12 19V5M6 11l6-6 6 6",
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  browser: "M3 5h18v14H3zM3 9h18M6.5 7h.01M9.5 7h.01",
  chip: "M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 7h10v10H7zM10 10h4v4h-4z",
  cart: "M3 4h2l2 11h11l2-8H6M9 20h.01M17 20h.01",
  play: "M3 5h18v14H3zM10 9l5 3-5 3z",
  megaphone: "M3 11v2l13 5V6L3 11zM19 9v6M7 14l1 5",
  frames: "M3 4h8v7H3zM13 4h8v7h-8zM3 13h8v7H3zM13 13h8v7h-8z",
  wind: "M3 8h11a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h8",
  paw: "M12 14c-3 0-5 2.2-4 4s3 1.6 4 1.6 3 .4 4-1.6-1-4-4-4zM5.5 11.5h.01M18.5 11.5h.01M9 7.5h.01M15 7.5h.01",
  heart: "M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10zM12 9v5M9.5 11.5h5",
  chat: "M4 5h16v11H9l-5 4z",
  check: "M5 12l5 5 9-10",
};
export default function Icon({ name, size = 20, stroke = 1.8 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name] || P.grid} />
    </svg>
  );
}
