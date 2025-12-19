import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Deepgital — Agence Web et Créative',
  description: 'L\'agence qui construit ce que tu n\'as pas encore imaginé. Sites, apps, automatisations, vidéos — Deepgital transforme vos idées en outils concrets.',
  keywords: ['agence web', 'développement', 'automatisation', 'application mobile', 'vidéo IA', 'Next.js', 'React'],
  authors: [{ name: 'Deepgital' }],
  creator: 'Deepgital',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://deepgital.fr',
    siteName: 'Deepgital',
    title: 'Deepgital — Agence Web et Créative',
    description: 'L\'agence qui construit ce que tu n\'as pas encore imaginé.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepgital — Agence Web et Créative',
    description: 'L\'agence qui construit ce que tu n\'as pas encore imaginé.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FAFAFA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-display antialiased">
        {children}
      </body>
    </html>
  );
}
