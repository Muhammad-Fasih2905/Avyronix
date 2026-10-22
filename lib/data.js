export const PHONE_DISPLAY = "+1 571 356 9831";
export const PHONE_TEL = "+15713569831";
export const WHATSAPP = "15713569831";

export const GROUPS = [
  { id: "digital", title: "Digital", color: "#ff5b7a", blurb: "Products, platforms and AI, built to run in production." },
  { id: "creative", title: "Creative", color: "#c9c3c6", blurb: "Visuals and stories that get your brand noticed." },
  { id: "care", title: "Home & Pet", color: "#d9335a", blurb: "Hands-on services for clean homes and healthy animals." },
];

export const SERVICES = [
  { slug: "software-development", name: "Software development", group: "digital", icon: "code",
    desc: "Custom systems built around how your business works.",
    long: "From internal tools to customer-facing platforms, we design and build software that fits your processes instead of forcing you to fit someone else's.",
    bullets: ["Requirements workshops and technical planning", "Web platforms, dashboards and internal tools", "API design and third-party integrations", "Python (Flask, Django) back ends with React and Next.js front ends"], cats: ["web"] },
  { slug: "application-development", name: "Application development", group: "digital", icon: "phone",
    desc: "iOS, Android and cross-platform apps.",
    long: "We build mobile apps that people keep using, from booking and payments to location tracking and real-time features, and we take them all the way to the stores.",
    bullets: ["iOS and Android apps with React Native", "Booking, payments, geofencing and real-time rooms", "App Store and Google Play publishing", "Updates and support after launch"], cats: ["mobile"] },
  { slug: "website-development", name: "Website development", group: "digital", icon: "browser",
    desc: "Fast, responsive sites on modern stacks.",
    long: "Marketing sites and booking platforms that load quickly, rank well and work on every screen, in one language or several.",
    bullets: ["Responsive Next.js websites", "Bilingual (Arabic and English) and multi-location SEO set-ups", "Booking and enquiry flows", "Deployment on Vercel, Netlify or Firebase"], cats: ["web"] },
  { slug: "ai-services", name: "Complete AI services", group: "digital", icon: "chip",
    desc: "Chatbots, automation, analytics and model integration.",
    long: "We put AI to work on real tasks: answering customers, automating repetitive steps and turning your data into clear dashboards.",
    bullets: ["Chatbots and support assistants", "Workflow automation", "Analytics and reporting dashboards", "AI models integrated into your existing products"], cats: ["ai"] },
  { slug: "ecommerce-services", name: "E-commerce services", group: "digital", icon: "cart",
    desc: "Stores, payments, catalogs and fulfilment flows.",
    long: "Online stores built for conversion, with the catalog, checkout and delivery options your customers expect.",
    bullets: ["Storefront design and development", "Catalogs, bulk and custom ordering", "Payments, pickup and delivery flows", "Product listing and content set-up"], cats: ["ecommerce"] },
  { slug: "graphic-design-video-editing", name: "Graphic design & video editing", group: "creative", icon: "play",
    desc: "Identity, ads, motion and finished edits.",
    long: "Brand identities, ad creatives and video edits with a consistent look, delivered ready for print, web and social.",
    bullets: ["Logos and brand identity systems", "Posters, ads and social creatives", "Video editing, color and motion titles", "Brand guidelines your team can follow"], cats: ["design"] },
  { slug: "social-media-marketing", name: "Social media marketing", group: "creative", icon: "megaphone",
    desc: "Content, campaigns and audience growth.",
    long: "Planned, designed and published content that keeps your brand visible and gives your audience a reason to engage.",
    bullets: ["Content calendars and creation", "Campaign planning and management", "Community management", "Reporting on reach and engagement"], cats: ["social"] },
  { slug: "storyboard", name: "Storyboard", group: "creative", icon: "frames",
    desc: "Scene-by-scene plans for films, ads and explainers.",
    long: "Before a camera rolls or an animator starts, a storyboard shows exactly what will happen, shot by shot.",
    bullets: ["Script-to-frame planning", "Shot lists and camera notes", "Animatics for ads and explainers", "Review rounds until you approve"], cats: ["storyboard"] },
  { slug: "air-duct-cleaning", name: "Air duct cleaning", group: "care", icon: "wind",
    desc: "Cleaner airflow for homes and workplaces.",
    long: "Dust, debris and allergens build up inside ducts over time. We clean the full system so air moves freely and rooms stay fresher.",
    bullets: ["Inspection of duct runs and vents", "Cleaning of supply and return ducts", "Vent and grille cleaning", "Before and after photos"], cats: ["duct"] },
  { slug: "pet-accessories", name: "Pet accessories", group: "care", icon: "paw",
    desc: "Everyday gear for dogs, cats and small pets.",
    long: "Practical, good-looking accessories for the pets you love, from walks to mealtime to naps.",
    bullets: ["Collars, leashes and harnesses", "Feeding bowls and beds", "Toys and grooming supplies", "Gift sets for new pet owners"], cats: ["pet"] },
  { slug: "animal-care-veterinary", name: "Animal care & veterinary services", group: "care", icon: "heart",
    desc: "Routine care and veterinary support.",
    long: "Caring support for your animals, from routine check-ups to diagnostics and follow-up plans.",
    bullets: ["Routine check-ups and vaccinations", "Diagnostics and lab support", "Treatment plans and follow-ups", "Advice on nutrition and everyday care"], cats: ["vet"] },
];

export const COUNTRIES = [
  { name: "Germany", flag: "🇩🇪", cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"] },
  { name: "United Kingdom", flag: "🇬🇧", cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"] },
  { name: "Malaysia", flag: "🇲🇾", cities: ["Kuala Lumpur", "George Town", "Johor Bahru", "Ipoh", "Malacca City"] },
  { name: "United States", flag: "🇺🇸", cities: ["New York City", "Los Angeles", "Chicago", "Houston", "Miami"] },
  { name: "Canada", flag: "🇨🇦", cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"] },
  { name: "United Arab Emirates", flag: "🇦🇪", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"] },
];

export const NAV = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Services", href: "/services", icon: "grid" },
  { label: "Portfolio", href: "/portfolio", icon: "briefcase" },
  { label: "About", href: "/about", icon: "users" },
  { label: "Contact", href: "/contact", icon: "mail" },
];
