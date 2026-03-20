import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Webify Meaux – Agence web à Meaux | Création de sites internet",
  description:
    "Webify Meaux, agence web basée à Meaux (77). Création de sites vitrines, refonte, SEO local et landing pages pour artisans et PME en Seine-et-Marne.",
  openGraph: {
    title: "Webify Meaux – Agence web à Meaux | Création de sites internet",
    description:
      "Webify Meaux, agence web basée à Meaux (77). Création de sites vitrines, refonte, SEO local et landing pages pour artisans et PME en Seine-et-Marne.",
    url: "https://webifymeaux.fr",
    type: "website",
    locale: "fr_FR",
    siteName: "Webify Meaux",
  },
  metadataBase: new URL("https://webifymeaux.fr"),
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Webify Meaux",
  description:
    "Agence web à Meaux spécialisée dans la création de sites internet pour artisans et PME en Seine-et-Marne.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Meaux",
    addressLocality: "Meaux",
    postalCode: "77100",
    addressCountry: "FR",
  },
  areaServed: [
    "Meaux",
    "Chessy",
    "Lagny-sur-Marne",
    "Bussy-Saint-Georges",
    "Claye-Souilly",
    "Trilport",
    "Esbly",
    "Serris",
    "Nanteuil-lès-Meaux",
  ],
  url: "https://webifymeaux.fr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
