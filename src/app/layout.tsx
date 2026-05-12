import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

const description =
  'Travessias guiadas nos Lençóis Maranhenses com 12 guias nativos. Roteiros de 2 a 5 dias por lagoas escondidas, oásis e dunas. Saindo de Santo Amaro do Maranhão.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Travessias nos Lençóis Maranhenses`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    'Lençóis Maranhenses',
    'travessia Lençóis',
    'Santo Amaro do Maranhão',
    'trekking Maranhão',
    'agência Lençóis Maranhenses',
    'guia nativo Lençóis',
    'roteiro Atins',
    'turismo de aventura Maranhão',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Travessias guiadas nos Lençóis Maranhenses`,
    description,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lagoas dos Lençóis Maranhenses ao entardecer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} · Travessias guiadas nos Lençóis Maranhenses`,
    description,
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#FBF7EE',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
