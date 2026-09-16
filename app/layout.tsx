import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = 'https://mortgage-payment-calculator.com';
const socialImage = '/images/articles/mortgage-payment-calculator-estimate-monthly-costs.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mortgage Payment Calculator | Refinancing, Affordability',
    template: '%s | Mortgage Payment Calculator',
  },
  description: 'Calculate mortgage payments, affordability, interest, refinancing savings, and loan costs with free mortgage calculators.',
  applicationName: 'Mortgage Payment Calculator',
  authors: [{ name: 'Mortgage Payment Calculator' }],
  creator: 'Mortgage Payment Calculator',
  publisher: 'Mortgage Payment Calculator',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mortgage Payment Calculator',
    title: 'Mortgage Payment Calculator | Mortgage ',
    description: 'Calculate mortgage payments, affordability, interest, refinancing savings, and loan costs.',
    images: [{ url: socialImage, width: 1200, height: 630, alt: 'Mortgage payment calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Payment Calculator | Mortgage Lab',
    description: 'Free mortgage calculators for payments, affordability, interest, and refinancing.',
    images: [socialImage],
  },
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#f8fafc] text-slate-900 antialiased font-sans min-h-screen flex flex-col">
        <div className="flex flex-col min-h-screen w-full relative">
          <Header />
          <div className="flex-1 flex flex-col min-w-0">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
