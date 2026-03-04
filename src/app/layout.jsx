import { Barlow, Barlow_Condensed } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata = {
  title: "OCPV – Office d'aide à la Commercialisation des Produits Vivriers",
  description:
    "Pour des marchés mieux approvisionnés pour une Côte d'Ivoire bien nourrie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "var(--font-barlow), sans-serif",
          margin: 0,
          padding: 0,
        }}
        className={`${barlow.variable} ${barlowCondensed.variable}`}
      >
        <Navbar />
        <main style={{ paddingTop: 100 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
