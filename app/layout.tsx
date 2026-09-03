import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-77B80JC37R'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-77B80JC37R');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id='google-tag-manager' strategy='afterInteractive'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRBG4S4N');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-PRBG4S4N'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
