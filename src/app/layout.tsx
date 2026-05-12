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
  'Seis circuitos guiados exclusivos nos Lençóis Maranhenses saindo de Santo Amaro do Maranhão. Lagoas escondidas, grupos pequenos e guias nativos credenciados.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Circuitos nos Lençóis Maranhenses`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    'Lençóis Maranhenses',
    'Santo Amaro do Maranhão',
    'circuitos Lençóis',
    'passeios Lençóis Maranhenses',
    'turismo Santo Amaro',
    'guia nativo Lençóis',
    'Circuito Emendadas',
    'Circuito Betânia',
    'Brisa Azul Viagens',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Circuitos nos Lençóis Maranhenses`,
    description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Lagoas dos Lençóis Maranhenses ao entardecer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} · Circuitos nos Lençóis Maranhenses`,
    description,
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
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
