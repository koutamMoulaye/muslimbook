import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Comment parler à Allah pendant les épreuves – Nana Fatouma Koutam",
  description:
    "Un livre pour ceux qui souffrent en silence et cherchent Allah dans la tempête. Découvrez comment transformer vos larmes en invocations, votre peur en confiance.",
  keywords: [
    "parler à Allah",
    "épreuves islam",
    "foi islam",
    "dua épreuve",
    "Nana Fatouma Koutam",
    "livre islamique",
    "patience islam",
    "tawakul",
  ],
  openGraph: {
    title: "Comment parler à Allah pendant les épreuves",
    description:
      "Pour ceux qui souffrent en silence et cherchent Allah dans la tempête.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
