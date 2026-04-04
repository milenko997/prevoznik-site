import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './globals.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bar-Kop - Prevoz i Iskopavanje | kamion i bager",
  description: "Bar-Kop - Pouzdane usluge prevoza građevinskog materijala i iskopavanja. Kamion 5m3, bager 4t, odvoz šuta.",
  openGraph: {
    title: 'Bar-Kop - Prevoz i Iskopavanje | kamion i bager',
    description: 'Bar-Kop - Pouzdane usluge prevoza građevinskog materijala i iskopavanja. Kamion 5m3, bager 4t, odvoz šuta.',
    url: 'https://barkop.rs/',
    siteName: 'Bar-Kop',
    type: 'website',
    images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Bar-Kop - Prevoz i Iskopavanje",
    },
  ],
  },
  metadataBase: new URL('https://barkop.rs/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
