import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  Inter,
  Roboto,
  Open_Sans,
  Lato,
  Montserrat,
  Source_Sans_3,
  Poppins,
  Nunito_Sans,
  Playfair_Display,
  Merriweather,
  PT_Serif,
  Space_Grotesk,
} from "next/font/google";
import { ConditionalLayout } from "./components/conditional-layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";

// Configure Inter as the primary font for body text
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Configure Space Grotesk as heading font (similar aesthetic to Faculty Glyphic)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

// Keep other Google Fonts for the font showcase
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Xiaozao Wang",
    template: "%s | Xiaozao Portfolio",
  },
  description:
    "Designer & Developer - Interactive portfolio showcasing creative projects and technical expertise.",
  openGraph: {
    title: "Xiaozao Portfolio",
    description:
      "Designer & Developer - Interactive portfolio showcasing creative projects and technical expertise.",
    url: baseUrl,
    siteName: "Xiaozao Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black font-inter",
        inter.variable,
        spaceGrotesk.variable,
        GeistSans.variable,
        GeistMono.variable,
        roboto.variable,
        openSans.variable,
        lato.variable,
        montserrat.variable,
        sourceSans.variable,
        poppins.variable,
        nunito.variable,
        playfair.variable,
        merriweather.variable,
        ptSerif.variable
      )}
    >
      <body className="antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
