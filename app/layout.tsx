import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import './globals.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bar-Kop Novi Sad - Odvoz Šuta, Kamionski Prevoz i Iskop Bagerom',
  description:
    'Povoljan odvoz šuta u Novom Sadu, kamionski prevoz materijala i iskop zemlje mini bagerom. Razbijanje betona i kopanje kanala. Kamion 5m³ i bager 4t.',
  openGraph: {
    title: 'Bar-Kop Novi Sad - Odvoz Šuta, Kamionski Prevoz i Iskop Bagerom',
    description:
      'Povoljan odvoz šuta u Novom Sadu, kamionski prevoz materijala i iskop zemlje mini bagerom. Razbijanje betona i kopanje kanala. Kamion 5m³ i bager 4t.',
    url: 'https://barkop.rs/',
    siteName: 'Bar-Kop',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bar-Kop - Prevoz i Iskopavanje',
      },
    ],
  },
  metadataBase: new URL('https://barkop.rs/'),
  alternates: {
    canonical: 'https://barkop.rs/',
  },
  verification: {
    google: 'f7idEEtnALW_QH5zPNXFRYiOnsffcyeEV2Vi7snPMKY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='sr'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId='G-77B80JC37R' />
        <GoogleTagManager gtmId='GTM-PRBG4S4N' />
      </body>
    </html>
  );
}
