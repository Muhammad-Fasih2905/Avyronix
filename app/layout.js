import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";
import Footer from "@/components/Footer";
import { ScrollBar } from "@/components/Extras";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: { default: "Avyronix | Software, AI, creative and care services", template: "%s | Avyronix" },
  description: "Avyronix delivers software, app and web development, AI, e-commerce, design, marketing, air duct cleaning, pet products and veterinary care across six countries.",
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0a0b" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <ScrollBar />
        <Shell footer={<Footer />}>{children}</Shell>
      </body>
    </html>
  );
}
