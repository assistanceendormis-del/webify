import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "WEBIFY MEAUX — Création de sites internet premium à Meaux | Agence web",
  description:
    "WEBIFY MEAUX, agence web à Meaux spécialisée dans la création et la refonte de sites internet premium. Sites modernes, élégants et pensés pour convertir. Devis gratuit.",
  keywords: [
    "agence web Meaux",
    "création site internet Meaux",
    "refonte site web Meaux",
    "création site vitrine Meaux",
    "agence création site internet Seine-et-Marne",
    "site web premium Meaux",
    "webdesign Meaux",
  ],
  authors: [{ name: "WEBIFY MEAUX" }],
  openGraph: {
    title: "WEBIFY MEAUX — Création de sites internet premium à Meaux",
    description:
      "Sites web modernes, élégants et pensés pour convertir. Agence web à Meaux pour entreprises, indépendants et particuliers.",
    type: "website",
    locale: "fr_FR",
    siteName: "WEBIFY MEAUX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "WEBIFY MEAUX",
              description:
                "Agence web spécialisée dans la création de sites internet premium à Meaux",
              url: "https://webifymeaux.fr",
              telephone: "+33 1 23 45 67 89",
              email: "contact@webifymeaux.fr",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Meaux",
                addressRegion: "Seine-et-Marne",
                addressCountry: "FR",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 48.9601,
                  longitude: 2.8786,
                },
                geoRadius: "30000",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
