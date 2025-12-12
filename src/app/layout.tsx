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
  description: 'Deepgital accompagne les marques ambitieuses avec l\'IA vidéo, le développement sur mesure et l\'automatisation.',
  keywords: ['agence web', 'agence créative', 'IA vidéo', 'développement web', 'automatisation', 'Paris'],
  authors: [{ name: 'Deepgital' }],
  creator: 'Deepgital',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://deepgital.fr',
    siteName: 'Deepgital',
    title: 'Deepgital — Agence Web et Créative',
    description: 'Deepgital accompagne les marques ambitieuses avec l\'IA vidéo, le développement sur mesure et l\'automatisation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepgital — Agence Web et Créative',
    description: 'Deepgital accompagne les marques ambitieuses avec l\'IA vidéo, le développement sur mesure et l\'automatisation.',
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
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
