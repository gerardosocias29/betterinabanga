import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import HotlineBar from '@/components/layout/HotlineBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#043e23',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'BetterInabanga.org | Public Transparency & Citizen Services - Inabanga, Bohol',
    template: '%s | BetterInabanga.org',
  },
  description:
    'Community-maintained public transparency and citizen services portal for the Municipality of Inabanga, Bohol, Philippines. Empowering citizens with direct access to local public services, elected officials, 20% development fund projects, municipal budgets, and emergency hotlines.',
  keywords: [
    'BetterInabanga',
    'BetterInabanga.org',
    'Inabanga Bohol',
    'LGU Inabanga',
    'Inabanga transparency',
    'Bohol municipal services',
    'Mayor Dexter Ancla',
    'Inabanga hotlines',
    'Inabanga barangays',
  ],
  authors: [{ name: 'BetterInabanga Community' }],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://betterinabanga.vercel.app/',
    siteName: 'BetterInabanga.org',
    title: 'BetterInabanga.org | Public Transparency & Citizen Services',
    description:
      'Community-maintained digital transparency portal for Inabanga, Bohol. Discover citizen charter services, officials, barangays, budgets, and emergency hotlines.',
  },
  icons: {
    icon: [
      { url: '/images/better_inabanga_logo.png' },
      { url: '/images/better_inabanga_logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/images/better_inabanga_logo.png',
    shortcut: '/images/better_inabanga_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-sans bg-slate-50 text-slate-900 selection:bg-inabanga-700 selection:text-white">
        <HotlineBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
