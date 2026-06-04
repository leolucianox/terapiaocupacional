import type { Metadata } from "next";
import { Inter, Poppins, Caveat } from "next/font/google";
import "./globals.css";

import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const description =
  "Terapia ocupacional com dedicação, cuidado e propósito. Atendimento em consultório e domiciliar com a Dra. Franciele Maria de Lima Rios Almeida (CREFITO-3).";

export const metadata: Metadata = {
  metadataBase: new URL("https://adapte-se.example.com"),
  title: {
    default: `${site.brand} — ${site.tagline} | ${site.city}`,
    template: `%s · ${site.brand}`,
  },
  description,
  keywords: [
    "terapia ocupacional",
    "terapeuta ocupacional",
    "atendimento domiciliar",
    "reabilitação",
    "autonomia",
    site.city,
  ],
  authors: [{ name: site.professional.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: `${site.brand} — ${site.tagline}`,
    description,
    siteName: site.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.tagline}`,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable} ${caveat.variable}`}
    >
      <body>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
